// Type definitions for ignore-walk 3.0
// Project: https://github.com/isaacs/ignore-walk#readme
// Definitions by: Matthew Peveler <https://github.com/MasterOdin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types='node' />

import { EventEmitter } from 'events';
import { Stats } from 'fs';

declare function walk(options?: walk.WalkerOptions, callback?: (results: string[]) => void): Promise<string[]>;
declare namespace walk {
    function sync(options?: WalkerOptions): string[];

    interface WalkerOptions {
        path?: string;
        ignoreFiles?: string[];
        parent?: Walker | WalkerSync | null;
        includeEmpty?: boolean;
        follow?: boolean;
    }

    class Walker extends EventEmitter {
        path: string;
        basename: string;
        ignoreFiles: string[];
        ignoreRules: {[file: string]: string};
        parent: Walker | WalkerSync | null;
        includeEmpty: boolean;
        root: string;
        follow: boolean;
        result: Set<string> | string[];
        entries: string[];
        sawError: boolean;

        constructor(opts?: WalkerOptions);
        sort(a: string, b: string): number;
        emit(ev: string, data: any): boolean;
        start(): this;
        isIgnoreFile(e: string): boolean;
        onReaddir(entries: string[]): void;
        addIgnoreFiles(): void;
        addIgnoreFile(file: string, then: () => void): void;
        onReadIgnoreFile(file: string, data: string, then: () => void): void;
        filterEntries(): void;
        onstat(st: Stats, entry: string, file: boolean, dir: boolean, then: () => void): void;
        stat(entry: string, file: boolean, dir: boolean, the: () => void): void;
        walkerOpt(entry: string): {
            path: string;
            ignoreFiles: string[];
            parent: Walker | WalkerSync;
            includeEmpty: boolean;
            follow: boolean;
        };
        walker(entry: string, then: () => void): void;
        filterEntry(entry: string, partial: boolean): boolean;

        addListener(event: 'error', listener: (err: Error) => void): this;
        addListener(event: 'done', listener: (data: string[]) => void): this;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: 'done', listener: (data: string[]) => void): this;
        once(event: 'error', listener: (err: Error) => void): this;
        once(event: 'done', listener: (data: string[]) => void): this;
        prependListener(event: 'error', listener: (err: Error) => void): this;
        prependListener(event: 'done', listener: (data: string[]) => void): this;
        prependOnceListener(event: 'error', listener: (err: Error) => void): this;
        prependOnceListener(event: 'done', listener: (data: string[]) => void): this;
    }

    class WalkerSync extends Walker {
        constructor(opts?: WalkerOptions);
        start(): this;
        addIgnoreFile(file: string, then: () => void): void;
        stat(entry: string, file: boolean, dir: boolean, then: () => void): void;
        walker(entry: string, then: () => void): void;
    }
}

export = walk;
