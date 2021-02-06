// Type definitions for webpack-dev-middleware 3.7
// Project: https://github.com/webpack/webpack-dev-middleware
// Definitions by: Benjamin Lim <https://github.com/bumbleblym>
//                 reduckted <https://github.com/reduckted>
//                 Chris Abrams <https://github.com/chrisabrams>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as webpack from 'webpack';
import * as loglevel from 'loglevel';
import { NextHandleFunction } from 'connect';
import MemoryFileSystem = require('memory-fs');

export = WebpackDevMiddleware;

declare function WebpackDevMiddleware(
    compiler: webpack.ICompiler,
    options?: WebpackDevMiddleware.Options,
): WebpackDevMiddleware.WebpackDevMiddleware & NextHandleFunction;

declare namespace WebpackDevMiddleware {
    interface Options {
        filename?: string;
        /**
         * Set the default file system which will be used by webpack as primary destination of generated files
         */
        fs?: MemoryFileSystem;
        /** This property allows a user to pass custom HTTP headers on each request. eg. { "X-Custom-Header": "yes" } */
        headers?: {
            [name: string]: string;
        };
        /**
         * The index path for web server, defaults to "index.html".
         * If falsy (but not undefined), the server will not respond to requests to the root URL.
         */
        index?: string | boolean;
        /**
         * This option instructs the module to operate in 'lazy' mode,
         * meaning that it won't recompile when files change, but rather on each request.
         */
        lazy?: boolean;
        /**
         * In the rare event that a user would like to provide a custom logging interface,
         * this property allows the user to assign one
         */
        logger?: Logger;
        /** This property defines the level of messages that the module will log */
        logLevel?: 'info' | 'warn' | 'error' | 'trace' | 'debug' | 'silent';
        /**
         * If true the log output of the module will be prefixed by a timestamp in the HH:mm:ss format.
         * @default false
         */
        logTime?: boolean;
        /**
         * This property allows a user to pass the list of HTTP request methods accepted by the server.
         * @default [ 'GET', 'HEAD' ]
         */
        methods?: string[];
        /**
         * This property allows a user to register custom mime types or extension mappings
         * @default null
         */
        mimeTypes?: MimeTypeMap | OverrideMimeTypeMap | null;
        /** The public path that the middleware is bound to */
        publicPath?: string;
        /** Allows users to provide a custom reporter to handle logging within the module */
        reporter?: Reporter | null;
        /** Instructs the module to enable or disable the server-side rendering mode */
        serverSideRender?: boolean;
        /** Options for formatting statistics displayed during and after compile */
        stats?: webpack.Options.Stats;
        /** The module accepts an Object containing options for file watching, which is passed directly to the compiler provided */
        watchOptions?: webpack.Options.WatchOptions;
        /**
         * If true, the option will instruct the module to write files to the configured location on disk as specified in your webpack config file
         * This option also accepts a Function value, which can be used to filter which files are written to disk
         */
        writeToDisk?: boolean | ((filename: string) => boolean);
    }

    interface MimeTypeMap {
        [type: string]: string[];
    }

    interface OverrideMimeTypeMap {
        typeMap: MimeTypeMap;
        force: boolean;
    }

    interface ReporterOptions {
        state: boolean;
        stats?: webpack.Stats;
        log: Logger;
    }

    type Logger = loglevel.Logger;
    type Reporter = (middlewareOptions: Options, reporterOptions: ReporterOptions) => void;

    interface WebpackDevMiddleware {
        /** A function executed once the middleware has stopped watching. */
        close(callback?: () => void): void;
        /** Instructs a webpack-dev-middleware instance to recompile the bundle. e.g. after a change to the configuration. */
        invalidate(callback?: (stats?: webpack.Stats) => void): void;
        /** Executes a callback function when the compiler bundle is valid, typically after compilation */
        waitUntilValid(callback?: (stats?: webpack.Stats) => void): void;
        getFilenameFromUrl: (url: string) => string | false;
        fileSystem: MemoryFileSystem;
    }
}
