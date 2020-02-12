// tslint:disable: no-async-without-await
import tapeSync = require('tape');
import tapePromise = require('tape-promise');

// Bring Your Own Tape:
const tape = tapePromise.default(tapeSync);

const name = String();
const cb = async (test: tapePromise.Test) => {};
const opts: tapePromise.TestOptions = {};
let t: tapePromise.Test;

tape(cb);
tape(name, cb);
tape(opts, cb);
tape(name, opts, cb);

tape(name, async (test: tapePromise.Test) => {
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

tape(name, async (test: tapePromise.Test) => {
	test.test(name, async st => {
		t = st;
	});

	test.test(name, opts, async st => {
		t = st;
	});
});
