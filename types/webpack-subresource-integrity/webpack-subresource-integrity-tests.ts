import * as webpack from 'webpack';
import SriPlugin = require('webpack-subresource-integrity');

const config: webpack.Configuration = {
    plugins: [
        new SriPlugin(),
        new SriPlugin({
            hashFuncNames: ['sha256', 'sha384']
        }),
        new SriPlugin({
            enabled: false,
            hashFuncNames: ['sha256']
        })
    ]
};
