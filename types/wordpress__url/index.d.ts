// Type definitions for @wordpress/url 2.3
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/url/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

export interface InputArgsObject {
    [key: string]: InputArgsValue;
}
export interface OutputArgObject {
    [key: string]: OutputArg;
}

export interface InputArgsArray extends Array<InputArgsValue> {}
export interface OutputArgArray extends Array<OutputArg> {}

export type InputArgsValue =
    | string
    | number
    | boolean
    | InputArgsObject
    | InputArgsArray
    | null
    | undefined;

export type InputArgs = InputArgsObject;
export type OutputArg = string | OutputArgObject | OutputArgArray;

/**
 * Appends arguments as querystring to the provided URL. If the URL already
 * includes query arguments, the arguments are merged with (and take precedent
 * over) the existing set.
 */
export function addQueryArgs(url?: string, args?: InputArgs): string;

/**
 * Returns a URL for display.
 */
export function filterURLForDisplay(url: string): string;

/**
 * Returns the authority part of the URL.
 */
export function getAuthority(url: string): string | undefined;

/**
 * Returns the fragment part of the URL.
 */
export function getFragment(url: string): string | undefined;

/**
 * Returns the path part of the URL.
 */
export function getPath(url: string): string | undefined;

/**
 * Returns the protocol part of the URL.
 */
export function getProtocol(url: string): string | undefined;

/**
 * Returns a single query argument of the url
 */
export function getQueryArg(url: string, arg: string): OutputArg | undefined;

/**
 * Returns the query string part of the URL.
 */
export function getQueryString(url: string): string | undefined;

/**
 * Determines whether the URL contains a given query arg.
 */
export function hasQueryArg(url: string, arg: string): boolean;

/**
 * Determines whether the given string looks like a URL.
 */
export function isURL(url: string): boolean;

/**
 * Checks for invalid characters within the provided authority.
 */
export function isValidAuthority(url: string): boolean;

/**
 * Checks for invalid characters within the provided fragment.
 */
export function isValidFragment(frag: string): boolean;

/**
 * Checks for invalid characters within the provided path.
 */
export function isValidPath(path: string): boolean;

/**
 * Tests if a url protocol is valid.
 */
export function isValidProtocol(proto: string): boolean;

/**
 * Checks for invalid characters within the provided query string.
 */
export function isValidQueryString(query: string): boolean;

/**
 * Prepends "http://" to a url, if it looks like something that is meant to be a TLD.
 */
export function prependHTTP(url: string): string;

/**
 * Removes arguments from the query string of the url
 */
export function removeQueryArgs(url: string, ...args: readonly string[]): string;

/**
 * Safely decodes a URI with `decodeURI`. Returns the URI unmodified if
 * `decodeURI` throws an error.
 */
export function safeDecodeURI(uri: string): string;
