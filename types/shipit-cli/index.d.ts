/// <reference types="node" />

import * as child_process from "child_process";
import * as fs from "fs";
import * as shipit from "./index"; // Used for `typeof shipit`

export type LocalOrRemoteCommand = (
    command: string,
    options?: child_process.ExecOptions,
    callback?: (error: Error, stdout: string, stderr: string) => void,
) => PromiseLike<ShipitLocal>;
export type EmptyCallback = () => void;
export type TaskExecution = (name: string, depsOrFn: string[] | EmptyCallback, fn: () => void) => any;

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
    fn(): void;
    name: string;
}

export function blTask(name: string, depsOrFn: string[] | EmptyCallback, fn?: () => void): any;
export function emit(name: string): any;
export function initConfig(config: {}): typeof shipit;
export function local(
    command: string,
    options?: child_process.ExecOptions,
    callback?: (error: Error, stdout: string, stderr: string) => void,
): PromiseLike<ShipitLocal>;
export function log(log: any): void;
export function log(...log: any[]): void;
export function on(name: string, callback: (e: any) => void): any;
export function remote(
    command: string,
    options?: child_process.ExecOptions,
    callback?: (error: Error, stdout: string, stderr: string) => void,
): PromiseLike<ShipitLocal>;

/**
 * @deprecated Use `copyToRemote` or `copyFromRemote` instead
 */
export function remoteCopy(
    src: string,
    dest: string,
    options?: child_process.ExecOptions,
    callback?: (error: Error, stdout: string, stderr: string) => void,
): PromiseLike<ShipitLocal>;
export function copyToRemote(src: string, dest: string, options?: child_process.ExecOptions): PromiseLike<ShipitLocal>;
export function copyFromRemote(
    src: string,
    dest: string,
    options?: child_process.ExecOptions,
): PromiseLike<ShipitLocal>;

export function start(tasks: string | string[]): typeof shipit;
export function start(...tasks: string[]): typeof shipit;
export function task(name: string, depsOrFn: string[] | EmptyCallback, fn?: () => void): typeof shipit;

export const config: {};
export const domain: any;
export const doneCallback: any;
export const environment: string;
export const seq: any[];
export const tasks: Tasks;
export const isRunning: boolean;

export as namespace shipit;
