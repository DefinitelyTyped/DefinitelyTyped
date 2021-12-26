// Type definitions for name-all-modules-plugin 1.0
// Project: https://github.com/timse/name-all-modules-plugin#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin } from 'webpack';

/**
 * Names all remaining modules that do not get named via NamedModulesPlugin
 */
declare class NameAllModulesPlugin extends Plugin {}

/**
 * Names all remaining modules that do not get named via NamedModulesPlugin
 * {@link https://github.com/timse/name-all-modules-plugin}
 */
export = NameAllModulesPlugin;
