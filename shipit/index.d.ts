// Type definitions for shipit 1.5.1
// Project: https://github.com/shipitjs/shipit
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module "shipit-cli" {
    import shipit = require("shipit-cli");

    import * as fs from "fs";
    import * as child_process from "child_process";

    type LocalOrRemoteCommand = (command: string, options?: child_process.ExecOptions, callback?: (error: Error, stdout: string, stderr: string) => void) => PromiseLike<ShipitLocal>;
    type TaskExecution = (name: string, depsOrFn: string[] | Function, fn: Function) => any;

    export interface Options {
        environment: string;
        stderr: fs.WriteStream;
        stdout: fs.WriteStream;
    }

    export interface ShipitLocal {
        child: child_process.ChildProcess;
        stderr: fs.WriteStream;
        stdout: fs.WriteStream;
    }

    export interface Tasks {
        [name: string]: Task;
    }

    export interface Task {
        blocking: boolean;
        dep: string[];
        fn: Function;
        name: string;
    }

    export function blTask(name: string, depsOrFn: string[] | Function, fn?: Function): any;
    export function emit(name: string): any;
    export function initConfig(config: {}): typeof shipit;
    export function local(command: string, options?: child_process.ExecOptions, callback?: (error: Error, stdout: string, stderr: string) => void): PromiseLike<ShipitLocal>;
    export function log(log: any): void;
    export function log(...log: any[]): void;
    export function on(name: string, callback: Function): any;
    export function remote(command: string, options?: child_process.ExecOptions, callback?: (error: Error, stdout: string, stderr: string) => void): PromiseLike<ShipitLocal>;
    export function remoteCopy(src: string, dest: string, options?: child_process.ExecOptions, callback?: (error: Error, stdout: string, stderr: string) => void): PromiseLike<ShipitLocal>;
    export function start(tasks: string): typeof shipit;
    export function start(tasks: string[]): typeof shipit;
    export function start(...tasks: string[]): typeof shipit;
    export function task(name: string, depsOrFn: string[] | Function, fn?: Function): typeof shipit;

    export var config: {};
    export var domain: any;
    export var doneCallback: any;
    export var environment: string;
    export var seq: any[];
    export var tasks: Tasks;
    export var isRunning: boolean;
}
