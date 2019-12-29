// Type definitions for protoo-server 4.0
// Project: https://protoojs.org
// Definitions by: Antonis Balasas <https://github.com/antoniom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Server as HttpServer, IncomingMessage } from 'http';
import { Server as HttpsServer } from 'https';
import { Socket } from 'net';
import { IServerConfig } from 'websocket';

export interface ConnectionRequestInfo {
    request: IncomingMessage;
    origin: string;
    socket: Socket;
}

export interface ProtooRequest {
    request: true;
    id: number;
    method: string;
    data: any;
}

export interface ProotooResponse {
    response: true;
    id: number;
    ok: boolean;
    data?: any;
    errorCode?: number;
    errorReason?: string;
}

export interface ProtooNotification {
    notification: true;
    method: string;
    data: any;
}

export type ConnectionRequestCb = (
    info: ConnectionRequestInfo,
    accept: ConnectionRequestAcceptFn,
    reject: ConnectionRequestRejectFn,
) => void;

export type WebSocketServerOptions = Pick<IServerConfig, Exclude<keyof IServerConfig, 'httpServer'>>;

export type ConnectionRequestAcceptFn = () => WebSocketTransport;

export type ConnectionRequestRejectFn = ((code: number, reason: string) => void) & ((error: Error) => void);

export type RequestCb = (request: ProtooRequest, accept: AcceptFn, reject: RejectFn) => void;

export type AcceptFn = (data: any) => void;

export type RejectFn = ((errorCode?: Error) => void) & ((errorCode: number, errorReason: Error | string) => void);

export type EmptyCb = () => void;

export type NotificationCb = (notification: ProtooNotification) => void;

export class WebSocketServer {
    constructor(server: HttpServer | HttpsServer, options?: WebSocketServerOptions);
    stop(): void;
    on(eventType: 'connectionrequest', callback: ConnectionRequestCb): void;
}

export interface WebSocketTransport {
    closed: boolean;
    toString(): string;
    close(): void;
    send(message: any): Promise<void>;
}

export class Room {
    peers: Peer[];
    closed: boolean;
    constructor();
    createPeer(peerId: string, transport: WebSocketTransport): Promise<Peer>;
    hasPeer(peerId: string): boolean;
    getPeer(peerId: string): Peer;
    close(): void;
    on(eventType: 'close', callback: EmptyCb): void;
}

export interface Peer {
    readonly id: string;
    data: any;
    closed: boolean;
    request(method: string, data?: any): Promise<ProotooResponse>;
    notify(method: string, data?: any): Promise<void>;
    close(): void;
    on(eventType: 'request', callback: RequestCb): void;
    on(eventType: 'notification', callback: NotificationCb): void;
    on(eventType: 'close', callback: EmptyCb): void;
}

export const version: string;
