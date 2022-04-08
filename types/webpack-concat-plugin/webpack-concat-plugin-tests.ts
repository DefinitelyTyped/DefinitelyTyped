import { Compiler } from 'webpack';
import webpack = require('webpack');
import ConcatPlugin = require('webpack-concat-plugin');

const webpackCompiler: Compiler = {} as any;
const webpackCompilation: webpack.compilation.Compilation = {} as any;

const plugin = new ConcatPlugin();
plugin.apply(webpackCompiler);
plugin.ensureTrailingSlash('some/path/'); // $ExpectType string
plugin.getFileName('aa', '[name].[hash].js'); // $ExpectType string
plugin.hashFile('aa'); // $ExpectType string
plugin.getRelativePathAsync('some/path'); // $ExpectType Promise<string>
plugin.resolveReadFiles(webpackCompiler); // $ExpectType void
plugin.resolveConcatAndUglify(webpackCompilation, []); // $ExpectType void

// options
new ConcatPlugin({
    uglify: false,
    sourceMap: false,
    name: 'result',
    outputPath: 'path/to/output/',
    fileName: '[name].[hash:8].js',
    filesToConcat: ['jquery', './src/lib/**', './dep/dep.js', ['./some/**', '!./some/excludes/**']],
    attributes: {
        async: true,
    },
});

// UglifyJS options
new ConcatPlugin({
    uglify: {
        toplevel: true,
        compress: {
            global_defs: {
                '@console.log': 'alert',
            },
            passes: 2,
        },
        output: {
            beautify: false,
            preamble: '/* uglified */',
        },
    },
    filesToConcat: ['jquery', './src/lib/**', './dep/dep.js', ['./some/**', '!./some/excludes/**']],
});

const config: webpack.Configuration = {
    entry: './index.js',
    plugins: [
        new ConcatPlugin({
            uglify: true,
            sourceMap: true,
            name: 'file',
            fileName: '[name].[hash:20].js',
            injectType: 'none',
            filesToConcat: ['../../fixtures/a.js', '../../fixtures/b.js'],
        }),
    ],
};
