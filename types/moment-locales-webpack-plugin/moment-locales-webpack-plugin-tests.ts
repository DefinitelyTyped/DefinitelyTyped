import MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const plugin1 = new MomentLocalesPlugin();
const plugin2 = new MomentLocalesPlugin({
    localesToKeep: ['es-us', 'ru'],
});
const plugin3 = new MomentLocalesPlugin({
    localesToKeep: ['es-us', 'ru'],
    ignoreInvalidLocales: true,
});
