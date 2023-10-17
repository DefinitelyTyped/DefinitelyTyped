/// <reference types="node" />

import * as child_process from "child_process";
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

    flags(...args: Array<string | boolean>): Rsync;
    flags(flags: string | string[] | Flag, set?: boolean): Rsync;

    isSet(option: string): boolean;

    option(option: string): any;

    args(): string[];

    command(): string;

    output(stdout: StreamDataHandler, stderr: StreamDataHandler): Rsync;

    execute(
        callback?: (err: Error | null, code: number, cmd: string) => void,
        stdout?: StreamDataHandler,
        stderr?: StreamDataHandler,
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
    new(): Rsync;

    // The `build` method will take an arguments object where the key is an rsync method and the value is the first paramater to that argument.
    // If the method doesn't take an argument (e.g. `archive`, `progress`) then the value should be "true".
    // Technically speaking, the value can be anything if the method doesn't take an argument, but it may as well be typed consistently here.
    build: (
        options: Partial<
            {
                [Property in keyof Rsync]: [Parameters<Rsync[Property]>[0]] extends [undefined] ? true
                    : Parameters<Rsync[Property]>[0];
            }
        >,
    ) => Rsync;
}

declare const e: RsyncStatic;
export = e;
