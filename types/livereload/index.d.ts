// Type definitions for node-livereload 0.9
// Project: https://github.com/napcs/node-livereload
// Definitions by: Hector Osuna <https://github.com/FanGoH/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Server as WebSocketServer } from 'ws';
import { Server as httpServer } from 'http';
import { Server as httpsServer, ServerOptions } from 'https';
import { EventEmitter } from 'events';
import { FSWatcher } from 'fs';

interface ServerConfig {
    /** Protocol Version defaults to "7" */
    version?: string;
    /** Sets server port number: Defaults to 35729 */
    port?: number;

    /** File Extensions to watch */
    exts?: string[];

    extraExts?: string[];

    /** Extensions to not watch */
    exclusions?: RegExp[];
    applyCSSLive?: boolean;
    applyImgLive?: boolean;
    originalPath?: string;
    overrideURL?: string;
    usePolling?: boolean;
    server?: httpServer | httpsServer;

    /** ms to delay browser refresh */
    delay?: number;

    /** Logs debug messages to console */
    debug?: boolean;
}

/** Create Server Parameters */
interface CreateServerConfig extends ServerConfig {
    https?: ServerOptions;
    server?: httpServer | httpsServer;
    noListen?: boolean;
}

/** Live Reload Server object, provides main functionality */
declare class LiveReloadServer extends EventEmitter {
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
