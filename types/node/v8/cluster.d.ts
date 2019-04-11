declare module "cluster" {
    import * as child from "child_process";
    import * as events from "events";
    import * as net from "net";

    // interfaces
    export interface ClusterSettings {
        execArgv?: string[]; // default: process.execArgv
        exec?: string;
        args?: string[];
        silent?: boolean;
        stdio?: any[];
        uid?: number;
        gid?: number;
        inspectPort?: number | (() => number);
    }

    export interface Address {
        address: string;
        port: number;
        addressType: number | "udp4" | "udp6";  // 4, 6, -1, "udp4", "udp6"
    }

    export class Worker extends events.EventEmitter {
        id: number;
        process: child.ChildProcess;
        suicide: boolean;
        send(message: any, sendHandle?: any, callback?: (error: Error) => void): boolean;
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

    export interface Cluster extends events.EventEmitter {
        Worker: Worker;
        disconnect(callback?: Function): void;
        fork(env?: any): Worker;
        isMaster: boolean;
        isWorker: boolean;
        // TODO: cluster.schedulingPolicy
        settings: ClusterSettings;
        setupMaster(settings?: ClusterSettings): void;
        worker?: Worker;
        workers?: {
            [index: string]: Worker | undefined
        };

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
        addListener(event: "setup", listener: (settings: any) => void): this;

        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: "disconnect", worker: Worker): boolean;
        emit(event: "exit", worker: Worker, code: number, signal: string): boolean;
        emit(event: "fork", worker: Worker): boolean;
        emit(event: "listening", worker: Worker, address: Address): boolean;
        emit(event: "message", worker: Worker, message: any, handle: net.Socket | net.Server): boolean;
        emit(event: "online", worker: Worker): boolean;
        emit(event: "setup", settings: any): boolean;

        on(event: string, listener: (...args: any[]) => void): this;
        on(event: "disconnect", listener: (worker: Worker) => void): this;
        on(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): this;
        on(event: "fork", listener: (worker: Worker) => void): this;
        on(event: "listening", listener: (worker: Worker, address: Address) => void): this;
        on(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
        on(event: "online", listener: (worker: Worker) => void): this;
        on(event: "setup", listener: (settings: any) => void): this;

        once(event: string, listener: (...args: any[]) => void): this;
        once(event: "disconnect", listener: (worker: Worker) => void): this;
        once(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): this;
        once(event: "fork", listener: (worker: Worker) => void): this;
        once(event: "listening", listener: (worker: Worker, address: Address) => void): this;
        once(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
        once(event: "online", listener: (worker: Worker) => void): this;
        once(event: "setup", listener: (settings: any) => void): this;

        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: "disconnect", listener: (worker: Worker) => void): this;
        prependListener(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): this;
        prependListener(event: "fork", listener: (worker: Worker) => void): this;
        prependListener(event: "listening", listener: (worker: Worker, address: Address) => void): this;
        prependListener(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
        prependListener(event: "online", listener: (worker: Worker) => void): this;
        prependListener(event: "setup", listener: (settings: any) => void): this;

        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: "disconnect", listener: (worker: Worker) => void): this;
        prependOnceListener(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): this;
        prependOnceListener(event: "fork", listener: (worker: Worker) => void): this;
        prependOnceListener(event: "listening", listener: (worker: Worker, address: Address) => void): this;
        prependOnceListener(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
        prependOnceListener(event: "online", listener: (worker: Worker) => void): this;
        prependOnceListener(event: "setup", listener: (settings: any) => void): this;
    }

    export function disconnect(callback?: Function): void;
    export function fork(env?: any): Worker;
    export var isMaster: boolean;
    export var isWorker: boolean;
    // TODO: cluster.schedulingPolicy
    export var settings: ClusterSettings;
    export function setupMaster(settings?: ClusterSettings): void;
    export var worker: Worker;
    export var workers: {
        [index: string]: Worker | undefined
    };

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
    export function addListener(event: string, listener: (...args: any[]) => void): Cluster;
    export function addListener(event: "disconnect", listener: (worker: Worker) => void): Cluster;
    export function addListener(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): Cluster;
    export function addListener(event: "fork", listener: (worker: Worker) => void): Cluster;
    export function addListener(event: "listening", listener: (worker: Worker, address: Address) => void): Cluster;
    export function addListener(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): Cluster;  // the handle is a net.Socket or net.Server object, or undefined.
    export function addListener(event: "online", listener: (worker: Worker) => void): Cluster;
    export function addListener(event: "setup", listener: (settings: any) => void): Cluster;

    export function emit(event: string | symbol, ...args: any[]): boolean;
    export function emit(event: "disconnect", worker: Worker): boolean;
    export function emit(event: "exit", worker: Worker, code: number, signal: string): boolean;
    export function emit(event: "fork", worker: Worker): boolean;
    export function emit(event: "listening", worker: Worker, address: Address): boolean;
    export function emit(event: "message", worker: Worker, message: any, handle: net.Socket | net.Server): boolean;
    export function emit(event: "online", worker: Worker): boolean;
    export function emit(event: "setup", settings: any): boolean;

    export function on(event: string, listener: (...args: any[]) => void): Cluster;
    export function on(event: "disconnect", listener: (worker: Worker) => void): Cluster;
    export function on(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): Cluster;
    export function on(event: "fork", listener: (worker: Worker) => void): Cluster;
    export function on(event: "listening", listener: (worker: Worker, address: Address) => void): Cluster;
    export function on(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): Cluster;  // the handle is a net.Socket or net.Server object, or undefined.
    export function on(event: "online", listener: (worker: Worker) => void): Cluster;
    export function on(event: "setup", listener: (settings: any) => void): Cluster;

    export function once(event: string, listener: (...args: any[]) => void): Cluster;
    export function once(event: "disconnect", listener: (worker: Worker) => void): Cluster;
    export function once(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): Cluster;
    export function once(event: "fork", listener: (worker: Worker) => void): Cluster;
    export function once(event: "listening", listener: (worker: Worker, address: Address) => void): Cluster;
    export function once(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): Cluster;  // the handle is a net.Socket or net.Server object, or undefined.
    export function once(event: "online", listener: (worker: Worker) => void): Cluster;
    export function once(event: "setup", listener: (settings: any) => void): Cluster;

    export function removeListener(event: string, listener: (...args: any[]) => void): Cluster;
    export function removeAllListeners(event?: string): Cluster;
    export function setMaxListeners(n: number): Cluster;
    export function getMaxListeners(): number;
    export function listeners(event: string): Function[];
    export function listenerCount(type: string): number;

    export function prependListener(event: string, listener: (...args: any[]) => void): Cluster;
    export function prependListener(event: "disconnect", listener: (worker: Worker) => void): Cluster;
    export function prependListener(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): Cluster;
    export function prependListener(event: "fork", listener: (worker: Worker) => void): Cluster;
    export function prependListener(event: "listening", listener: (worker: Worker, address: Address) => void): Cluster;
    export function prependListener(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): Cluster;  // the handle is a net.Socket or net.Server object, or undefined.
    export function prependListener(event: "online", listener: (worker: Worker) => void): Cluster;
    export function prependListener(event: "setup", listener: (settings: any) => void): Cluster;

    export function prependOnceListener(event: string, listener: (...args: any[]) => void): Cluster;
    export function prependOnceListener(event: "disconnect", listener: (worker: Worker) => void): Cluster;
    export function prependOnceListener(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): Cluster;
    export function prependOnceListener(event: "fork", listener: (worker: Worker) => void): Cluster;
    export function prependOnceListener(event: "listening", listener: (worker: Worker, address: Address) => void): Cluster;
    export function prependOnceListener(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): Cluster;  // the handle is a net.Socket or net.Server object, or undefined.
    export function prependOnceListener(event: "online", listener: (worker: Worker) => void): Cluster;
    export function prependOnceListener(event: "setup", listener: (settings: any) => void): Cluster;

    export function eventNames(): string[];
}
