/// <reference types="jquery" />

import Q = require("q");

const _when: Q.IWhenable<number> = Q.resolve(0); // was an issue when strictFunctionTypes were enforced on all of DefinitelyTyped

Q(8).then((x) => console.log(x.toExponential()));
Q().then(() => console.log("nothing"));

function delay(delay: number): Q.Promise<void> {
	const d = Q.defer<void>();
	setTimeout(d.resolve, delay);
	return d.promise;
}

Q.when(delay(1000), (val) => {
	console.log("Hello, World!");
	return;
});

// Note from Q documentation: a deferred can be resolved with a value or a promise.
const otherPromise = Q.defer<string>().promise;
Q.defer<string>().resolve(otherPromise);

Q.timeout(Q(new Date()), 1000, "My dates never arrived. :(").then((d) => d.toJSON());

Q.delay(Q(8), 1000).then((x) => x.toExponential());
Q.delay(8, 1000).then((x) => x.toExponential());
Q.delay(Q("asdf"), 1000).then((x) => x.length);
Q.delay("asdf", 1000).then((x) => x.length);

const eventualAdd = Q.promised((a?: number, b?: number) => <number> a + <number> b);
eventualAdd(Q(1), Q(2)).then((x) => x.toExponential());

function eventually<T>(eventually: T) {
	return Q.delay(eventually, 1000);
}

const x = Q.all([1, 2, 3].map(eventually));
Q.when(x, (x) => {
	const _x: number[] = x;
	console.log(x);
});

Q.all([
	eventually(10),
	eventually(20)
]).spread((x: number, y: number) => {
	console.log(x, y);
});

Q.all([
	eventually(10),
	eventually(20)
]).then((results) => {
	const [x, y] = results;
	console.log(x, y);
});

Q.fcall(() => {
})
	.then(() => {
	})
	.then(() => {
	})
	.then(() => {
	})
	.then((value4) => {
		// Do something with value4
	}, (error) => {
		// Handle any error from step1 through step4
	}).done();

Q.allResolved([])
	.then((promises: Array<Q.Promise<any>>) => {
		promises.forEach((promise) => {
			if (promise.isFulfilled()) {
				const value = promise.valueOf();
			} else {
				const exception = promise.valueOf().exception;
			}
		});
	});

Q(42)
	.tap(() => "hello")
	.tap((x) => {
		console.log(x);
	})
	.then((x) => {
		const _x: number = x;
		console.log("42 == " + x);
	});

declare let arrayPromise: Q.IPromise<number[]>;
declare let stringPromise: Q.IPromise<string>;

declare function returnsNumPromise(text: string): Q.Promise<number>;
declare function returnsNumPromise(text: string): JQueryPromise<number>;

Q(arrayPromise)
	.then((arr) => arr.join(','))
	.then(returnsNumPromise) // requires specification
	.then((num) => num.toFixed());

declare let jPromise: JQueryPromise<string>;

// if jQuery promises definition supported generics, this could be more interesting example
Q<string>(jPromise).then((str) => str.split(','));
jPromise.then(returnsNumPromise);

// watch the typing flow through from jQueryPromise to Q.Promise
Q(jPromise).then((str) => str.split(','));

declare let promiseArray: Array<Q.IPromise<number>>;
const qPromiseArray = promiseArray.map((p) => {
	return Q<number>(p);
});
const myNums: any[] = [2, 3, Q(4), 5, Q(6), Q(7)];

Q.all(promiseArray).then((nums) => nums.map((num) => num.toPrecision(2)).join(','));

Q.all<number>(myNums).then((nums) => nums.map(Math.round));

Q.fbind((dateString?: string) => new Date(<string> dateString), "11/11/1991")().then((d) => d.toLocaleDateString());

Q.when(8, (num) => num + "!");
Q.when(Q(8), (num) => num + "!").then((str) => str.split(','));
const voidPromise: Q.Promise<void> = Q.when();

declare function saveToDisk(): Q.Promise<any>;

declare function saveToCloud(): Q.Promise<any>;

Q.allSettled([saveToDisk(), saveToCloud()]).spread((disk: any, cloud: any) => {
	console.log("saved to disk:", disk.state === "fulfilled");
	console.log("saved to cloud:", cloud.state === "fulfilled");

	if (disk.state === "fulfilled") {
		console.log("value was " + disk.value);
	} else if (disk.state === "rejected") {
		console.log("rejected because " + disk.reason);
	}
}).done();

const nodeStyle = (input: string, cb: (error: any, success: any) => void) => {
	cb(null, input);
};

Q.nfapply<string>(nodeStyle, ["foo"]).done((result: string) => {
});
Q.nfcall<string>(nodeStyle, "foo").done((result: string) => {
});
Q.denodeify<string>(nodeStyle)("foo").done((result: string) => {
});
Q.nfbind<string>(nodeStyle)("foo").done((result: string) => {
});

interface Kitty {
	name: string;
	cute: boolean;
}

class Repo {
	private readonly items: Kitty[] = [
		{name: "Max", cute: false},
		{name: "Annie", cute: true}
	];

	find(options: {[K in keyof Kitty]: Kitty[K] }): Q.Promise<Kitty[]> {
		let result = this.items;

		for (const key in options) {
			result = result.filter((i) => i[<keyof Kitty> key] === options[<keyof Kitty> key]);
		}

		return Q(result);
	}
}

const kitty = new Repo();
Q.nbind<Kitty[]>(kitty.find, kitty)({ cute: true }).done((kitties) => {
	const _kitties: Kitty[] = kitties;
});

/**
 * Test: Can "rethrow" rejected promises
 */
function TestCanRethrowRejectedPromises() {
	interface Foo {
		a: number;
	}

	function nestedBar(): Q.Promise<Foo> {
		const deferred = Q.defer<Foo>();
		return deferred.promise;
	}

	function bar(): Q.Promise<Foo> {
		return nestedBar()
			.then((foo: Foo) => {
				console.log("Lorem ipsum");
			})
			.fail((error) => {
				console.log("Intermediate error handling");

				return Q.reject<Foo>(error);
			});
	}

	bar()
		.finally(() => {
			console.log("Cleanup");
		})
		.done((foo) => {
			const _foo: Foo = foo;
		});
}

/**
 * test Q.Promise.all
 */
const y1 = Q().then(() => {
	const s = Q("hello");
	const n = Q(1);
	return <[typeof s, typeof n]> [s, n];
});

const y2 = Q().then(() => {
	const s = "hello";
	const n = Q(1);
	return <[typeof s, typeof n]> [s, n];
});

const p2: Q.Promise<[string, number]> = y1.then((val) => Q.all(val));
const p3: Q.Promise<[string, number]> = Q.all(y1);
const p5: Q.Promise<[string, number]> = y2.then((val) => Q.all(val));
const p6: Q.Promise<[string, number]> = Q.all(y2);

Q.try(() => {
	if (Math.random() % 2) {
		throw new Error("The cloud is down!");
	}
	return true;
})
	.catch((error) => console.error("Couldn't sync to the cloud", error));

// ensure Q.Promise is compatible with PromiseLike
const p7: PromiseLike<void> = Q.Promise<void>((resolve) => resolve());

// thenReject, returning a Promise of the same type as the Promise it is called on
function thenRejectSameType(arg: any): Q.Promise<number> {
	if (!arg) {
		return returnsNumPromise("")
			.thenReject(new Error("failed"));
	}
	return Q.resolve(2);
}

// thenReject, returning a Promise of a different type to the Promise it is called on.
// The generic type argument is specified.
function thenRejectSpecificOtherType(arg: any): Q.Promise<string> {
	if (!arg) {
		return returnsNumPromise("")
			.thenReject<string>(new Error("failed"));
	}
	return Q.resolve("");
}

// thenReject, returning a Promise of a different type to the Promise it is called on.
// The generic type argument is inferred.
// This relies on 'Return types as inference targets', new in TS 2.4.
// Commented out as we support TS 2.3.
// This should be uncommented if the minimum version is changed.
/*
function thenRejectInferredOtherType(arg: any): Q.Promise<string> {
	if (!arg) {
		return returnsNumPromise("")
			.thenReject(new Error("failed"));
	}
	return Q.resolve("");
}
*/
