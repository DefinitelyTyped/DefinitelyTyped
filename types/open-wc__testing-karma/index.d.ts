// Type definitions for @open-wc/testing-karma 3.3
// Project: https://github.com/open-wc/open-wc/tree/master/packages/testing-karma
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import karma = require('karma');

/**
 * Our configuration sets up karma to run tests based on es modules with the necessary polyfills
 * and fallbacks for older browsers and convenient test reporting.
 * To extend the karma config, we recommend using `deepmerge`.
 * This will do smart merging of complex objects.
 * You can extend any of the configuration.
 */
export function createDefaultConfig(config: karma.Config): karma.Config;
