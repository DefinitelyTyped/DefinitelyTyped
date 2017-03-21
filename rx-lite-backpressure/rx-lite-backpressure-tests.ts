// Tests for RxJS-BackPressure TypeScript definitions
// Tests by Igor Oleinikov <https://github.com/Igorbek>

function testPausable() {
	var o: Rx.Observable<string> = {} as any;

	var pauser = new Rx.Subject<boolean>();

	var p = o.pausable(pauser);
	p = o.pausableBuffered(pauser);
}

function testControlled() {
	var o: Rx.Observable<string> = {} as any;
	var c = o.controlled();

	var d: Rx.IDisposable = c.request();
	d = c.request(5);
}
