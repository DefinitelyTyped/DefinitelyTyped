// Type definitions for shipit-cli 1.5
// Project: https://github.com/shipitjs/shipit
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as fs from "fs";
import * as child_process from "child_process";

declare namespace shipit {
    type LocalOrRemoteCommand = (command: string, options?: child_process.ExecOptions, callback?: (error: Error, stdout: string, stderr: string) => void) => PromiseLike<ShipitLocal>;
    type EmptyCallback = () => void;
    type TaskExecution = (name: string, depsOrFn: string[] | EmptyCallback, fn: () => void) => any;

    interface Options {
        environment: string;
        stderr: fs.WriteStream;
        stdout: fs.WriteStream;
    }

    interface ShipitLocal {
        child: child_process.ChildProcess;
        stderr: fs.WriteStream;
        stdout: fs.WriteStream;
    }

    interface Tasks {
        [name: string]: Task;
    }

    interface Task {
        blocking: boolean;
        dep: string[];
        fn: () => void;
        name: string;
    }

    export function blTask(name: string, depsOrFn: string[] | EmptyCallback, fn?: () => void): any;
    export function emit(name: string): any;
    export function initConfig(config: {}): typeof shipit;
    export function local(command: string, options?: child_process.ExecOptions, callback?: (error: Error, stdout: string, stderr: string) => void): PromiseLike<ShipitLocal>;
    export function log(log: any): void;
    export function log(...log: any[]): void;
    export function on(name: string, callback: (e: any) => void): any;
    export function remote(command: string, options?: child_process.ExecOptions, callback?: (error: Error, stdout: string, stderr: string) => void): PromiseLike<ShipitLocal>;
    export function remoteCopy(src: string, dest: string, options?: child_process.ExecOptions, callback?: (error: Error, stdout: string, stderr: string) => void): PromiseLike<ShipitLocal>;
    export function start(tasks: string | string[]): typeof shipit;
    export function start(...tasks: string[]): typeof shipit;
    export function task(name: string, depsOrFn: string[] | EmptyCallback, fn?: () => void): typeof shipit;

    export var config: {};
    export var domain: any;
    export var doneCallback: any;
    export var environment: string;
    export var seq: any[];
    export var tasks: Tasks;
    export var isRunning: boolean;
}

//tslint:disable-next-line:export-just-namespace
export = shipit;
export as namespace shipit;
