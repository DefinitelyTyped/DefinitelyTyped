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
            collections: true,
            computedProperty: false,
            conciseMethodProperty: true,
            constLoop: false,
            dangerousForOf: true,
            dangerousTaggedTemplateString: false,
            defaultParameter: true,
            destructuring: false,
            forOf: true,
            generator: false,
            letConst: true,
            modules: false,
            numericLiteral: true,
            parameterDestructuring: false,
            reservedProperties: true,
            spreadRest: false,
            stickyRegExp: true,
            templateString: false,
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
