// Type definitions for forever-monitor 1.7
// Project: https://github.com/nodejitsu/forever-monitor#readme
// Definitions by: Shun Takahashi <https://github.com/shuntksh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

interface spawnWith {
    customFds: number[];
    setsid: boolean;
    uid: number;
    gid: number;
}

interface parserArgs {
    command: string;
    args: string[];
}

interface Options {
    silent?: boolean;
    uid?: "autogen" | string;
    pidFile?: string;
    max?: number;
    killTree?: boolean;
    minUptime?: number;
    spinSleepTime?: number;
    command?: "node" | string;
    args?: string[];
    sourceDir?: string;
    watch?: boolean;
    watchIgnoreDotFiles?: boolean;
    watchIgnorePatters?: string[];
    watchDirectory?: string;
    spawnWith?: spawnWith;
    env?: { [envKey: string]: string; };
    cwd?: string;
    logFile?: string;
    outFile?: string;
    errFile?: string;
    parser?: (command: string, args: string[]) => { command: string, args: string[] };
}


export declare class Monitor extends NodeJS.EventEmitter {

    /**
     * @param script - Location of the target script to run.
     * @param [options] - Configuration for this instance.
     */
    constructor(script: string, options?: Options);

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

interface forever {
    Monitor: Monitor;
    start: (script: string, options: Options) => Monitor;
    kill: (pid: number, killTree?: boolean, signal?: string, callback?: () => any) => void;
    checkProcess: (pid: number) => boolean;
    version: string;
}

export default forever;
