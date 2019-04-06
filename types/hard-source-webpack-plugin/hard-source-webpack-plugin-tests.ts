import * as HardSourceWebpackPlugin from 'hard-source-webpack-plugin';

new HardSourceWebpackPlugin({
    info: {
        level: 'debug',
        mode: 'test',
    }
});
