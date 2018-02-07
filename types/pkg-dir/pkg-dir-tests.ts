import pkgDir = require('pkg-dir');

pkgDir('/Users/project/pkg-dir').then(rootDir => {
    rootDir; // $ExpectType string | null
});

pkgDir().then(rootDir => {
    rootDir;
});

pkgDir.sync('/Users/project/pkg-dir'); // $ExpectType string | null
