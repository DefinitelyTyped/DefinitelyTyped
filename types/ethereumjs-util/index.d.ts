// Type definitions for ethereumjs-util 5.2
// Project: https://github.com/ethereumjs/ethereumjs-util#readme
// Definitions by: Juan J. Jimenez-Anca <https://github.com/cortopy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

// TODO: import types for [`rlp`](https://github.com/ethereumjs/rlp)
// TODO: import types for [`secp256k1`](https://github.com/cryptocoinjs/secp256k1-node/)

import BN = require("bn.js");

export const SHA3_NULL_S: string;

export const SHA3_RLP_ARRAY_S: string;

export const SHA3_RLP_S: string;

export function addHexPrefix(str: string): string;

export function baToJSON(ba: Buffer | Uint8Array | string[]): Buffer | Uint8Array | string[] | null;

export function bufferToHex(buf: Buffer | Uint8Array): string;

export function bufferToInt(buf: Buffer | Uint8Array): number;

export function defineProperties(self: {[k: string]: any}, fields: string[], data: {[k: string]: any}): {[k: string]: any};

export function ecrecover(msgHash: Buffer | Uint8Array, v: number, r: Buffer | Uint8Array, s: Buffer | Uint8Array): Buffer | Uint8Array;

export function ecsign(msgHash: Buffer | Uint8Array, privateKey: Buffer | Uint8Array): {[k: string]: any};

export function fromRpcSig(sig: string): {[k: string]: any};

export function fromSigned(num: Buffer | Uint8Array): BN;

export function generateAddress(from: Buffer | Uint8Array, nonce: Buffer | Uint8Array): Buffer | Uint8Array;

export function hashPersonalMessage(message: Buffer | Uint8Array | any[]): Buffer | Uint8Array;

export function importPublic(publicKey: Buffer | Uint8Array): Buffer | Uint8Array;

export function isPrecompiled(address: Buffer | Uint8Array): boolean;

export function isValidAddress(address: string): boolean;

export function isValidChecksumAddress(address: Buffer | Uint8Array): boolean;

export function isValidPrivate(privateKey: Buffer | Uint8Array): boolean;

export function isValidPublic(publicKey: Buffer | Uint8Array, sanitize?: boolean): any;

export function isValidSignature(v: Buffer | Uint8Array, r: Buffer | Uint8Array, s: Buffer | Uint8Array, homestead?: boolean): boolean;

export function isZeroAddress(address: string): boolean;

export function keccak(a: Buffer | Uint8Array | any[] | string | number, bits?: number): Buffer | Uint8Array;

export function keccak256(a: Buffer | Uint8Array | any[] | string | number): Buffer | Uint8Array;

export function privateToAddress(privateKey: Buffer | Uint8Array): Buffer | Uint8Array;

export function privateToPublic(privateKey: Buffer | Uint8Array): Buffer | Uint8Array;

export function pubToAddress(pubKey: Buffer | Uint8Array, sanitize?: boolean): Buffer | Uint8Array;

export function ripemd160(a: Buffer | Uint8Array | any[] | string | number, padded: boolean): Buffer | Uint8Array;

export function rlphash(a: Buffer | Uint8Array | any[] | string | number): Buffer | Uint8Array;

export function setLengthLeft(msg: Buffer | Uint8Array | any[], length: number, right?: boolean): Buffer | Uint8Array | any[];

export function setLengthRight(msg: Buffer | Uint8Array | any[], length: number): Buffer | Uint8Array | any[];

export function sha256(a: Buffer | Uint8Array | any[] | string | number): Buffer | Uint8Array;

export function sha3(a: Buffer | Uint8Array | any[] | string | number, bits?: number): Buffer | Uint8Array;

export function toBuffer(v: any): Buffer | Uint8Array;

export function toChecksumAddress(address: string): string;

export function toRpcSig(v: number, r: Buffer | Uint8Array, s: Buffer | Uint8Array): string;

export function toUnsigned(num: BN): Buffer | Uint8Array;

export function unpad<T extends Buffer | Uint8Array | any[] | string>(a: T): T;

export function zeros(bytes: number): Buffer | Uint8Array;

export function zeroAddress(): string;
