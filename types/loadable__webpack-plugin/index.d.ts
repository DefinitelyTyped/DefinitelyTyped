// Type definitions for @loadable/webpack-plugin 5.2
// Project: https://github.com/smooth-code/loadable-components
// Definitions by: Martynas Kadiša <https://github.com/martynaskadisa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'webpack';

interface Options {
	/**
	 * Stats filename (default to loadable-stats.json)
	 */
	filename?: string;
	/**
	 * Always write assets to disk (default to false)
	 */
	writeToDisk?: boolean;
}

declare class LoadablePlugin extends Plugin {
	constructor(options?: Options);
}

export default LoadablePlugin;
