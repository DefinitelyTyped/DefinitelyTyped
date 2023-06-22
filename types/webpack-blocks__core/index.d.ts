// Type definitions for @webpack-blocks/core 2.0
// Project: https://github.com/andywer/webpack-blocks/tree/master/packages/core
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Configuration, Plugin, RuleSetRule } from 'webpack';

export type ConfigSetter<T extends Context = Context> = (
    context: T,
    util: Util
) => (config: Configuration) => Configuration;

export interface Block<T extends Context = Context> extends ConfigSetter<T> {
    pre?: ConfigSetter<T> | Array<ConfigSetter<T>> | undefined;
    post?: ConfigSetter<T> | Array<ConfigSetter<T>> | undefined;
}

export interface Context {
    match: {
        test: RegExp | RegExp[];
    };
}

export interface InitialContext {
    webpack: any;
    webpackVersion: string;
}

export interface MatchOptions {
    include?: string | undefined;
    exclude?: RegExp | undefined;
}

export interface Util {
    addLoader(loaderDefinition: RuleSetRule): () => Configuration;
    addPlugin(plugin: Plugin): () => Configuration;
    merge(configSnippet: Configuration): () => Configuration;
}

export namespace Core {
    function createConfig(configSetters: Block[]): Block;
    function createConfig(initialContext: InitialContext, configSetters: Block[]): Block;
    function group(configSetters: Block[]): Block;
    function env(envName: string, configSetters: Block[]): Block;
    function match(test: string | string[], configSetters: Block[]): Block;
    function match(test: string | string[], options: MatchOptions, configSetters: Block[]): Block;
    function when(condition: boolean, configSetters: Block[]): Block;
}

export function createConfig(configSetters: Block[]): Block;
export function createConfig(initialContext: InitialContext, configSetters: Block[]): Block;

export function group(configSetters: Block[]): Block;

export function env(envName: string, configSetters: Block[]): Block;

export function match(test: string | string[], configSetters: Block[]): Block;
export function match(test: string | string[], options: MatchOptions, configSetters: Block[]): Block;

export function when(condition: boolean, configSetters: Block[]): Block;
