import { EventEmitter } from "events";
import { WebSocket } from "ws";
import FormData = require("form-data");
import { ReadableStream, WritableStream } from "node:stream/web";

// Exported types
export { Client, Request, Response, Server, Software };
declare class Client {
    protocol: string | "https";

    host: string | "api.exaroton.com";

    basePath: string | "/v1";

    /**
     * API base URL used for all requests
     */
    get baseUrl(): string;

    /**
     * API token used for authentication
     */
    private apiToken: string | null;

    /**
     * User agent sent with all requests
     */
    private userAgent: string;

    /**
     * @param apiToken string API token, create one here: https://exaroton.com/account/
     */
    constructor(apiToken: string);

    /**
     * Set the API token
     *
     * @param apiToken
     */
    setAPIToken(apiToken: string): string;

    getAPIToken(): string;

    /**
     * Set the user agent
     *
     * @param userAgent
     */
    setUserAgent(userAgent: string): Client;

    /**
     * Send a {Request} to the API and get a {Response}
     *
     * @param request
     * @throws {RequestError}
     */
    request(request: Request): Promise<Response>;

    /**
     * @param url
     * @param gotOptions
     * @param outputStream
     */
    streamResponse(url: string, gotOptions: object, outputStream: WritableStream): Promise<unknown>;

    /**
     * Get a list of all servers
     * @throws {RequestError}
     */
    getServers(): Promise<Server[]>;

    /**
     * Get account info for the current account
     *
     * @throws {RequestError}
     */
    getAccount(): Promise<Account>;

    /**
     * Initialize a new server object
     *
     * @param id
     */
    server(id: string): Server;
}

declare class Request {
    /**
     * Request method, e.g. "GET" or "POST"
     */
    readonly method: Method;

    /**
     * Endpoint URL, without base, version or starting /
     */
    readonly endpoint: string;

    /**
     * URL parameters, which are replaced in the endpoint string
     */
    readonly parameters: object;

    /**
     * HTTP request headers
     */
    readonly headers: object;

    /**
     * Post body data
     */
    readonly data: null | object | string;

    /**
     * Response class used to create/parse responses to this request
     */
    readonly responseClass: Response;

    /**
     * Response type (text|json|buffer)
     *
     * @see https://github.com/sindresorhus/got/blob/main/documentation/2-options.md#responsetype
     */
    readonly responseType: ResponseType;

    /**
     * Optional path to write the response body to
     */
    outputPath?: string;

    /**
     * Optional stream tonstream the response body to
     */
    outputStream?: WritableStream | null;

    /**
     * Optional path to read the request body from
     */
    inputPath?: string;

    /**
     * Optional stream to read the request body from
     */
    inputStream?: ReadableStream | null;

    /**
     * Set a URL parameter
     *
     * URL parameters replace {key} variables in the endpoint URL
     *
     * @param key
     * @param value
     */
    setParameter(key: string, value: string): void;

    /**
     * @param key
     * @param value
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
    getBody(): FormData | string | ReadableStream;

    /**
     * Create a response object for this request
     *
     * @param body
     */
    createResponse(body: object | string | null): Response;

    expectsJsonResponse(): boolean;

    getOutputStream(): WritableStream | null;

    hasOutputStream(): boolean;

    getInputStream(): WritableStream | null;

    hasInputStream(): boolean;

    /**
     * Set a file as output file for the response body
     *
     * @param outputPath
     */
    setOutputPath(outputPath: string): Request;

    /**
     * Set a stream as input stream for request body
     *
     * @param inputStream
     */
    setInputStream(inputStream: ReadableStream): Request;

    /**
     * Set a stream as output stream for the request body
     *
     * @param outputStream
     */
    setOutputStream(outputStream: WritableStream): Request;

    /**
     * Set the data to put as string
     */
    setData(data: string | object): Request;

    /**
     * Set a file as input file for the request body
     *
     * @param inputPath
     */
    setInputPath(inputPath: string): Request;
}

declare class Response {
    request: Request;

    /**
     * (raw/parsed) response body
     */
    body: object | string;

    /**
     * Request constructor
     *
     * @param request
     */
    constructor(request: Request);

    /**
     * Get the data from the response
     */
    getData(): object | null;

    /**
     * Set the body to this.body and maybe parse content
     *
     * @param body
     */
    setBody(body: object | string): void;
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

    private readonly server: Server;

    private readonly client: Client;

    constructor(path: string | null);

    setPath(path: string): void;

    /**
     * Apply data from the API Response
     */
    applyData(object: object): File;

    /**
     * Set the server
     *
     * @param server
     */
    setServer(server: Server): File;

    /**
     * Set the API client
     */
    setClient(client: Client): File;

    /**
     * Get file information from the API
     */
    getInfo(): Promise<File>;

    /**
     * Get the data/content of a file
     *
     * If you want to download the file to a local file use File.download() instead
     */
    getContent(): Promise<string>;

    /**
     * Download the data/content of a file to a local file
     *
     * If you want to use the content of a file directly use File.getContent() instead
     */
    download(outputPath: string): Promise<Response>;

    /**
     * Download the data/content of a file into a writable stream
     */
    downloadToStream(outputStream: WritableStream): Promise<Response>;

    /**
     * Put the content of a file
     *
     * If you want to upload a local file use File.upload() instead
     */
    putContent(content: string | object): Promise<Response>;

    /**
     * Upload a local file
     *
     * If you want to upload the content of the file directly as a string use File.putContent() instead
     */
    upload(inputPath: string): Promise<Response>;

    /**
     * Upload from a readable stream
     */
    uploadFromStream(inputStream: ReadableStream): Promise<Response>;

    /**
     * Delete a file
     */
    delete(): Promise<Response>;

    /**
     * Create a directory
     */
    createAsDirectory(): Promise<Response>;

    /**
     * Get the children of a directory
     */
    getChildren(): Promise<File[] | null>;
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

declare class Server extends EventEmitter {
    /**
     * Shorthand to get server status constants
     */
    readonly STATUS: {
        OFFLINE: 0;
        ONLINE: 1;
        STARTING: 2;
        STOPPING: 3;
        RESTARTING: 4;
        SAVING: 5;
        LOADING: 6;
        CRASHED: 7;
        PENDING: 8;
        PREPARING: 10;
    };

    private readonly client: Client;

    /**
     * Unique server ID
     */
    readonly id: string;

    /**
     * Server name
     */
    readonly name: string;

    /**
     * Full server address (e.g. example.exaroton.me)
     */
    readonly address: string;

    /**
     * MOTD
     */
    readonly motd: string;

    /**
     * Server status
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
     * Check if this is an owned or shared server
     */
    readonly shared: false | boolean;

    /**
     * Server software
     */
    readonly software: Software;

    /**
     * Player lists
     */
    readonly player: Players;

    /**
     * Server constructor
     *
     * @param client
     * @param id
     */
    constructor(client: Client, id: string);

    getClient(): Server;

    /**
     * Get/update the server info
     *
     * @throws {RequestError}
     */
    get(): Promise<Server>;

    /**
     * Start the server
     *
     * @throws {RequestError}
     */
    start(): Promise<Response>;

    /**
     * Stop the server
     *
     * @throws {RequestError}
     */
    stop(): Promise<Response>;

    /**
     * Restart the server
     *
     * @throws {RequestError}
     */
    restart(): Promise<Response>;

    /**
     * Execute a command in the server console
     *
     * @param command
     */
    executeCommand(command: string): Promise<Response | boolean>;

    /**
     * Get the content of the server logs
     *
     * This is cached and will not return the latest updates immediately.
     */
    getLogs(): Promise<string>;

    /**
     * Upload the content of the server logs to mclo.gs
     *
     * Returns the URL of the logs on mclo.gs
     */
    shareLogs(): Promise<string>;

    /**
     * Get the assigned max server RAM in GB
     */
    getRAM(): Promise<number>;

    /**
     * Set the assigned max server RAM in GB
     *
     * @param ram
     */
    setRAM(ram: number): Promise<Response>;

    /**
     * Get the server MOTD
     */
    getMOTD(): Promise<string>;

    /**
     * Set the server MOTD
     *
     * @param motd
     */
    setMOTD(motd: string): Promise<Response>;

    /**
     * Get a server option
     *
     * @param option
     */
    getOption(option: string): Promise<object | null>;

    /**
     * Set a server option
     *
     * @param option
     * @param value
     */
    setOption(option: string, value: string): Promise<Response>;

    /**
     * Get all player lists available for the server
     */
    getPlayerLists(): Promise<PlayerList[]>;

    /**
     * Get a player list by name
     *
     * @param name
     */
    getPlayerList(name: PlayerListTypes): PlayerList;

    /**
     * Get a file object for a server file
     *
     * This doesn't request file info or content yet.
     * Use the File.getInfo() and File.getContent() methods for that
     *
     * @param path The path of the file relative to the server root
     */
    getFile(path: string): File;

    /**
     * Check if the server has one or one of multiple status codes
     *
     * Use this.STATUS.<STATUS> for status codes
     *
     * @param status
     */
    hasStatus(status: number | number[]): boolean;

    /**
     * Get a websocket client for this server
     */
    getWebsocketClient(): WebsocketClient;

    /**
     * Subscribe to one or multiple streams
     *
     * @param streams
     */
    subscribe(streams?: SubscriptionType[] | SubscriptionType): boolean;

    /**
     * Unsubscribe from one, multiple or all streams
     *
     * @param streams
     */
    unsubscribe(streams?: SubscriptionType[] | SubscriptionType): boolean;

    /**
     * Map raw object to this instance
     *
     * @param server
     */
    setFromObject(server: object): Server;

    /**
     * Only return intended public fields for JSON serialization
     *
     * Otherwise, fields inherited from EventEmitter would be serialized as well
     */
    toJSON(): Server;
}

declare class Software {
    /**
     * Software ID
     */
    readonly id: string;

    /**
     * Software name
     */
    readonly name: string;

    /**
     * Software version
     */
    readonly version: string;

    /**
     * Software constructor
     *
     * @param softwareObject
     */
    constructor(softwareObject: Software);
}

// Internal types
declare enum ResponseType {
    Text = "text",
    JSON = "json",
    Buffer = "buffer",
}

declare class Account {
    private readonly client: Client;

    /**
     * Username
     */
    readonly name: string;

    /**
     * Email address
     */
    readonly email: string;

    /**
     * Email address verification
     */
    readonly verified: boolean;

    /**
     * The amount of credits currently available
     */
    readonly credits: number;

    /**
     * Account constructor
     *
     * @param client
     */
    constructor(client: Client);

    /**
     * Get/update the account info
     *
     * @throws {RequestError}
     */
    get(): Promise<Account>;

    /**
     * Map raw objects to this instance
     *
     * @param account
     */
    setFromObject(account: object): Account;
}

declare class RequestError extends Error {
    readonly statusCode: number;
    readonly response: Response;

    /**
     * Set error and status code from response object
     *
     * Returns if an error message was found
     *
     * @param response
     */
    setErrorFromResponseBody(response: object): boolean;
}

declare class RequestBodyError extends RequestError {
    constructor(response: Response);
}

declare class RequestStatusError extends RequestError {
    constructor(error: RequestError);
}

type Method = "GET" | "POST" | "PUT" | "DELETE";

declare class FileRequest extends ServerRequest {
    /**
     * FileRequest constructor
     */
    constructor(id: string, path: string);

    /**
     * Set the path parameter and url encode all characters except slashes
     */
    setPath(path: string): FileRequest;
}

declare class FileDataRequest extends FileRequest {
    endpoint: string;
}

declare class PutFileDataRequest extends FileDataRequest {
    method: Method;
}

declare class CreateDirectoryRequest extends PutFileDataRequest {
    headers: object;
}

declare class DeleteFileDataRequest extends FileDataRequest {
    method: Method;
}

declare class GetFileDataRequest extends FileDataRequest {
    responseType: ResponseType.Text;
}

declare class GetFileInformationRequest extends FileRequest {
    endpoint: string;
}

declare class GetServersRequest extends Request {
    readonly endpoint: string;
    readonly responseClass: ServersResponse;
}

declare class ServerRequest extends Request {
    /**
     * Server request constructor
     *
     * @param id
     */
    constructor(id: string);
}

declare class ExecuteServerCommandRequest extends ServerRequest {
    readonly endpoint: string;
    readonly method: "POST";

    /**
     * Server request constructor
     *
     * @param id
     * @param command
     */
    constructor(id: string, command: string);
}

declare class GetServerLogsRequest extends ServerRequest {
    readonly endpoint: string;
}

declare class GetServerOptionRequest extends ServerRequest {
    readonly endpoint: string;

    /**
     * GetServerOptionRequest constructor
     *
     * @param id
     * @param option
     */
    constructor(id: string, option: string);

    /**
     * Set the option name
     *
     * @param option
     */
    setOption(option: string): void;
}

declare class GetServerRequest extends ServerRequest {
    readonly endpoint: string;
}

declare class RestartServerRequest extends ServerRequest {
    readonly endpoint: string;
}

declare class SetServerOptionRequest extends GetServerOptionRequest {
    readonly method: "POST";

    /**
     * SetServerOptionRequest constructor
     *
     * @param id
     * @param option
     * @param value
     */
    constructor(id: string, option: "ram" | "motd", value: string);
}

declare class ShareServerLogsRequest extends ServerRequest {
    readonly endpoint: string;
}

declare class StartServerRequest extends ServerRequest {
    readonly endpoint: string;
}

declare class StopServerRequest extends ServerRequest {
    readonly endpoint: string;
}

declare class PlayerListRequest extends ServerRequest {
    readonly endpoint: string;
    constructor(id: string, name: string);
}

declare class DeletePlayerListEntriesRequest extends PlayerListRequest {
    readonly method: "DELETE";
    constructor(id: string, name: string, entries: string);
}

declare class GetPlayerListEntriesRequest extends PlayerListRequest {}

declare class GetPlayerListRequest extends ServerRequest {
    readonly endpoint: string;
    readonly responseClass: PlayerListResponse;
}

declare class PutPlayerListEntriesRequest extends PlayerListRequest {
    readonly method: "PUT";
    constructor(id: string, name: string, entries: string);
}

declare class GetAccountRequest extends Request {
    readonly endpoint: string;
}

declare class PlayerListResponse extends Response {
    lists: PlayerList[];

    /**
     * @inheritdoc
     */
    setBody(body: object): void;

    /**
     * @inheritdoc
     */
    getData(): PlayerList[];
}

declare class ServersResponse extends Response {
    servers: Server[];

    /**
     * @inheritdoc
     */
    setBody(body: object): void;

    /**
     * @inheritdoc
     */
    getData(): Server[];
}

type PlayerListTypes = "whitelist" | "ops" | "banned-ips" | "banned-players";

declare class PlayerList {
    /**
     * List name / identifier
     */
    name: string;

    private server: Server;
    private client: Client;

    /**
     * @param name
     */
    constructor(name: string);

    /**
     * Set the server for this list
     *
     * @param server
     */
    setServer(server: Server): PlayerList;

    /**
     * Set the API client
     *
     * @param client
     */
    setClient(client: Client): PlayerList;

    /**
     * Get the list name
     */
    getName(): string;

    getEntries(): Promise<string[]>;

    /**
     * Add multiple entries
     *
     * @param entries
     */
    addEntries(entries: string[]): Promise<Response>;

    /**
     * Add a single entry
     *
     * @param entry
     */
    addEntry(entry: string): Promise<Response>;

    /**
     * Delete multiple entries
     *
     * @param entries
     */
    deleteEntries(entries: string[]): Promise<Response>;

    /**
     * Delete a single entry
     *
     * @param entry
     */
    deleteEntry(entry: string): Promise<Response>;
}

declare class Players {
    /**
     * Max amount of players / slots
     */
    max: number;

    /**
     * Current amount of players
     */
    count: number;

    /**
     * List of player names
     */
    list: string[];

    /**
     * Players constructor
     *
     * @param playersObject
     */
    constructor(playersObject: Players);
}

type Message = "started" | "stopped";

type StreamStatus = 1 | 2 | 3 | 4;

/**
 * @classdesc Websocket client to connect to the websocket for this server
 */
declare class WebsocketClient extends EventEmitter {
    readonly protocol: "wss" | "ws";
    private client: Client;
    private server: Server;
    private websocket: WebSocket;

    /**
     * Automatically reconnect in cas of a disconnect
     */
    autoReconnect: boolean;

    /**
     * Time to wait to reconnect
     *
     * Only change this with caution. A time too low here can
     * cause a spam in requests which can get your application
     * rate limited or even blocked.
     */
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

    /**
     * @param server
     */
    constructor(server: Server);

    /**
     * Connect to websocket
     */
    connect(): void;

    /**
     * Disconnect from the websocket and all streams
     */
    disconnect(): void;

    onOpen(): void;

    onClose(): void;

    onError(error: Error): boolean;

    onMessage(rawMessage: string): void;

    isConnected(): boolean;

    isReady(): boolean;

    getServer(): Server;

    getServerStatus(): Promise<number>;

    /**
     * Get a stream by name
     *
     * @param stream
     */
    getStreams(stream: string): boolean | Stream;

    hasStream(stream: string): boolean;

    tryToStartStreams(): void;

    removeStreams(stream: string): void;

    /**
     * @param stream
     * @param type
     * @param data
     */
    send(stream: string, type: string, data: string): boolean;
}

declare class Stream extends EventEmitter {
    private readonly client: WebsocketClient;
    private started: false | boolean;
    private shouldStart: false | boolean;
    readonly name: string;
    readonly startData: object | string;
    readonly startStatuses: StreamStatus[];

    /**
     * @param client
     */
    constructor(client: WebsocketClient);

    send(type: SubscriptionType, data: any): boolean;

    /**
     * Status change event
     */
    onStatusChange(): boolean;

    /**
     * Message event listener
     *
     * @param message
     */
    onMessage(message: Message): void;

    onDataMessage(type: string, message: any): void;

    onDisconnect(): void;

    /**
     * Double event emitter for generic or specific event handling
     *
     * @param type
     * @param data
     */
    emitEvent(type: string, data: object[]): void;

    /**
     * Start this stream
     */
    start(data?: any): void;

    /**
     * Should/can this stream be started
     */
    shouldBeStarted(): Promise<boolean>;

    /**
     * Try to start if possible
     */
    tryToStart(): Promise<void>;

    /**
     * Stop this stream
     */
    stop(): void;

    /**
     * Try to stop this stream if possible
     */
    tryToStop(): Promise<boolean>;

    isStarted(): boolean;
}

type SubscriptionType = "tick" | "heap" | "stats" | "console";

type TickDataType = "start" | "stop" | "started" | "tick";
declare class TickStream extends Stream {
    readonly name: string;
    startStatuses: [1];
    onDataMessage(type: TickDataType, message: string): void;
}

type StatsDataType = "start" | "stop" | "started" | "stats";
declare class StatsStream extends Stream {
    readonly name: string;
    startStatuses: [1];
}

type HeapDataType = "start" | "stop" | "started" | "heap";
declare class HeapStream extends Stream {
    readonly name: string;
    startStatuses: [1];
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
