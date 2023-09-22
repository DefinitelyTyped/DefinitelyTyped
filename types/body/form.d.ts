import { IncomingMessage, ServerResponse } from "http";
import { Callback } from "./common/callback";

declare function formBody(req: IncomingMessage, cb: Callback<unknown>): void;
declare function formBody(req: IncomingMessage, res: ServerResponse, cb: Callback<unknown>): void;
declare function formBody(req: IncomingMessage, res: ServerResponse, opts: {
    limit?: number | undefined;
    encoding?: BufferEncoding | undefined;
    querystring: {
        parse: (queryString: string, cb: (err: Error, result: unknown) => void) => void;
    };
}, cb: Callback<unknown>): void;

export = formBody;
