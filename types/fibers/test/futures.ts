import Future = require('fibers/future');

const futureWaitTest = () => {
  const meaningOfLife = Future.fromPromise(
    new Promise<number>(resolve => resolve(42)).then(
      (value: number) => `3½ years = ${value} months`,
    ),
  );

  const someValueFuture = Future.fromPromise(Promise.resolve(54));

  Future.task(() => {
    Future.wait([someValueFuture], meaningOfLife);
    console.log(meaningOfLife.get());
    console.log(someValueFuture.get());
  }).detach();
};

const futureSleepTest = () => {
  const sleep = (ms: number) => {
    const future = new Future();
    setTimeout(() => future.return(), ms);
    future.wait();
  };

  // tslint:disable-next-line:only-arrow-functions
  const calcTimerDelta = function(ms: number) {
    const start = new Date();
    sleep(ms);
    return Date.now() - start.getTime();
  }.future(); // Starts a fiber

  calcTimerDelta(2000).resolve((err, val) => {
    console.log(`Set timer for 2000ms, waited ${val}ms`);
  });
};

const futureWrapTest = () => {
  const f = (x: number) => x + 42;
  const e = f.future();
  const fe = Future.wrap(f);

  Future.task(() => {
    console.log('Hello');
    console.log(e(90).wait());
    console.log('World');
  }).detach();

  const a = {
    b: (x: number, cb: (err?: Error, result?: number) => void) =>
      cb(undefined, x + 5),
  };
  const b = Future.wrap(a).bFuture;
  const c: Future<number> = b(10);

  Future.task(() => {
    console.log(`The result is: ${c.wait()}`);
  }).detach();
};
