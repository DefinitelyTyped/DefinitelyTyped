// Type definitions for http-terminator 2.0
// Project: https://github.com/gajus/http-terminator#readme
// Definitions by: Steve Ripberger <https://github.com/sripberger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Server as HttpServer } from 'http';
import { Server as HttpsServer } from 'https';

/**
 * Terminator configuration interface.
 */
export interface HttpTerminatorConfig {
    /**
     * Number of milliseconds to allow for the active sockets to complete
     * serving the response (default: 5000).
     */
    gracefulTerminationTimeout?: number;

    /**
     * Intsance of http.Server or https.Server.
     */
    server: HttpServer | HttpsServer;
}

/**
 * Terminator interface.
 */
export interface HttpTerminator {
    /**
     * Terminates the HTTP server.
     */
    terminate(): Promise<void>;
}

/**
 * Creates an HttpTerminator.
 * @param config Terminator configuration
 * @returns The created HttpTerminator.
 */
export function createHttpTerminator(
    config: HttpTerminatorConfig,
): HttpTerminator;
