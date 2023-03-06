// Type definitions for @jayrbolton/suffix-tree 0.0
// Project: https://www.npmjs.com/package/@jayrbolton/suffix-tree
// Definitions by: Unlocked <https://github.com/TheUnlocked>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface STree {
    activeNode: SNode;
    root: SNode;
    left: number;
    right: number;
    idx: number;
    lastID: number;
    strings: { [id: number]: string };
    skip: number;
    text: string[];
}
export interface SNode {
    start: number;
    children: { [char: string]: SNode };
    id: number;
    parent: SNode;
}

export function create(str?: string): STree;

export function add(str: string, tree: STree): STree;
export function addSingle(char: number | string, tree: STree): STree;

export function getStringByIndex(idx: number, tree: STree): string;
export function findSuffix(suffix: string, tree: STree): number[];
export function allSuffixes(tree: STree): string[];

export function format(tree: STree): string;
