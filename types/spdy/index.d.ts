// Type definitions for node-spdy 3.4
// Project: https://github.com/indutny/node-spdy
// Definitions by: Anthony Trinh <https://github.com/tony19>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import * as http from 'http';
import * as https from 'https';

// lib/spdy/agent.js
export namespace agent {
    class Agent extends https.Agent {}
    class PlainAgent extends http.Agent {}
    function create(base: any, options: AgentOptions): Agent | PlainAgent;

    interface AgentOptions extends https.AgentOptions {
        port?: number | undefined;
        spdy?: {
            plain?: boolean | undefined,
            ssl?: boolean | undefined,
            'x-forwarded-for'?: string | undefined,
            protocol?: string | undefined,
            protocols?: string[] | undefined
        } | undefined;
    }
}

// lib/spdy/handle.js
export interface Handle {
    create(options: object, stream: any, socket: Socket): Handle;
    getStream(callback?: (stream: any) => void): any;
    assignSocket(socket: Socket, options: object): void;
    assignClientRequest(req: any): void;
    assignRequest(req: any): void;
    assignResponse(res: any): void;
    emitRequest(): void;
    emitResponse(status: any, headers: any): void;
}

// lib/spdy/request.js
export namespace request {
    function onNewListener(type: string): void;
}

// lib/spdy/response.js
export namespace response {
    function writeHead(statusCode: number, reason: string, obj: object): void;
    function writeHead(statusCode: number, obj: object): void;
    function end(data: any, encoding: string, callback: () => void): void;
}

// lib/spdy/server.js
export namespace server {
    type Server = https.Server;
    type PlainServer = http.Server;
    type IncomingMessage = http.IncomingMessage;
    interface ServerResponse extends http.ServerResponse {
        push(filename: string, options: PushOptions): any;
    }
    function create(base: any,
                            options: https.ServerOptions,
                            handler: (request: IncomingMessage, response: ServerResponse | http.ServerResponse) => void): Server;
    function create(options: https.ServerOptions,
                            handler: (request: IncomingMessage, response: http.ServerResponse) => void): Server;
    function create(handler: (request: IncomingMessage, response: ServerResponse | http.ServerResponse) => void): Server;

    type Protocol =
        'h2'
            | 'spdy/3.1'
            | 'spdy/3'
            | 'spdy/2'
            | 'http/1.1'
            | 'http/1.0';

    interface PushOptions {
        status?: number | undefined;
        method?: string | undefined;
        request?: any;
        response?: any;
    }

    interface ServerOptions extends https.ServerOptions {
        spdy?: {
            protocols?: Protocol[] | undefined,
            plain?: boolean | undefined,
            'x-forwarded-for'?: boolean | undefined,
            connection?: {
                windowSize?: number | undefined,
                autoSpdy31?: boolean | undefined,
            } | undefined,
        } | undefined;
    }
}

// lib/spdy/socket.js
export namespace socket {
    // tslint:disable-next-line no-empty-interface
    interface Socket {} // net.Socket
}

// lib/spdy.js
export type Agent = agent.Agent;
export type PlainAgent = agent.PlainAgent;
export type AgentOptions = agent.AgentOptions;
export type Socket = socket.Socket;
export type Server = server.Server;
export type IncomingMessage = server.IncomingMessage;
export type ServerRequest = server.IncomingMessage;
export type ServerResponse = server.ServerResponse;
export type PlainServer = server.PlainServer;
export type ServerOptions = server.ServerOptions;
export function createAgent(base: any, options: AgentOptions): Agent | PlainAgent;
export function createAgent(options: AgentOptions): Agent | PlainAgent;
export function createServer(
    base: any,
    options: ServerOptions,
    handler: (request: IncomingMessage, response: http.ServerResponse) => void,
): Server;
export function createServer(
    options: ServerOptions,
    handler: (request: IncomingMessage, response: http.ServerResponse) => void,
): Server;
export function createServer(handler: (request: IncomingMessage, response: http.ServerResponse) => void): Server;
