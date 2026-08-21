/// <reference types="node" />

import * as net from "net";

declare module "net" {
    interface Server {
        destroy(callback?: (err?: Error) => void): void;
    }
}

declare function enableDestroy(server: net.Server): void;

export = enableDestroy;
