// Type definitions for phoenix
// Project: https://github.com/phoenixframework/phoenix
// Definitions by: Mirosław Ciastek <https://github.com/mciastek>, John Goff <https://github.com/John-Goff>, Po Chen <https://github.com/princemaple>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module "phoenix" {
  class Push {
    constructor(
      channel: Channel,
      event: string,
      payload: Object,
      timeout: number,
    );

    send(): void;
    resend(timeout: number): void;

    receive(status: string, callback: (response?: any) => any): this;
  }


  class Channel {
    constructor(topic: string, params?: Object | Function, socket?: Socket);

    join(timeout?: number): Push;
    leave(timeout?: number): Push;

    onClose(callback: Function): void;
    onError(callback: (reason?: any) => void): void;
    onMessage(event: string, payload: any, ref: any): any;

    on(event: string, callback: (response?: any) => void): void;
    off(event: string): void;

    push(event: string, payload: Object, timeout?: number): Push;
  }

  type ConnectionState = 'connecting' | 'open' | 'closing' | 'closed';
  
  interface SocketConnectOption {
    params: Object | Function;
    transport: any;
    timeout: number;
    heartbeatIntervalMs: number;
    reconnectAfterMs: number;
    longpollernumber: number;
    encode: (payload: Object, callback: Function) => any;
    decode: (payload: string, callback: Function) => any;
    logger: (kind: string, message: string, data: Object) => void;
  }
    
  class Socket {
    constructor(endPoint: string, opts?: Partial<SocketConnectOption>);

    protocol(): string;
    endPointURL(): string;

    connect(params?: any): void;
    disconnect(callback?: Function, code?: number, reason?: string): void;
    connectionState(): ConnectionState;
    isConnected(): boolean;

    remove(channel: Channel): void;
    channel(topic: string, chanParams?: Object): Channel;
    push(data: Object): void;

    log(kind: string, message: string, data: Object): void;
    hasLogger(): boolean;

    onOpen(callback: Function): void;
    onClose(callback: Function): void;
    onError(callback: Function): void;
    onMessage(callback: Function): void;

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
    constructor(channel: Channel, opts?: Object);

    onJoin(callback: Function): void;
    onLeave(callback: Function): void;
    onSync(callback: Function): void;
    list<T = any>(chooser?: (key: string, presence: Object) => T): T[];
    inPendingSyncState(): boolean;

    static syncState(
      currentState: Object,
      newState: Object,
      onJoin?: (key?: string, currentPresence?: any, newPresence?: any) => void,
      onLeave?: (key?: string, currentPresence?: any, newPresence?: any) => void
    ): any;

    static syncDiff(
      currentState: Object,
      diff: {joins: Object; leaves: Object},
      onJoin?: (key?: string, currentPresence?: any, newPresence?: any) => void,
      onLeave?: (key?: string, currentPresence?: any, newPresence?: any) => void
    ): any;

    static list<T = any>(
      presences: Object,
      chooser?: (key: string, presence: Object) => T,
    ): T[];
  }
}
