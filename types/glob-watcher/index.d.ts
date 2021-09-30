// Type definitions for glob-watcher 5.0
// Project: https://github.com/gulpjs/glob-watcher
// Definitions by: TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as fs from "fs";

/**
 * Watch globs and execute a function upon change, with intelligent defaults for debouncing and queueing.
 * @param globs Takes a glob string or an array of glob strings as the first argument.
 * Globs are executed in order, so negations should follow positive globs
 * fs.src(['!b*.js', '*.js']) would not exclude any files, but this would: fs.src(['*.js', '!b*.js'])
 */
declare function GlobWatcher(globs: string | string[], cb?: ((done: (err?: any) => void) => void) | (() => GlobWatcher.AsyncType)): fs.FSWatcher;

/**
 * Watch globs and execute a function upon change, with intelligent defaults for debouncing and queueing.
 * @param globs Takes a glob string or an array of glob strings as the first argument.
 * Globs are executed in order, so negations should follow positive globs
 * fs.src(['!b*.js', '*.js']) would not exclude any files, but this would: fs.src(['*.js', '!b*.js'])
 */
declare function GlobWatcher(globs: string | string[], opt?: GlobWatcher.WatchOptions, cb?: ((done: (err?: any) => void) => void) | (() => GlobWatcher.AsyncType)): fs.FSWatcher;

declare namespace GlobWatcher {
    type AsyncType = NodeJS.EventEmitter | PromiseLike<any> | { subscribe(next?: (value: any) => void, error?: (error: any) => void, complete?: () => void): any };

    interface WatchOptions {
        /**
         * The delay to wait before triggering the fn.
         * Useful for waiting on many changes before doing the work on changed files, e.g. find-and-replace on many files.
         * @default 200
         */
        delay?: number | undefined;

        /**
         * An event name or array of event names to listen for. Useful if you only need to watch specific events.
         * @default [ 'add', 'change', 'unlink' ]
         */
        events?: string | string[] | undefined;

        /**
         * Whether or not a file change should queue the fn execution if the fn is already running. Useful for a long running fn.
         * @default true
         */
        queue?: boolean | undefined;

        // copied from https://github.com/paulmillr/chokidar/blob/5e09c85ea04ffb7fd9cdb829892540e93ce63553/types/index.d.ts

        /**
         * Indicates whether the process should continue to run as long as files are being watched. If
         * set to `false` when using `fsevents` to watch, no more events will be emitted after `ready`,
         * even if the process continues to run.
         */
        persistent?: boolean | undefined;

        /**
         * ([anymatch](https://github.com/es128/anymatch)-compatible definition) Defines files/paths to
         * be ignored. The whole relative or absolute path is tested, not just filename. If a function
         * with two arguments is provided, it gets called twice per path - once with a single argument
         * (the path), second time with two arguments (the path and the
         * [`fs.Stats`](https://nodejs.org/api/fs.html#fs_class_fs_stats) object of that path).
         */
        ignored?: any;

        /**
         * If set to `false` then `add`/`addDir` events are also emitted for matching paths while
         * instantiating the watching as chokidar discovers these file paths (before the `ready` event).
         */
        ignoreInitial?: boolean | undefined;

        /**
         * When `false`, only the symlinks themselves will be watched for changes instead of following
         * the link references and bubbling events through the link's path.
         */
        followSymlinks?: boolean | undefined;

        /**
         * The base directory from which watch `paths` are to be derived. Paths emitted with events will
         * be relative to this.
         */
        cwd?: string | undefined;

        /**
         *  If set to true then the strings passed to .watch() and .add() are treated as literal path
         *  names, even if they look like globs. Default: false.
         */
        disableGlobbing?: boolean | undefined;

        /**
         * Whether to use fs.watchFile (backed by polling), or fs.watch. If polling leads to high CPU
         * utilization, consider setting this to `false`. It is typically necessary to **set this to
         * `true` to successfully watch files over a network**, and it may be necessary to successfully
         * watch files in other non-standard situations. Setting to `true` explicitly on OS X overrides
         * the `useFsEvents` default.
         */
        usePolling?: boolean | undefined;

        /**
         * Whether to use the `fsevents` watching interface if available. When set to `true` explicitly
         * and `fsevents` is available this supercedes the `usePolling` setting. When set to `false` on
         * OS X, `usePolling: true` becomes the default.
         */
        useFsEvents?: boolean | undefined;

        /**
         * If relying upon the [`fs.Stats`](https://nodejs.org/api/fs.html#fs_class_fs_stats) object that
         * may get passed with `add`, `addDir`, and `change` events, set this to `true` to ensure it is
         * provided even in cases where it wasn't already available from the underlying watch events.
         */
        alwaysStat?: boolean | undefined;

        /**
         * If set, limits how many levels of subdirectories will be traversed.
         */
        depth?: number | undefined;

        /**
         * Interval of file system polling.
         */
        interval?: number | undefined;

        /**
         * Interval of file system polling for binary files. ([see list of binary extensions](https://gi
         * thub.com/sindresorhus/binary-extensions/blob/master/binary-extensions.json))
         */
        binaryInterval?: number | undefined;

        /**
         *  Indicates whether to watch files that don't have read permissions if possible. If watching
         *  fails due to `EPERM` or `EACCES` with this set to `true`, the errors will be suppressed
         *  silently.
         */
        ignorePermissionErrors?: boolean | undefined;

        /**
         * `true` if `useFsEvents` and `usePolling` are `false`). Automatically filters out artifacts
         * that occur when using editors that use "atomic writes" instead of writing directly to the
         * source file. If a file is re-added within 100 ms of being deleted, Chokidar emits a `change`
         * event rather than `unlink` then `add`. If the default of 100 ms does not work well for you,
         * you can override it by setting `atomic` to a custom value, in milliseconds.
         */
        atomic?: boolean | number | undefined;

        /**
         * can be set to an object in order to adjust timing params:
         */
        awaitWriteFinish?: AwaitWriteFinishOptions | boolean | undefined;
    }

    // copied from https://github.com/paulmillr/chokidar/blob/5e09c85ea04ffb7fd9cdb829892540e93ce63553/types/index.d.ts
    interface AwaitWriteFinishOptions {
        /**
         * Amount of time in milliseconds for a file size to remain constant before emitting its event.
         */
        stabilityThreshold?: number | undefined;

        /**
         * File size polling interval.
         */
        pollInterval?: number | undefined;
    }
}

export = GlobWatcher;
