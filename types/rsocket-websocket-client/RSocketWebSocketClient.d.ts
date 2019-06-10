import { ConnectionStatus, DuplexConnection, Frame } from 'rsocket-types';
import { ISubject, ISubscriber, ISubscription } from 'rsocket-types';
import { Encoders } from 'rsocket-core';

import {Flowable} from 'rsocket-flowable';
import {
  deserializeFrame,
  deserializeFrameWithLength,
  printFrame,
  serializeFrame,
  serializeFrameWithLength,
  toBuffer,
} from 'rsocket-core';
import {CONNECTION_STATUS} from 'rsocket-types';

export declare type ClientOptions = {
  url: string,
  wsCreator?: (url: string) => WebSocket,
  debug?: boolean,
  lengthPrefixedFrames?: boolean
};

/**
 * A WebSocket transport client for use in browser environments.
 */
export default class RSocketWebSocketClient implements DuplexConnection {
  _encoders: Encoders<any> | null | undefined;
  _options: ClientOptions;
  _receivers: Set<ISubscriber<Frame>>;
  _senders: Set<ISubscription>;
  _socket: WebSocket | null | undefined;
  _status: ConnectionStatus;
  _statusSubscribers: Set<ISubject<ConnectionStatus>>;

  constructor(options: ClientOptions, encoders?: Encoders<any>)
  close(): void

  connect(): void

  connectionStatus(): Flowable<ConnectionStatus>

  receive(): Flowable<Frame>

  sendOne(frame: Frame): void

  send(frames: Flowable<Frame>): void

  _close(error?: Error): void

  _setConnectionStatus(status: ConnectionStatus): void

  _handleClosed(
    e: {
      reason?: string
    }
  ): void

  _handleError(
    e: {
      error: Error
    }
  ): void

  _handleOpened(): void

  _handleMessage(message: MessageEvent): void

  _readFrame(message: MessageEvent): Frame

  _writeFrame(frame: Frame): void
}
