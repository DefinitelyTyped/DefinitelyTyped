/// <reference types="node" />

import { EventEmitter } from "events";
import { IncomingMessage, ServerResponse } from "http";

export = SSE;

declare class SSE extends EventEmitter {
    constructor(httpServer: EventEmitter, options?: SSE.Options);

    server: EventEmitter;

    handleRequest(req: IncomingMessage, res: ServerResponse, query: string): void;
    matchesPath(queryPath: string, matchPath: string): boolean;
}

declare namespace SSE {
    interface Options {
        path?: string;
        verifyRequest?: ((req: IncomingMessage) => boolean) | null;
    }

    class Client extends EventEmitter {
        constructor(req: IncomingMessage, res: ServerResponse);

        req: IncomingMessage;
        res: ServerResponse;

        initialize(): void;
        send(event?: string | Client.SendObject, data?: string, id?: string): void;
        close(): void;
    }

    namespace Client {
        interface SendObject {
            event?: string;
            data?: string;
            id?: string;
            retry?: number;
        }
    }
}
