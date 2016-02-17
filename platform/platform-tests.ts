/// <reference path="platform.d.ts" />

interface ITestContainer {
    [name: string]: PlatformStatic;
}


var tests: ITestContainer = {
    'Chrome Mobile 16.0.912.77 on Android 4.0.3': {
        description: "Chrome Mobile 16.0.912.77 on Android 4.0.3",
        layout: "WebKit",
        manufacturer: null,
        name: "Chrome Mobile",
        os: {
            architecture: 32,
            family: "Android",
            version: "4.0.3"
        },
        prerelease: null,
        product: null,
        ua: "Mozilla/5.0 (Linux; U; Android 4.0.3; zh-cn; HTC Sensation XE with Beats Audio Build/IML74K) AppleWebKit/535.7 (KHTML, like Gecko) CrMo/16.0.912.77 Mobile Safari/535.7",
        version: "16.0.912.77"
    },
    'WebKit Nightly 528.4 (like Safari 4.x) on Mac OS X 10.4.11': {
        description: "WebKit Nightly 528.4 (like Safari 4.x) on Mac OS X 10.4.11",
        layout: "WebKit",
        manufacturer: null,
        name: "WebKit Nightly",
        os: {
            architecture: 32,
            family: "Mac OS X",
            version: "10.4.11"
        },
        prerelease: "alpha",
        product: null,
        ua: "Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_4_11; tr) AppleWebKit/528.4+ (KHTML, like Gecko) Version/4.0dp1 Safari/526.11.2",
        version: "528.4"
    }
};


function runTests() {
    var t: PlatformStatic;
    var p: PlatformStatic;
    var x: string;
    var px: any;
    var res: boolean;
    var onFalse: (name: string) => () => any;

    for (var n in tests) {

        t = tests[n];
        p = platform.parse(t.ua);


        onFalse = (name: string) => {
            return () => {
                console.log('\tfailed on prop "' + name + '" for "' + n + '"');
            }
        }

        console.log('Starting tests for: ' + n);

        falsy(() => { return t.description === p.description }, onFalse('description'));
        falsy(() => { return t.layout === p.layout }, onFalse('layout'));
        falsy(() => { return t.name === p.name }, onFalse('name'));
        falsy(() => { return t.prerelease === p.prerelease }, onFalse('prerelease'));
        falsy(() => { return t.ua === p.ua }, onFalse('ua'));
        falsy(() => { return t.version === p.version }, onFalse('version'));
        
        falsy(() => { return t.os.architecture === p.os.architecture }, onFalse('os.architecture'));
        falsy(() => { return t.os.family === p.os.family }, onFalse('os.family'));
        falsy(() => { return t.os.version === p.os.version }, onFalse('os.version'));

        console.log('Finished tests for: ' + n);


    }
}

function falsy(condition: () => boolean, action: () => any) {
    if (condition() === false)
        action();
}

