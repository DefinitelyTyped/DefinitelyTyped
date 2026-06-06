import vuePlugin = require("esbuild-vue");

// $ExpectType EsbuildVuePluginInstance
vuePlugin();

// $ExpectType EsbuildVuePluginInstance
vuePlugin({});

// $ExpectType EsbuildVuePluginInstance
vuePlugin({
    extractCss: false,
    workers: 4,
    onReadFile() {},
    postcssPlugins: [],
    isAsync: false,
    assembleOptions: {},
});

// $ExpectType EsbuildVuePluginInstance
vuePlugin({
    extractCss: true,
    workers: false,
    assembleOptions: { normalizer: "", styleInjector: "", styleInjectorSSR: "" },
});
