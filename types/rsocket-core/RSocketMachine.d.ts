import { DuplexConnection, Frame, ISubscriber, ReactiveSocket, Responder } from 'rsocket-types';
import { PayloadSerializers } from './RSocketSerialization';
import { RequesterLeaseHandler, ResponderLeaseHandler } from './RSocketLease';

export interface RSocketMachine<D, M> extends ReactiveSocket<D, M> {
  setRequestHandler(requestHandler?: Partial<Responder<D, M>>): void;
}

export function createServerMachine<D, M>(
    connection: DuplexConnection,
    connectionPublisher: (partialSubscriber: Partial<ISubscriber<Frame>>) => void,
    keepAliveTimeout: number,
    serializers?: PayloadSerializers<D, M>,
    errorHandler?: (e: Error) => void,
    requesterLeaseHandler?: RequesterLeaseHandler,
    responderLeaseHandler?: ResponderLeaseHandler
): RSocketMachine<D, M>;

export function createClientMachine<D, M>(
    connection: DuplexConnection,
    connectionPublisher: (partialSubscriber: Partial<ISubscriber<Frame>>) => void,
    keepAliveTimeout: number,
    serializers?: PayloadSerializers<D, M>,
    requestHandler?: Partial<Responder<D, M>>,
    errorHandler?: (e: Error) => void,
    requesterLeaseHandler?: RequesterLeaseHandler,
    responderLeaseHandler?: ResponderLeaseHandler
): RSocketMachine<D, M>;
