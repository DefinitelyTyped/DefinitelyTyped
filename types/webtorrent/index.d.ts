// Type definitions for WebTorrent 0.98
// Project: https://github.com/feross/webtorrent
// Definitions by: Bazyli Brzóska <https://github.com/niieani>, Tomasz Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Instance as ParseTorrent } from 'parse-torrent';
import { Instance as SimplePeer } from 'simple-peer';
import { RequestOptions, Server } from 'http';
import { Wire } from 'bittorrent-protocol';

declare const WebTorrent: WebTorrent.WebTorrent;

declare namespace WebTorrent {
    interface WebTorrent {
        new (config?: Options): Instance;
        (config?: Options): Instance;
        WEBRTC_SUPPORT: boolean;
    }
    interface Options {
        maxConns?: number;
        nodeId?: string | Buffer;
        peerId?: string | Buffer;
        tracker?: boolean | {};
        dht?: boolean | {};
        webSeeds?: boolean;
    }

    interface TorrentOptions {
        announce?: any[];
        getAnnounceOpts?(): void;
        maxWebConns?: number;
        path?: string;
        store?(chunkLength: number, storeOpts: { length: number, files: File[], torrent: Torrent, }): any;
        name?: string;
    }

    interface Instance extends NodeJS.EventEmitter {
        on(event: 'torrent', callback: (torrent: Torrent) => void): this;
        on(event: 'error', callback: (err: Error | string) => void): this;

        add(torrent: string | Buffer | ParseTorrent, opts?: TorrentOptions, cb?: (torrent: Torrent) => any): Torrent;
        add(torrent: string | Buffer | ParseTorrent, cb?: (torrent: Torrent) => any): Torrent;

        seed(input: string | string[] | File | File[] | FileList | Buffer | Buffer[] | NodeJS.ReadableStream | NodeJS.ReadableStream[], opts?: TorrentOptions, cb?: (torrent: Torrent) => any): Torrent;
        seed(input: string | string[] | File | File[] | FileList | Buffer | Buffer[] | NodeJS.ReadableStream | NodeJS.ReadableStream[], cb?: (torrent: Torrent) => any): Torrent;

        remove(torrentId: Torrent | string | Buffer, callback?: (err: Error | string) => void): void;

        destroy(callback?: (err: Error | string) => void): void;

        readonly torrents: Torrent[];

        get(torrentId: Torrent | string | Buffer): Torrent | void;

        readonly downloadSpeed: number;

        readonly uploadSpeed: number;

        readonly progress: number;

        readonly ratio: number;
    }

    interface Torrent extends NodeJS.EventEmitter {
        readonly infoHash: string;

        readonly magnetURI: string;

        readonly torrentFile: Buffer;

        readonly torrentFileBlobURL: string;

        readonly files: TorrentFile[];

        readonly timeRemaining: number;

        readonly received: number;

        readonly downloaded: number;

        readonly uploaded: number;

        readonly downloadSpeed: number;

        readonly uploadSpeed: number;

        readonly progress: number;

        readonly ratio: number;

        readonly numPeers: number;

        readonly path: string;

        readonly ready: boolean;

        readonly name: string;

        destroy(cb?: (err: Error | string) => void): void;

        addPeer(peer: string | SimplePeer): boolean;

        addWebSeed(url: string): void;

        removePeer(peer: string | SimplePeer): void;

        select(start: number, end: number, priority?: number, notify?: () => void): void;

        deselect(start: number, end: number, priority: number): void;

        createServer(opts?: RequestOptions): Server;

        pause(): void;

        resume(): void;

        on(event: 'infoHash' | 'metadata' | 'ready' | 'done', callback: () => void): this;

        on(event: 'warning' | 'error', callback: (err: Error | string) => void): this;

        on(event: 'download' | 'upload', callback: (bytes: number) => void): this;

        on(event: 'wire', callback: (wire: Wire, addr?: string) => void): this;

        on(event: 'noPeers', callback: (announceType: 'tracker' | 'dht') => void): this;
    }

    interface TorrentFile extends NodeJS.EventEmitter {
        readonly name: string;

        readonly path: string;

        readonly length: number;

        readonly downloaded: number;

        select(): void;

        deselect(): void;

        createReadStream(opts?: { start: number, end: number, }): NodeJS.ReadableStream;

        getBuffer(callback: (err: string | Error | undefined, buffer?: Buffer) => void): void;

        appendTo(
            rootElement: HTMLElement | string,
            opts?: { autoplay?: boolean, controls?: boolean, maxBlobLength?: number },
            callback?: (err: Error | undefined, element: HTMLMediaElement) => void): void;
        appendTo(rootElement: HTMLElement | string, callback?: (err: Error | undefined, element: HTMLMediaElement) => void): void;

        renderTo(
            rootElement: HTMLMediaElement | string,
            opts?: { autoplay?: boolean, controls?: boolean, maxBlobLength?: number },
            callback?: (err: Error | undefined, element: HTMLMediaElement) => void): void;
        renderTo(rootElement: HTMLMediaElement | string, callback?: (err: Error | undefined, element: HTMLMediaElement) => void): void;

        getBlob(callback: (err: string | Error | undefined, blob?: Blob) => void): void;

        getBlobURL(callback: (err: string | Error | undefined, blobURL?: string) => void): void;
    }
}

export = WebTorrent;
