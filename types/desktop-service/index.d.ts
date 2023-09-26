import { EventEmitter } from "events";

interface ServiceConfigOptions {
    /** The name of the service. */
    name: string;
    /** Description of the service. */
    description: string;
    /** The absolute path of the script to launch as a service. */
    script: string;
    env?: EnvironmentVariables | EnvironmentVariables[];
    /**
     * The maximum number of restarts within a 60 second period before halting the process.
     * This cannot be disabled, but it can be rendered ineffective by setting a value of `0`.
     */
    maxRestarts?: number;
    /**
     * The maximum number of restart attempts to make before the service is considered
     * non-responsive/faulty. Ignored by default.
     */
    maxRetries?: number;
    /**
     * Setting this to `true` will force the process to exit if it encounters
     * an error that stops the node.js script from running.
     * This does not mean the process will stop if the script throws an error.
     * It will only abort if the script throws an error causing the process to exit
     * (i.e. `process.exit(1)`).
     */
    abortOnError?: boolean;
    /**
     * The initial number of seconds to wait before attempting a restart
     * (after the script stops).
     */
    wait?: number;
    /**
     * A number between 0-1 representing the percentage growth rate for the `wait` interval.
     * Setting this to anything other than `0` allows the process to increase it's wait period
     * on every restart attempt. If a process dies fatally, this will prevent the server from
     * restarting the process too rapidly (and too strenuously).
     */
    grow?: number;
}

declare class Service extends EventEmitter {
    constructor(options: ServiceConfigOptions);
    /**
     * The maximum number of restarts within a 60 second period before halting the process.
     * This cannot be disabled, but it can be rendered ineffective by setting a value of `0`.
     */
    maxRestarts: number;
    /**
     * The maximum number of restart attempts to make before the service is considered
     * non-responsive/faulty. Ignored by default.
     */
    maxRetries: number;
    /**
     * A number between 0-1 representing the percentage growth rate for the `wait` interval.
     * Setting this to anything other than `0` allows the process to increase it's wait period
     * on every restart attempt. If a process dies fatally, this will prevent the server from
     * restarting the process too rapidly (and too strenuously).
     */
    grow: number;
    /** Description of the service. */
    description: string;
    /** Install the script as a service. */
    install(): void;
    /** Uninstall an existing service */
    uninstall(): void;
    /** Start and/or create the service. */
    start(): void;
    /** Stop the service if it is currently running. */
    stop(): void;
    /** Restart the service. */
    restart(): void;
    /** The absolute path of the script to launch as a service. */
    script: string;
    /** The name of the service. */
    name: string;
    /**
     * The initial number of seconds to wait before attempting a restart
     * (after the script stops).
     */
    wait: number;
    /**
     * Setting this to `true` will force the process to exit if it encounters
     * an error that stops the node.js script from running.
     * This does not mean the process will stop if the script throws an error.
     * It will only abort if the script throws an error causing the process to exit
     * (i.e. `process.exit(1)`).
     */
    abortOnError: boolean;
    on(
        event: "install" | "alreadyinstalled" | "invalidinstallation" | "uninstall" | "start" | "stop",
        listener: () => void,
    ): this;
    on(event: "error", listener: (err: any) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
}

export = Service;

interface EnvironmentVariables {
    name: string;
    value: any;
}
