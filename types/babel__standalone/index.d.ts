// Type definitions for @babel/standalone 7.1
// Project: https://github.com/babel/babel/tree/master/packages/babel-standalone
// Definitions by: Matheus Goncalves da Silva <https://github.com/PlayMa256>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import { TransformOptions, types, FileResultCallback } from '@babel/core';

export function transform(code: string, options: TransformOptions): string;

export function transformFromAst(ast: types.Node, code: string | undefined, opts: TransformOptions | undefined, callback?: FileResultCallback): void;

export function registerPlugin(name: string, plugin: Object | Function): void;

export function registerPlugins(newPlugins: {
    [key: string]: Object | Function
}): void;

export function registerPreset(name: string, preset: Object | Function): void;
export function registerPresets(newPresets: {
    [key: string]: Object | Function,
}): void

export const availablePlugins: Record<string, Object | Function>;
export const availablePresets: Record<string, Object | Function>;

export function transformScriptTags(scriptTags?: Array<any>): void;

export function disableScriptTags(): void;

export as namespace babel;
