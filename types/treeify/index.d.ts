// Type definitions for treeify 1.1
// Project: https://github.com/notatestuser/treeify
// Definitions by: Mike North <https://github.com/mike-north>
//                 Chris Arnesen <https://github.com/carnesen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export function asTree(
    obj: object,
    showValues?: boolean,
    hideFunctions?: boolean
): string;

export function asLines(
    obj: object,
    showValues: boolean,
    lineCallback: (line: string) => void
): string;
export function asLines(
    obj: object,
    showValues: boolean,
    hideFunctions: boolean,
    lineCallback: (line: string) => void
): string;
