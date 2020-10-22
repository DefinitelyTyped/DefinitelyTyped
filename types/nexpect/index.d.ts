// Type definitions for nexpect 0.4.2
// Project: https://github.com/nodejitsu/nexpect
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
    cwd?: string;
    env?: any;
    ignoreCase?: any;
    stripColors?: any;
    stream?: any;
    verbose?: any;
}
