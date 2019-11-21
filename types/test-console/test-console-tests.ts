import { stdout, stderr } from 'test-console';

// $ExpectType Inspector
stdout.inspect();
// $ExpectType Inspector
stdout.inspect({isTTY: true});

// $ExpectError
stdout.inspectSync();
// $ExpectError
stdout.inspectSync({});
// $ExpectType ReadonlyArray<string> || Output
stdout.inspectSync({isTTY: false}, (output) => output);

// $ExpectType Restore
stdout.ignore();
// $ExpectType Restore
stdout.ignore({isTTY: false});

// $ExpectError
stdout.ignoreSync();
// $ExpectType void
stdout.ignoreSync(() => {});
// $ExpectError
stdout.ignoreSync({}, (output) => output);
// $ExpectType void
stdout.ignoreSync({}, () => {});

// $ExpectType Inspector
stderr.inspect();
// $ExpectType Inspector
stderr.inspect({isTTY: true});

// $ExpectError
stderr.inspectSync();
// $ExpectError
stderr.inspectSync({});
// $ExpectType ReadonlyArray<string> || Output
stderr.inspectSync({isTTY: false}, (output) => output);

// $ExpectType Restore
stderr.ignore();
// $ExpectType Restore
stderr.ignore({isTTY: false});

// $ExpectError
stderr.ignoreSync();
// $ExpectType void
stderr.ignoreSync(() => {});
// $ExpectError
stderr.ignoreSync({}, (output) => output);
// $ExpectType void
stderr.ignoreSync({}, () => {});
