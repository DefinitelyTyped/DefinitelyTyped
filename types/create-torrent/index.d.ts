// Type definitions for create-torrent 4.4
// Project: https://github.com/webtorrent/create-torrent#readme
// Definitions by: Jesse Chan <https://github.com/jesec>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface CreateTorrentOptions {
    // name of the torrent (default = basename of `path`, or 1st file's name)
    name?: string | undefined;
    // free-form textual comments of the author
    comment?: string | undefined;
    // name and version of program used to create torrent
    createdBy?: string | undefined;
    // creation time in UNIX epoch format (default = now)
    creationDate?: number | undefined;
    // is this a private .torrent? (default = false)
    private?: boolean | undefined;
    // force a custom piece length (number of bytes)
    pieceLength?: number | undefined;
    // custom trackers (array of arrays of strings) (see [bep12](http://www.bittorrent.org/beps/bep_0012.html))
    announceList?: string[][] | undefined;
    // web seed urls (see [bep19](http://www.bittorrent.org/beps/bep_0019.html))
    urlList?: string[] | undefined;
    // add non-standard info dict entries, e.g. info.source, a convention for cross-seeding
    info?: Record<string, string> | undefined;
}

declare function createTorrent(
    input:
        | string
        | string[]
        | File
        | File[]
        | FileList
        | Buffer
        | Buffer[]
        | NodeJS.ReadableStream
        | NodeJS.ReadableStream[],
    cb: (err: Error | null, torrent: Buffer) => any,
): void;

declare function createTorrent(
    input:
        | string
        | string[]
        | File
        | File[]
        | FileList
        | Buffer
        | Buffer[]
        | NodeJS.ReadableStream
        | NodeJS.ReadableStream[],
    opts: CreateTorrentOptions,
    cb: (err: Error | null, torrent: Buffer) => any,
): void;

export = createTorrent;
