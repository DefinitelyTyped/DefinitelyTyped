// Type definitions for path-to-regexp v1.0.3
// Project: https://github.com/pillarjs/path-to-regexp
// Definitions by: xica <https://github.com/xica>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "path-to-regexp" {

    function pathToRegexp(path: string, keys?: string[], options?: pathToRegexp.Options): RegExp;

    namespace pathToRegexp {

        interface Options {
            sensitive?: boolean;
            strict?: boolean;
            end?: boolean;
        }

    }

    export = pathToRegexp;

}
