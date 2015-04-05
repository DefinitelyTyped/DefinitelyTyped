// Type definitions for browser-sync
// Project: http://www.browsersync.io/
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "browser-sync" {
    import http = require("http");
    
    function BrowserSync(config?: BrowserSync.Options, callback?: (err: Error, bs: Object) => any): void;
    
    module BrowserSync {
        export function reload(): void;
        export function reload(file: string): void;
        export function reload(files: string[]): void;
        export function reload(options: {stream: boolean}): NodeJS.ReadWriteStream;

        export function notify(message: string, timeout?: number): void;

        export function exit(): void;

        export var active: boolean;

        export var emitter: NodeJS.EventEmitter;
        
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
            tunnel?: string | boolean;
            online?: boolean;
            open?: string | boolean;
            browser?: string | string[];
            xip?: boolean;
            notify?: boolean;
            scrollProportionally?: boolean;
            scrollThrottle?: number;
            reloadDelay?: number;
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
            baseDir?: string;
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
    }

    export = BrowserSync;
}