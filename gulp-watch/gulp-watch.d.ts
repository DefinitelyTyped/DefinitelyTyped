// Type definitions for gulp-watch v4.1.1
// Project: https://github.com/floatdrop/gulp-watch
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'gulp-watch' {
    interface IOptions {
        ignoreInitial?: boolean;
        events?: Array<string>;
        base?: string;
        name?: string;
        verbose?: boolean;
        readDelay?: number;
    }

    interface IWatchStream extends NodeJS.ReadWriteStream {
        add(path: string | Array<string>): NodeJS.ReadWriteStream;
        unwatch(path: string | Array<string>): NodeJS.ReadWriteStream;
        close(): NodeJS.ReadWriteStream;
    }

    function watch(glob: string | Array<string>, options?: IOptions, callback?: Function): IWatchStream;

    export = watch;
}
