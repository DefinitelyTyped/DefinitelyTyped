// Type definitions for promises-a-plus
// Project: http://promisesaplus.com/
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace PromisesAPlus {
	interface PromiseCtor {
		<T>(resolver: (resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void) => void): Thenable<T>;
	}

	interface PromiseImpl {
		new <T>(resolver: (resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void) => void): Thenable<T>;
	}

	interface Thenable<T> {
		then<R>(onFulfill?: (value: T) => Thenable<R>|R, onReject?: (error: any) => Thenable<R>|R): Thenable<R>;
	}
}
