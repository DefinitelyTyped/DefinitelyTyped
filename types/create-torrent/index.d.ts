/// <reference types="node" />
import type { Readable as ReadableStream } from "node:stream";

export type CreateTorrentCallback = (err: Error | null, torrent?: Buffer) => void;

export interface CreateTorrentOptions {
    // name of the torrent (default = basename of `path`, or 1st file's name)
    name?: string | undefined;
    // free-form textual comments of the author
    comment?: string | undefined;
    // name and version of program used to create torrent
    createdBy?: string | undefined;
    // creation time in UNIX epoch format (default = now)
    creationDate?: number | Date | undefined;
    // is this a private .torrent? (default = false)
    private?: boolean | undefined;
    // force a custom piece length (number of bytes)
    pieceLength?: number | undefined;
    maxPieceLength?: number;
    // custom trackers (array of arrays of strings) (see [bep12](http://www.bittorrent.org/beps/bep_0012.html))
    announceList?: string[][] | undefined;
    // web seed urls (see [bep19](http://www.bittorrent.org/beps/bep_0019.html))
    urlList?: string[] | undefined;
    // add non-standard info dict entries, e.g. info.source, a convention for cross-seeding
    info?: Record<string, unknown>;
    // called with the number of bytes hashed and estimated total size after every piece
    onProgress?: (hashedLength: number, estimatedTorrentLength: number) => void;
}

export type TorrentInput = string | File | FileList | Buffer | ReadableStream | string[] | File[] | Buffer[] | ReadableStream[];

declare function createTorrent(input: TorrentInput, opts: CreateTorrentOptions, cb: CreateTorrentCallback): void;
declare function createTorrent(input: TorrentInput, cb: CreateTorrentCallback): void;

declare const announceList: string[][];
declare function isJunkPath(path: string): boolean;

export default createTorrent;
export { announceList, isJunkPath };
