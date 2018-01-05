// Type definitions for zeromq 4.5
// Project: https://github.com/zeromq/zeromq.js
// Definitions by: Dave McKeown <https://github.com/davemckeown>, Erik Mavrinac <https://github.com/erikma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Forked from the DefinitelyTyped 'zmq' project originally created by Dave McKeown,
// then updated with recent changes in the 'zeromq' project from
// https://github.com/zeromq/zeromq.js/blob/master/lib/index.js

/// <reference types="node" />

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

export class Socket {
    /**
     * Set `opt` to `val`.
     *
     * @param opt Option
     * @param val Value
     */
    setsocketopt(opt: number|string, val: any): Socket;

    /**
     * Get socket `opt`.
     *
     * @param opt Option number
     */
    getsocketopt(opt: number|string): any;

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
     * @return for chaining
     */
    monitor(interval?: number): Socket;

    /**
     * Close the socket.
     *
     */
    close(): Socket;

    /**
     * Socket event - 'message'
     */
    on(eventName: string, callback: (...buffer: Buffer[]) => void): void;

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
