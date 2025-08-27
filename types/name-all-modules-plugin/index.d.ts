import { Plugin } from "webpack";

/**
 * Names all remaining modules that do not get named via NamedModulesPlugin
 */
declare class NameAllModulesPlugin extends Plugin {}

/**
 * Names all remaining modules that do not get named via NamedModulesPlugin
 * {@link https://github.com/timse/name-all-modules-plugin}
 */
export = NameAllModulesPlugin;
