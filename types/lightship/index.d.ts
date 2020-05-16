// Type definitions for lightship 4.0
// Project: https://github.com/gajus/lightship#readme
// Definitions by: Scott Chang <https://github.com/purmac>, Karoun Kasraie <https://github.com/karoun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import { Server } from 'http';

/**
 * A teardown function called when shutdown is initialized.
 * @param userConfiguration User configuration object
 */
export function createLightship(userConfiguration?: UserConfigurationType): LightshipType;

export type BeaconContextType = object;

export interface BeaconControllerType {
    die: () => Promise<void>;
}

export interface UserConfigurationType {
    /* Run Lightship in local mode when Kubernetes is not detected. Default: true. */
    detectKubernetes?: boolean;
    /* The port on which the Lightship service listens. This port must be different than your main service port, if any. The default port is 9000. */
    port?: number;
    /* An a array of [signal events]{@link https://nodejs.org/api/process.html#process_signal_events}. Default: [SIGTERM, SIGHUP, SIGINT]. */
    signals?: ReadonlyArray<NodeJS.Signals>;
    /* A number of milliseconds before forceful termination. Default: 60000. */
    timeout?: number;
}

export interface LightshipType {
    createBeacon: (context?: BeaconContextType) => BeaconControllerType;
    /* Checks if server is in SERVER_IS_READY state */
    isServerReady: () => boolean;
    /* Checks if server is in SERVER_IS_SHUTTING_DOWN state */
    isServerShuttingDown: () => boolean;
    /**
     * Registers teardown functions that are called when shutdown is initialized.
     * All registered shutdown handlers are executed in the order they have been registered.
     * After all shutdown handlers have been executed, Lightship asks `process.exit()` to terminate the process synchronously.
     */
    registerShutdownHandler: (shutdownHandler: ShutdownHandlerType) => void;
    readonly server: Server;
    /* Changes server state to SERVER_IS_SHUTTING_DOWN and initialises the shutdown of the application.*/
    shutdown: () => Promise<void>;
    /* Changes server state to SERVER_IS_NOT_READY. */
    signalNotReady: () => void;
    /* Changes server state to SERVER_IS_READY. */
    signalReady: () => void;
}

export type ShutdownHandlerType = () => Promise<void> | void;
