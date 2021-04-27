// Type definitions for bitauth 0.4
// Project: https://github.com/bitpay/bitauth#readme
// Definitions by: Justin Langston <https://github.com/nitsujlangston>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { BinaryLike } from 'crypto';
import { RequestHandler } from 'express';

export as namespace bitauth;

interface callback {
    (err?: Error, valid?: boolean): any;
}

export function generateSin(): {
    created: number;
    priv: string;
    pub: string;
    sin: string;
};
export function getPublicKeyFromPrivateKey(privkey: string | Uint8Array): string;
export function getSinFromPublicKey(pubkey: string | Uint8Array): string;
export function sign(data: string | Uint8Array, privkey: string | Uint8Array): Uint8Array;
export function verifySignature(
    data: string | Uint8Array,
    pubkey: string | Uint8Array,
    hexsignature: string | Uint8Array,
    callback?: callback,
): boolean | void;
export function validateSin(sin: string, callback?: callback): boolean | void;
export function encrypt(password: BinaryLike, str: string): string;
export function decrypt(password: BinaryLike, str: string): string;
export function middleware(): RequestHandler;

export {};
