// Type definitions for dotenv 6.1
// Project: https://github.com/motdotla/dotenv
// Definitions by: Jussi Kinnula <https://github.com/jussikinnula>
//                 Borek Bernard <https://github.com/borekb>
//                 Eric Naeseth <https://github.com/enaeseth>
//                 Max Beatty <https://github.com/maxbeatty>
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
  options?: DotenvParseOptions
): DotenvParseOutput;

export interface DotenvConfigOptions {
  /**
   * You may specify a custom path if your file containing environment variables is located elsewhere.
   */
  path?: string;

  /**
   * You may specify the encoding of your file containing environment variables.
   */
  encoding?: string;

  /**
   * You may turn on logging to help debug why certain keys or values are not being set as you expect.
   */
  debug?: boolean;
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
 *
 */
export function config(options?: DotenvConfigOptions): DotenvConfigOutput;
export const load: typeof config;
