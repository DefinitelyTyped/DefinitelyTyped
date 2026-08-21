/// <reference types="node" />

import { ChildProcess } from "child_process";
import { WaitOnOptions } from "wait-on";

export interface JestDevServerOptions {
    /**
     * Command to execute to start the port. Directly passed to spawnd.
     *
     * ```js
     * module.exports = {
     *   command: 'npm run start',
     * }
     * ```
     */
    command: string;

    /**
     * Log server output, useful if server is crashing at start.
     * @default false
     * ```js
     * module.exports = {
     *   command: 'npm run start',
     *   debug: true,
     * }
     * ```
     */
    debug?: boolean | undefined;

    /**
     * How many milliseconds to wait for the spawned server to be available before giving up. Defaults to wait-port's default.
     * @default 5000
     * ```js
     * module.exports = {
     *   command: 'npm run start',
     *   launchTimeout: 30000,
     * }
     * ```
     */
    launchTimeout?: number | undefined;

    /**
     * Host to wait for activity on before considering the server running. Must be used in conjunction with port.
     * @default 'localhost'
     *
     * ```js
     * module.exports = {
     *   command: 'npm run start --port 3000',
     *   host: 'customhost.com',
     *   port: 3000
     * }
     * ```
     */
    host?: string | undefined;

    /**
     * Path to resource to wait for activity on before considering the server running. Must be used in conjunction with host and port.
     * @default null
     *
     * ```js
     * module.exports = {
     *   command: 'npm run start --port 3000',
     *   host: 'customhost.com',
     *   port: 3000,
     *   path: 'thing',
     * }
     * ```
     */
    path?: string | undefined;

    /**
     * To wait for an HTTP or TCP endpoint before considering the server running, include http or tcp as a protocol. Must be used in conjunction with port.
     * @default 'tcp'
     * ```js
     * module.exports = {
     *   command: 'npm run start --port 3000',
     *   protocol: 'http',
     *   port: 3000,
     * }
     * ```
     */
    protocol?: "https" | "http" | "tcp" | "socket" | undefined;

    /**
     * Port to wait for activity on before considering the server running. If not provided, the server is assumed to immediately be running.
     * @default null
     *
     * ```js
     * module.exports = {
     *   command: 'npm run start --port 3000',
     *   port: 3000,
     * }
     * ```
     */
    port?: number | undefined;

    /**
     * It defines the action to take if port is already used:
     * @default 'ask'
     *
     * - ask: a prompt is shown to decide if you want to kill the process or not
     * - error: an errow is thrown
     * - ignore: your test are executed, we assume that the server is already started
     * - kill: the process is automatically killed without a prompt
     *
     * ```js
     * module.exports = {
     *   command: 'npm run start --port 3000',
     *   port: 3000,
     *   usedPortAction: 'kill',
     * }
     */
    usedPortAction?: "ask" | "error" | "ignore" | "kill" | undefined;

    /**
     * jest-dev-server uses the wait-on npm package to wait for resources to become available before calling callback.
     * @default {}
     *
     * ```js
     * module.exports = {
     *   command: 'npm run start --port 3000',
     *   port: 3000,
     *   usedPortAction: 'kill',
     *   waitOnScheme: {
     *     delay: 1000,
     *   },
     * }
     */
    waitOnScheme?: Partial<WaitOnOptions> | undefined;
}

export const ERROR_TIMEOUT: "ERROR_TIMEOUT";
export const ERROR_PORT_USED: "ERROR_PORT_USED";
export const ERROR_NO_COMMAND: "ERROR_NO_COMMAND";

export function setup(
    options: JestDevServerOptions | JestDevServerOptions[],
): Promise<void>;
export function teardown(): Promise<void>;
export function getServers(): ChildProcess[];

export class JestDevServerError extends Error {}
