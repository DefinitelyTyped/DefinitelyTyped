// Type definitions for parse-torrent-file 4.0
// Project: https://github.com/webtorrent/parse-torrent-file
// Definitions by: Tomasz Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function ParseTorrentFile(torrent: Buffer | ParseTorrentFile.Torrent): ParseTorrentFile.Instance;

declare namespace ParseTorrentFile {
    function decode(torrent: Buffer | Torrent): Instance;
    function encode(parsed: Instance): Buffer;

    interface TorrentInfo {
        'name.utf-8'?: string;
        name?: string;
        files?: File[];
        'piece length'?: number;
        pieces?: number;
        private?: boolean;
    }

    interface Torrent {
        info?: TorrentInfo;
        'creation date'?: number;
        'created by'?: string;
        comment?: Buffer;
        'announce-list'?: string[][];
        announce?: string;
        'url-list'?: Buffer;
    }

    interface ParsedFile {
        path: string;
        name: string;
        length: number;
        offset: number;
    }

    interface Instance extends Object {
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
