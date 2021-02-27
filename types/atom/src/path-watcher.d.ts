import { Disposable, DisposableLike } from "../index";

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
