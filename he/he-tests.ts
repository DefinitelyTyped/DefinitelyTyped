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
