import webpack = require('webpack');
import FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const compiler = webpack({
    plugins: [
        new FriendlyErrorsPlugin(),
    ],
});
