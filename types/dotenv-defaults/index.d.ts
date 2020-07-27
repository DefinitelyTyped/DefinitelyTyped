// Type definitions for dotenv-defaults 2.0
// Project: https://github.com/mrsteele/dotenv-defaults#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DotenvParseOutput, DotenvConfigOutput, DotenvConfigOptions } from 'dotenv';

/**
 * A dotenv system that supports defaults
 */

declare module 'dotenv' {
    interface DotenvConfigOptions {
        /**
         * @default '.env.defaults'
         */
        defaults?: string;
    }
}

/**
 * Parses objects like before, but with defaults!
 * @param src - The original src.
 * @param [defaultSrc] - The new-and-improved default sour
 */
export function parse(src: string, defaultSrc?: string): DotenvParseOutput;

/**
 * Runs the configurations and applies it to process.env.
 * @param [options] - The options to determnie how this goes
 */
export function config(options?: DotenvConfigOptions): DotenvConfigOutput;
