// Type definitions for node-rsync v0.4.0
// Project: https://github.com/mattijs/node-rsync
// Definitions by: Philipp Stucki <https://github.com/philippstucki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


import * as child_process from 'child_process';
interface StreamDataHandler {
    (data: any): void;
}

interface Pattern {
    action: string;
    pattern: string;
}

interface Flag {
    [name: string]: boolean;
}

interface Rsync {
    // instance methods
    set(option: string, value: string): Rsync;
    set(option: string): Rsync;

    unset(option: string): Rsync;

    flags(flags: string, set?: boolean): Rsync;
    flags(flags: Flag): Rsync;
    flags(flags: string[], set?: boolean): Rsync;
    flags(...flags: any[]): Rsync;

    isSet(option: string): boolean;

    option(option: string): any;

    args(): string[];

    command(): string;

    output(stdout: StreamDataHandler, stderr: StreamDataHandler): Rsync;

    execute(callback: (err: Error, code: number, cmd: string) => void): child_process.ChildProcess;
    execute(
        callback: (err: Error, code: number, cmd: string) => void,
        stdout: StreamDataHandler,
        stderr: StreamDataHandler
    ): child_process.ChildProcess;
    
    // cwd
    cwd(cwd: string): string;

    // option shorthands
    shell(shell: string): Rsync;
    delete(): Rsync;
    progress(): Rsync;
    archive(): Rsync;
    compress(): Rsync;
    recursive(): Rsync;
    update(): Rsync;
    quiet(): Rsync;
    dirs(): Rsync;
    links(): Rsync;
    dry(): Rsync;

    // accessor methods
    executable(): string;
    executable(e: string): Rsync;

    executableShell(): string;
    executableShell(e: string): Rsync;

    destination(): string;
    destination(d: string): Rsync;

    source(): string[];
    source(s: string): Rsync;
    source(s: string[]): Rsync;

    // pattern accessors
    patterns(patterns: (string | Pattern)[]): Rsync;

    exclude(p: string): Rsync;
    exclude(p: string[]): Rsync;

    include(p: string): Rsync;
    include(p: string[]): Rsync;
}

interface RsyncStatic {
    new (): Rsync;
}

declare const e: RsyncStatic;
export = e;
