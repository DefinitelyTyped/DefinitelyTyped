// Type definitions for exaroton 1.9
// Project: https://github.com/exaroton/node-exaroton-api
// Definitions by: Maximilian Hofmann <https://github.com/hofmmaxi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type { EventEmitter } from 'node:events';
import type { WebSocket } from 'ws';

import type { ReadStream, WriteStream } from 'node:fs';
import type { Headers, Method, Options, ResponseType } from 'got';

export { Client, Request, Response, Server, ServerStatus, Software };

declare class Client {
    protocol: 'http' | 'https';

    host: string;

    basePath: string;

    get baseUrl(): string;

    #apiToken: string | null;

    #userAgent: string;

    constructor(apiToken: string);

    setAPIToken(apiToken: string): this;

    getAPIToken(): string;

    setUserAgent(userAgent: string): this;

    request(request: Request): Promise<Response>;

    streamResponse<
        T extends Options & {
            isStream?: true;
        },
    >(url: string, gotOptions: T, outputStream: WriteStream): Promise<unknown>;

    getServers(): Promise<Server[]>;

    getAccount(): Promise<Account>;

    server(id: string): Server;
}

declare abstract class Request {
    method: Method;

    endpoint: string;

    parameters: Record<string, string>;

    headers: Headers;

    // TODO improve this
    data: Record<string, any> | string | null;

    responseClass: Response;

    responseType: ResponseType;

    outputPath: string | null;

    outputStream: WriteStream | null;

    inputPath: string | null;

    inputStream: ReadStream | null;

    client: Client;

    setParameter(key: string, value: string): void;

    setHeader(key: string, value: string): void;

    getEndpoint(): string;

    hasBody(): boolean;

    getBody(): ReadStream | string | null;

    // TODO improve this
    createResponse<T extends Response>(body: object | string | null): T;

    expectsJsonResponse(): boolean;

    getOutputStream(): WriteStream | null;

    hasOutputStream(): boolean;

    getInputStream(): ReadStream | null;

    hasInputStream(): boolean;

    // TODO improve this
    setData(data: Record<string, any> | string): this;

    setInputPath(inputPath: string): this;

    setOutputPath(outputPath: string): this;

    setInputStream(inputStream: ReadStream): this;

    setOutputStream(outputStream: WriteStream): this;
}

declare abstract class Response {
    request: Request;

    // TODO improve this
    body: Record<string, any> | string;

    protected constructor(request: Request);

    getData(): object | string | null;

    setBody(body: object | string): void;
}

interface RawFile {
    readonly path: string;
    readonly name: string;
    readonly isTextFile: boolean;
    readonly isConfigFile: boolean;
    readonly isDirectory: boolean;
    readonly isLog: boolean;
    readonly isReadable: boolean;
    readonly isWritable: boolean;
    readonly size: number;
    readonly children: RawFile[] | null;
}

declare class File {
    path: string;

    name: string;

    isTextFile: boolean;

    isConfigFile: boolean;

    isDirectory: boolean;

    isLog: boolean;

    isReadable: boolean;

    isWritable: boolean;

    size: number;

    children: File[] | null;

    #server: Server;

    #client: Client;

    constructor(path: string | null);

    setPath(path: string): void;

    applyData(object: RawFile): this;

    setServer(server: Server): this;

    setClient(client: Client): this;

    getInfo(): Promise<this>;

    getContent(): Promise<string>;

    download(outputPath: string): Promise<Response>;

    downloadToStream(outputStream: WriteStream): Promise<Response>;

    // TODO improve this
    putContent(content: string | Record<string, any>): Promise<Response>;

    upload(inputPath: string): Promise<Response>;

    uploadFromStream(inputStream: ReadStream): Promise<Response>;

    delete(): Promise<Response>;

    createAsDirectory(): Promise<Response>;

    getChildren(): Promise<File[] | null>;
}

declare enum ServerStatus {
    OFFLINE = 0,
    ONLINE = 1,
    STARTING = 2,
    STOPPING = 3,
    RESTARTING = 4,
    SAVING = 5,
    LOADING = 6,
    CRASHED = 7,
    PENDING = 8,
    PREPARING = 10,
}

interface RawServer {
    readonly id: string;
    readonly name: string;
    readonly address: string;
    readonly motd: string;
    readonly status: number;
    readonly host: string | null;
    readonly port: number | null;
    readonly shared: boolean;
    readonly software: Software | null;
    readonly player: Players;
}

declare class Server extends EventEmitter {
    readonly STATUS: typeof ServerStatus;

    #client: Client;

    #websocketClient: WebsocketClient;

    id: string;

    name: string;

    address: string;

    motd: string;

    status: number;

    host: string | null;

    port: number | null;

    shared: boolean;

    software: Software | null;

    players: Players | null;

    #playerLists: Record<string, PlayerList>;

    constructor(client: Client, id: string);

    getClient(): Server;

    get(): Promise<this>;

    start(useOwnCredits?: boolean): Promise<Response>;

    stop(): Promise<Response>;

    restart(): Promise<Response>;

    executeCommand(command: string): Promise<Response | boolean>;

    getLogs(): Promise<string>;

    shareLogs(): Promise<string>;

    getRAM(): Promise<number>;

    setRAM(ram: number): Promise<Response>;

    getMOTD(): Promise<string>;

    setMOTD(motd: string): Promise<Response>;

    // TODO improve this
    getOption(option: string): Promise<Record<string, any> | null>;

    setOption(option: string, value: string): Promise<Response>;

    getPlayerLists(): Promise<PlayerList[]>;

    getPlayerList(name: PlayerListType): PlayerList;

    getFile(path: string): File;

    hasStatus(status: ServerStatus| ServerStatus[]): boolean;

    getWebsocketClient(): WebsocketClient;

    subscribe(streams?: StreamType[] | StreamType): boolean;

    unsubscribe(streams?: StreamType[] | StreamType): boolean;

    setFromObject(server: RawServer): Server;

    toJSON(): RawServer;
}

interface RawSoftware {
    readonly id: string;
    readonly name: string;
    readonly version: string;
}

declare class Software {
    readonly id: string;

    readonly name: string;

    readonly version: string;

    constructor(softwareObject: RawSoftware);
}

// Internal types

interface RawAccount {
    readonly name: string;
    readonly email: string;
    readonly verified: boolean;
    readonly credits: number;
}

declare class Account {
    #client: Client;

    name: string;

    email: string;

    verified: boolean;

    credits: number;

    constructor(client: Client);

    get(): Promise<Account>;

    setFromObject(account: RawAccount): Account;
}

type PlayerListType = 'whitelist' | 'ops' | 'banned-ips' | 'banned-players';

declare class PlayerList {
    name: string;

    #server: Server;

    #client: Client;

    constructor(name: string);

    setServer(server: Server): this;

    setClient(client: Client): this;

    getName(): string;

    getEntries(): Promise<string[]>;

    addEntries(entries: string[]): Promise<Response>;

    addEntry(entry: string): Promise<Response>;

    deleteEntries(entries: string[]): Promise<Response>;

    deleteEntry(entry: string): Promise<Response>;
}

interface RawPlayers {
    readonly max: number;
    readonly count: number;
    readonly list: string[];
}

declare class Players {
    max: number;

    count: number;

    list: string[];

    constructor(playersObject: RawPlayers);
}

type MessageType = 'started' | 'stopped';

interface Message {
    type: MessageType;
}

type StreamStatus = [1 | 2 | 3 | 4];

declare class WebsocketClient extends EventEmitter {
    readonly protocol: 'wss' | 'ws';

    #client: Client;

    #server: Server;

    #websocket: WebSocket;

    autoReconnect: boolean;

    reconnectTimeout: number;

    #reconnectInterval: NodeJS.Timeout;

    #connected: boolean;

    #shouldConnect: boolean;

    #serverConnected: boolean;

    #ready: boolean;

    #streams: Stream[];

    #availableStreams: {
        console: ConsoleStream;
        heap: HeapStream;
        stats: StatsStream;
        tick: TickStream;
    };

    constructor(server: Server);

    connect(): void;

    disconnect(): void;

    onOpen(): void;

    onClose(): void;

    onError<T extends Error>(error: T): boolean;

    onMessage(rawMessage: string): void;

    isConnected(): boolean;

    isReady(): boolean;

    getServer(): Server;

    getServerStatus(): Promise<number>;

    getStreams(stream: string): boolean | Stream;

    hasStream(stream: string): boolean;

    tryToStartStreams(): void;

    removeStreams(stream: string): void;

    // TODO check this for right types
    send(stream: string, type: string, data: string): boolean;
}

declare class Stream extends EventEmitter {
    #client: WebsocketClient;

    #started: boolean;

    #shouldStart: boolean;

    readonly name: string;

    // TODO improve this
    startData: Record<string, any> | string;

    readonly startStatuses: StreamStatus;

    constructor(client: WebsocketClient);

    // TODO improve this
    send(type: StreamType, data: any): boolean;

    onStatusChange(): boolean;

    onMessage(message: Message): void;

    // TODO improve this
    onDataMessage(type: string, message: any): void;

    onDisconnect(): void;

    // TODO improve this
    emitEvent(type: string, data: Array<Record<string, any>>): void;

    // TODO improve this
    start(data?: any): void;

    shouldBeStarted(): Promise<boolean>;

    tryToStart(): Promise<boolean>;

    stop(): void;

    tryToStop(): Promise<boolean>;

    isStarted(): boolean;
}

type StreamType = 'start' | 'stop' | 'started' | 'tick' | 'heap' | 'stats' | 'console';

declare class TickStream extends Stream {
    readonly name: StreamType;
    startStatuses: StreamStatus;

    // TODO improve this
    onDataMessage(type: StreamType, message: Record<string, any>): void;
}

declare class StatsStream extends Stream {
    readonly name: StreamType;
    startStatuses: StreamStatus;
}

declare class HeapStream extends Stream {
    readonly name: string;
    startStatuses: [1];
}

type ConsoleDataType = 'start' | 'stop' | 'command' | 'started' | 'line';

declare class ConsoleStream extends Stream {
    #ansiRegex: RegExpConstructor;
    readonly name: StreamType;
    startData: { tail: 0 };

    // TODO improve this
    onDataMessage(type: StreamType, message: Record<string, any>): void;

    parseReturns(string: string): string;

    parseLine(line: string): string;

    sendCommand(command: string): void;
}
