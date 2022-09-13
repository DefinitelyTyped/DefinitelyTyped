import webpack = require('webpack');
import HtmlWebpackPlugin = require('html-webpack-plugin');
import InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
import InlineChunkHtmlPlugin  = require('react-dev-utils/InlineChunkHtmlPlugin');
import ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
import WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

// @ts-expect-error
new InterpolateHtmlPlugin(HtmlWebpackPlugin, { PUBLIC_URL: 0 });
const plugin1 = new InterpolateHtmlPlugin(HtmlWebpackPlugin, { PUBLIC_URL: '' });

// @ts-expect-error
new InlineChunkHtmlPlugin({}, [/runtime/]);
const plugin2 = new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime/]);

const plugin3 = new ModuleScopePlugin('src', ['package.json']);

const plugin4 = new WatchMissingNodeModulesPlugin('node_modules');

const configWithPlugins: webpack.Configuration = {
    plugins: [plugin1, plugin2, plugin3, plugin4]
};
