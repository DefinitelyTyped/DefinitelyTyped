import * as memwatch from '@airbnb/node-memwatch';

// @ts-expect-error
memwatch.on('foobar');
// @ts-expect-error
memwatch.on('stats', 'baz');
// $ExpectType void
memwatch.on('stats', (
    result // $ExpectType GcStats
) => {});

new memwatch.HeapDiff(); // $ExpectType HeapDiff
(new memwatch.HeapDiff()).end(); // $ExpectType HeapDiffResult
