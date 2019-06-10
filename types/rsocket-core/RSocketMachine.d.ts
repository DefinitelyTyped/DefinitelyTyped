import {
  CancelFrame,
  ConnectionStatus,
  DuplexConnection,
  Frame,
  FrameWithData,
  Payload,
  Responder,
  PartialResponder,
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
  _responder: PartialResponder<D, M>;

  constructor(responder: PartialResponder<D, M>)

  setResponder(responder: PartialResponder<D, M>): void;

  fireAndForget(payload: Payload<D, M>): void;

  requestResponse(payload: Payload<D, M>): Single<Payload<D, M>>;

  requestStream(payload: Payload<D, M>): Flowable<Payload<D, M>>;

  requestChannel(payloads: Flowable<Payload<D, M>>): Flowable<Payload<D, M>>;
  metadataPush(payload: Payload<D, M>): Single<void>;
}

export interface RSocketMachine<D, M> extends ReactiveSocket<D, M> {
  setRequestHandler(requestHandler?: PartialResponder<D, M>): void;
}

export function createServerMachine<D, M>(
  connection: DuplexConnection,
  connectionPublisher: (partialSubscriber: Partial<ISubscriber<Frame>>) => void,
  serializers?: PayloadSerializers<D, M>,
  requestHandler?: PartialResponder<D, M>,
): RSocketMachine<D, M>;

export function createClientMachine<D, M>(
  connection: DuplexConnection,
  connectionPublisher: (partialSubscriber: Partial<ISubscriber<Frame>>) => void,
  serializers?: PayloadSerializers<D, M>,
  requestHandler?: PartialResponder<D, M>,
): RSocketMachine<D, M>;

export class RSocketMachineImpl<D, M> implements RSocketMachine<D, M> {
  _requestHandler: ResponderWrapper<D, M>;
  _connection: DuplexConnection;
  _nextStreamId: number;
  _receivers: Map<number, ISubject<Payload<D, M>>>;
  _subscriptions: Map<number, ISubscription>;
  _serializers: PayloadSerializers<D, M>;

  constructor(
    role: Role,
    connection: DuplexConnection,
    connectionPublisher: (partialSubscriber: Partial<ISubscriber<Frame>>) => void,
    serializers?: PayloadSerializers<D, M>,
    requestHandler?: PartialResponder<D, M>,
  )

  setRequestHandler(requestHandler?: PartialResponder<D, M>): void;

  close(): void;

  connectionStatus(): Flowable<ConnectionStatus>;

  fireAndForget(payload: Payload<D, M>): void;

  requestResponse(payload: Payload<D, M>): Single<Payload<D, M>>;

  requestStream(payload: Payload<D, M>): Flowable<Payload<D, M>>;

  requestChannel(payloads: Flowable<Payload<D, M>>): Flowable<Payload<D, M>>;

  metadataPush(payload: Payload<D, M>): Single<void>;

  _getNextStreamId(): number;

  /**
   * Handle the connection closing normally: this is an error for any open streams.
   */
  _handleTransportClose: () => void;

  /**
   * Handle the transport connection closing abnormally or a connection-level protocol error.
   */
  _handleError: (error: Error) => void;

  /**
   * Handle a frame received from the transport client.
   */
  _handleFrame: (frame: Frame) => void;

  /**
   * Handle connection frames (stream id === 0).
   */
  _handleConnectionFrame: (frame: Frame) => void;

  /**
   * Handle stream-specific frames (stream id !== 0).
   */
  _handleStreamFrame: (streamId: number, frame: Frame) => void;

  _handleCancel: (streamId: number, frame: CancelFrame) => void;

  _handleRequestN: (streamId: number, frame: RequestNFrame) => void;

  _handleFireAndForget: (streamId: number, frame: RequestFnfFrame) => void;

  _handleRequestResponse: (streamId: number, frame: RequestResponseFrame) => void;

  _handleRequestStream: (streamId: number, frame: RequestStreamFrame) => void;

  _handleRequestChannel: (streamId: number, frame: RequestChannelFrame) => void;

  _sendStreamComplete: (streamId: number) => void;

  _sendStreamError: (streamId: number, error: Error) => void;

  _sendStreamPayload: (
    streamId: number,
    payload: Payload<D, M>,
    complete?: boolean,
  ) => void;

  _deserializePayload: (frame: FrameWithData) => Payload<D, M>;
  /**
   * Handle an error specific to a stream.
   */
  _handleStreamError: (streamId: number, error: Error) => void;
}

export function deserializePayload<D, M>(
  serializers: PayloadSerializers<D, M>,
  frame: FrameWithData,
): Payload<D, M>;
