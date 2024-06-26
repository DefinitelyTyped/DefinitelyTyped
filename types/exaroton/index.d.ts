import { Method, Options as GotOptions, ResponseType } from "got";
import { EventEmitter } from "node:events";
import { ReadStream, WriteStream } from "node:fs";
import { WebSocket } from "ws";

export { Client, ConfigOptionType, Pool, PoolMember, Request, Response, Server, ServerStatus, Software };

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

declare class Client {
    protocol: string;

    host: string;

    basePath: string;

    get baseUrl(): string;

    #apiToken: string | null;

    #userAgent: string;

    constructor(apiToken: string);

    setAPIToken(apiToken: string): this;

    getAPIToken(): string;

    setUserAgent(userAgent: string): this;

    private request<T extends Request>(request: T): Promise<unknown>;

    private streamResponse<T extends NodeJS.WritableStream>(
        url: string,
        gotOptions: GotOptions & {
            isStream?: true | boolean;
        },
        outputStream: T,
    ): Promise<void>;

    getServers(): Promise<Server[]>;

    getPools(): Promise<Pool[]>;

    getAccount(): Promise<Account>;

    server(id: string): Server;

    pool(id: string): Pool;
}

declare abstract class Request {
    readonly method: Method;

    readonly endpoint: string;

    readonly parameters: Record<string, any>;

    readonly headers: Record<string, any>;

    readonly data: null | Record<string, any> | string;

    readonly responseClass: Response;

    readonly responseType: ResponseType;

    outputPath?: string;

    outputStream?: WriteStream | null;

    inputPath?: string;

    inputStream?: ReadStream | null;

    setParameter(key: string, value: string): void;

    setHeader(key: string, value: string): void;

    getEndpoint(): string;

    hasBody(): boolean;

    getBody(): FormData | string | ReadStream;

    createResponse(body: object | string | null): Response;

    expectsJsonResponse(): boolean;

    getOutputStream(): WriteStream | null;

    hasOutputStream(): boolean;

    getInputStream(): ReadStream | null;

    hasInputStream(): boolean;

    setOutputPath(outputPath: string): Request;

    setInputStream(inputStream: ReadStream): this;

    setOutputStream(outputStream: WriteStream): this;

    setData(data: string | object): this;

    setInputPath(inputPath: string): Request;
}

declare abstract class Response {
    request: Request;

    body: object | string;

    constructor(request: Request);

    getData(): object | null;

    setBody(body: object | string): void;
}

declare class File {
    path: string;

    name: string;

    readonly isTextFile: boolean;

    readonly isConfigFile: boolean;

    readonly isDirectory: boolean;

    readonly isLog: boolean;

    readonly isReadable: boolean;

    readonly isWritable: boolean;

    readonly size: number;

    readonly children: File[] | null;

    private readonly server: Server;

    private readonly client: Client;

    constructor(path: string | null);

    setPath(path: string): void;

    applyData(object: object): File;

    setServer(server: Server): File;

    setClient(client: Client): File;

    getInfo(): Promise<File>;

    getContent(): Promise<string>;

    download(outputPath: string): Promise<Response>;

    downloadToStream(outputStream: WriteStream): Promise<Response>;

    putContent(content: string | object): Promise<Response>;

    upload(inputPath: string): Promise<Response>;

    uploadFromStream(inputStream: ReadStream): Promise<Response>;

    delete(): Promise<Response>;

    createAsDirectory(): Promise<Response>;

    getChildren(): Promise<File[] | null>;

    getConfig(): Config;
}

declare class Config {
    #file?: File;
    #options: Map<string, ConfigOption> | null;
    #originalValues: Map<string, ConfigOptionValue> | null;

    constructor(file: File);

    applyData(object: Record<string, any>): this;

    private loadOptions(): Promise<this>;

    getOptions(update?: boolean): Promise<Map<string, ConfigOption>>;

    getOption(key: PropertyKey): Promise<ConfigOption | null>;

    save(): Promise<unknown> | null;
}

type ConfigOptionValue = string | number | boolean | string[];

declare class ConfigOption {
    #key: string;
    #label: string;
    #type: string;
    #value: ConfigOptionValue;
    #options: string[] | null;

    constructor(key: string, label: string, type: string, value: ConfigOptionValue, options?: string[] | null);

    getKey(): string;

    getLabel(): string;

    getType(): string;

    getValue(): ConfigOptionValue;

    setValue(value: ConfigOptionValue): ConfigOption;

    getOptions(): string[] | null;
}

declare enum ConfigOptionType {
    STRING = "string",
    INTEGER = "number",
    FLOAT = "float",
    BOOLEAN = "boolean",
    MULTI_SELECT = "multiselect",
    SELECT = "select",
}

declare class Pool {
    #client: Client;
    id: string;
    name?: string;
    credits?: number;
    servers?: number;
    owner?: string;
    isOwner?: boolean;
    members?: number;
    ownShare?: number;
    ownCredits?: number;

    constructor(client: Client, id: string);

    setFromObject(poolObject: Record<string, any>): this;

    get(): Promise<this>;

    getMembers(): Promise<PoolMember[]>;

    getServers(): Promise<Server[]>;
}

declare class PoolMember {
    account: string;
    name: string;
    share: number;
    credits: number;
    isOwner: boolean;

    constructor(poolMemberObject: Record<string, any>);
}

interface Server {
    readonly id: string;
    readonly name: string;
    readonly address: string;
    readonly motd: string;
    readonly status: number;
    readonly host: string | null;
    readonly port: number | null;
    readonly shared: boolean;
    readonly software: Software;
    readonly players: Players;
}

interface Software {
    readonly id: string;
    readonly name: string;
    readonly version: string;
}

export interface StreamTypes {
    status: [server: Server];
    "console:line": [data: string];
    "tick:tick": [data: { averageTickTime: number; tps: number }];
    "stats:stats": [data: { memory: { percent: number; usage: number } }];
    "heap:heap": [data: { usage: number }];
}

declare class Server extends EventEmitter {
    readonly STATUS: {
        readonly OFFLINE: 0;
        readonly ONLINE: 1;
        readonly STARTING: 2;
        readonly STOPPING: 3;
        readonly RESTARTING: 4;
        readonly SAVING: 5;
        readonly LOADING: 6;
        readonly CRASHED: 7;
        readonly PENDING: 8;
        readonly PREPARING: 10;
    };

    private readonly client: Client;

    readonly id: string;

    readonly name: string;

    readonly address: string;

    readonly motd: string;

    readonly status: number;

    readonly host: string | null;

    readonly port: number | null;

    readonly shared: false | boolean;

    readonly software: Software;

    readonly player: Players;

    constructor(client: Client, id: string);

    getClient(): Server;

    get(): Promise<Server>;

    start(): Promise<Response>;

    stop(): Promise<Response>;

    restart(): Promise<Response>;

    executeCommand(command: string): Promise<Response | boolean>;

    getLogs(): Promise<string>;

    shareLogs(): Promise<string>;

    getRAM(): Promise<number>;

    setRAM(ram: number): Promise<Response>;

    getMOTD(): Promise<string>;

    setMOTD(motd: string): Promise<Response>;

    getOption(option: string): Promise<object | null>;

    setOption(option: string, value: string): Promise<Response>;

    getPlayerLists(): Promise<PlayerList[]>;

    getPlayerList(name: PlayerListType): PlayerList;

    getFile(path: string): File;

    hasStatus(status: number | number[]): boolean;

    getWebsocketClient(): WebsocketClient;

    subscribe(streams?: SubscriptionType[] | SubscriptionType): boolean;

    unsubscribe(streams?: SubscriptionType[] | SubscriptionType): boolean;

    setFromObject(server: object): Server;

    toJSON(): Server;

    on<StreamType extends keyof StreamTypes>(stream: StreamType, listener: (...args: StreamTypes[StreamType]) => void): this;
}

declare class Software {
    readonly id: string;

    readonly name: string;

    readonly version: string;

    constructor(softwareObject: Software);
}

// Internal types

declare class Account {
    #client: Client;

    readonly name: string;

    readonly email: string;

    readonly verified: boolean;

    readonly credits: number;

    constructor(client: Client);

    get(): Promise<Account>;

    setFromObject(account: object): Account;
}

type PlayerListType = "whitelist" | "ops" | "banned-ips" | "banned-players";

declare class PlayerList {
    name: string;

    private server: Server;
    private client: Client;

    constructor(name: string);

    setServer(server: Server): PlayerList;

    setClient(client: Client): PlayerList;

    getName(): string;

    getEntries(): Promise<string[]>;

    addEntries(entries: string[]): Promise<Response>;

    addEntry(entry: string): Promise<Response>;

    deleteEntries(entries: string[]): Promise<Response>;

    deleteEntry(entry: string): Promise<Response>;
}

declare class Players {
    max: number;

    count: number;

    list: string[];

    constructor(playersObject: Players);
}

type Message = "started" | "stopped";

type StreamStatus = 1 | 2 | 3 | 4;

declare class WebsocketClient extends EventEmitter {
    readonly protocol: string;
    private client: Client;
    private server: Server;
    private websocket: WebSocket;

    autoReconnect: boolean;

    reconnectTimeout: 3000 | number;

    private reconnectInterval;

    private connected: false | boolean;
    private shouldConnect: false | boolean;
    private serverConnected: false | boolean;
    private ready: false | boolean;
    private streams: Stream[];
    private availableStreams: {
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

    onError(error: Error): boolean;

    onMessage(rawMessage: string): void;

    isConnected(): boolean;

    isReady(): boolean;

    getServer(): Server;

    getServerStatus(): Promise<number>;

    getStreams(stream: string): boolean | Stream;

    hasStream(stream: string): boolean;

    tryToStartStreams(): void;

    removeStreams(stream: string): void;

    send(stream: string, type: string, data: string): boolean;
}

declare class Stream extends EventEmitter {
    private readonly client: WebsocketClient;
    private started: false | boolean;
    private shouldStart: false | boolean;
    readonly name: string;
    readonly startData: object | string;
    readonly startStatuses: StreamStatus[];

    constructor(client: WebsocketClient);

    send(type: SubscriptionType, data: any): boolean;

    onStatusChange(): boolean;

    onMessage(message: Message): void;

    onDataMessage(type: string, message: any): void;

    onDisconnect(): void;

    emitEvent(type: string, data: object[]): void;

    start(data?: any): void;

    shouldBeStarted(): Promise<boolean>;

    tryToStart(): Promise<void>;

    stop(): void;

    tryToStop(): Promise<boolean>;

    isStarted(): boolean;
}

type SubscriptionType = "tick" | "heap" | "stats" | "console";

type TickDataType = "start" | "stop" | "started" | "tick";

declare class TickStream extends Stream {
    readonly name: string;
    startStatuses: StreamStatus[];

    onDataMessage(type: TickDataType, message: string): void;
}

type StatsDataType = "start" | "stop" | "started" | "stats";

declare class StatsStream extends Stream {
    readonly name: string;
    startStatuses: StreamStatus[];
}

type HeapDataType = "start" | "stop" | "started" | "heap";

declare class HeapStream extends Stream {
    readonly name: string;
    startStatuses: StreamStatus[];
}

type ConsoleDataType = "start" | "stop" | "command" | "started" | "line";

declare class ConsoleStream extends Stream {
    private ansiRegex: RegExpConstructor;
    readonly name: string;
    startData: { tail: 0 };

    onDataMessage(type: ConsoleDataType, message: string): void;

    parseReturns(string: string): string;

    parseLine(line: string): string;

    sendCommand(command: string): void;
}
