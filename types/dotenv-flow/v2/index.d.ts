// Type definitions for dotenv-flow 2.0
// Project: https://github.com/kerimdzhanov/dotenv-flow
// Definitions by: Vincent Langlet <https://github.com/vincentlanglet>
//                 Dan Kerimdzhanov <https://github.com/kerimdzhanov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface DotenvParseOptions {
    /**
     * You may turn on logging to help debug why certain keys or values are not being set as you expect.
     */
    debug?: boolean;
}

export interface DotenvParseOutput {
    [name: string]: string;
}

/**
 * Parses a string or buffer in the .env file format into an object.
 *
 * @param src - contents to be parsed
 * @param options - additional options
 * @returns an object with keys and values based on `src`
 */
export function parse(
    src: string | Buffer,
    options?: DotenvParseOptions,
): DotenvParseOutput;

export interface DotenvConfigOptions {
    /**
     * Node environment (development/test/production/etc,.).
     */
    node_env?: string;

    /**
     * Default node environment to use if `process.env.NODE_ENV` is not present.
     */
    default_node_env?: string;

    /**
     * Path to `.env*` files directory.
     */
    path?: string;

    /**
     * Encoding for reading the `.env*` files.
     */
    encoding?: string;

    /**
     * In some cases the original "dotenv" library can be used by one of the dependent npm modules.
     * It causes calling the original `dotenv.config()` that loads the `.env` file from your project before you can call `dotenv-flow.config()`.
     *
     * Such cases breaks `.env*` files priority because the previously loaded environment variables are treated as shell-defined thus having the higher priority.
     *
     * Setting the `purge_dotenv` option to `true` can gracefully fix this issue.
     */
    purge_dotenv?: boolean;
}

export interface DotenvConfigOutput {
    error?: Error;
    parsed?: DotenvParseOutput;
}

/**
 * Loads `.env` file contents into {@link https://nodejs.org/api/process.html#process_process_env | `process.env`}.
 * Example: 'KEY=value' becomes { parsed: { KEY: 'value' } }
 *
 * @param options - controls behavior
 * @returns an object with a `parsed` key if successful or `error` key if an error occurred
 */
export function config(options?: DotenvConfigOptions): DotenvConfigOutput;
