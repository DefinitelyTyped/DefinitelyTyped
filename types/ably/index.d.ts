// Type definitions for Ably Realtime and Rest client library 0.9
// Project: https://www.ably.io/
// Definitions by: Ably <https://github.com/ably/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace ablyLib {
  namespace ChannelState {
    type INITIALIZED = 'initialized';
    type ATTACHING = 'attaching';
    type ATTACHED = "attached";
    type DETACHING = "detaching";
    type DETACHED = "detached";
    type SUSPENDED = "suspended";
    type FAILED = "failed";
  }
  type ChannelState = ChannelState.FAILED | ChannelState.INITIALIZED | ChannelState.SUSPENDED | ChannelState.ATTACHED | ChannelState.ATTACHING | ChannelState.DETACHED | ChannelState.DETACHING;

  namespace ConnectionState {
    type INITIALIZED = "initialized";
    type CONNECTING = "connecting";
    type CONNECTED = "connected";
    type DISCONNECTED = "disconnected";
    type SUSPENDED = "suspended";
    type CLOSING = "closing";
    type CLOSED = "closed";
    type FAILED = "failed";
  }
  type ConnectionState = ConnectionState.INITIALIZED | ConnectionState.CONNECTED | ConnectionState.CONNECTING | ConnectionState.DISCONNECTED |
    ConnectionState.SUSPENDED | ConnectionState.CLOSED | ConnectionState.CLOSING | ConnectionState.FAILED;

  namespace ConnectionEvent {
    type INITIALIZED = "initialized";
    type CONNECTING = "connecting";
    type CONNECTED = "connected";
    type DISCONNECTED = "disconnected";
    type SUSPENDED = "suspended";
    type CLOSING = "closing";
    type CLOSED = "closed";
    type FAILED = "failed";
    type UPDATE = "update";
  }
  type ConnectionEvent = ConnectionEvent.INITIALIZED | ConnectionEvent.CONNECTED | ConnectionEvent.CONNECTING | ConnectionEvent.DISCONNECTED |
    ConnectionEvent.SUSPENDED | ConnectionEvent.CLOSED | ConnectionEvent.CLOSING | ConnectionEvent.FAILED | ConnectionEvent.UPDATE;

  namespace PresenceAction {
    type ABSENT = "absent";
    type PRESENT = "present";
    type ENTER = "enter";
    type LEAVE = "leave";
    type UPDATE = "update";
  }
  type PresenceAction = PresenceAction.ABSENT | PresenceAction.PRESENT | PresenceAction.ENTER | PresenceAction.LEAVE | PresenceAction.UPDATE;

  namespace StatsIntervalGranularity {
    type MINUTE = "minute";
    type HOUR = "hour";
    type DAY = "day";
    type MONTH = "month";
  }
  type StatsIntervalGranularity = StatsIntervalGranularity.MINUTE | StatsIntervalGranularity.HOUR | StatsIntervalGranularity.DAY | StatsIntervalGranularity.MONTH;

  namespace HTTPMethods {
    type POST = "POST";
    type GET = "GET";
  }
  type HTTPMethods = HTTPMethods.GET | HTTPMethods.POST;

  // Interfaces
  interface ClientOptions extends AuthOptions {
    /**
     * When true will automatically connect to Ably when library is instanced. This is true by default
     */
    autoConnect?: boolean;

    /**
     * Optional clientId that can be used to specify the identity for this client. In most cases
     * it is preferable to instead specift a clientId in the token issued to this client.
     */
    clientId?: string;

    defaultTokenParams?: TokenParams;

    /**
     * When true, messages published on channels by this client will be echoed back to this client.
     * This is true by default
     */
    echoMessages?: boolean;

    /**
     * Use this only if you have been provided a dedicated environment by Ably
     */
    environment?: string;

    /**
     * Logger configuration
     */
    log?: LogInfo;
    port?: number;

    /**
     * When true, messages will be queued whilst the connection is disconnected. True by default.
     */
    queueMessages?: boolean;

    restHost?: string;
    realtimeHost?: string;
    fallbackHosts?: string[];

    /**
     * Can be used to explicitly recover a connection.
     * See https://www.ably.io/documentation/realtime/connection#connection-state-recovery
     */
    recover?: standardCallback | string;

    /**
     * Use a non-secure connection connection. By default, a TLS connection is used to connect to Ably
     */
    tls?: boolean;
    tlsPort?: number;

    /**
     * When true, the more efficient MsgPack binary encoding is used.
     * When false, JSON text encoding is used.
     */
    useBinaryProtocol?: boolean;
  }

  interface AuthOptions {
    /**
     * A function which is called when a new token is required.
     * The role of the callback is to either generate a signed TokenRequest which may then be submitted automatically
     * by the library to the Ably REST API requestToken; or to provide a valid token in as a TokenDetails object.
     */
    authCallback?(data: TokenParams, callback: (error: ErrorInfo | string, tokenRequestOrDetails: TokenDetails | TokenRequest | string) => void): void;
    authHeaders?: { [index: string]: string };
    authMethod?: HTTPMethods;
    authParams?: { [index: string]: string };

    /**
     * A URL that the library may use to obtain a token string (in plain text format), or a signed TokenRequest or TokenDetails (in JSON format).
     */
    authUrl?: string;
    key?: string;
    queryTime?: boolean;
    token?: TokenDetails | string;
    tokenDetails?: TokenDetails;
    useTokenAuth?: boolean;
  }

  interface TokenParams {
    capability?: string;
    clientId?: string;
    nonce?: string;
    timestamp?: number;
    ttl?: number;
  }

  interface CipherParams {
    algorithm: string;
    key: any;
    keyLength: number;
    mode: string;
  }

  interface ErrorInfo {
    code: number;
    message: string;
    statusCode: number;
  }

  interface StatsMessageCount {
    count: number;
    data: number;
  }

  interface StatsMessageTypes {
    all: StatsMessageCount;
    messages: StatsMessageCount;
    presence: StatsMessageCount;
  }

  interface StatsRequestCount {
    failed: number;
    refused: number;
    succeeded: number;
  }

  interface StatsResourceCount {
    mean: number;
    min: number;
    opened: number;
    peak: number;
    refused: number;
  }

  interface StatsConnectionTypes {
    all: StatsResourceCount;
    plain: StatsResourceCount;
    tls: StatsResourceCount;
  }

  interface StatsMessageTraffic {
    all: StatsMessageTypes;
    realtime: StatsMessageTypes;
    rest: StatsMessageTypes;
    webhook: StatsMessageTypes;
  }

  interface TokenDetails {
    capability: string;
    clientId?: string;
    expires: number;
    issued: number;
    token: string;
  }

  interface TokenRequest {
    capability: string;
    clientId?: string;
    keyName: string;
    mac: string;
    nonce: string;
    timestamp: number;
    ttl?: number;
  }

  interface ChannelOptions {
    cipher: any;
  }

  interface RestPresenceHistoryParams {
    start?: number;
    end?: number;
    direction?: string;
    limit?: number;
  }

  interface RestPresenceParams {
    limit?: number;
    clientId?: string;
    connectionId?: string;
  }

  interface RealtimePresenceParams {
    waitForSync?: boolean;
    clientId?: string;
    connectionId?: string;
  }

  interface RealtimePresenceHistoryParams {
    start?: number;
    end?: number;
    direction?: string;
    limit?: number;
    untilAttach?: boolean;
  }

  interface LogInfo {
    /**
     * A number controlling the verbosity of the output. Valid values are: 0 (no logs), 1 (errors only),
     * 2 (errors plus connection and channel state changes), 3 (high-level debug output), and 4 (full debug output).
     */
    level?: number;

    /**
     * A function to handle each line of log output. If handler is not specified, console.log is used.
     */
    handler?(...args: any[]): void;
  }

  interface ChannelEvent {
    state: ChannelState;
  }

  interface ChannelStateChange {
    current: ChannelState;
    previous: ChannelState;
    reason?: ErrorInfo;
    resumed: boolean;
  }

  interface ConnectionStateChange {
    current: ConnectionState;
    previous: ConnectionState;
    reason?: ErrorInfo;
    retryIn?: number;
  }

  // Common Listeners
  type paginatedResultCallback<T> = (error: ErrorInfo, results: PaginatedResult<T> ) => void;
  type standardCallback = (error: ErrorInfo, results: any) => void;
  type messageCallback<T> = (message: T) => void;
  type errorCallback = (error: ErrorInfo) => void;
  type channelEventCallback = (channelEvent: ChannelEvent, changeStateChange: ChannelStateChange) => void;
  type connectionEventCallback = (connectionEvent: ConnectionEvent, connectionStateChange: ConnectionStateChange) => void;
  type timeCallback = (error: ErrorInfo, time: number) => void;
  type realtimePresenceGetCallback = (error: ErrorInfo, messages: PresenceMessage[]) => void;
  type tokenDetailsCallback = (error: ErrorInfo, Results: TokenDetails) => void;
  type tokenRequestCallback = (error: ErrorInfo, Results: TokenRequest) => void;
  type fromEncoded<T> = (JsonObject: any, channelOptions?: ChannelOptions) => T;
  type fromEncodedArray<T> = (JsonArray: any[], channelOptions?: ChannelOptions) => T[];

  // Internal Classes
  class EventEmitter<T> {
    on: (eventOrCallback: string | T, callback?: T) => void;
    once: (eventOrCallback: string | T, callback?: T) => void;
    off: (eventOrCallback?: string | T, callback?: T) => void;
  }

  // Classes
  class Auth {
    clientId: string;
    authorize: (tokenParams?: TokenParams | tokenDetailsCallback, authOptions?: AuthOptions | tokenDetailsCallback, callback?: tokenDetailsCallback) => void;
    createTokenRequest: (tokenParams?: TokenParams | tokenRequestCallback, authOptions?: AuthOptions | tokenRequestCallback, callback?: tokenRequestCallback) => void;
    requestToken: (TokenParams?: TokenParams | tokenDetailsCallback, authOptions?: AuthOptions | tokenDetailsCallback, callback?: tokenDetailsCallback) => void;
  }

  class Presence {
    get: (params: RestPresenceParams | paginatedResultCallback<PresenceMessage>, callback?: paginatedResultCallback<PresenceMessage>) => void;
    history: (params: RestPresenceHistoryParams | paginatedResultCallback<PresenceMessage>, callback?: paginatedResultCallback<PresenceMessage>) => void;
  }

  class RealtimePresence {
    syncComplete: () =>  boolean;
    get: (Params: realtimePresenceGetCallback | RealtimePresenceParams, callback?: realtimePresenceGetCallback) => void;
    history: (ParamsOrCallback: RealtimePresenceHistoryParams | paginatedResultCallback<PresenceMessage>, callback?: paginatedResultCallback<PresenceMessage>) => void;
    subscribe: (presenceOrCallback: PresenceAction | messageCallback<PresenceMessage>, listener?: messageCallback<PresenceMessage>) => void;
    unsubscribe: (presence?: PresenceAction, listener?: messageCallback<PresenceMessage>) => void;
    enter: (data?: errorCallback | any, callback?: errorCallback) => void;
    update: (data?: errorCallback | any, callback?: errorCallback) => void;
    leave: (data?: errorCallback | any, callback?: errorCallback) => void;
    enterClient: (clientId: string, data?: errorCallback | any, callback?: errorCallback) => void;
    updateClient: (clientId: string, data?: errorCallback | any, callback?: errorCallback) => void;
    leaveClient: (clientId: string, data?: errorCallback | any, callback?: errorCallback) => void;
  }

  class Channel {
    name: string;
    presence: Presence;
    history: (paramsOrCallback?: RestPresenceHistoryParams | paginatedResultCallback<Message>, callback?: paginatedResultCallback<Message>) => void;
    publish: (messagesOrName: any, messagedataOrCallback?: errorCallback | any, callback?: errorCallback) => void;
  }

  class RealtimeChannel extends EventEmitter<channelEventCallback> {
    name: string;
    errorReason: ErrorInfo;
    state: ChannelState;
    presence: RealtimePresence;
    attach: (callback?: standardCallback) => void;
    detach: (callback?: standardCallback) => void;
    history: (paramsOrCallback?: RealtimePresenceHistoryParams | paginatedResultCallback<Message>, callback?: paginatedResultCallback<Message>) => void;
    subscribe: (eventOrCallback: messageCallback<Message> | string, listener?: messageCallback<Message>) => void;
    unsubscribe: (eventOrCallback?: messageCallback<Message> | string, listener?: messageCallback<Message>) => void;
    publish: (messagesOrName: any, messageDataOrCallback?: errorCallback | any, callback?: errorCallback) => void;
    setOptions: (options: any, callback?: errorCallback) => void;
  }

  class Channels<T> {
    get: (name: string, channelOptions?: ChannelOptions) => T;
    release: (name: string) => void;
  }

  class Message {
    constructor();
    static fromEncoded: fromEncoded<Message>;
    static fromEncodedArray: fromEncodedArray<Message>;
    clientId: string;
    connectionId: string;
    data: any;
    encoding: string;
    extras: any;
    id: string;
    name: string;
    timestamp: number;
  }

  interface MessageStatic {
    fromEncoded: fromEncoded<Message>;
    fromEncodedArray: fromEncodedArray<Message>;
  }

  class PresenceMessage {
    constructor();
    static fromEncoded: fromEncoded<PresenceMessage>;
    static fromEncodedArray: fromEncodedArray<PresenceMessage>;
    action: PresenceAction;
    clientId: string;
    connectionId: string;
    data: any;
    encoding: string;
    id: string;
    timestamp: number;
  }

  interface PresenceMessageStatic {
    fromEncoded: fromEncoded<PresenceMessage>;
    fromEncodedArray: fromEncodedArray<PresenceMessage>;
  }

  interface Crypto {
    generateRandomKey(callback: (error: ErrorInfo, key: string) => void): void;
  }

  class Connection extends EventEmitter<connectionEventCallback> {
    errorReason: ErrorInfo;
    id: string;
    key: string;
    recoveryKey: string;
    serial: number;
    state: ConnectionState;
    close: () => void;
    connect: () => void;
    ping: (callback?: (error: ErrorInfo, responseTime: number ) => void ) => void;
  }

  class Stats {
    all: StatsMessageTypes;
    apiRequests: StatsRequestCount;
    channels: StatsResourceCount;
    connections: StatsConnectionTypes;
    inbound: StatsMessageTraffic;
    intervalId: string;
    outbound: StatsMessageTraffic;
    persisted: StatsMessageTypes;
    tokenRequests: StatsRequestCount;
  }

  class PaginatedResult<T> {
    items: T[];
    first: (results: paginatedResultCallback<T>) => void;
    next: (results: paginatedResultCallback<T>) => void;
    current: (results: paginatedResultCallback<T>) => void;
    hasNext: () => boolean;
    isLast: () => boolean;
  }

  class HttpPaginatedResponse extends PaginatedResult<any> {
    items: string[];
    statusCode: number;
    success: boolean;
    errorCode: number;
    errorMessage: string;
    headers: any;
  }
}

export class Rest {
  constructor(options: ablyLib.ClientOptions | string);
  static Crypto: ablyLib.Crypto;
  static Message: ablyLib.MessageStatic;
  static PresenceMessage: ablyLib.PresenceMessageStatic;
  auth: ablyLib.Auth;
  channels: ablyLib.Channels<ablyLib.Channel>;
  request: (method: string, path: string, params?: any, body?: any[] | any, headers?: any, callback?: (error: ablyLib.ErrorInfo, response: ablyLib.HttpPaginatedResponse) => void) => void;
  stats: (paramsOrCallback?: ablyLib.paginatedResultCallback<ablyLib.Stats> | any, callback?: ablyLib.paginatedResultCallback<ablyLib.Stats>) => void;
  time: (paramsOrCallback?: ablyLib.timeCallback | any, callback?: ablyLib.timeCallback) => void;
}

export class Realtime {
  constructor(options: ablyLib.ClientOptions | string);
  static Crypto: ablyLib.Crypto;
  static Message: ablyLib.MessageStatic;
  static PresenceMessage: ablyLib.PresenceMessageStatic;
  auth: ablyLib.Auth;
  channels: ablyLib.Channels<ablyLib.RealtimeChannel>;
  clientId: string;
  connection: ablyLib.Connection;
  request: (method: string, path: string, params?: any, body?: any[] | any, headers?: any, callback?: (error: ablyLib.ErrorInfo, response: ablyLib.HttpPaginatedResponse) => void) => void;
  stats: (paramsOrCallback?: ablyLib.paginatedResultCallback<ablyLib.Stats> | any, callback?: ablyLib.paginatedResultCallback<ablyLib.Stats>) => void;
  close: () => void;
  connect: () => void;
  time: (paramsOrCallback?: ablyLib.timeCallback | any, callback?: ablyLib.timeCallback) => void;
}
