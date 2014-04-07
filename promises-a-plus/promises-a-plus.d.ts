declare module PromisesAPlus {
	interface PromiseCtor {
		<T>(resolver: (resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void) => void): Thenable<T>;
	}

	interface PromiseImpl {
		new <T>(resolver: (resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void) => void): Thenable<T>;
	}

	interface Thenable<R> {
		then<U>(onFulfill: (value: R) => Thenable<U>, onReject: (error: any) => Thenable<U>): Thenable<U>;
		then<U>(onFulfill: (value: R) => Thenable<U>, onReject?: (error: any) => U): Thenable<U>;
		then<U>(onFulfill: (value: R) => U, onReject: (error: any) => Thenable<U>): Thenable<U>;
		then<U>(onFulfill?: (value: R) => U, onReject?: (error: any) => U): Thenable<U>;
	}
}
