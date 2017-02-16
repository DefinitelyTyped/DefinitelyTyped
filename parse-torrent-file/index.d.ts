// Type definitions for parse-torrent-file 4.0
// Project: https://github.com/feross/parse-torrent-file
// Definitions by: Tomasz Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare const ParseTorrentFile: ParseTorrentFile.ParseTorrentFile;

declare namespace ParseTorrentFile {
    export interface TorrentInfo {
        'name.utf-8'?: string;
        name?: string;
        files?: File[];
        'piece length'?: number;
        pieces?: number;
        private?: boolean;
    }

    export interface Torrent {
        info?: TorrentInfo;
        'creation date'?: number;
        'created by'?: string;
        comment?: Buffer;
        'announce-list'?: string[][];
        announce?: string;
        'url-list'?: Buffer;
    }

    export interface ParseTorrentFile {
        (torrent: Buffer | Torrent): Instance;
        decode(torrent: Buffer | Torrent): Instance;
        encode(parsed: Instance): Buffer;
    }

    export interface ParsedFile {
        path: string;
        name: string;
        length: number;
        offset: number;
    }

    export interface Instance extends Object {
        info?: TorrentInfo;
        infoBuffer?: Buffer;
        infoHash?: string;
        infoHashBuffer?: Buffer;
        name?: string;
        private?: boolean;
        created?: Date;
        createdBy?: string;
        announce?: string[];
        urlList?: string[];
        pieceLength?: number;
        lastPieceLength?: number;
        pieces?: string[];
        length?: number;
        files?: ParsedFile[];
    }
}

export = ParseTorrentFile;
