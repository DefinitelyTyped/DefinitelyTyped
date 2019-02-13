declare module "https" {
    import * as tls from "tls";
    import * as events from "events";
    import * as http from "http";
    import { URL } from "url";

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

    class Server extends tls.Server {
        constructor(options: ServerOptions, requestListener?: http.RequestListener);

        setTimeout(callback: () => void): this;
        setTimeout(msecs?: number, callback?: () => void): this;
        timeout: number;
        keepAliveTimeout: number;
    }

    function createServer(options: ServerOptions, requestListener?: http.RequestListener): Server;
    function request(options: RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    function request(url: string | URL, options: RequestOptions, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    function get(options: RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    function get(url: string | URL, options: RequestOptions, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    let globalAgent: Agent;
}
