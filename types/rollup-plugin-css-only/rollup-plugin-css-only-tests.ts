import css = require('rollup-plugin-css-only');

css({ output: 'bundle.css' });

css({ output: false });

css({ output: (styles, styleNodes, bundle) => {} });

css({
    output: null,
});

css();
