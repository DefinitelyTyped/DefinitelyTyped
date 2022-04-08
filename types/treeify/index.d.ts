// Type definitions for treeify 1.0
// Project: https://github.com/notatestuser/treeify
// Definitions by: Mike North <https://github.com/mike-north>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface TreeObject {
    [k: string]: TreeValue;
}
export type TreeValue = string | TreeObject;

export function asTree(
    treeObj: TreeObject,
    showValues: boolean,
    hideFunctions: boolean
): string;

export function asLines(
    treeObj: TreeObject,
    showValues: boolean,
    lineCallback: (line: string) => void
): string;
export function asLines(
    treeObj: TreeObject,
    showValues: boolean,
    hideFunctions: boolean,
    lineCallback: (line: string) => void
): string;
