// Type definitions for gulp-watch v4.1.1
// Project: https://github.com/floatdrop/gulp-watch
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as File from "vinyl";
import { SrcOptions } from "vinyl-fs";

interface IOptions extends SrcOptions {
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

type Cb = (file: File & { event: "add" | "change" | "unlink" }) => void;

declare function watch(glob: string | Array<string>, callback?: Cb): IWatchStream;
declare function watch(glob: string | Array<string>, options?: IOptions, callback?: Cb): IWatchStream;
declare namespace watch { }
export = watch;
