// Type definitions for ejson v2.1.2
// Project: https://www.npmjs.com/package/ejson
// Definitions by: Shantanu Bhadoria <https://github.com/shantanubhadoria>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface StringifyOptions {
  canonical?: boolean;
  indent?: boolean|number|string;
}

interface CloneOptions {
  keyOrderSensitive: boolean;
}

export function clone<T>(obj: T): T;
export function parse(str: string): any;
export function stringify(obj: any, options?: StringifyOptions): string;

export function toJSONValue(obj: any): string;
export function fromJSONValue(obj: string): any;
export function isBinary(value: any): boolean;
export function newBinary(len: number): Uint8Array;
export function equals(a: any, b: any, options?: CloneOptions): boolean;
