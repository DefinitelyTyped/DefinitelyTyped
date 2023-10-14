// Type definitions for proxymise 1.0
// Project: https://github.com/kozhevnikov/proxymise#readme
// Definitions by: César Suárez <https://github.com/csuarez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.5

type Proxymise<T> =
    & {
        [key in keyof T]: T[key] extends (...args: infer Params) => Promise<infer Return>
            ? (...args: Params) => Proxymise<Return>
            : T[key];
    }
    & Promise<T>;

declare function proxymise<T>(target: T): Proxymise<T>;

export = proxymise;
