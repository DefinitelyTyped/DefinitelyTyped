// Type definitions for phoenix 1.5
// Project: https://github.com/phoenixframework/phoenix
// Definitions by: Mirosław Ciastek <https://github.com/mciastek>
//                 John Goff <https://github.com/John-Goff>
//                 Po Chen <https://github.com/princemaple>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export type PushStatus = 'ok' | 'error' | 'timeout';

export class Push {
  constructor(channel: Channel, event: string, payload: object, timeout: number);

  send(): void;
  resend(timeout: number): void;

  receive(status: PushStatus, callback: (response?: any) => any): this;
}

export type ChannelState = 'closed' | 'errored' | 'joined' | 'joining' | 'leaving';

export class Channel {
  constructor(topic: string, params?: object | (() => object), socket?: Socket);

  state: ChannelState;
  topic: string;

  join(timeout?: number): Push;
  leave(timeout?: number): Push;

  onClose(callback: (payload: any, ref: any, joinRef: any) => void | Promise<void>): void;
  onError(callback: (reason?: any) => void | Promise<void>): void;
  onMessage(event: string, payload: any, ref: any): any;

  on(event: string, callback: (response?: any) => void | Promise<void>): number;
  off(event: string, ref?: number): void;

  push(event: string, payload: object, timeout?: number): Push;
}

export type BinaryType = 'arraybuffer' | 'blob';
export type ConnectionState = 'connecting' | 'open' | 'closing' | 'closed';

export interface SocketConnectOption {
  binaryType: BinaryType;
  params: object | (() => object);
  transport: new (endpoint: string) => object;
  timeout: number;
  heartbeatIntervalMs: number;
  longpollerTimeout: number;
  encode: (payload: object, callback: (encoded: any) => void | Promise<void>) => void;
  decode: (payload: string, callback: (decoded: any) => void | Promise<void>) => void;
  logger: (kind: string, message: string, data: any) => void;
  reconnectAfterMs: (tries: number) => number;
  rejoinAfterMs: (tries: number) => number;
  vsn: string;
}

export type MessageRef = string;

export class Socket {
  constructor(endPoint: string, opts?: Partial<SocketConnectOption>);

  protocol(): string;
  endPointURL(): string;

  connect(params?: any): void;
  disconnect(callback?: () => void | Promise<void>, code?: number, reason?: string): void;
  connectionState(): ConnectionState;
  isConnected(): boolean;

  remove(channel: Channel): void;
  channel(topic: string, chanParams?: object): Channel;
  push(data: object): void;

  log(kind: string, message: string, data: any): void;
  hasLogger(): boolean;

  onOpen(callback: (cb: any) => void | Promise<void>): MessageRef;
  onClose(callback: (cb: any) => void | Promise<void>): MessageRef;
  onError(callback: (cb: any) => void | Promise<void>): MessageRef;
  onMessage(callback: (cb: any) => void | Promise<void>): MessageRef;

  makeRef(): MessageRef;
  off(refs: MessageRef[]): void;
}

export class LongPoll {
  constructor(endPoint: string);

  normalizeEndpoint(endPoint: string): string;
  endpointURL(): string;

  closeAndRetry(): void;
  ontimeout(): void;

  poll(): void;

  send(body: any): void;
  close(code?: any, reason?: any): void;
}

// tslint:disable:no-unnecessary-class
export class Ajax {
  static states: { [state: string]: number };

  static request(
    method: string,
    endPoint: string,
    accept: string,
    body: any,
    timeout?: number,
    ontimeout?: any,
    callback?: (response?: any) => void | Promise<void>,
  ): void;

  static xdomainRequest(
    req: any,
    method: string,
    endPoint: string,
    body: any,
    timeout?: number,
    ontimeout?: any,
    callback?: (response?: any) => void | Promise<void>,
  ): void;

  static xhrRequest(
    req: any,
    method: string,
    endPoint: string,
    accept: string,
    body: any,
    timeout?: number,
    ontimeout?: any,
    callback?: (response?: any) => void | Promise<void>,
  ): void;

  static parseJSON(resp: string): JSON;
  static serialize(obj: any, parentKey: string): string;
  static appendParams(url: string, params: any): string;
}

export class Presence {
  constructor(channel: Channel, opts?: PresenceOpts);

  onJoin(callback: PresenceOnJoinCallback): void;
  onLeave(callback: PresenceOnLeaveCallback): void;
  onSync(callback: () => void | Promise<void>): void;
  list<T = any>(chooser?: (key: string, presence: any) => T): T[];
  inPendingSyncState(): boolean;

  static syncState(
    currentState: object,
    newState: object,
    onJoin?: PresenceOnJoinCallback,
    onLeave?: PresenceOnLeaveCallback,
  ): any;

  static syncDiff(
    currentState: object,
    diff: { joins: object; leaves: object },
    onJoin?: PresenceOnJoinCallback,
    onLeave?: PresenceOnLeaveCallback,
  ): any;

  static list<T = any>(presences: object, chooser?: (key: string, presence: any) => T): T[];
}

export type PresenceOnJoinCallback = (key?: string, currentPresence?: any, newPresence?: any) => void;

export type PresenceOnLeaveCallback = (key?: string, currentPresence?: any, newPresence?: any) => void;

export interface PresenceOpts {
  events?: { state: string; diff: string } | undefined;
}

export class Timer {
  constructor(callback: () => void | Promise<void>, timerCalc: (tries: number) => number);

  reset(): void;
  scheduleTimeout(): void;
}
