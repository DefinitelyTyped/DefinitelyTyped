/// <reference types="node" />

import { ConnectionStatus, DuplexConnection, Frame, ISubject, ISubscriber, ISubscription, CONNECTION_STATUS } from 'rsocket-types';

import * as net from 'net';
import * as tls from 'tls';
import { Flowable } from 'rsocket-flowable';
import {
  Encoders,
  createBuffer,
  deserializeFrames,
  serializeFrameWithLength,
} from 'rsocket-core';

/**
 * A TCP transport client for use in node environments.
 */
export class RSocketTcpConnection implements DuplexConnection {
  _buffer: Buffer;
  _encoders: Encoders<any> | null | undefined;
  _receivers: Set<ISubscriber<Frame>>;
  _senders: Set<ISubscription>;
  _socket: net.Socket | null | undefined;
  _status: ConnectionStatus;
  _statusSubscribers: Set<ISubject<ConnectionStatus>>;

  constructor(socket?: net.Socket, encoders?: Encoders<any>);

  close(): void;

  connect(): void;

  setupSocket(socket: net.Socket): void;

  connectionStatus(): Flowable<ConnectionStatus>;

  receive(): Flowable<Frame>;

  sendOne(frame: Frame): void;
  send(frames: Flowable<Frame>): void;

  getConnectionState(): ConnectionStatus;

  setConnectionStatus(status: ConnectionStatus): void;

  _close(error?: Error): void;

  _handleError(error?: Error): void;

  _handleData(chunk: Buffer): void;

  _readFrames(chunk: Buffer): Frame[];

  _writeFrame(frame: Frame): void;
}

/**
 * A TCP transport client for use in node environments.
 */
export class RSocketTcpClient extends RSocketTcpConnection {
  _options: net.TcpSocketConnectOpts;

  constructor(options: net.TcpSocketConnectOpts, encoders?: Encoders<any>);

  connect(): void;
}

/**
 * A TLS transport client for use in node environments.
 */
export class RSocketTlsClient extends RSocketTcpConnection {
  _options: tls.ConnectionOptions;

  constructor(options: tls.ConnectionOptions, encoders?: Encoders<any>);

  connect(): void;

  _handleOpened(): void;
}
