// Type definitions for server-destroy 1.0
// Project: https://github.com/isaacs/server-destroy#readme
// Definitions by: Gyula Szalai <https://github.com/gyszalai>
//                 Anatoly Pitikin <https://github.com/xapdkop>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import * as net from "net";

declare module "net" {
    interface Server {
        destroy(callback?: (err?: Error) => void): void;
    }
}

declare function enableDestroy(server: net.Server): void;

export = enableDestroy;
