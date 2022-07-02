import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

// $ExpectType Plugin
sizeSnapshot();

// $ExpectType Plugin
sizeSnapshot({});

// $ExpectType Plugin
sizeSnapshot({
    snapshotPath: 'node_modules/**',
    matchSnapshot: true,
    threshold: 1,
    printInfo: true,
});
