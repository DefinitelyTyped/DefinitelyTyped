/// <reference types="node" />

import child_process = require("child_process");

declare function spawn(command: string[], options?: ISpawnOptions): IChain;

declare function spawn(command: string, params?: any[], options?: ISpawnOptions): IChain;

declare function spawn(command: string, options?: ISpawnOptions): IChain;

interface IChain {
    expect(expectation: string): IChain;
    expect(expectation: RegExp): IChain;
    wait(expectation: string): IChain;
    wait(expectation: RegExp): IChain;
    sendline(line: string): IChain;
    sendEof(): IChain;
    run(callback: (err: Error, output: string[], exit: string | number) => void): child_process.ChildProcess;
}

interface ISpawnOptions {
    cwd?: string | undefined;
    env?: any;
    ignoreCase?: any;
    stripColors?: any;
    stream?: any;
    verbose?: any;
}
