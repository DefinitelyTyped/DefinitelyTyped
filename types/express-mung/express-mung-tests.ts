import { Request, Response } from "express";
import * as mung from "express-mung";

function redact(body: {}, req: Request, res: Response) {
  return body;
}

mung.json(redact);
mung.json(redact, { mungError: true });

function redactAsync(body: {}, req: Request, res: Response) {
  return Promise.resolve(body);
}

mung.jsonAsync(redactAsync);
mung.jsonAsync(redactAsync, { mungError: true });

function transformHeaders(req: Request, res: Response) {
  return;
}

mung.headers(transformHeaders);

function transformHeadersAsync(req: Request, res: Response) {
  return Promise.resolve();
}

mung.headersAsync(transformHeadersAsync);

function transformChunk(chunk: string | Buffer, encoding: string | null, req: Request, res: Response) {
  return 'chunk';
}

mung.write(transformChunk);
mung.write(transformChunk, { mungError: true });
