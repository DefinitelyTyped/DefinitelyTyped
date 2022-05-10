// Type definitions for exaroton 1.7.2
// Project: https://github.com/exaroton/node-exaroton-api
// Definitions by: Maximilian Hofmann <https://github.com/hofmmaxi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';
import { WebSocket } from 'ws';
import FormData = require('form-data');

// Exported types
declare module 'exaroton' {
    export class Client {
        public protocol: string | 'https';

        public host: string | 'api.exaroton.com';

        public basePath: string | '/v1';

        /**
         * API base URL used for all requests
         *
         * @returns {string}
         */
        public get baseUrl(): string;

        /**
         * API token used for authentication
         *
         * @private
         */
        private apiToken: string | null;

        /**
         * User agent sent with all requests
         *
         * @private
         */
        private userAgent: string;

        /**
         *
         * @param {string} apiToken string API token, create one here: https://exaroton.com/account/
         * @constructor
         * @constructs Client
         */
        constructor(apiToken: string);

        /**
         * Set the API token
         *
         * @param {string} apiToken
         * @returns {Client}
         */
        public setAPIToken(apiToken: string): string;

        /**
         * @returns {string}
         */
        public getAPIToken(): string;

        /**
         * Set the user agent
         *
         * @param {string} userAgent
         * @returns {Client}
         */
        public setUserAgent(userAgent: string): Client;

        /**
         * Send a {Request} to the API and get a {Response}
         *
         * @param {Request} request
         * @returns {Promise<Response>}
         * @throws {RequestError}
         */
        public request(request: Request): Promise<Response>;

        /**
         * Get a list of all servers
         *
         * @returns {Promise<Server[]>}
         * @throws {RequestError}
         */
        public getServers(): Promise<Server[]>;

        /**
         * Get account info for the current account
         *
         * @returns {Promise<Account>}
         * @throws {RequestError}
         */
        public getAccount(): Promise<Account>;

        /**
         * Initialize a new server object
         *
         * @param {string} id
         * @returns {Server}
         */
        public server(id: string): Server;
    }

    export class Request {
        /**
         * Request method, e.g. "GET" or "POST"
         */
        public method: Method;

        /**
         * Endpoint URL, without base, version or starting /
         */
        public endpoint: string;

        /**
         * URL parameters, which are replaced in the endpoint string
         */
        public parameters: object;

        /**
         * HTTP request headers
         */
        public headers: object;

        /**
         * Post body data
         */
        public data: null | object;

        /**
         * Response class used to create/parse responses to this request
         *
         * @type {Response}
         */
        public responseClass: Response;

        /**
         * Set a URL parameter
         *
         * URL parameters replace {key} variables in the endpoint URL
         *
         * @param {string} key
         * @param {string} value
         */
        public setParameter(key: string, value: string): void;

        /**
         *
         * @param {string} key
         * @param {string} value
         */
        public setHeader(key: string, value: string): void;

        /**
         * Get endpoint with replaced parameters
         *
         * @return {string}
         */
        public getEndpoint(): string;

        /**
         * Check if the request has a body
         *
         * @return {boolean}
         */
        public hasBody(): boolean;

        /**
         * Get body for request
         *
         * @return {FormData|string}
         */
        public getBody(): FormData | string;

        /**
         * Create a response object for this request
         *
         * @param {{}} body
         * @return {Response}
         */
        public createResponse(body: object): Response;
    }

    export class Response {
        public request: Request;

        /**
         * (raw/parsed) response body
         */
        public body: object;

        /**
         * Request constructor
         *
         * @param {Request} request
         * @constructor
         * @constructs Response
         */
        constructor(request: Request);

        /**
         * Get the data from the response
         *
         * @returns {any | null}
         */
        public getData(): any | null;

        /**
         * Set the body to this.body and maybe parse content
         *
         * @param {{}} body
         */
        public setBody(body: object): void;
    }

    export interface Server {
        id: string;
        name: string;
        address: string;
        motd: string;
        status: ServerStatus;
        host: string | null;
        port: number | null;
        shared: boolean;
        software: Software;
        players: PlayerList[];
    }

    export interface Software {
        id: string;
        name: string;
        version: string;
    }

    export class Server extends EventEmitter {
        /**
         * Shorthand to get server status constants
         */
        public STATUS: {
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

        private client: Client;

        /**
         * Unique server ID
         */
        public id: string;

        /**
         * Server name
         */
        public name: string;

        /**
         * Full server address (e.g. example.exaroton.me)
         */
        public address: string;

        /**
         * MOTD
         */
        public motd: string;

        /**
         * Server status
         * @see ServerStatus
         */
        public status: ServerStatus;

        /**
         * Host address, only available if the server is online
         */
        public host: string | null;

        /**
         * Server port, only available if the server is online
         */
        public port: number | null;

        /**
         * Check if this is an owned or shared server
         */
        public shared: false | boolean;

        /**
         * Server software
         */
        public software: Software;

        /**
         * Player lists
         */
        private playerLists: PlayerList[];

        /**
         * Server constructor
         *
         * @param {Client} client
         * @param {string} id
         * @constructor
         * @constructs Server
         */
        constructor(client: Client, id: string);

        public getClient(): Server;

        /**
         * Get/update the server info
         *
         * @return {Promise<this>}
         * @throws {RequestError}
         */
        public get(): Promise<Server>;

        /**
         * Start the server
         *
         * @return {Promise<Response>}
         * @throws {RequestError}
         */
        public start(): Promise<Response>;

        /**
         * Stop the server
         *
         * @return {Promise<Response>}
         * @throws {RequestError}
         */
        public stop(): Promise<Response>;

        /**
         * Restart the server
         *
         * @return {Promise<Response>}
         * @throws {RequestError}
         */
        public restart(): Promise<Response>;

        /**
         * Execute a command in the server console
         *
         * @param {string} command
         * @return {Promise<Response|boolean>}
         */
        public executeCommand(command: string): Promise<Response | boolean>;

        /**
         * Get the content of the server logs
         *
         * This is cached and will not return the latest updates immediately.
         *
         * @returns {Promise<string>}
         */
        public getLogs(): Promise<string>;

        /**
         * Upload the content of the server logs to mclo.gs
         *
         * Returns the URL of the logs on mclo.gs
         *
         * @returns {Promise<string>}
         */
        public shareLogs(): Promise<string>;

        /**
         * Get the assigned max server RAM in GB
         *
         * @return {Promise<int>}
         */
        public getRAM(): Promise<number>;

        /**
         * Set the assigned max server RAM in GB
         *
         * @param {int} ram
         * @return {Promise<Response>}
         */
        public setRAM(ram: number): Promise<Response>;

        /**
         * Get the server MOTD
         *
         * @returns {Promise<string>}
         */
        public getMOTD(): Promise<string>;

        /**
         * Set the server MOTD
         *
         * @param {string} motd
         * @returns {Promise<Response>}
         */
        public setMOTD(motd: string): Promise<Response>;

        /**
         * Get a server option
         *
         * @param option
         * @return {Promise<*>}
         */
        public getOption(option: string): Promise<any>;

        /**
         * Set a server option
         *
         * @param option
         * @param value
         * @return {Promise<Response>}
         */
        public setOption(option: string, value: string): Promise<Response>;

        /**
         * Get all player lists available for the server
         *
         * @returns {Promise<PlayerList[]>}
         */
        public getPlayerLists(): Promise<PlayerList[]>;

        /**
         * Get a player list by name
         *
         * @param name
         * @returns {PlayerList}
         */
        public getPlayerList(name: PlayerListTypes): PlayerList;

        /**
         * Check if the server has one or one of multiple status codes
         *
         * Use this.STATUS.<STATUS> for status codes
         *
         * @param {ServerStatus | ServerStatus[]} status
         */
        public hasStatus(status: ServerStatus | ServerStatus[]): boolean;

        /**
         * Get a websocket client for this server
         *
         * @return {WebsocketClient}
         */
        public getWebsocketClient(): WebsocketClient;

        /**
         * Subscribe to one or multiple streams
         *
         * @return {boolean}
         * @param {string[]|string} [streams]
         */
        public subscribe(streams?: subscriptionTypes[] | subscriptionTypes): boolean;

        /**
         * Unsubscribe from one, multiple or all streams
         *
         * @param {string[]|string} [streams]
         */
        public unsubscribe(streams?: subscriptionTypes[] | subscriptionTypes): boolean;

        /**
         * Map raw object to this instance
         *
         * @param {{}} server
         * @return {this}
         */
        public setFromObject(server: object): Server;

        /**
         * Only return intended public fields for JSON serialization
         *
         * Otherwise, fields inherited from EventEmitter would be serialized as well
         *
         * @returns {{}}
         */
        public toJSON(): Server;
    }

    export class Software {
        /**
         * Software ID
         */
        public id: string;

        /**
         * Software name
         */
        public name: string;

        /**
         * Software version
         */
        public version: string;

        /**
         * Software constructor
         *
         * @param {Software} softwareObject
         * @constructor
         * @constructs Software
         */
        constructor(softwareObject: Software);
    }
}

// Internal types
declare class Account {
    /**
     * @private
     */
    private client: Client;

    /**
     * Username
     */
    public name: string;

    /**
     * Email address
     */
    public email: string;

    /**
     * Email address verification
     */
    public verified: boolean;

    /**
     * The amount of credits currently available
     */
    public credits: number;

    /**
     * Account constructor
     *
     * @param {Client} client
     * @constructor
     */
    constructor(client: Client);

    /**
     * Get/update the account info
     *
     * @returns {Promise<Account>}
     * @throws {RequestError}
     */
    public get(): Promise<Account>;

    /**
     * Map raw objects to this instance
     *
     * @param {object} account
     * @returns {Account}
     */
    public setFromObject(account: object): Account;
}

declare class RequestError extends Error {
    public statusCode: number;
    public response: Response;

    /**
     * Set error and status code from response object
     *
     * Returns if an error message was found
     *
     * @param {object} response
     * @returns {boolean}
     */
    setErrorFromResponseBody(response: object): boolean;
}

declare class RequestBodyError extends RequestError {
    constructor(response: Response);
}

declare class RequestStatusError extends RequestError {
    constructor(error: RequestError);
}

declare type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

declare class GetServersRequest extends Request {
    endpoint: string;
    responseClass: ServersResponse;
}

declare class ServerRequest extends Request {
    /**
     * Server request constructor
     *
     * @param {string} id
     * @constructor
     * @constructs ServerRequest
     */
    constructor(id: string);
}

declare class ExecuteServerCommandRequest extends ServerRequest {
    public endpoint: string;
    public method: 'POST';

    /**
     * Server request constructor
     *
     * @param {string} id
     * @param {string} command
     */
    constructor(id: string, command: string);
}

declare class GetServerLogsRequest extends ServerRequest {
    public endpoint: string;
}

declare class GetServerOptionRequest extends ServerRequest {
    public endpoint: string;

    /**
     * GetServerOptionRequest constructor
     *
     * @param {string} id
     * @param {string} option
     */
    constructor(id: string, option: string);

    /**
     * Set the option name
     * @param {string} option
     */
    public setOption(option: string): void;
}

declare class GetServerRequest extends ServerRequest {
    public endpoint: string;
}

declare class RestartServerRequest extends ServerRequest {
    public endpoint: string;
}

declare class SetServerOptionRequest extends GetServerOptionRequest {
    public method: 'POST';

    /**
     * SetServerOptionRequest constructor
     *
     * @param {string} id
     * @param {string} option
     * @param value
     */
    constructor(id: string, option: string, value: any);
}

declare class ShareServerLogsRequest extends ServerRequest {
    public endpoint: string;
}

declare class StartServerRequest extends ServerRequest {
    public endpoint: string;
}

declare class StopSeversRequest extends ServerRequest {
    public endpoint: string;
}

declare class PlayerListRequest extends ServerRequest {
    public endpoint: string;
    constructor(id: string, name: string);
}

declare class DeletePlayerListEntriesRequest extends PlayerListRequest {
    public readonly method: 'DELETE';
    constructor(id: string, name: string, entries: string);
}

declare class GetPlayerListEntriesRequest extends PlayerListRequest {}

declare class GetPlayerListRequest extends ServerRequest {
    public endpoint: string;
    responseClass: PlayerListResponse;
}

declare class PutPlayerListEntriesRequest extends PlayerListRequest {
    public readonly method: 'PUT';
    constructor(id: string, name: string, entries: string);
}

declare class GetAccountRequest extends Request {
    public endpoint: 'account/' | string;
}

declare class PlayerListResponse extends Response {
    public lists: PlayerList[];

    /**
     * @inheritdoc
     */
    setBody(body: object): void;

    /**
     * @inheritdoc
     */
    public getData(): PlayerList[];
}

declare class ServersResponse extends Response {
    public servers: Server[];

    /**
     * @inheritdoc
     */
    public setBody(body: object): void;

    /**
     * @inheritdoc
     */
    public getData(): Server[];
}

declare abstract class ServerStatus {
    public static readonly OFFLINE: 0;
    public static readonly ONLINE: 1;
    public static readonly STARTING: 2;
    public static readonly STOPPING: 3;
    public static readonly RESTARTING: 4;
    public static readonly SAVING: 5;
    public static readonly LOADING: 6;
    public static readonly CRASHED: 7;
    public static readonly PENDING: 8;
    public static readonly PREPARING: 10;
}

// declare interface ServerStatus {
//     OFFLINE: 0;
//     ONLINE: 1;
//     STARTING: 2;
//     STOPPING: 3;
//     RESTARTING: 4;
//     SAVING: 5;
//     LOADING: 6;
//     CRASHED: 7;
//     PENDING: 8;
//     PREPARING: 10;
// }

declare type PlayerListTypes = 'whitelist' | 'blacklist';

declare class PlayerList {
    /**
     * List name / identifier
     */
    public name: string;

    private server: Server;
    private client: Client;

    /**
     * @param {string} name
     * @constructor
     * @constructs PlayerList
     */
    constructor(name: string);

    /**
     * Set the server for this list
     *
     * @param server
     * @returns {PlayerList}
     */
    public setServer(server: Server): PlayerList;

    /**
     * Set the API client
     *
     * @param {Client} client
     * @returns {PlayerList}
     */
    public setClient(client: Client): PlayerList;

    /**
     * Get the list name
     *
     * @returns {string}
     */
    public getName(): string;

    /**
     * @returns {Promise<string[]>}
     */
    public getEntries(): Promise<string[]>;

    /**
     * Add multiple entries
     *
     * @param {string[]} entries
     * @returns {Promise<Response>}
     */
    public addEntries(entries: string[]): Promise<Response>;

    /**
     * Add a single entry
     *
     * @param {string} entry
     * @returns {Promise<Response>}
     */
    public addEntry(entry: string): Promise<Response>;

    /**
     * Delete multiple entries
     *
     * @param {string[]} entries
     * @returns {Promise<Response>}
     */
    public deleteEntries(entries: string[]): Promise<Response>;

    /**
     * Delete a single entry
     *
     * @param {string} entry
     * @returns {Promise<*>}
     */
    public deleteEntry(entry: string): Promise<Response>;
}

declare class Players {
    /**
     * Max amount of players / slots
     */
    public max: number;

    /**
     * Current amount of players
     */
    public count: number;

    /**
     * List of player names
     *
     * @type {[string]}
     */
    public list: string[];

    /**
     * Players constructor
     *
     * @param {Players} playersObject
     */
    constructor(playersObject: Players);
}

declare type Message = 'started' | 'stopped';

declare type StreamStatus = 1 | 2 | 3 | 4;

/**
 * @classdesc Websocket client to connect to the websocket for this server
 */
declare class WebsocketClient extends EventEmitter {
    public protocol: 'wss' | string;
    private client: Client;
    private server: Server;
    private websocket: WebSocket;

    /**
     * Automatically reconnect in cas of a disconnect
     */
    public autoReconnect: boolean;

    /**
     * Time to wait to reconnect
     *
     * Only change this with caution. A time too low here can
     * cause a spam in requests which can get your application
     * rate limited or even blocked.
     */
    public reconnectTimeout: 3000 | number;

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
     * @param {Server} server
     * @constructor
     * @constructs WebsocketClient
     */
    constructor(server: Server);

    /**
     * Connect to websocket
     */
    public connect(): void;

    /**
     * Disconnect from the websocket and all streams
     */
    public disconnect(): void;

    public onOpen(): void;

    public onClose(): void;

    public onError(error: Error): boolean;

    public onMessage(rawMessage: string): void;

    public isConnected(): boolean;

    public isReady(): boolean;

    public getServer(): Server;

    public getServerStatus(): Promise<ServerStatus>;

    /**
     * Get a stream by name
     *
     * @param {string} stream
     */
    public getStreams(stream: string): boolean | Stream;

    public hasStream(stream: string): boolean;

    public tryToStartStreams(): void;

    public removeStreams(stream: string): void;

    /**
     * @param stream
     * @param type
     * @param data
     */
    public send(stream: string, type: any, data: any): boolean;
}

declare class Stream extends EventEmitter {
    private client: WebsocketClient;
    private started: false | boolean;
    private shouldStart: false | boolean;
    public name: string;
    public startData: object;
    public startStatuses: StreamStatus[];

    /**
     * @param {WebsocketClient} client
     * @constructor
     * @constructs Stream
     */
    constructor(client: WebsocketClient);

    public send(type: any, data: any): boolean;

    /**
     * Status change event
     */
    public onStatusChange(): boolean;

    /**
     * Message event listener
     *
     * @param message
     */
    public onMessage(message: Message): void;

    public onDataMessage(type: string, message: any): void;

    public onDisconnect(): void;

    /**
     * Double event emitter for generic or specific event handling
     *
     * @param type
     * @param data
     */
    public emitEvent(type: string, data: any[]): void;

    /**
     * Start this stream
     */
    public start(data: any): void;

    /**
     * Should/can this stream be started
     */
    public shouldBeStarted(): Promise<boolean>;

    /**
     * Try to start if possible
     */
    public tryToStart(): Promise<void>;

    /**
     * Stop this stream
     */
    public stop(): void;

    /**
     * Try to stop this stream if possible
     */
    public tryToStop(): Promise<boolean>;

    public isStarted(): boolean;
}

declare type subscriptionTypes = 'tick' | 'heap' | 'stats' | 'console';

declare class TickStream extends Stream {
    public name: string;
    public startStatuses: [1];
    public onDataMessage(type: string, message: any): void;
}

declare class StatsStream extends Stream {
    public name: string;
    public startStatuses: [1];
}

declare class HeapStream extends Stream {
    public name: string;
    public startStatuses: [1];
}

declare class ConsoleStream extends Stream {
    private ansiRegex: RegExpConstructor;
    public name: string;
    startData: { tail: 0 };

    public onDataMessage(type: string, message: any): void;

    public parseReturns(string: string): string;

    public parseLine(line: string): string;

    public sendCommand(command: string): void;
}
