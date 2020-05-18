declare module "http2" {
    import * as events from "events";
    import * as fs from "fs";
    import * as net from "net";
    import * as stream from "stream";
    import * as tls from "tls";
    import * as url from "url";

    import { IncomingHttpHeaders as Http1IncomingHttpHeaders, OutgoingHttpHeaders, IncomingMessage, ServerResponse } from "http";
    export { OutgoingHttpHeaders } from "http";

    export interface IncomingHttpStatusHeader {
        ":status"?: number;
    }

    export interface IncomingHttpHeaders extends Http1IncomingHttpHeaders {
        ":path"?: string;
        ":method"?: string;
        ":authority"?: string;
        ":scheme"?: string;
    }

    // Http2Stream

    export interface StreamPriorityOptions {
        exclusive?: boolean;
        parent?: number;
        weight?: number;
        silent?: boolean;
    }

    export interface StreamState {
        localWindowSize?: number;
        state?: number;
        localClose?: number;
        remoteClose?: number;
        sumDependencyWeight?: number;
        weight?: number;
    }

    export interface ServerStreamResponseOptions {
        endStream?: boolean;
        waitForTrailers?: boolean;
    }

    export interface StatOptions {
        offset: number;
        length: number;
    }

    export interface ServerStreamFileResponseOptions {
        statCheck?(stats: fs.Stats, headers: OutgoingHttpHeaders, statOptions: StatOptions): void | boolean;
        waitForTrailers?: boolean;
        offset?: number;
        length?: number;
    }

    export interface ServerStreamFileResponseOptionsWithError extends ServerStreamFileResponseOptions {
        onError?(err: NodeJS.ErrnoException): void;
    }

    interface Http2StreamEventMap extends stream.DuplexEventMap {
        "aborted": () => void;
        "data": (chunk: Buffer | string) => void;
        "frameError": (frameType: number, errorCode: number) => void;
        "streamClosed": (code: number) => void;
        "timeout": () => void;
        "trailers": (trailers: IncomingHttpHeaders, flags: number) => void;
        "wantTrailers": () => void;
    }

    export interface Http2Stream extends stream.Duplex {
        readonly aborted: boolean;
        readonly bufferSize: number;
        readonly closed: boolean;
        readonly destroyed: boolean;
        /**
         * Set the true if the END_STREAM flag was set in the request or response HEADERS frame received,
         * indicating that no additional data should be received and the readable side of the Http2Stream will be closed.
         */
        readonly endAfterHeaders: boolean;
        readonly id?: number;
        readonly pending: boolean;
        readonly rstCode: number;
        readonly sentHeaders: OutgoingHttpHeaders;
        readonly sentInfoHeaders?: OutgoingHttpHeaders[];
        readonly sentTrailers?: OutgoingHttpHeaders;
        readonly session: Http2Session;
        readonly state: StreamState;

        close(code?: number, callback?: () => void): void;
        priority(options: StreamPriorityOptions): void;
        setTimeout(msecs: number, callback?: () => void): void;
        sendTrailers(headers: OutgoingHttpHeaders): void;

        addListener<K extends keyof Http2StreamEventMap>(event: K, listener: Http2StreamEventMap[K]): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit<K extends keyof Http2StreamEventMap>(event: K, ...args: Http2StreamEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on<K extends keyof Http2StreamEventMap>(event: K, listener: Http2StreamEventMap[K]): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once<K extends keyof Http2StreamEventMap>(event: K, listener: Http2StreamEventMap[K]): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener<K extends keyof Http2StreamEventMap>(event: K, listener: Http2StreamEventMap[K]): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener<K extends keyof Http2StreamEventMap>(event: K, listener: Http2StreamEventMap[K]): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener<K extends keyof Http2StreamEventMap>(event: K, listener: Http2StreamEventMap[K]): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off<K extends keyof Http2StreamEventMap>(event: K, listener: Http2StreamEventMap[K]): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;

        listeners<K extends keyof Http2StreamEventMap>(event: K): Array<Http2StreamEventMap[K]>;
        listeners(event: string | symbol): Function[];
    }

    interface ClientHttp2StreamEventMap extends Http2StreamEventMap {
        "continue": () => void;
        "headers": (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void;
        "push": (headers: IncomingHttpHeaders, flags: number) => void;
        "response": (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void;
    }

    export interface ClientHttp2Stream extends Http2Stream {
        addListener<K extends keyof ClientHttp2StreamEventMap>(event: K, listener: ClientHttp2StreamEventMap[K]): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit<K extends keyof ClientHttp2StreamEventMap>(event: K, ...args: ClientHttp2StreamEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on<K extends keyof ClientHttp2StreamEventMap>(event: K, listener: ClientHttp2StreamEventMap[K]): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once<K extends keyof ClientHttp2StreamEventMap>(event: K, listener: ClientHttp2StreamEventMap[K]): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener<K extends keyof ClientHttp2StreamEventMap>(event: K, listener: ClientHttp2StreamEventMap[K]): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener<K extends keyof ClientHttp2StreamEventMap>(event: K, listener: ClientHttp2StreamEventMap[K]): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener<K extends keyof ClientHttp2StreamEventMap>(event: K, listener: ClientHttp2StreamEventMap[K]): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off<K extends keyof ClientHttp2StreamEventMap>(event: K, listener: ClientHttp2StreamEventMap[K]): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;

        listeners<K extends keyof ClientHttp2StreamEventMap>(event: K): Array<ClientHttp2StreamEventMap[K]>;
        listeners(event: string | symbol): Function[];
    }

    export interface ServerHttp2Stream extends Http2Stream {
        readonly headersSent: boolean;
        readonly pushAllowed: boolean;
        additionalHeaders(headers: OutgoingHttpHeaders): void;
        pushStream(headers: OutgoingHttpHeaders, callback?: (err: Error | null, pushStream: ServerHttp2Stream, headers: OutgoingHttpHeaders) => void): void;
        pushStream(headers: OutgoingHttpHeaders, options?: StreamPriorityOptions, callback?: (err: Error | null, pushStream: ServerHttp2Stream, headers: OutgoingHttpHeaders) => void): void;
        respond(headers?: OutgoingHttpHeaders, options?: ServerStreamResponseOptions): void;
        respondWithFD(fd: number | fs.promises.FileHandle, headers?: OutgoingHttpHeaders, options?: ServerStreamFileResponseOptions): void;
        respondWithFile(path: string, headers?: OutgoingHttpHeaders, options?: ServerStreamFileResponseOptionsWithError): void;
    }

    // Http2Session

    export interface Settings {
        headerTableSize?: number;
        enablePush?: boolean;
        initialWindowSize?: number;
        maxFrameSize?: number;
        maxConcurrentStreams?: number;
        maxHeaderListSize?: number;
        enableConnectProtocol?: boolean;
    }

    export interface ClientSessionRequestOptions {
        endStream?: boolean;
        exclusive?: boolean;
        parent?: number;
        weight?: number;
        waitForTrailers?: boolean;
    }

    export interface SessionState {
        effectiveLocalWindowSize?: number;
        effectiveRecvDataLength?: number;
        nextStreamID?: number;
        localWindowSize?: number;
        lastProcStreamID?: number;
        remoteWindowSize?: number;
        outboundQueueSize?: number;
        deflateDynamicTableSize?: number;
        inflateDynamicTableSize?: number;
    }

    interface Http2SessionEventMap {
        "close": () => void;
        "error": (err: Error) => void;
        "frameError": (frameType: number, errorCode: number, streamID: number) => void;
        "goaway": (errorCode: number, lastStreamID: number, opaqueData: Buffer) => void;
        "localSettings": (settings: Settings) => void;
        "ping": () => void;
        "remoteSettings": (settings: Settings) => void;
        "timeout": () => void;
    }

    export interface Http2Session extends events.EventEmitter {
        readonly alpnProtocol?: string;
        readonly closed: boolean;
        readonly connecting: boolean;
        readonly destroyed: boolean;
        readonly encrypted?: boolean;
        readonly localSettings: Settings;
        readonly originSet?: string[];
        readonly pendingSettingsAck: boolean;
        readonly remoteSettings: Settings;
        readonly socket: net.Socket | tls.TLSSocket;
        readonly state: SessionState;
        readonly type: number;

        close(callback?: () => void): void;
        destroy(error?: Error, code?: number): void;
        goaway(code?: number, lastStreamID?: number, opaqueData?: NodeJS.ArrayBufferView): void;
        ping(callback: (err: Error | null, duration: number, payload: Buffer) => void): boolean;
        ping(payload: NodeJS.ArrayBufferView, callback: (err: Error | null, duration: number, payload: Buffer) => void): boolean;
        ref(): void;
        setTimeout(msecs: number, callback?: () => void): void;
        settings(settings: Settings): void;
        unref(): void;

        addListener<K extends keyof Http2SessionEventMap>(event: K, listener: Http2SessionEventMap[K]): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit<K extends keyof Http2SessionEventMap>(event: K, ...args: Http2SessionEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on<K extends keyof Http2SessionEventMap>(event: K, listener: Http2SessionEventMap[K]): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once<K extends keyof Http2SessionEventMap>(event: K, listener: Http2SessionEventMap[K]): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener<K extends keyof Http2SessionEventMap>(event: K, listener: Http2SessionEventMap[K]): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener<K extends keyof Http2SessionEventMap>(event: K, listener: Http2SessionEventMap[K]): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener<K extends keyof Http2SessionEventMap>(event: K, listener: Http2SessionEventMap[K]): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off<K extends keyof Http2SessionEventMap>(event: K, listener: Http2SessionEventMap[K]): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;

        listeners<K extends keyof Http2SessionEventMap>(event: K): Array<Http2SessionEventMap[K]>;
        listeners(event: string | symbol): Function[];
    }

    interface ClientHttp2SessionEventMap extends Http2SessionEventMap {
        "altsvc": (alt: string, origin: string, stream: number) => void;
        "origin": (origins: string[]) => void;
        "connect": (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void;
        "stream": (stream: ClientHttp2Stream, headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void;
    }

    export interface ClientHttp2Session extends Http2Session {
        request(headers?: OutgoingHttpHeaders, options?: ClientSessionRequestOptions): ClientHttp2Stream;

        addListener<K extends keyof ClientHttp2SessionEventMap>(event: K, listener: ClientHttp2SessionEventMap[K]): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit<K extends keyof ClientHttp2SessionEventMap>(event: K, ...args: ClientHttp2SessionEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on<K extends keyof ClientHttp2SessionEventMap>(event: K, listener: ClientHttp2SessionEventMap[K]): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once<K extends keyof ClientHttp2SessionEventMap>(event: K, listener: ClientHttp2SessionEventMap[K]): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener<K extends keyof ClientHttp2SessionEventMap>(event: K, listener: ClientHttp2SessionEventMap[K]): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener<K extends keyof ClientHttp2SessionEventMap>(event: K, listener: ClientHttp2SessionEventMap[K]): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener<K extends keyof ClientHttp2SessionEventMap>(event: K, listener: ClientHttp2SessionEventMap[K]): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off<K extends keyof ClientHttp2SessionEventMap>(event: K, listener: ClientHttp2SessionEventMap[K]): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;

        listeners<K extends keyof ClientHttp2SessionEventMap>(event: K): Array<ClientHttp2SessionEventMap[K]>;
        listeners(event: string | symbol): Function[];
    }

    export interface AlternativeServiceOptions {
        origin: number | string | url.URL;
    }

    interface ServerHttp2SessionEventMap extends Http2SessionEventMap {
        "connect": (session: ServerHttp2Session, socket: net.Socket | tls.TLSSocket) => void;
        "stream": (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void;
    }

    export interface ServerHttp2Session extends Http2Session {
        readonly server: Http2Server | Http2SecureServer;

        altsvc(alt: string, originOrStream: number | string | url.URL | AlternativeServiceOptions): void;
        origin(...args: Array<string | url.URL | { origin: string }>): void;

        addListener<K extends keyof ServerHttp2SessionEventMap>(event: K, listener: ServerHttp2SessionEventMap[K]): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit<K extends keyof ServerHttp2SessionEventMap>(event: K, ...args: ServerHttp2SessionEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on<K extends keyof ServerHttp2SessionEventMap>(event: K, listener: ServerHttp2SessionEventMap[K]): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once<K extends keyof ServerHttp2SessionEventMap>(event: K, listener: ServerHttp2SessionEventMap[K]): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener<K extends keyof ServerHttp2SessionEventMap>(event: K, listener: ServerHttp2SessionEventMap[K]): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener<K extends keyof ServerHttp2SessionEventMap>(event: K, listener: ServerHttp2SessionEventMap[K]): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener<K extends keyof ServerHttp2SessionEventMap>(event: K, listener: ServerHttp2SessionEventMap[K]): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off<K extends keyof ServerHttp2SessionEventMap>(event: K, listener: ServerHttp2SessionEventMap[K]): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;

        listeners<K extends keyof ServerHttp2SessionEventMap>(event: K): Array<ServerHttp2SessionEventMap[K]>;
        listeners(event: string | symbol): Function[];
    }

    // Http2Server

    export interface SessionOptions {
        maxDeflateDynamicTableSize?: number;
        maxSessionMemory?: number;
        maxHeaderListPairs?: number;
        maxOutstandingPings?: number;
        maxSendHeaderBlockLength?: number;
        paddingStrategy?: number;
        peerMaxConcurrentStreams?: number;
        settings?: Settings;

        selectPadding?(frameLen: number, maxFrameLen: number): number;
        createConnection?(authority: url.URL, option: SessionOptions): stream.Duplex;
    }

    export interface ClientSessionOptions extends SessionOptions {
        maxReservedRemoteStreams?: number;
        createConnection?: (authority: url.URL, option: SessionOptions) => stream.Duplex;
        protocol?: 'http:' | 'https:';
    }

    export interface ServerSessionOptions extends SessionOptions {
        Http1IncomingMessage?: typeof IncomingMessage;
        Http1ServerResponse?: typeof ServerResponse;
        Http2ServerRequest?: typeof Http2ServerRequest;
        Http2ServerResponse?: typeof Http2ServerResponse;
    }

    export interface SecureClientSessionOptions extends ClientSessionOptions, tls.ConnectionOptions { }
    export interface SecureServerSessionOptions extends ServerSessionOptions, tls.TlsOptions { }

    export interface ServerOptions extends ServerSessionOptions { }

    export interface SecureServerOptions extends SecureServerSessionOptions {
        allowHTTP1?: boolean;
        origins?: string[];
    }

    interface Http2ServerEventMap extends net.ServerEventMap {
        "checkContinue": (request: Http2ServerRequest, response: Http2ServerResponse) => void;
        "request": (request: Http2ServerRequest, response: Http2ServerResponse) => void;
        "session": (session: ServerHttp2Session) => void;
        "sessionError": (err: Error) => void;
        "stream": (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void;
        "timeout": () => void;
    }

    export interface Http2Server extends net.Server {
        addListener<K extends keyof Http2ServerEventMap>(event: K, listener: Http2ServerEventMap[K]): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit<K extends keyof Http2ServerEventMap>(event: K, ...args: Http2ServerEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on<K extends keyof Http2ServerEventMap>(event: K, listener: Http2ServerEventMap[K]): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once<K extends keyof Http2ServerEventMap>(event: K, listener: Http2ServerEventMap[K]): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener<K extends keyof Http2ServerEventMap>(event: K, listener: Http2ServerEventMap[K]): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener<K extends keyof Http2ServerEventMap>(event: K, listener: Http2ServerEventMap[K]): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener<K extends keyof Http2ServerEventMap>(event: K, listener: Http2ServerEventMap[K]): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off<K extends keyof Http2ServerEventMap>(event: K, listener: Http2ServerEventMap[K]): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;

        listeners<K extends keyof Http2ServerEventMap>(event: K): Array<Http2ServerEventMap[K]>;
        listeners(event: string | symbol): Function[];

        setTimeout(msec?: number, callback?: () => void): this;
    }

    interface Http2SecureServerEventMap extends tls.ServerEventMap {
        "checkContinue": (request: Http2ServerRequest, response: Http2ServerResponse) => void;
        "request": (request: Http2ServerRequest, response: Http2ServerResponse) => void;
        "session": (session: ServerHttp2Session) => void;
        "sessionError": (err: Error) => void;
        "stream": (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void;
        "timeout": () => void;
        "unknownProtocol": (socket: tls.TLSSocket) => void;
    }

    export interface Http2SecureServer extends tls.Server {
        addListener<K extends keyof Http2SecureServerEventMap>(event: K, listener: Http2SecureServerEventMap[K]): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit<K extends keyof Http2SecureServerEventMap>(event: K, ...args: Http2SecureServerEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on<K extends keyof Http2SecureServerEventMap>(event: K, listener: Http2SecureServerEventMap[K]): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once<K extends keyof Http2SecureServerEventMap>(event: K, listener: Http2SecureServerEventMap[K]): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener<K extends keyof Http2SecureServerEventMap>(event: K, listener: Http2SecureServerEventMap[K]): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener<K extends keyof Http2SecureServerEventMap>(event: K, listener: Http2SecureServerEventMap[K]): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener<K extends keyof Http2SecureServerEventMap>(event: K, listener: Http2SecureServerEventMap[K]): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off<K extends keyof Http2SecureServerEventMap>(event: K, listener: Http2SecureServerEventMap[K]): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;

        listeners<K extends keyof Http2SecureServerEventMap>(event: K): Array<Http2SecureServerEventMap[K]>;
        listeners(event: string | symbol): Function[];

        setTimeout(msec?: number, callback?: () => void): this;
    }

    interface Http2ServerRequestEventMap extends stream.ReadableEventMap {
        "aborted": (hadError: boolean, code: number) => void;
    }

    export class Http2ServerRequest extends stream.Readable {
        constructor(stream: ServerHttp2Stream, headers: IncomingHttpHeaders, options: stream.ReadableOptions, rawHeaders: ReadonlyArray<string>);

        readonly aborted: boolean;
        readonly authority: string;
        readonly connection: net.Socket | tls.TLSSocket;
        readonly complete: boolean;
        readonly headers: IncomingHttpHeaders;
        readonly httpVersion: string;
        readonly httpVersionMinor: number;
        readonly httpVersionMajor: number;
        readonly method: string;
        readonly rawHeaders: string[];
        readonly rawTrailers: string[];
        readonly scheme: string;
        readonly socket: net.Socket | tls.TLSSocket;
        readonly stream: ServerHttp2Stream;
        readonly trailers: IncomingHttpHeaders;
        readonly url: string;

        setTimeout(msecs: number, callback?: () => void): void;
        read(size?: number): Buffer | string | null;

        addListener<K extends keyof Http2ServerRequestEventMap>(event: K, listener: Http2ServerRequestEventMap[K]): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit<K extends keyof Http2ServerRequestEventMap>(event: K, ...args: Http2ServerRequestEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on<K extends keyof Http2ServerRequestEventMap>(event: K, listener: Http2ServerRequestEventMap[K]): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once<K extends keyof Http2ServerRequestEventMap>(event: K, listener: Http2ServerRequestEventMap[K]): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener<K extends keyof Http2ServerRequestEventMap>(event: K, listener: Http2ServerRequestEventMap[K]): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener<K extends keyof Http2ServerRequestEventMap>(event: K, listener: Http2ServerRequestEventMap[K]): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener<K extends keyof Http2ServerRequestEventMap>(event: K, listener: Http2ServerRequestEventMap[K]): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off<K extends keyof Http2ServerRequestEventMap>(event: K, listener: Http2ServerRequestEventMap[K]): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;

        listeners<K extends keyof Http2ServerRequestEventMap>(event: K): Array<Http2ServerRequestEventMap[K]>;
        listeners(event: string | symbol): Function[];
    }

    interface Http2ServerResponseEventMap {
        "close": () => void;
        "drain": () => void;
        "error": (error: Error) => void;
        "finish": () => void;
        "pipe": (src: stream.Readable) => void;
        "unpipe": (src: stream.Readable) => void;
    }

    export class Http2ServerResponse extends stream.Stream {
        constructor(stream: ServerHttp2Stream);

        readonly connection: net.Socket | tls.TLSSocket;
        readonly finished: boolean;
        readonly headersSent: boolean;
        readonly socket: net.Socket | tls.TLSSocket;
        readonly stream: ServerHttp2Stream;
        sendDate: boolean;
        statusCode: number;
        statusMessage: '';
        addTrailers(trailers: OutgoingHttpHeaders): void;
        end(callback?: () => void): void;
        end(data: string | Uint8Array, callback?: () => void): void;
        end(data: string | Uint8Array, encoding: BufferEncoding, callback?: () => void): void;
        getHeader(name: string): string;
        getHeaderNames(): string[];
        getHeaders(): OutgoingHttpHeaders;
        hasHeader(name: string): boolean;
        removeHeader(name: string): void;
        setHeader(name: string, value: number | string | ReadonlyArray<string>): void;
        setTimeout(msecs: number, callback?: () => void): void;
        write(chunk: string | Uint8Array, callback?: (err: Error) => void): boolean;
        write(chunk: string | Uint8Array, encoding: BufferEncoding, callback?: (err: Error) => void): boolean;
        writeContinue(): void;
        writeHead(statusCode: number, headers?: OutgoingHttpHeaders): this;
        writeHead(statusCode: number, statusMessage: string, headers?: OutgoingHttpHeaders): this;
        createPushResponse(headers: OutgoingHttpHeaders, callback: (err: Error | null, res: Http2ServerResponse) => void): void;

        addListener<K extends keyof Http2ServerResponseEventMap>(event: K, listener: Http2ServerResponseEventMap[K]): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit<K extends keyof Http2ServerResponseEventMap>(event: K, ...args: Http2ServerResponseEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on<K extends keyof Http2ServerResponseEventMap>(event: K, listener: Http2ServerResponseEventMap[K]): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once<K extends keyof Http2ServerResponseEventMap>(event: K, listener: Http2ServerResponseEventMap[K]): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener<K extends keyof Http2ServerResponseEventMap>(event: K, listener: Http2ServerResponseEventMap[K]): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener<K extends keyof Http2ServerResponseEventMap>(event: K, listener: Http2ServerResponseEventMap[K]): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener<K extends keyof Http2ServerResponseEventMap>(event: K, listener: Http2ServerResponseEventMap[K]): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off<K extends keyof Http2ServerResponseEventMap>(event: K, listener: Http2ServerResponseEventMap[K]): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;

        listeners<K extends keyof Http2ServerResponseEventMap>(event: K): Array<Http2ServerResponseEventMap[K]>;
        listeners(event: string | symbol): Function[];
    }

    // Public API

    export namespace constants {
        const NGHTTP2_SESSION_SERVER: number;
        const NGHTTP2_SESSION_CLIENT: number;
        const NGHTTP2_STREAM_STATE_IDLE: number;
        const NGHTTP2_STREAM_STATE_OPEN: number;
        const NGHTTP2_STREAM_STATE_RESERVED_LOCAL: number;
        const NGHTTP2_STREAM_STATE_RESERVED_REMOTE: number;
        const NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL: number;
        const NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE: number;
        const NGHTTP2_STREAM_STATE_CLOSED: number;
        const NGHTTP2_NO_ERROR: number;
        const NGHTTP2_PROTOCOL_ERROR: number;
        const NGHTTP2_INTERNAL_ERROR: number;
        const NGHTTP2_FLOW_CONTROL_ERROR: number;
        const NGHTTP2_SETTINGS_TIMEOUT: number;
        const NGHTTP2_STREAM_CLOSED: number;
        const NGHTTP2_FRAME_SIZE_ERROR: number;
        const NGHTTP2_REFUSED_STREAM: number;
        const NGHTTP2_CANCEL: number;
        const NGHTTP2_COMPRESSION_ERROR: number;
        const NGHTTP2_CONNECT_ERROR: number;
        const NGHTTP2_ENHANCE_YOUR_CALM: number;
        const NGHTTP2_INADEQUATE_SECURITY: number;
        const NGHTTP2_HTTP_1_1_REQUIRED: number;
        const NGHTTP2_ERR_FRAME_SIZE_ERROR: number;
        const NGHTTP2_FLAG_NONE: number;
        const NGHTTP2_FLAG_END_STREAM: number;
        const NGHTTP2_FLAG_END_HEADERS: number;
        const NGHTTP2_FLAG_ACK: number;
        const NGHTTP2_FLAG_PADDED: number;
        const NGHTTP2_FLAG_PRIORITY: number;
        const DEFAULT_SETTINGS_HEADER_TABLE_SIZE: number;
        const DEFAULT_SETTINGS_ENABLE_PUSH: number;
        const DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE: number;
        const DEFAULT_SETTINGS_MAX_FRAME_SIZE: number;
        const MAX_MAX_FRAME_SIZE: number;
        const MIN_MAX_FRAME_SIZE: number;
        const MAX_INITIAL_WINDOW_SIZE: number;
        const NGHTTP2_DEFAULT_WEIGHT: number;
        const NGHTTP2_SETTINGS_HEADER_TABLE_SIZE: number;
        const NGHTTP2_SETTINGS_ENABLE_PUSH: number;
        const NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS: number;
        const NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE: number;
        const NGHTTP2_SETTINGS_MAX_FRAME_SIZE: number;
        const NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE: number;
        const PADDING_STRATEGY_NONE: number;
        const PADDING_STRATEGY_MAX: number;
        const PADDING_STRATEGY_CALLBACK: number;
        const HTTP2_HEADER_STATUS: string;
        const HTTP2_HEADER_METHOD: string;
        const HTTP2_HEADER_AUTHORITY: string;
        const HTTP2_HEADER_SCHEME: string;
        const HTTP2_HEADER_PATH: string;
        const HTTP2_HEADER_ACCEPT_CHARSET: string;
        const HTTP2_HEADER_ACCEPT_ENCODING: string;
        const HTTP2_HEADER_ACCEPT_LANGUAGE: string;
        const HTTP2_HEADER_ACCEPT_RANGES: string;
        const HTTP2_HEADER_ACCEPT: string;
        const HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN: string;
        const HTTP2_HEADER_AGE: string;
        const HTTP2_HEADER_ALLOW: string;
        const HTTP2_HEADER_AUTHORIZATION: string;
        const HTTP2_HEADER_CACHE_CONTROL: string;
        const HTTP2_HEADER_CONNECTION: string;
        const HTTP2_HEADER_CONTENT_DISPOSITION: string;
        const HTTP2_HEADER_CONTENT_ENCODING: string;
        const HTTP2_HEADER_CONTENT_LANGUAGE: string;
        const HTTP2_HEADER_CONTENT_LENGTH: string;
        const HTTP2_HEADER_CONTENT_LOCATION: string;
        const HTTP2_HEADER_CONTENT_MD5: string;
        const HTTP2_HEADER_CONTENT_RANGE: string;
        const HTTP2_HEADER_CONTENT_TYPE: string;
        const HTTP2_HEADER_COOKIE: string;
        const HTTP2_HEADER_DATE: string;
        const HTTP2_HEADER_ETAG: string;
        const HTTP2_HEADER_EXPECT: string;
        const HTTP2_HEADER_EXPIRES: string;
        const HTTP2_HEADER_FROM: string;
        const HTTP2_HEADER_HOST: string;
        const HTTP2_HEADER_IF_MATCH: string;
        const HTTP2_HEADER_IF_MODIFIED_SINCE: string;
        const HTTP2_HEADER_IF_NONE_MATCH: string;
        const HTTP2_HEADER_IF_RANGE: string;
        const HTTP2_HEADER_IF_UNMODIFIED_SINCE: string;
        const HTTP2_HEADER_LAST_MODIFIED: string;
        const HTTP2_HEADER_LINK: string;
        const HTTP2_HEADER_LOCATION: string;
        const HTTP2_HEADER_MAX_FORWARDS: string;
        const HTTP2_HEADER_PREFER: string;
        const HTTP2_HEADER_PROXY_AUTHENTICATE: string;
        const HTTP2_HEADER_PROXY_AUTHORIZATION: string;
        const HTTP2_HEADER_RANGE: string;
        const HTTP2_HEADER_REFERER: string;
        const HTTP2_HEADER_REFRESH: string;
        const HTTP2_HEADER_RETRY_AFTER: string;
        const HTTP2_HEADER_SERVER: string;
        const HTTP2_HEADER_SET_COOKIE: string;
        const HTTP2_HEADER_STRICT_TRANSPORT_SECURITY: string;
        const HTTP2_HEADER_TRANSFER_ENCODING: string;
        const HTTP2_HEADER_TE: string;
        const HTTP2_HEADER_UPGRADE: string;
        const HTTP2_HEADER_USER_AGENT: string;
        const HTTP2_HEADER_VARY: string;
        const HTTP2_HEADER_VIA: string;
        const HTTP2_HEADER_WWW_AUTHENTICATE: string;
        const HTTP2_HEADER_HTTP2_SETTINGS: string;
        const HTTP2_HEADER_KEEP_ALIVE: string;
        const HTTP2_HEADER_PROXY_CONNECTION: string;
        const HTTP2_METHOD_ACL: string;
        const HTTP2_METHOD_BASELINE_CONTROL: string;
        const HTTP2_METHOD_BIND: string;
        const HTTP2_METHOD_CHECKIN: string;
        const HTTP2_METHOD_CHECKOUT: string;
        const HTTP2_METHOD_CONNECT: string;
        const HTTP2_METHOD_COPY: string;
        const HTTP2_METHOD_DELETE: string;
        const HTTP2_METHOD_GET: string;
        const HTTP2_METHOD_HEAD: string;
        const HTTP2_METHOD_LABEL: string;
        const HTTP2_METHOD_LINK: string;
        const HTTP2_METHOD_LOCK: string;
        const HTTP2_METHOD_MERGE: string;
        const HTTP2_METHOD_MKACTIVITY: string;
        const HTTP2_METHOD_MKCALENDAR: string;
        const HTTP2_METHOD_MKCOL: string;
        const HTTP2_METHOD_MKREDIRECTREF: string;
        const HTTP2_METHOD_MKWORKSPACE: string;
        const HTTP2_METHOD_MOVE: string;
        const HTTP2_METHOD_OPTIONS: string;
        const HTTP2_METHOD_ORDERPATCH: string;
        const HTTP2_METHOD_PATCH: string;
        const HTTP2_METHOD_POST: string;
        const HTTP2_METHOD_PRI: string;
        const HTTP2_METHOD_PROPFIND: string;
        const HTTP2_METHOD_PROPPATCH: string;
        const HTTP2_METHOD_PUT: string;
        const HTTP2_METHOD_REBIND: string;
        const HTTP2_METHOD_REPORT: string;
        const HTTP2_METHOD_SEARCH: string;
        const HTTP2_METHOD_TRACE: string;
        const HTTP2_METHOD_UNBIND: string;
        const HTTP2_METHOD_UNCHECKOUT: string;
        const HTTP2_METHOD_UNLINK: string;
        const HTTP2_METHOD_UNLOCK: string;
        const HTTP2_METHOD_UPDATE: string;
        const HTTP2_METHOD_UPDATEREDIRECTREF: string;
        const HTTP2_METHOD_VERSION_CONTROL: string;
        const HTTP_STATUS_CONTINUE: number;
        const HTTP_STATUS_SWITCHING_PROTOCOLS: number;
        const HTTP_STATUS_PROCESSING: number;
        const HTTP_STATUS_OK: number;
        const HTTP_STATUS_CREATED: number;
        const HTTP_STATUS_ACCEPTED: number;
        const HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION: number;
        const HTTP_STATUS_NO_CONTENT: number;
        const HTTP_STATUS_RESET_CONTENT: number;
        const HTTP_STATUS_PARTIAL_CONTENT: number;
        const HTTP_STATUS_MULTI_STATUS: number;
        const HTTP_STATUS_ALREADY_REPORTED: number;
        const HTTP_STATUS_IM_USED: number;
        const HTTP_STATUS_MULTIPLE_CHOICES: number;
        const HTTP_STATUS_MOVED_PERMANENTLY: number;
        const HTTP_STATUS_FOUND: number;
        const HTTP_STATUS_SEE_OTHER: number;
        const HTTP_STATUS_NOT_MODIFIED: number;
        const HTTP_STATUS_USE_PROXY: number;
        const HTTP_STATUS_TEMPORARY_REDIRECT: number;
        const HTTP_STATUS_PERMANENT_REDIRECT: number;
        const HTTP_STATUS_BAD_REQUEST: number;
        const HTTP_STATUS_UNAUTHORIZED: number;
        const HTTP_STATUS_PAYMENT_REQUIRED: number;
        const HTTP_STATUS_FORBIDDEN: number;
        const HTTP_STATUS_NOT_FOUND: number;
        const HTTP_STATUS_METHOD_NOT_ALLOWED: number;
        const HTTP_STATUS_NOT_ACCEPTABLE: number;
        const HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED: number;
        const HTTP_STATUS_REQUEST_TIMEOUT: number;
        const HTTP_STATUS_CONFLICT: number;
        const HTTP_STATUS_GONE: number;
        const HTTP_STATUS_LENGTH_REQUIRED: number;
        const HTTP_STATUS_PRECONDITION_FAILED: number;
        const HTTP_STATUS_PAYLOAD_TOO_LARGE: number;
        const HTTP_STATUS_URI_TOO_LONG: number;
        const HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE: number;
        const HTTP_STATUS_RANGE_NOT_SATISFIABLE: number;
        const HTTP_STATUS_EXPECTATION_FAILED: number;
        const HTTP_STATUS_TEAPOT: number;
        const HTTP_STATUS_MISDIRECTED_REQUEST: number;
        const HTTP_STATUS_UNPROCESSABLE_ENTITY: number;
        const HTTP_STATUS_LOCKED: number;
        const HTTP_STATUS_FAILED_DEPENDENCY: number;
        const HTTP_STATUS_UNORDERED_COLLECTION: number;
        const HTTP_STATUS_UPGRADE_REQUIRED: number;
        const HTTP_STATUS_PRECONDITION_REQUIRED: number;
        const HTTP_STATUS_TOO_MANY_REQUESTS: number;
        const HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE: number;
        const HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS: number;
        const HTTP_STATUS_INTERNAL_SERVER_ERROR: number;
        const HTTP_STATUS_NOT_IMPLEMENTED: number;
        const HTTP_STATUS_BAD_GATEWAY: number;
        const HTTP_STATUS_SERVICE_UNAVAILABLE: number;
        const HTTP_STATUS_GATEWAY_TIMEOUT: number;
        const HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED: number;
        const HTTP_STATUS_VARIANT_ALSO_NEGOTIATES: number;
        const HTTP_STATUS_INSUFFICIENT_STORAGE: number;
        const HTTP_STATUS_LOOP_DETECTED: number;
        const HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED: number;
        const HTTP_STATUS_NOT_EXTENDED: number;
        const HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED: number;
    }

    export function getDefaultSettings(): Settings;
    export function getPackedSettings(settings: Settings): Buffer;
    export function getUnpackedSettings(buf: Uint8Array): Settings;

    export function createServer(onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void): Http2Server;
    export function createServer(options: ServerOptions, onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void): Http2Server;

    export function createSecureServer(onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void): Http2SecureServer;
    export function createSecureServer(options: SecureServerOptions, onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void): Http2SecureServer;

    export function connect(authority: string | url.URL, listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void): ClientHttp2Session;
    export function connect(
        authority: string | url.URL,
        options?: ClientSessionOptions | SecureClientSessionOptions,
        listener?: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void
    ): ClientHttp2Session;
}
