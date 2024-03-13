/// <reference types="node" />

import { loader } from "webpack";

export type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

export interface InterpolateOption {
    context?: string | undefined;
    content?: string | Buffer | undefined;
    regExp?: string | RegExp | undefined;
}

export interface OptionObject {
    [key: string]: null | false | true | string;
}

export type HashType = "sha1" | "md4" | "md5" | "sha256" | "sha512";

export type DigestType = "hex" | "base26" | "base32" | "base36" | "base49" | "base52" | "base58" | "base62" | "base64";

/**
 * Recommended way to retrieve the options of a loader invocation
 * {@link https://github.com/webpack/loader-utils#getoptions}
 */
export function getOptions(loaderContext: loader.LoaderContext): Readonly<OptionObject>;

/**
 * Parses a passed string (e.g. loaderContext.resourceQuery) as a query string, and returns an object.
 * {@link https://github.com/webpack/loader-utils#parsequery}
 */
export function parseQuery(optionString: string): OptionObject;

/**
 * Turns a request into a string that can be used inside require() or import while avoiding absolute paths. Use it instead of JSON.stringify(...) if you're generating code inside a loader.
 * {@link https://github.com/webpack/loader-utils#stringifyrequest}
 */
export function stringifyRequest(loaderContext: loader.LoaderContext, resource: string): string;

export function getRemainingRequest(loaderContext: loader.LoaderContext): string;

export function getCurrentRequest(loaderContext: loader.LoaderContext): string;

export function isUrlRequest(url: string, root?: string): boolean;

export function parseString(str: string): string;

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
export function interpolateName(loaderContext: loader.LoaderContext, name: string, options?: any): string;

/**
 * @param buffer
 * @param [hashType='md4']
 * @param [digestType='hex']
 * @param [maxLength=9999]
 */
export function getHashDigest(buffer: Buffer, hashType: HashType, digestType: DigestType, maxLength: number): string;
