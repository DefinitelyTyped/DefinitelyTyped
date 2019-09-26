// Type definitions for walk 2.3
// Project: https://git.coolaj86.com/coolaj86/fs-walk.js
// Definitions by: Pontus Östlund <https://github.com/poppa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stats } from "fs";

export interface WalkStats extends Stats {
    name: string;
    type: "file"
        | "directory"
        | "symbolicLink"
        | "blockDevice"
        | "characterDevice"
        | "FIFO"
        | "socket";
    error?: NodeJS.ErrnoException;
}

export interface WalkOptionsListeners {
    names?: WalkNamesEventCallback;
    files?: WalkStatArrayEventCallback;
    file?: WalkStatEventCallback;
    directories?: WalkStatArrayEventCallback;
    directory?: WalkStatEventCallback;
    end?: WalkStatArrayEventCallback;
    errors?: WalkStatArrayEventCallback;
    nodeError?: WalkStatArrayEventCallback;
    directoryError?: WalkStatArrayEventCallback;
}

export interface WalkOptions {
    followLinks?: boolean;
    filters?: string[];
    listeners?: WalkOptionsListeners;
}

export type WalkNext = () => void;

export type WalkStatEventCallback = (
    base: string,
    names: WalkStats,
    next: WalkNext) => void;

export type WalkStatArrayEventCallback = (
    base: string,
    names: WalkStats[],
    next: WalkNext) => void;

export type WalkNamesEventCallback = (
    base: string,
    names: string[],
    next: WalkNext) => void;

export type WalkStatArrayEvent
    = 'files'
    | 'directories'
    | 'errors'
    | 'nodeError'
    | 'directoryError';

export type WalkStatEvent = 'file' | 'directory';

export interface Walker {
    on(event: 'names', cb: WalkNamesEventCallback): void;
    on(event: WalkStatArrayEvent, cb: WalkStatArrayEventCallback): void;
    on(event: WalkStatEvent, cb: WalkStatEventCallback): void;
    on(event: 'end', cb: () => void): void;
    pause(): void;
    resume(): void;
}

export function walk(path: string, options?: WalkOptions): Walker;
export function walkSync(path: string, options?: WalkOptions): Walker;
