import {
  DuplexConnection,
  Frame,
  FrameWithData,
  Payload,
  ReactiveSocket,
  PartialResponder,
} from 'rsocket-types';
import { ISubscription, ISubscriber } from 'rsocket-types';
import { PayloadSerializers } from './RSocketSerialization';

import { Flowable } from 'rsocket-flowable';
import {
  getFrameTypeName,
  CONNECTION_STREAM_ID,
  ERROR_CODES,
  FRAME_TYPES,
} from './RSocketFrame';
import {IdentitySerializers} from './RSocketSerialization';
import {createServerMachine} from './RSocketMachine';

export declare interface TransportServer {
  start: () => Flowable<DuplexConnection>;
  stop: () => void;
}

export declare type ServerConfig<D, M> = {
  getRequestHandler: (socket: ReactiveSocket<D, M>, payload: Payload<D, M>) => PartialResponder<D, M>,
  serializers?: PayloadSerializers<D, M>,
  transport: TransportServer
};

/**
 * RSocketServer: A server in an RSocket connection that accepts connections
 * from peers via the given transport server.
 */
export default class RSocketServer<D, M> {
  _config: ServerConfig<D, M>;
  _connections: Set<ReactiveSocket<D, M>>;
  _started: boolean;
  _subscription: ISubscription | null | undefined;

  constructor(config: ServerConfig<D, M>)

  start(): void

  stop(): void

  _handleTransportComplete: () => void

  _handleTransportError: (error: Error) => void

  _handleTransportConnection: (connection: DuplexConnection)=> void

  _getSerializers: () => PayloadSerializers<D, M>
}

declare class SubscriberSwapper<T> implements ISubscriber<T> {
  _target?: Partial<ISubscriber<T>>;
  _subscription?: ISubscription

  constructor(target?: Partial<ISubscriber<T>>)

  swap(next: Partial<ISubscriber<T>>): ISubscriber<T>

  onComplete(): void
  onError(error: Error): void
  onNext(value: T): void
  onSubscribe(subscription: ISubscription): void
}

declare function deserializePayload<D, M>(serializers: PayloadSerializers<D, M>, frame: FrameWithData): Payload<D, M>
