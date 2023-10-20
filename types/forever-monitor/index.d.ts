/// <reference types="node" />

import { EventEmitter } from "events";

export interface SpawnWith {
    customFds: number[];
    setsid: boolean;
    uid: number;
    gid: number;
}

export interface Options {
    silent?: boolean | undefined;
    uid?: string | undefined;
    pidFile?: string | undefined;
    max?: number | undefined;
    killTree?: boolean | undefined;
    minUptime?: number | undefined;
    spinSleepTime?: number | undefined;
    command?: string | undefined;
    args?: string[] | undefined;
    sourceDir?: string | undefined;
    watch?: boolean | undefined;
    watchIgnoreDotFiles?: boolean | undefined;
    watchIgnorePatterns?: string[] | undefined;
    watchDirectory?: string | undefined;
    spawnWith?: SpawnWith | undefined;
    env?: NodeJS.ProcessEnv | undefined;
    cwd?: string | undefined;
    logFile?: string | undefined;
    outFile?: string | undefined;
    errFile?: string | undefined;
    parser?(command: string, args: string[]): { command: string; args: string[] };
}

export function start(script: string | string[], options?: Options): Monitor;
export function kill(pid: number, killTree?: boolean, signal?: string, callback?: () => any): void;
export function checkProcess(pid: number): boolean;
export const version: string;

export class Monitor extends EventEmitter {
    /**
     * @param script - Location of the target script to run.
     * @param [options] - Configuration for this instance.
     */
    constructor(script: string | string[], options?: Options);

    /**
     * @description Start the process that this instance is configured for
     * @param [restart] - Value indicating whether this is a restart.
     */
    start(restart?: boolean): this;

    /**
     * @description Tries to spawn the target Forever child process.
     */
    trySpawn(): boolean;

    /**
     * @description Restarts the target script associated with this instance.
     */
    restart(): this;

    /**
     * @description Stops the target script associated with this instance. Prevents it from auto-respawning
     */
    stop(): this;

    /**
     * @description Kills the ChildProcess object associated with this instance
     * @param [forceStop] - Value indicating whether short circuit forever auto-restart
     */
    kill(forceStop?: boolean): this;

    /**
     * @description Sends a message to a forked ChildProcess object associated with this instance
     */
    send(msg?: any): this;

    /**
     * respond with JSON for this instance
     */
    toString(): string;

    /**
     * @param command - Command string to parse
     * @param args - Additional default arguments
     */
    parseCommand(command: string, args?: string[]): false | { command: string; args?: string[] | undefined };
}
