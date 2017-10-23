// Type definitions for event-kit 2.x
// Project: https://github.com/atom/event-kit
// Definitions by: GlenCFL <https://github.com/GlenCFL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare global {
    namespace EventKit {
        interface DisposableLike {
            dispose(): void;
        }

        /** A handle to a resource that can be disposed. */
        interface Disposable extends DisposableLike {
            disposed: boolean;

            /** A callback which will be called within dispose(). */
            disposalAction?(): void;

            /** Perform the disposal action, indicating that the resource associated
             *  with this disposable is no longer needed.
             */
            dispose(): void;
        }

        interface DisposableStatic {
            /** Ensure that Object correctly implements the Disposable contract. */
            isDisposable(object: object): boolean;

            /** Construct a Disposable. */
            new (disposableAction?: () => void): Disposable;
        }

        /** An object that aggregates multiple Disposable instances together into a
         *  single disposable, so they can all be disposed as a group.
         */
        interface CompositeDisposable extends DisposableLike {
            disposed: boolean;

            /** Dispose all disposables added to this composite disposable.
             *  If this object has already been disposed, this method has no effect.
             */
            dispose(): void;

            // Managing Disposables
            /** Add disposables to be disposed when the composite is disposed.
             *  If this object has already been disposed, this method has no effect.
             */
            add(...disposables: DisposableLike[]): void;

            /** Remove a previously added disposable. */
            remove(disposable: DisposableLike): void;

            /** Alias to CompositeDisposable::remove. */
            delete(disposable: DisposableLike): void;

            /** Clear all disposables. They will not be disposed by the next call to
             *  dispose.
             */
            clear(): void;
        }

        /** The static side to the CompositeDisposable class. */
        interface CompositeDisposableStatic {
            /** Construct an instance, optionally with one or more disposables. */
            new (...disposables: DisposableLike[]): CompositeDisposable;
        }

        /** Utility class to be used when implementing event-based APIs that allows
         *  for handlers registered via ::on to be invoked with calls to ::emit.
         */
        interface Emitter extends DisposableLike {
            disposed: boolean;

            /** Clear out any existing subscribers. */
            clear(): void;

            /** Unsubscribe all handlers. */
            dispose(): boolean;

            // Event Subscription
            /** Registers a handler to be invoked whenever the given event is emitted. */
            // tslint:disable-next-line:no-any
            on(eventName: string, handler: (value: any) => void): Disposable;

            /** Register the given handler function to be invoked the next time an event
             *  with the given name is emitted via ::emit.
             */
            // tslint:disable-next-line:no-any
            once(eventName: string, handler: (value: any) => void): Disposable;

            /** Register the given handler function to be invoked before all other
             *  handlers existing at the time of subscription whenever events by the
             *  given name are emitted via ::emit.
             */
            // tslint:disable-next-line:no-any
            preempt(eventName: string, handler: (value: any) => void): Disposable;

            // Event Emission
            /** Invoke handlers registered via ::on for the given event name. */
            // tslint:disable-next-line:no-any
            emit(eventName: string, value?: any): void;
        }

        /** The static side to the Emitter class. */
        interface EmitterStatic {
            /** Construct an emitter. */
            new (): Emitter;
        }
    }
}

/** A handle to a resource that can be disposed. */
export const Disposable: EventKit.DisposableStatic;

/** An object that aggregates multiple Disposable instances together into a
 *  single disposable, so they can all be disposed as a group.
 */
export const CompositeDisposable: EventKit.CompositeDisposableStatic;

/** Utility class to be used when implementing event-based APIs that allows
 *  for handlers registered via ::on to be invoked with calls to ::emit.
 */
export const Emitter: EventKit.EmitterStatic;
