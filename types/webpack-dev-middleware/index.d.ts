// Type definitions for webpack-dev-middleware 2.0
// Project: https://github.com/webpack/webpack-dev-middleware
// Definitions by: Benjamin Lim <https://github.com/bumbleblym>
//                 reduckted <https://github.com/reduckted>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as webpack from 'webpack';
import * as loglevel from 'loglevel';
import { NextHandleFunction } from 'connect';
import MemoryFileSystem = require('memory-fs');

export = WebpackDevMiddleware;

declare function WebpackDevMiddleware(
	compiler: webpack.ICompiler,
	options?: WebpackDevMiddleware.Options
): WebpackDevMiddleware.WebpackDevMiddleware & NextHandleFunction;

declare namespace WebpackDevMiddleware {
	interface Options {
		logLevel?: string;
		lazy?: boolean;
		watchOptions?: webpack.Options.WatchOptions;
		publicPath: string;
		index?: string;
		headers?: {
			[name: string]: string;
		};
		stats?: webpack.Options.Stats;
		reporter?: Reporter | null;
		serverSideRender?: boolean;
		logger?: Logger;
		filename?: string;
	}

	interface ReporterOptions {
		state: boolean;
		stats?: webpack.Stats;
		log: Logger;
	}

	type Logger = loglevel.Logger;
	type Reporter = (middlewareOptions: Options, reporterOptions: ReporterOptions) => void;

	interface WebpackDevMiddleware {
		close(callback?: () => void): void;
		invalidate(callback?: (stats: webpack.Stats) => void): void;
		waitUntilValid(callback?: (stats: webpack.Stats) => void): void;
		getFilenameFromUrl: (url: string) => string | false;
		fileSystem: MemoryFileSystem;
	}
}
