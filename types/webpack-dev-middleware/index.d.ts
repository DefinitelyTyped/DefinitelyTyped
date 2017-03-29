// Type definitions for webpack-dev-middleware 1.9
// Project: http://github.com/webpack/webpack-dev-middleware
// Definitions by: Benjamin Lim <https://github.com/bumbleblym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { NextHandleFunction } from 'connect';
import { compiler } from 'webpack';

export = WebpackDevMiddleware;

declare function WebpackDevMiddleware(
	compiler: compiler.Compiler,
	options?: WebpackDevMiddleware.Options
): WebpackDevMiddleware.WebpackDevMiddleware & NextHandleFunction;

declare namespace WebpackDevMiddleware {
	interface Options {
		noInfo?: boolean;
		quiet?: boolean;
		lazy?: boolean;
		watchOptions?: compiler.WatchOptions;
		publicPath: string;
		index?: string;
		headers?: {
			[name: string]: string;
		};
		stats?: compiler.StatsToStringOptions;
		reporter?: Reporter | null;
		serverSideRender?: boolean;

		log?: Logger;
		warn?: Logger;
		error?: Logger;
		filename?: string;
	}

	interface ReporterOptions {
		state: boolean;
		stats: compiler.Stats;
		options: Options;
	}

	type Reporter = (reporterOptions: ReporterOptions) => void;

	type Logger = (message?: any, ...optionalParams: any[]) => void;

	interface WebpackDevMiddleware {
		close(callback?: () => void): void;
		invalidate(callback?: (stats: compiler.Stats) => void): void;
		waitUntilValid(callback?: (stats: compiler.Stats) => void): void;
	}
}
