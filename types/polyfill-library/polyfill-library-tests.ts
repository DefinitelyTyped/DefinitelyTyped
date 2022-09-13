import polyfillLibrary = require('polyfill-library');

// $ExpectType Promise<string[]>
polyfillLibrary.listAllPolyfills();

// $ExpectType Promise<PolyfillMeta | undefined>
polyfillLibrary.describePolyfill('fetch');

// $ExpectType Options
polyfillLibrary.getOptions();

// $ExpectType Options
polyfillLibrary.getOptions({
    uaString: 'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)',
    minify: true,
    features: {
        es6: { flags: ['gated'] },
    },
});

// $ExpectType Promise<Feature>
polyfillLibrary.getPolyfills();

// $ExpectType Promise<Feature>
polyfillLibrary.getPolyfills({
    uaString: 'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)',
    minify: true,
    features: {
        es6: { flags: ['gated'] },
    },
});

// $ExpectType Promise<string | Readable>
polyfillLibrary.getPolyfillString();

// $ExpectType Promise<string | Readable>
polyfillLibrary.getPolyfillString({
    uaString: 'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)',
    minify: true,
    features: {
        es6: { flags: ['gated'] },
    },
});
