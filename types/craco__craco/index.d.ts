// Type definitions for @craco/craco 6.4
// Project: https://github.com/gsoft-inc/craco
// Definitions by: Chuck Fan <https://github.com/fanck0605>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.2

import type { Config as JestConfig } from '@jest/types';
import type { Options as AutoprefixerOptions } from 'autoprefixer';
import type { TransformOptions } from 'babel-core';
import type { Linter } from 'eslint';
import type { Configuration as WebpackConfig, Plugin as WebpackPlugin, RuleSetRule, RuleSetUseItem } from 'webpack';
import type { Configuration as DevServerConfig, ProxyConfigArray } from 'webpack-dev-server';

export type Configure<Config, Context> = Config | ((config: Config, context: Context) => Config);

export interface StyleOptions {
    modules?: {
        localIdentName?: string;
    };
    css?: {
        // Any css-loader configuration options: https://github.com/webpack-contrib/css-loader#options.
        loaderOptions?: Configure<any, CracoContext>;
    };
    sass?: {
        // Any sass-loader configuration options: https://github.com/webpack-contrib/sass-loader#options.
        loaderOptions?: Configure<any, CracoContext>;
    };
    postcss?: {
        mode?: typeof POSTCSS_MODES[keyof typeof POSTCSS_MODES];
        // Additional plugins given in an array are appended to existing config, or you may use the function variant.
        plugins?: any[] | ((plugins: any[]) => any[]);
        env?: {
            // Any autoprefixer options: https://github.com/postcss/autoprefixer#options
            autoprefixer?: AutoprefixerOptions;
            // Any valid stages: https://github.com/csstools/postcss-preset-env#stage.
            stage?: 0 | 1 | 2 | 3 | 4 | false;
            // Any CSS features: https://github.com/csstools/postcss-preset-env#features.
            features?: { [featureId: string]: any };
        };
        // Any postcss-loader configuration options: https://github.com/webpack-contrib/postcss-loader#options.
        loaderOptions?: Configure<any, CracoContext>;
    };
}

export interface EsLintOptions {
    enable?: boolean;
    mode?: typeof ESLINT_MODES[keyof typeof ESLINT_MODES];
    // Any eslint configuration options: https://eslint.org/docs/user-guide/configuring.
    configure?: Configure<Linter.Config, CracoContext>;
    // Any eslint plugin configuration options: https://github.com/webpack-contrib/eslint-webpack-plugin#options.
    pluginOptions?: Configure<any, CracoContext>;
}

export interface BabelOptions {
    presets?: any[];
    plugins?: any[];
    // Any babel-loader configuration options: https://babeljs.io/docs/en/options.
    loaderOptions?: Configure<TransformOptions, CracoContext>;
}

export interface TypeScriptOptions {
    enableTypeChecking?: boolean;
}

export interface WebpackOptions {
    alias?: { [alias: string]: string };
    plugins?: {
        // Specify if plugin should be appended or prepended.
        add?: Array<WebpackPlugin | [WebpackPlugin, 'append' | 'prepend']>;
        // An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin")
        remove?: string[];
    };
    // Any webpack configuration options: https://webpack.js.org/configuration.
    configure?: Configure<WebpackConfig, WebpackContext>;
}

export interface JestOptions {
    babel?: {
        addPresets?: boolean;
        addPlugins?: boolean;
    };
    // Any Jest configuration options: https://jestjs.io/docs/en/configuration.
    configure?: Configure<JestConfig.InitialOptions, JestContext>;
}

// Any devServer configuration options: https://webpack.js.org/configuration/dev-server/#devserver.
export type DevServerOptions = Configure<DevServerConfig, CracoContext>;

export interface PluginItem<Options> {
    plugin: Plugin<Options>;
    options?: Options;
}

export interface CracoConfig {
    reactScriptsVersion?: string;
    style?: StyleOptions;
    eslint?: EsLintOptions;
    babel?: BabelOptions;
    typescript?: TypeScriptOptions;
    webpack?: WebpackOptions;
    jest?: JestOptions;
    devServer?: DevServerOptions;
    plugins?: Array<PluginItem<any>>; // Is there any way to add type checking for plugin options?
}

export interface CracoOptions {
    verbose?: boolean;
    config?: string;
}

export interface CraPaths {
    dotenv: string;
    appPath: string;
    appBuild: string;
    appPublic: string;
    appHtml: string;
    appIndexJs: string;
    appPackageJson: string;
    appSrc: string;
    appTsConfig: string;
    appJsConfig: string;
    yarnLockFile: string;
    testsSetup: string;
    proxySetup: string;
    appNodeModules: string;
    swSrc: string;
    publicUrlOrPath: string;
    ownPath: string;
    ownNodeModules: string;
    appTypeDeclarations: string;
    ownTypeDeclarations: string;
    moduleFileExtensions: string[];
}

export interface CracoContext {
    env: string;
    paths: CraPaths;
}

export type WebpackContext = CracoContext;

export interface DevServerContext extends CracoContext {
    proxy: ProxyConfigArray | undefined;
    allowedHost: string;
}

export interface JestContext extends CracoContext {
    resolve: (id: string) => string;
    rootDir: string;
}

export type OverrideCracoConfig<PluginOptions> = (props: {
    cracoConfig: CracoConfig;
    pluginOptions: PluginOptions | undefined;
    context: CracoContext;
}) => CracoConfig;

export type OverrideWebpackConfig<PluginOptions> = (props: {
    webpackConfig: WebpackConfig;
    cracoConfig: CracoConfig;
    pluginOptions: PluginOptions | undefined;
    context: WebpackContext;
}) => WebpackConfig;

export type OverrideDevServerConfig<PluginOptions> = (props: {
    devServerConfig: DevServerConfig;
    cracoConfig: CracoConfig;
    pluginOptions: PluginOptions | undefined;
    context: DevServerContext;
}) => DevServerConfig;

export type OverrideJestConfig<PluginOptions> = (props: {
    jestConfig: JestConfig.InitialOptions;
    cracoConfig: CracoConfig;
    pluginOptions: PluginOptions | undefined;
    context: JestContext;
}) => JestConfig.InitialOptions;

export interface Plugin<Options> {
    readonly overrideCracoConfig?: OverrideCracoConfig<Options>;
    readonly overrideWebpackConfig?: OverrideWebpackConfig<Options>;
    readonly overrideDevServerConfig?: OverrideDevServerConfig<Options>;
    readonly overrideJestConfig?: OverrideJestConfig<Options>;
}

export type LoaderMatcher = (rule: RuleSetRule | RuleSetUseItem) => boolean;

export function loaderByName(loaderName: string): LoaderMatcher;

export function getLoader(
    webpackConfig: WebpackConfig,
    matcher: LoaderMatcher,
): {
    isFound: boolean;
    match: RuleSetRule | RuleSetUseItem;
};

export function getLoaders(
    webpackConfig: WebpackConfig,
    matcher: LoaderMatcher,
): {
    hasFoundAny: boolean;
    matches: Array<RuleSetRule | RuleSetUseItem>;
};

export function removeLoaders(
    webpackConfig: WebpackConfig,
    matcher: LoaderMatcher,
): {
    hasRemovedAny: boolean;
    removedCount: number;
};

export function addBeforeLoader(
    webpackConfig: WebpackConfig,
    matcher: LoaderMatcher,
    newLoader: RuleSetRule | RuleSetUseItem,
): { isAdded: boolean };

export function addAfterLoader(
    webpackConfig: WebpackConfig,
    matcher: LoaderMatcher,
    newLoader: RuleSetRule | RuleSetUseItem,
): { isAdded: boolean };

export function addBeforeLoaders(
    webpackConfig: WebpackConfig,
    matcher: LoaderMatcher,
    newLoader: RuleSetRule | RuleSetUseItem,
): {
    isAdded: boolean;
    addedCount: number;
};

export function addAfterLoaders(
    webpackConfig: WebpackConfig,
    matcher: LoaderMatcher,
    newLoader: RuleSetRule | RuleSetUseItem,
): {
    isAdded: boolean;
    addedCount: number;
};

export type PluginMatcher = (plugin: WebpackPlugin) => boolean;

export function pluginByName(pluginName: string): PluginMatcher;

export function getPlugin(
    webpackConfig: WebpackConfig,
    matcher: PluginMatcher,
): {
    isFound: boolean;
    match: WebpackPlugin;
};

export function addPlugins(webpackConfig: WebpackConfig, webpackPlugins: WebpackPlugin[]): void;

export function removePlugins(
    webpackConfig: WebpackConfig,
    matcher: PluginMatcher,
): {
    hasRemovedAny: boolean;
    removedCount: number;
};

/**
 * @see https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-helper
 */
export function when<T>(condition: boolean, fct: () => T, unmetValue: T): T;

/**
 * @see https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-helper
 */
export function when<T>(condition: boolean, fct: () => T): T | undefined;

/**
 * @see https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-helper
 */
export function whenDev<T>(fct: () => T, unmetValue: T): T;

/**
 * @see https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-helper
 */
export function whenDev<T>(fct: () => T): T | undefined;

/**
 * @see https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-helper
 */
export function whenProd<T>(fct: () => T, unmetValue: T): T;

/**
 * @see https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-helper
 */
export function whenProd<T>(fct: () => T): T | undefined;

/**
 * @see https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-helper
 */
export function whenTest<T>(fct: () => T, unmetValue: T): T;

/**
 * @see https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-helper
 */
export function whenTest<T>(fct: () => T): T | undefined;

export function throwUnexpectedConfigError(props: {
    message: string;
    packageName?: string;
    githubRepo?: string;
    githubIssueQuery?: string;
}): never;

export function gitHubIssueUrl(repo: string, query?: string): string;

export const ESLINT_MODES: { extends: 'extends'; file: 'file' };

export const POSTCSS_MODES: { extends: 'extends'; file: 'file' };

export function createJestConfig(
    cracoConfig: CracoConfig,
    context?: Partial<CracoContext>,
    options?: CracoOptions,
): JestConfig.InitialOptions;

export function createWebpackDevConfig(
    cracoConfig: CracoConfig,
    context?: Partial<CracoContext>,
    options?: CracoOptions,
): WebpackConfig;

export function createWebpackProdConfig(
    cracoConfig: CracoConfig,
    context?: Partial<CracoContext>,
    options?: CracoOptions,
): WebpackConfig;

export function createDevServerConfigProviderProxy(
    cracoConfig: CracoConfig,
    context?: Partial<CracoContext>,
    options?: CracoOptions,
): (proxy: ProxyConfigArray | undefined, allowedHost: string) => DevServerConfig;
