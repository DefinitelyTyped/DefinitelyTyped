import { Configuration } from 'webpack';
import WebpackCDNInject = require('webpack-cdn-inject');

const config: Configuration = {
    plugins: [
        new WebpackCDNInject(),
        new WebpackCDNInject({}),
        new WebpackCDNInject({
            body: ['url.js', 'url.css'],
        }),
        new WebpackCDNInject({
            head: ['url.css', 'url.js'],
        }),
        new WebpackCDNInject({
            body: ['url.js', 'url.css'],
            head: ['url.css', 'url.js'],
        }),
    ],
};
