// Type definitions for non-npm package Node.js 13.13
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 Christian Vaagland Tellnes <https://github.com/tellnes>
//                 David Junger <https://github.com/touffy>
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
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Marcin Kopacz <https://github.com/chyzwar>
//                 Trivikram Kamat <https://github.com/trivikr>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 Junxiao Shi <https://github.com/yoursunny>
//                 Ilia Baryshnikov <https://github.com/qwelias>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Surasak Chaisurin <https://github.com/Ryan-Willpower>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Buffer } from 'buffer';
import * as dns from 'dns';
import 'node/events';
import * as events from 'events';
import { AddressInfo } from 'net';
import { ErrnoException } from 'node';

export {};

export interface RemoteInfo {
    address: string;
    family: 'IPv4' | 'IPv6';
    port: number;
    size: number;
}

export interface BindOptions {
    port?: number;
    address?: string;
    exclusive?: boolean;
    fd?: number;
}

export type SocketType = "udp4" | "udp6";

export interface SocketOptions {
    type: SocketType;
    reuseAddr?: boolean;
    /**
     * @default false
     */
    ipv6Only?: boolean;
    recvBufferSize?: number;
    sendBufferSize?: number;
    lookup?: (hostname: string, options: dns.LookupOneOptions, callback: (err: ErrnoException | null, address: string, family: number) => void) => void;
}

export function createSocket(type: SocketType, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket;
export function createSocket(options: SocketOptions, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket;

export class Socket extends events.EventEmitter {
    addMembership(multicastAddress: string, multicastInterface?: string): void;
    address(): AddressInfo;
    bind(port?: number, address?: string, callback?: () => void): void;
    bind(port?: number, callback?: () => void): void;
    bind(callback?: () => void): void;
    bind(options: BindOptions, callback?: () => void): void;
    close(callback?: () => void): void;
    connect(port: number, address?: string, callback?: () => void): void;
    connect(port: number, callback: () => void): void;
    disconnect(): void;
    dropMembership(multicastAddress: string, multicastInterface?: string): void;
    getRecvBufferSize(): number;
    getSendBufferSize(): number;
    ref(): this;
    remoteAddress(): AddressInfo;
    send(msg: string | Uint8Array | ReadonlyArray<any>, port?: number, address?: string, callback?: (error: Error | null, bytes: number) => void): void;
    send(msg: string | Uint8Array | ReadonlyArray<any>, port?: number, callback?: (error: Error | null, bytes: number) => void): void;
    send(msg: string | Uint8Array | ReadonlyArray<any>, callback?: (error: Error | null, bytes: number) => void): void;
    send(msg: string | Uint8Array, offset: number, length: number, port?: number, address?: string, callback?: (error: Error | null, bytes: number) => void): void;
    send(msg: string | Uint8Array, offset: number, length: number, port?: number, callback?: (error: Error | null, bytes: number) => void): void;
    send(msg: string | Uint8Array, offset: number, length: number, callback?: (error: Error | null, bytes: number) => void): void;
    setBroadcast(flag: boolean): void;
    setMulticastInterface(multicastInterface: string): void;
    setMulticastLoopback(flag: boolean): void;
    setMulticastTTL(ttl: number): void;
    setRecvBufferSize(size: number): void;
    setSendBufferSize(size: number): void;
    setTTL(ttl: number): void;
    unref(): this;
    /**
     * Tells the kernel to join a source-specific multicast channel at the given
     * `sourceAddress` and `groupAddress`, using the `multicastInterface` with the
     * `IP_ADD_SOURCE_MEMBERSHIP` socket option.
     * If the `multicastInterface` argument
     * is not specified, the operating system will choose one interface and will add
     * membership to it.
     * To add membership to every available interface, call
     * `socket.addSourceSpecificMembership()` multiple times, once per interface.
     */
    addSourceSpecificMembership(sourceAddress: string, groupAddress: string, multicastInterface?: string): void;

    /**
     * Instructs the kernel to leave a source-specific multicast channel at the given
     * `sourceAddress` and `groupAddress` using the `IP_DROP_SOURCE_MEMBERSHIP`
     * socket option. This method is automatically called by the kernel when the
     * socket is closed or the process terminates, so most apps will never have
     * reason to call this.
     *
     * If `multicastInterface` is not specified, the operating system will attempt to
     * drop membership on all valid interfaces.
     */
    dropSourceSpecificMembership(sourceAddress: string, groupAddress: string, multicastInterface?: string): void;

    /**
     * events.EventEmitter
     * 1. close
     * 2. connect
     * 3. error
     * 4. listening
     * 5. message
     */
    addListener(event: string, listener: (...args: any[]) => void): this;
    addListener(event: "close", listener: () => void): this;
    addListener(event: "connect", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: "listening", listener: () => void): this;
    addListener(event: "message", listener: (msg: Buffer, rinfo: RemoteInfo) => void): this;

    emit(event: string | symbol, ...args: any[]): boolean;
    emit(event: "close"): boolean;
    emit(event: "connect"): boolean;
    emit(event: "error", err: Error): boolean;
    emit(event: "listening"): boolean;
    emit(event: "message", msg: Buffer, rinfo: RemoteInfo): boolean;

    on(event: string, listener: (...args: any[]) => void): this;
    on(event: "close", listener: () => void): this;
    on(event: "connect", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "listening", listener: () => void): this;
    on(event: "message", listener: (msg: Buffer, rinfo: RemoteInfo) => void): this;

    once(event: string, listener: (...args: any[]) => void): this;
    once(event: "close", listener: () => void): this;
    once(event: "connect", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: "listening", listener: () => void): this;
    once(event: "message", listener: (msg: Buffer, rinfo: RemoteInfo) => void): this;

    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependListener(event: "close", listener: () => void): this;
    prependListener(event: "connect", listener: () => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: "listening", listener: () => void): this;
    prependListener(event: "message", listener: (msg: Buffer, rinfo: RemoteInfo) => void): this;

    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: "close", listener: () => void): this;
    prependOnceListener(event: "connect", listener: () => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: "listening", listener: () => void): this;
    prependOnceListener(event: "message", listener: (msg: Buffer, rinfo: RemoteInfo) => void): this;
}
