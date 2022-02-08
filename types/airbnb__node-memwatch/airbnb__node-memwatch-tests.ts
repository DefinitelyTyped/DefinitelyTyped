import * as memwatch from '@airbnb/node-memwatch';

memwatch.on('foobar'); // $ExpectError
memwatch.on('stats', 'baz'); // $ExpectError
// $ExpectType void
memwatch.on('stats', (
    result // $ExpectType GcStats
) => {});

new memwatch.HeapDiff(); // $ExpectType HeapDiff
(new memwatch.HeapDiff()).end(); // $ExpectType HeapDiffResult
