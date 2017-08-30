// Type definitions for server-destroy 1.0
// Project: https://github.com/isaacs/server-destroy
// Definitions by: Gyula Szalai <https://github.com/gyszalai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as http from "http";

declare module "http" {
    interface Server {
        destroy(callback?: () => void): void;
    }
}

declare function enableDestroy(server: http.Server): void;

export = enableDestroy;
