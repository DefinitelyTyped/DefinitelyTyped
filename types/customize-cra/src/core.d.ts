import { Configuration as WebpackConfig } from "webpack";

/**
 * An override function is supplied a webpack config, which it modifies
 * and then returns.
 */
export type OverrideFunc = (config: WebpackConfig) => WebpackConfig;

/**
 * Enables left to right composition of multiple override functions.
 *
 * Any falsy arguments will be ignored.
 *
 * @example
 * module.exports = override(
 *   addDecoratorsLegacy(),
 *
 *   condition && disableEsLint(),
 * );
 */
export function override(...args: Array<OverrideFunc | false | undefined | null | 0>): OverrideFunc;

/**
 * Enables left to right composition of multiple override functions,
 * only for dev mode.
 */
export function overrideDevServer(...args: OverrideFunc[]): OverrideFunc;

/** logs the config to the console, useful for debugging */
export function tap(options?: { message?: string | undefined; dest?: string | undefined }): OverrideFunc;

/**
 * Returns the `babel` loader from the provided `config`.
 *
 * `create-react-app` defines two `babel` configurations, one for js files
 * found in `src/` and another for any js files found outside that directory.
 * This function can target either using the `isOutsideOfApp` param.
 *
 * @param config The webpack config to search.
 * @param isOutsideOfApp Flag for whether to use the `babel-loader`
 * for matching files in `src/` or files outside of `src/`.
 */
export function getBabelLoader(config: WebpackConfig, isOutsideOfApp: boolean): unknown;
