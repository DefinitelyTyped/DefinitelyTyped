// Type definitions for lightship 6.1
// Project: https://github.com/gajus/lightship#readme
// Definitions by: Scott Chang <https://github.com/purmac>, Karoun Kasraie <https://github.com/karoun>, Jay Anslow <https://github.com/janslow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import { Server } from 'http';

/**
 * A teardown function called when shutdown is initialized.
 * @param userConfiguration User configuration object
 */
export function createLightship(configuration?: ConfigurationInputType): LightshipType;

export type BeaconContextType = object;

export interface BeaconControllerType {
    die: () => Promise<void>;
}

export interface ConfigurationInputType {
    /**
     * Run Lightship in local mode when Kubernetes is not detected.
     * @default true.
     */
    detectKubernetes?: boolean;
    /**
     * A number of milliseconds before forcefull termination if process does not gracefully exit.
     * The timer starts when `lightship.shutdown()` is called. This includes the time allowed to live beacons.
     * @default 60_000
     */
    gracefulShutdownTimeout?: number;
    /**
     * The port on which the Lightship service listens. This port must be different than your main service port, if any.
     * @default 9000
     */
    port?: number;
    /**
     * A number of milliseconds before forceful termination if shutdown handlers do not complete. The timer starts when the first shutdown handler is called.
     * @default 5000
     */
    shutdownHandlerTimeout?: number;
    /**
     * An a array of [signal events](https://nodejs.org/api/process.html#process_signal_events).
     * @default [SIGTERM, SIGHUP, SIGINT].
     */
    signals?: ReadonlyArray<NodeJS.Signals>;
    /**
     * Method used to terminate Node.js process
     * @default `() => { process.exit(1) };`
     */
    terminate?: () => void;
}

export interface LightshipType {
    createBeacon: (context?: BeaconContextType) => BeaconControllerType;
    /**
     * Checks if server is in SERVER_IS_READY state.
     */
    isServerReady: () => boolean;
    /**
     * Checks if server is in SERVER_IS_SHUTTING_DOWN state.
     */
    isServerShuttingDown: () => boolean;
    /**
     * Registers teardown functions that are called when shutdown is initialized.
     * All registered shutdown handlers are executed in the order they have been registered.
     * After all shutdown handlers have been executed, Lightship asks `process.exit()` to terminate the process synchronously.
     */
    registerShutdownHandler: (shutdownHandler: ShutdownHandlerType) => void;
    readonly server: Server;
    /**
     * Changes server state to SERVER_IS_SHUTTING_DOWN and initialises the shutdown of the application.
     */
    shutdown: () => Promise<void>;
    /**
     *  Changes server state to SERVER_IS_NOT_READY.
     */
    signalNotReady: () => void;
    /**
     * Changes server state to SERVER_IS_READY.
     */
    signalReady: () => void;
}

/**
 * A teardown function called when shutdown is initialized.
 */
export type ShutdownHandlerType = () => Promise<void> | void;
