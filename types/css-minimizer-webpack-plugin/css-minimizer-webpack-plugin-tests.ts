import CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new CssMinimizerPlugin({}),
            new CssMinimizerPlugin({
                test: /\.foo\.css$/i,
                include: /\/includes/,
                exclude: /\/excludes/,
                cache: true,
                cacheKeys: (defaultCacheKeys, file) => {
                    defaultCacheKeys.myCacheKey = 'myCacheKeyValue';
                    return defaultCacheKeys;
                },
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
                parallel: true,
                sourceMap: {
                    inline: false,
                },
                warningsFilter: (warning, file, source) => {
                    if (/Dropping unreachable code/i.test(warning)) {
                        return true;
                    }

                    if (/file\.css/i.test(file)) {
                        return true;
                    }

                    if (/source\.css/i.test(source)) {
                        return true;
                    }

                    return false;
                },
            }),
        ],
    },
};
