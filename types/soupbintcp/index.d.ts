/// <reference types="node" />

export as namespace soupbintcp;

import { EventEmitter } from "events";
import { Socket } from "net";

export class Client extends EventEmitter {
    constructor(options: { port: number; host: string }, callback?: () => void);

    login(payload: LoginRequestPayload, callback?: (data?: any) => void): void;

    logout(callback?: (data?: any) => void): void;

    send(payload: any, callback?: (data?: any) => void): void;

    end(): void;
}

export interface ConnectionOptions {
    rxTimeoutMillis?: number | undefined;
    txIntervalMillis?: number | undefined;
    heartbeatPacketType: PacketType;
    keepAliveMillis?: number | undefined;
}

export class Connection extends EventEmitter {
    constructor(socket: Socket, options: ConnectionOptions);

    send(packetType: PacketType, payload: any, callback?: (data?: any) => void): void;

    end(): void;
}

export enum PacketType {
    DEBUG = 0x2b, // +

    LOGIN_ACCEPTED = 0x41, // A
    LOGIN_REJECTED = 0x4a, // J
    SEQUENCED_DATA = 0x53, // S
    SERVER_HEARTBEAT = 0x48, // H
    END_OF_SESSION = 0x5a, // Z

    LOGIN_REQUEST = 0x4c, // L
    UNSEQUENCED_DATA = 0x55, // U
    CLIENT_HEARTBEAT = 0x52, // R
    LOGOUT_REQUEST = 0x4f, // O
}

export interface LoginRequestPayload {
    username: string;
    password: string;
    requestedSession: string;
    requestedSequenceNumber: number;
}

export function formatLoginRequest(payload: LoginRequestPayload): Buffer;

export function parseLoginRequest(payload: Buffer): LoginRequestPayload;

export interface LoginAcceptedPayload {
    username: string;
    sequenceNumber: number;
}

export function formatLoginAccepted(payload: LoginAcceptedPayload): Buffer;

export function parseLoginAccepted(payload: Buffer): LoginAcceptedPayload;

export interface LoginRejectedPayload {
    rejectReasonCode: string;
}

export function formatLoginRejected(payload: LoginRejectedPayload): Buffer;

export function parseLoginRejected(payload: Buffer): LoginRejectedPayload;

export class Parser {
    constructor(callback: (packetType: PacketType, payload: Buffer) => void);

    parse(data: Buffer): void;
}

export class Server extends EventEmitter {
    constructor(options: { port: number; host: string }, callback?: (data?: any) => void);

    address(): { port: number; family: string; address: string };

    close(callback: () => void): void;
}

export class Session extends EventEmitter {
    constructor(socket: Socket);

    accept(payload: LoginAcceptedPayload, callback?: (data?: any) => void): void;

    reject(payload: LoginRejectedPayload, callback?: (data?: any) => void): void;

    send(payload: any, callback?: (data?: any) => void): void;

    ending(callback?: (data?: any) => void): void;

    end(): void;
}
