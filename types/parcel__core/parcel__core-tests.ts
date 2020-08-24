import Parcel, { BuildError, createWorkerFarm } from '@parcel/core';

const parcel = new Parcel({
    entries: ['./index.html'],
    config: {
        transformers: {
            '*.{ts,tsx}': ['@parcel/transformer-typescript-tsc'],
        },
        filePath: __filename,
    },
    defaultConfig: {
        filePath: '@parcel/config-default',
    },
    workerFarm: createWorkerFarm(),
});

parcel.run().then(
    graph => {
        graph.traverseBundles(bundle => {
            bundle.traverseAssets(asset => {
                console.log(asset.filePath);
            });
        });
    },
    err => {
        if (err instanceof BuildError) {
            console.log(err);
        } else {
            throw err;
        }
    },
);
