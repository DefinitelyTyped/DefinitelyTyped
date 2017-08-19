import * as Rx from 'rx-lite';

let obsNum: Rx.Observable<number>;
let obsStr: Rx.Observable<string>;

function fromCallback() {
	// 0 arguments
	const func0: (cb: (result: number) => void) => void = () => { };
	obsNum = Rx.Observable.fromCallback(func0)();
	obsNum = Rx.Observable.fromCallback(func0, obsStr)();
	obsNum = Rx.Observable.fromCallback(func0, obsStr, (results: number[]) => results[0])();

	// 1 argument
	const func1: (a: string, cb: (result: number) => void) => number = () => 0;
	obsNum = Rx.Observable.fromCallback(func1)("");
	obsNum = Rx.Observable.fromCallback(func1, {})("");
	obsNum = Rx.Observable.fromCallback(func1, {}, (results: number[]) => results[0])("");

	// 2 arguments
	const func2: (a: number, b: string, cb: (result: string) => number) => Date = () => new Date();
	obsStr = Rx.Observable.fromCallback(func2)(1, "");
	obsStr = Rx.Observable.fromCallback(func2, {})(1, "");
	obsStr = Rx.Observable.fromCallback(func2, {}, (results: string[]) => results[0])(1, "");

	// 3 arguments
	const func3: (a: number, b: string, c: boolean, cb: (result: string) => number) => Date = () => new Date();
	obsStr = Rx.Observable.fromCallback(func3)(1, "", true);
	obsStr = Rx.Observable.fromCallback(func3, {})(1, "", true);
	obsStr = Rx.Observable.fromCallback(func3, {}, (results: string[]) => results[0])(1, "", true);

	// multiple results
	const func0m: (cb: (result1: number, result2: number, result3: number) => void) => void = () => { };
	obsNum = Rx.Observable.fromCallback(func0m, obsStr, (results: number[]) => results[0])();
	const func1m: (a: string, cb: (result1: number, result2: number, result3: number) => void) => void = () => { };
	obsNum = Rx.Observable.fromCallback(func1m, obsStr, (results: number[]) => results[0])("");
	const func2m: (a: string, b: number, cb: (result1: string, result2: string, result3: string) => void) => void = () => { };
	obsStr = Rx.Observable.fromCallback(func2m, obsStr, (results: string[]) => results[0])("", 10);
}

function toPromise() {
	const promiseImpl: {
		new <T>(resolver: (resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void) => void): Rx.IPromise<T>;
	} = undefined as any;

	Rx.config.Promise = promiseImpl;

	let p: Rx.IPromise<number> = obsNum.toPromise(promiseImpl);

	p = obsNum.toPromise();

	p = p.then(x => x);
	p = p.then(x => p);
	p = p.then(undefined, reason => 10);
	// p = p.then(undefined, reason => p);

	let ps: Rx.IPromise<string> = p.then(undefined, reason => "error");
	ps = p.then(x => "");
	ps = p.then(x => ps);
}

function test_scan() {
	/* Without a seed */
	const source1: Rx.Observable<number> = Rx.Observable.range(1, 3)
		.scan((acc, x, i, source) => acc + x);

	/* With a seed */
	const source2: Rx.Observable<string> = Rx.Observable.range(1, 3)
		.scan((acc, x, i, source) => acc + x, '...');
}

function test_concatAll() {
	/* concatAll Example */
	const source = Rx.Observable.range(0, 3)
		.map(x => Rx.Observable.range(x, 3))
		.concatAll();

	const subscription = source.subscribe(
		x => {
			console.log('Next: %s', x);
		},
		err => {
			console.log('Error: %s', err);
		},
		() => {
			console.log('Completed');
		});
}

function test_mergeAll() {
	/* mergeAll example */
	const source = Rx.Observable.range(0, 3)
		.map(x => Rx.Observable.range(x, 3))
		.mergeAll();

	const subscription = source.subscribe(
		x => {
			console.log('Next: %s', x);
		},
		err => {
			console.log('Error: %s', err);
		},
		() => {
			console.log('Completed');
		});
}

// from https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/publish.md
function test_publish() {
	const interval = Rx.Observable.interval(1000);

	const source = interval
		.take(2)
		.doAction(x => {
			console.log('Side effect');
		});

	const published = source.publish();

	published.subscribe(createObserver('SourceA'));
	published.subscribe(createObserver('SourceB'));

	const connection = published.connect();

	function createObserver(tag: string) {
		return Rx.Observer.create(
			x => {
				console.log('Next: ' + tag + x);
			},
			err => {
				console.log('Error: ' + err);
			},
			() => {
				console.log('Completed');
			});
	}

	// => Side effect
	// => Next: SourceA0
	// => Next: SourceB0
	// => Side effect
	// => Next: SourceA1
	// => Next: SourceB1
	// => Completed
	// => Completed
}
