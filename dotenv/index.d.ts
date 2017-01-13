// Type definitions for dotenv 2.0
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
 * @return Object Object with the parsed keys and values, e.g., 'KEY=value' becomes { KEY: 'value' }
 */
export function config(options?: DotenvOptions): {[name: string]: string} | false;

export interface DotenvOptions {
    /**
     * Dotenv outputs a warning to your console if missing a .env file. Suppress this warning using silent.
     *
     * @default false
     */
    silent?: boolean;

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
