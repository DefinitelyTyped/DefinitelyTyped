// Type definitions for Node.js 10.17
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
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
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
//                 Jeremie Rodriguez <https://github.com/jeremiergz>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as net from 'net';
import * as stream from 'stream';
import { URL } from 'url';

export {};

// incoming headers will never contain number
export interface IncomingHttpHeaders {
    'accept-patch'?: string;
    'accept-ranges'?: string;
    'accept'?: string;
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
    [header: string]: string | string[] | undefined;
}

// outgoing headers allows numbers (as they are converted internally to strings)
export interface OutgoingHttpHeaders {
    [header: string]: number | string | string[] | undefined;
}

export interface ClientRequestArgs {
    protocol?: string;
    host?: string;
    hostname?: string;
    family?: number;
    port?: number | string;
    defaultPort?: number | string;
    localAddress?: string;
    socketPath?: string;
    method?: string;
    path?: string;
    headers?: OutgoingHttpHeaders;
    auth?: string;
    agent?: Agent | boolean;
    _defaultAgent?: Agent;
    timeout?: number;
    setHost?: boolean;
    // https://github.com/nodejs/node/blob/master/lib/_http_client.js#L278
    createConnection?: (options: ClientRequestArgs, oncreate: (err: Error, socket: net.Socket) => void) => net.Socket;
}

export interface ServerOptions {
    IncomingMessage?: typeof IncomingMessage;
    ServerResponse?: typeof ServerResponse;
}

export type RequestListener = (req: IncomingMessage, res: ServerResponse) => void;

export class Server extends net.Server {
    constructor(requestListener?: RequestListener);
    constructor(options: ServerOptions, requestListener?: RequestListener);

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
     * @default 40000
     * {@link https://nodejs.org/api/http.html#http_server_headerstimeout}
     */
    headersTimeout: number;
    keepAliveTimeout: number;
}

// https://github.com/nodejs/node/blob/master/lib/_http_outgoing.js
export class OutgoingMessage extends stream.Writable {
    upgrading: boolean;
    chunkedEncoding: boolean;
    shouldKeepAlive: boolean;
    useChunkedEncodingByDefault: boolean;
    sendDate: boolean;
    finished: boolean;
    headersSent: boolean;
    connection: net.Socket;

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

    assignSocket(socket: net.Socket): void;
    detachSocket(socket: net.Socket): void;
    // https://github.com/nodejs/node/blob/master/test/parallel/test-http-write-callbacks.js#L53
    // no args in writeContinue callback
    writeContinue(callback?: () => void): void;
    writeHead(statusCode: number, reasonPhrase?: string, headers?: OutgoingHttpHeaders): void;
    writeHead(statusCode: number, headers?: OutgoingHttpHeaders): void;
}

// https://github.com/nodejs/node/blob/master/lib/_http_client.js#L77
export class ClientRequest extends OutgoingMessage {
    connection: net.Socket;
    socket: net.Socket;
    aborted: number;

    constructor(url: string | URL | ClientRequestArgs, cb?: (res: IncomingMessage) => void);

    method: string;
    path: string;
    abort(): void;
    onSocket(socket: net.Socket): void;
    setTimeout(timeout: number, callback?: () => void): this;
    setNoDelay(noDelay?: boolean): void;
    setSocketKeepAlive(enable?: boolean, initialDelay?: number): void;
}

export class IncomingMessage extends stream.Readable {
    constructor(socket: net.Socket);

    aborted: boolean;
    httpVersion: string;
    httpVersionMajor: number;
    httpVersionMinor: number;
    connection: net.Socket;
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
    socket: net.Socket;
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

export const METHODS: string[];

export const STATUS_CODES: {
    [errorCode: number]: string | undefined;
    [errorCode: string]: string | undefined;
};

export function createServer(requestListener?: RequestListener): Server;
export function createServer(options: ServerOptions, requestListener?: RequestListener): Server;
export function createClient(port?: number, host?: string): any;

// although RequestOptions are passed as ClientRequestArgs to ClientRequest directly,
// create interface RequestOptions would make the naming more clear to developers
export interface RequestOptions extends ClientRequestArgs { }
export function request(options: RequestOptions | string | URL, callback?: (res: IncomingMessage) => void): ClientRequest;
export function request(url: string | URL, options: RequestOptions, callback?: (res: IncomingMessage) => void): ClientRequest;
export function get(options: RequestOptions | string | URL, callback?: (res: IncomingMessage) => void): ClientRequest;
export function get(url: string | URL, options: RequestOptions, callback?: (res: IncomingMessage) => void): ClientRequest;
export let globalAgent: Agent;
