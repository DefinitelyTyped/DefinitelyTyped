// Type definitions for @atom/watcher 1.3
// Project: https://github.com/atom/watcher
// Definitions by: LoganDark <https://github.com/LoganDark>
//                 Jan Vlnas <https://github.com/jnv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Disposable } from 'event-kit';

export const DISABLE: unique symbol;
export const STDOUT: unique symbol;
export const STDERR: unique symbol;

/**
 * May be one of:
 *
 * - A `string` specifying a path to log to a file. Be careful that you don't log to a directory that you're watching!
 * - The constants {@link STDERR} or {@link STDOUT} to log to the node process' standard error or output streams.
 * - {@link DISABLE} to disable logging.
 */
export type LogTarget = string | typeof DISABLE | typeof STDOUT | typeof STDERR;

export interface WatcherSettings {
    /**
     * Configures the logging of events from the JavaScript layer. Defaults to {@link DISABLE}.
     */
    jsLog: LogTarget;

    /**
     * Configures the logging of events from the main thread, in line with `libuv`'s event loop.
     * The default is {@link DISABLE}.
     */
    mainLog: LogTarget;

    /**
     * Configures logging for the worker thread, which is used to interact with native operating system filesystem
     * watching APIs. The default is {@link DISABLE}.
     */
    workerLog: LogTarget;

    /**
     * Configures the logging for the polling thread, which polls the filesystem when the worker thread is unable to.
     * The default is {@link DISABLE}.
     */
    pollingLog: LogTarget;

    /**
     * Controls the number of recently seen stat results are cached within the worker thread.
     * Increasing the cache size will improve the reliability of rename correlation and the
     * entry kinds of deleted entries, but will consume more RAM. The default is `4096`.
     */
    workerCacheSize: number;

    /**
     * Controls the rough number of filesystem-touching system calls (`lstat()` and `readdir()`)
     * performed by the polling thread on each polling cycle. Increasing the throttle will improve the timeliness
     * of polled events, especially when watching large directory trees, but will consume more processor cycles and
     * I/O bandwidth. The throttle defaults to `1000`.
     */
    pollingThrottle: number;

    /**
     * Adjusts the time in milliseconds that the polling thread spends sleeping between polling cycles.
     * Decreasing the interval will improve the timeliness of polled events, but will consume more processor
     * cycles and I/O bandwidth. The interval defaults to `100`.
     */
    pollingInterval: number;
}

export interface WatcherOptions {
    /**
     * If `true`, filesystem events that occur within subdirectories will be reported as well.
     * If `false`, only changes to immediate children of the provided path will be reported.
     * Defaults to `true`.
     */
    recursive: boolean;
}

export type EntryAction = 'created' | 'modified' | 'deleted' | 'renamed';
export type EntryType = 'file' | 'directory' | 'symlink' | 'unknown';

export interface BaseEvent {
    /**
     * A string describing the filesystem action that occurred.
     */
    action: EntryAction;

    /**
     * A string distinguishing the type of filesystem entry that was acted upon, if known.
     */
    kind: EntryType;

    /**
     * A string containing the absolute path to the filesystem entry that was acted upon.
     * In the event of a rename, this is the *new* path of the entry.
     */
    path: string;
}

export interface OtherEvent extends BaseEvent {
    action: Exclude<EntryAction, 'renamed'>;
}

export interface RenamedEvent extends BaseEvent {
    action: 'renamed';

    /**
     * A string containing the former absolute path of a renamed filesystem entry.
     */
    oldPath: string;
}

export type Event = RenamedEvent | OtherEvent;
export type EventConsumer = (events: Event[]) => unknown;

export class PathWatcher {
    private constructor(nativeWatcherRegistry: unknown, watchedPath: string, options: WatcherOptions);

    getOptions(): WatcherOptions;

    /**
     * Extended: Return a Promise that will resolve when the underlying native watcher is ready to begin sending
     * events. When testing filesystem watchers, it's important to await this promise before making filesystem changes
     * that you intend to assert about because there will be a delay between the instantiation of the watcher and
     * the activation of the underlying OS resources that feed it events.
     *
     * PathWatchers acquired through `watchPath` are already started.
     */
    getStartPromise(): Promise<void>;

    /**
     * Invoke a callback with any errors that occur after the watcher has been installed successfully.
     *
     * The `callback` argument will be invoked with an `Error` with a stack trace that likely isn't very
     * helpful and a message that hopefully is.
     */
    onDidError(callback: (err: unknown) => unknown): Disposable;

    /**
     * Release an event subscription. The event callback associated with this `PathWatcher` will not be called after
     * the watcher has been disposed, synchronously. Note that the native resources or polling root used to feed events
     * to this watcher may remain, if another active `PathWatcher` is consuming events from it, and even if they are
     * freed as a result of this disposal they will be freed asynchronously.
     *
     * Extended: Unsubscribe all subscribers from filesystem events. Native resources will be release asynchronously,
     * but this watcher will stop broadcasting events immediately.
     */
    dispose(): void;

    /**
     * Extended: Print the directory that this watcher is watching.
     */
    toString(): string;
}

/**
 * Invoke a callback with each batch of filesystem events that occur beneath a specified directory.
 *
 * The returned `Promise` resolves to a `PathWatcher` instance when the watcher is fully installed and events are
 * flowing. The `Promise` may reject if the path does not exist, is not a directory, or if an operating system error
 * prevented the watcher from successfully initializing, like a thread failing to launch or memory being exhausted.
 *
 * The *path* argument specifies the root directory to watch. This must be an existing directory, but may be relative,
 * contain symlinks, or contain `.` and `..` segments. Multiple independent calls to `watchPath()` may result in
 * `PathWatcher` instances backed by the same native event source or polling root, so it is relatively cheap to create
 * many watchers within the same directory hierarchy across your codebase.
 *
 * The callback *may* be invoked for filesystem events that occur before the promise is resolved, but it *will* be
 * invoked for any changes that occur after it resolves.
 *
 * *When writing tests against code that uses `watchPath`, note that you cannot easily assert that an event was not
 * delivered. This is especially true on MacOS, where timestamp resolution can cause you to receive events that
 * occurred before you even issued the `watchPath` call!*
 */
export function watchPath(
    path: string,
    options: Partial<WatcherOptions>,
    consumer: EventConsumer,
): Promise<PathWatcher>;

/**
 * Tweak package-global settings. This method may be called even after watchers have been started. The `Promise`
 * it returns resolves when all changed settings have taken effect. All configuration settings are optional. Omitted keys are left unchanged.
 */
export function configure(settings: Partial<WatcherSettings>): Promise<void>;
