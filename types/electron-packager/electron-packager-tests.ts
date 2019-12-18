import packager = require('electron-packager');

function callback(err: Error, appPaths: string[]) {
    const msg = err.message;
    const index = appPaths.indexOf('test');
}

function completeFunction(
    buildPath: string,
    electronVersion: string,
    platform: string,
    arch: string,
    callbackFn: () => void
) {
    callbackFn();
}

function ignoreFunction(path: string) {
    return true;
}

function onCompleted(appPaths: string | string[]) {}

function onError(error: Error) {}

packager({
    dir: '.',
    name: 'myapplication',
    platform: 'win32',
    arch: 'all',
    electronVersion: '0.34.0',
    win32metadata: {
        CompanyName: 'Acme CO',
        FileDescription: 'My application',
        OriginalFilename: 'myapp.exe',
        ProductName: 'Application',
        InternalName: 'roadrunner',
        'requested-execution-level': 'highestAvailable',
        'application-manifest': 'manifest.xml',
    },
})
    .then(onCompleted)
    .catch(onError);

packager({
    dir: '.',
    name: 'myapplication',
    electronVersion: '0.34.0',
    all: true,
    win32metadata: {
        CompanyName: 'Acme CO',
        FileDescription: 'My application',
        OriginalFilename: 'myapp.exe',
        ProductName: 'Application',
        InternalName: 'roadrunner',
        'requested-execution-level': 'requireAdministrator',
        'application-manifest': 'manifest.xml',
    },
})
    .then(onCompleted)
    .catch(onError);

packager({
    dir: '.',
    name: 'myapplication',
    platform: 'all',
    arch: 'all',
    electronVersion: '0.34.0',
})
    .then(onCompleted)
    .catch(onError);

packager({
    dir: '.',
    name: 'myapplication',
    electronVersion: '0.34.0',
    all: true,
})
    .then(onCompleted)
    .catch(onError);

packager({
    dir: '.',
    name: 'myapplication',
    electronVersion: '0.34.0',
    arch: 'arm64',
    executableName: 'myapp',
})
    .then(onCompleted)
    .catch(onError);

packager({
    dir: '.',
    afterCopy: [completeFunction],
    afterExtract: [completeFunction],
    afterPrune: [completeFunction],
    appCopyright: 'Copyright',
    appVersion: '1.0',
    arch: 'ia32',
    asar: false,
    buildVersion: '1.2.3',
    derefSymlinks: true,
    download: {
        cacheRoot: './zips',
        mirrorOptions: {
            mirror: 'https://10.1.2.105/',
        },
    },
    extraResource: 'foo.js',
    icon: 'foo.ico',
    ignore: /ab+c/,
    out: 'out',
    overwrite: true,
    prune: true,
    quiet: true,
    tmpdir: '/tmp',
    win32metadata: {
        CompanyName: 'Acme CO',
        FileDescription: 'My application',
        OriginalFilename: 'myapp.exe',
        ProductName: 'Application',
        InternalName: 'roadrunner',
        'requested-execution-level': 'asInvoker',
        'application-manifest': 'manifest.xml',
    },
})
    .then(onCompleted)
    .catch(onError);

packager({
    dir: '.',
    arch: 'x64',
    asar: true,
    derefSymlinks: false,
    download: {
        cacheRoot: './zips',
        mirrorOptions: {
            mirror: 'https://10.1.2.105/',
        },
    },
    extraResource: ['foo.js', 'bar.js'],
    ignore: [/ab+c/, new RegExp('abc')],
    overwrite: false,
    platform: 'darwin',
    prune: false,
    quiet: false,
    tmpdir: 'false',
    appBundleId: '123456',
    appCategoryType: 'public.app-category.developer-tools',
    extendInfo: 'plist.txt',
    helperBundleId: '23223f',
    osxSign: true,
})
    .then(onCompleted)
    .catch(onError);

packager({
    dir: '.',
    arch: 'armv7l',
    asar: {
        ordering: 'order.txt',
        unpack: '*.js',
        unpackDir: 'sub_dir',
    },
    download: {
        cacheRoot: './zips',
        mirrorOptions: {
            mirror: 'https://10.1.2.105/',
        },
    },
    ignore: ignoreFunction,
    platform: 'linux',
})
    .then(onCompleted)
    .catch(onError);

packager({
    dir: '.',
    arch: 'mips64el',
    electronVersion: '1.8.8',
    prebuiltAsar: 'prebuilt.asar',
    platform: 'linux',
})
    .then(onCompleted)
    .catch(onError);

packager({
    dir: '.',
    arch: ['ia32', 'x64'],
    download: {
        cacheRoot: './zips',
        mirrorOptions: {
            mirror: 'https://10.1.2.105/',
        },
    },
    platform: 'mas',
    extendInfo: {
        foo: 'bar',
    },
    osxNotarize: {
        appleId: 'My ID',
        appleIdPassword: 'Bad Password',
    },
    osxSign: {
        identity: 'myidentity',
        entitlements: 'path/to/my.entitlements',
        'entitlements-inherit': 'path/to/inherit.entitlements',
    },
    protocols: [
        {
            name: 'myappproto',
            schemes: ['myapp', 'myapp2'],
        },
    ],
})
    .then(onCompleted)
    .catch(onError);
