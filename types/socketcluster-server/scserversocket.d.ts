import Emitter = require("component-emitter");
import { IncomingMessage } from "http";
import { SCExchange } from "sc-broker-cluster";
import { SignOptions } from "jsonwebtoken";
import WebSocket = require("ws");

import SCServer = require("./scserver");

declare class SCServerSocket extends Emitter {
    readonly CONNECTING: "connecting";
    readonly OPEN: "open";
    readonly CLOSED: "closed";

    readonly AUTHENTICATED: "authenticated";
    readonly UNAUTHENTICATED: "unauthenticated";

    id: string;
    request: IncomingMessage;

    remoteAddress: string;
    remoteFamily: string;
    remotePort: number;

    exchange: SCExchange;

    state: "connecting" | "open" | "closed";
    authState: "authenticated" | "unauthenticated";
    authToken?: SCServer.AuthToken;

    constructor(id: string, server: SCServer, socket: WebSocket);

    on(event: string, listener: SCServerSocket.AnyFunction): this;
    on(event: "error", listener: (error: Error) => void): this;
    on(event: "message" | "raw", listener: (message: WebSocket.Data) => void): this;
    on(event: "connectAbort" | "disconnect" | "close", listener: (code: number, data?: any) => void): this;
    on(event: "authStateChange", listener: (stateChangeData: SCServerSocket.StateChangeData) => void): this;
    on(event: "authenticate", listener: (authToken?: SCServer.AuthToken) => void): this;
    on(event: "deauthenticate", listener: (oldToken?: SCServer.AuthToken) => void): this;

    once(event: string, listener: SCServerSocket.AnyFunction): this;
    once(event: "error", listener: (error: Error) => void): this;
    once(event: "message" | "raw", listener: (message: WebSocket.Data) => void): this;
    once(event: "connectAbort" | "disconnect" | "close", listener: (code: number, data?: any) => void): this;
    once(event: "authStateChange", listener: (stateChangeData: SCServerSocket.StateChangeData) => void): this;
    once(event: "authenticate", listener: (authToken?: SCServer.AuthToken) => void): this;
    once(event: "deauthenticate", listener: (oldToken?: SCServer.AuthToken) => void): this;

    off(event?: string, listener?: SCServerSocket.AnyFunction): this;
    off(event: "error", listener?: (error: Error) => void): this;
    off(event: "message" | "raw", listener?: (message: WebSocket.Data) => void): this;
    off(event: "connectAbort" | "disconnect" | "close", listener?: (code: number, data?: any) => void): this;
    off(event: "authStateChange", listener?: (stateChangeData: SCServerSocket.StateChangeData) => void): this;
    off(event: "authenticate", listener?: (authToken?: SCServer.AuthToken) => void): this;
    off(event: "deauthenticate", listener?: (oldToken?: SCServer.AuthToken) => void): this;

    getState(): "connecting" | "open" | "closed";
    getBytesReceived(): number;

    disconnect(code?: number, data?: any): void;
    destroy(code?: number, data?: any): void;
    terminate(): void;

    send(data: any, options: { mask?: boolean; binary?: boolean; compress?: boolean; fin?: boolean }): void;

    decode(message: any): any;
    encode(object: any): any;

    sendObjectBatch(object: any): void;
    sendObjectSingle(object: any): void;
    sendObject(object: any, options?: { batch?: boolean }): void;

    emit(event: string, ...args: any[]): this;
    emit(event: string, data: any, callback?: SCServerSocket.EmitCallback, options?: SCServerSocket.EmitOptions): void;

    triggerAuthenticationEvents(oldState: "authenticated" | "unauthenticated"): void;

    getAuthToken(): SCServer.AuthToken;
    setAuthToken(data: SCServer.AuthToken, options?: SignOptions, callback?: SCServerSocket.EmitCallback): void;

    deauthenticateSelf(): void;
    deauthenticate(callback?: SCServerSocket.EmitCallback): void;

    kickOut(channel?: string, message?: string, callback?: () => void): void;

    subscriptions(): string[];
    isSubscribed(channel?: string): boolean;
}

export = SCServerSocket;

declare namespace SCServerSocket {
    type AnyFunction = (...args: any[]) => any;

    type EmitCallback = (err: Error, eventObject: EventObject) => void;

    interface EventObject {
        event: string;
        data?: any;
        cid?: number;
    }

    interface EmitOptions {
        useCache?: boolean;
        stringifiedData?: string;
    }

    interface StateChangeData {
        oldState: "authenticated" | "unauthenticated";
        newState: "authenticated" | "unauthenticated";
        authToken?: SCServer.AuthToken;
    }
}
