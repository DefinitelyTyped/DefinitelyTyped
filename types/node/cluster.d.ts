// Requires `esModuleInterop: true`
declare module 'cluster' {
    import * as child from 'node:child_process';
    import EventEmitter = require('node:events');
    import * as net from 'node:net';

    export interface ClusterSettings {
        execArgv?: string[] | undefined; // default: process.execArgv
        exec?: string | undefined;
        args?: string[] | undefined;
        silent?: boolean | undefined;
        stdio?: any[] | undefined;
        uid?: number | undefined;
        gid?: number | undefined;
        inspectPort?: number | (() => number) | undefined;
    }

    export interface Address {
        address: string;
        port: number;
        addressType: number | "udp4" | "udp6";  // 4, 6, -1, "udp4", "udp6"
    }

    export class Worker extends EventEmitter {
        id: number;
        process: child.ChildProcess;
        send(message: child.Serializable, sendHandle?: child.SendHandle, callback?: (error: Error | null) => void): boolean;
        kill(signal?: string): void;
        destroy(signal?: string): void;
        disconnect(): void;
        isConnected(): boolean;
        isDead(): boolean;
        exitedAfterDisconnect: boolean;

        /**
         * events.EventEmitter
         *   1. disconnect
         *   2. error
         *   3. exit
         *   4. listening
         *   5. message
         *   6. online
         */
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: "disconnect", listener: () => void): this;
        addListener(event: "error", listener: (error: Error) => void): this;
        addListener(event: "exit", listener: (code: number, signal: string) => void): this;
        addListener(event: "listening", listener: (address: Address) => void): this;
        addListener(event: "message", listener: (message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
        addListener(event: "online", listener: () => void): this;

        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: "disconnect"): boolean;
        emit(event: "error", error: Error): boolean;
        emit(event: "exit", code: number, signal: string): boolean;
        emit(event: "listening", address: Address): boolean;
        emit(event: "message", message: any, handle: net.Socket | net.Server): boolean;
        emit(event: "online"): boolean;

        on(event: string, listener: (...args: any[]) => void): this;
        on(event: "disconnect", listener: () => void): this;
        on(event: "error", listener: (error: Error) => void): this;
        on(event: "exit", listener: (code: number, signal: string) => void): this;
        on(event: "listening", listener: (address: Address) => void): this;
        on(event: "message", listener: (message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
        on(event: "online", listener: () => void): this;

        once(event: string, listener: (...args: any[]) => void): this;
        once(event: "disconnect", listener: () => void): this;
        once(event: "error", listener: (error: Error) => void): this;
        once(event: "exit", listener: (code: number, signal: string) => void): this;
        once(event: "listening", listener: (address: Address) => void): this;
        once(event: "message", listener: (message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
        once(event: "online", listener: () => void): this;

        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: "disconnect", listener: () => void): this;
        prependListener(event: "error", listener: (error: Error) => void): this;
        prependListener(event: "exit", listener: (code: number, signal: string) => void): this;
        prependListener(event: "listening", listener: (address: Address) => void): this;
        prependListener(event: "message", listener: (message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
        prependListener(event: "online", listener: () => void): this;

        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: "disconnect", listener: () => void): this;
        prependOnceListener(event: "error", listener: (error: Error) => void): this;
        prependOnceListener(event: "exit", listener: (code: number, signal: string) => void): this;
        prependOnceListener(event: "listening", listener: (address: Address) => void): this;
        prependOnceListener(event: "message", listener: (message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
        prependOnceListener(event: "online", listener: () => void): this;
    }

    export interface Cluster extends EventEmitter {
        disconnect(callback?: () => void): void;
        fork(env?: any): Worker;
        /** @deprecated since v16.0.0 - use setupPrimary. */
        readonly isMaster: boolean;
        readonly isPrimary: boolean;
        readonly isWorker: boolean;
        schedulingPolicy: number;
        readonly settings: ClusterSettings;
        /** @deprecated since v16.0.0 - use setupPrimary. */
        setupMaster(settings?: ClusterSettings): void;
        /**
         * `setupPrimary` is used to change the default 'fork' behavior. Once called, the settings will be present in cluster.settings.
         */
        setupPrimary(settings?: ClusterSettings): void;
        readonly worker?: Worker | undefined;
        readonly workers?: NodeJS.Dict<Worker> | undefined;

        readonly SCHED_NONE: number;
        readonly SCHED_RR: number;

        /**
         * events.EventEmitter
         *   1. disconnect
         *   2. exit
         *   3. fork
         *   4. listening
         *   5. message
         *   6. online
         *   7. setup
         */
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: "disconnect", listener: (worker: Worker) => void): this;
        addListener(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): this;
        addListener(event: "fork", listener: (worker: Worker) => void): this;
        addListener(event: "listening", listener: (worker: Worker, address: Address) => void): this;
        addListener(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
        addListener(event: "online", listener: (worker: Worker) => void): this;
        addListener(event: "setup", listener: (settings: ClusterSettings) => void): this;

        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: "disconnect", worker: Worker): boolean;
        emit(event: "exit", worker: Worker, code: number, signal: string): boolean;
        emit(event: "fork", worker: Worker): boolean;
        emit(event: "listening", worker: Worker, address: Address): boolean;
        emit(event: "message", worker: Worker, message: any, handle: net.Socket | net.Server): boolean;
        emit(event: "online", worker: Worker): boolean;
        emit(event: "setup", settings: ClusterSettings): boolean;

        on(event: string, listener: (...args: any[]) => void): this;
        on(event: "disconnect", listener: (worker: Worker) => void): this;
        on(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): this;
        on(event: "fork", listener: (worker: Worker) => void): this;
        on(event: "listening", listener: (worker: Worker, address: Address) => void): this;
        on(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
        on(event: "online", listener: (worker: Worker) => void): this;
        on(event: "setup", listener: (settings: ClusterSettings) => void): this;

        once(event: string, listener: (...args: any[]) => void): this;
        once(event: "disconnect", listener: (worker: Worker) => void): this;
        once(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): this;
        once(event: "fork", listener: (worker: Worker) => void): this;
        once(event: "listening", listener: (worker: Worker, address: Address) => void): this;
        once(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): this; // the handle is a net.Socket or net.Server object, or undefined.
        once(event: "online", listener: (worker: Worker) => void): this;
        once(event: "setup", listener: (settings: ClusterSettings) => void): this;

        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: "disconnect", listener: (worker: Worker) => void): this;
        prependListener(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): this;
        prependListener(event: "fork", listener: (worker: Worker) => void): this;
        prependListener(event: "listening", listener: (worker: Worker, address: Address) => void): this;
        // the handle is a net.Socket or net.Server object, or undefined.
        prependListener(event: "message", listener: (worker: Worker, message: any, handle?: net.Socket | net.Server) => void): this;
        prependListener(event: "online", listener: (worker: Worker) => void): this;
        prependListener(event: "setup", listener: (settings: ClusterSettings) => void): this;

        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: "disconnect", listener: (worker: Worker) => void): this;
        prependOnceListener(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): this;
        prependOnceListener(event: "fork", listener: (worker: Worker) => void): this;
        prependOnceListener(event: "listening", listener: (worker: Worker, address: Address) => void): this;
        // the handle is a net.Socket or net.Server object, or undefined.
        prependOnceListener(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): this;
        prependOnceListener(event: "online", listener: (worker: Worker) => void): this;
        prependOnceListener(event: "setup", listener: (settings: ClusterSettings) => void): this;
    }

    const cluster: Cluster;
    export default cluster;
}

declare module 'node:cluster' {
    export * from 'cluster';
    export { default as default } from 'cluster';
}
