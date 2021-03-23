import { IncomingMessage, ServerResponse } from "http";

declare function anyBody(req: IncomingMessage, cb: (err: Error, bodyPayload: string) => void): void;
declare function anyBody(req: IncomingMessage, res: ServerResponse, cb: (err: Error, bodyPayload: string) => void): void;
declare function anyBody(req: IncomingMessage, res: ServerResponse, opts: {
  limit?: number;
  encoding?: BufferEncoding;
  reviver?: (...args: unknown[]) => unknown;
  JSON?: {
    parse: (queryString: string, reviver: (...args: unknown[]) => unknown, cb: (err: Error, result: unknown) => void) => void
  };
  querystring: {
    parse: (queryString: string, cb: (err: Error, result: unknown) => void) => void
  }
}, cb: (err: Error, bodyPayload: unknown) => void): void;

export = anyBody;
