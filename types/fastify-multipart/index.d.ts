// Type definitions for fastify-multipart 0.5
// Project: https://github.com/fastify/fastify-multipart#readme
// Definitions by: Jannik Keye <https://github.com/jannikkeye>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
/// <reference types="node" />

import busboy = require("busboy");
import fastify = require("fastify");

import { IncomingMessage, ServerResponse } from 'http';

declare module "fastify" {
    interface FastifyRequest<HttpRequest> {
        isMultipart: () => boolean;
        multipart: (handler: fastifyMultipart.MultipartHandler, next: (err: Error) => void) => busboy.Busboy;
    }
}

declare function fastifyMultipart(): void;

declare namespace fastifyMultipart {
    type MultipartHandler = (
        field: string,
        file: any,
        filename: string,
        encoding: string,
        mimetype: string,
    ) => void;

    interface FastifyMultipartOptions {
        limits?: {
            /**
             * Max field name size in bytes
             */
            fieldNameSize?: number;

            /**
             * Max field value size in bytes
             */
            fieldSize?: number;

            /**
             * Max number of non-file fields
             */
            fields?: number;

            /**
             * For multipart forms, the max file size
             */
            fileSize?: number;

            /**
             * Max number of file fields
             */
            files?: number;

            /**
             * Max number of header key=>value pairs
             */
            headerPairs?: number;
        };
    }
}

export = fastifyMultipart;
