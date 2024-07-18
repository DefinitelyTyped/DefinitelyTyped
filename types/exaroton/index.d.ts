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
    /**
     * The protocol type used for request
     *
     * Can be http, https, ws or wss
     * @defaultValue htttps
     */
    protocol: string;

    /**
     * The hostname the client uses to retireve all data
     *
     * @defaultValue api.exaroton.com
     */
    host: string;

    /**
     * Represents the api version
     *
     * @defaultValue /v1/
     */
    basePath: string;

    /**
     * API base URL used for all requests
     */
    get baseUrl(): string;

    #apiToken: string | null;

    #userAgent: string;

    /**
     * Client constructor
     *
     * @param {string} apiToken string API token, create one here: https://exaroton.com/account/
     */
    constructor(apiToken: string);

    /**
     * Set the API token
     *
     * @param {string} apiToken
     */
    setAPIToken(apiToken: string): this;

    /**
     * Returns the currently set api token used for requests
     */
    getAPIToken(): string;

    /**
     * Set the user agent
     *
     * @param {string} userAgent
     */
    setUserAgent(userAgent: string): this;

    /**
     * Send a {Request} to the API and get a {Response}
     *
     * @param {Request} request
     * @throws {RequestError} if the request was unsuccessful
     */
    request<T extends Request>(request: T): Promise<unknown>;

    /**
     * @param {string} url
     * @param {GotOptions & {
     isStream?: true | boolean;
     }} gotOptions
     * @param {stream.Writable} outputStream
     */
    streamResponse<T extends NodeJS.WritableStream>(
        url: string,
        gotOptions: GotOptions & {
            isStream?: true | boolean;
        },
        outputStream: T,
    ): Promise<void>;

    /**
     * Get a list of all servers
     *
     * @return {Promise<Server[]>}
     * @throws {RequestError} if the request was unsuccessful
     */
    getServers(): Promise<Server[]>;

    /**
     * Get a list of all credit pools
     *
     * @return {Promise<Pool[]>}
     * @throws {RequestError} if the request was unsuccessful
     */
    getPools(): Promise<Pool[]>;

    /**
     * Get account info for the current account
     *
     * @throws {RequestError} if the request was unsuccessful
     * @returns {Promise<Account>}
     */
    getAccount(): Promise<Account>;

    /**
     * Retrieve a specific server via its ID
     *
     * @param {string} id
     * @return {Server}
     */
    server(id: string): Server;

    /**
     * Retrieve a specific credit pool via its ID
     *
     * @param {string} id
     * @return {Pool}
     */
    pool(id: string): Pool;
}

declare class Request {
    /**
     * Request method, e.g. "GET" or "POST"
     */
    method: Method;

    /**
     * Endpoint URL, without base, version or starting /
     */
    endpoint: string;

    /**
     * URL parameters, which are replaced in the endpoint string
     */
    parameters: Record<string, any>;

    /**
     * HTTP request headers
     */
    headers: Record<string, any>;

    /**
     * Post body data
     */
    data: null | Record<string, any> | string;

    /**
     * Response class used to create/parse responses to this request
     *
     * @defaultValue {Response}
     */
    responseClass: Response;

    /**
     * Response type (text|json|buffer)
     *
     * @link https://github.com/sindresorhus/got/blob/main/documentation/2-options.md#responsetype
     */
    responseType: ResponseType;

    /**
     * Optional path to write the response body to
     */
    outputPath?: string;

    /**
     * Optional stream to stream the response body to
     */
    outputStream?: WriteStream | null;

    /**
     * Optional path to read the request body from
     */
    inputPath?: string;

    /**
     * Optional stream to read the request body from
     */
    inputStream?: ReadStream | null;

    /**
     * Client that has executed this request
     */
    client: Client;

    /**
     * Set a URL parameter
     *
     * URL parameters replace key variables in the endpoint URL
     *
     * @param {string} key
     * @param {string} value
     */
    setParameter(key: string, value: string): void;

    /**
     * Set request headers
     *
     * @param {string} key
     * @param {string} value
     */
    setHeader(key: string, value: string): void;

    /**
     * Get endpoint with replaced parameters
     */
    getEndpoint(): string;

    /**
     * Check if the request has a body
     */
    hasBody(): boolean;

    /**
     * Get body for request
     */
    getBody(): string | ReadStream;

    /**
     * Create a response object for this request
     *
     * @param {Record<string, any>|string|null} body
     * @return {Response}
     */
    createResponse(body: Record<string, any> | string | null): Response;

    /**
     * @return {boolean}
     */
    expectsJsonResponse(): boolean;

    /**
     * @return {null|WriteStream}
     */
    getOutputStream(): WriteStream | null;

    /**
     * @return {boolean}
     */
    hasOutputStream(): boolean;

    /**
     * @return {null|ReadStream}
     */
    getInputStream(): ReadStream | null;

    /**
     * @return {boolean}
     */
    hasInputStream(): boolean;

    /**
     * Set the data to put as string
     *
     * @param {string|Record<string, any>} data
     * @return {this}
     */
    setData(data: string | Record<string, any>): this;

    /**
     * Set a file as input file for the request body
     *
     * @param {string} inputPath
     * @return {this}
     */
    setInputPath(inputPath: string): Request;

    /**
     * Set a file as output file for the response body
     *
     * @param {string} outputPath
     * @return {this}
     */
    setOutputPath(outputPath: string): Request;

    /**
     * Set a stream as input stream for the request body
     *
     * @param {ReadStream} inputStream
     * @return {this}
     */
    setInputStream(inputStream: ReadStream): this;

    /**
     * Set a stream as output stream for the response body
     *
     * @param {WriteStream} outputStream
     * @return {this}
     */
    setOutputStream(outputStream: WriteStream): this;
}

declare class Response {
    readonly request: Request;

    /**
     * (raw/parsed) response body
     */
    readonly body: Record<string, any> | string;

    /**
     * Response constructor
     *
     * @param {Request} request
     */
    constructor(request: Request);

    /**
     * Get the data from the response
     */
    getData(): Record<string, any> | null;

    /**
     * Set the body to this.body and maybe parse content
     */
    setBody(body: Record<string, any> | string): void;
}

declare class File {
    /**
     * File path relative to server root
     */
    path: string;

    /**
     * File name
     */
    name: string;

    readonly isTextFile: boolean;

    readonly isConfigFile: boolean;

    readonly isDirectory: boolean;

    readonly isLog: boolean;

    readonly isReadable: boolean;

    readonly isWritable: boolean;

    readonly size: number;

    readonly children: File[] | null;

    #server: Server;

    #client: Client;

    constructor(path: string | null);

    setPath(path: string): void;

    /**
     * Apply data from the API response
     *
     * @param {Record<string, any>} object
     * @return {File}
     */
    applyData(object: Record<string, any>): File;

    /**
     * Set the server
     *
     * @param {Server} server
     * @returns {this}
     */
    setServer(server: Server): File;

    /**
     * Set the client to be used for further requests
     *
     * @param {Client} client
     * @returns {this}
     */
    setClient(client: Client): File;

    getClient(): Client;

    getServer(): Server;

    /**
     * Get file information from the API
     *
     * @returns {Promise<File>}
     */
    getInfo(): Promise<File>;

    /**
     * Get the data/content of a file
     *
     * If you want to download the file to a local file use File.download() instead
     *
     * @return {Promise<string>}
     */
    getContent(): Promise<string>;

    /**
     * Download the data/content of a file to a local file
     *
     * If you want to use the content of the file directly use File.getContent() instead
     *
     * @param {string} outputPath
     * @return {Promise<Response>}
     */
    download(outputPath: string): Promise<Response>;

    /**
     * Download the data/content of a file into a writable stream
     *
     * @param {WriteStream} outputStream
     * @return {Promise<Response>}
     */
    downloadToStream(outputStream: WriteStream): Promise<Response>;

    /**
     * Put the content of a file
     *
     * If you want to upload a local file use File.upload() instead
     *
     * @param {string} content
     * @return {Promise<Response>}
     */
    putContent(content: string | object): Promise<Response>;

    /**
     * Upload a local file
     *
     * If you want to upload the content of the file directly as a string use File.putContent() instead
     *
     * @param {string} inputPath
     * @return {Promise<Response>}
     */
    upload(inputPath: string): Promise<Response>;

    /**
     * Upload from a readable stream
     *
     * @param {ReadStream} inputStream
     * @return {Promise<Response>}
     */
    uploadFromStream(inputStream: ReadStream): Promise<Response>;

    /**
     * Delete the file
     *
     * @return {Promise<Response>}
     */
    delete(): Promise<Response>;

    /**
     * Create a directory
     *
     * @return {Promise<Response>}
     */
    createAsDirectory(): Promise<Response>;

    /**
     * Get the children of a directory
     *
     * @return {Promise<File[]|null>}
     */
    getChildren(): Promise<File[] | null>;

    /**
     * Get Config object for this file
     * Only available if the file is a config file
     *
     * @return {Config}
     */
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

    /**
     * Save all changes made to this config file
     *
     * @return {Promise<unknown|null>} null if no changes were made
     */
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

declare class ConfigOptionType {
    static STRING: string;
    static INTEGER: string;
    static FLOAT: string;
    static BOOLEAN: string;
    static MULTI_SELECT: string;
    static SELECT: string;
}

declare class Pool {
    #client: Client;

    id: string;

    name?: string;

    /**
     * Pool credit balance
     */
    credits?: number;

    /**
     * Pool server count
     */
    servers?: number;

    /**
     * Pool owner ID
     */
    owner?: string;

    /**
     * Is pool owner
     */
    isOwner?: boolean;

    /**
     * Pool member count
     */
    members?: number;

    /**
     * Share of this pool owned by the current account
     */
    ownShare?: number;

    /**
     * Credits in this pool owned by the current account
     */
    ownCredits?: number;

    constructor(client: Client, id: string);

    setFromObject(poolObject: Record<string, any>): this;

    /**
     * Get credit pool info
     *
     * @return {this}
     * @throws {RequestError} if the request was unsuccessful
     */
    get(): Promise<this>;

    /**
     * Get pool members
     *
     * @return {Promise<PoolMember[]>}
     */
    getMembers(): Promise<PoolMember[]>;

    /**
     * Get pool servers
     *
     * @return {Promise<Server[]>}
     */
    getServers(): Promise<Server[]>;
}

declare class PoolMember {
    /**
     * Pool member account ID
     */
    account: string;

    /**
     * Pool member name
     */
    name: string;

    /**
     * Pool member share
     */
    share: number;

    /**
     * Pool member credits
     */
    credits: number;

    /**
     * Is pool owner
     */
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
    /**
     * Shorthand to get server status constants
     */
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

    #client: Client;

    #websocketClient: WebsocketClient;

    /**
     * Unique server ID
     */
    readonly id: string;

    readonly name: string;

    /**
     * Full server address
     * @example example.exaroton.me
     */
    readonly address: string;

    /**
     * Message of the day
     */
    readonly motd: string;

    /**
     * Server status
     * @see {STATUS}
     */
    readonly status: number;

    /**
     * Host address, only available if the server is online
     */
    readonly host: string | null;

    /**
     * Server port, only available if the server is online
     */
    readonly port: number | null;

    /**
     * Check if this an owned or a shared server
     */
    readonly shared: boolean;

    /**
     * Server software
     */
    readonly software: Software;

    /**
     * Player data
     */
    readonly player: Players;

    /**
     * Player lists
     */
    #playerLists: Record<string, PlayerList>;

    constructor(client: Client, id: string);

    getClient(): Server;

    /**
     * Get/update the server info
     *
     * @return {this}
     * @throws {RequestError} if the request was unsuccessful
     */
    get(): Promise<Server>;

    /**
     * Start the server
     *
     * @param {boolean} useOwnCredits Use your own credits instead of the server owner's ones
     * @return {Promise<Response>}
     * @throws {RequestError} if the request was unsuccessful
     */
    start(useOwnCredits?: boolean): Promise<Response>;

    /**
     * Stop the server
     *
     * @return {Promise<Response>}
     * @throws {RequestError} if the request was unsuccessful
     */
    stop(): Promise<Response>;

    /**
     * Restart the server
     *
     * @return {Promise<Response>}
     * @throws {RequestError} if the request was unsuccessful
     */
    restart(): Promise<Response>;

    /**
     * Execute a command in the server console
     *
     * @param {string} command
     * @return {Promise<Response|boolean>}
     */
    executeCommand(command: string): Promise<Response | boolean>;

    /**
     * Get the content of the server logs
     *
     * This is cached and will not return the latest updates immediately.
     *
     * @returns {Promise<string>}
     */
    getLogs(): Promise<string>;

    /**
     * Upload the content of the server logs to mclo.gs
     *
     * Returns the URL of the logs on mclo.gs
     *
     * @returns {Promise<string>}
     */
    shareLogs(): Promise<string>;

    /**
     * Get the assigned max server RAM in GB
     *
     * @return {Promise<number>}
     */
    getRAM(): Promise<number>;

    /**
     * Set the assigned max server RAM in GB
     *
     * @param {number} ram
     * @return {Promise<Response>}
     */
    setRAM(ram: number): Promise<Response>;

    /**
     * Get the server Message of the day
     *
     * @returns {Promise<string>}
     */
    getMOTD(): Promise<string>;

    /**
     * Set a new Message of the day
     *
     * @param {string} motd
     * @returns {Promise<Response>}
     */
    setMOTD(motd: string): Promise<Response>;

    /**
     * Get a server option
     *
     * @param option
     * @return {Promise<*>}
     */
    getOption(option: string): Promise<Record<string, any> | null>;

    /**
     * Set a server option
     *
     * @param option
     * @param value
     * @return {Promise<Response>}
     */
    setOption(option: string, value: string): Promise<Response>;

    /**
     * Get all player lists available for the server
     *
     * @returns {Promise<PlayerList[]>}
     */
    getPlayerLists(): Promise<PlayerList[]>;

    /**
     * Get a player list by name
     *
     * @param name
     * @returns {PlayerList}
     */
    getPlayerList(name: PlayerListType): PlayerList;

    /**
     * Get a file object for a server file
     *
     * This doesn't request file info or content yet.
     * Use the File.getInfo() and File.getContent() functions for that
     *
     * @param {string} path The path of the file relative to the server root
     * @return {File}
     */
    getFile(path: string): File;

    /**
     * Check if the server has one or one of multiple status codes
     *
     * Use this.STATUS.<STATUS> for status codes
     *
     * @param {int|int[]} status
     */
    hasStatus(status: number | number[]): boolean;

    /**
     * Get a websocket client for this server
     *
     * @return {WebsocketClient}
     */
    getWebsocketClient(): WebsocketClient;

    /**
     * Subscribe to one or multiple streams
     *
     * @return {boolean}
     * @param {string[]|string} [streams]
     */
    subscribe(streams?: SubscriptionType[] | SubscriptionType): boolean;

    /**
     * Unsubscribe from one, multiple or all streams
     *
     * @param {string[]|string} [streams]
     */
    unsubscribe(streams?: SubscriptionType[] | SubscriptionType): boolean;

    /**
     * Map raw object to this instance
     *
     * @param {Record<string, any>} server
     * @return {this}
     */
    setFromObject(server: Record<string, any>): Server;

    /**
     * Only return intended public fields for JSON serialization
     *
     * Otherwise, fields inherited from EventEmitter would be serialized as well
     *
     * @returns {Record<string, any>}
     */
    toJSON(): Record<string, any>;

    on<StreamType extends keyof StreamTypes>(
        stream: StreamType,
        listener: (...args: StreamTypes[StreamType]) => void,
    ): this;
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
