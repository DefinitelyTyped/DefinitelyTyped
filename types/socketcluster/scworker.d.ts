import { EventEmitter } from "events";
import { Server as httpServer } from "http";
import { Server as httpsServer } from "https";
import { SCServer, SCServerSocket } from "socketcluster-server";
import { SCAuthEngine } from "sc-auth";
import { SCExchange } from "sc-broker-cluster";

export = SCWorker;

type middlewareFunction = (options: SCServer.SCServerOptions, next: (error?: string | Error) => void) => void;

declare class SCWorker extends EventEmitter {
    readonly EVENT_ERROR: "error";
    readonly EVENT_WARNING: "warning";
    readonly EVENT_EXIT: "exit";
    readonly EVENT_READY: "ready";
    readonly EVENT_CONNECTION: "connection";

    readonly MIDDLEWARE_START: "start";

    id: number;
    isLeader: boolean;
    options: SCServer.SCServerOptions;
    httpServer: httpServer | httpsServer;
    scServer: SCServer;
    exchange: SCExchange;
    auth: SCAuthEngine;

    constructor(options?: SCServer.SCServerOptions);

    run(): void;

    getSCServer(): SCServer;
    getHTTPServer(): httpServer | httpsServer;
    getSocketPath(): string;

    setAuthEngine(authEngine: SCAuthEngine): void;
    setCodecEngine(codecEngine: SCServer.SCCodecEngine): void;

    open(): void;
    close(callback?: () => void): void;

    addMiddleware(type: "start", middlewareFn: middlewareFunction): void;
    removeMiddleware(type: "start", middlewareFn: middlewareFunction): void;

    startHTTPServer(): void;
    start(): Promise<void>;

    getStatus(): {
        clientCount: any;
        httpRPM: number;
        wsRPM: number;
    };

    sendToMaster(data: any, callback: (err: Error | null, data: any) => void): void;
    respondToMaster(err: Error | null, data: any, rid: number): void;

    on(event: "connection", listener: (scSocket: SCServerSocket) => void): this;
    on(event: "ready", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "warning", listener: (warning: Error) => void): this;
    on(event: "masterMessage", listener: (data: any, respond: (err: Error | null, responseData: any) => void) => void): this;
}
