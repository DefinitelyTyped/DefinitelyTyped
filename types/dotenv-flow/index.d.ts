// Type definitions for dotenv-flow 3.0
// Project: https://github.com/kerimdzhanov/dotenv-flow
// Definitions by: Vincent Langlet <https://github.com/vincentlanglet>
//                 Dan Kerimdzhanov <https://github.com/kerimdzhanov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface DotenvListFilesOptions {
    /**
     * Node environment (development/test/production/etc,.).
     */
    node_env?: string;
}

/**
 * Returns a list of `.env*` filenames ordered by the env files priority from lowest to highest.
 *
 * @param dirname - path to `.env*` files' directory
 * @param options - `.env*` files listing options
 * @return a list of filenames for a given environment
 */
export function listDotenvFiles(dirname: string, options?: DotenvListFilesOptions): string[];

export interface DotenvReadFileOptions {
    /**
     * Encoding for reading the `.env*` files.
     */
    encoding?: string;
}

export interface DotenvParseOutput {
    [name: string]: string;
}

/**
 * Parse a given file(s) to use the result programmatically.
 * When several filenames are given, the parsed variables are merged using the "overwrite" strategy.
 *
 * @param filenames - filename or a list of filenames to parse
 * @param options - `fs.readFileSync` options
 * @return the resulting map of `{ env_var: value }` as an object
 */
export function parse(filenames: string | string[], options?: DotenvReadFileOptions): DotenvParseOutput;

export interface DotenvLoadOutput {
    error?: Error;
    parsed?: DotenvParseOutput;
}

/**
 * Load variables defined in a given file(s) into `process.env`.
 *
 * @param filenames - filename or a list of filenames to load
 * @param options - `fs.readFileSync` options
 * @return an object with a `parsed` key containing the loaded content or an `error` key with an error that is occurred
 */
export function load(filenames: string | string[], options?: DotenvReadFileOptions): DotenvLoadOutput;

/**
 * Unload variables defined in a given file(s) from `process.env`.
 *
 * @param filenames - filename or a list of filenames to unload
 * @param options - `fs.readFileSync` options
 */
export function unload(filenames: string | string[], options?: DotenvReadFileOptions): void;

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

/**
 * Main entry point into the "dotenv-flow". Allows configuration before loading `.env*` files.
 *
 * @param options - configuration options
 * @return an object with a `parsed` key containing the loaded content or an `error` key with an error that is occurred
 */
export function config(options?: DotenvConfigOptions): DotenvLoadOutput;
