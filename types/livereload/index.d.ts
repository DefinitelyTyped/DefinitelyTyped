// Type definitions for node-livereload 0.9
// Project: https://github.com/napcs/node-livereload
// Definitions by: Hector Osuna <https://github.com/FanGoH/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Server as WebSocketServer, WebSocket } from 'ws';
import { Server as httpServer } from 'http';
import { Server as httpsServer, ServerOptions } from 'https';
import { EventEmitter } from 'events';
import { FSWatcher } from 'fs';

export interface ServerConfig {
    /** Protocol Version defaults to "7" */
    version?: string | undefined;
    /** Sets server port number: Defaults to 35729 */
    port?: number | undefined;

    /** File Extensions to watch */
    exts?: string[] | undefined;

    extraExts?: string[] | undefined;

    /** Extensions to not watch */
    exclusions?: RegExp[] | undefined;
    applyCSSLive?: boolean | undefined;
    applyImgLive?: boolean | undefined;
    originalPath?: string | undefined;
    overrideURL?: string | undefined;
    usePolling?: boolean | undefined;
    server?: httpServer | httpsServer | undefined;

    /** ms to delay browser refresh */
    delay?: number | undefined;

    /** Logs debug messages to console */
    debug?: boolean | undefined;
}

/** Create Server Parameters */
export interface CreateServerConfig extends ServerConfig {
    https?: ServerOptions | undefined;
    server?: httpServer | httpsServer | undefined;
    noListen?: boolean | undefined;
}

/** Live Reload Server object, provides main functionality */
export class LiveReloadServer extends EventEmitter {
    config: ServerConfig;
    watcher: FSWatcher;
    server: WebSocketServer;
    constructor(config?: ServerConfig);

    listen(callback?: () => void): void;
    onError(err: Error): void;
    onConnection(socket?: WebSocket): void;
    onClose(socket?: WebSocket): void;

    /** Specify path(s) to watch */
    watch(paths: string | string[]): void;
    filterRefresh(filepath: string): void;
    refresh(filepath: string): void;
    alert(message: string): void;
    sendAllClients(data: string): void;
    close(): void;
    debug(message: string): void;
}

export {};

export function createServer(config?: CreateServerConfig, callback?: () => void): LiveReloadServer;
