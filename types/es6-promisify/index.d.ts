// Type definitions for es6-promisify 5.0
// Project: https://github.com/digitaldesignlabs/es6-promisify#readme
// Definitions by: Harry Shipton <https://github.com/harryshipton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function es6_promisify(original: (...args: any[]) => any, settings?: es6_promisify.Settings): ((...args: any[]) => Promise<any>);

// If the issue at https://github.com/Microsoft/TypeScript/issues/1360 is fixed,
// then an update should be submitted replacing the above declaration with the
// following declarations.
/*
declare function es6_promisify<T>(original: (...args: any[], callback: (error: any, arg: T) => any) => any, settings?: Settings): ((...args: any[]) => Promise<T>);

declare function es6_promisify(original: (...args: any[], callback: (error: any, ...args: any[]) => any) => any, settings?: Settings): ((...args: any[]) => Promise<any[]>);
*/

declare namespace es6_promisify {
    interface Settings {
        thisArg?: any;
        multiArgs?: boolean;
    }
}

export = es6_promisify;
