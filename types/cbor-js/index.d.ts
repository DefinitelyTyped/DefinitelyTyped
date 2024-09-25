// Type definitions for cbor-js 0.1.0
// Project: https://github.com/paroga/cbor-js

export function encode(data: any): ArrayBuffer;

export function decode(encoded: ArrayBuffer): any;

export as namespace CBOR;
