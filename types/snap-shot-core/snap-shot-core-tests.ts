import snapShot = require('snap-shot-core');

declare const process: any;

// core()

const opts: snapShot.Opts = {
    show: Boolean(process.env.SHOW),
    dryRun: Boolean(process.env.DRY),
    update: Boolean(process.env.UPDATE),
    ci: Boolean(process.env.CI),
    sortSnapshots: false,
    useRelativePath: false,
};

const out0 = snapShot.core({
    what: 42,
    file: 'file',
    specName: 'my test',
    store: x => x,
    ext: '.test',
    opts,
});
out0.key; // $ExpectType string
out0.value; // $ExpectType number

// Test type mapping of `store` function.
const out1 = snapShot.core({
    what: 42,
    file: 'file',
    specName: 'my test',
    store: x => ({ mapped: x }),
});
out1.key; // $ExpectType string
out1.value; // $ExpectType { mapped: number; }

// @ts-expect-error
snapShot.core({ what: undefined });

// restore()

snapShot.restore();
// @ts-expect-error
snapShot.restore({});
snapShot.restore({ file: 'file', specName: 'spec' });

// prune()

snapShot.prune({ tests: [] });
snapShot.prune({ tests: [{ specFile: 'file', key: 'key' }], ext: '.snapshot.js' }, { sortSnapshots: true });

// throwCannotSaveOnCI()
// (the tests are wrapped in functions to get rid of the "unreachable code" warning)

() => {
    snapShot.throwCannotSaveOnCI({ fileParameter: 'file', exactSpecName: 'spec' }); // $ExpectType never
};
() => {
    snapShot.throwCannotSaveOnCI({ fileParameter: 'file', specName: 'spec', index: 0, value: 42 }); // $ExpectType never
};

// savedSnapshotName()

snapShot.savedSnapshotName(); // $ExpectType string
snapShot.savedSnapshotName({ exactSpecName: 'spec' });
snapShot.savedSnapshotName({ specName: 'spec', index: 0 });

// storeValue()

snapShot.storeValue({
    file: 'file',
    // @ts-expect-error
    value: undefined,
});
snapShot.storeValue({
    file: 'file',
    value: 42,
    comment: 'comment',
    opts,
    ext: '.snapshot.js',
    exactSpecName: 'spec',
});
