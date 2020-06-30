import WebpackErrorNotificationPlugin = require('webpack-error-notification');
import webpack = require('webpack');

let config: webpack.Configuration = {
    plugins: [
        // defaults
        new WebpackErrorNotificationPlugin(),
    ],
};

config = {
    plugins: [new WebpackErrorNotificationPlugin('darwin')],
};
config = {
    plugins: [
        new WebpackErrorNotificationPlugin('darwin', {
            notifyWarnings: false,
        }),
    ],
};

config = {
    plugins: [
        new WebpackErrorNotificationPlugin('linux', {
            notifyWarnings: false,
        }),
    ],
};

const customStrategy: WebpackErrorNotificationPlugin.Strategy = (msg: string) => {
    // todo
};

config = {
    plugins: [new WebpackErrorNotificationPlugin(customStrategy)],
};
config = {
    plugins: [
        new WebpackErrorNotificationPlugin(customStrategy, {
            notifyWarnings: false,
        }),
    ],
};
