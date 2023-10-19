/// <reference types="node" />

import * as http from "http";

export class Request extends http.IncomingMessage {
    originalUrl?: http.IncomingMessage["url"];
}

export class Response extends http.ServerResponse { }

export type NextFunction = (err?: any) => void;

/**
 * The live-server start params.
 */
export interface LiveServerParams extends Partial<{
    /** Set the server port. Defaults to 8080. */
    port: number;
    /**  Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP. */
    host: string;
    /** Set root directory that's being served. Defaults to cwd. */
    root: string;
    /** When false, it won't load your browser by default. */
    open: boolean;
    /** Comma-separated string for paths to ignore. */
    ignore: string;
    /** When set, serve this file (server root relative) for every 404 (useful for single-page applications). */
    file: string;
    /** Waits for all changes, before reloading. Defaults to 0 sec. */
    wait: number;
    /** Enable CORS (Cross-Origin Resource Sharing). Defaults to false. */
    cors: boolean;
    /** Mount a directory to a route. */
    mount: string[][];
    /** 0 = errors only, 1 = some, 2 = lots */
    logLevel: 0 | 1 | 2;
    /** Takes an array of Connect-compatible middleware that are injected into the server middleware stack. */
    middleware: Array<(req: Request, res: Response, next: NextFunction) => void>;
}> { }

/**
 * Start live-server.
 */
export function start(params: LiveServerParams): void;

/**
 * Shutdown live-server.
 */
export function shutdown(): void;
