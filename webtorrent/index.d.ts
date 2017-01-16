// Type definitions for WebTorrent v0.98.1
// Project: https://github.com/feross/webtorrent
// Definitions by: Bazyli Brzóska <https://invent.life>, Tomasz Łaziuk <tlaziuk@gmail.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="parse-torrent" />

import * as ParseTorrent from 'parse-torrent';
import * as http from 'http';

declare const WebTorrent: WebTorrent.WebTorrent;

declare namespace WebTorrent {
    export interface WebTorrent {
        new (config?: Options): Instance;
        (config?: Options): Instance;
        WEBRTC_SUPPORT: boolean;
    }
    export interface Options {
        maxConns?: number;
        nodeId?: string | Buffer;
        peerId?: string | Buffer;
        tracker?: boolean | Object;
        dht?: boolean | Object;
        webSeeds?: boolean;
    }

    export interface TorrentOptions {
        announce?: any[];
        getAnnounceOpts?: Function;
        maxWebConns?: number;
        path?: string;
        store?: (chunkLength: number, storeOpts: { length: number, files: File[], torrent: Torrent, }) => any;
    }

    export interface Instance extends NodeJS.EventEmitter {
        on(event: 'torrent', callback: (torrent: Torrent) => void): this;
        on(event: 'error', callback: (err: Error | string) => void): this;

        add(torrent: string | Buffer | ParseTorrent.ParsedTorrent, opts?: TorrentOptions, cb?: (torrent: Torrent) => any): Torrent;
        add(torrent: string | Buffer | ParseTorrent.ParsedTorrent, cb?: (torrent: Torrent) => any): Torrent;

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

    export interface Torrent extends NodeJS.EventEmitter {
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

        destroy(cb?: (err: Error | string) => void): void;

        // TODO: peer can be also a simple-peer instance
        addPeer(peer: string): boolean;

        addWebSeed(url: string): void;

        // TODO: peer can be also a simple-peer instance
        removePeer(peer: string): void;

        select(start: number, end: number, priority?: number, notify?: Function): void;

        deselect(start: number, end: number, priority: number): void;

        createServer(opts?: http.RequestOptions): http.Server;

        pause(): void;

        resume(): void;

        on(event: 'infoHash' | 'metadata' | 'ready' | 'done', callback: () => void): this;


        on(event: 'warning' | 'error', callback: (err: Error | string) => void): this;

        on(event: 'download' | 'upload', callback: (bytes: number) => void): this;

        // TODO: wire is a bittorrent-protocol instance
        on(event: 'wire', callback: (wire: any, addr?: string) => void): this;

        on(event: 'noPeers', callback: (announceType: 'tracker' | 'dht') => void): this;
    }

    export interface TorrentFile extends NodeJS.EventEmitter {
        readonly name: string;

        readonly path: string;

        readonly length: number;

        readonly downloaded: number;

        select(): void;

        deselect(): void;

        createReadStream(opts?: { start: number, end: number, }): NodeJS.ReadableStream;

        getBuffer(callback: (err: string | Error | void, buffer?: Buffer) => void): void;

        appendTo(rootElement: HTMLElement | string, opts?: { autoplay?: boolean, controls?: boolean, maxBlobLength?: number }, callback?: (err: Error | void, element: HTMLMediaElement) => void): void;
        appendTo(rootElement: HTMLElement | string, callback?: (err: Error | void, element: HTMLMediaElement) => void): void;

        renderTo(rootElement: HTMLMediaElement | string, opts?: { autoplay?: boolean, controls?: boolean, maxBlobLength?: number }, callback?: (err: Error | void, element: HTMLMediaElement) => void): void;
        renderTo(rootElement: HTMLMediaElement | string, callback?: (err: Error | void, element: HTMLMediaElement) => void): void;

        getBlob(callback: (err: string | Error | void, blob?: Blob) => void): void;

        getBlobURL(callback: (err: string | Error | void, blobURL?: string) => void): void;
    }
}

export = WebTorrent;
