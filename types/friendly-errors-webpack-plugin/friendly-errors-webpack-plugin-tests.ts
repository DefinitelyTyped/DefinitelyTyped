import * as webpack from 'webpack';
import * as FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';

const compiler = webpack({
    plugins: [
        new FriendlyErrorsPlugin(),
    ],
});
