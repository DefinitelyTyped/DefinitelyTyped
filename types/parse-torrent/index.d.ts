/// <reference types="node" />

import MagnetUri = require("magnet-uri");
import * as ParseTorrentFile from "parse-torrent-file";

declare const ParseTorrent: ParseTorrent.ParseTorrent;

declare namespace ParseTorrent {
    interface ParseTorrent {
        (torrent: string): Promise<MagnetUri.Instance>;
        (torrent: Buffer): Promise<MagnetUri.Instance | ParseTorrentFile.Instance>;
        (torrent: Instance | MagnetUri.Instance | ParseTorrentFile.Instance): Promise<Instance>;

        toMagnetURI: typeof MagnetUri.encode;
        toTorrentFile: typeof ParseTorrentFile.encode;

        remote(
            torrent: string | Buffer | Instance | MagnetUri.Instance | ParseTorrentFile.Instance | Blob,
            cb?: (err: Error, torrent?: Instance) => void,
        ): void;
    }

    interface Instance extends MagnetUri.Instance, ParseTorrentFile.Instance {
        infoHash: string;
        name?: string | undefined;
        announce?: string[] | undefined;
        urlList?: string[] | undefined;
    }
}

export = ParseTorrent;
