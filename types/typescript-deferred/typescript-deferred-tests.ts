import tsd = require('typescript-deferred');

var t1: tsd.PromiseInterface<string> = tsd.when(10)
    .then(() => tsd.when('foo'));

var t2: tsd. PromiseInterface<string> = tsd.when(10)
    .then(() => 'foo');

var t3: tsd.PromiseInterface<string> = tsd.when(10)
    .then(() => 'foo', () => tsd.when('bar'));

var t4: tsd.PromiseInterface<string> = tsd.when(10)
    .then(() => 'foo', () => 'bar');

var t5: tsd.PromiseInterface<string> = tsd.when(10)
    .then(() => tsd.when('foo'), () => 'bar');

var t6: tsd.PromiseInterface<string> = tsd.when(10)
    .then(() => tsd.when('foo'), () => tsd.when('bar'));

var t7: tsd.PromiseInterface<string> = tsd.when(10)
    .always(() => 'foo');

var t8: tsd.PromiseInterface<string> = tsd.when(10)
    .always(() => tsd.when('foo'));

var t9: tsd.PromiseInterface<number> = tsd.when(10)
    .otherwise(() => 11);

var t10: tsd.PromiseInterface<number> = tsd.when(10)
    .otherwise(() => tsd.when(11));

var t11: tsd.PromiseInterface<string> = tsd.when('foo');

var t12: tsd.PromiseInterface<string> = tsd.when(tsd.when('foo'));

var t13: tsd.PromiseInterface<string> = tsd.create<string>()
    .promise;

var t14: tsd.DeferredInterface<string> = tsd.create<string>();

var t15: tsd.ThenableInterface<string> = tsd.when('foo');

var t16: tsd.PromiseInterface<string> = tsd.when(<tsd.ThenableInterface<string> >tsd.when('foo'));

var t17: tsd.PromiseInterface<string> = tsd.when(10)
    .then(() => <tsd.ThenableInterface<string> >tsd.when('foo'), () => <tsd.ThenableInterface<string> >tsd.when('bar'));

var t18: tsd.PromiseInterface<string> = tsd.create<string>()
    .resolve('foo')
    .promise;

var t19: tsd.PromiseInterface<string> = tsd.create<string>()
    .resolve(tsd.when('foo'))
    .promise;

var t20: tsd.PromiseInterface<string> = tsd.create<string>()
    .reject(new Error('foo'))
    .promise;
