// Type definitions for sticky-session 1.1
// Project: https://github.com/indutny/sticky-session
// Definitions by: Giovanni Barbaro <https://github.com/vanny96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Server } from "http";

/**
 * Method to create the sticky session
 * @param server Server used to create the session
 * @param port Port where the app will be listening at
 * @param options Options to customize the sticky session
 */
export function listen(
    server: Server,
    port?: number,
    options?: {
        readonly workers?: number,
        readonly env?: any
    }
): boolean;
