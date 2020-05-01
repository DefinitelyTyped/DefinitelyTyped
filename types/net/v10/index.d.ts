// Type definitions for Node.js 10.17
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
//                 Jeremie Rodriguez <https://github.com/jeremiergz>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Buffer } from 'buffer';
import * as dns from 'dns';
import 'node/events';
import * as events from 'events';
import { ErrnoException } from 'node';
import * as stream from 'stream';

export {};

export type LookupFunction = (hostname: string, options: dns.LookupOneOptions, callback: (err: ErrnoException | null, address: string, family: number) => void) => void;

export interface AddressInfo {
    address: string;
    family: string;
    port: number;
}

export interface SocketConstructorOpts {
    fd?: number;
    allowHalfOpen?: boolean;
    readable?: boolean;
    writable?: boolean;
}

export interface TcpSocketConnectOpts {
    port: number;
    host?: string;
    localAddress?: string;
    localPort?: number;
    hints?: number;
    family?: number;
    lookup?: LookupFunction;
}

export interface IpcSocketConnectOpts {
    path: string;
}

export type SocketConnectOpts = TcpSocketConnectOpts | IpcSocketConnectOpts;

export class Socket extends stream.Duplex {
    constructor(options?: SocketConstructorOpts);

    // Extended base methods
    write(buffer: Buffer): boolean;
    write(buffer: Buffer, cb?: Function): boolean;
    write(str: string, cb?: Function): boolean;
    write(str: string, encoding?: string, cb?: Function): boolean;
    write(str: string, encoding?: string, fd?: string): boolean;
    write(data: any, encoding?: string, callback?: Function): void;

    connect(options: SocketConnectOpts, connectionListener?: Function): this;
    connect(port: number, host: string, connectionListener?: Function): this;
    connect(port: number, connectionListener?: Function): this;
    connect(path: string, connectionListener?: Function): this;

    setEncoding(encoding?: string): this;
    pause(): this;
    resume(): this;
    setTimeout(timeout: number, callback?: Function): this;
    setNoDelay(noDelay?: boolean): this;
    setKeepAlive(enable?: boolean, initialDelay?: number): this;
    address(): AddressInfo | string;
    unref(): void;
    ref(): void;

    readonly bufferSize: number;
    readonly bytesRead: number;
    readonly bytesWritten: number;
    readonly connecting: boolean;
    readonly destroyed: boolean;
    readonly localAddress: string;
    readonly localPort: number;
    readonly remoteAddress?: string;
    readonly remoteFamily?: string;
    readonly remotePort?: number;

    // Extended base methods
    end(): void;
    end(buffer: Buffer, cb?: Function): void;
    end(str: string, cb?: Function): void;
    end(str: string, encoding?: string, cb?: Function): void;
    end(data?: any, encoding?: string): void;

    /**
     * events.EventEmitter
     *   1. close
     *   2. connect
     *   3. data
     *   4. drain
     *   5. end
     *   6. error
     *   7. lookup
     *   8. timeout
     */
    addListener(event: string, listener: (...args: any[]) => void): this;
    addListener(event: "close", listener: (had_error: boolean) => void): this;
    addListener(event: "connect", listener: () => void): this;
    addListener(event: "data", listener: (data: Buffer) => void): this;
    addListener(event: "drain", listener: () => void): this;
    addListener(event: "end", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void): this;
    addListener(event: "timeout", listener: () => void): this;

    emit(event: string | symbol, ...args: any[]): boolean;
    emit(event: "close", had_error: boolean): boolean;
    emit(event: "connect"): boolean;
    emit(event: "data", data: Buffer): boolean;
    emit(event: "drain"): boolean;
    emit(event: "end"): boolean;
    emit(event: "error", err: Error): boolean;
    emit(event: "lookup", err: Error, address: string, family: string | number, host: string): boolean;
    emit(event: "timeout"): boolean;

    on(event: string, listener: (...args: any[]) => void): this;
    on(event: "close", listener: (had_error: boolean) => void): this;
    on(event: "connect", listener: () => void): this;
    on(event: "data", listener: (data: Buffer) => void): this;
    on(event: "drain", listener: () => void): this;
    on(event: "end", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void): this;
    on(event: "timeout", listener: () => void): this;

    once(event: string, listener: (...args: any[]) => void): this;
    once(event: "close", listener: (had_error: boolean) => void): this;
    once(event: "connect", listener: () => void): this;
    once(event: "data", listener: (data: Buffer) => void): this;
    once(event: "drain", listener: () => void): this;
    once(event: "end", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void): this;
    once(event: "timeout", listener: () => void): this;

    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependListener(event: "close", listener: (had_error: boolean) => void): this;
    prependListener(event: "connect", listener: () => void): this;
    prependListener(event: "data", listener: (data: Buffer) => void): this;
    prependListener(event: "drain", listener: () => void): this;
    prependListener(event: "end", listener: () => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void): this;
    prependListener(event: "timeout", listener: () => void): this;

    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: "close", listener: (had_error: boolean) => void): this;
    prependOnceListener(event: "connect", listener: () => void): this;
    prependOnceListener(event: "data", listener: (data: Buffer) => void): this;
    prependOnceListener(event: "drain", listener: () => void): this;
    prependOnceListener(event: "end", listener: () => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void): this;
    prependOnceListener(event: "timeout", listener: () => void): this;
}

export interface ListenOptions {
    port?: number;
    host?: string;
    backlog?: number;
    path?: string;
    exclusive?: boolean;
    readableAll?: boolean;
    writableAll?: boolean;
}

// https://github.com/nodejs/node/blob/master/lib/net.js
export class Server extends events.EventEmitter {
    constructor(connectionListener?: (socket: Socket) => void);
    constructor(options?: { allowHalfOpen?: boolean, pauseOnConnect?: boolean }, connectionListener?: (socket: Socket) => void);

    listen(port?: number, hostname?: string, backlog?: number, listeningListener?: Function): this;
    listen(port?: number, hostname?: string, listeningListener?: Function): this;
    listen(port?: number, backlog?: number, listeningListener?: Function): this;
    listen(port?: number, listeningListener?: Function): this;
    listen(path: string, backlog?: number, listeningListener?: Function): this;
    listen(path: string, listeningListener?: Function): this;
    listen(options: ListenOptions, listeningListener?: Function): this;
    listen(handle: any, backlog?: number, listeningListener?: Function): this;
    listen(handle: any, listeningListener?: Function): this;
    close(callback?: (err?: Error) => void): this;
    address(): AddressInfo | string;
    getConnections(cb: (error: Error | null, count: number) => void): void;
    ref(): this;
    unref(): this;
    maxConnections: number;
    connections: number;
    listening: boolean;

    /**
     * events.EventEmitter
     *   1. close
     *   2. connection
     *   3. error
     *   4. listening
     */
    addListener(event: string, listener: (...args: any[]) => void): this;
    addListener(event: "close", listener: () => void): this;
    addListener(event: "connection", listener: (socket: Socket) => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: "listening", listener: () => void): this;

    emit(event: string | symbol, ...args: any[]): boolean;
    emit(event: "close"): boolean;
    emit(event: "connection", socket: Socket): boolean;
    emit(event: "error", err: Error): boolean;
    emit(event: "listening"): boolean;

    on(event: string, listener: (...args: any[]) => void): this;
    on(event: "close", listener: () => void): this;
    on(event: "connection", listener: (socket: Socket) => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "listening", listener: () => void): this;

    once(event: string, listener: (...args: any[]) => void): this;
    once(event: "close", listener: () => void): this;
    once(event: "connection", listener: (socket: Socket) => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: "listening", listener: () => void): this;

    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependListener(event: "close", listener: () => void): this;
    prependListener(event: "connection", listener: (socket: Socket) => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: "listening", listener: () => void): this;

    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: "close", listener: () => void): this;
    prependOnceListener(event: "connection", listener: (socket: Socket) => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: "listening", listener: () => void): this;
}

export interface TcpNetConnectOpts extends TcpSocketConnectOpts, SocketConstructorOpts {
    timeout?: number;
}

export interface IpcNetConnectOpts extends IpcSocketConnectOpts, SocketConstructorOpts {
    timeout?: number;
}

export type NetConnectOpts = TcpNetConnectOpts | IpcNetConnectOpts;

export function createServer(connectionListener?: (socket: Socket) => void): Server;
export function createServer(options?: { allowHalfOpen?: boolean, pauseOnConnect?: boolean }, connectionListener?: (socket: Socket) => void): Server;
export function connect(options: NetConnectOpts, connectionListener?: Function): Socket;
export function connect(port: number, host?: string, connectionListener?: Function): Socket;
export function connect(path: string, connectionListener?: Function): Socket;
export function createConnection(options: NetConnectOpts, connectionListener?: Function): Socket;
export function createConnection(port: number, host?: string, connectionListener?: Function): Socket;
export function createConnection(path: string, connectionListener?: Function): Socket;
export function isIP(input: string): number;
export function isIPv4(input: string): boolean;
export function isIPv6(input: string): boolean;
