/// <reference types="node" />

import { LoaderContext } from "webpack";

export type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

export interface LoaderInterpolateOption {
    customInterpolateName?: typeof interpolateName;
}

export interface InterpolateOption {
    context?: string | undefined;
    content?: string | Buffer | undefined;
    regExp?: string | RegExp | undefined;
}

export interface OptionObject {
    [key: string]: null | false | true | string;
}

export type InterpolateNameType = string | ((resourcePath: string, resourceQuery?: string) => string);

export type HashType = "xxhash64" | "sha1" | "md4" | "native-md4" | "md5" | "sha256" | "sha512";

export type DigestType =
    | "hex"
    | "base26"
    | "base32"
    | "base36"
    | "base49"
    | "base52"
    | "base58"
    | "base62"
    | "base64"
    | "base64safe";
/**
 * {@link https://https://github.com/webpack/loader-utils#urltorequest}
 */
export function isUrlRequest(url: string, root?: string): boolean;

/**
 * Converts some resource URL to a webpack module request.
 * {@link https://github.com/webpack/loader-utils#urltorequest}
 */
export function urlToRequest(url: string, root?: string): string;

/**
 * Interpolates a filename template using multiple placeholders and/or a regular expression.
 * The template and regular expression are set as query params called name and regExp on the current loader's context.
 * {@link https://github.com/webpack/loader-utils#interpolatename}
 */
export function interpolateName(
    loaderContext: LoaderContext<LoaderInterpolateOption>,
    name: InterpolateNameType,
    options?: InterpolateOption,
): string;

/**
 * @param buffer the content that should be hashed
 * @param [hashType='xxhash64'] one of `xxhash64`, `sha1`, `md4`, `md5`, `sha256`, `sha512` or any other node.js supported hash type
 * @param [digestType='hex'] one of `hex`, `base26`, `base32`, `base36`, `base49`, `base52`, `base58`, `base62`, `base64`, `base64safe`
 * @param [maxLength=9999] the maximum length in chars
 * {@link https://github.com/webpack/loader-utils#gethashdigest}
 */
export function getHashDigest(buffer: Buffer, hashType?: HashType, digestType?: DigestType, maxLength?: number): string;
