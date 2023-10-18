/// <reference types="node" />

import * as File from "vinyl";
import { SrcOptions } from "vinyl-fs";

interface IOptions extends SrcOptions {
    ignoreInitial?: boolean | undefined;
    events?: Array<string> | undefined;
    base?: string | undefined;
    name?: string | undefined;
    verbose?: boolean | undefined;
    readDelay?: number | undefined;
}

interface IWatchStream extends NodeJS.ReadWriteStream {
    add(path: string | Array<string>): NodeJS.ReadWriteStream;
    unwatch(path: string | Array<string>): NodeJS.ReadWriteStream;
    close(): NodeJS.ReadWriteStream;
}

type Cb = (file: File & { event: "add" | "change" | "unlink" }) => void;

declare function watch(glob: string | Array<string>, callback?: Cb): IWatchStream;
declare function watch(glob: string | Array<string>, options?: IOptions, callback?: Cb): IWatchStream;
declare namespace watch {}
export = watch;
