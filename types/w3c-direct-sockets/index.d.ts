/**
 * @see https://github.com/WICG/direct-sockets/blob/main/docs/explainer.md
 */

export class UDPSocket {
    constructor(options: UDPSocketOptions);
    readonly opened: Promise<UDPSocketOpenInfo>;
    readonly closed: Promise<undefined>;
    close(): Promise<undefined>;
}

export interface UDPMessage {
    data?: BufferSource;
    remoteAddress?: string;
    remotePort?: number;
    dnsQueryType?: SocketDnsQueryType;
}

export class TCPSocket {
    constructor(remoteAddress: string, remotePort: number, options?: TCPSocketOptions);
    readonly opened: Promise<TCPSocketOpenInfo>;
    readonly closed: Promise<undefined>;
    close(): Promise<undefined>;
}

export class TCPServerSocket {
    constructor(localAddress: string, options?: TCPServerSocketOptions);
    readonly opened: Promise<TCPServerSocketOpenInfo>;
    readonly closed: Promise<undefined>;
    close(): Promise<undefined>;
}

export type SocketDnsQueryType =
    | "ipv4"
    | "ipv6";

export interface SocketOptions {
    sendBufferSize?: number;
    receiveBufferSize?: number;
}

export interface TCPSocketOptions extends SocketOptions {
    /** @default false */
    noDelay?: boolean;
    keepAliveDelay?: number;
    dnsQueryType?: SocketDnsQueryType;
}

export interface UDPSocketOptions extends SocketOptions {
    remoteAddress?: string;
    remotePort?: number;
    localAddress?: string;
    localPort?: number;
    dnsQueryType?: SocketDnsQueryType;
    ipv6Only?: boolean;
    multicastAllowAddressSharing?: boolean;
    multicastTimeToLive?: number;
    multicastLoopback?: boolean;
}

export interface TCPServerSocketOptions {
    localPort?: number;
    backlog?: number;
    ipv6Only?: boolean;
}

export interface SocketOpenInfo {
    readable?: ReadableStream;
    writable?: WritableStream;
    remoteAddress?: string;
    remotePort?: number;
    localAddress?: string;
    localPort?: number;
}

export interface TCPSocketOpenInfo extends SocketOpenInfo {
}

export interface UDPSocketOpenInfo extends SocketOpenInfo {
    multicastController?: MulticastController;
}

export interface TCPServerSocketOpenInfo {
    readable?: ReadableStream;
    localAddress?: string;
    localPort?: number;
}

export interface MulticastController {
    joinGroup(ipAddress: string): Promise<undefined>;
    leaveGroup(ipAddress: string): Promise<undefined>;
    readonly joinedGroups: readonly string[];
}
