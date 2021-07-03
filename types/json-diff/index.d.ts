// Type definitions for json-diff 0.5
// Project: https://github.com/andreyvit/json-diff
// Definitions by: Tommy Wong <https://github.com/wchtommy20013/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ColorizeOptions {
    color?: boolean;
}

export function diff(obj1: unknown, obj2: unknown): any;
export function diffString(obj1: unknown, obj2: unknown, colorizeOptions?: ColorizeOptions): string;
