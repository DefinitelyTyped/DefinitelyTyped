// tslint:disable: no-async-without-await
// peerDependencies: { tape: '*' }
import tape = require('tape-promise/tape');

const name = String();
const cb = async (test: tape.Test) => {};
const opts: tape.TestOptions = {};
let t: tape.Test;

tape(cb);
tape(name, cb);
tape(opts, cb);
tape(name, opts, cb);

tape(name, async (test: tape.Test) => {
	t = test;
});

tape.skip(cb);
tape.skip(name, cb);
tape.skip(opts, cb);
tape.skip(name, opts, cb);

tape.only(cb);
tape.only(name, cb);
tape.only(opts, cb);
tape.only(name, opts, cb);

tape(name, async (test: tape.Test) => {
	test.test(name, async st => {
		t = st;
	});

	test.test(name, opts, async st => {
		t = st;
	});
});
