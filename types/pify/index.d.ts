// Type definitions for pify 3.0.0
// Project: https://github.com/sindresorhus/pify
// Definitions by: Sam Verschueren <https://github.com/samverschueren>, [Michael Müller] <https://github.com/mad-mike>, Christoph Müller <https://github.com/c7hm4r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PromiseModule {
    new(executor: (resolve: (value?: any) => void, reject: (reason?: any) => void) => void): any;
}

interface PifyOptions {
    multiArgs?: boolean,
    include?: Array<string | RegExp>,
    exclude?: Array<string | RegExp>,
    excludeMain?: boolean,
    errorFirst?: boolean,
    promiseModule?: PromiseModule
}

declare function pify(input: Function, options?: PifyOptions): (...args: any[]) => Promise<any>;
declare function pify(input: any, options?: PifyOptions): any;

declare namespace pify { }
export = pify;
