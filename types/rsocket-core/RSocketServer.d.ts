import {
  DuplexConnection,
  Frame,
  FrameWithData,
  Payload,
  Responder,
  ReactiveSocket,
  ISubscription,
  ISubscriber
} from 'rsocket-types';
import { IdentitySerializers, PayloadSerializers } from './RSocketSerialization';

import { Flowable } from 'rsocket-flowable';
import {
  getFrameTypeName,
  CONNECTION_STREAM_ID,
  ERROR_CODES,
  FRAME_TYPES,
} from './RSocketFrame';
import { createServerMachine } from './RSocketMachine';

export interface TransportServer {
  start: () => Flowable<DuplexConnection>;
  stop: () => void;
}

export interface ServerConfig<D, M> {
  getRequestHandler: (socket: ReactiveSocket<D, M>, payload: Payload<D, M>) => Partial<Responder<D, M>>;
  serializers?: PayloadSerializers<D, M>;
  transport: TransportServer;
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

export class SubscriberSwapper<T> implements ISubscriber<T> {
  constructor(target?: Partial<ISubscriber<T>>);
  swap(next: Partial<ISubscriber<T>>): ISubscriber<T>;
  onComplete(): void;
  onError(error: Error): void;
  onNext(value: T): void;
  onSubscribe(subscription: ISubscription): void;
}

export function deserializePayload<D, M>(serializers: PayloadSerializers<D, M>, frame: FrameWithData): Payload<D, M>;
