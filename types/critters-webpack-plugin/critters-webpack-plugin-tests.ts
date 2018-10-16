import Critters = require('critters-webpack-plugin');

new Critters({
    compress: true,
    external: true,
    inlineFonts: false,
    preloadFonts: true,
    keyframes: 'critical',
    noscriptFallback: true,
});
