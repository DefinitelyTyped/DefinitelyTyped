export = isSemver;

/**
 * Check if an input value is a valid semver version or not.
 *
 * @param input The version string to check.
 * @returns `true` if the input is a valid semver version or `false` otherwise.
 *
 * @example
 * import isSemver = require("is-semver");
 *
 * console.log(isSemver("1.2.3"));
 * // => true
 *
 * console.log(isSemver("a.b.c"));
 * // => false
 *
 * console.log(isSemver("foo"));
 * // => false
 */
declare function isSemver(input: string): boolean;
