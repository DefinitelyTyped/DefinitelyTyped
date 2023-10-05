// Type definitions for webpack-blocks 2.0
// Project: https://github.com/andywer/webpack-blocks
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { css, file, url } from "@webpack-blocks/assets";
import babel = require("@webpack-blocks/babel");
import devServer = require("@webpack-blocks/dev-server");
import extractText = require("@webpack-blocks/extract-text");
import postcss = require("@webpack-blocks/postcss");
import sass = require("@webpack-blocks/sass");
import typescript = require("@webpack-blocks/typescript");
import uglify = require("@webpack-blocks/uglify");
import {
    addPlugins,
    Block,
    ConfigSetter,
    Context,
    createConfig,
    customConfig,
    defineConstants,
    entryPoint,
    env,
    group,
    InitialContext,
    match,
    MatchOptions,
    optimization,
    performance,
    resolve,
    setContext,
    setDevTool,
    setEnv,
    setMode,
    setOutput,
    sourceMaps,
    Util,
    when,
} from "@webpack-blocks/webpack";

export {
    addPlugins,
    babel,
    Block,
    ConfigSetter,
    Context,
    createConfig,
    css,
    customConfig,
    defineConstants,
    devServer,
    entryPoint,
    env,
    extractText,
    file,
    group,
    InitialContext,
    match,
    MatchOptions,
    optimization,
    performance,
    postcss,
    resolve,
    sass,
    setContext,
    setDevTool,
    setEnv,
    setMode,
    setOutput,
    sourceMaps,
    typescript,
    uglify,
    url,
    Util,
    when,
};
