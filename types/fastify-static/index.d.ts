// Type definitions for fastify-static 0.14
// Project: https://github.com/fastify/fastify-static
// Definitions by: Leonhard Melzer <https://github.com/leomelzer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import fastify = require("fastify");

import { Server, IncomingMessage, ServerResponse } from "http";

declare module "fastify" {
    interface FastifyReply<HttpResponse> {
        sendFile(filename: string): FastifyReply<HttpResponse>;
    }
}

declare function fastifyStatic(): void;

declare namespace fastifyStatic {
    interface FastifyStaticOptions {
        root: string;
        prefix?: string;
        serve?: boolean;
        decorateReply?: boolean;
        schemaHide?: boolean;
        setHeaders?: () => void;

        // Passed on to `send`
        acceptRanges?: boolean;
        cacheControl?: boolean;
        dotfiles?: boolean;
        etag?: boolean;
        extensions?: string[];
        immutable?: boolean;
        index?: string[];
        lastModified?: boolean;
        maxAge?: string | number;
    }
}

export = fastifyStatic;
