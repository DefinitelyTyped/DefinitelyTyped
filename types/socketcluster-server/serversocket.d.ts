import { IncomingMessage } from 'http';
import { SignOptions } from 'jsonwebtoken';
import { SocketProtocolIgnoreStatuses, SocketProtocolErrorStatuses } from 'sc-errors';
import WebSocket = require('ws');
import AsyncStreamEmitter = require('async-stream-emitter');
import WritableConsumableStream = require('writable-consumable-stream');
import DemuxedConsumableStream = require('stream-demux/demuxed-consumable-stream');
import Consumer = require('writable-consumable-stream/consumer');
import ConsumableStream = require('consumable-stream');
import AGSimpleBroker = require('ag-simple-broker');

import AGServer = require('./server');

declare class AGServerSocket extends AsyncStreamEmitter<any> {
    readonly CONNECTING: 'connecting';
    readonly OPEN: 'open';
    readonly CLOSED: 'closed';

    readonly AUTHENTICATED: 'authenticated';
    readonly UNAUTHENTICATED: 'unauthenticated';

    readonly ignoreStatuses: SocketProtocolIgnoreStatuses;
    readonly errorStatuses: SocketProtocolErrorStatuses;

    id: string;
    server: AGServer;
    socket: WebSocket;
    protocolVersion: number;

    request: IncomingMessage;

    inboundReceivedMessageCount: number;
    inboundProcessedMessageCount: number;
    outboundPreparedMessageCount: number;
    outboundSentMessageCount: number;

    cloneData: boolean;

    inboundMessageStream: WritableConsumableStream<any>;
    outboundPacketStream: WritableConsumableStream<any>;
    middlewareHandshakeStream: WritableConsumableStream<any>;
    middlewareInboundRawStream: WritableConsumableStream<any>;
    middlewareInboundStream: WritableConsumableStream<any>;
    middlewareOutboundStream: WritableConsumableStream<any>;

    remoteAddress: string;
    remoteFamily: string;
    remotePort: number;
    forwardedForAddress?: string;

    isBufferingBatch: boolean;
    isBatching: boolean;
    batchOnHandshake: boolean;
    batchOnHandshakeDuration: number;
    batchInterval: number;

    channelSubscriptions: {
        [channelName: string]: boolean;
    };
    channelSubscriptionsCount: number;

    exchange: AGSimpleBroker.SimpleExchange;

    state: 'connecting' | 'open' | 'closed';
    authState: 'authenticated' | 'unauthenticated';
    authToken?: AGServerSocket.AuthToken;
    signedAuthToken?: string;

    constructor(id: string, server: AGServer, socket: WebSocket, protocolVersion: number);

    emit(eventName: 'message' | 'raw', data: { message: { data: any; type: string; target: WebSocket } }): void;
    emit(eventName: 'error', data: { error: Error }): void;
    emit(eventName: 'authStateChange', data: AGServerSocket.StateChangeData): void;
    emit(eventName: 'authenticate', data: AGServerSocket.AuthenticateData): void;
    emit(eventName: 'authTokenSigned', data: { signedAuthToken: string }): void;
    emit(eventName: 'deauthenticate', data: AGServerSocket.DeauthenticateData): void;
    emit(eventName: 'badAuthToken', data: AGServerSocket.BadAuthTokenData): void;
    emit(eventName: 'connect', data: AGServerSocket.ConnectData): void;
    emit(eventName: 'subscribe', data: AGServerSocket.SubscribeData): void;
    emit(eventName: 'unsubscribe', data: AGServerSocket.UnsubscribeData): void;
    emit(eventName: 'connectAbort', data: AGServerSocket.ConnectAbortData): void;
    emit(eventName: 'disconnect', data: AGServerSocket.DisconnectData): void;
    emit(eventName: 'close', data: AGServerSocket.CloseData): void;

    emit(eventName: 'message' | 'raw'): ConsumableStream<{ message: { data: any; type: string; target: WebSocket } }>;
    emit(eventName: 'error'): ConsumableStream<{ error: Error }>;
    emit(eventName: 'authStateChange'): ConsumableStream<AGServerSocket.StateChangeData>;
    emit(eventName: 'authenticate'): ConsumableStream<AGServerSocket.AuthenticateData>;
    emit(eventName: 'authTokenSigned'): ConsumableStream<{ signedAuthToken: string }>;
    emit(eventName: 'deauthenticate'): ConsumableStream<AGServerSocket.DeauthenticateData>;
    emit(eventName: 'badAuthToken'): ConsumableStream<AGServerSocket.BadAuthTokenData>;
    emit(eventName: 'connect'): ConsumableStream<AGServerSocket.ConnectData>;
    emit(eventName: 'subscribe'): ConsumableStream<AGServerSocket.SubscribeData>;
    emit(eventName: 'unsubscribe'): ConsumableStream<AGServerSocket.UnsubscribeData>;
    emit(eventName: 'connectAbort'): ConsumableStream<AGServerSocket.ConnectAbortData>;
    emit(eventName: 'disconnect'): ConsumableStream<AGServerSocket.DisconnectData>;
    emit(eventName: 'close'): ConsumableStream<AGServerSocket.CloseData>;

    emitError(error: Error): void;

    getBackpressure(): number;
    getInboundBackpressure(): number;
    getOutboundBackpressure(): number;

    receiver(receiverName: string): DemuxedConsumableStream<any>;

    closeReceiver(receiverName: string): void;
    closeAllReceivers(): void;

    killReceiver(receiverName: string): void;
    killAllReceivers(): void;
    killReceiverConsumer(consumerId: number): void;

    getReceiverConsumerStats(consumerId: number): Consumer.ConsumerStats;
    getReceiverConsumerStatsList(receiverName: string): Consumer.ConsumerStats[];
    getAllReceiversConsumerStatsList(): Consumer.ConsumerStats[];

    getReceiverBackpressure(receiverName: string): number;
    getAllReceiversBackpressure(): number;
    getReceiverConsumerBackpressure(consumerId: number): number;

    hasReceiverConsumer(receiverName: string, consumerId: number): boolean;
    hasAnyReceiverConsumer(consumerId: number): boolean;

    procedure(procedureName: string): DemuxedConsumableStream<any>;

    closeProcedure(procedureName: string): void;
    closeAllProcedures(): void;

    killProcedure(procedureName: string): void;
    killAllProcedures(): void;
    killProcedureConsumer(consumerId: number): void;

    getProcedureConsumerStats(consumerId: number): Consumer.ConsumerStats;
    getProcedureConsumerStatsList(procedureName: string): Consumer.ConsumerStats[];
    getAllProceduresConsumerStatsList(): Consumer.ConsumerStats[];

    getProcedureBackpressure(procedureName: string): number;
    getAllProceduresBackpressure(): number;
    getProcedureConsumerBackpressure(consumerId: number): number;

    hasProcedureConsumer(procedureName: string, consumerId: number): boolean;
    hasAnyProcedureConsumer(consumerId: number): boolean;

    getState(): 'connecting' | 'open' | 'closed';
    getBytesReceived(): number;

    closeAllMiddlewares(): void;
    closeInput(): void;
    closeOutput(): void;
    closeIO(): void;
    closeAllStreams(): void;

    killAllMiddlewares(): void;
    killInput(): void;
    killOutput(): void;
    killIO(): void;
    killAllStreams(): void;

    disconnect(code?: number, reason?: string): void;
    terminate(): void;

    send(data: any, options: { mask?: boolean; binary?: boolean; compress?: boolean; fin?: boolean }): void;

    decode(message: any): any;
    encode(object: any): any;

    startBatch(): void;
    flushBatch(): void;
    cancelBatch(): void;

    startBatching(): void;
    stopBatching(): void;
    cancelBatching(): void;

    serializeObject(object: any): any;
    sendObject(object: any): void;

    transmit(event: string, data: any, options: any): Promise<void>;

    invoke(event: string, data: any, options: any): Promise<any>;

    triggerAuthenticationEvents(oldAuthState: 'authenticated' | 'unauthenticated'): void;

    getAuthToken(): AGServerSocket.AuthToken;
    setAuthToken(data: AGServerSocket.AuthToken, options?: AGServerSocket.AuthTokenOptions): Promise<void>;
    isAuthTokenExpired(token: AGServerSocket.AuthToken): boolean;

    deauthenticateSelf(): void;
    deauthenticate(options?: { rejectOnFailedDelivery: boolean }): Promise<void>;

    kickOut(channel?: string, message?: string): any;

    subscriptions(): string[];
    isSubscribed(channel: string): boolean;
}

export = AGServerSocket;

declare namespace AGServerSocket {
    interface AuthToken {
        [x: string]: any;
    }

    interface AuthTokenOptions extends SignOptions {
        rejectOnFailedDelivery?: boolean;
    }

    interface StateChangeData {
        oldState: 'authenticated' | 'unauthenticated';
        newState: 'authenticated' | 'unauthenticated';
        authToken?: AuthToken;
    }

    interface AuthenticateData {
        authToken?: AuthToken;
    }

    interface DeauthenticateData {
        oldAuthToken?: AuthToken;
    }

    interface BadAuthTokenData {
        authError: Error;
        signedAuthToken: string;
    }

    interface ConnectData {
        id: string;
        pingTimeout: number;
        authError?: Error;
        isAuthenticated: boolean;
    }

    interface SubscribeData {
        channel: string;
        subscriptionOptions: SubscriptionOptions;
    }

    interface SubscriptionOptions {
        channel: string;
        waitForAuth?: boolean;
        data?: any;
    }

    interface UnsubscribeData {
        channel: string;
    }

    interface ConnectAbortData {
        code: number;
        reason: string;
    }

    interface DisconnectData {
        code: number;
        reason: string;
    }

    interface CloseData {
        code: number;
        reason: string;
    }
}
