import MiniHtmlWebpackPlugin = require('mini-html-webpack-plugin');
import MiniHtmlWebpackTemplate = require('@vxna/mini-html-webpack-template');

module.exports = {
    plugins: [
        new MiniHtmlWebpackPlugin({
            filename: 'demo.html',
            publicPath: 'demo/',
            context: {
                title: 'demo',
            },
            // apply template
            template: MiniHtmlWebpackTemplate,
        }),
    ],
};
