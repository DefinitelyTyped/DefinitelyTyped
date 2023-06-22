// Type definitions for watchpack 2.4
// Project: https://github.com/webpack/watchpack
// Definitions by: e-cloud <https://github.com/e-cloud>
//                 Adam Jones <https://github.com/domdomegg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.9

/// <reference types="node" />

import { EventEmitter } from 'events';
import Watcher = require('./Watcher');

interface Entry {
    /** A point in time at which is it safe to say all changes happened before that */
    safeTime: number;
    /** Only for file entries: the last modified timestamp of the file */
    timestamp: number;
}

declare class Watchpack extends EventEmitter {
    aggregatedChanges: Set<string>;
    aggregatedRemovals: Set<string>;

    aggregateTimeout: NodeJS.Timer;
    dirWatchers: Watcher[];
    fileWatchers: Watcher[];
    /** Last modified times for files by path */
    mtimes: {
        [path: string]: number;
    };
    options: Watchpack.WatchOptions;
    paused: boolean;
    watcherOptions: Watchpack.WatcherOptions;

    constructor(options: Watchpack.WatchOptions);

    /**
     * Starts watching these files and directories
     * Calling this again will override the files and directories
     */
    watch(options: {
        /**
         * Can be files or directories
         * For files: content and existence changes are tracked
         * For directories: only existence and timestamp changes are tracked
         */
        files?: Iterable<string>;
        /**
         * Can only be directories
         * Directory content (and content of children, ...) and existence changes are tracked.
         * For files: content and existence changes are tracked
         * Assumed to exist, when directory is not found without further information a remove event is emitted
         */
        directories?: Iterable<string>;
        /**
         * Can be files or directories
         * Only existence changes are tracked
         * Assued to not exist, no remove event is emitted when not found initially
         */
        missing?: Iterable<string>;
        startTime?: number;
    }): void;

    on(
        eventName: 'change',
        listener: (
            /** The changed file or directory */
            filePath: string,
            /** The last modified time of the changed file */
            modifiedTime: number,
            /** Textual information how this change was detected */
            explanation: string,
        ) => void,
    ): this;

    on(
        eventName: 'remove',
        listener: (
            /** The removed file or directory */
            filePath: string,
            /** Textual information how this change was detected */
            explanation: string,
        ) => void,
    ): this;

    on(
        eventName: 'aggregated',
        listener: (
            /** Set of all changed files */
            changes: Set<string>,
            /** Set of all removed files */
            removals: Set<string>,
        ) => void,
    ): this;

    /**
     * Stops emitting events, but keeps watchers open
     * The next "watch" call can reuse the watchers
     * The watcher will keep aggregating events which can be received with `getAggregated()`
     */
    pause(): void;

    /**
     * Stops emitting events and closes all watchers
     */
    close(): void;

    /**
     * Returns the current aggregated info and removes that from the watcher
     * The next aggregated event won't include that info and will only emitted when futher changes happen
     * Can be used when paused
     */
    getAggregated(): {
        changes: Set<string>;
        removals: Set<string>;
    };

    /**
     * Collects time info objects for all known files and directories
     * This includes info from files not directly watched
     */
    collectTimeInfoEntries(fileInfoEntries: Map<string, Entry>, directoryInfoEntries: Map<string, Entry>): void;

    /**
     * Returns a `Map` with all known time info objects for files and directories
     * Similar to `collectTimeInfoEntries()` but returns a single map with all entries
     */
    getTimeInfoEntries(): Map<string, Entry>;

    /**
     * Returns an object with all known change times for files
     * This include timestamps from files not directly watched
     * Key: absolute path, value: timestamp as number
     * @deprecated
     */
    getTimes(): {
        [path: string]: number;
    };

    _fileWatcher(file: string, watcher: Watcher): Watcher;

    _dirWatcher(item: string, watcher: Watcher): Watcher;

    _onChange(item: string, mtime: number, file?: string): void;

    _onTimeout(): void;
}

declare namespace Watchpack {
    interface WatcherOptions {
        ignored?: string[] | string | RegExp | ((path: string) => boolean) | undefined;
        poll?: boolean | number | undefined;
        followSymlinks?: boolean;
    }
    interface WatchOptions extends WatcherOptions {
        aggregateTimeout?: number | undefined;
    }
}

export = Watchpack;
