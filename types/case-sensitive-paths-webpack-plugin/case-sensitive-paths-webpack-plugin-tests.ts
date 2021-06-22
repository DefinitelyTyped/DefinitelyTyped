import { Compiler, Configuration, Plugin } from 'webpack';
import CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin');

const options: CaseSensitivePathsWebpackPlugin.Options = {
    debug: true,
};
const compiler: Compiler = new Compiler();
const plugin: Plugin = new CaseSensitivePathsWebpackPlugin();

plugin.apply(compiler);

const c: Configuration = {
    plugins: [
        new CaseSensitivePathsWebpackPlugin(),
        new CaseSensitivePathsWebpackPlugin({
            debug: true,
        }),
        plugin,
    ],
};
