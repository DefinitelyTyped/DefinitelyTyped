/// <reference types="node" />

import { DuplexConnection, Payload, ReactiveSocket, Responder } from 'rsocket-types';
import { PayloadSerializers } from './RSocketSerialization';
import { Single } from 'rsocket-flowable';
import { Leases } from './RSocketLease';

export interface ClientConfig<D, M> {
    serializers?: PayloadSerializers<D, M>;
    setup: {
        payload?: Payload<D, M>,
        dataMimeType: string;
        keepAlive: number;
        lifetime: number;
        metadataMimeType: string;
    };
    transport: DuplexConnection;
    responder?: Partial<Responder<D, M>>;
    errorHandler?: (error: Error) => void;
    leases?: () => Leases<any>;
}

/**
 * RSocketClient: A client in an RSocket connection that will communicates with
 * the peer via the given transport client. Provides methods for establishing a
 * connection and initiating the RSocket interactions:
 * - fireAndForget()
 * - requestResponse()
 * - requestStream()
 * - requestChannel()
 * - metadataPush()
 */
export default class RSocketClient<D, M> {
    constructor(config: ClientConfig<D, M>);
    close(): void;
    connect(): Single<ReactiveSocket<D, M>>;
}
