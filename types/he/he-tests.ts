import he = require('he');

function main() {
    var result: string;

    result = he.encode('foo \xa9 bar \u2260 baz qux');
    // 'foo &#xA9; bar &#x2260; baz qux'

    he.encode('foo \0 bar');
    // 'foo \0 bar'

    // Passing an `options` object to `encode`, to explicitly disallow named references:
    he.encode('foo \xa9 bar \u2260 baz qux', {
        'useNamedReferences': false
    });

    he.encode('foo \xa9 bar \u2260 baz qux', {
        'encodeEverything': true
    });

    he.encode('foo \xa9 bar \u2260 baz qux', {
        'encodeEverything': true,
        'useNamedReferences': true
    });

    he.encode('\x01', {
        'strict': false
    });
    // '&#x1;'

    he.encode('foo © and & ampersand', {
        'allowUnsafeSymbols': true
    });

    // Using the global default setting (defaults to `false`):
    he.encode('foo © bar ≠ baz 𝌆 qux');
    // → 'foo &#xA9; bar &#x2260; baz &#x1D306; qux'

    // Passing an `options` object to `encode`, to explicitly disable decimal escapes:
    he.encode('foo © bar ≠ baz 𝌆 qux', {
        'decimal': false
    });
    // → 'foo &#xA9; bar &#x2260; baz &#x1D306; qux'

    // Passing an `options` object to `encode`, to explicitly enable decimal escapes:
    he.encode('foo © bar ≠ baz 𝌆 qux', {
        'decimal': true
    });
    // → 'foo &#169; bar &#8800; baz &#119558; qux'

    // Passing an `options` object to `encode`, to explicitly allow named references and decimal escapes:
    he.encode('foo © bar ≠ baz 𝌆 qux', {
        'useNamedReferences': true,
     'decimal': true
    });

    // Override the global default setting:
    he.encode.options.useNamedReferences = true;

    he.decode('foo &copy; bar &ne; baz &#x1D306; qux');

    he.decode('foo&ampbar', {
        'isAttributeValue': false
    });

    he.decode('foo&ampbar', {
        'strict': false
    });

    he.decode.options.isAttributeValue = true;
    he.escape('<img src=\'x\' onerror="prompt(1)">');
}
