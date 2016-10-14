// Type definitions for ejson v2.1.2
// Project: https://www.npmjs.com/package/ejson
// Definitions by: Shantanu Bhadoria <https://github.com/shantanubhadoria>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module "ejson" {
  interface StringifyOptions {
    canonical: boolean;
    indent: boolean|number|string;
  }

  interface CloneOptions {
    keyOrderSensitive: boolean;
  }
  
  function clone<T>(obj: T): T;
  function parse(str: string): any;
  function stringify(obj: any, options?: StringifyOptions): string;

  function toJSONValue(obj: any): string;
  function fromJSONValue(obj: string): any;
  function isBinary(value: any): boolean;
  function newBinary(len: number): Uint8Array;
  function equals(a: any, b: any, options?: CloneOptions): boolean;
}
