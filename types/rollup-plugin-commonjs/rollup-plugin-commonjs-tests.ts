import commonjs from 'rollup-plugin-commonjs';

// $ExpectType Plugin
commonjs();

// $ExpectType Plugin
commonjs({});

// $ExpectType Plugin
commonjs({
    include: 'node_modules/**',
    exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],
    extensions: [ '.js', '.coffee' ],
    ignoreGlobal: false,
    sourceMap: false,
    namedExports: { './module.js': ['foo', 'bar' ] },
    ignore: [ 'conditional-runtime-dependency' ],
});
