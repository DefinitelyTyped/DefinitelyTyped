/// <reference types="node"/>

interface Options {
    remoteUrl?: string | undefined;
    origin?: string | undefined;
    branch?: string | undefined;
    cacheDir?: string | undefined;
    push?: boolean | undefined;
    force?: boolean | undefined;
    message?: string | undefined;
}

declare function ghPages(opts?: Options): NodeJS.ReadWriteStream;

declare namespace ghPages {}

export = ghPages;
