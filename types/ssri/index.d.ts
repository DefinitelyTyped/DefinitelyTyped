/// <reference types="node" />
import { Hash as CryptoHash } from "crypto";
import { Readable, Transform } from "stream";

export interface HashLike {
    algorithm: string;
    digest: string;
    options?: string[] | undefined;
}

export interface IntegrityLike {
    [algorithm: string]: HashLike[];
}

export type IntegrityMap = Integrity & IntegrityLike;

export class Hash implements HashLike {
    constructor(hash: string, opts?: { strict?: boolean | undefined });

    source: string;
    algorithm: string;
    digest: string;
    options?: string[] | undefined;
    isHash: boolean;

    hexDigest(): string;

    toJSON(): string;

    toString(opts?: { strict?: boolean | undefined }): string;
}

export class Integrity {
    isIntegrity: boolean;

    toJSON(): string;

    toString(opts?: { strict?: boolean | undefined; sep?: string | undefined }): string;

    concat(
        integrity: string | IntegrityLike | HashLike,
        opts?: { strict?: boolean | undefined },
    ): IntegrityMap;

    hexDigest(): string;

    match(
        integrity: string | IntegrityLike | HashLike,
        opts?: {
            strict?: boolean | undefined;
            pickAlgorithm?: ((algo1: string, algo2: string) => string) | undefined;
        },
    ): Hash | false;

    /**
     * Safely merges another IntegrityLike or integrity string into an Integrity object.
     */
    merge(
        otherIntegrity?: string | IntegrityLike | HashLike,
        opts?: {
            single?: boolean | undefined;
            strict?: boolean | undefined;
        },
    ): void;

    pickAlgorithm(opts?: {
        pickAlgorithm?: ((algo1: string, algo2: string) => string) | undefined;
    }): string;
}

export function parse(
    sri: string | IntegrityLike | HashLike,
    opts?: { single?: false | undefined; strict?: boolean | undefined },
): IntegrityMap;
export function parse(
    sri: string | IntegrityLike | HashLike,
    opts?: { single: true; strict?: boolean | undefined },
): Hash;
export function parse(
    sri: string | IntegrityLike | HashLike,
    opts?: { single?: boolean | undefined; strict?: boolean | undefined },
): IntegrityMap | Hash;

export function stringify(
    obj: string | IntegrityLike | HashLike,
    opts?: { strict?: boolean | undefined; sep?: string | undefined },
): string;

export function fromHex(
    hexDigest: string,
    algorithm: string,
    opts?: {
        single?: false | undefined;
        strict?: boolean | undefined;
        options?: readonly string[] | undefined;
    },
): IntegrityMap;
export function fromHex(
    hexDigest: string,
    algorithm: string,
    opts?: { single: true; strict?: boolean | undefined; options?: readonly string[] | undefined },
): Hash;
export function fromHex(
    hexDigest: string,
    algorithm: string,
    opts?: {
        single?: boolean | undefined;
        strict?: boolean | undefined;
        options?: readonly string[] | undefined;
    },
): IntegrityMap | Hash;

export function fromData(
    data: string | Buffer | NodeJS.TypedArray | DataView,
    opts?: {
        strict?: boolean | undefined;
        options?: readonly string[] | undefined;
        algorithms?: readonly string[] | undefined;
    },
): IntegrityMap;

export function fromStream(
    stream: Readable,
    opts?: {
        strict?: boolean | undefined;
        options?: readonly string[] | undefined;
        algorithms?: readonly string[] | undefined;
    },
): Promise<IntegrityMap>;
export function fromStream(
    stream: Readable,
    opts?: {
        strict?: boolean | undefined;
        options?: readonly string[] | undefined;
        algorithms?: readonly string[] | undefined;
        Promise?: PromiseConstructorLike | undefined;
    },
): PromiseLike<IntegrityMap>;

export function checkData(
    data: string | Buffer | NodeJS.TypedArray,
    sri: string | IntegrityLike | HashLike,
    opts?: {
        strict?: boolean | undefined;
        error?: boolean | undefined;
        size?: number | undefined;
        pickAlgorithm?: ((algo1: string, algo2: string) => string) | undefined;
    },
): Hash | false;

export function checkStream(
    stream: Readable,
    sri: string | IntegrityLike | HashLike,
    opts?: {
        strict?: boolean | undefined;
        options?: readonly string[] | undefined;
        size?: number | undefined;
        pickAlgorithm?: ((algo1: string, algo2: string) => string) | undefined;
    },
): Promise<Hash>;
export function checkStream(
    stream: Readable,
    sri: string | IntegrityLike | HashLike,
    opts?: {
        strict?: boolean | undefined;
        options?: readonly string[] | undefined;
        size?: number | undefined;
        pickAlgorithm?: ((algo1: string, algo2: string) => string) | undefined;
        Promise?: PromiseConstructorLike | undefined;
    },
): PromiseLike<Hash>;

export function integrityStream(opts?: {
    single?: boolean | undefined;
    strict?: boolean | undefined;
    options?: readonly string[] | undefined;
    algorithms?: readonly string[] | undefined;
    integrity?: string | IntegrityLike | HashLike | undefined;
    size?: number | undefined;
    pickAlgorithm?: ((algo1: string, algo2: string) => string) | undefined;
}): Transform;

export function create(opts?: {
    strict?: boolean | undefined;
    options?: readonly string[] | undefined;
    algorithms?: readonly string[] | undefined;
}): CryptoHash;
