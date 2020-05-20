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
}

/**
 * A TCP transport client for use in node environments.
 */
export class RSocketTcpClient extends RSocketTcpConnection {
  constructor(options: net.TcpSocketConnectOpts, encoders?: Encoders<any>);
  connect(): void;
}

/**
 * A TLS transport client for use in node environments.
 */
export class RSocketTlsClient extends RSocketTcpConnection {
  constructor(options: tls.ConnectionOptions, encoders?: Encoders<any>);
  connect(): void;
}
