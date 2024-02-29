/**
 * The live-server start params.
 */
export interface LiveServerParams {
    /** Set the server port. Defaults to 8080. */
    port?: number | undefined;
    /**  Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP. */
    host?: string | undefined;
    /** Set root directory that's being served. Defaults to cwd. */
    root?: string | undefined;
    /** When false, it won't load your browser by default. */
    open?: boolean | undefined;
    /** Comma-separated string for paths to ignore. */
    ignore?: string | undefined;
    /** When set, serve this file (server root relative) for every 404 (useful for single-page applications). */
    file?: string | undefined;
    /** Waits for all changes, before reloading. Defaults to 0 sec. */
    wait?: number | undefined;
    /** Mount a directory to a route. */
    mount?: string[][] | undefined;
    /** 0 = errors only, 1 = some, 2 = lots */
    logLevel?: 0 | 1 | 2 | undefined;
    /** Takes an array of Connect-compatible middleware that are injected into the server middleware stack. */
    middleware?: Array<(req: any, res: any, next: any) => void> | undefined;
}

/**
 * Start live-server.
 */
export function start(params: LiveServerParams): void;

/**
 * Shutdown live-server.
 */
export function shutdown(): void;
