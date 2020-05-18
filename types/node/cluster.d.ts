declare module "cluster" {
    import * as child from "child_process";
    import * as events from "events";
    import * as net from "net";

    // interfaces
    interface ClusterSettings {
        execArgv?: string[]; // default: process.execArgv
        exec?: string;
        args?: string[];
        silent?: boolean;
        stdio?: any[];
        uid?: number;
        gid?: number;
        inspectPort?: number | (() => number);
    }

    interface Address {
        address: string;
        port: number;
        addressType: number | "udp4" | "udp6";  // 4, 6, -1, "udp4", "udp6"
    }

    interface WorkerEventMap {
        "disconnect": () => void;
        "error": (error: Error) => void;
        "exit": (code: number, signal: string) => void;
        "listening": (address: Address) => void;

        /** the handle is a net.Socket or net.Server object, or undefined. */
        "message": (message: any, handle: net.Socket | net.Server) => void;
        "online": () => void;
    }

    class Worker extends events.EventEmitter {
        id: number;
        process: child.ChildProcess;
        send(message: child.Serializable, sendHandle?: child.SendHandle, callback?: (error: Error | null) => void): boolean;
        kill(signal?: string): void;
        destroy(signal?: string): void;
        disconnect(): void;
        isConnected(): boolean;
        isDead(): boolean;
        exitedAfterDisconnect: boolean;

        /*
         * events.EventEmitter
         *   1. disconnect
         *   2. error
         *   3. exit
         *   4. listening
         *   5. message
         *   6. online
         */
        addListener<K extends keyof WorkerEventMap>(event: K, listener: WorkerEventMap[K]): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit<K extends keyof WorkerEventMap>(event: K, ...args: WorkerEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on<K extends keyof WorkerEventMap>(event: K, listener: WorkerEventMap[K]): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once<K extends keyof WorkerEventMap>(event: K, listener: WorkerEventMap[K]): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener<K extends keyof WorkerEventMap>(event: K, listener: WorkerEventMap[K]): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener<K extends keyof WorkerEventMap>(event: K, listener: WorkerEventMap[K]): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener<K extends keyof WorkerEventMap>(event: K, listener: WorkerEventMap[K]): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off<K extends keyof WorkerEventMap>(event: K, listener: WorkerEventMap[K]): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;

        listeners<K extends keyof WorkerEventMap>(event: K): Array<WorkerEventMap[K]>;
        listeners(event: string | symbol): Function[];
    }

    interface ClusterEventMap {
        "disconnect": (worker: Worker) => void;
        "exit": (worker: Worker, code: number, signal: string) => void;
        "fork": (worker: Worker) => void;
        "listening": (worker: Worker, address: Address) => void;

        /** the handle is a net.Socket or net.Server object, or undefined. */
        "message": (worker: Worker, message: any, handle: net.Socket | net.Server) => void;
        "online": (worker: Worker) => void;
        "setup": (settings: ClusterSettings) => void;
    }

    interface Cluster extends events.EventEmitter {
        Worker: Worker;
        disconnect(callback?: () => void): void;
        fork(env?: any): Worker;
        isMaster: boolean;
        isWorker: boolean;
        schedulingPolicy: number;
        settings: ClusterSettings;
        setupMaster(settings?: ClusterSettings): void;
        worker?: Worker;
        workers?: NodeJS.Dict<Worker>;

        readonly SCHED_NONE: number;
        readonly SCHED_RR: number;

        /*
         * events.EventEmitter
         *   1. disconnect
         *   2. exit
         *   3. fork
         *   4. listening
         *   5. message
         *   6. online
         *   7. setup
         */
        addListener<K extends keyof ClusterEventMap>(event: K, listener: ClusterEventMap[K]): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit<K extends keyof ClusterEventMap>(event: K, ...args: ClusterEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on<K extends keyof ClusterEventMap>(event: K, listener: ClusterEventMap[K]): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once<K extends keyof ClusterEventMap>(event: K, listener: ClusterEventMap[K]): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener<K extends keyof ClusterEventMap>(event: K, listener: ClusterEventMap[K]): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener<K extends keyof ClusterEventMap>(event: K, listener: ClusterEventMap[K]): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener<K extends keyof ClusterEventMap>(event: K, listener: ClusterEventMap[K]): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off<K extends keyof ClusterEventMap>(event: K, listener: ClusterEventMap[K]): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;

        listeners<K extends keyof ClusterEventMap>(event: K): Array<ClusterEventMap[K]>;
        listeners(event: string | symbol): Function[];
    }

    const SCHED_NONE: number;
    const SCHED_RR: number;

    function disconnect(callback?: () => void): void;
    function fork(env?: any): Worker;
    const isMaster: boolean;
    const isWorker: boolean;
    let schedulingPolicy: number;
    const settings: ClusterSettings;
    function setupMaster(settings?: ClusterSettings): void;
    const worker: Worker;
    const workers: NodeJS.Dict<Worker>;

    /*
     * events.EventEmitter
     *   1. disconnect
     *   2. exit
     *   3. fork
     *   4. listening
     *   5. message
     *   6. online
     *   7. setup
     */
    function addListener<K extends keyof ClusterEventMap>(event: K, listener: ClusterEventMap[K]): Cluster;
    function addListener(event: string | symbol, listener: (...args: any[]) => void): Cluster;

    function emit<K extends keyof ClusterEventMap>(event: K, ...args: ClusterEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
    function emit(event: string | symbol, ...args: any[]): boolean;

    function on<K extends keyof ClusterEventMap>(event: K, listener: ClusterEventMap[K]): Cluster;
    function on(event: string | symbol, listener: (...args: any[]) => void): Cluster;

    function once<K extends keyof ClusterEventMap>(event: K, listener: ClusterEventMap[K]): Cluster;
    function once(event: string | symbol, listener: (...args: any[]) => void): Cluster;

    function prependListener<K extends keyof ClusterEventMap>(event: K, listener: ClusterEventMap[K]): Cluster;
    function prependListener(event: string | symbol, listener: (...args: any[]) => void): Cluster;

    function prependOnceListener<K extends keyof ClusterEventMap>(event: K, listener: ClusterEventMap[K]): Cluster;
    function prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): Cluster;

    function removeListener<K extends keyof ClusterEventMap>(event: K, listener: ClusterEventMap[K]): Cluster;
    function removeListener(event: string | symbol, listener: (...args: any[]) => void): Cluster;

    function off<K extends keyof ClusterEventMap>(event: K, listener: ClusterEventMap[K]): Cluster;
    function off(event: string | symbol, listener: (...args: any[]) => void): Cluster;

    function listeners<K extends keyof ClusterEventMap>(event: K): Array<ClusterEventMap[K]>;
    function listeners(event: string | symbol): Function[];

    function removeAllListeners(event?: string | symbol): Cluster;
    function setMaxListeners(n: number): Cluster;
    function getMaxListeners(): number;
    function rawListeners(event: string | symbol): Function[];
    function listenerCount(type: string | symbol): number;

    function eventNames(): Array<string | symbol>;
}
