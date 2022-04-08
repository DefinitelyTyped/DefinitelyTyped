import * as Fingerprint2 from '@fingerprintjs/fingerprintjs';

function defaultCallback(components: Fingerprint2.Component[]) {}
function v18Callback(murmur: string, components: Fingerprint2.V18Component[]) {}

function test_x64hash128() {
    // $ExpectType string
    Fingerprint2.x64hash128('abc', 99);
}

function test_get_default_settings() {
    Fingerprint2.get(defaultCallback);
}

function test_get_with_options() {
    Fingerprint2.get({ excludes: { userAgent: true } }, defaultCallback);
}

function test_getPromise_default_settings() {
    // $ExpectType Promise<Component[]>
    Fingerprint2.getPromise();
}

function test_getPromise_with_options() {
    // $ExpectType Promise<Component[]>
    Fingerprint2.getPromise({ excludes: { userAgent: true } });
}

function test_getV18_default_settings() {
    Fingerprint2.getV18(v18Callback);
}

function test_getV18_with_options() {
    Fingerprint2.getV18({ excludes: { userAgent: true } }, v18Callback);
}

function test_get_audio_options() {
    const options: Fingerprint2.Options = {
        audio: {
            timeout: 10,
            excludeIOS11: true,
        },
    };
    Fingerprint2.get(options, defaultCallback);
}

function test_get_fonts_options() {
    const options: Fingerprint2.Options = {
        fonts: {
            swfContainerId: 'swfContainerId',
            swfPath: 'pathToSwf',
            userDefinedFonts: ['font1', 'font2'],
            extendedJsFonts: true,
        },
    };
    Fingerprint2.get(options, defaultCallback);
}

function test_get_screen_options() {
    const options: Fingerprint2.Options = {
        screen: {
            detectScreenOrientation: true,
        },
    };
    Fingerprint2.get(options, defaultCallback);
}

function test_get_plugins_options() {
    const options: Fingerprint2.Options = {
        plugins: {
            sortPluginsFor: [/foo/i],
            excludeIE: true,
        },
    };
    Fingerprint2.get(options, defaultCallback);
}

function test_get_extraComponents_options() {
    const options: Fingerprint2.Options = {
        extraComponents: [
            {
                key: 'foo',
                getData(done, options) {
                    // $ExpectType (value: any) => void
                    done;
                    // $ExpectType Options
                    options;

                    done('foo');
                },
                pauseBefore: false,
            },
        ],
    };
    Fingerprint2.get(options, defaultCallback);
}

function test_get_excludes_options() {
    let options: Fingerprint2.Options;

    options = { excludes: { userAgent: true } };
    options = { excludes: { language: true } };
    options = { excludes: { colorDepth: true } };
    options = { excludes: { deviceMemory: true } };
    options = { excludes: { pixelRatio: true } };
    options = { excludes: { hardwareConcurrency: true } };
    options = { excludes: { screenResolution: true } };
    options = { excludes: { availableScreenResolution: true } };
    options = { excludes: { timezoneOffset: true } };
    options = { excludes: { timezone: true } };
    options = { excludes: { sessionStorage: true } };
    options = { excludes: { localStorage: true } };
    options = { excludes: { indexedDb: true } };
    options = { excludes: { addBehavior: true } };
    options = { excludes: { openDatabase: true } };
    options = { excludes: { cpuClass: true } };
    options = { excludes: { platform: true } };
    options = { excludes: { doNotTrack: true } };
    options = { excludes: { plugins: true } };
    options = { excludes: { canvas: true } };
    options = { excludes: { webgl: true } };
    options = { excludes: { webglVendorAndRenderer: true } };
    options = { excludes: { adBlock: true } };
    options = { excludes: { hasLiedLanguages: true } };
    options = { excludes: { hasLiedResolution: true } };
    options = { excludes: { hasLiedOs: true } };
    options = { excludes: { hasLiedBrowser: true } };
    options = { excludes: { touchSupport: true } };
    options = { excludes: { fonts: true } };
    options = { excludes: { fontsFlash: true } };
    options = { excludes: { audio: true } };
    options = { excludes: { enumerateDevices: true } };

    Fingerprint2.get(options, defaultCallback);
}
