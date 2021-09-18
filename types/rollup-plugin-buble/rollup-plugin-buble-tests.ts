import buble = require('rollup-plugin-buble');

// No options (default)
(() => {
    // $ExpectType Plugin
    buble();
})();

// With every options
(() => {
    // $ExpectType Plugin
    buble({
        target: {
            chrome: 71,
            firefox: 64,
        },
        objectAssign: true,
        transforms: {
            arrow: true,
            classes: false,
            computedProperty: false,
            conciseMethodProperty: true,
            dangerousForOf: true,
            dangerousTaggedTemplateString: false,
            defaultParameter: true,
            destructuring: false,
            exponentiation: true,
            forOf: true,
            generator: false,
            letConst: true,
            modules: false,
            numericLiteral: true,
            objectRestSpread: true,
            parameterDestructuring: false,
            reservedProperties: true,
            spreadRest: false,
            templateString: false,
            trailingFunctionCommas: true,
            unicodeRegExp: true,
        }
    });
})();

// Filter files
(() => {
    // $ExpectType Plugin
    buble({
        include: '*.js',
        exclude: '*.js',
    });

    // $ExpectType Plugin
    buble({
        include: /.js$/,
        exclude: ['foo.js', 'bar.js'],
    });
})();
