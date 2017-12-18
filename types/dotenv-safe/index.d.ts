// Type definitions for dotenv-safe 4.0
// Project: https://github.com/rolodato/dotenv-safe
// Definitions by: Stan Goldmann <https://github.com/krenor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import env = require("dotenv")

export interface MissingEnvVarsError extends Error {
  /**
   * Path to example environment file.
   */
  sample: string

  /**
   * Variables which existing in the sample file, but not in the loaded file.
   */
  missing: string[]
}

/**
 * Loads environment variables file into 'process.env'.
 *
 * @throws MissingEnvVarsError
 */
export function load(options?: {
  path?: string,
  /**
   * Path to example environment file.
   * @default ".env.example"
   */
  sample?: string,
  /**
   * Path to environment file.
   * @default ".env"
   */
  silent?: boolean,
  /**
   * Encoding of your file containing environment variables.
   * @default "utf8"
   */
  encoding?: string,
  /**
   * Enabling this option will not throw an error after loading.
   * @default false
   */
  allowEmptyValues?: boolean,
}): env.DotenvResult
