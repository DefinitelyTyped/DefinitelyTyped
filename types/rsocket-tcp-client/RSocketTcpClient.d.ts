/// <reference types="node" />

import {
    CONNECTION_STATUS,
    ConnectionStatus,
    DuplexConnection,
    Frame,
    ISubject,
    ISubscriber,
    ISubscription,
} from "rsocket-types";

import * as net from "net";
import { createBuffer, deserializeFrames, Encoders, serializeFrameWithLength } from "rsocket-core";
import { Flowable } from "rsocket-flowable";
import * as tls from "tls";

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
