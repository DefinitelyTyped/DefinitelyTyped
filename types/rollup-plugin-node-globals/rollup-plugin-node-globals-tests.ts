import globals from 'rollup-plugin-node-globals';

// No options (default)
(() => {
    // $ExpectType Plugin
    globals();
})();

// With every options
(() => {
    // $ExpectType Plugin
    globals({
        process: false,
        global: false,
        buffer: false,
        dirname: false,
        filename: false,
        baseDir: '/',
    });
})();

// Filter files
(() => {
    // $ExpectType Plugin
    globals({
        include: '*.js',
        exclude: '*.js',
    });

    // $ExpectType Plugin
    globals({
        include: /.js$/,
        exclude: ['foo.js', 'bar.js'],
    });
})();

// Sourcemaps
(() => {
    // $ExpectType Plugin
    globals({
        sourceMap: false,
    });
})();
