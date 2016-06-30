// Type definitions for ms v0.7.1
// Project: https://github.com/guille/ms.js
// Definitions by: Zhiyuan Wang <https://github.com/danny8002/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'ms' {

    /**
    * Short/Long format for `value`.
    *
    * @param {Number} value
    * @param {{long: boolean}} options
    * @return {String}
    */
    function ms(value: number, options?: { long: boolean }): string;

    /**
    * Parse the given `value` and return milliseconds.
    *
    * @param {String} value
    * @return {Number}
    */
    function ms(value: string): number;

    export = ms;
}