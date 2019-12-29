// Type definitions for strong-cluster-control 2.2
// Project: https://github.com/strongloop/strong-cluster-control
// Definitions by: Shun Takahashi <https://github.com/shuntksh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

declare namespace StrongClusterControl {
    type pid = number;

    interface StartOptions {
        size?: number;
        env?: {};
        shutdownTimeout?: number;
        terminateTimeout?: number;
        throttleDelay?: number;
    }

    interface ClusterMaster {
        pid: number;
        setSize?: number;
        startTime: number;
    }

    interface ClusterWorker extends ClusterMaster {
        id: number;
    }

    interface ClusterStatus {
        master: ClusterMaster;
        workers: ClusterWorker[];
    }

    interface CMD {
        SHUTDOWN: "CLUSTER_CONTROL_shutdown";
    }

    interface Control extends NodeJS.EventEmitter {
        readonly cmd: CMD;
        readonly CPUS: number;
        readonly options: StartOptions;

        /**
         * @description Start the controller
         * @param [options] - An options object, no default, and options object is not required.
         * @param [options.size] - Number of workers that should be running, the default is to not control the number of workers
         * @param [options.env=null] - Environment properties object passed to cluster.fork() if the controller has to start a worker to resize the cluster, default is null.
         * @param [options.shutdownTimeout=5000] - Number of milliseconds to wait after shutdown before terminating a worker, the default is 5 seconds
         * @param [options.terminateTimeout=5000] - Number of milliseconds to wait after terminate before killing a worker, the default is 5 seconds
         * @param [options.throttoleDelay] - Number of milliseconds to delay restarting workers after they are exiting abnormally. Abnormal is defined as as not suicide.
         */
        start(options?: StartOptions, callback?: () => any): this;
        start(callback?: () => any): this;

        /**
         * @description Stop the controller, after stopping workers (if the size is being controlled, see setSize()).
         */
        stop(callback?: () => any): this;

        /**
         * @description Restart workers one by one, until all current workers have been restarted.
         */
        restart(): this;

        /**
         * @description Returns the current cluster status
         */
        status(): ClusterStatus;

        /**
         * @description Set the size of the cluster.
         * @param N - The size of the cluster is the number of workers that should be maintained online.
         */
        setSize(N?: number): this;

        /**
         * @description Disconnect worker id and take increasingly agressive action until it exits.
         * @param id - Cluster worker ID,
         */
        shutdown(id: number): this;

        /**
         * @description Disconnect worker id and take increasingly agressive action until it exits.
         * @param id - Cluster worker ID,
         */
        terminate(id: number): this;

        on(event: "start" | "stop" | "restart", handler: () => any): this;
        on(event: "setSize" | "resize", handler: (size: number) => any): this;
        on(event: "startWorker", handler: (worker: ClusterWorker) => any): this;
        on(event: "startRestart", handler: (workers: pid[]) => any): this;
        on(event: "stopWorker", handler: (worker: ClusterWorker, code: number, signal: string) => any): this;
        on(event: "error", handler: (error: Error | Error[]) => any): this;
    }
}

declare const control: StrongClusterControl.Control;
export = control;
