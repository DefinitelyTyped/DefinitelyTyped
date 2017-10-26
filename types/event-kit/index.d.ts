// Type definitions for event-kit 2.x
// Project: https://github.com/atom/event-kit
// Definitions by: GlenCFL <https://github.com/GlenCFL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface DisposableLike {
    dispose(): void;
}

/** A handle to a resource that can be disposed. */
export class Disposable implements DisposableLike {
    disposed: boolean;

    /** Ensure that Object correctly implements the Disposable contract. */
    static isDisposable(object: object): boolean;

    /** Construct a Disposable. */
    constructor(disposableAction?: () => void);

    /** A callback which will be called within dispose(). */
    disposalAction?: () => void;

    /**
     *  Perform the disposal action, indicating that the resource associated
     *  with this disposable is no longer needed.
     */
    dispose(): void;
}

/**
 *  An object that aggregates multiple Disposable instances together into a
 *  single disposable, so they can all be disposed as a group.
 */
export class CompositeDisposable implements DisposableLike {
    disposed: boolean;

    /** Construct an instance, optionally with one or more disposables. */
    constructor(...disposables: DisposableLike[]);

    /**
     *  Dispose all disposables added to this composite disposable.
     *  If this object has already been disposed, this method has no effect.
     */
    dispose(): void;

    // Managing Disposables
    /**
     *  Add disposables to be disposed when the composite is disposed.
     *  If this object has already been disposed, this method has no effect.
     */
    add(...disposables: DisposableLike[]): void;

    /** Remove a previously added disposable. */
    remove(disposable: DisposableLike): void;

    /** Alias to CompositeDisposable::remove. */
    delete(disposable: DisposableLike): void;

    /**
     *  Clear all disposables. They will not be disposed by the next call to
     *  dispose.
     */
    clear(): void;
}

/**
 *  Utility class to be used when implementing event-based APIs that allows
 *  for handlers registered via ::on to be invoked with calls to ::emit.
 */
export class Emitter implements DisposableLike {
    disposed: boolean;

    /** Clear out any existing subscribers. */
    clear(): void;

    /** Unsubscribe all handlers. */
    dispose(): boolean;

    /** Construct an emitter. */
    constructor();

    // Event Subscription
    /** Registers a handler to be invoked whenever the given event is emitted. */
    // tslint:disable-next-line:no-any
    on(eventName: string, handler: (value: any) => void): Disposable;

    /**
     *  Register the given handler function to be invoked the next time an event
     *  with the given name is emitted via ::emit.
     */
    // tslint:disable-next-line:no-any
    once(eventName: string, handler: (value: any) => void): Disposable;

    /**
     *  Register the given handler function to be invoked before all other
     *  handlers existing at the time of subscription whenever events by the
     *  given name are emitted via ::emit.
     */
    // tslint:disable-next-line:no-any
    preempt(eventName: string, handler: (value: any) => void): Disposable;

    // Event Emission
    /** Invoke the handlers registered via ::on for the given event name. */
    // tslint:disable-next-line:no-any
    emit(eventName: string, value?: any): void;
}
