// Type definitions for sticky-cluster 0.3
// Project: https://github.com/uqee/sticky-cluster
// Definitions by: Austin Turner <https://github.com/paustint>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node"/>
import * as http from 'http';

declare namespace stickyCluster {
    type InitializeFn = (callback: Callback) => void;
    type Callback = (server: http.Server) => void;
    interface Options {
        concurrency?: number;
        port?: number;
        debug?: boolean;
        prefix?: string;
        env?: (index: number) => { stickycluster_worker_index: number };
        hardShutdownDelay?: number;
        errorHandler?: (err: any) => void;
    }
}

declare function stickyCluster(callback: stickyCluster.InitializeFn, options?: stickyCluster.Options): void;
export = stickyCluster;
