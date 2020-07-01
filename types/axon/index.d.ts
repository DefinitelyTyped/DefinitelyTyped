// Type definitions for axon 2.0
// Project: https://github.com/visionmedia/axon#readme
// Definitions by: Vilim Stubičan <https://github.com/jewbre>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

import { EventEmitter } from "events";
import { Socket as NetSocket } from "net";

export class Socket extends EventEmitter {
    set(name: string, val: any): Socket;

    get(name: string): any;

    enable(name: string): Socket;

    disable(name: string): Socket;

    enabled(name: string): boolean;

    disabled(name: string): boolean;

    use(plugin: (socket: Socket) => any): Socket;

    pack(args: Buffer | Buffer[]): Buffer;

    closeSockets(): void;

    close(): void;

    closeServer(fn: () => any): void;

    address(): { port: number; family: string; address: string; string: string } | undefined;

    removeSocket(sock: Socket): void;

    addSocket(sock: Socket): void;

    handleErrors(sock: Socket): void;

    onmessage(sock: NetSocket): (args: Buffer | Buffer[]) => void;

    connect(port: ConnectionPort, host?: string | (() => void), fn?: () => void): Socket;

    onconnect(sock: Socket): void;

    bind(port: ConnectionPort, host?: string | (() => void), fn?: () => void): Socket;
}

export class SubSocket extends Socket {
    hasSubscriptions(): boolean;

    matches(topic: string): boolean;

    onmessage(sock: NetSocket): (args: Buffer | Buffer[]) => void;

    subscribe(re: RegExp | string): RegExp;

    unsubscribe(re: RegExp | string): void;

    clearSubscriptions(): void;

    /**
     * @throws {Error}
     */
    send(): void;
}

export class SubEmitterSocket {
    onmessage(): (args: Buffer | Buffer[]) => void;

    on(event: string, fn: (...args: any[]) => void): SubEmitterSocket;

    off(event: string): SubEmitterSocket;

    bind(port: ConnectionPort, host?: string | (() => void), fn?: () => void): Socket;

    connect(port: ConnectionPort, host?: string | (() => void), fn?: () => void): Socket;

    close(): void;
}

export class PubSocket extends Socket {
    send(...args: any[]): PubSocket;
}

export class PubEmitterSocket {
    sock: PubSocket;

    send(...args: any[]): PubSocket;

    bind(port: ConnectionPort, host?: string | (() => void), fn?: () => void): Socket;

    connect(port: ConnectionPort, host?: string | (() => void), fn?: () => void): Socket;

    close(): void;
}

export class PushSocket extends Socket {
    send(...args: any[]): void;
    enqueue(msg: any): void;
}

export class ReqSocket extends Socket {
    id(): string;

    onmessage(): (args: Buffer | Buffer[]) => void;

    send(...args: any[]): void;
}

export class RepSocket extends Socket {
    onmessage(sock: NetSocket): (args: Buffer | Buffer[]) => void;
}

export class PullSocket extends Socket {
    /**
     * @throws {Error}
     */
    send(): void;
}

export type ConnectionPort =
    number
    | string
    | { protocol?: string, hostname?: string, pathname: string, port: string | number };

export function socket(type: string, options?: any): Socket;

export const types: {
    [propName: string]: { new(): PubEmitterSocket | SubEmitterSocket | PushSocket | PullSocket | PubSocket | SubSocket | ReqSocket | RepSocket | Socket };
};
