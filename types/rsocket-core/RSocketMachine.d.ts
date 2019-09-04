import {
  CancelFrame,
  ConnectionStatus,
  DuplexConnection,
  Frame,
  FrameWithData,
  Payload,
  Responder,
  ReactiveSocket,
  RequestFnfFrame,
  RequestNFrame,
  RequestResponseFrame,
  RequestStreamFrame,
  RequestChannelFrame,
  ISubject,
  ISubscription,
  ISubscriber
} from 'rsocket-types';

import { Flowable, FlowableProcessor, Single } from 'rsocket-flowable';
import {
  createErrorFromFrame,
  getFrameTypeName,
  isComplete,
  isNext,
  isRespond,
  CONNECTION_STREAM_ID,
  ERROR_CODES,
  FLAGS,
  FRAME_TYPES,
  MAX_REQUEST_N,
  MAX_STREAM_ID,
} from './RSocketFrame';
import { PayloadSerializers, IdentitySerializers } from './RSocketSerialization';

export type Role = 'CLIENT' | 'SERVER';

export class ResponderWrapper<D, M> implements Responder<D, M> {
  constructor(responder: Partial<Responder<D, M>>)
  setResponder(responder: Partial<Responder<D, M>>): void;
  fireAndForget(payload: Payload<D, M>): void;
  requestResponse(payload: Payload<D, M>): Single<Payload<D, M>>;
  requestStream(payload: Payload<D, M>): Flowable<Payload<D, M>>;
  requestChannel(payloads: Flowable<Payload<D, M>>): Flowable<Payload<D, M>>;
  metadataPush(payload: Payload<D, M>): Single<void>;
}

export interface RSocketMachine<D, M> extends ReactiveSocket<D, M> {
  setRequestHandler(requestHandler?: Partial<Responder<D, M>>): void;
}

export function createServerMachine<D, M>(
  connection: DuplexConnection,
  connectionPublisher: (partialSubscriber: Partial<ISubscriber<Frame>>) => void,
  serializers?: PayloadSerializers<D, M>,
  requestHandler?: Partial<Responder<D, M>>,
): RSocketMachine<D, M>;

export function createClientMachine<D, M>(
  connection: DuplexConnection,
  connectionPublisher: (partialSubscriber: Partial<ISubscriber<Frame>>) => void,
  serializers?: PayloadSerializers<D, M>,
  requestHandler?: Partial<Responder<D, M>>,
): RSocketMachine<D, M>;

export function deserializePayload<D, M>(
  serializers: PayloadSerializers<D, M>,
  frame: FrameWithData,
): Payload<D, M>;
