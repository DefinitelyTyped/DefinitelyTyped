import karma = require("karma");

/**
 * Our configuration sets up karma to run tests based on es modules with the necessary polyfills
 * and fallbacks for older browsers and convenient test reporting.
 * To extend the karma config, we recommend using `deepmerge`.
 * This will do smart merging of complex objects.
 * You can extend any of the configuration.
 */
export function createDefaultConfig(config: karma.Config): karma.Config;
