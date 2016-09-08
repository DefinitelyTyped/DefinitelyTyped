/// <reference path="rx-lite.d.ts" />
function test_scan() {

	/* Without a seed */
	const source1: Rx.Observable<number> = Rx.Observable.range(1, 3)
		.scan((acc, x, i, source) => acc + x);

	/* With a seed */
	const source2: Rx.Observable<string> = Rx.Observable.range(1, 3)
		.scan((acc, x, i, source) => acc + x, '...');


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

