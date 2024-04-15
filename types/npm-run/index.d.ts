/// <reference types="node" />

import { exec, execSync, spawn, spawnSync } from "child_process";

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
