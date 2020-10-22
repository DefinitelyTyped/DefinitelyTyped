// Type definitions for depd 1.1
// Project: https://github.com/dougwilson/nodejs-depd
// Definitions by: Zhiyuan Wang <https://github.com/danny8002>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

export = depd;

declare function depd(namespace: string): depd.Deprecate;

declare namespace depd {
    interface Deprecate {
        (message: string): void;
        // tslint:disable-next-line ban-types
        function<T extends Function>(fn: T, message?: string): T;
        property<T extends object>(obj: T, prop: keyof T, message: string): void;
    }

    interface DeprecationError extends Error {
        readonly name: 'DeprecationError';
        namespace: string;
        stack: string;
    }
}

declare global {
    namespace NodeJS {
        interface Process {
            addListener(event: 'deprecation', listener: (deprecationError: depd.DeprecationError) => void): this;
            emit(event: 'deprecation', code: depd.DeprecationError): boolean;
            on(event: 'deprecation', listener: (deprecationError: depd.DeprecationError) => void): this;
            once(event: 'deprecation', listener: (deprecationError: depd.DeprecationError) => void): this;
            prependListener(event: 'deprecation', listener: (deprecationError: depd.DeprecationError) => void): this;
            prependOnceListener(event: 'deprecation', listener: (deprecationError: depd.DeprecationError) => void): this;
            listeners(event: 'deprecation'): depd.DeprecationError[];
        }
    }
}
