import {
    TypeChecker, isModuleBlock, isSourceFile, NamedDeclaration,
    isStringLiteral, isIdentifier, SyntaxKind, Node, setTextRange, TransformationContext, visitEachChild, visitNode, PropertyName, getLineAndCharacterOfPosition, ModuleDeclaration, isModuleDeclaration, NodeFlags,
} from "typescript";
import { join } from 'path';

export function getNodeName(node: Node): string {
    if (isSourceFile(node)) {
        return node.fileName;
    }
    const name = (node as NamedDeclaration).name;
    if (name && (isStringLiteral(name) || isIdentifier(name))) {
        return name.text;
    }
    return `[${SyntaxKind[node.kind]}]`;
}

export function getNodePathName(typeChecker: TypeChecker, node: Node): string {
    try {
        return typeChecker.getFullyQualifiedName(typeChecker.getSymbolOfExpando(node, true)!);
    } catch (e) {
        let curr = node;
        const path: string[] = [];
        while (curr) {
            // transparent
            if (isModuleBlock(curr)) {
                curr = curr.parent;
                continue;
            }
            if (isSourceFile(curr)) {
                path.push(curr.fileName);
                break;
            }
            const name = (curr as NamedDeclaration).name;
            if (name && (isStringLiteral(name) || isIdentifier(name))) {
                path.push(name.text);
            } else {
                path.push(`[${SyntaxKind[curr.kind]}]`);
            }
            curr = curr.parent;
        }
        return path.reverse().join(' -> ');
    }
}

export function removeCommentsRecursive(root: Node, context: TransformationContext, __typeChecker: TypeChecker) {
    const visit = (c: Node): Node => {
        if (c.getStart() === root.getStart()) {
            setTextRange(c, { pos: c.getStart(), end: c.getEnd() });
        }
        return visitEachChild(c, visit, context);
    };
    return visitNode(root, visit);
}

export function getIndent(node: Node): number {
    const txt = node.getSourceFile().text;
    let indent = 0;
    let currIdx = node.getStart() - 1;
    while (txt[currIdx] === ' ') {
        currIdx--;
        indent++;
    }
    return indent;
}

export function getPropertyName(node: PropertyName): string | undefined {
    if (isIdentifier(node) && node.escapedText) {
        return node.escapedText;
    }
    if (isStringLiteral(node)) {
        return node.text;
    }
    return undefined;
}

const rootFolder = join(__dirname, '../../');

export function nodeWarning(node: Node, text: string): void {
    const file = node.getSourceFile();
    const { line, character } = getLineAndCharacterOfPosition(file, node.getStart(file, false));
    console.warn(`WARN[${file.fileName.replace(rootFolder, '')}:${line + 1}:${character + 1}] ${text} "${getNodeName(node)}"`);
}

export function nodeInfo(node: Node, text: string): void {
    const file = node.getSourceFile();
    const { line, character } = getLineAndCharacterOfPosition(file, node.getStart(file, false));
    console.log(`INFO[${file.fileName.replace(rootFolder, '')}:${line + 1}:${character + 1}] ${text} "${getNodeName(node)}"`);
}

export function isNamedModuleDeclaration(node: Node): node is ModuleDeclaration {
    return isModuleDeclaration(node) && !(node.flags & NodeFlags.Namespace) && !(node.flags & NodeFlags.GlobalAugmentation);
}
