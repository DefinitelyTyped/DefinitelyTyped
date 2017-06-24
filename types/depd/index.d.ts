// Type definitions for depd 1.1.0
// Project: https://github.com/dougwilson/nodejs-depd
// Definitions by: Zhiyuan Wang <https://github.com/danny8002/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare function depd(namespace: string): Deprecate;

interface Deprecate {
    (message: string): void;
    function(fn: Function, message?: string): Function;
    property(obj: Object, prop: string, message: string): void;
}

export = depd;
