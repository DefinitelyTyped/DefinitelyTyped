// Type definitions for parse-torrent 5.8
// Project: https://github.com/feross/parse-torrent
// Definitions by: Bazyli Brzóska <https://github.com/niieani>, Tomasz Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import MagnetUri = require('magnet-uri');
import * as ParseTorrentFile from 'parse-torrent-file';

declare const ParseTorrent: ParseTorrent.ParseTorrent;

declare namespace ParseTorrent {
    interface ParseTorrent {
        (torrent: string): MagnetUri.Instance;
        (torrent: Buffer): MagnetUri.Instance | ParseTorrentFile.Instance;
        (torrent: Instance | MagnetUri.Instance | ParseTorrentFile.Instance): Instance;

        toMagnetURI: typeof MagnetUri.encode;
        toTorrentFile: typeof ParseTorrentFile.encode;

        remote(torrent: string | Buffer | Instance | MagnetUri.Instance | ParseTorrentFile.Instance | Blob, cb?: (err: Error, torrent?: Instance) => void): void;
    }

    interface Instance extends MagnetUri.Instance, ParseTorrentFile.Instance {
        infoHash: string;
        name?: string;
        announce?: string[];
        urlList?: string[];
    }
}

export = ParseTorrent;
