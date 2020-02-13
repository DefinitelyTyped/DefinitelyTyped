// Type definitions for pathval 1.1
// Project: https://www.npmjs.com/package/pathval
// Definitions by: Rebecca Turner <https://github.com/9999years>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface PathInfo {
    parent: object;
    name: string;
    value?: any;
    exists: boolean;
}

export type Property = string | symbol | number;

export function hasProperty(obj: object | undefined | null, name: Property): boolean;
export function getPathInfo(obj: object, path: string): PathInfo;
export function getPathValue(obj: object, path: string): object | undefined;
export function setPathValue(obj: object, path: string, val: any): object;

export as namespace pathval;
