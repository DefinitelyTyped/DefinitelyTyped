// Type definitions for traverse 0.6.6
// Project: https://github.com/substack/js-traverse
// Definitions by: newclear <https://github.com/newclear>
// Definitions: https://github.com/newclear/DefinitelyTyped

declare module "traverse" {
    interface Traverse {
        get(paths: string[]): any;
        has(paths: string[]): boolean;
        set(paths: string[], value: any): any;
        map(cb: (v: any) => void): any;
        forEach(cb: (v: any) => void): any;
        reduce(cb: (acc: any, v: any) => void, init?: any): any;
        paths(): string[];
        nodes(): any[];
        clone(): any;
    }

    function traverse(obj: any): Traverse;

    export = traverse;
}
