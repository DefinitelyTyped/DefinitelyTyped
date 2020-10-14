import resolve = require('browser-resolve');

const fixturesDir = __dirname + '/fixtures/node_modules';

const basic_test_async = (callback: (err?: Error | null, resolved?: string) => void) => {
    // $ExpectType void
    resolve('typescript', (error, resolved) => {
        if (error) {
            callback(error);
            return;
        }
        callback(null, resolved);
    });
};

// $ExpectType string
resolve.sync('typescript');

resolve(
    'typescript',
    {
        browser: 'jsnext:main',
        filename: './browser-resolve/browser-resolve.js',
        modules: {
            fs: './fs-shim.js',
        },
        paths: [fixturesDir],
    },
    (error, resolved) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log(resolved);
    },
);

resolve.sync('typescript', {
    filename: './browser-resolve/browser-resolve.js',
    modules: {},
});

resolve.sync('@scope/my-module', {
    browser: 'module',
    packageFilter: (pkg: any) => {
        pkg.module = pkg.module || pkg.browser;
        return pkg;
    },
});
resolve.sync('@scope/my-module', {
    browser: 'module',
    packageFilter: (pkg: any, pkgdir: string) => {
        pkg.module = pkg.module || pkg.browser;
        console.log(`pkgdir: ${pkgdir}`);
        return pkg;
    },
});
