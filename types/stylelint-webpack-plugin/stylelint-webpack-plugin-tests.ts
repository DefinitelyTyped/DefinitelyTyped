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
            emitError: true,
            emitWarning: true,
            formatter: 'string',
            lintDirtyModulesOnly: true,
            stylelintPath: 'stylelint',
            failOnError: true,
            failOnWarning: true,
            quiet: false,
        }),
    ],
});
