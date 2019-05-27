// Type definitions for phoenix 1.4
// Project: https://github.com/phoenixframework/phoenix
// Definitions by: Mirosław Ciastek <https://github.com/mciastek>, John Goff <https://github.com/John-Goff>, Po Chen <https://github.com/princemaple>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare module 'phoenix' {
  class Push {
    constructor(
      channel: Channel,
      event: string,
      payload: object,
      timeout: number,
    );

    send(): void;
    resend(timeout: number): void;

    receive(status: string, callback: (response?: any) => any): this;
  }

  class Channel {
    constructor(topic: string, params?: object | (() => object), socket?: Socket);

    join(timeout?: number): Push;
    leave(timeout?: number): Push;

    onClose(callback: (payload: any, ref: any, joinRef: any) => void): void;
    onError(callback: (reason?: any) => void): void;
    onMessage(event: string, payload: any, ref: any): any;

    on(event: string, callback: (response?: any) => void): void;
    off(event: string): void;

    push(event: string, payload: object, timeout?: number): Push;
  }

  type ConnectionState = 'connecting' | 'open' | 'closing' | 'closed';

  interface SocketConnectOption {
    params: object | (() => object);
    transport: any;
    timeout: number;
    heartbeatIntervalMs: number;
    reconnectAfterMs: number;
    longpollernumber: number;
    encode: (payload: object, callback: (encoded: any) => void) => any;
    decode: (payload: string, callback: (decoded: any) => void) => any;
    logger: (kind: string, message: string, data: any) => void;
  }

  class Socket {
    constructor(endPoint: string, opts?: Partial<SocketConnectOption>);

    protocol(): string;
    endPointURL(): string;

    connect(params?: any): void;
    disconnect(callback?: () => void, code?: number, reason?: string): void;
    connectionState(): ConnectionState;
    isConnected(): boolean;

    remove(channel: Channel): void;
    channel(topic: string, chanParams?: object): Channel;
    push(data: object): void;

    log(kind: string, message: string, data: object): void;
    hasLogger(): boolean;

    onOpen(callback: () => void): void;
    onClose(callback: () => void): void;
    onError(callback: () => void): void;
    onMessage(callback: () => void): void;

    makeRef(): string;
  }

  class LongPoll {
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
  class Ajax {
    static states: {[state: string]: number};

    static request(
      method: string,
      endPoint: string,
      accept: string,
      body: any,
      timeout?: number,
      ontimeout?: any,
      callback?: (response?: any) => void
    ): void;

    static xdomainRequest(
      req: any,
      method: string,
      endPoint: string,
      body: any,
      timeout?: number,
      ontimeout?: any,
      callback?: (response?: any) => void
    ): void;

    static xhrRequest(
      req: any,
      method: string,
      endPoint: string,
      accept: string,
      body: any,
      timeout?: number,
      ontimeout?: any,
      callback?: (response?: any) => void
    ): void;

    static parseJSON(resp: string): JSON;
    static serialize(obj: any, parentKey: string): string;
    static appendParams(url: string, params: any): string;
  }

  class Presence {
    constructor(channel: Channel, opts?: object);

    onJoin(callback: PresenceOnJoinCallback): void;
    onLeave(callback: PresenceOnLeaveCallback): void;
    onSync(callback: () => void): void;
    list<T = any>(chooser?: (key: string, presence: any) => T): T[];
    inPendingSyncState(): boolean;

    static syncState(
      currentState: object,
      newState: object,
      onJoin?: PresenceOnJoinCallback,
      onLeave?: PresenceOnLeaveCallback
    ): any;

    static syncDiff(
      currentState: object,
      diff: {joins: object; leaves: object},
      onJoin?: PresenceOnJoinCallback,
      onLeave?: PresenceOnLeaveCallback
    ): any;

    static list<T = any>(
      presences: object,
      chooser?: (key: string, presence: any) => T,
    ): T[];
  }

  type PresenceOnJoinCallback = (
    key?: string,
    currentPresence?: any,
    newPresence?: any
  ) => void;

  type PresenceOnLeaveCallback = (
    key?: string,
    currentPresence?: any,
    newPresence?: any
  ) => void;
}
