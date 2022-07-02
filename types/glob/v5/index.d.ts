// Type definitions for Glob 5.0
// Project: https://github.com/isaacs/node-glob
// Definitions by: vvakame <https://github.com/vvakame>
//                 voy <https://github.com/voy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import events = require("events");
import fs = require('fs');
import minimatch = require("minimatch");

declare function G(pattern: string, cb: (err: Error | null, matches: string[]) => void): void;
declare function G(pattern: string, options: G.IOptions, cb: (err: Error | null, matches: string[]) => void): void;

declare namespace G {
    function __promisify__(pattern: string, options?: IOptions): Promise<string[]>;

    function sync(pattern: string, options?: IOptions): string[];

    function hasMagic(pattern: string, options?: IOptions): boolean;

    let Glob: IGlobStatic;
    let GlobSync: IGlobSyncStatic;

    interface IOptions extends minimatch.IOptions {
        cwd?: string | undefined;
        root?: string | undefined;
        dot?: boolean | undefined;
        nomount?: boolean | undefined;
        mark?: boolean | undefined;
        nosort?: boolean | undefined;
        stat?: boolean | undefined;
        silent?: boolean | undefined;
        strict?: boolean | undefined;
        cache?: { [path: string]: any /* boolean | string | string[] */ } | undefined;
        statCache?: { [path: string]: fs.Stats } | undefined;
        symlinks?: any;
        sync?: boolean | undefined;
        nounique?: boolean | undefined;
        nonull?: boolean | undefined;
        debug?: boolean | undefined;
        nobrace?: boolean | undefined;
        noglobstar?: boolean | undefined;
        noext?: boolean | undefined;
        nocase?: boolean | undefined;
        matchBase?: any;
        nodir?: boolean | undefined;
        ignore?: any; /* string | string[] */
        follow?: boolean | undefined;
        realpath?: boolean | undefined;
        nonegate?: boolean | undefined;
        nocomment?: boolean | undefined;
        absolute?: boolean | undefined;

        /** Deprecated. */
        globDebug?: boolean | undefined;
    }

    interface IGlobStatic extends events.EventEmitter {
        new (pattern: string, cb?: (err: Error | null, matches: string[]) => void): IGlob;
        new (pattern: string, options: IOptions, cb?: (err: Error | null, matches: string[]) => void): IGlob;
        prototype: IGlob;
    }

    interface IGlobSyncStatic {
        new (pattern: string, options?: IOptions): IGlobBase;
        prototype: IGlobBase;
    }

    interface IGlobBase {
        minimatch: minimatch.IMinimatch;
        options: IOptions;
        aborted: boolean;
        cache: { [path: string]: any /* boolean | string | string[] */ };
        statCache: { [path: string]: fs.Stats };
        symlinks: { [path: string]: boolean };
        realpathCache: { [path: string]: string };
        found: string[];
    }

    interface IGlob extends IGlobBase, events.EventEmitter {
        pause(): void;
        resume(): void;
        abort(): void;

        /** Deprecated. */
        EOF: any;
        /** Deprecated. */
        paused: boolean;
        /** Deprecated. */
        maxDepth: number;
        /** Deprecated. */
        maxLength: number;
        /** Deprecated. */
        changedCwd: boolean;
        /** Deprecated. */
        cwd: string;
        /** Deprecated. */
        root: string;
        /** Deprecated. */
        error: any;
        /** Deprecated. */
        matches: string[];
        /** Deprecated. */
        log(...args: any[]): void;
        /** Deprecated. */
        emitMatch(m: any): void;
    }
}

export = G;
