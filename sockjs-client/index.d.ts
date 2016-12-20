// Type definitions for sockjs-client 1.0.3
// Project: https://github.com/sockjs/sockjs-client
// Definitions by: Emil Ivanov <https://github.com/vladev>, Alexander Rusakov <https://github.com/arusakov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace __SockJSClient {
  interface BaseEvent extends Event {
    type: string;
  }

  interface OpenEvent extends BaseEvent {}

  interface CloseEvent extends BaseEvent {
    code: number;
    reason: string;
    wasClean: boolean;
  }

  interface MessageEvent extends BaseEvent {
    data: string;
  }

  interface SessionGenerator {
    (): string;
  }

  interface Options {
    server?: string;
    sessionId?: number | SessionGenerator;
    transports?: string | string[]
  }

  enum State {
    CONNECTING = 0, OPEN, CLOSING, CLOSED
  }

  interface SockJSClass extends EventTarget {
    readyState: State;
    protocol: string;
    url: string;
    onopen: (e: OpenEvent) => any;
    onclose: (e: CloseEvent) => any;
    onmessage: (e: MessageEvent) => any;
    send(data: any): void;
    close(code?: number, reason?: string): void;
  }
}

import SockJSClass = __SockJSClient.SockJSClass;
import Options = __SockJSClient.Options;
import State = __SockJSClient.State;

declare var SockJS: {
  new(url: string, _reserved?: any, options?: Options): SockJSClass;
  (url: string, _reserved?: any, options?: Options): SockJSClass;
  prototype: SockJSClass;
  CONNECTING: State;
  OPEN: State;
  CLOSING: State;
  CLOSED: State;
};

export = SockJS;
export as namespace SockJS;

