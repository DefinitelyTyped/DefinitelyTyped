import { IncomingMessage, ServerResponse } from "http";

declare function jsonBody(req: IncomingMessage, cb: (err: Error, bodyPayload: string) => void): void;
declare function jsonBody(req: IncomingMessage, res: ServerResponse, cb: (err: Error, bodyPayload: string) => void): void;
declare function jsonBody(req: IncomingMessage, res: ServerResponse, opts: {
  limit?: number;
  encoding?: BufferEncoding;
  reviver?: (...args: unknown[]) => unknown;
  JSON?: {
    parse: (queryString: string, reviver: (...args: unknown[]) => unknown, cb: (err: Error, result: unknown) => void) => void
  }
}, cb: (err: Error, bodyPayload: unknown) => void): void;

export = jsonBody;
