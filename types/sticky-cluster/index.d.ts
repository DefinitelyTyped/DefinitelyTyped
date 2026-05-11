/// <reference types="node"/>
import * as http from "http";

declare namespace stickyCluster {
    type InitializeFn = (callback: Callback) => void;
    type Callback = (server: http.Server) => void;
    interface Options {
        concurrency?: number | undefined;
        port?: number | undefined;
        debug?: boolean | undefined;
        prefix?: string | undefined;
        env?: ((index: number) => { stickycluster_worker_index: number }) | undefined;
        hardShutdownDelay?: number | undefined;
        errorHandler?: ((err: any) => void) | undefined;
    }
}

declare function stickyCluster(callback: stickyCluster.InitializeFn, options?: stickyCluster.Options): void;
export = stickyCluster;
