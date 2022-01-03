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
    set(option: string, value?: string): Rsync;

    unset(option: string): Rsync;

    flags(flags: string | string[] | Flag, set?: boolean): Rsync;
    flags(...args: any[]): Rsync;

    isSet(option: string): boolean;

    option(option: string): any;

    args(): string[];

    command(): string;

    output(stdout: StreamDataHandler, stderr: StreamDataHandler): Rsync;

    execute(
        callback?: (err: Error | null, code: number, cmd: string) => void,
        stdout?: StreamDataHandler,
        stderr?: StreamDataHandler
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
    chmod(flags: string): Rsync;
    dry(): Rsync;

    // accessor methods
    executable(e?: string): Rsync;

    executableShell(e?: string): Rsync;

    destination(d?: string): Rsync;

    source(s?: string | string[]): Rsync;

    // pattern accessors
    patterns(patterns: (string | Pattern)[]): Rsync;

    exclude(p: string | string[]): Rsync;

    include(p: string | string[]): Rsync;
}

interface RsyncStatic {
    new (): Rsync;

    build: (options: Partial<{ [ Property in keyof Rsync ]: Parameters<Rsync[Property]>[0] }>) => Rsync;
}

declare const e: RsyncStatic;
export = e;
