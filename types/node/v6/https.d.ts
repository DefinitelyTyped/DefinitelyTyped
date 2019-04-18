declare module "https" {
    import * as tls from "tls";
    import * as events from "events";
    import * as http from "http";

    export interface ServerOptions {
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

    export interface RequestOptions extends http.RequestOptions {
        pfx?: any;
        key?: any;
        passphrase?: string;
        cert?: any;
        ca?: any;
        ciphers?: string;
        rejectUnauthorized?: boolean;
        secureProtocol?: string;
    }

    export interface Agent extends http.Agent {
        options?: AgentOptions;
    }

    export interface AgentOptions extends http.AgentOptions {
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

    export var Agent: {
        new (options?: AgentOptions): Agent;
    };
    export interface Server extends tls.Server { }
    export function createServer(options: ServerOptions, requestListener?: Function): Server;
    export function request(options: RequestOptions | string, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    export function get(options: RequestOptions | string, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    export var globalAgent: Agent;
}
