// Type definitions for gaze 1.1
// Project: https://github.com/shama/gaze
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

type Mode = 'auto' | 'watch' | 'poll';

interface Options {
    /**
     * Interval to pass to fs.watchFile.
     */
    interval?: number | undefined;
    /**
     * Delay for events called in succession for the same file/event in milliseconds.
     */
    debounceDelay?: number | undefined;
    /**
     * Force the watch mode. Either 'auto' (default),
     * 'watch' (force native events), or 'poll' (force stat polling).
     */
    mode?: Mode | undefined;
    /**
     * The current working directory to base file patterns from. Default is `process.cwd()`.
     */
    cwd?: string | undefined;
}

declare namespace gaze {
    class Gaze {
        constructor(
            patterns: string | string[],
            options?: Options | null,
            callback?: (error: Error | null, watcher: Gaze) => void
        );

        /**
         * Wrapper for EventEmitter.emit. `added`|`changed`|`renamed`|`deleted` events will also trigger the `all` event.
         */
        emit(event: string, ...args: any): boolean;

        /**
         * Unwatch all files and reset the watch instance.
         */
        close(): void;

        /**
         * Adds file(s) patterns to be watched.
         */
        add(patterns: string | string[]): void;

        /**
         * Removes a file or directory from being watched. Does not recurse directories.
         */
        remove(filepath: string): void;

        /**
         * Returns the currently watched files.
         */
        watched(): string[];

        /**
         * Returns the currently watched files with relative paths.
         */
        relative(dir: string, unixify: boolean): string[];
    }
}

declare function gaze(
    patterns: string | string[],
    options?: Options | null,
    callback?: (error: Error | null, watcher: gaze.Gaze) => void
): void;

export = gaze;
