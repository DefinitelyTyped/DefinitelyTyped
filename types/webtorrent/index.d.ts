/// <reference types="node" />

import type { Wire } from "bittorrent-protocol";
import EventEmitter from "events";
import type { RequestOptions, Server } from "http";
import type { Instance as ParseTorrentInstance } from "parse-torrent";
import type SimplePeer from "simple-peer";

export interface Options {
    maxConns?: number | undefined;
    nodeId?: string | Uint8Array | undefined;
    peerId?: string | Uint8Array | undefined;
    tracker?: boolean | {} | undefined;
    dht?: boolean | {} | undefined;
    lsd?: boolean | undefined;
    webSeeds?: boolean | undefined;
    utp?: boolean | undefined;
    blocklist?: (string | Array<string | { start: string; end: string }>) | undefined;
    downloadLimit?: number | undefined;
    uploadLimit?: number | undefined;
    natUpnp?: boolean | undefined;
    natPmp?: boolean | undefined;
    secure?: number | undefined;
    torrentPort?: number | undefined;
    dhtPort?: number | undefined;
    userAgent?: string | undefined;
    seedOutgoingConnections?: boolean | undefined;
}

export interface ServerAddress {
    port: number;
    family: string;
    address: string;
}

export interface BrowserServerOptions {
    controller: ServiceWorkerRegistration;
}

export interface NodeServerOptions {
    origin?: string;
    pathname?: string;
    hostname?: string;
}

export interface ServerBase {
    client: WebTorrent;
    pathname: string;
    address(): ServerAddress;
    close(cb?: () => void): void;
    destroy(cb?: () => void): void;
}

export interface NodeServer extends ServerBase {
    opts: NodeServerOptions;
}

export interface BrowserServer extends ServerBase {
    opts: BrowserServerOptions;
    registration: ServiceWorkerRegistration;
    workerKeepAliveInterval: ReturnType<typeof setInterval> | null;
    workerPortCount: number;
}

export interface TorrentOptions {
    announce?: string[] | undefined;
    announceList?: string[][] | undefined;
    getAnnounceOpts?(): void;
    urlList?: string[] | undefined;
    maxWebConns?: number | undefined;
    path?: string | undefined;
    store?(chunkLength: number, storeOpts: { length: number; files: TorrentFile[]; torrent: Torrent }): any;
    private?: boolean | undefined;
    destroyStoreOnDestroy?: boolean | undefined;
    storeCacheSlots?: number | undefined;
    skipVerify?: boolean | undefined;
    preloadedStore?(): void;
    strategy?: "rarest" | "sequential" | undefined;
    createdBy?: string | undefined;
    addUID?: boolean | undefined;
    rootDir?: any;
    bitfield?: Uint8Array | ArrayLike<number> | undefined;
    storeOpts?: object | undefined;
    alwaysChokeSeeders?: boolean | undefined;
    noPeersIntervalTime?: number | undefined;
    deselect?: boolean | undefined;
    paused?: boolean | undefined;
    fileModtimes?: number[] | undefined;
    uploads?: number | false | undefined;
}

export interface TorrentDestroyOptions {
    destroyStore?: boolean | undefined;
}

export interface Torrent extends EventEmitter {
    readonly infoHash: string;
    readonly infoHashHash?: string;
    readonly magnetURI: string;
    readonly torrentFile: Uint8Array;
    readonly torrentFileBlobURL: string;
    readonly files: TorrentFile[];
    readonly announce: string[];
    readonly ["announce-list"]: string[][];
    readonly pieces: Array<TorrentPiece | null>;
    readonly timeRemaining: number;
    readonly received: number;
    readonly downloaded: number;
    readonly uploaded: number;
    readonly downloadSpeed: number;
    readonly uploadSpeed: number;
    readonly progress: number;
    readonly ratio: number;
    readonly length: number;
    readonly pieceLength: number;
    readonly lastPieceLength: number;
    readonly numPeers: number;
    readonly path: string;
    readonly ready: boolean;
    readonly paused: boolean;
    readonly done: boolean;
    readonly name: string;
    readonly created: Date;
    readonly createdBy: string;
    readonly comment: string;
    readonly maxWebConns: number;

    destroy(opts?: TorrentDestroyOptions, cb?: (err?: Error | string) => void): void;
    addPeer(peer: string | SimplePeer): boolean;
    addWebSeed(url: string): void;
    removePeer(peer: string | SimplePeer): void;
    select(start: number, end: number, priority?: number, notify?: () => void): void;
    deselect(start: number, end: number, priority: number): void;
    createServer(opts?: RequestOptions): Server;
    pause(): void;
    resume(): void;
    load(streams: ArrayLike<any>, cb?: (err?: Error) => void): void;

    on(
        event: "infoHash" | "metadata" | "ready" | "done" | "seed" | "close" | "_infoHash" | "dhtAnnounce",
        callback: () => void,
    ): this;
    on(event: "warning" | "error", callback: (err: Error | string) => void): this;
    on(event: "download" | "upload", callback: (bytes: number) => void): this;
    on(event: "wire", callback: (wire: Wire, addr?: string) => void): this;
    on(event: "noPeers", callback: (announceType: "tracker" | "dht") => void): this;

    once(
        event: "infoHash" | "metadata" | "ready" | "done" | "seed" | "close" | "_infoHash" | "dhtAnnounce",
        callback: () => void,
    ): this;
    once(event: "warning" | "error", callback: (err: Error | string) => void): this;
    once(event: "download" | "upload", callback: (bytes: number) => void): this;
    once(event: "wire", callback: (wire: Wire, addr?: string) => void): this;
    once(event: "noPeers", callback: (announceType: "tracker" | "dht") => void): this;
}

export interface TorrentFile extends EventEmitter {
    readonly name: string;
    readonly path: string;
    readonly length: number;
    readonly downloaded: number;
    readonly progress: number;
    readonly streamURL: string;

    select(): void;
    deselect(): void;
    createReadStream(opts?: { start: number; end: number }): NodeJS.ReadableStream;
    getBuffer(callback: (err: string | Error | undefined, buffer?: Buffer) => void): void;
    appendTo(
        rootElement: HTMLElement | string,
        opts?: {
            autoplay?: boolean | undefined;
            controls?: boolean | undefined;
            maxBlobLength?: number | undefined;
        },
        callback?: (err: Error | undefined, element: HTMLMediaElement) => void,
    ): void;
    appendTo(
        rootElement: HTMLElement | string,
        callback?: (err: Error | undefined, element: HTMLMediaElement) => void,
    ): void;
    renderTo(
        rootElement: HTMLMediaElement | string,
        opts?: {
            autoplay?: boolean | undefined;
            controls?: boolean | undefined;
            maxBlobLength?: number | undefined;
        },
        callback?: (err: Error | undefined, element: HTMLMediaElement) => void,
    ): void;
    renderTo(
        rootElement: HTMLMediaElement | string,
        callback?: (err: Error | undefined, element: HTMLMediaElement) => void,
    ): void;
    getBlob(callback: (err: string | Error | undefined, blob?: Blob) => void): void;
    getBlobURL(callback: (err: string | Error | undefined, blobURL?: string) => void): void;
}

export interface TorrentPiece {
    readonly length: number;
    readonly missing: number;
}

export default class WebTorrent extends EventEmitter {
    static WEBRTC_SUPPORT: boolean;
    static UTP_SUPPORT: boolean;
    static VERSION: string;

    peerId: string;
    peerIdBuffer: Uint8Array;
    nodeId: string;
    nodeIdBuffer: Uint8Array;
    userAgent: string;
    destroyed: boolean;
    listening: boolean;
    torrentPort: number;
    dhtPort: number;
    tracker: boolean | object;
    lsd: boolean;
    utPex: boolean;
    natUpnp: boolean;
    natPmp: boolean;
    torrents: Torrent[];
    maxConns: number;
    utp: boolean;
    seedOutgoingConnections: boolean;
    secure: number;
    enableWebSeeds: boolean;
    ready: boolean;
    blocked: any;
    dht: any;

    constructor(opts?: Options);

    createServer(
        opts?: BrowserServerOptions | NodeServerOptions,
        force?: "browser" | "node",
    ): NodeServer | BrowserServer;

    add(
        torrentId: string | Uint8Array | File | ParseTorrentInstance,
        opts?: TorrentOptions,
        cb?: (torrent: Torrent) => void,
    ): Torrent;
    add(torrentId: string | Uint8Array | File | ParseTorrentInstance, cb?: (torrent: Torrent) => void): Torrent;

    seed(
        input:
            | string
            | string[]
            | File
            | File[]
            | FileList
            | Uint8Array
            | Uint8Array[]
            | NodeJS.ReadableStream
            | NodeJS.ReadableStream[],
        opts?: TorrentOptions,
        cb?: (torrent: Torrent) => void,
    ): Torrent;
    seed(
        input:
            | string
            | string[]
            | File
            | File[]
            | FileList
            | Uint8Array
            | Uint8Array[]
            | NodeJS.ReadableStream
            | NodeJS.ReadableStream[],
        cb?: (torrent: Torrent) => void,
    ): Torrent;

    remove(
        torrentId: Torrent | string | Uint8Array,
        opts?: TorrentDestroyOptions,
        cb?: (err?: Error | string) => void,
    ): Promise<void>;
    remove(torrentId: Torrent | string | Uint8Array, cb?: (err?: Error | string) => void): Promise<void>;

    get(torrentId: string | Uint8Array | File | ParseTorrentInstance): Promise<Torrent | null>;

    destroy(cb?: (err?: Error | string) => void): void;

    address(): ServerAddress | null;

    throttleDownload(rate: number): boolean | undefined;
    throttleUpload(rate: number): boolean | undefined;

    readonly downloadSpeed: number;
    readonly uploadSpeed: number;
    readonly progress: number;
    readonly ratio: number;

    on(event: "torrent" | "add" | "seed" | "listening" | "ready", callback: (...args: any[]) => void): this;
    on(event: "error", callback: (err: Error | string) => void): this;
    on(event: "remove", callback: (torrent: Torrent) => void): this;

    once(event: "torrent" | "add" | "seed" | "listening" | "ready", callback: (...args: any[]) => void): this;
    once(event: "error", callback: (err: Error | string) => void): this;
    once(event: "remove", callback: (torrent: Torrent) => void): this;
}
