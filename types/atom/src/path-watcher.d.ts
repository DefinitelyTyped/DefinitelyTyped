import { Disposable, DisposableLike, FilesystemChangeEvent } from '../index';

/** Manage a subscription to filesystem events that occur beneath a root directory. */
export interface PathWatcher extends DisposableLike {
    /**
     *  Return a Promise that will resolve when the underlying native watcher is
     *  ready to begin sending events.
     */
    getStartPromise(): Promise<void>;

    /** Invokes a function when any errors related to this watcher are reported. */
    onDidError(callback: (error: Error) => void): Disposable;

    /**
     *  Unsubscribe all subscribers from filesystem events. Native resources will be
     *  released asynchronously, but this watcher will stop broadcasting events
     *  immediately.
     */
    dispose(): void;
}

/**
 *  Invoke a callback with each filesystem event that occurs beneath a specified path.
 *  If you only need to watch events within the project's root paths, use
 *  Project::onDidChangeFiles instead.
 */
export function watchPath(
    rootPath: string,
    options: {},
    eventCallback: (events: FilesystemChangeEvent) => void,
): Promise<PathWatcher>;
