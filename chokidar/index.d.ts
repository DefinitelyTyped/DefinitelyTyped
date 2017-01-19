// Type definitions for chokidar 1.4.3
// Project: https://github.com/paulmillr/chokidar
// Definitions by: Stefan Steinhart <https://github.com/reppners/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module "chokidar"
{
    export class FSWatcher
    {
        constructor(options?: WatchOptions);
        add(fileDirOrGlob:string):void;
        add(filesDirsOrGlobs:Array<string>):void;
        unwatch(fileDirOrGlob:string):void;
        unwatch(filesDirsOrGlobs:Array<string>):void;
        getWatched():any;
        on(event: 'add', fn: (path: string, stats?: fs.Stats) => void): this;
        on(event: 'change', fn: (path: string, stats?: fs.Stats) => void): this;
        on(event: 'unlink', fn: (path: string) => void): this;
        on(event: 'raw', fn: (event: string, path:string, details:any) => void): this;
        on(event: 'all', fn: (event: string, path: string) => void): this;
        on(event: string, fn: (path: string) => void): this;
        close(): this;
    }

    interface WatchOptions
    {
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
        awaitWriteFinish?:any;
    }

    import fs = require("fs");

    export function watch(fileDirOrGlob:string, options?:WatchOptions):FSWatcher;
    export function watch(filesDirsOrGlobs:Array<string>, options?:WatchOptions):FSWatcher;
}
