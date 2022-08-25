declare module 'https' {
    import { Duplex } from 'stream';
    import * as tls from 'tls';
    import * as http from 'http';
    import { URL } from 'url';

    type ServerOptions<
        Request extends typeof http.IncomingMessage = typeof http.IncomingMessage,
        Response extends typeof http.ServerResponse = typeof http.ServerResponse,
    > = tls.SecureContextOptions & tls.TlsOptions & http.ServerOptions<Request, Response>;

    type RequestOptions = http.RequestOptions &
        tls.SecureContextOptions & {
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

    interface Server<
        Request extends typeof http.IncomingMessage = typeof http.IncomingMessage,
        Response extends typeof http.ServerResponse = typeof http.ServerResponse,
    > extends http.Server<Request, Response> {}
    class Server<
        Request extends typeof http.IncomingMessage = typeof http.IncomingMessage,
        Response extends typeof http.ServerResponse = typeof http.ServerResponse,
    > extends tls.Server {
        constructor(requestListener?: http.RequestListener<Request, Response>);
        constructor(
            options: ServerOptions<Request, Response>,
            requestListener?: http.RequestListener<Request, Response>,
        );
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this;
        addListener(
            event: 'newSession',
            listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void,
        ): this;
        addListener(
            event: 'OCSPRequest',
            listener: (
                certificate: Buffer,
                issuer: Buffer,
                callback: (err: Error | null, resp: Buffer) => void,
            ) => void,
        ): this;
        addListener(
            event: 'resumeSession',
            listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void,
        ): this;
        addListener(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this;
        addListener(event: 'tlsClientError', listener: (err: Error, tlsSocket: tls.TLSSocket) => void): this;
        addListener(event: 'close', listener: () => void): this;
        addListener(event: 'connection', listener: (socket: Duplex) => void): this;
        addListener(event: 'error', listener: (err: Error) => void): this;
        addListener(event: 'listening', listener: () => void): this;
        addListener(event: 'checkContinue', listener: http.RequestListener<Request, Response>): this;
        addListener(event: 'checkExpectation', listener: http.RequestListener<Request, Response>): this;
        addListener(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this;
        addListener(
            event: 'connect',
            listener: (req: InstanceType<Request>, socket: Duplex, head: Buffer) => void,
        ): this;
        addListener(event: 'request', listener: http.RequestListener<Request, Response>): this;
        addListener(
            event: 'upgrade',
            listener: (req: InstanceType<Request>, socket: Duplex, head: Buffer) => void,
        ): this;
        emit(event: string, ...args: any[]): boolean;
        emit(event: 'keylog', line: Buffer, tlsSocket: tls.TLSSocket): boolean;
        emit(
            event: 'newSession',
            sessionId: Buffer,
            sessionData: Buffer,
            callback: (err: Error, resp: Buffer) => void,
        ): boolean;
        emit(
            event: 'OCSPRequest',
            certificate: Buffer,
            issuer: Buffer,
            callback: (err: Error | null, resp: Buffer) => void,
        ): boolean;
        emit(event: 'resumeSession', sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void): boolean;
        emit(event: 'secureConnection', tlsSocket: tls.TLSSocket): boolean;
        emit(event: 'tlsClientError', err: Error, tlsSocket: tls.TLSSocket): boolean;
        emit(event: 'close'): boolean;
        emit(event: 'connection', socket: Duplex): boolean;
        emit(event: 'error', err: Error): boolean;
        emit(event: 'listening'): boolean;
        emit(event: 'checkContinue', req: InstanceType<Request>, res: InstanceType<Response>): boolean;
        emit(event: 'checkExpectation', req: InstanceType<Request>, res: InstanceType<Response>): boolean;
        emit(event: 'clientError', err: Error, socket: Duplex): boolean;
        emit(event: 'connect', req: InstanceType<Request>, socket: Duplex, head: Buffer): boolean;
        emit(event: 'request', req: InstanceType<Request>, res: InstanceType<Response>): boolean;
        emit(event: 'upgrade', req: InstanceType<Request>, socket: Duplex, head: Buffer): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this;
        on(
            event: 'newSession',
            listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void,
        ): this;
        on(
            event: 'OCSPRequest',
            listener: (
                certificate: Buffer,
                issuer: Buffer,
                callback: (err: Error | null, resp: Buffer) => void,
            ) => void,
        ): this;
        on(
            event: 'resumeSession',
            listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void,
        ): this;
        on(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this;
        on(event: 'tlsClientError', listener: (err: Error, tlsSocket: tls.TLSSocket) => void): this;
        on(event: 'close', listener: () => void): this;
        on(event: 'connection', listener: (socket: Duplex) => void): this;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: 'listening', listener: () => void): this;
        on(event: 'checkContinue', listener: http.RequestListener<Request, Response>): this;
        on(event: 'checkExpectation', listener: http.RequestListener<Request, Response>): this;
        on(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this;
        on(event: 'connect', listener: (req: InstanceType<Request>, socket: Duplex, head: Buffer) => void): this;
        on(event: 'request', listener: http.RequestListener<Request, Response>): this;
        on(event: 'upgrade', listener: (req: InstanceType<Request>, socket: Duplex, head: Buffer) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this;
        once(
            event: 'newSession',
            listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void,
        ): this;
        once(
            event: 'OCSPRequest',
            listener: (
                certificate: Buffer,
                issuer: Buffer,
                callback: (err: Error | null, resp: Buffer) => void,
            ) => void,
        ): this;
        once(
            event: 'resumeSession',
            listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void,
        ): this;
        once(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this;
        once(event: 'tlsClientError', listener: (err: Error, tlsSocket: tls.TLSSocket) => void): this;
        once(event: 'close', listener: () => void): this;
        once(event: 'connection', listener: (socket: Duplex) => void): this;
        once(event: 'error', listener: (err: Error) => void): this;
        once(event: 'listening', listener: () => void): this;
        once(event: 'checkContinue', listener: http.RequestListener<Request, Response>): this;
        once(event: 'checkExpectation', listener: http.RequestListener<Request, Response>): this;
        once(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this;
        once(event: 'connect', listener: (req: InstanceType<Request>, socket: Duplex, head: Buffer) => void): this;
        once(event: 'request', listener: http.RequestListener<Request, Response>): this;
        once(event: 'upgrade', listener: (req: InstanceType<Request>, socket: Duplex, head: Buffer) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this;
        prependListener(
            event: 'newSession',
            listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void,
        ): this;
        prependListener(
            event: 'OCSPRequest',
            listener: (
                certificate: Buffer,
                issuer: Buffer,
                callback: (err: Error | null, resp: Buffer) => void,
            ) => void,
        ): this;
        prependListener(
            event: 'resumeSession',
            listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void,
        ): this;
        prependListener(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this;
        prependListener(event: 'tlsClientError', listener: (err: Error, tlsSocket: tls.TLSSocket) => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependListener(event: 'connection', listener: (socket: Duplex) => void): this;
        prependListener(event: 'error', listener: (err: Error) => void): this;
        prependListener(event: 'listening', listener: () => void): this;
        prependListener(event: 'checkContinue', listener: http.RequestListener<Request, Response>): this;
        prependListener(event: 'checkExpectation', listener: http.RequestListener<Request, Response>): this;
        prependListener(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this;
        prependListener(
            event: 'connect',
            listener: (req: InstanceType<Request>, socket: Duplex, head: Buffer) => void,
        ): this;
        prependListener(event: 'request', listener: http.RequestListener<Request, Response>): this;
        prependListener(
            event: 'upgrade',
            listener: (req: InstanceType<Request>, socket: Duplex, head: Buffer) => void,
        ): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this;
        prependOnceListener(
            event: 'newSession',
            listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void,
        ): this;
        prependOnceListener(
            event: 'OCSPRequest',
            listener: (
                certificate: Buffer,
                issuer: Buffer,
                callback: (err: Error | null, resp: Buffer) => void,
            ) => void,
        ): this;
        prependOnceListener(
            event: 'resumeSession',
            listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void,
        ): this;
        prependOnceListener(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this;
        prependOnceListener(event: 'tlsClientError', listener: (err: Error, tlsSocket: tls.TLSSocket) => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: 'connection', listener: (socket: Duplex) => void): this;
        prependOnceListener(event: 'error', listener: (err: Error) => void): this;
        prependOnceListener(event: 'listening', listener: () => void): this;
        prependOnceListener(event: 'checkContinue', listener: http.RequestListener<Request, Response>): this;
        prependOnceListener(event: 'checkExpectation', listener: http.RequestListener<Request, Response>): this;
        prependOnceListener(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this;
        prependOnceListener(
            event: 'connect',
            listener: (req: InstanceType<Request>, socket: Duplex, head: Buffer) => void,
        ): this;
        prependOnceListener(event: 'request', listener: http.RequestListener<Request, Response>): this;
        prependOnceListener(
            event: 'upgrade',
            listener: (req: InstanceType<Request>, socket: Duplex, head: Buffer) => void,
        ): this;
    }

    function createServer<
        Request extends typeof http.IncomingMessage = typeof http.IncomingMessage,
        Response extends typeof http.ServerResponse = typeof http.ServerResponse,
    >(requestListener?: http.RequestListener<Request, Response>): Server<Request, Response>;
    function createServer<
        Request extends typeof http.IncomingMessage = typeof http.IncomingMessage,
        Response extends typeof http.ServerResponse = typeof http.ServerResponse,
    >(
        options: ServerOptions<Request, Response>,
        requestListener?: http.RequestListener<Request, Response>,
    ): Server<Request, Response>;
    function request(
        options: RequestOptions | string | URL,
        callback?: (res: http.IncomingMessage) => void,
    ): http.ClientRequest;
    function request(
        url: string | URL,
        options: RequestOptions,
        callback?: (res: http.IncomingMessage) => void,
    ): http.ClientRequest;
    function get(
        options: RequestOptions | string | URL,
        callback?: (res: http.IncomingMessage) => void,
    ): http.ClientRequest;
    function get(
        url: string | URL,
        options: RequestOptions,
        callback?: (res: http.IncomingMessage) => void,
    ): http.ClientRequest;
    let globalAgent: Agent;
}
declare module 'node:https' {
    export * from 'https';
}
