import type { Configuration as WebpackConfig } from 'webpack';

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
export function tap(options?: { message?: string; dest?: string }): OverrideFunc;
