// Type definitions for python-shell 0.4
// Project: http://github.com/extrabacon/python-shell
// Definitions by: Dolan Miu <https://github.com/dolanmiu>, Colin Richardson <https://github.com/WORMSS>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from "events";

export class PythonShell extends EventEmitter {
    end(callback: (message: string) => void): void;
    send(message: any | string): void;

    constructor(scriptName: string, options?: InstanceOptions);
    defaultOptions: RunOptions;
}

export interface RunOptions {
    mode?: string;
    formatter?: string;
    parser?: string;
    encoding?: string;
    pythonPath?: string;
    pythonOptions?: string[];
    scriptPath?: string;
    args?: string[];
}

export interface InstanceOptions {
    script?: string;
    command?: string;
    stdin?: any;
    stdout?: any;
    stderr?: any;
    childProcess?: string;
    terminated?: any;
    exitCode?: any;
    args?: any[];
}

export function run(scriptName: string, RunOptions: RunOptions, callback: (err: Error, results?: any) => void): void;
export function run(scriptName: string, callback: (err: Error, results?: any) => void): void;
