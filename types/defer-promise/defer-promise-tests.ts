import defer = require('defer-promise');

// $ExpectType Deferred<number>
const a = defer<number>();
// $ExpectType void
a.resolve(5);
// $ExpectError
a.resolve('foo');
// $ExpectError
a.resolve();

// $ExpectType Deferred<void>
const b = defer<void>();
// $ExpectType void
b.resolve();
// $ExpectError
b.resolve(5);

const c: DeferPromise.Deferred<string> = defer();
// $ExpectType void
c.resolve('foo');
// $ExpectType Promise<string>
c.promise;
