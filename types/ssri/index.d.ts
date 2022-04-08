// Type definitions for ssri 7.1
// Project: https://github.com/zkat/ssri
// Definitions by: Jeow Li Huan <https://github.com/huan086>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Hash as CryptoHash } from "crypto";
import { Readable, Transform } from "stream";

export interface HashLike {
    algorithm: string;
    digest: string;
    options?: string[];
}

export interface IntegrityLike {
    [algorithm: string]: HashLike[];
}

export type IntegrityMap = Integrity & IntegrityLike;

export class Hash implements HashLike {
    constructor(hash: string, opts?: { strict?: boolean });

    source: string;
    algorithm: string;
    digest: string;
    options?: string[];
    isHash: boolean;

    hexDigest(): string;

    toJSON(): string;

    toString(opts?: { strict?: boolean }): string;
}

export class Integrity {
    isIntegrity: boolean;

    toJSON(): string;

    toString(opts?: { strict?: boolean, sep?: string }): string;

    concat(
        integrity: string | IntegrityLike | HashLike,
        opts?: { strict?: boolean },
    ): IntegrityMap;

    hexDigest(): string;

    match(
        integrity: string | IntegrityLike | HashLike,
        opts?: {
            strict?: boolean,
            pickAlgorithm?: (algo1: string, algo2: string) => string,
        },
    ): Hash | false;

    /**
     * Safely merges another IntegrityLike or integrity string into an Integrity object.
     */
    merge(
        otherIntegrity?: string | IntegrityLike | HashLike,
        opts?: {
            single?: boolean,
            strict?: boolean
    }): void;

    pickAlgorithm(opts?: {
        pickAlgorithm?: (algo1: string, algo2: string) => string,
    }): string;
}

export function parse(
    sri: string | IntegrityLike | HashLike,
    opts?: { single?: false, strict?: boolean, },
): IntegrityMap;
export function parse(
    sri: string | IntegrityLike | HashLike,
    opts?: { single: true, strict?: boolean, },
): Hash;
export function parse(
    sri: string | IntegrityLike | HashLike,
    opts?: { single?: boolean, strict?: boolean, },
): IntegrityMap | Hash;

export function stringify(
    obj: string | IntegrityLike | HashLike,
    opts?: { strict?: boolean, sep?: string, },
): string;

export function fromHex(
    hexDigest: string,
    algorithm: string,
    opts?: {
        single?: false,
        strict?: boolean,
        options?: ReadonlyArray<string>,
    },
): IntegrityMap;
export function fromHex(
    hexDigest: string,
    algorithm: string,
    opts?: { single: true, strict?: boolean, options?: ReadonlyArray<string> },
): Hash;
export function fromHex(
    hexDigest: string,
    algorithm: string,
    opts?: {
        single?: boolean,
        strict?: boolean,
        options?: ReadonlyArray<string>,
    },
): IntegrityMap | Hash;

export function fromData(
    data: string | Buffer | NodeJS.TypedArray | DataView,
    opts?: {
        strict?: boolean,
        options?: ReadonlyArray<string>,
        algorithms?: ReadonlyArray<string>,
    },
): IntegrityMap;

export function fromStream(
    stream: Readable,
    opts?: {
        strict?: boolean,
        options?: ReadonlyArray<string>,
        algorithms?: ReadonlyArray<string>,
    },
): Promise<IntegrityMap>;
export function fromStream(
    stream: Readable,
    opts?: {
        strict?: boolean,
        options?: ReadonlyArray<string>,
        algorithms?: ReadonlyArray<string>,
        Promise?: PromiseConstructorLike,
    },
): PromiseLike<IntegrityMap>;

export function checkData(
    data: string | Buffer | NodeJS.TypedArray,
    sri: string | IntegrityLike | HashLike,
    opts?: {
        strict?: boolean,
        error?: boolean,
        size?: number,
        pickAlgorithm?: (algo1: string, algo2: string) => string,
    },
): Hash | false;

export function checkStream(
    stream: Readable,
    sri: string | IntegrityLike | HashLike,
    opts?: {
        strict?: boolean,
        options?: ReadonlyArray<string>,
        size?: number,
        pickAlgorithm?: (algo1: string, algo2: string) => string,
    },
): Promise<Hash>;
export function checkStream(
    stream: Readable,
    sri: string | IntegrityLike | HashLike,
    opts?: {
        strict?: boolean,
        options?: ReadonlyArray<string>,
        size?: number,
        pickAlgorithm?: (algo1: string, algo2: string) => string,
        Promise?: PromiseConstructorLike,
    },
): PromiseLike<Hash>;

export function integrityStream(opts?: {
    single?: boolean,
    strict?: boolean,
    options?: ReadonlyArray<string>,
    algorithms?: ReadonlyArray<string>,
    integrity?: string | IntegrityLike | HashLike,
    size?: number,
    pickAlgorithm?: (algo1: string, algo2: string) => string,
}): Transform;

export function create(opts?: {
    strict?: boolean,
    options?: ReadonlyArray<string>,
    algorithms?: ReadonlyArray<string>,
}): CryptoHash;
