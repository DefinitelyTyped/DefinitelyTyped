// Type definitions for @rdfjs/express-handler 1.1
// Project: https://github.com/rdfjs-base/express-handler
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Stream, DatasetCore, DatasetCoreFactory } from 'rdf-js';
import { Request, Response, RequestHandler } from 'express';
import formats = require('@rdfjs/formats-common');

declare module 'express-serve-static-core' {
    interface Request {
        dataset(parserOptions?: any): Promise<DatasetCore>;
        quadStream(parserOptions?: any): Stream;
    }

    interface Response {
        dataset(dataset: DatasetCore): Promise<void>;
        quadStream(stream: Stream): Promise<void>;
    }
}

interface BaseIriFromRequest {
    (req: Request): Promise<string> | string;
}

interface RdfHandlerOptions {
    factory?: DatasetCoreFactory;
    formats?: typeof formats;
    defaultMediaType?: string;
    baseIriFromRequest?: boolean | BaseIriFromRequest;
}

interface RdfHandler {
    (options?: RdfHandlerOptions): RequestHandler;
    attach(req: Request, res: Response, options?: RdfHandlerOptions): Promise<void>;
}

declare const middleware: RdfHandler;

export = middleware;
