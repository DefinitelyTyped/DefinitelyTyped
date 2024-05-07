/// <reference types="node" />

/**
 * Signs a raw transaction and return it either as a serialized hex string or raw tx object.
 */
export function sign(transaction: object, privateKey: string, toObject?: false): string;
export function sign(transaction: object, privateKey: string, toObject: true): any[];

/**
 * Recovers a ECDSA public key from a raw transaction.
 */
export function recover(rawTx: string | Buffer, v: number, r: Buffer, s: Buffer): Buffer;
