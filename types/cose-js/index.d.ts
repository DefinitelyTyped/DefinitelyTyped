// Type definitions for cose-js 0.8
// Project: https://github.com/erdtman/COSE-JS
// Definitions by: Kyle Hensel <https://github.com/k-yle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable } from 'stream';

export type BufferLike = string | Buffer | ArrayBuffer | Uint8Array | Uint8ClampedArray | DataView | Readable;

export interface HeaderParameters {
    partyUNonce?: BufferLike;
    static_key_id?: BufferLike;
    static_key?: BufferLike;
    ephemeral_key?: BufferLike;
    alg?: BufferLike;
    crit?: BufferLike;
    content_type?: BufferLike;
    ctyp?: BufferLike;
    kid?: BufferLike;
    IV?: BufferLike;
    Partial_IV?: BufferLike;
    counter_signature?: BufferLike;
}

export interface Headers {
    u?: HeaderParameters;
    p?: HeaderParameters;
}

export interface Key {
    crv?: string;
    k?: string;
    x?: BufferLike;
    y?: BufferLike;
    d?: BufferLike;
    kty?: string;
}

export namespace encrypt {
    interface Signer {
        key: Buffer;
    }

    interface CreateOptions {
        externalAAD?: Buffer;
        randomSource?(bytes: number): Buffer;
        contextIv?: Buffer;
        encodep?: 'empty';
        excludetag?: boolean;
    }

    function create(
        headers: Headers,
        payload: string,
        recipient: Signer | Signer[],
        options?: CreateOptions,
    ): Promise<Buffer>;

    function read(COSEMessage: Buffer, key: Buffer): Promise<Buffer>;
}

export namespace mac {
    interface Signer {
        key: Buffer;
    }

    function create(headers: Headers, plaintext: string, signer: Signer): Promise<Buffer>;

    function read(COSEMessage: Buffer, key: Buffer): Promise<Buffer>;
}

export namespace sign {
    interface Signer {
        key: Key;
        externalAAD?: Buffer;
    }

    interface VerifyOptions {
        defaultType?: number;
    }

    interface CreateOptions {
        encodep?: 'empty';
        excludetag?: boolean;
    }

    /** throws an error if verification fails */
    function verify(payload: BufferLike, verifier: Signer, options?: VerifyOptions): Promise<Buffer>;

    /** throws an error if verification fails */
    function verifySync(payload: BufferLike, verifier: Signer, options?: VerifyOptions): Buffer;

    function create(
        headers: Headers,
        payload: BufferLike,
        signers: Signer | Signer[],
        options?: CreateOptions,
    ): Promise<Buffer>;
}
