// Type definitions for sockjs-client 1.0
// Project: https://github.com/sockjs/sockjs-client
// Definitions by: Emil Ivanov <https://github.com/vladev>
//                 Alexander Rusakov <https://github.com/arusakov/>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var SockJS: SockJSClientStatic;

export = SockJS;
export as namespace SockJS;

interface SockJSClientStatic {
  new(url: string, _reserved?: any, options?: SockJSClient.Options): SockJSClient.Socket;
  (url: string, _reserved?: any, options?: SockJSClient.Options): SockJSClient.Socket;
  prototype: SockJSClient.Socket;
  CONNECTING: SockJSClient.State;
  OPEN: SockJSClient.State;
  CLOSING: SockJSClient.State;
  CLOSED: SockJSClient.State;
}

declare global {
  namespace SockJSClient {
    interface BaseEvent extends Event {
      type: string;
    }

    type OpenEvent = BaseEvent;

    interface CloseEvent extends BaseEvent {
      code: number;
      reason: string;
      wasClean: boolean;
    }

    interface MessageEvent extends BaseEvent {
      data: string;
    }

    type SessionGenerator = () => string;

    interface Options {
      server?: string;
      sessionId?: number | SessionGenerator;
      transports?: string | string[];
    }

    enum State {
      CONNECTING = 0, OPEN, CLOSING, CLOSED
    }

    interface Socket extends EventTarget {
      readyState: State;
      protocol: string;
      url: string;
      onopen(e: OpenEvent): any;
      onclose(e: CloseEvent): any;
      onmessage(e: MessageEvent): any;
      send(data: any): void;
      close(code?: number, reason?: string): void;
    }
  }
}
