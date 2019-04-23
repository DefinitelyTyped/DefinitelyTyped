// Type definitions for treeify 1.1.0
// Project: https://github.com/notatestuser/treeify
// Definitions by: Mike North <https://github.com/mike-north>
//                 Xiao Liang <https://github.com/yxliang01>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface TreeObject {
    readonly [k: string]: TreeValue;
}
export type TreeValue = string | PrintObject;
export type PrintObject = TreeObject | ReadonlyArray<any>;

export function asTree(
    printObj: PrintObject,
    showValues: boolean,
    hideFunctions?: boolean
): string;

export function asLines(
    printObj: PrintObject,
    showValues: boolean,
    lineCallback: (line: string) => void
): string;
export function asLines(
    printObj: PrintObject,
    showValues: boolean,
    hideFunctions: boolean,
    lineCallback: (line: string) => void
): string;
