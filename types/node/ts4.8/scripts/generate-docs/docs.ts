import {
    CompilerOptions,
    createProgram,
    Node,
    TransformerFactory,
    visitNode,
    Visitor,
    transform,
    createPrinter,
    factory,
    visitEachChild,
    Printer,
    TypeChecker,
    createCompilerHost,
    SourceFile,
    ModuleDeclaration,
    isSourceFile,
} from 'typescript';
import { writeFileSync } from 'fs';
import { DocRoot, loadDocs } from './node-doc-processing';
import { NodeProcessingContext } from './ast-processing';
import { format } from 'prettier';
import { isNamedModuleDeclaration, nodeInfo, nodeWarning } from './ast-utils';
import { join, basename } from 'path';

function processModule(processingContext: NodeProcessingContext, node: ModuleDeclaration): ModuleDeclaration {
    const visit: Visitor = node => {
        processingContext.processNode(node);
        return visitEachChild(node, visit, processingContext.getTransformationContext());
    };
    return visitNode(node, visit);
}

function transformer(printer: Printer, typeChecker: TypeChecker, rootDocs: DocRoot): TransformerFactory<Node> {
    return transformationContext => {
        const visit: Visitor = node => {
            if (isSourceFile(node)) {
                return visitEachChild(node, visit, transformationContext);
            }
            if (!isNamedModuleDeclaration(node)) {
                return node;
            }
            const moduleName = node.name.text;

            // skip non prefixed modules
            if (moduleName.startsWith('node:')) {
                return node;
            }

            nodeInfo(node, `Processing module ${moduleName}`);

            const moduleDocs = rootDocs.modules.find(({ name }) => name === moduleName)!;
            if (!moduleDocs) {
                nodeWarning(node, `Could not match module "${moduleName}" to documented module`)
                return node;
            }
            const context = new NodeProcessingContext({
                indent: 0,
                printer,
                transformationContext,
                typeChecker,
                moduleDocs,
            });
            return processModule(context, node);
        };
        return node => visitNode(node, visit);
    };
}

const ignoreFiles = new Set([
    'index.d.ts', // infra
    'base.d.ts', // infra
    'globals.global.d.ts', // infra
    'assert/strict.d.ts', // re-export only
    'globals.d.ts', // virtual
    'constants.d.ts' // not documented
]);

async function main() {
    const docs = await loadDocs();

    const { compilerOptions } = require(join(__dirname, '../../tsconfig.json')) as {
        compilerOptions: CompilerOptions;
    };

    compilerOptions.noEmit = false;

    // rewrite libs to exclude dom
    compilerOptions.lib = ['lib.es2021.d.ts'];

    const prog = createProgram({
        rootNames: [join(__dirname, '../../index.d.ts')],
        host: createCompilerHost(compilerOptions, true),
        options: compilerOptions,
    });

    const printer = createPrinter();

    const typeChecker = prog.getTypeChecker();

    const transformers = [transformer(printer, typeChecker, docs)];
    for (const f of prog.getSourceFiles()) {
        const fileName = f.fileName;
        if (fileName.includes('typescript') || ignoreFiles.has(basename(fileName))) {
            continue;
        }
        nodeInfo(f, 'Processing file');
        const transformRes = transform(f, transformers);
        writeFileSync(
            fileName,
            format(printer.printBundle(factory.createBundle(transformRes.transformed as SourceFile[])), {
                printWidth: 200,
                parser: 'typescript',
                tabWidth: 4,
                singleQuote: true,
            })
        );
    }
}

main();
