import { SocketBase } from '@xmpp/connection';
import { ConnectionOptions, TLSSocket } from 'tls';
import { EventEmitter } from 'events';

export = Socket;

declare class Socket extends EventEmitter implements SocketBase {
    timeout: NodeJS.Timeout | null;
    socket?: TLSSocket;

    connect(opts: ConnectionOptions): void;
    end(): void;
    write(buffer: Uint8Array | string, cb?: (err?: Error) => void): void;

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
        close: () => void;
        data: (data: Buffer) => void;
        error: (err: Error) => void;
        connect: () => void;
    }
}
