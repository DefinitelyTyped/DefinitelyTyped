import { PluginItem as BabelPlugin, TransformOptions } from "babel__core";
import { OverrideFunc } from "./core";

export function addBabelPlugin(plugin: BabelPlugin): OverrideFunc;
export function addExternalBabelPlugin(plugin: BabelPlugin): OverrideFunc;
export function addBabelPreset(preset: BabelPlugin): OverrideFunc;
export function addDecoratorsLegacy(): OverrideFunc;
export function useBabelRc(): OverrideFunc;
export function babelInclude(options: TransformOptions["include"]): OverrideFunc;
export function babelExclude(options: TransformOptions["exclude"]): OverrideFunc;
export function addBabelPlugins(...plugins: BabelPlugin[]): OverrideFunc[];
export function addExternalBabelPlugins(...plugins: string[]): OverrideFunc[];
export function addBabelPresets(...plugins: BabelPlugin[]): OverrideFunc[];
export function fixBabelImports(libraryName: string, options: any): OverrideFunc;
export function removeInternalBabelPlugin(pluginName: string): OverrideFunc;
