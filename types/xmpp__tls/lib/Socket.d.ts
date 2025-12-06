import { SocketBase } from "@xmpp/connection";
import { EventEmitter } from "events";
import { ConnectionOptions, TLSSocket } from "tls";

export default Socket;

declare class Socket extends EventEmitter implements SocketBase {
    timeout: NodeJS.Timeout | null;
    socket?: TLSSocket | null;
    secure: boolean;

    connect(opts: ConnectionOptions): void;
    end(): void;
    write(buffer: Uint8Array | string, cb?: (err?: Error) => void): void;

    addListener<TEvent extends keyof Events>(event: TEvent, listener: Events[TEvent]): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;

    on<TEvent extends keyof Events>(event: TEvent, listener: Events[TEvent]): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;

    once<TEvent extends keyof Events>(event: TEvent, listener: Events[TEvent]): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;

    prependListener<TEvent extends keyof Events>(event: TEvent, listener: Events[TEvent]): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

    prependOnceListener<TEvent extends keyof Events>(event: TEvent, listener: Events[TEvent]): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

    emit<TEvent extends keyof Events>(event: TEvent, ...args: Parameters<Events[TEvent]>): boolean;
    emit(event: string | symbol, ...args: any[]): boolean;
}

export interface Events {
    close: () => void;
    data: (data: Buffer) => void;
    error: (err: Error) => void;
    connect: () => void;
}
