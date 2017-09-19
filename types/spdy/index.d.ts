// Type definitions for node-spdy v3.4.3
// Project: https://github.com/indutny/node-spdy
// Definitions by: Anthony Trinh <https://github.com/tony19>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as http from 'http';
import * as https from 'https';

declare module "spdy" {
    // lib/spdy/agent.js
    namespace agent {
        export class Agent extends https.Agent {}
        export class PlainAgent extends http.Agent {}
        export function create(base: any, options: AgentOptions): Agent | PlainAgent;

        export interface AgentOptions extends https.AgentOptions {
            port?: number,
            spdy?: {
                plain?: boolean,
                ssl?: boolean,
                'x-forwarded-for'?: string,
                protocol?: string,
                protocols?: string[]
            };
        }
    }

    // lib/spdy/handle.js
    export interface Handle {
        create(options: Object, stream: any, socket: Socket): Handle;
        getStream(callback?: Function): any;
        assignSocket(socket: Socket, options: Object): void;
        assignClientRequest(req: any): void;
        assignRequest(req: any): void;
        assignResponse(res: any): void;
        emitRequest(): void;
        emitResponse(status: any, headers: any): void;
    }

    // lib/spdy/request.js
    namespace request {
        export function onNewListener(type: string): void;
    }

    // lib/spdy/response.js
    namespace response {
        export function writeHead(statusCode: number, reason: string, obj: Object): void;
        export function writeHead(statusCode: number, obj: Object): void;
        export function end(data: any, encoding: string, callback: Function): void;
    }

    // lib/spdy/server.js
    namespace server {
        export interface Server extends https.Server {}
        export interface PlainServer extends http.Server {}
        export interface IncomingMessage extends http.IncomingMessage {}
        export interface ServerResponse extends http.ServerResponse {
            push(filename: string, options: PushOptions): any;
        }
        export function create(base: any,
                               options: https.ServerOptions,
                               handler: (request: IncomingMessage, response: ServerResponse) => void): Server;
        export function create(options: https.ServerOptions,
                               handler: (request: IncomingMessage, response: ServerResponse) => void): Server;
        export function create(handler: (request: IncomingMessage, response: ServerResponse) => void): Server;

        export type Protocol =
            'h2'
                | 'spdy/3.1'
                | 'spdy/3'
                | 'spdy/2'
                | 'http/1.1'
                | 'http/1.0';

        export interface PushOptions {
            status?: number,
            method?: string,
            request?: any,
            response?: any
        }

        export interface ServerOptions extends https.ServerOptions {
            spdy?: {
                protocols?: Protocol[],
                plain?: boolean,
                'x-forwarded-for'?: boolean,
                connection?: {
                    windowSize?: number,
                    autoSpdy31?: boolean,
                },
            };
        }
    }

    // lib/spdy/socket.js
    namespace socket {
        export interface Socket {
            // net.Socket
        }
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
    export function createServer(base: any,
                                 options: ServerOptions,
                                 handler: (request: IncomingMessage, response: ServerResponse) => void): Server;
    export function createServer(options: ServerOptions,
                                 handler: (request: IncomingMessage, response: ServerResponse) => void): Server;
    export function createServer(handler: (request: IncomingMessage, response: ServerResponse) => void): Server;
}
