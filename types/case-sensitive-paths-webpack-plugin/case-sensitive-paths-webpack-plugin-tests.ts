import { Compiler, Configuration } from 'webpack';
import CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin');

const options: CaseSensitivePathsWebpackPlugin.Options = {
    debug: true,
};
const compiler: Compiler = new Compiler();

const c: Configuration = {
    plugins: [
        new CaseSensitivePathsWebpackPlugin(),
        new CaseSensitivePathsWebpackPlugin({
            debug: true
        }),
        new CaseSensitivePathsWebpackPlugin().apply(compiler),
    ],
};
