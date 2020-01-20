import { DuplexConnection, Payload, ReactiveSocket, Responder } from 'rsocket-types';
import { PayloadSerializers } from './RSocketSerialization';

import { Flowable } from 'rsocket-flowable';
import { Leases } from './RSocketLease';

export interface TransportServer {
  start: () => Flowable<DuplexConnection>;
  stop: () => void;
}

export interface ServerConfig<D, M> {
    getRequestHandler: (socket: ReactiveSocket<D, M>, payload: Payload<D, M>) => Partial<Responder<D, M>>;
    serializers?: PayloadSerializers<D, M>;
    transport: TransportServer;
    errorHandler?: (e: Error) => void;
    leases?: () => Leases<any>;
}

/**
 * RSocketServer: A server in an RSocket connection that accepts connections
 * from peers via the given transport server.
 */
export default class RSocketServer<D, M> {
  constructor(config: ServerConfig<D, M>);
  start(): void;
  stop(): void;
}
