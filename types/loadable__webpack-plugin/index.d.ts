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

declare class AssetsWebpackPlugin extends Plugin {
	constructor(options?: Options);
}

export = AssetsWebpackPlugin;
