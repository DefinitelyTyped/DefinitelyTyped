import {
    override,
    overrideDevServer,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    addWebpackAlias,
    addBabelPresets,
    adjustWorkbox,
    watchAll,
    addBabelPlugins,
    addExternalBabelPlugins,
    babelExclude,
    babelInclude,
    fixBabelImports,
    removeInternalBabelPlugin,
    useBabelRc,
    addLessLoader,
    addPostcssPlugins,
    addWebpackModuleRule,
    setWebpackStats,
    setWebpackTarget,
    tap,
    adjustStyleLoaders,
} from 'customize-cra';
import * as path from 'path';

module.exports = override(
    addDecoratorsLegacy(),

    disableEsLint(),

    addBundleVisualizer(),

    addWebpackAlias({
        ['ag-grid-react$']: path.resolve(__dirname, 'src/shared/agGridWrapper.js'),
    }),

    adjustWorkbox(wb => ({ ...wb, skipWaiting: true, exclude: (wb.exclude || []).concat('index.html') })),
);

module.exports = {
    webpack: override(
        // usual webpack plugin
        disableEsLint(),
    ),
    devServer: overrideDevServer(
        // dev server plugin
        watchAll(),
    ),
};

module.exports = override(
    disableEsLint(),
    ...addExternalBabelPlugins('babel-plugin-transform-do-expressions', '@babel/plugin-proposal-object-rest-spread'),
    fixBabelImports('lodash', {
        libraryDirectory: '',
        camel2DashComponentName: false,
    }),
    fixBabelImports('react-feather', {
        libraryName: 'react-feather',
        libraryDirectory: 'dist/icons',
    }),
    ...addBabelPlugins('polished', 'emotion', 'babel-plugin-transform-do-expressions'),
    ...addBabelPresets(
        [
            '@babel/env',
            {
                targets: {
                    browsers: ['> 1%', 'last 2 versions'],
                },
                modules: 'commonjs',
            },
        ],
        '@babel/preset-flow',
        '@babel/preset-react',
    ),
    babelInclude([
        path.resolve('src'), // make sure you link your own source
        path.resolve('node_modules/native-base-shoutem-theme'),
        path.resolve('node_modules/react-navigation'),
        path.resolve('node_modules/react-native-easy-grid'),
    ]),
    babelExclude([path.resolve('src/excluded-folder')]),
    removeInternalBabelPlugin('plugin-name'),
    addWebpackModuleRule({ test: /\.txt$/, use: 'raw-loader' }),
    setWebpackTarget('electron-renderer'),
    setWebpackStats('errors-only'),
    addBundleVisualizer({}, true),
    useBabelRc(),
    addLessLoader({
        strictMath: true,
        noIeCompat: true,
        modifyVars: {
            '@primary-color': '#1DA57A', // for example, you use Ant Design to change theme color.
        },
        cssLoaderOptions: {}, // .less file used css-loader option, not all CSS file.
        cssModules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]', // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
        },
    }),
    addPostcssPlugins([]),
    adjustStyleLoaders(({ use }) => {
        if (!Array.isArray(use)) return;
        const [, css, postcss, resolve, processor] = use;

        if (typeof css !== 'object') return;

        console.log(css.options);
    }),

    tap({ message: 'Pre - Customizers' }),
    tap({ dest: 'customize-cra.log' }),
);
