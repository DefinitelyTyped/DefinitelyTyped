import postcss from 'rollup-plugin-postcss';

postcss(); // $ExpectType Plugin

postcss({ modules: true, minimize: true }); // $ExpectType Plugin
