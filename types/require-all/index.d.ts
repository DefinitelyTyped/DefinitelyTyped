// Type definitions for require-all 3.0
// Project: https://github.com/felixge/node-require-all#readme
// Definitions by: Ivan Sadykov <https://github.com/Sonahit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
interface Options {
    dirname: string;
    filter?: ((name: string, path: string) => string | false | undefined) | RegExp | undefined;
    excludeDirs?: RegExp | undefined;
    map?: ((name: string, path: string) => string) | undefined;
    resolve?: ((module: any) => any) | undefined;
    recursive?: true | false | undefined;
}

declare function requireAll(options: string | Options): { [key: string]: any };

export = requireAll;
