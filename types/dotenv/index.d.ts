// Type definitions for dotenv 4.0
// Project: https://github.com/motdotla/dotenv
// Definitions by: Jussi Kinnula <https://github.com/jussikinnula/>, Borek Bernard <https://github.com/borekb>, Eric Naeseth <https://github.com/enaeseth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * Parses a string or buffer in the .env file format into an object.
 */
export function parse(src: string | Buffer): {[name: string]: string};

/**
 * Loads `.env` into `process.env`.
 *
 * @param options
 * @return Object Object with either
 * - "parsed" containing the parsed keys and values or
 * - "error" containing an Error object
 *
 * Example: 'KEY=value' becomes { parsed: { KEY: 'value' } }
 */
export function config(options?: DotenvOptions): DotenvResult;

export interface DotenvOptions {
    /**
     * You can specify a custom path if your file containing environment variables is named or located differently.
     *
     * @default '.env'
     */
    path?: string;

    /**
     * You may specify the encoding of your file containing environment variables using this option.
     *
     * @default 'utf8'
     */
    encoding?: string;
}

export interface DotenvResult {
    error?: Error;
    parsed?: {
        [name: string]: string;
    };
}
