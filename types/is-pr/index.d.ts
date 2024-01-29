export = isPR;

/**
 * Detects if the current environment is a Continuous Integration
 * server configured to run a PR build.
 *
 * @returns `true` if running in CI with a PR build, otherwise `false`.
 * If PR detection is not supported for the current CI server, the value will be `null`.
 *
 * @example
 * import isPR = require('is-pr')
 *
 * if (isPR) {
 *   console.log('The code is running on a CI server as part of a PR build')
 * }
 */
declare const isPR: boolean | null;
