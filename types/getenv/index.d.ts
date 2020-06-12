// Type definitions for getenv 1.0
// Project: https://github.com/ctavan/node-getenv
// Definitions by: Ivan Pankratov <https://github.com/impankratov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />
import { UrlWithStringQuery } from 'url';

interface ParseMappings {
    string: string;
    int: number;
    float: number;
    bool: boolean;
    boolish: boolean;
    url: UrlWithStringQuery;
}
type ParseTypes = keyof ParseMappings;
type ParseWithFallback = [string, ParseMappings['string']];
type ParseWithType<T extends ParseTypes> = [string, ParseMappings[T], T];
type ParseWithEachType =
    | ParseWithType<'string'>
    | ParseWithType<'int'>
    | ParseWithType<'float'>
    | ParseWithType<'bool'>
    | ParseWithType<'boolish'>
    | ParseWithType<'url'>;

/**
 * Alias for `env.string(name, [fallback])`
 */
declare function getenv(
    name: string,
    fallback?: string
): ParseMappings['string'];

declare namespace getenv {
    /**
     * Return as string.
     */
    function string(
        name: string,
        fallback?: ParseMappings['string']
    ): ParseMappings['string'];

    /**
     * Return as integer number.
     */
    function int(
        name: string,
        fallback?: ParseMappings['int']
    ): ParseMappings['int'];

    /**
     * Return as float number.
     */
    function float(
        name: string,
        fallback?: ParseMappings['float']
    ): ParseMappings['float'];

    /**
     * Return as boolean. Only allows true/false as valid values.
     */
    function bool(
        name: string,
        fallback?: ParseMappings['bool']
    ): ParseMappings['bool'];

    /**
     * Return as boolean. Allows true/false/1/0 as valid values.
     */
    function boolish(
        name: string,
        fallback?: ParseMappings['boolish']
    ): ParseMappings['boolish'];

    /**
     * Split value of the environment variable at each comma and return the resulting array
     * where each value has been typecast according to the `type` parameter. An array can be
     * provided as `fallback`.
     */
    function array<T extends ParseTypes = 'string'>(
        name: string,
        type?: T,
        fallback?: Array<ParseMappings[T]>
    ): Array<ParseMappings[T]>;

    /**
     * Return a list of environment variables based on a spec:
     * ```
     *  var config = getenv.multi({
     *    foo: "FOO", // throws if FOO doesn't exist
     *    bar: ["BAR", "defaultval"], // set a default value
     *    baz: ["BAZ", "defaultval", "string"], // parse into type
     *    quux: ["QUUX", undefined, "int"] // parse & throw
     *  });
     * ```
     */
    function multi<
        S extends {
            [k: string]: string | ParseWithFallback | ParseWithEachType;
        }
    >(
        spec: S
    ): {
        [P in keyof S]: S[P][2] extends ParseTypes
            ? ParseMappings[S[P][2]]
            : string
    };

    /**
     * Return a parsed URL as per Node's `require("url").parse`. N.B `url` doesn't validate URLs, so be sure it includes a protocol or you'll get deeply weird results.
     */
    function url(
        name: string,
        fallback?: ParseMappings['url']
    ): ParseMappings['url'];

    /**
     * Disallows fallbacks in environments where you don't want to rely on brittle development
     * defaults (e.g production, integration testing). For example, to disable fallbacks if we
     * indicate production via `NODE_ENV`:
     * ```
     *   if (process.env.NODE_ENV === 'production') {
     *     getenv.disableFallbacks();
     *   }
     * ```
     */
    function disableFallbacks(): void;

    /**
     * Revert the effect of `disableFallbacks()`.
     */
    function enableFallbacks(): void;

    /**
     * `getenv` won't throw any error. If a fallback value is provided, that will be returned, else undefined is returned.
     */
    function disableErrors(): void;

    /**
     * Revert the effect of `disableErrors()`.
     */
    function enableErrors(): void;
}

export = getenv;
