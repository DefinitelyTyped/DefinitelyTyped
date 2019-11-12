import hash = require('promise-hash');

const result = Promise.hash({
    a: Promise.resolve(5),
    b: Promise.resolve("test"),
    c: hash({
        d: Promise.resolve(true),
        e: Promise.resolve("again")
    })
});

result; // $ExpectType Promise<{ a: number; b: string; c: { d: boolean; e: string; }; }>

const result2 = hash({
    test: Promise.resolve("hello world")
});

result2; // $ExpectType Promise<{ test: string; }>
