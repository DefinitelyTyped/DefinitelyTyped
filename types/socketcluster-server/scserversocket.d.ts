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

    getState(): "connecting" | "open" | "closed";
    disconnect(code?: number, data?: any): void;
    send(data: any, options: { mask?: boolean; binary?: boolean; compress?: boolean; fin?: boolean }): void;
    getAuthToken(): SCServer.AuthToken;
    setAuthToken(data: SCServer.AuthToken, options?: SignOptions): void;
    deauthenticate(): void;
    kickOut(channel?: string, message?: string, callback?: () => void): void;
    subscriptions(): string[];
    isSubscribed(channel?: string): boolean;
}

export = SCServerSocket;
