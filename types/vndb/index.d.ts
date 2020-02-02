// Type definitions for vndb 0.1
// Project: https://github.com/Permagate/vndb-reborn
// Definitions by: Pragun Saini <https://github.com/PragunSaini>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import { TLSSocket } from 'tls';

/**
 * Used for creating a connection to VNDB API
 */
interface VNDB {
    /**
     * Connects to the VNDB API.
     * Host and port are not required unless VNDB changes them.
     * @param host {String} VNDB host address
     * @param port {Number} VNDB port
     */
    start(host?: string, port?: number): Promise<VNDB.vndb>;
}

declare namespace VNDB {
    /**
     * A VNDB connection object
     */
    interface vndb {
        socket: TLSSocket;

        /**
         * Send a message to the VNDB API, according to https://vndb.org/d11
         * @param message {String} message to send to the VNDB API
         */
        write(message: string): Promise<string>;

        /**
         * Close the connection to the VNDB API
         */
        end(): Promise<void>;
    }
}

declare const VNDB: VNDB;

export = VNDB;
