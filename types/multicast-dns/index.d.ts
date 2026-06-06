/// <reference types="node"/>

import { RemoteInfo, Socket, SocketType } from "dgram";
import { Answer, Packet, Question, RecordType } from "dns-packet";
import { EventEmitter } from "events";

export = mDNS;

/**
 * Creates a new mdns instance.
 *
 * @example
 * import makeMdns = require('multicast-dns');
 * const mdns = makeMdns();
 *
 * mdns.on('response', (response) => {
 *   console.log('got a response packet:', response);
 * });
 *
 * mdns.on('query', (query) => {
 *   console.log('got a query packet:', query);
 * });
 *
 * // lets query for an A record for 'brunhilde.local'
 * mdns.query({
 *   questions: [{
 *     name: 'brunhilde.local',
 *     type: 'A'
 *   }]
 * });
 */
declare function mDNS(options?: mDNS.Options): mDNS.MulticastDNS;

declare namespace mDNS {
    interface Options {
        /**
         * Set the UDP port.
         *
         * @default 5353
         */
        port?: number | undefined;

        /**
         * Set the socket type.
         *
         * @default 'udp4'
         */
        type?: SocketType | undefined;

        /**
         * Set the UDP ip.
         */
        ip?: string | undefined;

        /**
         * Explicitly specify a network interface. Will use all interfaces when not specified.
         */
        interface?: string | undefined;

        /**
         * Explicitly pass a constructed socket to use.
         */
        socket?: Socket | undefined;

        /**
         * Set the `reuseAddr` option when creating the socket.
         *
         * @default true
         */
        reuseAddr?: boolean | undefined;

        /**
         * The interface to bind to or `false` to prevent binding.
         *
         * @default Options.interface
         */
        bind?: false | string | undefined;

        /**
         * Use UDP multicasting.
         *
         * @default true
         */
        multicast?: boolean | undefined;

        /**
         * Set the multicast ttl.
         *
         * @default 255
         */
        ttl?: number | undefined;

        /**
         * Receive your own packets.
         *
         * @default true
         */
        loopback?: boolean | undefined;
    }

    type FullPacket = Required<Packet>;

    interface QueryPacket extends FullPacket {
        type: "query";
    }

    interface ResponsePacket extends FullPacket {
        type: "response";
    }

    interface QueryOutgoingPacket extends Packet {
        questions: Question[];
    }

    interface ResponseOutgoingPacket extends Packet {
        answers: Answer[];
    }

    interface RemoteInfoOutgoing {
        port: number;
        address?: string | undefined;
    }

    interface MulticastDNS extends EventEmitter {
        /**
         * Send a DNS query.
         *
         * @param callback Will be called when the packet was sent.
         *
         * @example
         * mdns.query('brunhilde.local', 'A');
         * mdns.query([{name:'brunhilde.local', type:'A'}]);
         * mdns.query({
         *   questions: [{name:'brunhilde.local', type:'A'}]
         * });
         */
        query(
            query: string | Question[] | QueryOutgoingPacket,
            callback?: (error: Error | null, bytes?: number) => void,
        ): void;
        query(
            query: string | Question[] | QueryOutgoingPacket,
            rinfo?: RemoteInfoOutgoing,
            callback?: (error: Error | null, bytes?: number) => void,
        ): void;
        query(query: string, type?: RecordType, callback?: (error: Error | null, bytes?: number) => void): void;
        query(
            query: string,
            type?: RecordType,
            rinfo?: RemoteInfoOutgoing,
            callback?: (error: Error | null, bytes?: number) => void,
        ): void;

        /**
         * Send a DNS response.
         *
         * @param callback Will be called when the packet was sent.
         *
         * @example
         * mdns.respond([{name:'brunhilde.local', type:'A', data:'192.158.1.5'}]);
         * mdns.respond({
         *   answers: [{name:'brunhilde.local', type:'A', data:'192.158.1.5'}]
         * });
         */
        respond(
            response: Answer[] | ResponseOutgoingPacket,
            callback?: (error: Error | null, bytes?: number) => void,
        ): void;
        respond(
            response: Answer[] | ResponseOutgoingPacket,
            rinfo?: RemoteInfoOutgoing,
            callback?: (error: Error | null, bytes?: number) => void,
        ): void;

        /**
         * Destroy the mDNS instance. Closes the UDP socket.
         */
        destroy(callback?: () => void): void;

        /**
         * Emitted after the socket was bound to.
         */
        on(event: "ready", listener: () => void): this;
        /**
         * Emitted when a packet is received.
         */
        on(event: "message", listener: (message: FullPacket, rinfo: RemoteInfo) => void): this;
        /**
         * Emitted when a query packet is received.
         *
         * @example
         * mdns.on('query', (query) => {
         *   if (query.questions[0] && query.questions[0].name === 'brunhilde.local') {
         *     mdns.respond(someResponse);
         *   }
         * });
         */
        on(event: "query", listener: (query: QueryPacket, rinfo: RemoteInfo) => void): this;
        /**
         * Emitted when a response packet is received.
         */
        on(event: "response", listener: (response: ResponsePacket, rinfo: RemoteInfo) => void): this;
        on(event: "error" | "warning", listener: (err: Error) => void): this;
        on(event: string, listener: (...args: any[]) => void): this;

        /**
         * Emitted after the socket was bound to.
         */
        once(event: "ready", listener: () => void): this;
        /**
         * Emitted when a packet is received.
         */
        once(event: "message", listener: (message: FullPacket, rinfo: RemoteInfo) => void): this;
        /**
         * Emitted when a query packet is received.
         */
        once(event: "query", listener: (query: QueryPacket, rinfo: RemoteInfo) => void): this;
        /**
         * Emitted when a response packet is received.
         */
        once(event: "response", listener: (response: ResponsePacket, rinfo: RemoteInfo) => void): this;
        once(event: "error" | "warning", listener: (err: Error) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;

        /**
         * Emitted after the socket was bound to.
         */
        addListener(event: "ready", listener: () => void): this;
        /**
         * Emitted when a packet is received.
         */
        addListener(event: "message", listener: (message: FullPacket, rinfo: RemoteInfo) => void): this;
        /**
         * Emitted when a query packet is received.
         */
        addListener(event: "query", listener: (query: QueryPacket, rinfo: RemoteInfo) => void): this;
        /**
         * Emitted when a response packet is received.
         */
        addListener(event: "response", listener: (response: ResponsePacket, rinfo: RemoteInfo) => void): this;
        addListener(event: "error" | "warning", listener: (err: Error) => void): this;
        addListener(event: string, listener: (...args: any[]) => void): this;

        prependListener(event: "ready", listener: () => void): this;
        prependListener(event: "message", listener: (message: FullPacket, rinfo: RemoteInfo) => void): this;
        prependListener(event: "query", listener: (query: QueryPacket, rinfo: RemoteInfo) => void): this;
        prependListener(event: "response", listener: (response: ResponsePacket, rinfo: RemoteInfo) => void): this;
        prependListener(event: "error" | "warning", listener: (err: Error) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;

        prependOnceListener(event: "ready", listener: () => void): this;
        prependOnceListener(event: "message", listener: (message: FullPacket, rinfo: RemoteInfo) => void): this;
        prependOnceListener(event: "query", listener: (query: QueryPacket, rinfo: RemoteInfo) => void): this;
        prependOnceListener(event: "response", listener: (response: ResponsePacket, rinfo: RemoteInfo) => void): this;
        prependOnceListener(event: "error" | "warning", listener: (err: Error) => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;

        off(event: "ready", listener: () => void): this;
        off(event: "message", listener: (message: FullPacket, rinfo: RemoteInfo) => void): this;
        off(event: "query", listener: (query: QueryPacket, rinfo: RemoteInfo) => void): this;
        off(event: "response", listener: (response: ResponsePacket, rinfo: RemoteInfo) => void): this;
        off(event: "error" | "warning", listener: (err: Error) => void): this;
        off(event: string, listener: (...args: any[]) => void): this;

        removeListener(event: "ready", listener: () => void): this;
        removeListener(event: "message", listener: (message: FullPacket, rinfo: RemoteInfo) => void): this;
        removeListener(event: "query", listener: (query: QueryPacket, rinfo: RemoteInfo) => void): this;
        removeListener(event: "response", listener: (response: ResponsePacket, rinfo: RemoteInfo) => void): this;
        removeListener(event: "error" | "warning", listener: (err: Error) => void): this;
        removeListener(event: string, listener: (...args: any[]) => void): this;

        removeAllListeners(event?: "ready" | "message" | "query" | "response" | "error" | "warning"): this;

        emit(event: "ready"): boolean;
        emit(event: "message", message: FullPacket, rinfo: RemoteInfo): boolean;
        emit(event: "query", query: QueryPacket, rinfo: RemoteInfo): boolean;
        emit(event: "response", response: ResponsePacket, rinfo: RemoteInfo): boolean;
        emit(event: "error" | "warning", err: Error): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        listeners(event: "ready"): Array<() => void>;
        listeners(event: "message"): Array<(message: FullPacket, rinfo: RemoteInfo) => void>;
        listeners(event: "query"): Array<(query: QueryPacket, rinfo: RemoteInfo) => void>;
        listeners(event: "response"): Array<(response: ResponsePacket, rinfo: RemoteInfo) => void>;
        listeners(event: "error" | "warning"): Array<(err: Error) => void>;
        listeners(event: string): Array<(...args: any[]) => void>;

        rawListeners(event: "ready"): Array<() => void>;
        rawListeners(event: "message"): Array<(message: FullPacket, rinfo: RemoteInfo) => void>;
        rawListeners(event: "query"): Array<(query: QueryPacket, rinfo: RemoteInfo) => void>;
        rawListeners(event: "response"): Array<(response: ResponsePacket, rinfo: RemoteInfo) => void>;
        rawListeners(event: "error" | "warning"): Array<(err: Error) => void>;
        rawListeners(event: string): Array<(...args: any[]) => void>;

        eventNames(): Array<"ready" | "message" | "query" | "response" | "error" | "warning">;
        listenerCount(type: "ready" | "message" | "query" | "response" | "error" | "warning"): number;
    }
}
