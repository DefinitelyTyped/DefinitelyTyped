import which = require('which');

which('cat', (err, path) => {
    path; // $ExpectType string | undefined
});

const path = which.sync('cat'); // $ExpectType string

which('cat', { all: true }, (err, paths) => {
    if (err) return;
    if (paths) {
        for (const path of paths) {
            path; // $ExpectType string
        }
    }
});

const promise: Promise<string> = which('cat');
const promise1: Promise<string> = which('cat', { all: false });
const promise2: Promise<string[]> = which('cat', { all: true });

which('node')
    .then(resolvedPath => {
        resolvedPath; // $ExpectType string
    })
    .catch(er => {});

async () => {
    const path = await which('cat');
};

const paths = which.sync('cat', { all: true });
for (const path of paths) {
    path; // $ExpectType string
}

const paths2 = which.sync('cat', { all: true, nothrow: true });
if (paths2 !== null) {
    for (const path of paths2) {
        path; // $ExpectType string
    }
}

const path2 = which.sync('cat', { path: 'replacement path', pathExt: 'replacement pathext' });
which('cat', { path: 'replacement path', pathExt: 'replacement pathext' }, (err, path) => {
    const a: string = path!;
});
which.sync('cat'); // $ExpectType string
