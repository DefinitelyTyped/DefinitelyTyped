// Type definitions for sockjs-client 1.0
// Project: https://github.com/sockjs/sockjs-client
// Definitions by: Emil Ivanov <https://github.com/vladev>
//                 Alexander Rusakov <https://github.com/arusakov>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = SockJS;
export as namespace SockJS;

declare const SockJS: {
    new (url: string, _reserved?: any, options?: SockJS.Options): SockJS.Socket;
    (url: string, _reserved?: any, options?: SockJS.Options): SockJS.Socket;
    prototype: SockJS.Socket;
    CONNECTING: SockJS.CONNECTING;
    OPEN: SockJS.OPEN;
    CLOSING: SockJS.CLOSING;
    CLOSED: SockJS.CLOSED;
};

declare namespace SockJS {
    type CONNECTING = 0;
    type OPEN = 1;
    type CLOSING = 2;
    type CLOSED = 3;

    type State = CONNECTING | OPEN | CLOSING | CLOSED;

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
