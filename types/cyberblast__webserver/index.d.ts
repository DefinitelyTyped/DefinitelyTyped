// Type definitions for @cyberblast/webserver 0.2
// Project: https://github.com/cyberblast/WebServer
// Definitions by: cyberblast <https://github.com/cyberblast>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { IncomingMessage, ServerResponse } from "http";
import { Logger } from "@cyberblast/logger";

export interface ServerContext {
    server: WebServer;
    request: IncomingMessage;
    response: ServerResponse;
    logger?: Logger;
    client?: string;
    route?: { [key: string]: any };
    data?: string | Buffer;
}

export class WebServer {
    constructor(webConfigFile?: string, logConfigFile?: string);
    start(): Promise<void>;
    stop(): void;
    respondError(error: string|Error, context: ServerContext, code?: number, message?: string): Promise<void>;
}
