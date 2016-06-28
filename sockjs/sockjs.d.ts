// Type definitions for SockJS 0.3.x
// Project: https://github.com/sockjs/sockjs-client
// Definitions by: Emil Ivanov <https://github.com/vladev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface SockJSSimpleEvent {
    type: string;
    toString(): string;
}

interface SJSOpenEvent extends SockJSSimpleEvent, Event {}

interface SJSCloseEvent extends SockJSSimpleEvent, CloseEvent {
    code: number;
    reason: string;
    wasClean: boolean;
}

interface SJSMessageEvent extends SockJSSimpleEvent, MessageEvent {
    data: string;
}

interface SockJS extends WebSocket {
    protocol: string;
    readyState: number;
    onopen: (ev: SJSOpenEvent) => any;
    onmessage: (ev: SJSMessageEvent) => any;
    onclose: (ev: SJSCloseEvent) => any;
    send(data: any): void;
    close(code?: number, reason?: string): void;
    OPEN: number;
    CLOSING: number;
    CONNECTING: number;
    CLOSED: number;
}

declare var SockJS: {
    prototype: SockJS;
    new (url: string, _reserved?: any, options?: {
        debug?: boolean;
        devel?: boolean;
        protocols_whitelist?: string[];
        server?: string;
        rtt?: number;
        rto?: number;
        info?: {
            websocket?: boolean;
            cookie_needed?: boolean;
            null_origin?: boolean;
        };
    }): SockJS;
};
