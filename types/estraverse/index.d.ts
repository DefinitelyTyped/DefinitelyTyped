// Type definitions for estraverse
// Project: https://github.com/estools/estraverse
// Definitions by: Sanex3339 <https://github.com/sanex3339>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as ESTree from 'estree';

export interface Visitor {
    enter?: (node: ESTree.Node, parentNode: ESTree.Node | null) => VisitorOption | ESTree.Node | void;
    leave?: (node: ESTree.Node, parentNode: ESTree.Node | null) => VisitorOption | ESTree.Node | void;

    fallback?: 'iteration'|((node: ESTree.Node) => string[]);

    keys?: {[nodeType: string]: string[];};
}

export enum VisitorOption {Skip, Break, Remove}

export function traverse(ast: ESTree.Node, visitor: Visitor): void;
export function replace(ast: ESTree.Node, visitor: Visitor): ESTree.Node;
