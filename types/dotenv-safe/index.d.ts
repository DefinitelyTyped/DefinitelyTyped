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
 * @param {object}  options
 * @param {string}  [options.sample=".env.example"] Path to example environment file.
 * @param {string}  [options.path=".env"] Path to environment file.
 * @param {string}  [options.encoding="utf8"] Encoding of your file containing environment variables.
 * @param {boolean} [options.allowEmptyValues=false] Enabling this option will not throw an error after loading.
 *
 * @throws MissingEnvVarsError
 *
 * @return env.DotenvResult
 */
export function load(options?: {
  path?: string,
  sample?: string,
  silent?: boolean,
  encoding?: string,
  allowEmptyValues?: boolean,
}): env.DotenvResult
