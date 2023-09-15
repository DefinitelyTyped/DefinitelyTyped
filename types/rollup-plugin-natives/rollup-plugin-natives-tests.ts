import nativePlugin = require('rollup-plugin-natives');

nativePlugin({}); // $ExpectType Plugin

// $ExpectType Plugin
nativePlugin({
    copyTo: './',
    destDir: './dist',
    dlopen: true,
    map: () => '',
    sourcemap: true,
    targetEsm: true,
});
