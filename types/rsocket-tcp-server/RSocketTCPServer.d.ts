 /// <reference types="node" />
 /// <reference types="events" />

import { DuplexConnection } from 'rsocket-types';
import { Encoders, TransportServer } from 'rsocket-core';
import * as EventEmitter from 'events';
import * as net from 'net';
import { Flowable } from 'rsocket-flowable';
export declare type ServerOptions = {
    host?: string;
    port: number;
    serverFactory?: (onConnect: (socket: net.Socket) => undefined) => net.Server;
};
/**
 * A TCP transport server.
 *
 * //FIXME: Inconsistent casing between TCPServer and TcpClient
 */
export default class RSocketTCPServer implements TransportServer {
    _emitter: EventEmitter;
    _encoders: Encoders<any> | null | undefined;
    _options: ServerOptions;
    constructor(options: ServerOptions, encoders?: Encoders<any> | null | undefined);
    start(): Flowable<DuplexConnection>;
    stop(): undefined;
}
