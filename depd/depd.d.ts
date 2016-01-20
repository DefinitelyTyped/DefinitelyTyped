// Type definitions for depd 1.1.0
// Project: https://github.com/dougwilson/nodejs-depd
// Definitions by: Zhiyuan Wang <https://github.com/danny8002/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module 'depd' {
    function depd(namespace: string): Deprecate;

    interface Deprecate {
        (message: string): void;
        function(fn: Function, message?: string): Function;
        property(obj: Object, prop: string, message: string): void;
    }

    export = depd;
}