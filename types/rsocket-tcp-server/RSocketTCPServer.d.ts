/// <reference types="node" />

import * as EventEmitter from "events";
import * as net from "net";
import { Encoders, TransportServer } from "rsocket-core";
import { Flowable } from "rsocket-flowable";
import { DuplexConnection } from "rsocket-types";
export interface ServerOptions {
    host?: string | undefined;
    port: number;
    serverFactory?: ((onConnect: (socket: net.Socket) => void) => net.Server) | undefined;
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
