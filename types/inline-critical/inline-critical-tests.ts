import inline from 'inline-critical';

// $ExpectType string
inline('', '');

// $ExpectType string
inline('', '', {});

// $ExpectType string
inline('', '', {
    minify: true,
    extract: true,
    basePath: '',
    ignore: '',
    selector: '',
    noscript: false,
    polyfill: true,
    replaceStylesheets: false
});

// $ExpectType string
inline('', '', {ignore: [/a/]});
