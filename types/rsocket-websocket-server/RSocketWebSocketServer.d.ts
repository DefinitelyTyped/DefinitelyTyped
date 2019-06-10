import { DuplexConnection } from 'rsocket-types';
import { Encoders, TransportServer } from 'rsocket-core';
import { EventEmitter } from 'events';
import { Flowable } from 'rsocket-flowable';
export declare type ServerOptions = {
    host?: string;
    port: number;
    backlog?: number;
    server?: any;
    verifyClient?: Function;
    handleProtocols?: Function;
    path?: string;
    noServer?: boolean;
    clientTracking?: boolean;
    perMessageDeflate?: any;
    maxPayload?: number;
};
/**
 * A WebSocket transport server.
 */
export default class RSocketWebSocketServer implements TransportServer {
    _emitter: EventEmitter;
    _encoders?: Encoders<any>;
    _options: ServerOptions;
    constructor(options: ServerOptions, encoders?: Encoders<any>);
    start(): Flowable<DuplexConnection>;
    stop(): undefined;
}
