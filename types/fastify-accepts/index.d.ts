// Type definitions for fastify-accepts 0.5
// Project: https://github.com/fastify/fastify-accepts#readme
// Definitions by: Leonhard Melzer <https://github.com/leomelzer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import fastify = require("fastify");

import { Accepts } from "accepts";

declare module "fastify" {
    interface FastifyRequest<HttpRequest> {
        accepts(): Accepts;
        charset: Accepts["charset"];
        charsets: Accepts["charsets"];
        encoding: Accepts["encoding"];
        encodings: Accepts["charsets"];
        language: Accepts["language"];
        languages: Accepts["languages"];
        type: Accepts["type"];
        types: Accepts["types"];
    }

    interface FastifyReply<HttpResponse> {
        requestAccepts(): Accepts;
        requestCharset: Accepts["charset"];
        requestCharsets: Accepts["charsets"];
        requestEncoding: Accepts["encoding"];
        requestEncodings: Accepts["charsets"];
        requestLanguage: Accepts["language"];
        requestLanguages: Accepts["languages"];
        requestType: Accepts["type"];
        requestTypes: Accepts["types"];
    }
}

declare function fastifyAccepts(): void;

declare namespace fastifyAccepts {
    interface FastifyAcceptsOptions {
        decorateReplyToo?: boolean;
    }
}

export = fastifyAccepts;
