// Type definitions for webpack-blocks 2.0
// Project: https://github.com/andywer/webpack-blocks
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { css, url, file } from '@webpack-blocks/assets';
import babel = require('@webpack-blocks/babel');
import devServer = require('@webpack-blocks/dev-server');
import extractText = require('@webpack-blocks/extract-text');
import postcss = require('@webpack-blocks/postcss');
import sass = require('@webpack-blocks/sass');
import typescript = require('@webpack-blocks/typescript');
import uglify = require('@webpack-blocks/uglify');
import {
    Block,
    group,
    createConfig,
    setMode,
    addPlugins,
    customConfig,
    defineConstants,
    setEnv,
    entryPoint,
    performance,
    optimization,
    resolve,
    setContext,
    setDevTool,
    setOutput,
    sourceMaps,
    InitialContext,
    Context,
    Util,
    MatchOptions,
    ConfigSetter,
    env,
    match,
    when,
} from '@webpack-blocks/webpack';

export {
    Block,
    group,
    createConfig,
    setMode,
    addPlugins,
    customConfig,
    defineConstants,
    setEnv,
    entryPoint,
    performance,
    optimization,
    resolve,
    setContext,
    setDevTool,
    setOutput,
    sourceMaps,
    InitialContext,
    Context,
    Util,
    MatchOptions,
    ConfigSetter,
    env,
    match,
    when,
    css,
    url,
    file,
    babel,
    devServer,
    extractText,
    postcss,
    sass,
    typescript,
    uglify,
};
