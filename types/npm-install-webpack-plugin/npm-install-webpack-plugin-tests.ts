/// <reference types="node" />

import NpmInstallPlugin = require('npm-install-webpack-plugin');
import { Configuration } from 'webpack';

const _: Configuration = {
    // tests
    plugins: [
        new NpmInstallPlugin({
            dev: false,
            peerDependencies: true,
            quiet: false,
            npm: 'npm',
        }),
        new NpmInstallPlugin({
            dev: (module, path) => {
                return (
                    ['babel-preset-react-hmre', 'webpack-dev-middleware', 'webpack-hot-middleware'].indexOf(module) !==
                    -1
                );
            },
        }),
    ],
};
