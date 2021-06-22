import hash = require('promise-hash');

const result = Promise.hash({
    a: 5,
    b: Promise.resolve("test"),
    c: Promise.hash({
        d: Promise.resolve(true),
        e: Promise.resolve("again")
    })
});

type expectedType = Promise<{ a: number; b: string; c: { d: boolean; e: string; } }>;
type resultIsExpected = typeof result extends expectedType ? true : false; // $ExpectType true
type expectedIsResult = expectedType extends typeof result ? true : false; // $ExpectType true

const dResult = result.then(x => x.c.d);
dResult; // $ExpectType Promise<boolean>

const result2 = hash({
    test: Promise.resolve("hello world")
});

result2; // $ExpectType Promise<{ test: string; }>
