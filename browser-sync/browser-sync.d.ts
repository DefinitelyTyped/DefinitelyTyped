// Type definitions for browser-sync
// Project: http://www.browsersync.io/
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../chokidar/chokidar.d.ts"/>
/// <reference path="../node/node.d.ts" />

declare module "browser-sync" {
    import chokidar = require("chokidar");
    import fs = require("fs");
    import http = require("http");

    interface Options {
        files?: string | string[];
        watchOptions?: GazeOptions;
        server?: ServerOptions;
        proxy?: string | boolean;
        port?: number;
        https?: boolean;
        ghostMode?: GhostOptions | boolean;
        logLevel?: string;
        logPrefix?: string;
        logConnections?: boolean;
        logFileChanges?: boolean;
        logSnippet?: boolean;
        snippetOptions?: SnippetOptions;
        rewriteRules?: boolean | RewriteRules[];
        tunnel?: string | boolean;
        online?: boolean;
        open?: string | boolean;
        browser?: string | string[];
        xip?: boolean;
        notify?: boolean;
        scrollProportionally?: boolean;
        scrollThrottle?: number;
        reloadDelay?: number;
        reloadDebounce?: number;
        plugins?: any[];
        injectChanges?: boolean;
        startPath?: string;
        minify?: boolean;
        host?: string;
        codeSync?: boolean;
        timestamps?: boolean;
        scriptPath?: (path: string) => string;
        socket?: SocketOptions;
    }

    interface GazeOptions {
        interval?: number;
        debounceDelay?: number;
        mode?: string;
        cwd?: string;
    }

    interface ServerOptions {
        baseDir?: string | string[];
        directory?: boolean;
        index?: string;
        routes?: {[path: string]: string};
        middleware?: MiddlewareHandler[];
    }

    interface MiddlewareHandler {
        (req: http.ServerRequest, res: http.ServerResponse, next: Function): any;
    }

    interface GhostOptions {
        clicks?: boolean;
        scroll?: boolean;
        forms?: boolean;
    }

    interface SnippetOptions {
        ignorePaths?: string;
        rule?: {match?: RegExp; fn?: (snippet: string, match: string) => any};
    }

    interface SocketOptions {
        path?: string;
        clientPath?: string;
        namespace?: string;
    }

    interface RewriteRules {
        match: RegExp;
        fn: (match: string) => string;
    }

    module browserSync {
        interface BrowserSync {
            init(config?: Options, callback?: (err: Error, bs: Object) => any): void;
            reload(): void;
            reload(file: string): void;
            reload(files: string[]): void;
            reload(options: {stream: boolean}): NodeJS.ReadWriteStream;
            notify(message: string, timeout?: number): void;
            exit(): void;
            watch(patterns: string, opts?: chokidar.WatchOptions, fn?: (event: string, file: fs.Stats) => any): NodeJS.EventEmitter;
            pause(): void;
            resume(): void;
            emitter: NodeJS.EventEmitter;
            active: boolean;
            paused: boolean;
        }
    }

    interface Exports extends browserSync.BrowserSync {
        create(): browserSync.BrowserSync;
        (config?: Options, callback?: (err: Error, bs: Object) => any): void;
    }

    var browserSync: Exports;

    export = browserSync;
}
