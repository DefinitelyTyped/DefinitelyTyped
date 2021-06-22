// Type definitions for pify 5.0
// Project: https://github.com/sindresorhus/pify
// Definitions by: Sam Verschueren <https://github.com/samverschueren>
//                 Michael Müller <https://github.com/mad-mike>
//                 Christoph Müller <https://github.com/c7hm4r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type InputFunction = (...args: any[]) => any;

declare function pify(input: InputFunction, options?: pify.PifyOptions): (...args: any[]) => Promise<any>;
declare function pify(input: object, options?: pify.PifyOptions): any;

declare namespace pify {
    interface PifyOptions {
        multiArgs?: boolean;
        include?: Array<string | RegExp>;
        exclude?: Array<string | RegExp>;
        excludeMain?: boolean;
        errorFirst?: boolean;
        promiseModule?: PromiseModule;
    }

    interface PromiseModule {
        new (executor: (resolve: (value?: any) => void, reject: (reason?: any) => void) => void): any;
    }
}

export = pify;
