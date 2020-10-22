import builtins = require('rollup-plugin-node-builtins');

// No options (default)
(() => {
    // $ExpectType Plugin
    builtins();
})();

// With `crypto` and `fs` enabled
(() => {
    // $ExpectType Plugin
    builtins({
        crypto: true,
        fs: true,
    });
})();
