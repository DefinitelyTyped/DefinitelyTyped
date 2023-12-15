/// <reference types="node" />

import { Stats } from "fs";

export interface WalkStats extends Stats {
    name: string;
    type:
        | "file"
        | "directory"
        | "symbolicLink"
        | "blockDevice"
        | "characterDevice"
        | "FIFO"
        | "socket";
    error?: NodeJS.ErrnoException | undefined;
}

export interface WalkOptionsListeners {
    names?: WalkNamesEventCallback | undefined;
    files?: WalkStatArrayEventCallback | undefined;
    file?: WalkStatEventCallback | undefined;
    directories?: WalkStatArrayEventCallback | undefined;
    directory?: WalkStatEventCallback | undefined;
    end?: WalkStatArrayEventCallback | undefined;
    errors?: WalkStatArrayEventCallback | undefined;
    nodeError?: WalkStatArrayEventCallback | undefined;
    directoryError?: WalkStatArrayEventCallback | undefined;
}

export interface WalkOptions {
    followLinks?: boolean | undefined;
    filters?: string[] | undefined;
    listeners?: WalkOptionsListeners | undefined;
}

export type WalkNext = () => void;

export type WalkStatEventCallback = (
    base: string,
    names: WalkStats,
    next: WalkNext,
) => void;

export type WalkStatArrayEventCallback = (
    base: string,
    names: WalkStats[],
    next: WalkNext,
) => void;

export type WalkNamesEventCallback = (
    base: string,
    names: string[],
    next: WalkNext,
) => void;

export type WalkStatArrayEvent =
    | "files"
    | "directories"
    | "errors"
    | "nodeError"
    | "directoryError";

export type WalkStatEvent = "file" | "directory";

export interface Walker {
    on(event: "names", cb: WalkNamesEventCallback): void;
    on(event: WalkStatArrayEvent, cb: WalkStatArrayEventCallback): void;
    on(event: WalkStatEvent, cb: WalkStatEventCallback): void;
    on(event: "end", cb: () => void): void;
    pause(): void;
    resume(): void;
}

export function walk(path: string, options?: WalkOptions): Walker;
export function walkSync(path: string, options?: WalkOptions): Walker;
