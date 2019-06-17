// Type definitions for little-loader 0.2
// Project: https://github.com/walmartlabs/little-loader
// Definitions by: Chris Drackett <https://github.com/chrisdrackett>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options<T> {
    context?: T;
    setup?: (this: T, script: any) => void;
    callback?: (this: T, err: string) => void;
}

declare function loader<T>(
    module: string,
    callback?: (this: T, err: string) => void,
    context?: T
): void;

declare function loader<T>(
    module: string,
    options?: Options<T>
): void;

export = loader;
