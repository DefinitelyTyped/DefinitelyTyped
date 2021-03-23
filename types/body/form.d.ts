import { IncomingMessage, ServerResponse } from "http";

declare function formBody(req: IncomingMessage, cb: (err: Error, bodyPayload: string) => void): void;
declare function formBody(req: IncomingMessage, res: ServerResponse, cb: (err: Error, bodyPayload: string) => void): void;
declare function formBody(req: IncomingMessage, res: ServerResponse, opts: {
  limit?: number;
  encoding?: BufferEncoding;
  querystring: {
    parse: (queryString: string, cb: (err: Error, result: unknown) => void) => void
  }
}, cb: (err: Error, bodyPayload: unknown) => void): void;

export = formBody;
