/// <reference types="node" />

import { DuplexConnection } from 'rsocket-types';
import { Encoders, TransportServer } from 'rsocket-core';
import * as EventEmitter from 'events';
import * as net from 'net';
import { Flowable } from 'rsocket-flowable';
export interface ServerOptions {
    host?: string;
    port: number;
    serverFactory?: (onConnect: (socket: net.Socket) => void) => net.Server;
}

/**
 * A TCP transport server.
 *
 * //FIXME: Inconsistent casing between TCPServer and TcpClient matches library
 */
export default class RSocketTCPServer implements TransportServer {
    constructor(options: ServerOptions, encoders?: Encoders<any>);
    start(): Flowable<DuplexConnection>;
    stop(): void;
}
