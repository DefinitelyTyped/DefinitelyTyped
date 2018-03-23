// Type definitions for ethereumjs-util 5.1
// Project: https://github.com/ethereumjs/ethereumjs-util#readme
// Definitions by: Juan J. Jimenez-Anca <https://github.com/cortopy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

// TODO: import types for [`BN`](https://github.com/indutny/bn.js)
// TODO: MAX_INTEGER as type of BN
// TODO: import types for [`rlp`](https://github.com/ethereumjs/rlp)
// TODO: import types for [`secp256k1`](https://github.com/cryptocoinjs/secp256k1-node/)

export const SHA3_NULL_S: string;

export const SHA3_RLP_ARRAY_S: string;

export const SHA3_RLP_S: string;

export function addHexPrefix(str: string): string;

export function arrayContainsArray(superset: any, subset: any, some: any): any;

export function baToJSON(ba: Buffer | string[]): Buffer | string[];

export function bufferToHex(buf: Buffer): string;

export function bufferToInt(buf: Buffer): string;

export function defineProperties(self: {[k: string]: any}, fields: string[], data: {[k: string]: any}): {[k: string]: any};

export function ecrecover(msgHash: Buffer, v: number, r: Buffer, s: Buffer): Buffer;

export function ecsign(msgHash: Buffer, privateKey: Buffer): {[k: string]: any};

export function fromRpcSig(sig: string): {[k: string]: any};

export function fromSigned(num: Buffer): any;

export function generateAddress(from: Buffer, nonce: Buffer): Buffer;

export function hashPersonalMessage(message: string): Buffer;

export function importPublic(publicKey: Buffer): Buffer;

export function isValidAddress(address: string): boolean;

export function isValidChecksumAddress(address: Buffer): boolean;

export function isValidPrivate(privateKey: Buffer): boolean;

export function isValidPublic(publicKey: Buffer, sanitize?: boolean): any;

export function isValidSignature(v: Buffer, r: Buffer, s: Buffer, homestead?: boolean): boolean;

export function privateToAddress(privateKey: Buffer): Buffer;

export function privateToPublic(privateKey: Buffer): Buffer;

export function pubToAddress(pubKey: Buffer, sanitize: boolean): Buffer;

export function ripemd160(a: Buffer | any[] | string | number, padded: boolean): Buffer;

export function rlphash(a: Buffer | any[] | string | number): Buffer;

export function setLengthLeft(msg: Buffer | any[], length: number, right?: boolean): Buffer | any[];

export function setLengthRight(msg: Buffer | any[], length: number): Buffer | any[];

export function sha256(a: Buffer | any[] | string | number): Buffer;

export function sha3(a: Buffer | any[] | string | number, bits?: number): Buffer;

export function toBuffer(v: any): Buffer;

export function toChecksumAddress(address: string): string;

export function toRpcSig(v: number, r: Buffer, s: Buffer): string;

export function toUnsigned(num: any): Buffer;

export function unpad<T extends Buffer | any[] | string>(a: T): T;

export function zeros(bytes: number): Buffer;
