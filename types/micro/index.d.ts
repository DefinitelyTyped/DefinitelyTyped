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

export function sendError(req: IncomingMessage, res: ServerResponse, info: { statusCode?: number, status?: number, message?: string, stack?: string; }): Promise<void>;

export function createError(code: number, msg: string, orig?: Error): Error & { statusCode: number, originalError?: Error; };

export function buffer(req: IncomingMessage, info?: { limit?: string | number, encoding?: string; }): Promise<Buffer | string>;

export function text(req: IncomingMessage, info?: { limit?: string | number, encoding?: string; }): Promise<string>;

export function json(req: IncomingMessage, info?: { limit?: string | number, encoding?: string; }): Promise<{ [s: string]: any; }>;
