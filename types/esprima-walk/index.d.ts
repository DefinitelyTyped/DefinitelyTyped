import * as ESTree from "estree";

type NodeWithParent = ESTree.Node & { parent?: ESTree.Node | undefined };

/**
 * Walk the provided AST; fn is called once for each node with a `type`
 * @param {ESTree.Program} ast program to walk
 * @param {function} fn function invoked for each node with type
 */
declare function walk(ast: ESTree.Program, fn: (node: ESTree.Node) => void): void;

declare namespace walk {
    /**
     * Walk the provided AST; fn is called once for each node with a `type`
     * @param {ESTree.Program} ast program to walk
     * @param {function} fn function invoked for each node
     */
    export function walk(ast: ESTree.Program, fn: (node: ESTree.Node) => void): void;

    /**
     * Walk the provided AST; fn is called once for each node with a `type`.
     * Adds a parent property prior to invoking fn when applicable
     * @param {ESTree.Program} ast program to walk
     * @param {function} fn function invoked for each node
     */
    export function walkAddParent(ast: ESTree.Program, fn: (node: NodeWithParent) => void): void;
}

export = walk;
