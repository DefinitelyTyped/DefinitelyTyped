import webpack = require('webpack');
import StylelintWebpackPlugin = require('stylelint-webpack-plugin');

const _ = webpack({
    plugins: [
        new StylelintWebpackPlugin(),
        new StylelintWebpackPlugin({}),
        new StylelintWebpackPlugin({
            configFile: './conf.json',
            context: './dir',
            files: ['/a/b/c/', '/e/f/g'],
            fix: true,
            formatter: 'string',
            lintDirtyModulesOnly: true,
            stylelintPath: 'stylelint',
            emitErrors: true,
            failOnError: true,
            failOnWarning: true,
            quiet: false,
        }),
    ],
});
