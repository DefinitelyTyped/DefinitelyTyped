// Type definitions for event-kit v1.2.0
// Project: https://github.com/atom/event-kit
// Definitions by: Vadim Macagon <https://github.com/enlight/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = AtomEventKit;

declare namespace AtomEventKit {
	interface IDisposable {
		dispose(): void;
	}

	/** Static side of the Disposable class. */
	interface DisposableStatic {
		prototype: Disposable;
		new (disposalAction: Function): Disposable;
		/**
		* Ensure that Object correctly implements the Disposable.
		*/
		isDisposable(object: Object): boolean;
	}

	/** Instance side of the Disposable class. */
	interface Disposable extends IDisposable {
		disposed: boolean;

		constructor: DisposableStatic;
	}

	/** A class that represent a handle to a resource that can be disposed. */
	var Disposable: DisposableStatic;

	/** Static side of the CompositeDisposable class. */
	interface CompositeDisposableStatic {
		prototype: CompositeDisposable;
		new (...disposables: IDisposable[]): CompositeDisposable;
	}

	/** Instance side of the CompositeDisposable class. */
	interface CompositeDisposable extends IDisposable {
		disposed: boolean;

		constructor: CompositeDisposableStatic;
		add(...disposables: IDisposable[]): void;
		remove(disposable: IDisposable): void;
		clear(): void;
	}

	/**
	 * A class that aggregates multiple [[Disposable]] instances together into a single disposable,
	 * so that they can all be disposed as a group.
	 */
	var CompositeDisposable: CompositeDisposableStatic;

	/** Static side of the Emitter class. */
	interface EmitterStatic {
		prototype: Emitter;
		new (): Emitter;
	}

	/** Instance side of the Emitter class. */
	interface Emitter {
		isDisposed: boolean;

		constructor: EmitterStatic;
		/**
		* Clear out any existing subscribers.
		*/
		clear(): void;
		/**
		* Unsubscribe all handlers.
		*/
		dispose(): void;
		/**
		* Registers a handler to be invoked whenever the given event is emitted.
		* @return An object that will unregister the handler when disposed.
		*/
		on(eventName: string, handler: (value: any) => void, unshift?: boolean): Disposable;
		/**
		* Registers a handler to be invoked *before* all previously registered handlers for
		* the given event.
		* @return An object that will unregister the handler when disposed.
		*/
		preempt(eventName: string, handler: (value: any) => void): Disposable;
		/** Invokes any registered handlers for the given event. */
		emit(eventName: string, value: any): void;
	}

	/** A utility class for implementing event-based APIs. */
	var Emitter: EmitterStatic;
}
