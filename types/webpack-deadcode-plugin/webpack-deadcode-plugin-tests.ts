import { Configuration, Plugin } from 'webpack';
import DeadCodePlugin = require('webpack-deadcode-plugin');

const webpackConfig: Configuration = {
    plugins: [
        new DeadCodePlugin({
            patterns: ['src/**/*.(js|jsx|css)'],
            exclude: ['**/*.(stories|spec).(js|jsx)'],
        }),
    ],
};

const plugin1: Plugin = new DeadCodePlugin();
const plugin2: Plugin = new DeadCodePlugin({});
const plugin3: Plugin = new DeadCodePlugin({
    patterns: ['src/**/*.(js|jsx|css)'],
    exclude: ['**/*.(stories|spec).(js|jsx)'],
    context: '~/foo/bar',
    detectUnusedExport: false,
    detectUnusedFiles: false,
    failOnHint: true,
});
