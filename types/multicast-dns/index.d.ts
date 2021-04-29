// Type definitions for multicast-dns 7.2
// Project: https://github.com/mafintosh/multicast-dns
// Definitions by: John Hurliman <https://github.com/jhurliman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { AddressInfo } from "node:net";
import { Packet, Question, RecordType } from "dns-packet";

export type Callback = (err: Error | undefined) => unknown;

export interface MulticastDnsOptions {
    /**
     * Use UDP multicasting?
     */
    multicast?: boolean;

    /**
     * Interface on which to listen and perform mdns operations.
     */
    interface?: string;

    /**
     * The UDP port to listen on.
     */
    port?: number;

    /**
     * The IP address to listen on.
     */
    ip?: string;

    /**
     * The multicast TTL.
     */
    ttl?: number;

    /**
     * Whether to receive your own packets.
     */
    loopback?: boolean;

    /**
     * Whether to set the reuseAddr option when creating the UDP socket.
     * (requires node >=0.11.13)
     */
    reuseAddr?: boolean;
}

export interface MulticastDns extends NodeJS.EventEmitter {
    on(event: "response", cb: (response: Packet) => unknown): this;
    on(event: "query", cb: (query: Packet) => unknown): this;

    send(value: Packet, cb?: Callback): void;
    send(value: Packet, rinfo: AddressInfo, cb?: Callback): void;

    response(res: Packet, cb?: Callback): void;
    response(res: Packet, rinfo: AddressInfo, cb?: Callback): void;

    respond(res: Packet, cb?: Callback): void;
    respond(res: Packet, rinfo: AddressInfo, cb?: Callback): void;

    query(query: string | Packet | Question[], cb?: Callback): void;
    query(query: Packet | Question[], rinfo: AddressInfo, cb?: Callback): void;
    query(name: string, type: RecordType, cb?: Callback): void;
    query(name: string, type: RecordType, rinfo: AddressInfo, cb?: Callback): void;

    destroy(cb?: Callback): void;
}

export default function MulticastDns(opts?: MulticastDnsOptions): MulticastDns;
