// Type definitions for walk ^2.3.14
// Project: https://git.coolaj86.com/coolaj86/fs-walk.js
// Definitions by: Pontus Östlund <https://github.com/poppa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Stats } from "fs";

declare module walk {
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

    class Walker {
        constructor(path: string, options: WalkOptions, sync: boolean);
        on(event: 'names', cb: WalkNamesEventCallback): void;
        on(event: 'files', cb: WalkStatArrayEventCallback): void;
        on(event: 'file', cb: WalkStatEventCallback): void;
        on(event: 'directories', cb: WalkStatArrayEventCallback): void;
        on(event: 'directory', cb: WalkStatEventCallback): void;
        on(event: 'end', cb: () => void): void;
        on(event: 'errors', cb: WalkStatArrayEventCallback): void;
        on(event: 'nodeError', cb: WalkStatArrayEventCallback): void;
        on(event: 'directoryError', cb: WalkStatArrayEventCallback): void;
        pause(): void;
        resume(): void;
    }

    export function walk(path: string, options?: WalkOptions): Walker;
    export function walkSync(path: string, options?: WalkOptions): Walker;
}

export = walk;
