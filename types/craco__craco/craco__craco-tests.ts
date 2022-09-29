import {
    addAfterLoader,
    addAfterLoaders,
    addBeforeLoader,
    addBeforeLoaders,
    addPlugins,
    CracoConfig,
    createDevServerConfigProviderProxy,
    createJestConfig,
    createWebpackDevConfig,
    createWebpackProdConfig,
    ESLINT_MODES,
    getLoader,
    getLoaders,
    getPlugin,
    gitHubIssueUrl,
    loaderByName,
    pluginByName,
    POSTCSS_MODES,
    removeLoaders,
    removePlugins,
    throwUnexpectedConfigError,
    when,
    whenDev,
    whenProd,
    whenTest,
} from '@craco/craco';
import { Plugin as WebpackPlugin } from 'webpack';

const config: CracoConfig = {
    reactScriptsVersion: 'react-scripts',
    style: {
        modules: {
            localIdentName: '',
        },
        css: {
            loaderOptions: {},
        },
        sass: {
            loaderOptions: {},
        },
        postcss: {
            mode: POSTCSS_MODES.extends,
            plugins: [require('plugin-to-append')],
            env: {
                autoprefixer: {},
                stage: 4,
                features: {},
            },
            loaderOptions: {},
        },
    },
    eslint: {
        enable: true,
        mode: ESLINT_MODES.extends,
        configure: {},
        pluginOptions: {},
    },
    babel: {
        presets: [],
        plugins: [],
        loaderOptions: {},
    },
    typescript: {
        enableTypeChecking: true,
    },
    webpack: {
        alias: {},
        plugins: {
            add: [],
            remove: [],
        },
        configure: {},
    },
    jest: {
        babel: {
            addPresets: true,
            addPlugins: true,
        },
        configure: {},
    },
    devServer: {},
    plugins: [
        {
            plugin: {
                overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
                    return cracoConfig;
                },
                overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
                    return webpackConfig;
                },
                overrideDevServerConfig: ({
                    devServerConfig,
                    cracoConfig,
                    pluginOptions,
                    context: { env, paths, proxy, allowedHost },
                }) => {
                    return devServerConfig;
                },
                overrideJestConfig: ({
                    jestConfig,
                    cracoConfig,
                    pluginOptions,
                    context: { env, paths, resolve, rootDir },
                }) => {
                    return jestConfig;
                },
            },
            options: {},
        },
    ],
};

const emptyConfig: CracoConfig = {};

// $ExpectType LoaderMatcher
const matchesLessLoader = loaderByName('less-loader');

// $ExpectType boolean
const isMatchLoader = matchesLessLoader({ loader: 'less-loader' });

// $ExpectType { isFound: boolean; match: RuleSetRule | RuleSetUseItem; }
const matchedLoader = getLoader({}, matchesLessLoader);

// $ExpectType { hasFoundAny: boolean; matches: (RuleSetRule | RuleSetUseItem)[]; }
const matchedLoaders = getLoaders({}, matchesLessLoader);

// $ExpectType { hasRemovedAny: boolean; removedCount: number; }
const isRemoveLoaders = removeLoaders({}, matchesLessLoader);

// $ExpectType { isAdded: boolean; }
const isAddBeforeLoader = addBeforeLoader({}, matchesLessLoader, { loader: 'postcss-loader' });

// $ExpectType { isAdded: boolean; addedCount: number; }
const isAddBeforeLoaders = addBeforeLoaders({}, matchesLessLoader, { loader: 'postcss-loader' });

// $ExpectType { isAdded: boolean; }
const isAddAfterLoader = addAfterLoader({}, matchesLessLoader, { loader: 'postcss-loader' });

// $ExpectType { isAdded: boolean; addedCount: number; }
const isAddAfterLoaders = addAfterLoaders({}, matchesLessLoader, { loader: 'postcss-loader' });

class DemoPlugin extends WebpackPlugin {
    constructor() {
        super();
    }
}

// $ExpectType PluginMatcher
const matchesDemoPlugin = pluginByName('DemoPlugin');

// $ExpectType boolean
const isMatchPlugin = matchesDemoPlugin(new DemoPlugin());

// $ExpectType { isFound: boolean; match: Plugin; }
const matchedPlugin = getPlugin({}, matchesDemoPlugin);

// $ExpectType void
addPlugins({}, [new DemoPlugin()]);

// $ExpectType { hasRemovedAny: boolean; removedCount: number; }
const isRemovePlugins = removePlugins({}, matchesDemoPlugin);

// $ExpectType string
const valueWhenTrue = when(true, () => 'hello', 'unmet');

// $ExpectType string | undefined
const noUnmetValueWhenTrue = when(true, () => 'hello');

// $ExpectType string
const valueWhenDev = whenDev(() => 'hello', 'unmet');

// $ExpectType string | undefined
const noUnmetValueWhenDev = whenDev(() => 'hello');

// $ExpectType string
const valueWhenProd = whenProd(() => 'hello', 'unmet');

// $ExpectType string | undefined
const noUnmetValueWhenProd = whenProd(() => 'hello');

// $ExpectType string
const valueWhenTest = whenTest(() => 'hello', 'unmet');

// $ExpectType string | undefined
const noUnmetValueWhenTest = whenTest(() => 'hello');

// $ExpectType never
throwUnexpectedConfigError({
    message: 'unexpected config',
});

// $ExpectType string
const issueUrl = gitHubIssueUrl('DefinitelyType/DefinitelyType');

// $ExpectType "extends"
ESLINT_MODES.extends;
// $ExpectType "file"
ESLINT_MODES.file;

// $ExpectType "extends"
POSTCSS_MODES.extends;
// $ExpectType "file"
POSTCSS_MODES.file;

const jestConfig = createJestConfig({}, {}, { verbose: true });

// $ExpectType Configuration
const webpackDevConfig = createWebpackDevConfig({}, {}, { verbose: true });

// $ExpectType Configuration
const webpackProdConfig = createWebpackProdConfig({}, {}, { verbose: true });

// $ExpectType (proxy: ProxyConfigArray | undefined, allowedHost: string) => Configuration
const devServerConfigProviderProxy = createDevServerConfigProviderProxy({}, {}, { verbose: true });
