import ProgressBarPlugin = require('progress-bar-webpack-plugin');
import webpack = require('webpack');

const configuration: webpack.Configuration = {
    plugins: [
        new ProgressBarPlugin({
            total: 10,
            format: `  build [:bar] ... (:elapsed seconds)`,
            clear: false,
            callback: () => {
                console.log('done');
            },
            complete: '=',
            curr: 2,
            incomplete: ' ',
            width: 20,
            customSummary: summary => {
                console.log(summary);
                // rest of the code ...
            },
        }),
    ],
};
webpack(configuration);
