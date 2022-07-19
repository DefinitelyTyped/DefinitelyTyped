import benchmark = require('nodemark');

declare var console: any;

console.log('benchmark:', benchmark);

let x: number;

function subject() {
    for (let i = 0; i < 100; i++) {
        const y = Math.exp(x);
        if (!y) {
            throw new Error('Assertion Error: invalid output');
        }
    }
}

function setup() {
    x = Math.random();
}

function asyncSubject(cb: benchmark.DoneCallback) {
    subject();
    cb();
}

function asyncSetup(cb: benchmark.DoneCallback) {
    setup();
    cb();
}

function assertNumber(x: number) {
    if (typeof x !== 'number') {
        throw new Error('Assertion Error: expect number');
    }
}

function assertResult(result: benchmark.BenchmarkResult) {
    console.log(result);

    assertNumber(result.mean);
    assertNumber(result.error);
    assertNumber(result.max);
    assertNumber(result.min);
    assertNumber(result.count);

    assertNumber(result.nanoseconds());
    assertNumber(result.nanoseconds(1));

    assertNumber(result.microseconds());
    assertNumber(result.microseconds(1));

    assertNumber(result.milliseconds());
    assertNumber(result.milliseconds(1));

    assertNumber(result.seconds());
    assertNumber(result.seconds(1));

    assertNumber(result.hz());
    assertNumber(result.hz(1));

    assertNumber(result.sd());
    assertNumber(result.sd(1));
}

assertResult(benchmark(subject, setup));
assertResult(benchmark(subject));

benchmark(asyncSubject, setup).then(assertResult);
benchmark(subject, asyncSetup).then(assertResult);
benchmark(asyncSubject, asyncSetup).then(assertResult);

benchmark(asyncSubject).then(assertResult);
