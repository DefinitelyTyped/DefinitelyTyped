import { SocketBase } from '@xmpp/connection';
import { EventEmitter } from 'events';
import { URL } from 'url';
import WebSocket = require('ws');

export = Socket;

declare class Socket extends EventEmitter implements SocketBase {
    url?: string | URL;
    socket?: WebSocket;

    constructor();

    connect(url: string | URL): void;
    write(data: any, cb: (err?: Error) => void): void;
    end(): void;

    addListener<TEvent extends keyof Socket.Events>(event: TEvent, listener: Socket.Events[TEvent]): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;

    on<TEvent extends keyof Socket.Events>(event: TEvent, listener: Socket.Events[TEvent]): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;

    once<TEvent extends keyof Socket.Events>(event: TEvent, listener: Socket.Events[TEvent]): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;

    prependListener<TEvent extends keyof Socket.Events>(event: TEvent, listener: Socket.Events[TEvent]): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

    prependOnceListener<TEvent extends keyof Socket.Events>(event: TEvent, listener: Socket.Events[TEvent]): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

    emit<TEvent extends keyof Socket.Events>(event: TEvent, ...args: Parameters<Socket.Events[TEvent]>): boolean;
    emit(event: string | symbol, ...args: any[]): boolean;
}

declare namespace Socket {
    interface Events {
        close: (hadError: boolean, event: WebSocket.CloseEvent) => void;
        connect: () => void;
        data: (data: WebSocket.Data) => void;
        error: (err: WebSocketError) => void;
    }

    interface WebSocketError extends Error {
        readonly errno?: 'ECONNERROR';
        readonly code?: 'ECONNERROR';
        readonly event: WebSocket.ErrorEvent;
        readonly url: string | URL;
    }
}
