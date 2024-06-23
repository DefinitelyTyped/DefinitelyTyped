/// <reference types="node" />

import { ChildProcess } from "child_process";
import { EventEmitter } from "events";

declare namespace recluster {
    interface LogOptions {
        respawns?: boolean | undefined;
    }

    interface Logger {
        log(message?: any, ...optionalParams: any[]): void;
    }

    interface BalancerOptions {
        /** number of active workers */
        workers?: number | undefined;
        /** kill timeout for old workers after reload (sec) */
        timeout?: number | undefined;
        /** min time between respawns when workers die */
        respawn?: number | undefined;
        /** max time between respawns when workers die */
        backoff?: number | undefined;
        /** when does the worker become ready? 'listening' or 'started' */
        readyWhen?: string | undefined;
        /** arguments to pass to the worker (default: []) */
        args?: string[] | undefined;
        /** what to log to stdout (default: {respawns: true}) */
        log?: LogOptions | undefined;
        /** logger to use, needs `log` method (default: console) */
        logger?: Logger | undefined;
    }

    class Balancer extends EventEmitter {
        constructor(file: string, options: BalancerOptions);
        run(): void;
        reload(cb?: () => void): void;
        stop(): void;
        workers(): ChildProcess[];
        activeWorkers(): ChildProcess[];
    }
}

declare function recluster(file: string, options?: recluster.BalancerOptions): recluster.Balancer;
export = recluster;
