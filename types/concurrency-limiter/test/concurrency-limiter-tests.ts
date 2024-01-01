import Limiter = require("concurrency-limiter");

// @ts-expect-error
new Limiter();
new Limiter(2);

// @ts-expect-error
new Limiter(2)._limit;
// @ts-expect-error
new Limiter(2)._length;
// @ts-expect-error
new Limiter(2)._queue;

new Limiter(2).enter();
new Limiter(2).exit();
// @ts-expect-error
new Limiter(2).run();
new Limiter(2).run(async () => "abc"); // $ExpectType Promise<string>
new Limiter(2).run(async () => 123); // $ExpectType Promise<number>
new Limiter(2).run(() => 123); // $ExpectType Promise<number>
