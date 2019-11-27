// Type definitions for sticky-session 1.1.2
// Definitions by: Giovanni Barbaro <https://github.com/vanny96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="node" />

import { Server } from "http";

export function listen(
    server: Server,
    port: number,
    options: {
        workers: number
    }
): boolean