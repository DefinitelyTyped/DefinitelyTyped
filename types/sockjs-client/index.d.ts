// Type definitions for sockjs-client 1.0.3
// Project: https://github.com/sockjs/sockjs-client
// Definitions by: Emil Ivanov <https://github.com/vladev>, Alexander Rusakov <https://github.com/arusakov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

  export interface BaseEvent extends Event {
    type: string;
  }

  export interface OpenEvent extends BaseEvent {}

  export interface CloseEvent extends BaseEvent {
    code: number;
    reason: string;
    wasClean: boolean;
  }

  export interface MessageEvent extends BaseEvent {
    data: string;
  }

  export interface SessionGenerator {
    (): string;
  }

  export interface Options {
    server?: string;
    sessionId?: number | SessionGenerator;
    transports?: string | string[]
  }

  export enum State {
    CONNECTING = 0, OPEN, CLOSING, CLOSED
  }

  export class SockJS{
    constructor(url: string, _reserved?: any, options?: Options);
    readyState: State;
    protocol: string;
    url: string;
    onopen: (e: OpenEvent) => any;
    onclose: (e: CloseEvent) => any;
    onmessage: (e: MessageEvent) => any;
    send(data: any): void;
    close(code?: number, reason?: string): void;
  }


