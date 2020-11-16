// Type definitions for node-vagrnat.js 1.4
// Project: https://github.com/edin-m/node-vagrant
// Definitions by: Matthew Peveler <https://github.com/MasterOdin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { EventEmitter } from 'events';

export type ErrorArg = Error | string | null;
export type Callback = (err: ErrorArg, out?: string) => void;

export interface Snapshots {
    push(cb?: Callback): void;
    pop(cb?: Callback): void;
    save(args?: string | string[], cb?: Callback): void;
    restore(args?: string | string[], cb?: Callback): void;
    list(cb?: Callback): void;
    delete(args: string | string[], cb?: Callback): void;
}

export interface Plugin {
    expunge(args?: string | string[], cb?: Callback): void;
    install(args?: string | string[], cb?: Callback): void;
    uninstall(args?: string | string[], cb?: Callback): void;
    list(args?: string | string[], cb?: Callback): void;
    repair(args?: string | string[], cb?: Callback): void;
    update(args?: string | string[], cb?: Callback): void;
}

export interface ProgressEmitter extends EventEmitter {
    on(event: 'progress', listener: (machine: string, progress: string, rate: string, remaining: string) => void): this;
}

export interface MachineEmitter extends EventEmitter {
    on(event: 'stdout' | 'stderr' | 'up-progress', listener: (chunk: any) => void): this;
    on(event: 'progress', listener: (machine: string, progress: string, rate: string, remaining: string) => void): this;
}

export interface Machine extends MachineEmitter {
    batch: Array<{command: string, cb: (err: ErrorArg, out?: any) => void}>;
    opts: {cwd: string, pwd: NodeJS.ProcessEnv};

    init(args: string | string[], cb: Callback): void;
    init(args: string | string[], config: any, cb: Callback): void;
    up(cb?: Callback): void;
    up(args?: string | string[], cb?: Callback): void;
    status(cb: (err: ErrorArg, out?: Array<{status: string, provider: string}>) => void): void;
    sshConfig(cb: (err: ErrorArg, out?: {host: string | null, port: string | null, hostname: string | null, user: string | null, private_key: string | null}) => void): void;
    provision(cb?: Callback): void;
    suspend(cb?: Callback): void;
    resume(cb?: Callback): void;
    reload(cb?: Callback): void;
    reload(args?: string | string[], cb?: Callback): void;
    halt(cb?: Callback): void;
    halt(args?: string | string[], cb?: Callback): void;
    destroy(cb?: Callback): void;
    destroy(args?: string | string[], cb?: Callback): void;
    snapshots(): Snapshots;
    boxRepackage(name: string, provider: string, version: string, cb?: Callback): void;
    plugin(): Plugin;
    pluginUpdate(cb?: Callback): void;
    pluginRepair(cb?: Callback): void;
}

export function version(cb?: Callback): void;
export function versionStatus(cb: (err: ErrorArg, out?: {status: string, major: number, minor: number, patch: number}) => void): void;
export function globalStatus(cb: (err: ErrorArg, out?: Array<{id: string, name: string, provider: string, state: string}>) => void): void;
export function globalStatus(args: string | string[], cb: (err: ErrorArg, out?: Array<{id: string, name: string, provider: string, state: string}>) => void): void;
export function create(opts?: {cwd?: string, env?: NodeJS.ProcessEnv}): Machine;
export function boxAdd(box: string, cb?: Callback): ProgressEmitter;
export function boxAdd(box: string, args?: string | string[], cb?: Callback): ProgressEmitter;
export function boxList(cb: (err: ErrorArg, out?: Array<{name: string, provider: string, version: string}>) => void): void;
export function boxList(args: string | string[], cb: (err: ErrorArg, out?: Array<{name: string, provider: string, version: string}>) => void): void;
export function boxOutdated(cb: (err: ErrorArg, out?: Array<{name: string, status: string, currentVersion: string, latestVersion: string}>) => void): void;
export function boxOutdated(args: string | string[], cb: (err: ErrorArg, out?: Array<{name: string, status: string, currentVersion: string, latestVersion: string}>) => void): void;
export function boxPrune(cb?: Callback): void;
export function boxPrune(args: string | string[], cb?: Callback): void;
export function boxRemove(name: string, cb?: Callback): void;
export function boxRemove(name: string, args: string | string[], cb?: Callback): void;
export function boxUpdate(box: string, provider: string | null, cb?: Callback): ProgressEmitter;
export function promisify(): void;
