import postcss = require('postcss');
import postcssGapProperties = require('postcss-gap-properties');

postcssGapProperties.process('.some-css {}');

postcss([
    postcssGapProperties({
        preserve: false
    }),
]).process('.some-css {}');
