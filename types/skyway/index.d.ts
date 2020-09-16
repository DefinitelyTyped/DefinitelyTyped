// Type definitions for SkyWay@1.1.17
// Project: https://github.com/skyway/skyway-js-sdk
// Definitions by: Toshiya Nakakura <https://github.com/nakakura>
//                 Atsushi Izumihara <https://github.com/izmhr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

interface Options {
    key: string;
    debug?: number;
    turn?: boolean;
    credential?: Credential;
    config?: RTCConfiguration;
}

interface Credential {
    timestamp?: number;
    ttl?: number;
    authToken?: string;
}

interface CallOptions {
    metadata?: any;
    videoBandWidth?: number;
    audioBandwidth?: number;
    videoCodec?: string;
    audioCodec?: string;
    videoReceiveEnabled?: boolean;
    audioReceiveEnabled?: boolean;
    label?: string;
}

interface ConnectOptions {
    metadata?: any;
    serialization?: string;
    dcInit?: RTCDataChannelInit;
    label?: string;
}

interface RoomOptions {
    mode?: string;
    stream?: MediaStream;
    videoBandwidth?: number;
    audioBandwidth?: number;
    videoCodec?: string;
    audioCodec?: string;
    videoReceiveEnabled?: boolean;
    audioReceiveEnabled?: boolean;
}

interface AnswerOptions {
    videoBandwidth?: number;
    audioBandwidth?: number;
    videoCodec?: string;
    audioCodec?: string;
}

declare class Peer {
    constructor(id: string, options: Options);
    constructor(options: Options);

    connections: any;
    id: string;
    open: boolean;
    rooms: any;

    call(peerId: string, stream?: MediaStream, options?: CallOptions): MediaConnection | undefined;
    connect(peerId: string, options?: ConnectOptions): DataConnection | undefined;
    destroy(): undefined;
    disconnect(): undefined;
    joinRoom(roomName: string, roomOptions?: RoomOptions): SFURoom | MeshRoom | undefined | null;
    listAllPeers(cb: (peerIds: Array<string>) => void): void;
    updateCredential(newCredential: Credential): undefined;

    on(event: string, cb: (ret: any) => void): void;
    on(event: 'open', cb: (id: string) => void): void;
    on(event: 'call', cb: (call: MediaConnection) => void): void;
    on(event: 'close', cb: () => void): void;
    on(event: 'connection', cb: (connection: DataConnection) => void): void;
    on(event: 'disconnected', cb: (id: string) => void): void;
    on(event: 'error', cb: (err: any) => void): void;
}

declare class MediaConnection {
    metadata: any;
    open: boolean;
    remoteId: string;
    peer: string;

    answer(stream: MediaStream, options?: AnswerOptions): undefined;
    close(): void | undefined;
    replaceStream(stream: MediaStream): undefined;

    on(event: string, cb: () => void): void;
    on(event: 'stream', cb: (stream: MediaStream) => void): void;
    on(event: 'close', cb: () => void): void;
    on(event: 'removeStream', cb: (reamoteStream: MediaStream) => void): void;
}

declare class DataConnection {
    metadata: any;
    open: boolean;
    remoteId: string;
    peer: string;

    send(data: any): void;
    close(): void | undefined;

    on(event: string, cb: () => void): void;
    on(event: 'data', cb: (data: any) => void): void;
    on(event: 'close', cb: () => void): void;
}

interface DataObject {
    src: string;
    data: any;
}

declare class MeshRoom {
    close(): undefined;
    getLog(): undefined;
    replaceStream(stream: MediaSource): undefined;
    send(data: any): undefined;

    on(event: string, cb: () => void): void;
    on(event: 'open', cb: () => void): void;
    on(event: 'peerJoin', cb: (peerId: string) => void): void;
    on(event: 'peerLeave', cb: (peerId: string) => void): void;
    on(event: 'log', cb: (logs: Array<string>) => void): void;
    once(event: 'log', cb: (logs: Array<string>) => void): void;
    on(event: 'stream', cb: (stream: MediaStream) => void): void;
    on(event: 'data', cb: (object: DataObject) => void): void;
    on(event: 'close', cb: () => void): void;
    on(event: 'removeStream', cb: (stream: MediaStream) => void): void;
}

declare class SFURoom {
    close(): undefined;
    getLog(): undefined;
    replaceStream(stream: MediaSource): undefined;
    send(data: any): undefined;

    on(event: string, cb: () => void): void;
    on(event: 'open', cb: () => void): void;
    on(event: 'peerJoin', cb: (peerId: string) => void): void;
    on(event: 'peerLeave', cb: (peerId: string) => void): void;
    on(event: 'log', cb: (logs: Array<string>) => void): void;
    once(event: 'log', cb: (logs: Array<string>) => void): void;
    on(event: 'stream', cb: (stream: MediaStream) => void): void;
    on(event: 'data', cb: (object: DataObject) => void): void;
    on(event: 'close', cb: () => void): void;
    on(event: 'removeStream', cb: (stream: MediaStream) => void): void;
}
