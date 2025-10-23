/// <reference types="node" />

import * as File from "vinyl";
import { SrcOptions } from "vinyl-fs";

interface IOptions extends SrcOptions {
    ignoreInitial?: boolean | undefined;
    events?: string[] | undefined;
    base?: string | undefined;
    name?: string | undefined;
    verbose?: boolean | undefined;
    readDelay?: number | undefined;
}

interface IWatchStream extends NodeJS.ReadWriteStream {
    add(path: string | string[]): NodeJS.ReadWriteStream;
    unwatch(path: string | string[]): NodeJS.ReadWriteStream;
    close(): NodeJS.ReadWriteStream;
}

type Cb = (file: File & { event: "add" | "change" | "unlink" }) => void;

declare function watch(glob: string | string[], callback?: Cb): IWatchStream;
declare function watch(glob: string | string[], options?: IOptions, callback?: Cb): IWatchStream;
declare namespace watch {}
export = watch;
