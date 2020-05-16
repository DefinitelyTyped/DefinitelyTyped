// Type definitions for forever-monitor 1.7
// Project: https://github.com/nodejitsu/forever-monitor#readme
// Definitions by: Shun Takahashi <https://github.com/shuntksh>
//                 Will Boyce <https://github.com/wrboyce>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import { EventEmitter } from 'events';

export interface SpawnWith {
    customFds: number[];
    setsid: boolean;
    uid: number;
    gid: number;
}

export interface Options {
    silent?: boolean;
    uid?: string;
    pidFile?: string;
    max?: number;
    killTree?: boolean;
    minUptime?: number;
    spinSleepTime?: number;
    command?: string;
    args?: string[];
    sourceDir?: string;
    watch?: boolean;
    watchIgnoreDotFiles?: boolean;
    watchIgnorePatterns?: string[];
    watchDirectory?: string;
    spawnWith?: SpawnWith;
    env?: NodeJS.ProcessEnv;
    cwd?: string;
    logFile?: string;
    outFile?: string;
    errFile?: string;
    parser?(command: string, args: string[]): { command: string, args: string[] };
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
    parseCommand(command: string, args?: string[]): (false | { command: string, args?: string[]});
}
