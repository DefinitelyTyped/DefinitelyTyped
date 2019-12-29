// Type definitions for zeromq 4.6
// Project: https://github.com/zeromq/zeromq.js
// Definitions by: Dave McKeown <https://github.com/davemckeown>
//                 Erik Mavrinac <https://github.com/erikma>
//                 Philippe D'Alva <https://github.com/TitaneBoy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Forked from the DefinitelyTyped 'zmq' project originally created by Dave McKeown,
// then updated with recent changes in the 'zeromq' project from
// https://github.com/zeromq/zeromq.js/blob/master/lib/index.js

/// <reference types="node" />

import { EventEmitter } from 'events';

export interface SocketTypes {
    pub: number;
    xpub: number;
    sub: number;
    xsub: number;
    req: number;
    xreq: number;
    rep: number;
    xrep: number;
    push: number;
    pull: number;
    dealer: number;
    router: number;
    pair: number;
    stream: number;
}

export interface SocketOptions {
    _fd: number;
    _ioevents: number;
    _receiveMore: number;
    _subscribe: number;
    _unsubscribe: number;
    affinity: number;
    backlog: number;
    hwm: number;
    identity: number;
    linger: number;
    mcast_loop: number;
    rate: number;
    rcvbuf: number;
    last_endpoint: number;
    reconnect_ivl: number;
    recovery_ivl: number;
    sndbuf: number;
    swap: number;
    mechanism: number;
    plain_server: number;
    plain_username: number;
    plain_password: number;
    curve_server: number;
    curve_publickey: number;
    curve_secretkey: number;
    curve_serverkey: number;
    zap_domain: number;
}

/**
 * Export all option names at the global level
 */
export const ZMQ_HWM: number;
export const ZMQ_SWAP: number;
export const ZMQ_AFFINITY: number;
export const ZMQ_IDENTITY: number;
export const ZMQ_SUBSCRIBE: number;
export const ZMQ_UNSUBSCRIBE: number;
export const ZMQ_RATE: number;
export const ZMQ_RECOVERY_IVL: number;
export const ZMQ_MCAST_LOOP: number;
export const ZMQ_SNDBUF: number;
export const ZMQ_RCVBUF: number;
export const ZMQ_RCVMORE: number;
export const ZMQ_FD: number;
export const ZMQ_EVENTS: number;
export const ZMQ_TYPE: number;
export const ZMQ_LINGER: number;
export const ZMQ_RECONNECT_IVL: number;
export const ZMQ_BACKLOG: number;
export const ZMQ_RECOVERY_IVL_MSEC: number;
export const ZMQ_RECONNECT_IVL_MAX: number;
export const ZMQ_MAXMSGSIZE: number;
export const ZMQ_SNDHWM: number;
export const ZMQ_RCVHWM: number;
export const ZMQ_MULTICAST_HOPS: number;
export const ZMQ_RCVTIMEO: number;
export const ZMQ_SNDTIMEO: number;
export const ZMQ_IPV4ONLY: number;
export const ZMQ_LAST_ENDPOINT: number;
export const ZMQ_ROUTER_MANDATORY: number;
export const ZMQ_TCP_KEEPALIVE: number;
export const ZMQ_TCP_KEEPALIVE_CNT: number;
export const ZMQ_TCP_KEEPALIVE_IDLE: number;
export const ZMQ_TCP_KEEPALIVE_INTVL: number;
export const ZMQ_TCP_ACCEPT_FILTER: number;
export const ZMQ_DELAY_ATTACH_ON_CONNECT: number;
export const ZMQ_XPUB_VERBOSE: number;
export const ZMQ_ROUTER_RAW: number;
export const ZMQ_IPV6: number;
export const ZMQ_MECHANISM: number;
export const ZMQ_PLAIN_SERVER: number;
export const ZMQ_PLAIN_USERNAME: number;
export const ZMQ_PLAIN_PASSWORD: number;
export const ZMQ_CURVE_SERVER: number;
export const ZMQ_CURVE_PUBLICKEY: number;
export const ZMQ_CURVE_SECRETKEY: number;
export const ZMQ_CURVE_SERVERKEY: number;
export const ZMQ_ZAP_DOMAIN: number;
export const ZMQ_HEARTBEAT_IVL: number;
export const ZMQ_HEARTBEAT_TTL: number;
export const ZMQ_HEARTBEAT_TIMEOUT: number;
export const ZMQ_CONNECT_TIMEOUT: number;
export const ZMQ_IO_THREADS: number;
export const ZMQ_MAX_SOCKETS: number;
export const ZMQ_ROUTER_HANDOVER: number;

export class Socket extends EventEmitter {
    /**
     * Set `opt` to `val`.
     *
     * @param opt Option
     * @param val Value
     */
    setsockopt(opt: number|string, val: any): Socket;

    /**
     * Get socket `opt`.
     *
     * @param opt Option number
     */
    getsockopt(opt: number|string): any;

    /**
     * Async bind.
     *
     * Emits the "bind" event.
     *
     * @param addr Socket address
     * @param cb Bind callback
     */
    bind(addr: string, callback?: (error: string) => void): Socket;

    /**
     * Sync bind.
     *
     * @param addr Socket address
     */
    bindSync(addr: string): Socket;

    /**
     * Async unbind.
     *
     * Emits the "unbind" event.
     *
     * @param addr Socket address
     * @param cb Unind callback
     */
    unbind(addr: string, callback?: (error: string) => void): Socket;

    /**
     * Sync unbind.
     *
     * @param addr Socket address
     */
    unbindSync(addr: string): Socket;

    /**
     * Connect to `addr`.
     *
     * @param addr Connection address
     */
    connect(addr: string): Socket;

    /**
     * Disconnect from `addr`.
     *
     * @param addr The address
     */
    disconnect(addr: string): Socket;

    /**
     * Subscribe with the given `filter`.
     *
     * @param filter The filter
     */
    subscribe(filter: string): Socket;

    /**
     * Unsubscribe with the given `filter`.
     *
     * @param filter The filter
     */
    unsubscribe(filter: string): Socket;

    /**
     * Send the given `msg`.
     *
     * @param msg The message
     * @param flags Message flags
     */
    send(msg: string|Buffer|any[], flags?: number): Socket;

    /**
     * Enable monitoring of a Socket. This enables the following additional events:
     * 'connect', 'connect_delay', 'connect_retry', 'listen', 'bind_error',
     * 'accept', 'accept_error', 'close', 'close_error', 'disconnect'.
     * Each event receives the parameters: (eventValue, eventEndpointAddrress, error)
     *
     * @param timer interval in ms > 0 or Undefined for default
     * @param numOfEvents The maximum number of events to read on each interval, default is 1, use 0 for reading all events
     * @return for chaining
     */
    monitor(interval?: number, numOfEvents?: number): Socket;

    /**
     * Disable monitoring of a Socket release idle handler
     * and close the socket
     *
     * @return for chaining
     */
    unmonitor(): Socket;

    /**
     * Close the socket.
     *
     */
    close(): Socket;

    pause(): void;
    resume(): void;

    // Socket Options
    _fd: any;
    _ioevents: any;
    _receiveMore: any;
    _subscribe: any;
    _unsubscribe: any;
    affinity: any;
    backlog(): any;
    hwm: any;
    identity: any;
    linger: any;
    mcast_loop: any;
    rate: any;
    rcvbuf: any;
    last_endpoint: any;
    reconnect_ivl: any;
    recovery_ivl: any;
    sndbuf: any;
    swap: any;
    mechanism: any;
    plain_server: any;
    plain_username: any;
    plain_password: any;
    curve_server: number;
    curve_publickey: string | Buffer;
    curve_secretkey: string | Buffer;
    curve_serverkey: string | Buffer;
    zap_domain: any;
}

/** The key material returned from a call to curveKeypair(). */
export interface CurveKeyPair {
    /**
     * A Z85 string denoting the public portion of the Curve25519 key.
     *
     */
    public: string;

    /**
     * A Z85 string denoting the private, secret portion of the Curve25519 key.
     *
     */
    secret: string;
}

/**
 * Gets the ZeroMQ version.
 */
export let version: string;

export let types: SocketTypes;
export let options: SocketOptions;

/**
 * Creates a ZeroMQ socket of the specified type.
 * @return The created socket in an unconnected state.
 */
export function socket(type: string|number, options?: any): Socket;

/**
 * Creates a ZeroMQ socket of the specified type.
 * @return The created socket in an unconnected state.
 */
export function createSocket(type: string, options?: any): Socket;

/**
 * Generates a CurveZMQ (Curve25519) key pair.
 * @return The public and secret portions of the key.
 */
export function curveKeypair(): CurveKeyPair;

/**
 * Connects a frontend socket to a backend socket.
 * @param frontend The frontend socket to connect with the backend socket.
 *                 Frontend socket should be a 'push', 'pull', 'xpub', 'router' or 'xrep' socket.
 * @param backend The backend socket to connect with the frontend socket.
 *                Backend socket should be a 'pull', 'push', 'xsub', 'dealer' or 'xreq' socket.
 * @param capture If defined, this socket will receive all messages from frontend and backend socket
 *                Capture socket should be a 'pub', 'dealer', 'push' or 'pair' socket.
 */
export function proxy(frontend: Socket, backend: Socket, capture ?: Socket): void;
