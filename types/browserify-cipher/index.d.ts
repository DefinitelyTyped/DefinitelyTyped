/// <reference types="node" />

import EventEmitter = require("events");

export type BinaryLike = Buffer | string;

export type InputEncoding = BufferEncoding;
export type OutputEncoding =
    | "utf8"
    | "utf-8"
    | "ucs2"
    | "ucs-2"
    | "utf16le"
    | "utf-16le"
    | "latin1"
    | "binary"
    | "base64"
    | "ascii"
    | "hex";

export type AESModes =
    | "aes-128-ecb"
    | "aes-192-ecb"
    | "aes-256-ecb"
    | "aes-128-cbc"
    | "aes-192-cbc"
    | "aes-256-cbc"
    | "aes128"
    | "aes192"
    | "aes256"
    | "aes-128-cfb"
    | "aes-192-cfb"
    | "aes-256-cfb"
    | "aes-128-cfb8"
    | "aes-192-cfb8"
    | "aes-256-cfb8"
    | "aes-128-cfb1"
    | "aes-192-cfb1"
    | "aes-256-cfb1"
    | "aes-128-ofb"
    | "aes-192-ofb"
    | "aes-256-ofb"
    | "aes-128-ctr"
    | "aes-192-ctr"
    | "aes-256-ctr"
    | "aes-128-gcm"
    | "aes-192-gcm"
    | "aes-256-gcm";
export type DESModes =
    | "des-ecb"
    | "des-cbc"
    | "des-ede3-cbc"
    | "des-ede3"
    | "des-ede-cbc"
    | "des-ede";
export type CipherSuiteType = AESModes | DESModes;

export interface Cipher extends EventEmitter {
    update(data: BinaryLike): Buffer;
    update(data: string, inputEncoding: InputEncoding): Buffer;
    update(
        data: BinaryLike,
        inputEncoding: InputEncoding | undefined,
        outputEncoding: OutputEncoding,
    ): string;

    final(): Buffer;
    final(outputEncoding: BufferEncoding): string;

    setAutoPadding(auto_padding: boolean): this;
    setAuthTag(): this;
    getAuthTag(): Buffer;
    setAAD(buffer: Buffer, options?: { plaintextLength?: number }): this;
}

export interface Decipher extends EventEmitter {
    update(data: BinaryLike): Buffer;
    update(data: string, inputEncoding: InputEncoding): Buffer;
    update(
        data: BinaryLike,
        inputEncoding: InputEncoding | undefined,
        outputEncoding: OutputEncoding,
    ): string;

    final(): Buffer;
    final(outputEncoding: BufferEncoding): string;

    setAutoPadding(auto_padding: boolean): this;
    setAuthTag(): this;
    getAuthTag(): Buffer;
    setAAD(buffer: Buffer, options?: { plaintextLength?: number }): this;
}

export function createCipher(
    suite: CipherSuiteType,
    password: BinaryLike,
): Cipher;

export function createCipheriv(
    suite: CipherSuiteType,
    key: BinaryLike,
    iv: BinaryLike,
): Cipher;

export function createDecipher(
    suite: CipherSuiteType,
    password: BinaryLike,
): Decipher;

export function createDecipheriv(
    suite: CipherSuiteType,
    key: BinaryLike,
    iv: BinaryLike,
): Decipher;

export function getCiphers(): string[];
export function listCiphers(): string[];
