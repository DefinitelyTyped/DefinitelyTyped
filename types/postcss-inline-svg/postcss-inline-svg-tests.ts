import postcss from 'postcss';
import inlineSvg = require('postcss-inline-svg');

// Test without options
postcss([inlineSvg()]);

// Test with empty options
postcss([inlineSvg({})]);

// Test `path`
postcss([
    inlineSvg({
        paths: ['..', 'svg'],
    }),
]);

// Test `xmlns`
postcss([
    inlineSvg({
        xmlns: false,
    }),
]);

// Test `encode`
postcss([
    inlineSvg({
        encode: code => code,
    }),
]);

// Test `encode`
postcss([
    inlineSvg({
        transform: (svg, _path) => svg,
    }),
]);

// Test removeFill and removeStroke
postcss([
    inlineSvg({
        removeFill: true,
        removeStroke: /.*/g,
    }),
]);

// Test all options
postcss([
    inlineSvg({
        paths: ['..', 'svg'],
        xmlns: false,
        encode: code => code,
        transform: (svg, _path) => svg,
        removeFill: true,
        removeStroke: /$data/g,
    }),
]);

// Test another way to use postcss-inline-svg
postcss().use(inlineSvg());
