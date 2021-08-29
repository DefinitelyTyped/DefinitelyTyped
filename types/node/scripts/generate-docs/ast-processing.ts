import {
    JSDocTag,
    Printer,
    TypeChecker,
    isFunctionDeclaration,
    EmitHint,
    addSyntheticLeadingComment,
    SyntaxKind,
    Node,
    FunctionDeclaration,
    TransformationContext,
    JSDocUnknownTag,
    JSDocSeeTag,
    ClassDeclaration,
    isClassDeclaration,
    isMethodDeclaration,
    MethodDeclaration,
    Identifier,
    JSDocReturnTag,
    JSDocParameterTag,
    PropertyDeclaration,
    isPropertyDeclaration,
    isMethodSignature,
    MethodSignature,
    InterfaceDeclaration,
    isInterfaceDeclaration,
    isPropertySignature,
    PropertySignature,
    isConstructorTypeNode,
    isTypeLiteralNode,
} from "typescript";
import { fixupHtmlDocs, fixupLocalLinks } from "./html-doc-processing";
import { ClassDocNode, MethodDocNode, ModuleDocNode, PropertyDocNode, SignatureDocNode } from "./node-doc-processing";
import { getIndent, getPropertyName, isNamedModuleDeclaration, nodeWarning, removeCommentsRecursive } from "./ast-utils";
import { contextDeduper, replaceLineBreaks, wordWrap } from "./utils";

interface ProcessData {
    text: string;
    tags: JSDocTag[];
}

enum JSDocMatchResult {
    Ok,
    Ignore,
    Failed,
}

interface BadProcessResult {
    status: JSDocMatchResult.Failed | JSDocMatchResult.Ignore;
}

interface GoodProcessResult {
    status: JSDocMatchResult.Ok;
    data: ProcessData;
    postprocess?(res: string): string;
}

export interface DocAugmentationContext {
    indent: number;
    readonly printer: Printer;
    readonly typeChecker: TypeChecker;
    readonly moduleDocs: ModuleDocNode;
    readonly transformationContext: TransformationContext;
}

type JSDocResult = GoodProcessResult | BadProcessResult;

const ignoreFunctions = new Set(['pseudoRandomBytes', '___promisify__']);

const allowedDefaultValueWords = new Set(['true', 'false']);

class TagHelper {
    constructor(private readonly docContext: DocAugmentationContext) {
    }

    /**
     * This is needed as prettier doesn't really deal with JSDoc
     */
    private fixupCommentFormatting(desc: string, tagName: string): string {
        const maxWidth = maxLineLength - this.docContext.indent - jsDocLinePrefixLength - tagName.length - 2; // -2 `@<tag> `
        // TODO: For some reason `createJSDoc` does not create the ` * ` prefix for multi-line tag comments...
        const lines = wordWrap(fixupLocalLinks(replaceLineBreaks(desc), this.docContext.moduleDocs.name), maxWidth).split('\n');
        for (let i = 1; i < lines.length; ++i) {
            lines[i] = ` * ${lines[i]}`;
        }
        return lines.join('\n');
    }

    private createUnknownTag(type: string, text: string): JSDocUnknownTag {
        const { factory } = this.docContext.transformationContext;
        return factory.createJSDocUnknownTag(
            factory.createIdentifier(type),
            this.fixupCommentFormatting(text, type)
        );
    }

    private createParamTag(name: string, description: string, defaultValue?: string): JSDocParameterTag {
        const { factory } = this.docContext.transformationContext;
        if (defaultValue) {
            const firstIndex = defaultValue.indexOf('`');
            const secondIdx = firstIndex > -1 ? defaultValue.indexOf('`', firstIndex + 1) : -1;
            if (secondIdx > 0) {
                defaultValue = defaultValue.slice(0, secondIdx + 1);
            }
            defaultValue = defaultValue.replaceAll(/[`\[\]]/g, '');
            if (defaultValue.length <= 32 && defaultValue !== 'undefined') {
                // sometimes strings are not wrapped correctly.
                if (!defaultValue.includes('.') && !/^[0-9']/.test(defaultValue) && !allowedDefaultValueWords.has(defaultValue)) {
                    defaultValue = `'${defaultValue}'`;
                }
                name = `[${name}=${defaultValue}]`;
            }
        }
        return factory.createJSDocParameterTag(undefined,
            factory.createIdentifier(name),
            false,
            undefined,
            true,
            this.fixupCommentFormatting(description, `param ${name}`)
        );
    }

    createSinceTag(text: string): JSDocUnknownTag {
        // no comment fixup since it's just versions
        return this.createUnknownTag('since', text);
    }

    createExperimentalTag(): JSDocUnknownTag {
        return this.createUnknownTag('experimental', '');
    }

    createDeprecatedTag(text: string): JSDocUnknownTag {
        // Would use factory.creatJSDocDeprecated tag but that doesn't work...
        return this.createUnknownTag('deprecated', this.fixupCommentFormatting(text, 'deprecated'));
    }

    createSeeLinkTag(url: string, text: string): JSDocSeeTag {
        const { factory } = this.docContext.transformationContext;
        return this.docContext.transformationContext.factory.createJSDocSeeTag(
            factory.createIdentifier('see'),
            undefined, `[${text}](${url})`);
    }

    private createReturnTag(text: string): JSDocReturnTag {
        const { factory } = this.docContext.transformationContext;
        return factory.createJSDocReturnTag(
            factory.createIdentifier('return'),
            undefined,
            this.fixupCommentFormatting(text, 'return')
        );
    }

    /**
     * Generates common tags eg. `@deprecated` `@experimental` description etc.
     */
    extractCommonTags({ meta, stabilityText, stability }: MethodDocNode | ModuleDocNode | ClassDocNode | PropertyDocNode, moduleName: string): JSDocTag[] {
        const tags: JSDocTag[] = [];
        if (meta?.added) {
            tags.push(this.createSinceTag(meta.added.join(', ')));
        }
        stabilityText = fixupLocalLinks(stabilityText ?? '', moduleName);
        if (meta?.deprecated) {
            let str = `Since ${meta.deprecated.join()}`;
            if (stabilityText) {
                str += ` - ${stabilityText.replace('Deprecated: ', '').replace('Deprecated. ', '')}`;
            }
            tags.push(this.createDeprecatedTag(str));
            return tags;
        }
        switch (stability) {
            case Stability.Deprecated:
                tags.push(this.createDeprecatedTag((stabilityText ?? '').replace('Deprecated: ', '').replace('Deprecated. ', '')));
                break;
            case Stability.Experimental:
                tags.push(this.createExperimentalTag());
                break;
            case Stability.Legacy:
                tags.push(this.createDeprecatedTag(stabilityText?.replace('Legacy. ', '') ?? 'Legacy API'));
                break;
        }
        return tags;
    }

    /**
     * Generates param tags based on tags.
     * TODO: Ensure jsdoc matches signature...
     */
    extractParamTags(sigDoc: SignatureDocNode, moduleName: string): JSDocTag[] {
        const tags: JSDocTag[] = [];
        for (const param of sigDoc.params) {
            if (param.desc || param.default) {
                tags.push(this.createParamTag(param.name.replaceAll('.', ''), param.desc ?? '', param.default));
            }
        }
        if (sigDoc.return?.desc) {
            tags.push(this.createReturnTag(fixupLocalLinks(sigDoc.return.desc, moduleName)));
        }
        return tags;
    }
}

/**
 * Matches a class declaration to a class in a module document node.
 */
function matchClassOrInterfaceDoc(moduleDocs: ModuleDocNode, node: ClassDeclaration | InterfaceDeclaration): ClassDocNode | undefined {
    return moduleDocs.classes?.find(m => m.name === node.name?.escapedText || m.name.replace(moduleDocs.name + '.', '') === node.name?.escapedText);
}

enum Stability {
    Deprecated = 0,
    Experimental = 1,
    Stable = 2,
    Legacy = 3
}

// Used to avoid generating duplicate docs for overloads.
const processedFunctions = new Set<MethodDocNode>();

const eventEmitterMethods = new Set([
    'addListener',
    'emit',
    'getEventListener',
    'listenerCount',
    'off',
    'on',
    'once',
    'prependListener',
    'prependOnceListener',
    'removeListener'
]);
const processedInstanceMethods = contextDeduper<Node, string>();
const processedStaticMethods = contextDeduper<Node, string>();

const maxLineLength = 200;
const jsDocLinePrefixLength = 3; // ' * '
export class NodeProcessingContext {
    private readonly tagHelper: TagHelper;
    constructor(private readonly context: DocAugmentationContext) {
        this.tagHelper = new TagHelper(context);
    }

    private fixupDescriptionFormatting(desc: string | undefined, moduleName: string): string {
        if (!desc) {
            return '';
        }
        desc = fixupHtmlDocs(desc, {
            moduleName,
        });
        const maxWidth = maxLineLength - this.context.indent - jsDocLinePrefixLength;
        desc = desc.split('\n').map(l => wordWrap(l, maxWidth)).join('\n');
        return desc;
    }

    /**
     * Generates data that is common for all functions/methods.
     */
    private getCallSignatureDocData(moduleDocs: ModuleDocNode, methodDoc: MethodDocNode): ProcessData {
        const { desc, signatures } = methodDoc;
        let tags = this.tagHelper.extractCommonTags(methodDoc, moduleDocs.name);
        const [sig] = signatures; // TODO: Multi sig
        if (sig) {
            tags = tags.concat(this.tagHelper.extractParamTags(sig, moduleDocs.name));
        }
        return {
            text: this.fixupDescriptionFormatting(desc, moduleDocs.name),
            tags,
        };
    }

    private handlePropertyDeclaration(node: PropertyDeclaration | PropertySignature): JSDocResult {
        const name = getPropertyName(node.name);
        if (!name) {
            return {
                status: JSDocMatchResult.Ignore,
            };
        }

        let { properties } = this.context.moduleDocs;

        const parent = node.parent;

        if (isConstructorTypeNode(parent) || isTypeLiteralNode(parent)) {
            return {
                status: JSDocMatchResult.Ignore,
            };
        }

        if (isClassDeclaration(parent) || isInterfaceDeclaration(parent)) {
            const classDoc = matchClassOrInterfaceDoc(this.context.moduleDocs, parent);
            if (!classDoc) {
                return {
                    status: JSDocMatchResult.Ignore,
                };
            }

            properties = classDoc.properties;
        }

        const propertyDoc = properties?.find(m => {
            // Sometimes property names are just `Type` which is really damn helpful, we can extract an alternative
            // from `textRaw` instead
            if ((m.name === 'Type' || m.name === 'return') && m.textRaw) {
                const altMatch = m.textRaw.match(/^`(.*?)`/);
                if (altMatch) {
                    return name === altMatch[1];
                }
                console.warn(`Could not find real name of doc node ${JSON.stringify(m)}`);
            }
            return m.name === name;
        });
        if (!propertyDoc) {
            return {
                status: JSDocMatchResult.Failed,
            };
        }

        const { moduleDocs } = this.context;

        const { desc } = propertyDoc;
        const tags = this.tagHelper.extractCommonTags(propertyDoc, moduleDocs.name);
        return {
            status: JSDocMatchResult.Ok,
            data: {
                text: this.fixupDescriptionFormatting(desc, moduleDocs.name),
                tags,
            }
        };
    }

    /**
     * Processes generic `function ...` statements
     */
    private processFunctionDeclaration(node: FunctionDeclaration): JSDocResult {
        const { moduleDocs } = this.context;
        if (ignoreFunctions.has(node.name?.escapedText!)) {
            return {
                status: JSDocMatchResult.Ignore,
            };
        }

        const methodDoc = moduleDocs.methods?.find(m => m.name === node.name?.escapedText);
        if (!methodDoc) {
            return {
                status: JSDocMatchResult.Failed,
            };
        }
        if (processedFunctions.has(methodDoc)) {
            return {
                status: JSDocMatchResult.Ignore,
            };
        }

        processedFunctions.add(methodDoc);
        return {
            status: JSDocMatchResult.Ok,
            data: this.getCallSignatureDocData(moduleDocs, methodDoc),
        };
    }

    /**
     * Processes named module declarations.
     */
    private handleModuleDeclaration(): JSDocResult {
        const { moduleDocs } = this.context;
        const tags = this.tagHelper.extractCommonTags(moduleDocs, moduleDocs.name);

        // Get rid of bloaty source label
        let desc = moduleDocs.desc ?? '';
        const removeSourceRegex = /<p><strong>Source Code:<\/strong> <a href="(.*?)">.*?<\/a><\/p>/;
        const match = removeSourceRegex.exec(desc);
        if (match) {
            tags.push(this.tagHelper.createSeeLinkTag(match[1]!, 'source'));
            desc = desc.replace(removeSourceRegex, ``);
        }

        return {
            status: JSDocMatchResult.Ok,
            data: {
                text: this.fixupDescriptionFormatting(desc,  moduleDocs.name),
                tags,
            }
        };
    }

    /**
     * Processes class declarations
     */
    private handleClassDeclaration(node: ClassDeclaration): JSDocResult {
        const { moduleDocs } = this.context;

        // class names tend to be randomly prefixed, yaaay
        const classDoc = matchClassOrInterfaceDoc(moduleDocs, node);
        if (!classDoc) {
            return {
                status: JSDocMatchResult.Failed,
            };
        }

        const tags = this.tagHelper.extractCommonTags(classDoc, moduleDocs.name);

        // Get rid of bloaty source label
        return {
            status: JSDocMatchResult.Ok,
            data: {
                text: this.fixupDescriptionFormatting(classDoc.desc, moduleDocs.name).replace(/\* Extends: `.*?`/, '').trim(),
                tags,
            },
        };
    }

    /**
     * Handles both class and interface method declarations
     */
    private handleMethodDeclaration(node: MethodDeclaration | MethodSignature): JSDocResult {
        const name = getPropertyName(node.name);
        if (!name) {
            return {
                status: JSDocMatchResult.Ignore,
            };
        }
        const methodName = (node.name as Identifier).escapedText!;

        // Suppress event emitter declarations unless we are the events module
        if (eventEmitterMethods.has(methodName) && this.context.moduleDocs.name !== 'events') {
            return {
                status: JSDocMatchResult.Ignore,
            };
        }

        const parent = node.parent;

        if (!(isInterfaceDeclaration(parent) || isClassDeclaration(parent))) {
            return {
                status: JSDocMatchResult.Ignore,
            };
        }

        const isStatic = node.modifiers?.some(m => m.kind === SyntaxKind.StaticKeyword);
        // ignore duplicates by parent and `staticness`
        if ((isStatic ? processedStaticMethods : processedInstanceMethods)(parent, methodName)) {
            return {
                status: JSDocMatchResult.Ignore,
            };
        }
        const classDoc = matchClassOrInterfaceDoc(this.context.moduleDocs, parent);
        // We already warn about missing class docs, let's not be obnoxious
        if (!classDoc) {
            return {
                status: JSDocMatchResult.Ignore,
            };
        }

        const methodDocList = isStatic ? classDoc.classMethods : classDoc.methods;
        const methodDoc = methodDocList?.find(({ name }) => name === methodName);
        if (!methodDoc) {
            return {
                status: JSDocMatchResult.Failed,
            };
        }
        return {
            status: JSDocMatchResult.Ok,
            data: this.getCallSignatureDocData(this.context.moduleDocs, methodDoc),
        };
    }

    getTransformationContext(): TransformationContext {
        return this.context.transformationContext;
    }

    processNode(node: Node): void {
        const { printer, typeChecker, transformationContext } = this.context;
        let processRes: JSDocResult = {
            status: JSDocMatchResult.Ignore,
        };

        this.context.indent = getIndent(node);
        if (isFunctionDeclaration(node)) {
            processRes = this.processFunctionDeclaration(node);
        } else if (isNamedModuleDeclaration(node) && !node.name.text.startsWith('node:')) { // apparently everything is a module
            processRes = this.handleModuleDeclaration();
        } else if (isClassDeclaration(node)) {
            processRes = this.handleClassDeclaration(node);
        } else if (isMethodDeclaration(node) || isMethodSignature(node)) {
            processRes = this.handleMethodDeclaration(node);
        } else if (isPropertyDeclaration(node) || isPropertySignature(node)) {
            processRes = this.handlePropertyDeclaration(node);
        }
        if (processRes.status === JSDocMatchResult.Ignore) {
            return;
        }
        if (processRes.status === JSDocMatchResult.Ok) {
            if (node.getFullText().includes('@keepdoc')) {
                nodeWarning(node, `Skipping doc replace for`);
                return;
            }
            if (processRes.data.text === '' && processRes.data.tags.length === 0) {
                nodeWarning(node, 'Skipping docs for');
                return;
            }
            const jsdoc = '*' + printer.printNode(
                EmitHint.Unspecified,
                transformationContext.factory.createJSDocComment(processRes.data.text, processRes.data.tags),
                node.getSourceFile(),
            )
            .replaceAll('/**', '')
            .replaceAll('*/', '')
            .replaceAll(/`&lt;(.*?)&gt;`/g, '`$1`');
            const newNode = removeCommentsRecursive(node, transformationContext, typeChecker);
            addSyntheticLeadingComment(newNode, SyntaxKind.MultiLineCommentTrivia, jsdoc, true);
        } else {
            nodeWarning(node, `Could not match doc for symbol`);
        }
    }
}
