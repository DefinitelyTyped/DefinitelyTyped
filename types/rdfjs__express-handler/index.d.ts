import { SinkMap } from "@rdfjs/sink-map";
import { EventEmitter } from "events";
import { Request, RequestHandler, Response } from "express";
import { DatasetCore, DatasetCoreFactory, Stream } from "rdf-js";

declare module "express-serve-static-core" {
    interface Request {
        dataset?(parserOptions?: any): Promise<DatasetCore>;
        quadStream?(parserOptions?: any): Stream;
    }

    interface Response {
        dataset(dataset: DatasetCore): Promise<void>;
        quadStream(stream: Stream): Promise<void>;
    }
}

interface BaseIriFromRequest {
    (req: Request): Promise<string> | string;
}

interface Formats {
    parsers: SinkMap<EventEmitter, Stream>;
    serializers: SinkMap<Stream, EventEmitter>;
}
interface RdfHandlerOptions {
    factory?: DatasetCoreFactory | undefined;
    formats?: Formats | undefined;
    defaultMediaType?: string | undefined;
    baseIriFromRequest?: boolean | BaseIriFromRequest | undefined;
}

interface RdfHandler {
    (options?: RdfHandlerOptions): RequestHandler;
    attach(req: Request, res: Response, options?: RdfHandlerOptions): Promise<void>;
}

declare const init: RdfHandler;

export default init;
