// Type definitions for webpack-dev-middleware 5.0
// Project: https://github.com/webpack/webpack-dev-middleware
// Definitions by: Benjamin Lim <https://github.com/bumbleblym>
//                 reduckted <https://github.com/reduckted>
//                 Chris Abrams <https://github.com/chrisabrams>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Ma Tianqi <https://github.com/tqma113>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import * as webpack from 'webpack';
import { IncomingMessage, NextHandleFunction } from 'connect';
import { ServerResponse } from 'http';

export = WebpackDevMiddleware;

declare function WebpackDevMiddleware(
    compiler: webpack.Compiler | webpack.MultiCompiler,
    options?: WebpackDevMiddleware.Options,
): WebpackDevMiddleware.WebpackDevMiddleware & NextHandleFunction;

declare namespace WebpackDevMiddleware {
    interface Options {
        /**
         * This property allows a user to register custom mime types or extension mappings
         */
        mimeTypes?: MimeTypeMap | undefined;
        /**
         * If true, the option will instruct the module to write files to the configured location on disk as specified in your webpack config file
         * This option also accepts a Function value, which can be used to filter which files are written to disk
         */
        writeToDisk?: boolean | ((filename: string) => boolean) | undefined;
        /**
         * This property allows a user to pass the list of HTTP request methods accepted by the server.
         * @default [ 'GET', 'HEAD' ]
         */
        methods?: string[] | undefined;
        /** This property allows a user to pass custom HTTP headers on each request. eg. { "X-Custom-Header": "yes" } */
        headers?: Record<string, string> | HeadersHandle | undefined;
        /** The public path that the middleware is bound to */
        publicPath?: string | undefined;
        /** Instructs the module to enable or disable the server-side rendering mode */
        serverSideRender?: boolean | undefined;
        /** Stats options object or preset name. */
        stats?: webpack.Configuration['stats'] | undefined;
        /**
         * Set the default file system which will be used by webpack as primary destination of generated files
         */
        outputFileSystem?: webpack.Compiler['outputFileSystem'] | undefined;
        /**
         * The index path for web server, defaults to "index.html".
         * If falsy (but not undefined), the server will not respond to requests to the root URL.
         */
        index?: string | boolean | undefined;
    }

    interface MimeTypeMap {
        [type: string]: string;
    }

    type Callback = (stats?: webpack.Stats) => void;

    interface Context {
        state: boolean;
        stats: webpack.Stats | null;
        callbacks: Callback[];
        outputFileSystem: webpack.Compiler['outputFileSystem'];
        options: Options;
        compiler: webpack.Compiler;
        watching: webpack.Watching | null;
    }

    interface WebpackDevMiddleware {
        /** Executes a callback function when the compiler bundle is valid, typically after compilation */
        waitUntilValid(callback?: Callback): void;
        /** Instructs a webpack-dev-middleware instance to recompile the bundle. e.g. after a change to the configuration. */
        invalidate(callback?: Callback): void;
        /** A function executed once the middleware has stopped watching. */
        close(callback?: () => void): void;
        /**
         * Get filename from URL.
         * @param url URL for the requested file.
         */
        getFilenameFromUrl(url: string): string | undefined;
        context: Context;
    }

    interface HeadersHandle {
        (req: IncomingMessage, res: ServerResponse, context: Context): Record<string, string> | void;
    }
}
