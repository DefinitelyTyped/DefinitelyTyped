// Type definitions for json-diff 0.7
// Project: https://github.com/andreyvit/json-diff
// Definitions by: Tommy Wong <https://github.com/wchtommy20013/>
//                 Jerryh001 <https://github.com/Jerryh001>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface DiffOptions {
    verbose?: boolean;
    raw?: boolean;
    keysOnly?: boolean;
    full?: boolean;
    sort?: boolean;
    outputKeys?: string[];
}
export interface DiffStringOptions extends DiffOptions {
    color?: boolean;
}

export function diff(obj1: unknown, obj2: unknown, options?: DiffOptions): any;
export function diffString(obj1: unknown, obj2: unknown, options?: DiffStringOptions): string;
