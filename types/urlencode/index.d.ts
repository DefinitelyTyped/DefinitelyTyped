// Type definitions for urlencode 1.1
// Project: https://github.com/node-modules/urlencode
// Definitions by: My Self <https://github.com/kimcoder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace urlencode;

/**
 * Encode string 
 * @param str The string for encoding.
 */
export function encode(str: string, charset?: string): string;

/**
 * Decode string 
 * @param encodedString The encoded string.
 */
export function decode(encodedString: string, charset?: string): string;

/**
 * Parse querystring
 * @param queryString Querystring
 * @param charsetParam The charset for parsing
 */
export function parse(queryString: string, charsetParam: charsetParam): string;
export interface charsetParam {
    charset: string;
}
/**
 * Stringify object
 * @param obj Querystring
 * @param charsetParam The charset for parsing
 */
export function stringify(obj: any, prefix?: charsetParam, charsetParam?: charsetParam): any;

export default encode;

// export namespace subProp {
//     /*~ For example, given this definition, someone could write:
//      *~   import { subProp } from 'yourModule';
//      *~   subProp.foo();
//      *~ or
//      *~   import * as yourMod from 'yourModule';
//      *~   yourMod.subProp.foo();
//      */
//     export function foo(): void;
// }