// Type definitions for torrent-stream
// Project: https://npmjs.com/package/torrent-stream
// Definitions by: Xavier Stouder <https://github.com/xstoudi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace TorrentStream {
    interface TorrentEngine {
        files: TorrentFile[];
        destroy(callback: () => void): void;
        connect(peer: string): void;
        disconnect(peer: string): void;
        block(peer: string): void;
        remove(keepPieces: boolean, callback: () => void): void;
        listen(port: number, callback: () => void): void;
        swarm: Swarm;
        infoHash: string;

        // Events
        on(event: "ready" | "torrent" | "idle", callback: Function): void;
        on(event: "download", callback: (pieceIndex: number) => void): void;
        on(event: "upload", callback: (pieceIndex: number, offset: number, length: number) => void): void;
        on(event: string,callback: Function): void;
    }
    interface TorrentEngineOptions {
        connections?: number; // Max amount of peers to be connected to.
        uploads?: number; // Number of upload slots.
        tmp?: string; // Root folder for the files storage. Default folder under /tmp/torrent-stream/{infoHash}.
        path?: string; // Path where to save the files. Overrides 'tmp'.
        verify?: boolean; // Verify previously stored data before starting.
        dht?: boolean; // Whether or not to use DHT to initialize the swarm.
        tracker?: boolean; // Whether or not to use trackers from torrent file or magnet link.
        trackers?: string[]; // Allows to declare additional custom trackers to use.
        storage?: any; // Use a custom storage backend rather than the default disk-backed one.
    }
    interface Swarm {
        downloaded: number;
    }
    interface TorrentFile {
        name: string;
        path: string;
        length: number;

        select(): void;
        deselect(): void;
        createReadStream(options?: ReadStreamOptions): any;
    }
    interface ReadStreamOptions {
        start: number;
        end: number;
    }
}

declare module "torrent-stream" {
    function s(magnet: string | Buffer, options?: TorrentStream.TorrentEngineOptions): TorrentStream.TorrentEngine;

    namespace s {
        // Here
    }

    export = s;
}
