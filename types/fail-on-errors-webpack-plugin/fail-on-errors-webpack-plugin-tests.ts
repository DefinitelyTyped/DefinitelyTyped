import FailOnErrorsPlugin = require('fail-on-errors-webpack-plugin');
import { Plugin } from 'webpack';

// Test if constructors are assignable to `Webpack.Plugin`
const plugin1: Plugin = new FailOnErrorsPlugin();
const plugin2: Plugin = new FailOnErrorsPlugin({});
const plugin3: Plugin = new FailOnErrorsPlugin({
    failOnErrors: true,
    failOnWarnings: true,
});
