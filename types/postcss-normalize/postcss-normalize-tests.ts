import postcss = require('postcss');
import postcssNormalize = require('postcss-normalize');

postcssNormalize.process('.some-css {}');

postcss([
    postcssNormalize({
        allowDuplicates: true,
        forceImport: 'style.css',
        browsers: 'last 2 versions'
    }),
]).process('.some-css {}');
