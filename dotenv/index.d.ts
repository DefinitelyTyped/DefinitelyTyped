// Type definitions for dotenv 2.0.0
// Project: https://github.com/motdotla/dotenv
// Definitions by: Jussi Kinnula <https://github.com/jussikinnula/>, Borek Bernard <https://github.com/borekb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Loads `.env` into `process.env`.
 *
 * @param options
 * @return Object Object with the parsed keys and values, e.g., 'KEY=value' becomes { KEY: 'value' }
 */
export function config(options?: DotenvOptions): Object | false;

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
