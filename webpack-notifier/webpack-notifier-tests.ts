import WebpackNotifierPlugin = require('webpack-notifier');
import { Plugin } from 'webpack';

const configs: Array<WebpackNotifierPlugin.Config> = [
    {
        title: 'Webpack',
        contentImage: 'logo.png',
        excludeWarnings: true,
        alwaysNotify: true,
        skipFirstNotification: true,
    },
];

const plugins: Array<Plugin> = configs.map(config => new WebpackNotifierPlugin(config));
