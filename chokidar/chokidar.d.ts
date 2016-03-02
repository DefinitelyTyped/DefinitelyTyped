// Type definitions for chokidar 1.0.0
// Project: https://github.com/paulmillr/chokidar
// Definitions by: Stefan Steinhart <https://github.com/reppners/>, Arnaud Tournier <https://github.com/ltearno>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "chokidar" {

    import fs = require("fs");
    import events = require("events");

    export interface ChokidarOptions {
        persistent?:boolean;
        ignored?:any;
        ignoreInitial?:boolean;
        followSymlinks?:boolean;
        cwd?:string;
        usePolling?:boolean;
        useFsEvents?:boolean;
        alwaysStat?:boolean;
        depth?:number;
        interval?:number;
        binaryInterval?:number;
        ignorePermissionErrors?:boolean;
        atomic?:boolean;
    }

    export interface FSWatcher extends events.EventEmitter {
        new(options?:ChokidarOptions): FSWatcher;

        add(path:string | string[]): FSWatcher;
        unwatch(path:string | string[]): FSWatcher;

        close(): FSWatcher;

        on(event:string, callback:Function): FSWatcher;

        on(event:'add', callback:(path:string, stats?:fs.Stats)=> void): FSWatcher;
        on(event:'addDir', callback:(path:string, stats?:fs.Stats)=> void): FSWatcher;
        on(event:'change', callback:(path:string, stats?:fs.Stats)=> void): FSWatcher;
        on(event:'unlink', callback:(path:string)=> void): FSWatcher;
        on(event:'unlinkDir', callback:(path:string)=> void): FSWatcher;
        on(event:'error', callback:(error:Error)=> void): FSWatcher;
        on(event:'ready', callback:()=> void): FSWatcher;
        on(event:'raw', callback:(event:any, path:string, details:any)=> void): FSWatcher;

        on(event:'all', callback:(event:any, path:string)=> void): FSWatcher;
    }

    export var FSWatcher: FSWatcher;
    export function watch(fileDirOrGlob:string | string[], options?:ChokidarOptions): FSWatcher;
}
