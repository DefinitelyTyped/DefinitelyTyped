import * as tp from 'tcp-ping';

// $ExpectType void
tp.ping({}, (err, result) => {
    // $ExpectType Result
    result;
    // $ExpectType Results[]
    result.results;
    // $ExpectType number
    result.results[0].seq;
    // $ExpectType number | undefined
    result.results[0].time;
    // $ExpectType Error | undefined
    result.results[0].err;
});

// @ts-expect-error
tp.ping();

// @ts-expect-error
tp.ping({});

// $ExpectType void
tp.probe("localhost", 8080, (err, result) => {
    // $ExpectType boolean
    result;
});

// @ts-expect-error
tp.probe("localhost", 8080);

// @ts-expect-error
tp.probe("localhost");

// @ts-expect-error
tp.probe();
