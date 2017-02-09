// Type definitions for Ably Realtime and Rest client library v0.9.0
// Project: https://www.ably.io/
// Definitions by: Ably <https://github.com/ably/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ChannelState {
  export type INITIALIZED = 'initialized';
  export type ATTACHING = 'attaching';
  export type ATTACHED = "attached";
  export type DETACHING = "detaching";
  export type DETACHED = "detached";
  export type SUSPENDED = "suspended";
  export type FAILED = "failed";
}
type ChannelState = ChannelState.FAILED | ChannelState.INITIALIZED | ChannelState.SUSPENDED | ChannelState.ATTACHED | ChannelState.ATTACHING | ChannelState.DETACHED | ChannelState.DETACHING;

declare namespace ConnectionState {
  export type INITIALIZED = "initialized";
  export type CONNECTING = "connecting";
  export type CONNECTED = "connected";
  export type DISCONNECTED = "disconnected";
  export type SUSPENDED = "suspended";
  export type CLOSING = "closing";
  export type CLOSED = "closed";
  export type FAILED = "failed";
}
type ConnectionState = ConnectionState.INITIALIZED | ConnectionState.CONNECTED | ConnectionState.CONNECTING | ConnectionState.DISCONNECTED | ConnectionState.SUSPENDED | ConnectionState.CLOSED | ConnectionState.CLOSING | ConnectionState.FAILED;

declare namespace ConnectionEvent {
  export type INITIALIZED = "initialized";
  export type CONNECTING = "connecting";
  export type CONNECTED = "connected";
  export type DISCONNECTED = "disconnected";
  export type SUSPENDED = "suspended";
  export type CLOSING = "closing";
  export type CLOSED = "closed";
  export type FAILED = "failed";
  export type UPDATE = "update";
}
type ConnectionEvent = ConnectionEvent.INITIALIZED | ConnectionEvent.CONNECTED | ConnectionEvent.CONNECTING | ConnectionEvent.DISCONNECTED | ConnectionEvent.SUSPENDED | ConnectionEvent.CLOSED | ConnectionEvent.CLOSING | ConnectionEvent.FAILED | ConnectionEvent.UPDATE;

declare namespace PresenceAction {
  export type ABSENT = "absent";
  export type PRESENT = "present";
  export type ENTER = "enter";
  export type LEAVE = "leave";
  export type UPDATE = "update";
}
type PresenceAction = PresenceAction.ABSENT | PresenceAction.PRESENT | PresenceAction.ENTER | PresenceAction.LEAVE | PresenceAction.UPDATE;

declare namespace StatsIntervalGranularity {
  export type MINUTE = "minute";
  export type HOUR = "hour";
  export type DAY = "day";
  export type MONTH = "month";
}
type StatsIntervalGranularity = StatsIntervalGranularity.MINUTE | StatsIntervalGranularity.HOUR | StatsIntervalGranularity.DAY | StatsIntervalGranularity.MONTH;

declare namespace HTTPMethods {
  export type POST = "POST";
  export type GET = "GET";
}
type HTTPMethods = HTTPMethods.GET | HTTPMethods.POST;

// Interfaces
declare interface ClientOptions extends AuthOptions {
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
  fallbackHosts?: Array<string>;

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

declare interface AuthOptions {
  /**
   * A function which is called when a new token is required.
   * The role of the callback is to either generate a signed TokenRequest which may then be submitted automatically
   * by the library to the Ably REST API requestToken; or to provide a valid token in as a TokenDetails object.
   **/
  authCallback?: (data: TokenParams,callback: (error: ErrorInfo | string, tokenRequestOrDetails: TokenDetails | TokenRequest | string) => void) => void;
  authHeaders?: { [index: string]: string };
  authMethod?: HTTPMethods;
  authParams?: { [index: string]: string };

  /**
   * A URL that the library may use to obtain a token string (in plain text format), or a signed TokenRequest or TokenDetails (in JSON format).
   **/
  authUrl?: string;
  key?: string;
  queryTime?: boolean;
  token?: TokenDetails | string;
  tokenDetails?: TokenDetails;
  useTokenAuth?: boolean;
}

declare interface TokenParams {
  capability?: string;
  clientId?: string;
  nonce?: string;
  timestamp?: number;
  ttl?: number;
}

declare interface CipherParams {
  algorithm: string;
  key: any;
  keyLength: number;
  mode: string;
}

declare interface ErrorInfo {
  code: number;
  message: string;
  statusCode: number;
}

declare interface StatsMessageCount {
  count: number;
  data: number;
}

declare interface StatsMessageTypes {
  all: StatsMessageCount;
  messages: StatsMessageCount;
  presence: StatsMessageCount;
}

declare interface StatsRequestCount {
  failed: number;
  refused: number;
  succeeded: number;
}

declare interface StatsResourceCount {
  mean: number;
  min: number;
  opened: number;
  peak: number;
  refused: number;
}

declare interface StatsConnectionTypes {
  all: StatsResourceCount;
  plain: StatsResourceCount;
  tls: StatsResourceCount;
}

declare interface StatsMessageTraffic {
  all: StatsMessageTypes,
  realtime: StatsMessageTypes,
  rest: StatsMessageTypes,
  webhook: StatsMessageTypes
}

declare interface TokenDetails {
  capability: string;
  clientId?: string;
  expires: number;
  issued: number;
  token: string;
}

declare interface TokenRequest {
  capability: string;
  clientId?: string;
  keyName: string;
  mac: string;
  nonce: string;
  timestamp: number;
  ttl?: number;
}

declare interface ChannelOptions {
  cipher: any;
}

declare interface RestPresenceHistoryParams {
  start?: number;
  end?: number;
  direction?: string;
  limit?: number;
}

declare interface RestPresenceParams {
  limit?: number;
  clientId?: string;
  connectionId?: string;
}

declare interface RealtimePresenceParams {
  waitForSync?: boolean;
  clientId?: string;
  connectionId?: string;
}

declare interface RealtimePresenceHistoryParams {
  start?: number;
  end?: number;
  direction?: string;
  limit?: number;
  untilAttach?: boolean
}

declare interface LogInfo {
  /**
   * A number controlling the verbosity of the output. Valid values are: 0 (no logs), 1 (errors only),
   * 2 (errors plus connection and channel state changes), 3 (high-level debug output), and 4 (full debug output).
   **/
  level?: number;

  /**
   * A function to handle each line of log output. If handler is not specified, console.log is used.
   **/
  handler?: (...args) => void;
}

declare interface ChannelEvent {
  state: ChannelState;
}

declare interface ChannelStateChange {
  current: ChannelState;
  previous: ChannelState;
  reason?: ErrorInfo;
  resumed: boolean;
}

declare interface ConnectionStateChange {
  current: ConnectionState;
  previous: ConnectionState;
  reason?: ErrorInfo;
  retryIn?: number;
}

// Common Listeners
type PaginatedResultCallback<T> = (error: ErrorInfo, results: PaginatedResult<T> ) => void;
type standardCallback = (error: ErrorInfo, results: any) => void;
type messageCallback<T> = (message: T) => void;
type errorCallback = (error: ErrorInfo) => void;
type channelEventCallback = (channelEvent: ChannelEvent, changeStateChange: ChannelStateChange) => void;
type connectionEventCallback = (connectionEvent: ConnectionEvent, connectionStateChange: ConnectionStateChange) => void;
type timeCallback = (error: ErrorInfo, time: number) => void;


// Internal Classes
declare class EventEmitter<T> {
  on: (eventOrCallback: string | T, callback?: T) => void;
  once: (eventOrCallback: string | T, callback?: T) => void;
  off: (eventOrCallback?: string | T, callback?: T) => void;
}

// Classes
export declare class Auth {
  clientId: string;
  authorize: (tokenParams?: TokenParams, authOptions?: AuthOptions, callback?: (error: ErrorInfo, Results: TokenDetails) => void) => void;
  createTokenRequest: (tokenParams?: TokenParams, authOptions?: AuthOptions, callback?: (error: ErrorInfo, Results: TokenRequest) => void) => void;
  requestToken: (TokenParams?: TokenParams, authOptions?: AuthOptions, callback?: (error: ErrorInfo, Results: TokenDetails) => void) => void;
}

export declare class Presence {
  get: (params: RestPresenceParams, callback: PaginatedResultCallback<PresenceMessage>) => void;
  history: (params: RestPresenceHistoryParams, callback: PaginatedResultCallback<PresenceMessage>) => void;
}

export declare class RealtimePresence {
  syncComplete: () =>  boolean;
  get: (Params: RealtimePresenceParams, callback?: (error: ErrorInfo, messages: Array<PresenceMessage>) => void) => void;
  history: (ParamsOrCallback: RealtimePresenceHistoryParams | PaginatedResultCallback<PresenceMessage>, callback?: PaginatedResultCallback<PresenceMessage>) => void;
  subscribe: (presenceOrCallback: PresenceAction | messageCallback<PresenceMessage>, listener?: messageCallback<PresenceMessage>) => void;
  unsubscribe: (presence?: PresenceAction, listener?: messageCallback<PresenceMessage>) => void;
  enter: (data: any, callback?: errorCallback) => void;
  update: (data: any, callback?: errorCallback) => void;
  leave: (data: any, callback?: errorCallback) => void;
  enterClient: (clientId: string, data: any, callback?: errorCallback) => void;
  updateClient: (clientId: string, data: any, callback?: errorCallback) => void;
  leaveClient: (clientId: string, data: any, callback?: errorCallback) => void;
}

export declare class Channel {
  name: string;
  presence: Presence;
  history: (paramsOrCallback?: RestPresenceHistoryParams | PaginatedResultCallback<Message>, callback?: PaginatedResultCallback<Message>) => void;
  publish: (messagesOrName: any, messagedataOrCallback?: errorCallback | any, callback?: errorCallback) => void;
}

export declare class RealtimeChannel extends EventEmitter<channelEventCallback> {
  name: string;
  errorReason: ErrorInfo;
  state: ChannelState;
  presence: RealtimePresence;
  attach: (callback?: standardCallback) => void;
  detach:(callback?: standardCallback) => void;
  history: (paramsOrCallback?: RealtimePresenceHistoryParams | PaginatedResultCallback<Message>, callback?: PaginatedResultCallback<Message>) => void;
  subscribe: (eventOrCallback: messageCallback<Message> | string, listener?: messageCallback<Message>) => void;
  unsubscribe: (eventOrCallback?: messageCallback<Message> | string, listener?: messageCallback<Message>) => void;
  publish: (messagesOrName: any, messageDataOrCallback?: errorCallback | any, callback?: errorCallback) => void;
}

export declare class Channels<T> {
  get: (name: string, channelOptions?: ChannelOptions) => T;
  release: (name: string) => void;
}

export declare class Message {
  constructor();
  fromEncoded: (JsonObject: string, channelOptions: ChannelOptions) => Message;
  fromEncodedArray: (JsonArray: string, channelOptions: ChannelOptions) => Array<Message>;
  clientId: string;
  connectionId: string;
  data: any;
  encoding: string;
  extras: any;
  id: string;
  name: string;
  timestamp: number;
}

export declare class PresenceMessage {
  fromEncoded: (JsonObject: any, channelOptions?: ChannelOptions) => PresenceMessage;
  fromEncodedArray: (JsonArray: Array<any>, channelOptions?: ChannelOptions) => Array<PresenceMessage>;
  action: PresenceAction;
  clientId: string;
  connectionId: string;
  data: any;
  encoding: string;
  id: string;
  timestamp: number;
}

export declare class Rest {
  constructor(options: ClientOptions | string);
  auth: Auth;
  channels: Channels<Channel>;
  request: (method: string, path: string, params?: any, body?: Array<any> | any, headers?: any, callback?: (error: ErrorInfo, response: HttpPaginatedResponse) => void) => void;
  stats: (paramsOrCallback?: PaginatedResultCallback<Stats> | any, callback?: PaginatedResultCallback<Stats>) => void;
  time: (paramsOrCallback?: timeCallback | any, callback?: timeCallback) => void;
}

export declare class Realtime {
  constructor(options: ClientOptions | string);
  auth: Auth;
  channels: Channels<RealtimeChannel>;
  clientId: string;
  connection: Connection;
  request: (method: string, path: string, params?: any, body?: Array<any> | any, headers?: any, callback?: (error: ErrorInfo, response: HttpPaginatedResponse) => void) => void;
  stats: (paramsOrCallback?: PaginatedResultCallback<Stats> | any, callback?: PaginatedResultCallback<Stats>) => void;
  close: () => void;
  connect: () => void;
  time: (paramsOrCallback?: timeCallback | any, callback?: timeCallback) => void;
}

export declare class Connection extends EventEmitter<connectionEventCallback> {
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

export declare class Stats {
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

export declare class PaginatedResult<T> {
  items: Array<T>;
  first: (results: PaginatedResultCallback<T>) => void;
  next: (results: PaginatedResultCallback<T>) => void;
  current: (results: PaginatedResultCallback<T>) => void;
  hasNext: () => boolean;
  isLast: () => boolean;
}

export declare class HttpPaginatedResponse extends PaginatedResult<any> {
  items: Array<string>;
  statusCode: number;
  success: boolean;
  errorCode: number;
  errorMessage: string;
  headers: any;
}
