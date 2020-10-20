// Type definitions for bindings 1.3
// Project: https://github.com/TooTallNate/node-bindings
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>, Boris Gulay <https://github.com/BoresXP>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface BindingOptions {
	/**
	 * Arrow symbol used in error text on failed loading (default: process.env.NODE_BINDINGS_ARROW || ' → ').
	 */
	arrow?: string;

	/**
	 * Name of directory with compiled modules (default: process.env.NODE_BINDINGS_COMPILED_DIR || 'compiled').
	 */
	compiled?: string;

	/**
	 * Platform of running process (default: process.platform).
	 */
	platform?: NodeJS.Platform;

	/**
	 * Architectore of the process (default: process.arch).
	 */
	arch?: string;

	/**
	 * Name of directory used by NodeGyp (default: 'node-v' + process.versions.modules + '-' + process.platform + '-' + process.arch).
	 */
	nodePreGyp?: string;

	/**
	 * Version of NodeJS running script (default: process.versions.node).
	 */
	version?: string;

	/**
	 * Name of native module to be loaded (default: 'bindings.node').
	 */
	bindings?: string;

	/**
	 * Array of arrays of strings with path components. Used to build full paths to modules to be loaded.
	 * Can contain keywords, that will be translated during build of result path:
	 * - module_root - root directory of current module
	 * - bindings - BindingOptions.bindings
	 * - compiled - BindingOptions.compiled
	 * - platform - BindingOptions.platform
	 * - arch - BindingOptions.arch
	 * - nodePreGyp - BindingOptions.nodePreGyp
	 * - version - BindingOptions.version
	 */
    try?: string[][];
}

/**
 * The main `bindings()` function loads the compiled bindings for a given module.
 * It uses V8's Error API to determine the parent filename that this function is
 * being invoked from, which is then used to find the root directory.
 * @param mod Module name or loading configuration
 * @returns loaded module or undefined
 */
export default function bindings(mod: string | BindingOptions): any;
