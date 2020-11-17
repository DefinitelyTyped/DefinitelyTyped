// Type definitions for non-npm package Node.js 13.13
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 Christian Vaagland Tellnes <https://github.com/tellnes>
//                 David Junger <https://github.com/touffy>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Marcin Kopacz <https://github.com/chyzwar>
//                 Trivikram Kamat <https://github.com/trivikr>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 Junxiao Shi <https://github.com/yoursunny>
//                 Ilia Baryshnikov <https://github.com/qwelias>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Surasak Chaisurin <https://github.com/Ryan-Willpower>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Buffer } from 'buffer';
import { Server as NetServer, Socket } from 'net';
import * as stream from 'stream';
import { URL } from 'url';

export {};

// incoming headers will never contain number
export interface IncomingHttpHeaders {
    'accept'?: string;
    'accept-language'?: string;
    'accept-patch'?: string;
    'accept-ranges'?: string;
    'access-control-allow-credentials'?: string;
    'access-control-allow-headers'?: string;
    'access-control-allow-methods'?: string;
    'access-control-allow-origin'?: string;
    'access-control-expose-headers'?: string;
    'access-control-max-age'?: string;
    'access-control-request-headers'?: string;
    'access-control-request-method'?: string;
    'age'?: string;
    'allow'?: string;
    'alt-svc'?: string;
    'authorization'?: string;
    'cache-control'?: string;
    'connection'?: string;
    'content-disposition'?: string;
    'content-encoding'?: string;
    'content-language'?: string;
    'content-length'?: string;
    'content-location'?: string;
    'content-range'?: string;
    'content-type'?: string;
    'cookie'?: string;
    'date'?: string;
    'expect'?: string;
    'expires'?: string;
    'forwarded'?: string;
    'from'?: string;
    'host'?: string;
    'if-match'?: string;
    'if-modified-since'?: string;
    'if-none-match'?: string;
    'if-unmodified-since'?: string;
    'last-modified'?: string;
    'location'?: string;
    'origin'?: string;
    'pragma'?: string;
    'proxy-authenticate'?: string;
    'proxy-authorization'?: string;
    'public-key-pins'?: string;
    'range'?: string;
    'referer'?: string;
    'retry-after'?: string;
    'set-cookie'?: string[];
    'strict-transport-security'?: string;
    'tk'?: string;
    'trailer'?: string;
    'transfer-encoding'?: string;
    'upgrade'?: string;
    'user-agent'?: string;
    'vary'?: string;
    'via'?: string;
    'warning'?: string;
    'www-authenticate'?: string;
    [key: string]: string | string[] | undefined;
}

// outgoing headers allows numbers (as they are converted internally to strings)
export interface OutgoingHttpHeaders {
    [key: string]: number | string | string[] | undefined;
}

export interface ClientRequestArgs {
    protocol?: string | null;
    host?: string | null;
    hostname?: string | null;
    family?: number;
    port?: number | string | null;
    defaultPort?: number | string;
    localAddress?: string;
    socketPath?: string;
    /**
     * @default 8192
     */
    maxHeaderSize?: number;
    method?: string;
    path?: string | null;
    headers?: OutgoingHttpHeaders;
    auth?: string | null;
    agent?: Agent | boolean;
    _defaultAgent?: Agent;
    timeout?: number;
    setHost?: boolean;
    // https://github.com/nodejs/node/blob/master/lib/_http_client.js#L278
    createConnection?: (options: ClientRequestArgs, oncreate: (err: Error, socket: Socket) => void) => Socket;
}

export interface ServerOptions {
    IncomingMessage?: typeof IncomingMessage;
    ServerResponse?: typeof ServerResponse;
    /**
     * Optionally overrides the value of
     * [`--max-http-header-size`][] for requests received by this server, i.e.
     * the maximum length of request headers in bytes.
     * @default 8192
     */
    maxHeaderSize?: number;
    /**
     * Use an insecure HTTP parser that accepts invalid HTTP headers when true.
     * Using the insecure parser should be avoided.
     * See --insecure-http-parser for more information.
     * @default false
     */
    insecureHTTPParser?: boolean;
}

export type RequestListener = (req: IncomingMessage, res: ServerResponse) => void;

export interface HttpBase {
    setTimeout(msecs?: number, callback?: () => void): this;
    setTimeout(callback: () => void): this;
    /**
     * Limits maximum incoming headers count. If set to 0, no limit will be applied.
     * @default 2000
     * {@link https://nodejs.org/api/http.html#http_server_maxheaderscount}
     */
    maxHeadersCount: number | null;
    timeout: number;
    /**
     * Limit the amount of time the parser will wait to receive the complete HTTP headers.
     * @default 60000
     * {@link https://nodejs.org/api/http.html#http_server_headerstimeout}
     */
    headersTimeout: number;
    keepAliveTimeout: number;
}

export interface Server extends HttpBase {}
export class Server extends NetServer {
    constructor(requestListener?: RequestListener);
    constructor(options: ServerOptions, requestListener?: RequestListener);
}

// https://github.com/nodejs/node/blob/master/lib/_http_outgoing.js
export class OutgoingMessage extends stream.Writable {
    upgrading: boolean;
    chunkedEncoding: boolean;
    shouldKeepAlive: boolean;
    useChunkedEncodingByDefault: boolean;
    sendDate: boolean;
    /**
     * @deprecated Use `writableEnded` instead.
     */
    finished: boolean;
    headersSent: boolean;
    /**
     * @deprecate Use `socket` instead.
     */
    connection: Socket;
    socket: Socket;

    constructor();

    setTimeout(msecs: number, callback?: () => void): this;
    setHeader(name: string, value: number | string | ReadonlyArray<string>): void;
    getHeader(name: string): number | string | string[] | undefined;
    getHeaders(): OutgoingHttpHeaders;
    getHeaderNames(): string[];
    hasHeader(name: string): boolean;
    removeHeader(name: string): void;
    addTrailers(headers: OutgoingHttpHeaders | ReadonlyArray<[string, string]>): void;
    flushHeaders(): void;
}

// https://github.com/nodejs/node/blob/master/lib/_http_server.js#L108-L256
export class ServerResponse extends OutgoingMessage {
    statusCode: number;
    statusMessage: string;

    constructor(req: IncomingMessage);

    assignSocket(socket: Socket): void;
    detachSocket(socket: Socket): void;
    // https://github.com/nodejs/node/blob/master/test/parallel/test-http-write-callbacks.js#L53
    // no args in writeContinue callback
    writeContinue(callback?: () => void): void;
    writeHead(statusCode: number, reasonPhrase?: string, headers?: OutgoingHttpHeaders): this;
    writeHead(statusCode: number, headers?: OutgoingHttpHeaders): this;
    writeProcessing(): void;
}

export interface InformationEvent {
    statusCode: number;
    statusMessage: string;
    httpVersion: string;
    httpVersionMajor: number;
    httpVersionMinor: number;
    headers: IncomingHttpHeaders;
    rawHeaders: string[];
}

// https://github.com/nodejs/node/blob/master/lib/_http_client.js#L77
export class ClientRequest extends OutgoingMessage {
    /**
     * @deprecate Use `socket` instead.
     */
    connection: Socket;
    socket: Socket;
    aborted: boolean;

    constructor(url: string | URL | ClientRequestArgs, cb?: (res: IncomingMessage) => void);

    method: string;
    path: string;
    abort(): void;
    onSocket(socket: Socket): void;
    setTimeout(timeout: number, callback?: () => void): this;
    setNoDelay(noDelay?: boolean): void;
    setSocketKeepAlive(enable?: boolean, initialDelay?: number): void;

    addListener(event: 'abort', listener: () => void): this;
    addListener(event: 'connect', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
    addListener(event: 'continue', listener: () => void): this;
    addListener(event: 'information', listener: (info: InformationEvent) => void): this;
    addListener(event: 'response', listener: (response: IncomingMessage) => void): this;
    addListener(event: 'socket', listener: (socket: Socket) => void): this;
    addListener(event: 'timeout', listener: () => void): this;
    addListener(event: 'upgrade', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
    addListener(event: 'close', listener: () => void): this;
    addListener(event: 'drain', listener: () => void): this;
    addListener(event: 'error', listener: (err: Error) => void): this;
    addListener(event: 'finish', listener: () => void): this;
    addListener(event: 'pipe', listener: (src: stream.Readable) => void): this;
    addListener(event: 'unpipe', listener: (src: stream.Readable) => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;

    on(event: 'abort', listener: () => void): this;
    on(event: 'connect', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
    on(event: 'continue', listener: () => void): this;
    on(event: 'information', listener: (info: InformationEvent) => void): this;
    on(event: 'response', listener: (response: IncomingMessage) => void): this;
    on(event: 'socket', listener: (socket: Socket) => void): this;
    on(event: 'timeout', listener: () => void): this;
    on(event: 'upgrade', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
    on(event: 'close', listener: () => void): this;
    on(event: 'drain', listener: () => void): this;
    on(event: 'error', listener: (err: Error) => void): this;
    on(event: 'finish', listener: () => void): this;
    on(event: 'pipe', listener: (src: stream.Readable) => void): this;
    on(event: 'unpipe', listener: (src: stream.Readable) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;

    once(event: 'abort', listener: () => void): this;
    once(event: 'connect', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
    once(event: 'continue', listener: () => void): this;
    once(event: 'information', listener: (info: InformationEvent) => void): this;
    once(event: 'response', listener: (response: IncomingMessage) => void): this;
    once(event: 'socket', listener: (socket: Socket) => void): this;
    once(event: 'timeout', listener: () => void): this;
    once(event: 'upgrade', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
    once(event: 'close', listener: () => void): this;
    once(event: 'drain', listener: () => void): this;
    once(event: 'error', listener: (err: Error) => void): this;
    once(event: 'finish', listener: () => void): this;
    once(event: 'pipe', listener: (src: stream.Readable) => void): this;
    once(event: 'unpipe', listener: (src: stream.Readable) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;

    prependListener(event: 'abort', listener: () => void): this;
    prependListener(event: 'connect', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
    prependListener(event: 'continue', listener: () => void): this;
    prependListener(event: 'information', listener: (info: InformationEvent) => void): this;
    prependListener(event: 'response', listener: (response: IncomingMessage) => void): this;
    prependListener(event: 'socket', listener: (socket: Socket) => void): this;
    prependListener(event: 'timeout', listener: () => void): this;
    prependListener(event: 'upgrade', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
    prependListener(event: 'close', listener: () => void): this;
    prependListener(event: 'drain', listener: () => void): this;
    prependListener(event: 'error', listener: (err: Error) => void): this;
    prependListener(event: 'finish', listener: () => void): this;
    prependListener(event: 'pipe', listener: (src: stream.Readable) => void): this;
    prependListener(event: 'unpipe', listener: (src: stream.Readable) => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

    prependOnceListener(event: 'abort', listener: () => void): this;
    prependOnceListener(event: 'connect', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
    prependOnceListener(event: 'continue', listener: () => void): this;
    prependOnceListener(event: 'information', listener: (info: InformationEvent) => void): this;
    prependOnceListener(event: 'response', listener: (response: IncomingMessage) => void): this;
    prependOnceListener(event: 'socket', listener: (socket: Socket) => void): this;
    prependOnceListener(event: 'timeout', listener: () => void): this;
    prependOnceListener(event: 'upgrade', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
    prependOnceListener(event: 'close', listener: () => void): this;
    prependOnceListener(event: 'drain', listener: () => void): this;
    prependOnceListener(event: 'error', listener: (err: Error) => void): this;
    prependOnceListener(event: 'finish', listener: () => void): this;
    prependOnceListener(event: 'pipe', listener: (src: stream.Readable) => void): this;
    prependOnceListener(event: 'unpipe', listener: (src: stream.Readable) => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
}

export class IncomingMessage extends stream.Readable {
    constructor(socket: Socket);

    aborted: boolean;
    httpVersion: string;
    httpVersionMajor: number;
    httpVersionMinor: number;
    complete: boolean;
    /**
     * @deprecate Use `socket` instead.
     */
    connection: Socket;
    socket: Socket;
    headers: IncomingHttpHeaders;
    rawHeaders: string[];
    trailers: { [key: string]: string | undefined };
    rawTrailers: string[];
    setTimeout(msecs: number, callback?: () => void): this;
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
    destroy(error?: Error): void;
}

export interface AgentOptions {
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
    /**
     * Socket timeout in milliseconds. This will set the timeout after the socket is connected.
     */
    timeout?: number;
}

export class Agent {
    maxFreeSockets: number;
    maxSockets: number;
    readonly sockets: { readonly [key: string]: Socket[] | undefined };
    readonly requests: { readonly [key: string]: IncomingMessage[] | undefined };

    constructor(opts?: AgentOptions);

    /**
     * Destroy any sockets that are currently in use by the agent.
     * It is usually not necessary to do this. However, if you are using an agent with KeepAlive enabled,
     * then it is best to explicitly shut down the agent when you know that it will no longer be used. Otherwise,
     * sockets may hang open for quite a long time before the server terminates them.
     */
    destroy(): void;
}

export const METHODS: string[];

export const STATUS_CODES: {
    [errorCode: number]: string | undefined;
    [errorCode: string]: string | undefined;
};

export function createServer(requestListener?: RequestListener): Server;
export function createServer(options: ServerOptions, requestListener?: RequestListener): Server;

// although RequestOptions are passed as ClientRequestArgs to ClientRequest directly,
// create interface RequestOptions would make the naming more clear to developers
export interface RequestOptions extends ClientRequestArgs { }
export function request(options: RequestOptions | string | URL, callback?: (res: IncomingMessage) => void): ClientRequest;
export function request(url: string | URL, options: RequestOptions, callback?: (res: IncomingMessage) => void): ClientRequest;
export function get(options: RequestOptions | string | URL, callback?: (res: IncomingMessage) => void): ClientRequest;
export function get(url: string | URL, options: RequestOptions, callback?: (res: IncomingMessage) => void): ClientRequest;
export let globalAgent: Agent;

/**
 * Read-only property specifying the maximum allowed size of HTTP headers in bytes.
 * Defaults to 16KB. Configurable using the [`--max-http-header-size`][] CLI option.
 */
export const maxHeaderSize: number;
