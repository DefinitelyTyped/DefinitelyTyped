// Type definitions for graphql-depth-limit 1.1
// Project: https://github.com/stems/graphql-depth-limit#readme
// Definitions by: Siim Tiilen <https://github.com/eritikass>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare function depthLimit(depthLimit: number, options?: depthLimit.Options, callback?: (obj: any) => void): any;
export = depthLimit;

declare namespace depthLimit {
    interface Options {
        ignore?: Array<string | RegExp | ((queryDepths: any[]) => boolean)>;
    }
}
