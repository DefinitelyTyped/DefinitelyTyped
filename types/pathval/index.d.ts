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
