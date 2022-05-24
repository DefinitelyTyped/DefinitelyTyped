declare module 'https' {
    import { Duplex } from 'stream';
    import * as tls from 'tls';
    import * as http from 'http';
    import { URL } from 'url';

    type ServerOptions = tls.SecureContextOptions & tls.TlsOptions & http.ServerOptions;

    type RequestOptions = http.RequestOptions & tls.SecureContextOptions & {
        rejectUnauthorized?: boolean | undefined; // Defaults to true
        servername?: string | undefined; // SNI TLS Extension
    };

    interface AgentOptions extends http.AgentOptions, tls.ConnectionOptions {
        rejectUnauthorized?: boolean | undefined;
        maxCachedSessions?: number | undefined;
    }

    class Agent extends http.Agent {
        constructor(options?: AgentOptions);
        options: AgentOptions;
    }

    interface Server extends http.Server {}
    class Server extends tls.Server {
        constructor(requestListener?: http.RequestListener);
        constructor(options: ServerOptions, requestListener?: http.RequestListener);

        setTimeout(callback: () => void): this;
        setTimeout(msecs?: number, callback?: () => void): this;
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
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this;
        addListener(event: 'newSession', listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void): this;
        addListener(event: 'OCSPRequest', listener: (certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void) => void): this;
        addListener(event: 'resumeSession', listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void): this;
        addListener(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this;
        addListener(event: 'tlsClientError', listener: (err: Error, tlsSocket: tls.TLSSocket) => void): this;
        addListener(event: 'close', listener: () => void): this;
        addListener(event: 'connection', listener: (socket: Duplex) => void): this;
        addListener(event: 'error', listener: (err: Error) => void): this;
        addListener(event: 'listening', listener: () => void): this;
        addListener(event: 'checkContinue', listener: http.RequestListener): this;
        addListener(event: 'checkExpectation', listener: http.RequestListener): this;
        addListener(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this;
        addListener(event: 'connect', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        addListener(event: 'request', listener: http.RequestListener): this;
        addListener(event: 'upgrade', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        emit(event: string, ...args: any[]): boolean;
        emit(event: 'keylog', line: Buffer, tlsSocket: tls.TLSSocket): boolean;
        emit(event: 'newSession', sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void): boolean;
        emit(event: 'OCSPRequest', certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void): boolean;
        emit(event: 'resumeSession', sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void): boolean;
        emit(event: 'secureConnection', tlsSocket: tls.TLSSocket): boolean;
        emit(event: 'tlsClientError', err: Error, tlsSocket: tls.TLSSocket): boolean;
        emit(event: 'close'): boolean;
        emit(event: 'connection', socket: Duplex): boolean;
        emit(event: 'error', err: Error): boolean;
        emit(event: 'listening'): boolean;
        emit(event: 'checkContinue', req: http.IncomingMessage, res: http.ServerResponse): boolean;
        emit(event: 'checkExpectation', req: http.IncomingMessage, res: http.ServerResponse): boolean;
        emit(event: 'clientError', err: Error, socket: Duplex): boolean;
        emit(event: 'connect', req: http.IncomingMessage, socket: Duplex, head: Buffer): boolean;
        emit(event: 'request', req: http.IncomingMessage, res: http.ServerResponse): boolean;
        emit(event: 'upgrade', req: http.IncomingMessage, socket: Duplex, head: Buffer): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this;
        on(event: 'newSession', listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void): this;
        on(event: 'OCSPRequest', listener: (certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void) => void): this;
        on(event: 'resumeSession', listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void): this;
        on(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this;
        on(event: 'tlsClientError', listener: (err: Error, tlsSocket: tls.TLSSocket) => void): this;
        on(event: 'close', listener: () => void): this;
        on(event: 'connection', listener: (socket: Duplex) => void): this;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: 'listening', listener: () => void): this;
        on(event: 'checkContinue', listener: http.RequestListener): this;
        on(event: 'checkExpectation', listener: http.RequestListener): this;
        on(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this;
        on(event: 'connect', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        on(event: 'request', listener: http.RequestListener): this;
        on(event: 'upgrade', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this;
        once(event: 'newSession', listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void): this;
        once(event: 'OCSPRequest', listener: (certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void) => void): this;
        once(event: 'resumeSession', listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void): this;
        once(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this;
        once(event: 'tlsClientError', listener: (err: Error, tlsSocket: tls.TLSSocket) => void): this;
        once(event: 'close', listener: () => void): this;
        once(event: 'connection', listener: (socket: Duplex) => void): this;
        once(event: 'error', listener: (err: Error) => void): this;
        once(event: 'listening', listener: () => void): this;
        once(event: 'checkContinue', listener: http.RequestListener): this;
        once(event: 'checkExpectation', listener: http.RequestListener): this;
        once(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this;
        once(event: 'connect', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        once(event: 'request', listener: http.RequestListener): this;
        once(event: 'upgrade', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this;
        prependListener(event: 'newSession', listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void): this;
        prependListener(event: 'OCSPRequest', listener: (certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void) => void): this;
        prependListener(event: 'resumeSession', listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void): this;
        prependListener(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this;
        prependListener(event: 'tlsClientError', listener: (err: Error, tlsSocket: tls.TLSSocket) => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependListener(event: 'connection', listener: (socket: Duplex) => void): this;
        prependListener(event: 'error', listener: (err: Error) => void): this;
        prependListener(event: 'listening', listener: () => void): this;
        prependListener(event: 'checkContinue', listener: http.RequestListener): this;
        prependListener(event: 'checkExpectation', listener: http.RequestListener): this;
        prependListener(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this;
        prependListener(event: 'connect', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        prependListener(event: 'request', listener: http.RequestListener): this;
        prependListener(event: 'upgrade', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this;
        prependOnceListener(event: 'newSession', listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void): this;
        prependOnceListener(event: 'OCSPRequest', listener: (certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void) => void): this;
        prependOnceListener(event: 'resumeSession', listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void): this;
        prependOnceListener(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this;
        prependOnceListener(event: 'tlsClientError', listener: (err: Error, tlsSocket: tls.TLSSocket) => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: 'connection', listener: (socket: Duplex) => void): this;
        prependOnceListener(event: 'error', listener: (err: Error) => void): this;
        prependOnceListener(event: 'listening', listener: () => void): this;
        prependOnceListener(event: 'checkContinue', listener: http.RequestListener): this;
        prependOnceListener(event: 'checkExpectation', listener: http.RequestListener): this;
        prependOnceListener(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this;
        prependOnceListener(event: 'connect', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        prependOnceListener(event: 'request', listener: http.RequestListener): this;
        prependOnceListener(event: 'upgrade', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
    }

    function createServer(requestListener?: http.RequestListener): Server;
    function createServer(options: ServerOptions, requestListener?: http.RequestListener): Server;
    function request(options: RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    function request(url: string | URL, options: RequestOptions, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    function get(options: RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    function get(url: string | URL, options: RequestOptions, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    let globalAgent: Agent;
}
