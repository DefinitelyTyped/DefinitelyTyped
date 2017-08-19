// Type definitions for webpack-hot-middleware 2.15
// Project: https://github.com/glenjamin/webpack-hot-middleware#readme
// Definitions by: Benjamin Lim <https://github.com/bumbleblym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { NextHandleFunction } from 'connect';
import { compiler } from 'webpack';

export = WebpackHotMiddleware;

declare function WebpackHotMiddleware(
	compiler: compiler.Compiler,
	options?: WebpackHotMiddleware.Options
): NextHandleFunction;

declare namespace WebpackHotMiddleware {
	interface Options {
		log?: false | Logger;
		path?: string;
		heartbeat?: number;
	}

	type Logger = (message?: any, ...optionalParams: any[]) => void;
}
