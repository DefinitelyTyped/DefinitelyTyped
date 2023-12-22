import { AgentOptions as SAgentOptions } from "superagent";
import methods = require("methods");
import { Server } from 'net';
import { IncomingMessage, RequestListener, ServerResponse } from "http";
import { Http2ServerRequest, Http2ServerResponse } from "http2";

export type App =
    | Server
    | RequestListener<typeof IncomingMessage, typeof ServerResponse>
    | ((request: Http2ServerRequest, response: Http2ServerResponse) => void)
    | string;

export interface AgentOptions extends SAgentOptions {
    http2?: boolean;
}

export type AllMethods = typeof methods[number] | "del";
