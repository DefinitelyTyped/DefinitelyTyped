/// <reference types="node" />

import { Single } from "rsocket-flowable";
import { DuplexConnection, Payload, ReactiveSocket, Responder } from "rsocket-types";
import { Leases } from "./RSocketLease";
import { PayloadSerializers } from "./RSocketSerialization";

export interface ClientConfig<D, M> {
    serializers?: PayloadSerializers<D, M> | undefined;
    setup: {
        payload?: Payload<D, M> | undefined;
        dataMimeType: string;
        keepAlive: number;
        lifetime: number;
        metadataMimeType: string;
    };
    transport: DuplexConnection;
    responder?: Partial<Responder<D, M>> | undefined;
    errorHandler?: ((error: Error) => void) | undefined;
    leases?: (() => Leases<any>) | undefined;
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
