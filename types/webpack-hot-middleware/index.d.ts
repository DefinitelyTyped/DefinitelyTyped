// Type definitions for webpack-hot-middleware 2.25
// Project: https://github.com/webpack-contrib/webpack-hot-middleware
// Definitions by: Benjamin Lim <https://github.com/bumbleblym>
//               Ron Martinez <https://github.com/icylace>
//               Chris Abrams <https://github.com/chrisabrams>
//               Ilya Zelenko <https://github.com/iliyaZelenko>
//               Rodrigo Saboya <https://github.com/saboya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { NextHandleFunction } from 'connect';
import * as webpack from 'webpack';

export = WebpackHotMiddleware;

declare function WebpackHotMiddleware(
    compiler: webpack.Compiler | webpack.MultiCompiler,
    options?: WebpackHotMiddleware.MiddlewareOptions
): NextHandleFunction & WebpackHotMiddleware.EventStream;

declare namespace WebpackHotMiddleware {
    interface ClientOptions {
        path?: string | undefined;
        reload?: boolean | undefined;
        name?: string | undefined;
        timeout?: number | undefined;
        overlay?: boolean | undefined;
        noInfo?: boolean | undefined;
        quiet?: boolean | undefined;
        dynamicPublicPath?: boolean | undefined;
        autoConnect?: boolean | undefined;
        ansiColors?: {
            [key: string]: any
        } | undefined;
        overlayStyles?: {
            [key: string]: any
        } | undefined;
        overlayWarnings?: boolean | undefined;
    }
    interface MiddlewareOptions {
        log?: false | Logger | undefined;
        path?: string | undefined;
        heartbeat?: number | undefined;
    }

    type Logger = (message?: any, ...optionalParams: any[]) => void;

    interface EventStream {
        publish(payload: any): void;
        close(): void;
    }
}
