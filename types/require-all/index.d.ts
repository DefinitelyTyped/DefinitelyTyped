// Type definitions for require-all 3.0
// Project: https://github.com/felixge/node-require-all
// Definitions by: Sonahit <https://github.com/Sonahit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    dirname: string,
    filter?:  ((name: string, path: string) => string) | RegExp,
    excludeDirs?: RegExp,
    map?: (name: string, path: string) => string,
    resolve?: (module: any) => any,
    recursive?: true | false,
  }

declare module 'require-all' {
    function rall(options: Options) : {[key: string]: any};
    export = rall;
}
