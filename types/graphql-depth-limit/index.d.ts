// Type definitions for graphql-depth-limit 1.1
// Project: https://github.com/stems/graphql-depth-limit#readme
// Definitions by: Siim Tiilen <https://github.com/eritikass>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare var d: GraphqlDepthLimit.depthLimit;
export = d;

declare namespace GraphqlDepthLimit {
    interface options {
        ignore: Array<string | RegExp | ((queryDepths: any[]) => boolean)>;
    }

    type depthLimit = (
        depthLimit: number,
        options?: options,
        callback?: (obj: any) => void,
    ) => any;
}
