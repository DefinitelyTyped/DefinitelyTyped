import * as tp from 'tcp-ping';

// $ExpectType void
tp.ping({}, (err, result) => {
    // $ExpectType Result
    result;
    // $ExpectType Results[]
    result.results;
});

// $ExpectError
tp.ping();

// $ExpectError
tp.ping({});

// $ExpectType void
tp.probe("localhost", 8080, () => {});

// $ExpectError
tp.probe("localhost", 8080);

// $ExpectError
tp.probe("localhost");

// $ExpectError
tp.probe();
