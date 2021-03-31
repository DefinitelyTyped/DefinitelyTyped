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
    compiler: webpack.ICompiler,
    options?: WebpackHotMiddleware.MiddlewareOptions
): NextHandleFunction & WebpackHotMiddleware.EventStream;

declare namespace WebpackHotMiddleware {
    interface ClientOptions {
        path?: string;
        reload?: boolean;
        name?: string;
        timeout?: number;
        overlay?: boolean;
        noInfo?: boolean;
        quiet?: boolean;
        dynamicPublicPath?: boolean;
        autoConnect?: boolean;
        ansiColors?: {
            [key: string]: any
        };
        overlayStyles?: {
            [key: string]: any
        };
        overlayWarnings?: boolean;
    }
    interface MiddlewareOptions {
        log?: false | Logger;
        path?: string;
        heartbeat?: number;
    }

    type Logger = (message?: any, ...optionalParams: any[]) => void;

    interface EventStream {
        publish(payload: any): void;
        close(): void;
    }
}
