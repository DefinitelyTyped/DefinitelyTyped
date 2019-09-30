// Type definitions for treeify 1.1
// Project: https://github.com/notatestuser/treeify
// Definitions by: Mike North <https://github.com/mike-north>
//                 Chris Arnesen <https://github.com/carnesen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export function asTree(
    obj: any,
    showValues?: boolean,
    hideFunctions?: boolean
): string | undefined;

export function asLines(
    obj: any,
    showValues: boolean,
    lineCallback: (line: string) => void
): string | undefined;
export function asLines(
    obj: any,
    showValues: boolean,
    hideFunctions: boolean,
    lineCallback: (line: string) => void
): string | undefined;
