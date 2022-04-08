import { Plugin } from 'webpack';
import WebpackNotifierPlugin = require('webpack-notifier');

const optionsArray: WebpackNotifierPlugin.Options[] = [
    {
        title: 'Webpack',
        contentImage: 'logo.png',
        excludeWarnings: true,
        alwaysNotify: true,
        skipFirstNotification: true,
        emoji: true,
    },
];

const plugins: Plugin[] = optionsArray.map(options => new WebpackNotifierPlugin(options));
