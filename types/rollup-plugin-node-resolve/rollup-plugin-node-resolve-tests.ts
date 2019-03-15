import resolve from 'rollup-plugin-node-resolve';

// $ExpectType Plugin
resolve();

// $ExpectType Plugin
resolve({});

// $ExpectType Plugin
resolve({
    module: true,
    jsnext: true,
    main: true,
    browser: true,
    extensions: [ '.mjs', '.js', '.jsx', '.json' ],
    preferBuiltins: false,
    jail: '/my/jail/path',
    only: [ 'some_module', /^@some_scope\/.*$/ ],
    modulesOnly: true,
    customResolveOptions: {
        moduleDirectory: 'js_modules',
    },
});
