// Type definitions for @cyberblast/webserver 0.2
// Project: https://github.com/cyberblast/WebServer
// Definitions by: cyberblast <https://github.com/cyberblast>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Logger } from "@cyberblast/logger";
import { IncomingMessage, ServerResponse } from "http";

export interface ServerContext {
    server: WebServer;
    request: IncomingMessage;
    response: ServerResponse;
    logger?: Logger | undefined;
    client?: string | undefined;
    route?: { [key: string]: any } | undefined;
    data?: string | Buffer | undefined;
}

export class WebServer {
    constructor(webConfigFile?: string, logConfigFile?: string);
    start(): Promise<void>;
    stop(): void;
    respondError(error: string | Error, context: ServerContext, code?: number, message?: string): Promise<void>;
}
