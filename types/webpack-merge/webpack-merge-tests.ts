import _ = require('lodash');
import { Configuration, HotModuleReplacementPlugin, Plugin } from 'webpack';
import webpackMerge = require('webpack-merge');

const a: Configuration = {
    entry: 'test.js'
};
const b: Configuration = {
    devtool: 'source-map'
};

const c: Configuration = webpackMerge(a, b);
const d: Configuration = webpackMerge.smart(a, b);
const e: Configuration = webpackMerge.multiple(a, b);
const f: Configuration = webpackMerge(
    {
        customizeArray(x: any[], y: any[], key: string): any[] | undefined {
            if (key === 'extensions') {
                return _.uniq([...x, ...y]);
            }
            // Fall back to default merging
            return undefined;
        },
        customizeObject(x: {}, y: {}, key: string): {} | undefined {
            if (key === 'module') {
                // Custom merging
                return _.merge({}, x, y);
            }

            // Fall back to default merging
            return undefined;
        }
    }
)(a, b);
const g: Configuration = webpackMerge({
    customizeArray: webpackMerge.unique(
        'plugins',
        ['HotModuleReplacementPlugin'],
        (plugin: Plugin) => plugin.constructor && plugin.constructor.name
    )
})({
    plugins: [
        new HotModuleReplacementPlugin()
    ]
}, {
    plugins: [
        new HotModuleReplacementPlugin()
    ]
});
const h: Configuration = webpackMerge.strategy(
    {
        entry: 'prepend', // or 'replace', defaults to 'append'
        'module.loaders': 'prepend'
    }
)(a, b);
const i: Configuration = webpackMerge.smartStrategy(
    {
        entry: 'prepend', // or 'replace'
        'module.loaders': 'prepend'
    }
)(a, b);
