// Type definitions for dotenv-safe 8.1
// Project: https://github.com/rolodato/dotenv-safe
// Definitions by: Stan Goldmann <https://github.com/krenor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import dotenv = require('dotenv');

export interface MissingEnvVarsError extends Error {
    /**
     * Path to example environment file.
     */
    sample: string;

    /**
     * Variables which existing in the sample file, but not in the loaded file.
     */
    missing: string[];
}

export interface DotenvSafeOptions extends dotenv.DotenvConfigOptions {
    /**
     * Path to example environment file. (Option 1)
     * @default ".env.example"
     */
    example?: string;

    /**
     * Path to example environment file. (Option 2 -- example takes precedence)
     * @default ".env.example"
     */
    sample?: string;

    /**
     * Enabling this option will not throw an error after loading.
     * @default false
     */
    allowEmptyValues?: boolean;
}

export interface DotenvSafeConfigOutput extends dotenv.DotenvConfigOutput {
    /**
     * key-value pairs required by .env.example
     */
    required: dotenv.DotenvParseOutput;
}

/**
 * Loads environment variables file into 'process.env'.
 *
 * @throws MissingEnvVarsError
 */
export function config(options?: DotenvSafeOptions): DotenvSafeConfigOutput;
