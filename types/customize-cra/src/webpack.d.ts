import { Configuration as WebpackConfig, Options, Plugin, RuleSetRule } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { GenerateSWOptions } from "workbox-webpack-plugin";
import { OverrideFunc } from "./core";

/**
 * Disables `eslint-loader`. This will not work with CRA 4.0,
 * since it uses `eslint-webpack-plugin`
 */
export function disableEsLint(): OverrideFunc;

/**
 * if behindFlag is set to true, the report will be created only if
 * the `--analyze` flag is added to the `yarn build` command
 */
export function addBundleVisualizer(options?: BundleAnalyzerPlugin.Options, behindFlag?: boolean): OverrideFunc;

export function addWebpackAlias(aliases: Record<string, string>): OverrideFunc;

export function adjustWorkbox(func: (swPluginOptions: GenerateSWOptions) => GenerateSWOptions): OverrideFunc;

export function useEslintRc(configFile?: string): OverrideFunc;

export function enableEslintTypescript(): OverrideFunc;

// TODO: type
export function addLessLoader(loaderOptions?: any, customCssModules?: any): OverrideFunc;

/**
 * to be used to disable chunk according to:
 * https://github.com/facebook/create-react-app/issues/5306#issuecomment-433425838
 */
export function disableChunk(): OverrideFunc;

// TODO: type
export function addPostcssPlugins(x: any[]): OverrideFunc;

/**
 * This will remove the CRA plugin that prevents to import modules from
 * outside the `src` directory, useful if you use a different directory
 */
export function removeModuleScopePlugin(): OverrideFunc;

/**
 * to be used to ignore replace packages with global variable
 * Useful when trying to offload libs to CDN
 */
export function addWebpackExternals(options: WebpackConfig["externals"]): OverrideFunc;

/**
 * Add the provided module to the webpack module rules array.
 *
 * @param rule The rule to be added
 * @see https://webpack.js.org/configuration/module/#modulerules
 */
export function addWebpackModuleRule(rule: RuleSetRule): OverrideFunc;

export function addWebpackResolve(resolve: WebpackConfig["resolve"]): OverrideFunc;

export function addWebpackPlugin(plugin: Plugin): OverrideFunc;

// TODO: type
export function addTslintLoader(x: any): OverrideFunc;

/**
 * This works by mutating the callback argument! Returning a value has no effect.
 */
export function adjustStyleLoaders(callback: (loader: Required<RuleSetRule>) => void): OverrideFunc;

/**
 * Override the webpack target.
 *
 * @param target What to set the webpack target as (can be string or function).
 *
 * @see https://webpack.js.org/configuration/target/
 */
export function setWebpackTarget(target: WebpackConfig["target"]): OverrideFunc;

/**
 * override the webpack publicPath
 *
 * @param path What to set the webpack publicPath as.
 * @see https://webpack.js.org/configuration/output/#outputpublicpath
 */
export function setWebpackPublicPath(path: string): OverrideFunc;

/**
 * override the webpack optimization.splitChunks
 *
 * @param splitChunks of optimization.splitChunks
 * @see https://webpack.js.org/plugins/split-chunks-plugin/
 */
export function setWebpackOptimizationSplitChunks(splitChunks: Options.Optimization["splitChunks"]): OverrideFunc;

/**
 * Sets the `stats` object in Webpack config
 * This may not work in development mode
 *
 * @param stats Stats configuration in Webpack
 * @see https://webpack.js.org/configuration/stats/
 */
export function setWebpackStats(stats: WebpackConfig["stats"]): OverrideFunc;

/**
 * to be used inside `overrideDevServer`, makes CRA watch all the folders
 * including `node_modules`, useful when you are working with linked packages
 * usage: `yarn start --watch-all`
 */
export function watchAll(): OverrideFunc;
