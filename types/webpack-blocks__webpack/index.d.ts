// Type definitions for @webpack-blocks/webpack 2.0
// Project: https://github.com/andywer/webpack-blocks/tree/master/packages/webpack
// Definitions by: Vladimir Grenaderov <https://github.com/VladimirGrenaderov>,
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import {
    Configuration,
    Entry,
    Options,
    Output,
    Plugin,
    Resolve
} from 'webpack';

import { Context, Util, MatchOptions, ConfigSetter, InitialContext, Block, env, group, match, when } from '@webpack-blocks/core';
export { Context, Util, MatchOptions, ConfigSetter, InitialContext, Block, env, group, match, when } from '@webpack-blocks/core';

type PluginFunction = (compiler: any) => Plugin;

export interface ConstantOptions {
    [constantName: string]: any;
}

export interface OptimizationOptions {
    minimize?: boolean;
    minimizer?: Plugin[] | PluginFunction;
}

export function createConfig(configSetters: Block | Block[]): Configuration;
export function setMode(mode: any): Block;
export function addPlugins(plugins: Plugin[]): Block;
export function customConfig(wpConfig: any): Configuration;
export function defineConstants(constants: ConstantOptions): Block;
export function setEnv(constants: ConstantOptions): any;
export function entryPoint(entry: string | string[] | Entry): Block;
export function performance(performanceBudget: Options.Performance): Block;
export function optimization(optimizationOptions: OptimizationOptions): Block;
export function resolve(config: Resolve): Block;
export function setContext(contextPath: string): Block;
export function setDevTool(devtool: string): Block;
export function setOutput(output?: string | Output): Block;
export function sourceMaps(devtool?: Options.Devtool): Block;
