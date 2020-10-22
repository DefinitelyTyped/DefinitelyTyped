import cssesc = require("cssesc");

// $ExpectType string
cssesc('Ich ♥ Bücher');

// $ExpectType string
cssesc('123a2b', {
    isIdentifier: true
});

// $ExpectType string
cssesc('Lorem ipsum "dolor" sit \'amet\' etc.', {
    quotes: 'single'
});

// $ExpectType string
cssesc('Lorem ipsum "dolor" sit \'amet\' etc.', {
    quotes: 'double'
});

// $ExpectType string
cssesc('Lorem ipsum "dolor" sit \'amet\' etc.', {
    quotes: 'single',
    wrap: true
});

// $ExpectType string
cssesc('lolwat"foo\'bar', {
    escapeEverything: true
});

cssesc.options.escapeEverything = false;

// $ExpectType string
cssesc.version;
