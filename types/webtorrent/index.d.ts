/// <reference types="node" />

import type { Wire } from "bittorrent-protocol";
import EventEmitter = require("events");
import type { Server } from "http";
import type { AddressInfo } from "net";
import type { Instance as ParseTorrentInstance } from "parse-torrent";
import type { Instance as SimplePeerInstance } from "simple-peer";
import type { Readable } from "stream";

export interface Options {
    maxConns?: number | undefined;
    nodeId?: string | Uint8Array | undefined;
    peerId?: string | Uint8Array | undefined;
    tracker?: boolean | {} | undefined;
    dht?: boolean | {} | undefined;
    lsd?: boolean | undefined;
    utPex?: boolean | undefined;
    natUpnp?: boolean | "permanent" | undefined;
    natPmp?: boolean | undefined;
    webSeeds?: boolean | undefined;
    utp?: boolean | undefined;
    seedOutgoingConnections?: boolean | undefined;
    blocklist?: (string | Array<string | { start: string; end: string }>) | undefined;
    downloadLimit?: number | undefined;
    uploadLimit?: number | undefined;
    secure?: number | undefined;
    torrentPort?: number | undefined;
    dhtPort?: number | undefined;
    userAgent?: string | undefined;
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
    origin?: string | false | undefined;
    pathname?: string | undefined;
    hostname?: string | undefined;
}

export interface ServerBase {
    client: WebTorrent;
    opts: NodeServerOptions | BrowserServerOptions;
    pathname: string;
    address(): AddressInfo | string | null;
    close(cb?: () => void): void;
    destroy(cb?: () => void): void;
}

export interface NodeServer extends ServerBase {
    opts: NodeServerOptions;
    server: Server;
    listen(...args: Parameters<Server["listen"]>): Server;
    address(): AddressInfo | string | null;
}

export interface BrowserServer extends ServerBase {
    opts: BrowserServerOptions;
    registration: ServiceWorkerRegistration;
    workerKeepAliveInterval: ReturnType<typeof setInterval> | null;
    workerPortCount: number;
    listen(_: unknown, cb?: () => void): void;
    address(): ServerAddress;
}

export interface StoreOptions {
    length: number;
    files: TorrentFile[];
    torrent: Torrent;
    path: string;
    name: string;
    addUID: boolean;
}

export interface TorrentOptions {
    announce?: string[] | undefined;
    announceList?: string[][] | undefined;
    getAnnounceOpts?(): object;
    urlList?: string[] | undefined;
    maxWebConns?: number | undefined;
    path?: string | undefined;
    store?(chunkLength: number, storeOpts: StoreOptions): any;
    private?: boolean | undefined;
    destroyStoreOnDestroy?: boolean | undefined;
    storeCacheSlots?: number | undefined;
    skipVerify?: boolean | undefined;
    preloadedStore?: any;
    strategy?: "rarest" | "sequential" | undefined;
    createdBy?: string | undefined;
    addUID?: boolean | undefined;
    rootDir?: FileSystemDirectoryHandle | undefined;
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

export type PeerSource = "manual" | "tracker" | "dht" | "lsd" | "ut_pex";

export interface FileStreamData {
    stream: Readable;
    file: TorrentFile;
    req: Request;
}

export interface FileIteratorData {
    iterator: AsyncIterableIterator<Uint8Array>;
    file: TorrentFile;
    req: Request;
}

export interface Torrent extends EventEmitter {
    readonly infoHash: string;
    readonly infoHashHash?: string;
    readonly magnetURI: string;
    readonly torrentFile: Uint8Array;
    readonly torrentFileBlob: Blob | null;
    readonly files: TorrentFile[];
    readonly announce: string[];
    readonly ["announce-list"]: string[][];
    readonly urlList: string[];
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
    readonly strategy: "rarest" | "sequential";
    readonly metadata: Uint8Array | null;
    readonly wires: Wire[];

    destroy(opts?: TorrentDestroyOptions, cb?: (err?: Error) => void): void;
    addPeer(peer: string | SimplePeerInstance, source?: PeerSource): boolean;
    addWebSeed(url: string): void;
    removePeer(peer: string | SimplePeerInstance): void;
    select(start: number, end: number, priority?: number, notify?: () => void): void;
    deselect(start: number, end: number): void;
    critical(start: number, end: number): void;
    pause(): void;
    resume(): void;
    rescanFiles(cb?: (err?: Error) => void): void;
    getFileModtimes(cb: (err: Error | null, modtimes?: number[]) => void): void;

    on(
        event:
            | "infoHash"
            | "metadata"
            | "ready"
            | "done"
            | "seed"
            | "close"
            | "_infoHash"
            | "dhtAnnounce"
            | "trackerAnnounce"
            | "idle"
            | "interested"
            | "uninterested",
        callback: () => void,
    ): this;
    on(event: "warning" | "error", callback: (err: Error | string) => void): this;
    on(event: "download" | "upload", callback: (bytes: number) => void): this;
    on(event: "wire", callback: (wire: Wire, addr?: string) => void): this;
    on(event: "noPeers", callback: (announceType: "tracker" | "dht" | "lsd" | "ut_pex") => void): this;
    on(event: "verified", callback: (index: number) => void): this;
    on(event: "hotswap", callback: (oldWire: Wire, newWire: Wire, index: number) => void): this;
    on(event: "peer" | "invalidPeer" | "blockedPeer", callback: (peer: string | SimplePeerInstance) => void): this;

    once(
        event:
            | "infoHash"
            | "metadata"
            | "ready"
            | "done"
            | "seed"
            | "close"
            | "_infoHash"
            | "dhtAnnounce"
            | "trackerAnnounce"
            | "idle"
            | "interested"
            | "uninterested",
        callback: () => void,
    ): this;
    once(event: "warning" | "error", callback: (err: Error | string) => void): this;
    once(event: "download" | "upload", callback: (bytes: number) => void): this;
    once(event: "wire", callback: (wire: Wire, addr?: string) => void): this;
    once(event: "noPeers", callback: (announceType: "tracker" | "dht" | "lsd" | "ut_pex") => void): this;
    once(event: "verified", callback: (index: number) => void): this;
    once(event: "hotswap", callback: (oldWire: Wire, newWire: Wire, index: number) => void): this;
    once(event: "peer" | "invalidPeer" | "blockedPeer", callback: (peer: string | SimplePeerInstance) => void): this;
}

export interface TorrentFile extends EventEmitter {
    readonly name: string;
    readonly path: string;
    readonly length: number;
    readonly size: number;
    readonly type: string;
    readonly offset: number;
    readonly done: boolean;
    readonly downloaded: number;
    readonly progress: number;
    readonly streamURL: string;

    select(priority?: number): void;
    deselect(): void;
    createReadStream(opts?: { start: number; end: number }): Readable;
    arrayBuffer(opts?: { start: number; end: number }): Promise<ArrayBuffer>;
    blob(opts?: { start: number; end: number }): Promise<Blob>;
    stream(opts?: { start: number; end: number }): ReadableStream;
    streamTo(elem: HTMLMediaElement): HTMLMediaElement;
    includes(piece: number): boolean;
    [Symbol.asyncIterator](opts?: { start: number; end: number }): AsyncIterableIterator<Uint8Array>;

    on(event: "done", callback: () => void): this;
    on(event: "stream", callback: (data: FileStreamData, cb: (stream: Readable) => void) => void): this;
    on(
        event: "iterator",
        callback: (data: FileIteratorData, cb: (iterator: AsyncIterableIterator<Uint8Array>) => void) => void,
    ): this;

    once(event: "done", callback: () => void): this;
    once(event: "stream", callback: (data: FileStreamData, cb: (stream: Readable) => void) => void): this;
    once(
        event: "iterator",
        callback: (data: FileIteratorData, cb: (iterator: AsyncIterableIterator<Uint8Array>) => void) => void,
    ): this;
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
    tracker: boolean | {};
    lsd: boolean;
    utPex: boolean;
    natUpnp: boolean | "permanent";
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

    createServer(): NodeServer | BrowserServer;
    createServer(opts: NodeServerOptions, force: "node"): NodeServer;
    createServer(opts: BrowserServerOptions, force: "browser"): BrowserServer;
    createServer(opts?: BrowserServerOptions | NodeServerOptions, force?: "browser" | "node"): NodeServer | BrowserServer;

    add(
        torrentId: string | Uint8Array | File | Blob | ParseTorrentInstance,
        opts?: TorrentOptions,
        cb?: (torrent: Torrent) => void,
    ): Torrent;
    add(torrentId: string | Uint8Array | File | Blob | ParseTorrentInstance, cb?: (torrent: Torrent) => void): Torrent;

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
        cb?: (err?: Error) => void,
    ): Promise<void>;
    remove(torrentId: Torrent | string | Uint8Array, cb?: (err?: Error) => void): Promise<void>;

    get(torrentId: string | Uint8Array | File | ParseTorrentInstance): Promise<Torrent | null>;

    destroy(cb?: (err?: Error) => void): void;

    address(): AddressInfo | string | null;

    throttleDownload(rate: number): boolean | undefined;

    throttleUpload(rate: number): boolean | undefined;

    readonly downloadSpeed: number;

    readonly uploadSpeed: number;

    readonly progress: number;

    readonly ratio: number;

    on(event: "torrent" | "add" | "seed" | "remove", callback: (torrent: Torrent) => void): this;
    on(event: "listening" | "ready", callback: () => void): this;
    on(event: "error", callback: (err: Error | string) => void): this;

    once(event: "torrent" | "add" | "seed" | "remove", callback: (torrent: Torrent) => void): this;
    once(event: "listening" | "ready", callback: () => void): this;
    once(event: "error", callback: (err: Error | string) => void): this;
}
