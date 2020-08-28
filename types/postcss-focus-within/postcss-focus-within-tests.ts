import postcssFocusWithin = require('postcss-focus-within');
import postcss = require('postcss');

postcssFocusWithin.process('.some-css {}');

postcss([
    postcssFocusWithin({
        preserve: false,
        replaceWith: `[focus-witin]`,
    }),
]).process('.some-css {}' /*, processOptions */);
