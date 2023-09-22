import nativePlugin = require("rollup-plugin-natives");

nativePlugin({}); // $ExpectType Plugin<any>

// $ExpectType Plugin<any>
nativePlugin({
    copyTo: "./",
    destDir: "./dist",
    dlopen: true,
    map: () => "",
    sourcemap: true,
    targetEsm: true,
});
