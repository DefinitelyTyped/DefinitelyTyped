import { Plugin } from 'webpack';
import { WebpackPkgPlugin } from 'webpack-pkg-plugin-v4';

function acceptWebpackPlugin(_: Plugin) {}

acceptWebpackPlugin(
    new WebpackPkgPlugin({
        output: 'pkg',
    }),
);

acceptWebpackPlugin(
    new WebpackPkgPlugin({
        output: 'pkg',
        targets: ['host'],
    }),
);
