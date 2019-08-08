// Type definitions for pathval 1.1
// Project: https://www.npmjs.com/package/pathval
// Definitions by: Rebecca Turner <https://github.com/9999years>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace PathVal {
    interface PathInfo {
        parent: object;
        name: string;
        value?: any;
        exists: boolean;
    }

    type Property = string | symbol | number;

    interface PathValStatic {
        hasProperty(obj: object | undefined | null, name: Property): boolean;
        getPathInfo(obj: object, path: string): PathInfo;
        getPathValue(obj: object, path: string): object | undefined;
        setPathValue(obj: object, path: string, val: any): object;
    }
}

declare const pathval: PathVal.PathValStatic;

declare module "pathval" {
    export = pathval;
}
