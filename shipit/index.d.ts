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

    function blTask(name: string, depsOrFn: string[] | EmptyCallback, fn?: () => void): any;
    function emit(name: string): any;
    function initConfig(config: {}): typeof shipit;
    function local(command: string, options?: child_process.ExecOptions, callback?: (error: Error, stdout: string, stderr: string) => void): PromiseLike<ShipitLocal>;
    function log(log: any): void;
    function log(...log: any[]): void;
    function on(name: string, callback: (e: any) => void): any;
    function remote(command: string, options?: child_process.ExecOptions, callback?: (error: Error, stdout: string, stderr: string) => void): PromiseLike<ShipitLocal>;
    function remoteCopy(src: string, dest: string, options?: child_process.ExecOptions, callback?: (error: Error, stdout: string, stderr: string) => void): PromiseLike<ShipitLocal>;
    function start(tasks: string | string[]): typeof shipit;
    function start(...tasks: string[]): typeof shipit;
    function task(name: string, depsOrFn: string[] | EmptyCallback, fn?: () => void): typeof shipit;

    var config: {};
    var domain: any;
    var doneCallback: any;
    var environment: string;
    var seq: any[];
    var tasks: Tasks;
    var isRunning: boolean;
}

export = shipit;
