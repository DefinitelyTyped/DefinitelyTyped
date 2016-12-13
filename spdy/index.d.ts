// Type definitions for node-spdy v3.4.3
// Project: https://github.com/indutny/node-spdy
// Definitions by: Anthony Trinh <https://github.com/tony19>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "spdy" {
    // lib/spdy/agent.js
    namespace agent {
        export class Agent extends node.https.Agent {}
        export class PlainAgent extends node.http.Agent {}
        export function create(base: any, options: AgentOptions): Agent | PlainAgent;

        export interface AgentOptions extends node.https.AgentOptions {
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
        export interface Server extends node.https.Server {}
        export interface PlainServer extends node.http.Server {}
        export interface IncomingMessage extends node.http.IncomingMessage {}
        export interface ServerResponse extends node.http.ServerResponse {
            push(filename: string, options: PushOptions): any;
        }
        export function create(base: any,
                               options: node.https.ServerOptions,
                               handler: (request: IncomingMessage, response: ServerResponse) => void): Server;
        export function create(options: node.https.ServerOptions,
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

        export interface ServerOptions extends node.https.ServerOptions {
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

    // copied from definitions of Node 6.7.0
    namespace node {
        namespace http {
            interface Server extends net.Server {
                setTimeout(msecs: number, callback: Function): any;

                maxHeadersCount: number;
                timeout: number;
                listening: boolean;
            }

            interface AgentOptions {
                /**
                 * Keep sockets around in a pool to be used by other requests in the future. Default = false
                 */
                keepAlive?: boolean;
                /**
                 * When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
                 * Only relevant if keepAlive is set to true.
                 */
                keepAliveMsecs?: number;
                /**
                 * Maximum number of sockets to allow per host. Default for Node 0.10 is 5, default for Node 0.12 is Infinity
                 */
                maxSockets?: number;
                /**
                 * Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Default = 256.
                 */
                maxFreeSockets?: number;
            }

            class Agent {
                maxSockets: number;
                sockets: any;
                requests: any;

                constructor(opts?: AgentOptions);

                /**
                 * Destroy any sockets that are currently in use by the agent.
                 * It is usually not necessary to do this. However, if you are using an agent with KeepAlive enabled,
                 * then it is best to explicitly shut down the agent when you know that it will no longer be used. Otherwise,
                 * sockets may hang open for quite a long time before the server terminates them.
                 */
                destroy(): void;
            }

            export interface IncomingMessage {
                path: string;
                httpVersion: string;
                httpVersionMajor: number;
                httpVersionMinor: number;
                connection: any;
                headers: any;
                rawHeaders: string[];
                trailers: any;
                rawTrailers: any;
                setTimeout(msecs: number, callback: Function): any;
                /**
                 * Only valid for request obtained from http.Server.
                 */
                method?: string;
                /**
                 * Only valid for request obtained from http.Server.
                 */
                url?: string;
                /**
                 * Only valid for response obtained from http.ClientRequest.
                 */
                statusCode?: number;
                /**
                 * Only valid for response obtained from http.ClientRequest.
                 */
                statusMessage?: string;
                socket: any;
                destroy(error?: Error): void;
                get(name: string): string;
            }

            export interface ServerResponse {
                // Extended base methods
                write(buffer: any): boolean;
                write(buffer: any, cb?: Function): boolean;
                write(str: string, cb?: Function): boolean;
                write(str: string, encoding?: string, cb?: Function): boolean;
                write(str: string, encoding?: string, fd?: string): boolean;

                writeContinue(): void;
                writeHead(statusCode: number, reasonPhrase?: string, headers?: any): void;
                writeHead(statusCode: number, headers?: any): void;
                statusCode: number;
                statusMessage: string;
                headersSent: boolean;
                setHeader(name: string, value: string | string[]): void;
                setTimeout(msecs: number, callback: Function): ServerResponse;
                sendDate: boolean;
                getHeader(name: string): string;
                removeHeader(name: string): void;
                write(chunk: any, encoding?: string): any;
                addTrailers(headers: any): void;
                finished: boolean;

                // Extended base methods
                end(): void;
                end(buffer: any, cb?: Function): void;
                end(str: string, cb?: Function): void;
                end(str: string, encoding?: string, cb?: Function): void;
                end(data?: any, encoding?: string): void;
            }
        }

        namespace https {
            interface Server extends tls.Server {
                close(callback?: Function): Server;
            }

            interface ServerOptions {
                pfx?: any;
                key?: any;
                passphrase?: string;
                cert?: any;
                ca?: any;
                crl?: any;
                ciphers?: string;
                honorCipherOrder?: boolean;
                requestCert?: boolean;
                rejectUnauthorized?: boolean;
                NPNProtocols?: any;
                SNICallback?: (servername: string, cb: (err: Error, ctx: tls.SecureContext) => any) => any;
            }

            class Agent extends http.Agent {}

            interface AgentOptions extends http.AgentOptions {
                pfx?: any;
                key?: any;
                passphrase?: string;
                cert?: any;
                ca?: any;
                ciphers?: string;
                rejectUnauthorized?: boolean;
                secureProtocol?: string;
                maxCachedSessions?: number;
            }
        }

        namespace tls {
            interface Server extends net.Server {
                close(): Server;
                address(): { port: number; family: string; address: string; };
                addContext(hostName: string, credentials: {
                    key: string;
                    cert: string;
                    ca: string;
                }): void;
                maxConnections: number;
                connections: number;

                /**
                 * events.EventEmitter
                 * 1. tlsClientError
                 * 2. newSession
                 * 3. OCSPRequest
                 * 4. resumeSession
                 * 5. secureConnection
                 **/
                addListener(event: string, listener: Function): this;
                addListener(event: "tlsClientError", listener: (err: Error, tlsSocket: any) => void): this;
                addListener(event: "newSession", listener: (sessionId: any, sessionData: any, callback: (err: Error, resp: any) => void) => void): this;
                addListener(event: "OCSPRequest", listener: (certificate: any, issuer: any, callback: Function) => void): this;
                addListener(event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void): this;
                addListener(event: "secureConnection", listener: (tlsSocket: any) => void): this;

                emit(event: string, ...args: any[]): boolean;
                emit(event: "tlsClientError", err: Error, tlsSocket: any): boolean;
                emit(event: "newSession", sessionId: any, sessionData: any, callback: (err: Error, resp: any) => void): boolean;
                emit(event: "OCSPRequest", certificate: any, issuer: any, callback: Function): boolean;
                emit(event: "resumeSession", sessionId: any, callback: (err: Error, sessionData: any) => void): boolean;
                emit(event: "secureConnection", tlsSocket: any): boolean;

                on(event: string, listener: Function): this;
                on(event: "tlsClientError", listener: (err: Error, tlsSocket: any) => void): this;
                on(event: "newSession", listener: (sessionId: any, sessionData: any, callback: (err: Error, resp: any) => void) => void): this;
                on(event: "OCSPRequest", listener: (certificate: any, issuer: any, callback: Function) => void): this;
                on(event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void): this;
                on(event: "secureConnection", listener: (tlsSocket: any) => void): this;

                once(event: string, listener: Function): this;
                once(event: "tlsClientError", listener: (err: Error, tlsSocket: any) => void): this;
                once(event: "newSession", listener: (sessionId: any, sessionData: any, callback: (err: Error, resp: any) => void) => void): this;
                once(event: "OCSPRequest", listener: (certificate: any, issuer: any, callback: Function) => void): this;
                once(event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void): this;
                once(event: "secureConnection", listener: (tlsSocket: any) => void): this;

                prependListener(event: string, listener: Function): this;
                prependListener(event: "tlsClientError", listener: (err: Error, tlsSocket: any) => void): this;
                prependListener(event: "newSession", listener: (sessionId: any, sessionData: any, callback: (err: Error, resp: any) => void) => void): this;
                prependListener(event: "OCSPRequest", listener: (certificate: any, issuer: any, callback: Function) => void): this;
                prependListener(event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void): this;
                prependListener(event: "secureConnection", listener: (tlsSocket: any) => void): this;

                prependOnceListener(event: string, listener: Function): this;
                prependOnceListener(event: "tlsClientError", listener: (err: Error, tlsSocket: any) => void): this;
                prependOnceListener(event: "newSession", listener: (sessionId: any, sessionData: any, callback: (err: Error, resp: any) => void) => void): this;
                prependOnceListener(event: "OCSPRequest", listener: (certificate: any, issuer: any, callback: Function) => void): this;
                prependOnceListener(event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void): this;
                prependOnceListener(event: "secureConnection", listener: (tlsSocket: any) => void): this;
            }

            interface SecureContext {
                context: any;
            }
        }

        namespace net {
            interface Server {
                // net.Server
                listen(port: number, hostname?: string, backlog?: number, listeningListener?: Function): Server;
                listen(port: number, hostname?: string, listeningListener?: Function): Server;
                listen(port: number, backlog?: number, listeningListener?: Function): Server;
                listen(port: number, listeningListener?: Function): Server;
                listen(path: string, backlog?: number, listeningListener?: Function): Server;
                listen(path: string, listeningListener?: Function): Server;
                listen(handle: any, backlog?: number, listeningListener?: Function): Server;
                listen(handle: any, listeningListener?: Function): Server;
                listen(options: ListenOptions, listeningListener?: Function): Server;

                close(callback?: Function): Server;

                address(): { port: number; family: string; address: string; };

                getConnections(cb: (error: Error, count: number) => void): void;

                ref(): Server;

                unref(): Server;

                maxConnections: number;
                connections: number;

                /**
                 * events.EventEmitter
                 *   1. close
                 *   2. connection
                 *   3. error
                 *   4. listening
                 */
                addListener(event: string, listener: Function): this;
                addListener(event: "close", listener: () => void): this;
                addListener(event: "connection", listener: (socket: Socket) => void): this;
                addListener(event: "error", listener: (err: Error) => void): this;
                addListener(event: "listening", listener: () => void): this;

                emit(event: string, ...args: any[]): boolean;
                emit(event: "close"): boolean;
                emit(event: "connection", socket: Socket): boolean;
                emit(event: "error", err: Error): boolean;
                emit(event: "listening"): boolean;

                on(event: string, listener: Function): this;
                on(event: "close", listener: () => void): this;
                on(event: "connection", listener: (socket: Socket) => void): this;
                on(event: "error", listener: (err: Error) => void): this;
                on(event: "listening", listener: () => void): this;

                once(event: string, listener: Function): this;
                once(event: "close", listener: () => void): this;
                once(event: "connection", listener: (socket: Socket) => void): this;
                once(event: "error", listener: (err: Error) => void): this;
                once(event: "listening", listener: () => void): this;

                prependListener(event: string, listener: Function): this;
                prependListener(event: "close", listener: () => void): this;
                prependListener(event: "connection", listener: (socket: Socket) => void): this;
                prependListener(event: "error", listener: (err: Error) => void): this;
                prependListener(event: "listening", listener: () => void): this;

                prependOnceListener(event: string, listener: Function): this;
                prependOnceListener(event: "close", listener: () => void): this;
                prependOnceListener(event: "connection", listener: (socket: Socket) => void): this;
                prependOnceListener(event: "error", listener: (err: Error) => void): this;
                prependOnceListener(event: "listening", listener: () => void): this;
            }

            interface ListenOptions {
                port?: number;
                host?: string;
                backlog?: number;
                path?: string;
                exclusive?: boolean;
            }
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
