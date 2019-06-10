import { ConnectionStatus, DuplexConnection, Frame, ISubject, ISubscriber, ISubscription, CONNECTION_STATUS } from 'rsocket-types';

import { Flowable } from 'rsocket-flowable';
import {
  deserializeFrame,
  deserializeFrameWithLength,
  Encoders,
  printFrame,
  serializeFrame,
  serializeFrameWithLength,
  toBuffer,
} from 'rsocket-core';
import * as ws from 'ws';

/**
 * A WebSocket transport client for use in browser environments.
 */
export default class RSocketWebSocketClient implements DuplexConnection {
  _encoders: Encoders<any> | null | undefined;
  _options: ws.ClientOptions;
  _receivers: Set<ISubscriber<Frame>>;
  _senders: Set<ISubscription>;
  _socket: WebSocket | null | undefined;
  _status: ConnectionStatus;
  _statusSubscribers: Set<ISubject<ConnectionStatus>>;

  constructor(options: ws.ClientOptions, encoders?: Encoders<any>)
  close(): void;

  connect(): void;

  connectionStatus(): Flowable<ConnectionStatus>;

  receive(): Flowable<Frame>;

  sendOne(frame: Frame): void;

  send(frames: Flowable<Frame>): void;

  _close(error?: Error): void;

  _setConnectionStatus(status: ConnectionStatus): void;

  _handleClosed(
    e: {
      reason?: string
    }
  ): void;

  _handleError(
    e: {
      error: Error
    }
  ): void;

  _handleOpened(): void;

  _handleMessage(message: MessageEvent): void;

  _readFrame(message: MessageEvent): Frame;

  _writeFrame(frame: Frame): void;
}
