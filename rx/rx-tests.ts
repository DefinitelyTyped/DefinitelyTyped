import * as Rx from 'rx';

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
	var source = Rx.Observable.range(0, 3)
		.map(function (x) { return Rx.Observable.range(x, 3); })
		.concatAll();

	var subscription = source.subscribe(
		function (x) {
			console.log('Next: %s', x);
		},
		function (err) {
			console.log('Error: %s', err);
		},
		function () {
			console.log('Completed');
		});
}

function test_mergeAll() {
	/* mergeAll example */
	var source = Rx.Observable.range(0, 3)
		.map(function (x) { return Rx.Observable.range(x, 3); })
		.mergeAll();

	var subscription = source.subscribe(
		function (x) {
			console.log('Next: %s', x);
		},
		function (err) {
			console.log('Error: %s', err);
		},
		function () {
			console.log('Completed');
		});

}

// from https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/publish.md
function test_publish() {
	var interval = Rx.Observable.interval(1000);

	var source = interval
		.take(2)
		.doAction(function (x) {
			console.log('Side effect');
		});

	var published = source.publish();

	published.subscribe(createObserver('SourceA'));
	published.subscribe(createObserver('SourceB'));

	var connection = published.connect();

	function createObserver(tag: string) {
		return Rx.Observer.create(
			function (x) {
				console.log('Next: ' + tag + x);
			},
			function (err) {
				console.log('Error: ' + err);
			},
			function () {
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
