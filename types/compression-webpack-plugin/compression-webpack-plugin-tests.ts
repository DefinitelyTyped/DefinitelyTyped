import { Configuration } from 'webpack';
import CompressionPlugin = require('compression-webpack-plugin');

const c: Configuration = {
    plugins: [
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
};
