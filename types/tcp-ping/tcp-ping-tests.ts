import * as tp from 'tcp-ping';

// $ExpectType void
tp.ping({}, () => {});

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
