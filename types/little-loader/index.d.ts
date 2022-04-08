// Type definitions for little-loader 0.2
// Project: https://github.com/walmartlabs/little-loader
// Definitions by: Chris Drackett <https://github.com/chrisdrackett>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    context?: any;
    setup?: (this: any, script: any) => void;
    callback?: (this: any, err: string) => void;
}

declare function loader(
    module: string,
    callback?: (this: any, err: string) => void,
    context?: any
): void;

declare function loader(
    module: string,
    options?: Options
): void;

export = loader;
