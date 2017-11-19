// Type definitions for webpack-hot-middleware 2.16
// Project: https://github.com/glenjamin/webpack-hot-middleware#readme
// Definitions by: Benjamin Lim <https://github.com/bumbleblym>, Ron Martinez <https://github.com/icylace>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { NextHandleFunction } from 'connect';
import * as webpack from 'webpack';

export = WebpackHotMiddleware;

declare function WebpackHotMiddleware(
	compiler: webpack.ICompiler,
	options?: WebpackHotMiddleware.Options
): NextHandleFunction & WebpackHotMiddleware.EventStream;

declare namespace WebpackHotMiddleware {
	interface Options {
		log?: false | Logger;
		path?: string;
		heartbeat?: number;
	}

	type Logger = (message?: any, ...optionalParams: any[]) => void;

	interface EventStream {
		publish(payload: any): void;
	}
}
