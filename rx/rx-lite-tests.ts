/// <reference path="rx-lite.d.ts" />
function test_scan() {

	/* Without a seed */
	const source1: Rx.Observable<number> = Rx.Observable.range(1, 3)
		.scan((acc, x, i, source) => acc + x);

	/* With a seed */
	const source2: Rx.Observable<string> = Rx.Observable.range(1, 3)
		.scan((acc, x, i, source) => acc + x, '...');

}

