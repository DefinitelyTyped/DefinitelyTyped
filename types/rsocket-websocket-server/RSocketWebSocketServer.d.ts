import { DuplexConnection } from 'rsocket-types';
import { Encoders, TransportServer } from 'rsocket-core';
import { Flowable } from 'rsocket-flowable';
import * as ws from 'ws';

/**
 * A WebSocket transport server.
 */
export class RSocketWebSocketServer implements TransportServer {
    constructor(options: ws.ServerOptions, encoders?: Encoders<any>);
    start(): Flowable<DuplexConnection>;
    stop(): void;
}
