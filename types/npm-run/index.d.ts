// Type definitions for npm-run 5.0
// Project: https://github.com/timoxley/npm-run
// Definitions by: Manuel Thalmann <https://github.com/manuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
/// <reference types="node" />

import { exec, execSync, spawnSync, spawn } from "child_process";

type ExecFunction = typeof exec;

interface Runner extends ExecFunction {
    exec: ExecFunction;
    sync: typeof execSync;
    execSync: typeof execSync;
    spawnSync: typeof spawnSync;
    spawn: typeof spawn;
}

declare let npmRun: Runner;

export = npmRun;
