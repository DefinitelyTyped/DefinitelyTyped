// Type definitions for little-loader 0.2
// Project: https://github.com/walmartlabs/little-loader
// Definitions by: Chris Drackett <https://github.com/chrisdrackett>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function loader(
    module: string,
    callBack: (err: string) => void,
    context: any
): void;

export = loader;
