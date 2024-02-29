/// <reference types="node" />

declare function ParseTorrentFile(torrent: Buffer | ParseTorrentFile.Torrent): ParseTorrentFile.Instance;

declare namespace ParseTorrentFile {
    function decode(torrent: Buffer | Torrent): Instance;
    function encode(parsed: Instance): Buffer;

    interface TorrentInfo {
        "name.utf-8"?: string | undefined;
        name?: string | undefined;
        files?: File[] | undefined;
        "piece length"?: number | undefined;
        pieces?: number | undefined;
        private?: boolean | undefined;
    }

    interface Torrent {
        info?: TorrentInfo | undefined;
        "creation date"?: number | undefined;
        "created by"?: string | undefined;
        comment?: Buffer | undefined;
        "announce-list"?: string[][] | undefined;
        announce?: string | undefined;
        "url-list"?: Buffer | undefined;
    }

    interface ParsedFile {
        path: string;
        name: string;
        length: number;
        offset: number;
    }

    interface Instance extends Object {
        info?: TorrentInfo | undefined;
        infoBuffer?: Buffer | undefined;
        infoHash?: string | undefined;
        infoHashBuffer?: Buffer | undefined;
        name?: string | undefined;
        private?: boolean | undefined;
        created?: Date | undefined;
        createdBy?: string | undefined;
        announce?: string[] | undefined;
        urlList?: string[] | undefined;
        pieceLength?: number | undefined;
        lastPieceLength?: number | undefined;
        pieces?: string[] | undefined;
        length?: number | undefined;
        files?: ParsedFile[] | undefined;
    }
}

export = ParseTorrentFile;
