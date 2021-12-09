// Type definitions for micro 7.3
// Project: https://github.com/zeit/micro
// Definitions by: Kalle Ott <https://github.com/kaoDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import { IncomingMessage, ServerResponse, Server } from 'http';

export type RequestHandler = (req: IncomingMessage, res: ServerResponse) => any;

export function run(req: IncomingMessage, res: ServerResponse, fn: RequestHandler): Promise<void>;

declare function serve(fn: RequestHandler): Server;
export default serve;

export function send(res: ServerResponse, code: number, data?: any): Promise<void>;

export function sendError(
    req: IncomingMessage,
    res: ServerResponse,
    info: { statusCode?: number | undefined, status?: number | undefined, message?: string | undefined, stack?: string | undefined; }
): Promise<void>;

export function createError(code: number, msg: string, orig?: Error): Error & { statusCode: number, originalError?: Error | undefined; };

export function buffer(req: IncomingMessage, info?: { limit?: string | number | undefined, encoding?: string | undefined; }): Promise<Buffer | string>;

export function text(req: IncomingMessage, info?: { limit?: string | number | undefined, encoding?: string | undefined; }): Promise<string>;

export function json(req: IncomingMessage, info?: { limit?: string | number | undefined, encoding?: string | undefined; }): Promise<{ [s: string]: any; }>;
