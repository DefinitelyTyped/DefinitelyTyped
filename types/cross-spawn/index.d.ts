// Type definitions for cross-spawn 6.0
// Project: https://github.com/moxystudio/node-cross-spawn
// Definitions by: Alorel <https://github.com/Alorel>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as child_process from "child_process";

declare namespace spawn {
    /**
     * The `spawn()` method spawns a new process using the given `command`, with
     * command line arguments in `args`. If omitted, `args` defaults to an empty array.
     */
    const spawn: typeof child_process.spawn;

    /**
     * The `spawn.sync()` method spawns a new process using the given `command`, with
     * command line arguments in `args`. If omitted, `args` defaults to an empty array.
     */
    const sync: typeof child_process.spawnSync;
}

/**
 * The `spawn()` method spawns a new process using the given `command`, with
 * command line arguments in `args`. If omitted, `args` defaults to an empty array.
 */
declare function spawn(command: string, options: child_process.SpawnOptions): child_process.ChildProcess;
declare function spawn(
    command: string,
    args?: ReadonlyArray<string>,
    options?: child_process.SpawnOptions,
): child_process.ChildProcess;

export = spawn;
