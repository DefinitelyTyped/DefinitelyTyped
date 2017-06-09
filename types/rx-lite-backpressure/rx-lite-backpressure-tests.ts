// Tests for RxJS-BackPressure TypeScript definitions
// Tests by Igor Oleinikov <https://github.com/Igorbek>

function testPausable() {
	const o: Rx.Observable<string> = {} as any;

	const pauser = new Rx.Subject<boolean>();

	let p = o.pausable(pauser);
	p = o.pausableBuffered(pauser);
}

function testControlled() {
	const o: Rx.Observable<string> = {} as any;
	const c = o.controlled();

	let d: Rx.IDisposable = c.request();
	d = c.request(5);
}
