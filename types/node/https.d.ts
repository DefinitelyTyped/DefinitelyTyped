declare module 'node:https' {
    export * from 'https';
}

declare module 'https' {
    import * as tls from 'node:tls';
    import * as http from 'node:http';
    import { URL } from 'node:url';

    type ServerOptions = tls.SecureContextOptions & tls.TlsOptions & http.ServerOptions;

    type RequestOptions = http.RequestOptions & tls.SecureContextOptions & {
        rejectUnauthorized?: boolean; // Defaults to true
        servername?: string; // SNI TLS Extension
    };

    interface AgentOptions extends http.AgentOptions, tls.ConnectionOptions {
        rejectUnauthorized?: boolean;
        maxCachedSessions?: number;
    }

    class Agent extends http.Agent {
        constructor(options?: AgentOptions);
        options: AgentOptions;
    }

    interface Server extends http.HttpBase {}
    class Server<Request extends http.IncomingMessage = http.IncomingMessage, Response extends http.ServerResponse = http.ServerResponse> extends tls.Server {
        constructor(requestListener?: http.RequestListener<Request, Response>);
        constructor(options: ServerOptions, requestListener?: http.RequestListener<Request, Response>);
    }

    function createServer<Request extends http.IncomingMessage = http.IncomingMessage, Response extends http.ServerResponse = http.ServerResponse>(
        requestListener?: http.RequestListener<Request, Response>
    ): Server<Request, Response>;
    function createServer<Request extends http.IncomingMessage = http.IncomingMessage, Response extends http.ServerResponse = http.ServerResponse>(
        options: ServerOptions, requestListener?: http.RequestListener<Request, Response>
    ): Server<Request, Response>;
    function request(options: RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    function request(url: string | URL, options: RequestOptions, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    function get(options: RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    function get(url: string | URL, options: RequestOptions, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    let globalAgent: Agent;
}
