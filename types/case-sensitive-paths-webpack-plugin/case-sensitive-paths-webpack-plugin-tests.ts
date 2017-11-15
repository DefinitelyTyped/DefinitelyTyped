import { Configuration } from 'webpack';
import * as CaseSensitivePathsWebpackPlugin from 'case-sensitive-paths-webpack-plugin';

const c: Configuration = {
    plugins: [
        new CaseSensitivePathsWebpackPlugin(),
        new CaseSensitivePathsWebpackPlugin({
            debug: true
        }),
    ],
};
