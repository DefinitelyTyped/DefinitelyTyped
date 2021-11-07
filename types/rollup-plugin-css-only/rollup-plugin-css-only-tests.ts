import css = require('rollup-plugin-css-only');

css({ output: 'bundle.css' });

css({ output: false });

css({ output: function (styles, styleNodes, bundle) {} });

css();
