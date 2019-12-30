import ES2018 = require('es-abstract/es2018');

declare const any: unknown;
const FakePromise: new <T>(
	executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void,
) => FakePromise<T> = null!;
interface FakePromise<T> extends PromiseLike<T> {
	doStuff(): void;
}

// $ExpectType FakePromise<unknown>
ES2018.PromiseResolve(FakePromise, any);

// TODO: This should be: FakePromise<string>
ES2018.PromiseResolve(FakePromise, '');

// Removed in ES2018:
ES2018.EnumerableOwnProperties; // $ExpectError
ES2018.IsPropertyDescriptor; // $ExpectError
