
import * as Kefir from 'kefir';
import { Observable, Pool, Stream, Property, Event, Emitter } from 'kefir';

//Create a stream
{
	let stream01: Stream<void, void> = Kefir.never();
	let stream02: Stream<number, void> = Kefir.later(1000, 1);
	let stream03: Stream<number, void> = Kefir.interval(1000, 1);
	let stream04: Stream<number, void> = Kefir.sequentially(1000, [1, 2, 3]);
	{
		let start = +new Date();
		let stream05: Stream<number, void> = Kefir.fromPoll(1000, () => +new Date() - start);
	}
	{
		let start = +new Date();
		let stream06: Stream<number, void> = Kefir.withInterval<number, void>(1000, function(emitter) {
			var time = +new Date() - start;
			if (time < 4000) {
				emitter.emit(time);
			} else {
				emitter.end();
			}
		});
	}
	let stream07: Stream<number, void> = Kefir.fromCallback<number>(callback => setTimeout(() => callback(1), 1000));
	let stream08: Stream<number, Error> = Kefir.fromNodeCallback<number, Error>(callback => setTimeout(() => callback(null, 1), 1000));
	let stream09: Stream<MouseEvent, void> = Kefir.fromEvents<MouseEvent, void>(document.body, 'click');
	let stream10: Stream<number, void> = Kefir.stream<number, void>(emitter => {
		let count = 0;
		emitter.emit(count);

		let intervalId = setInterval(() => {
			count++;
			if (count < 4) {
				emitter.emit(count);
			} else {
				emitter.end();
			}
		}, 1000);

		return () => clearInterval(intervalId);
	});
}

// Create a property
{
	let property01: Property<number, void> = Kefir.constant(1);
	let property02: Property<void, number> = Kefir.constantError(1);
	//let property03: Property<number, void> = Kefir.fromPromise<number, void>(new Promise<number>(fulfill => fulfill(1)));
}

// Convert observables
{
	let property: Property<number, void> = Kefir.sequentially(100, [1, 2, 3]).toProperty(() => 0);
	let stream: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3]).toProperty(() => 0).changes();
}

// Subscribe / add side effects
{
	Kefir.sequentially(1000, [1, 2]).onValue(x => console.log('value:', x));
	Kefir.sequentially(1000, [1, 2]).offValue(x => console.log('value:', x));
	Kefir.sequentially(1000, [1, 2]).valuesToErrors().onValue(x => console.log('error:', x));
	Kefir.sequentially(1000, [1, 2]).valuesToErrors().offValue(x => console.log('error:', x));
	Kefir.sequentially(1000, [1, 2]).onEnd(() => console.log('stream ended'));
	Kefir.sequentially(1000, [1, 2]).offEnd(() => console.log('stream ended'));
	Kefir.sequentially(1000, [1, 2]).onAny(event => console.log('event:', event));
	Kefir.sequentially(1000, [1, 2]).offAny(event => console.log('event:', event));
	Kefir.sequentially(1000, [1, 2]).log('my stream');
	Kefir.sequentially(1000, [1, 2]).offLog('my stream');
	Kefir.sequentially(1000, [1, 2]).toPromise().then((x: number) => console.log('fulfilled with:', x));
	Kefir.sequentially(1000, [1, 2]).observe({});
	Kefir.sequentially(1000, [1, 2]).observe({
		value: _ => {},
		error: _ => {},
		end: () => {},
	});
	Kefir.sequentially(1000, [1, 2]).observe();
	const subscription = Kefir.sequentially(1000, [1, 2]).observe(
		_ => {},
		_ => {},
		() => {}
	);
	if (!subscription.closed) subscription.unsubscribe();
}

// Modify an observable
{
	let observable01: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3]).map(x => x + 1);
	let observable02: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3]).filter(x => x > 1);
	let observable03: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3]).take(2);
	let observable29: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3]).takeErrors(2);
	let observable04: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3]).takeWhile(x => x < 3);
	let observable05: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3]).last();
	let observable06: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3]).skip(2);
	let observable07: Stream<number, void> = Kefir.sequentially(100, [1, 3, 2]).skipWhile(x => x < 3);
	let observable08: Stream<number, void> = Kefir.sequentially(100, [1, 2, 2, 3, 1]).skipDuplicates();
	let observable09: Stream<number, void> = Kefir.sequentially(100, [1, 2, 2.1, 3, 1]).skipDuplicates((a, b) => Math.round(a) === Math.round(b));
	let observable10: Stream<number, void> = Kefir.sequentially(100, [1, 2, 2, 3]).diff((prev, next) => next - prev, 0);
	let observable11: Stream<number, void> = Kefir.sequentially(100, [1, 2, 2, 3]).scan((prev, next) => next + prev, 0);
	let observable12: Stream<number, void> = Kefir.sequentially(100, [[1], [], [2,3]]).flatten<number>();
	let observable13: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3, 4]).flatten<number>(x => x % 2 === 0 ? [x * 10] : []);
	let observable14: Stream<number, void> = Kefir.sequentially(200, [1, 2, 3]).delay(100);
	let observable15: Stream<number, void> = Kefir.sequentially(750, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).throttle(2500);
	let observable16: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3, 0, 0, 0, 4, 5, 6]).filter(x => x > 0).debounce(250);
	let observable17: Stream<void, number> = Kefir.sequentially(100, [0, -1, 2, -3]).valuesToErrors<number>(x => {
		return {convert: x < 0, error: x * 2};
	});
	let observable18: Stream<number, void> = Kefir.sequentially(100, [0, -1, 2, -3]).valuesToErrors().errorsToValues<number>((x: number) => {
		return {convert: x >= 0, value: x * 2};
	});
	let observable19: Stream<void, number> = Kefir.sequentially(100, [0, 1, 2, 3]).valuesToErrors().mapErrors((x: number) => x * 2);
	let observable20: Stream<void, number> = Kefir.sequentially(100, [0, 1, 2, 3]).valuesToErrors().filterErrors((x: number) => (x % 2) === 0);
	let observable21: Stream<void, number> = Kefir.sequentially(100, [0, -1, 2, -3]).valuesToErrors(x => {
		return {convert: x < 0, error: x};
	}).endOnError();
	let observable22: Stream<void, number> = Kefir.sequentially(100, [0, -1, 2, -3]).valuesToErrors(x => {
		return {convert: x < 0, error: x};
	}).ignoreValues();
	let observable23: Stream<void, void> = Kefir.sequentially(100, [0, -1, 2, -3]).valuesToErrors(x => {
		return {convert: x < 0, error: x};
	}).ignoreErrors();
	let observable24: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3]).ignoreEnd();
	let ovservable25: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3]).beforeEnd(() => 0);
	let observable26: Stream<number[], void> = Kefir.sequentially(100, [1, 2, 3, 4, 5]).slidingWindow(3, 2)
	let observable27: Stream<number[], void> = Kefir.sequentially(100, [1, 2, 3, 4, 5]).bufferWhile(x => x !== 3);
	let observable30: Stream<number[], void> = Kefir.sequentially(100, [1, 2, 3, 4, 5]).bufferWithCount(2);
	let observable31: Stream<number[], void> = Kefir.sequentially(100, [1, 2, 3, 4, 5]).bufferWithTimeOrCount(330, 10);
	{
		var myTransducer: any;
		let observable28: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3, 4, 5, 6]).transduce<number>(myTransducer);
	}
	let observable28: Stream<number | string, void> =  Kefir.sequentially(100, [0, 1, 2, 3]).withHandler<number | string, void>((emitter: Emitter<string | number, void>, event: Event<number, void>) => {
		if (event.type === 'end') {
			emitter.emit('bye');
			emitter.end();
		}
		if (event.type === 'value') {
			for (var i = 0; i < event.value; i++) {
				emitter.emit(event.value);
			}
		}
	});
	type First = 'first';
	type Second = 'second';
	let observable32: Stream<First, void> = Kefir.sequentially<First | Second>(100, ['first', 'second']).filter((value): value is First => value === 'first');
}

// Combine observables
{
	{
		let a: Stream<number, void> = Kefir.sequentially(100, [1, 3]);
		let b: Stream<number, void> = Kefir.sequentially(100, [2, 4]).delay(40);
		let observable01: Observable<number, void> = Kefir.combine<number, void, number>([a, b], (a, b) => a + b);
	}
	{
		let a: Stream<number, void> = Kefir.sequentially(100, [1, 3]);
		let b: Stream<number, void> = Kefir.sequentially(100, [2, 4]).delay(40);
		let c: Stream<number, void> = Kefir.sequentially(60, [5, 6, 7]);
		let observable02: Observable<number, void> = Kefir.combine<number, void, number>([a, b], [c], (a, b, c) => a + b + c);
	}
	{
		let a: Stream<number, void> = Kefir.sequentially(100, [0, 1, 2, 3]);
		let b: Stream<number, void> = Kefir.sequentially(160, [4, 5, 6]);
		let c: Property<number, void> = Kefir.sequentially(100, [8, 9]).delay(260).toProperty(() => 7);
		let observable03: Observable<number, void> = Kefir.zip<number, void, number>([a, b, c]);
	}
	{
		let a: Stream<number, void> = Kefir.sequentially(100, [0, 1, 2]);
		let b: Stream<number, void> = Kefir.sequentially(100, [0, 1, 2]).delay(30);
		let c: Stream<number, void> = Kefir.sequentially(100, [0, 1, 2]).delay(60);
		let abc: Observable<number, void> = Kefir.merge<number, void>([a, b, c]);
	}
	{
		let a: Stream<number, void> = Kefir.sequentially(100, [0, 1, 2]);
		let b: Stream<number, void> = Kefir.sequentially(100, [3, 4, 5]);
		let abc: Observable<number, void> = Kefir.concat<number, void>([a, b]);
	}
	{
		let a: Stream<number, void> = Kefir.sequentially(100, [0, 1, 2]);
		let b: Stream<number, void> = Kefir.sequentially(100, [0, 1, 2]).delay(30);
		let c: Observable<number, void> = Kefir.sequentially(100, [0, 1, 2]).delay(60);
		let pool: Pool<number, void> = Kefir.pool<number, void>();
		pool.plug(a);
		pool.plug(b);
		pool.plug(c);
	}
	let observable04: Observable<number, void> = Kefir.repeat<number, void>(i => {
		if (i < 3) {
			return Kefir.sequentially(100, [i, i]);
		} else {
			return false;
		}
	});
	let observable05: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3]).flatMap(x => Kefir.interval(40, x).take(4));
	let observable06: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3]).flatMapLatest(x => Kefir.interval(40, x).take(4));
	let observable07: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3]).flatMapFirst(x => Kefir.interval(40, x).take(4));
	let observable08: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3]).flatMapConcat(x => Kefir.interval(40, x).take(4));
	let observable09: Stream<number, void> = Kefir.sequentially(100, [1, 2, 3]).flatMapConcurLimit(x => Kefir.interval(40, x).take(6), 2);
	let observable10: Stream<number, void> = Kefir.sequentially(100, [1, 2]).valuesToErrors().flatMapErrors(x => Kefir.interval(40, x).take(2));
}

// Combine two observables
{
	{
		let foo: Stream<number, void>  = Kefir.sequentially(100, [1, 2, 3, 4, 5, 6, 7, 8]);
		let bar: Property<boolean, void>  = Kefir.sequentially(200, [false, true, false]).delay(40).toProperty(() => true);
		let observable01: Stream<number, void> = foo.filterBy<void>(bar);
	}
	{
		let a: Property<number, void>  = Kefir.sequentially(200, [2, 3]).toProperty(() => 1);
		let b: Stream<number, void>  = Kefir.interval(100, 0).delay(40).take(5);
		let observable02: Property<number, void> = a.sampledBy(b)
	}
	{
		let foo: Stream<number, void>  = Kefir.sequentially(100, [1, 2, 3, 4]);
		let bar: Stream<number, void>  = Kefir.later(250, 0);
		let observable03: Stream<number, void> = foo.skipUntilBy<number, void>(bar);
	}
	{
		let foo: Stream<number, void>  = Kefir.sequentially(100, [1, 2, 3, 4]);
		let bar: Stream<string, void>  = Kefir.later(250, 'hello');
		let observable04: Stream<number, void> = foo.takeUntilBy<string, void>(bar);
	}
	{
		let foo: Stream<number, void>  = Kefir.sequentially(100, [1, 2, 3, 4, 5, 6, 7, 8]).delay(40);
		let bar: Stream<number, void>  = Kefir.sequentially(300, [1, 2])
		let observable05: Stream<number[], void> = foo.bufferBy<number, void>(bar);
	}
	{
		let foo: Stream<number, void>  = Kefir.sequentially(100, [1, 2, 3, 4, 5, 6, 7, 8]);
		let bar: Stream<boolean, void>  = Kefir.sequentially(200, [false, true, false]).delay(40);
		let observable06: Stream<number[], void> = foo.bufferWhileBy<void>(bar);
	}
	{
		let foo: Stream<number, void>  = Kefir.sequentially(100, [1, 2, 3]);
		let bar: Stream<number, void>  = Kefir.sequentially(100, [1, 2, 3]).delay(40);
		let observable07: Stream<boolean, void> = foo.awaiting<number, void>(bar);
	}
}
