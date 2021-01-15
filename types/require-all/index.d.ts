// Type definitions for require-all 3.0
// Project: https://github.com/felixge/node-require-all#readme
// Definitions by: Ivan Sadykov <https://github.com/Sonahit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
interface Options {
    dirname: string;
    filter?: ((name: string, path: string) => string | false | undefined) | RegExp;
    excludeDirs?: RegExp;
    map?: (name: string, path: string) => string;
    resolve?: (module: any) => any;
    recursive?: true | false;
}

declare function requireAll(options: Options): {[key: string]: any};

export = requireAll;
