import { Configuration } from 'webpack';
import CopyPlugin = require('copy-webpack-plugin');
import path = require('path');

const _: Configuration = {
    plugins: [
        // basic
        new CopyPlugin({
            patterns: [
                { from: 'source', to: 'dest' },
                { from: 'other', to: 'public' },
            ],
        }),
        // basic options
        new CopyPlugin({
            patterns: [
                { from: 'source', to: 'dest' },
                { from: 'other', to: 'public' },
            ],
            options: {
                concurrency: 100,
            },
        }),
        // sample
        new CopyPlugin({
            patterns: [
                'relative/path/to/file.ext',
                'relative/path/to/dir',
                path.resolve(__dirname, 'src', 'file.ext'),
                path.resolve(__dirname, 'src', 'dir'),
                '**/*',
                {
                    from: '**/*',
                },
                path.posix.join(path.resolve(__dirname, 'src').replace(/\\/g, '/'), '*.txt'),
            ],
        }),
        // from
        new CopyPlugin({
            patterns: [
                'relative/path/to/file.ext',
                'relative/path/to/dir',
                path.resolve(__dirname, 'src', 'file.ext'),
                path.resolve(__dirname, 'src', 'dir'),
                '**/*',
                {
                    from: '**/*',
                },
                // If absolute path is a `glob` we replace backslashes with forward slashes, because only forward slashes can be used in the `glob`
                path.posix.join(path.resolve(__dirname, 'src').replace(/\\/g, '/'), '*.txt'),
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'file.txt'),
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    // If absolute path is a `glob` we replace backslashes with forward slashes, because only forward slashes can be used in the `glob`
                    from: path.posix.join(path.resolve(__dirname, 'fixtures').replace(/\\/g, '/'), '*.txt'),
                },
            ],
        }),
        // to
        new CopyPlugin({
            patterns: [
                {
                    from: '**/*',
                    to: 'relative/path/to/dest/',
                },
                {
                    from: '**/*',
                    to: '/absolute/path/to/dest/',
                },
                {
                    from: '**/*',
                    to: '[path][name].[contenthash].[ext]',
                },
            ],
        }),
        // context
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/*.txt',
                    to: 'dest/',
                    context: 'app/',
                },
            ],
        }),
        // globOptions
        new CopyPlugin({
            patterns: [
                {
                    from: 'public/**/*',
                    globOptions: {
                        dot: true,
                        gitignore: true,
                        ignore: ['**/file.*', '**/ignored-directory/**'],
                    },
                },
            ],
        }),
        // toType
        new CopyPlugin({
            patterns: [
                {
                    from: 'path/to/file.txt',
                    to: 'directory/with/extension.ext',
                    toType: 'dir',
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'path/to/file.txt',
                    to: 'file/without/extension',
                    toType: 'file',
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/',
                    to: 'dest/[name].[hash].[ext]',
                    toType: 'template',
                },
            ],
        }),
        // force
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/**/*',
                    to: 'dest/',
                    force: true,
                },
            ],
        }),
        // flatten
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/**/*',
                    to: 'dest/',
                    flatten: true,
                },
            ],
        }),
        // transform
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/*.png',
                    to: 'dest/',
                    transform(content, absoluteFrom) {
                        return Promise.resolve('optimized content');
                    },
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/*.png',
                    to: 'dest/',
                    transform(content, path) {
                        return Promise.resolve('optimized content');
                    },
                },
            ],
        }),
        // cacheTransform
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/*.png',
                    to: 'dest/',
                    transform(content, path) {
                        return Promise.resolve('optimized content');
                    },
                    cacheTransform: true,
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/*.png',
                    to: 'dest/',
                    transform(content, path) {
                        return Promise.resolve('optimized content');
                    },
                    cacheTransform: path.resolve(__dirname, 'cache-directory'),
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/*.png',
                    to: 'dest/',
                    transform(content, path) {
                        return Promise.resolve('optimized content');
                    },
                    cacheTransform: {
                        directory: path.resolve(__dirname, 'cache-directory'),
                        keys: {
                            key: 'value',
                        },
                    },
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/*.png',
                    to: 'dest/',
                    transform(content, path) {
                        return Promise.resolve('optimized content');
                    },
                    cacheTransform: {
                        directory: path.resolve(__dirname, 'cache-directory'),
                        keys: (defaultCacheKeys: string[], absoluteFrom: string) => {
                            const keys: string[] = [];
                            return {
                                ...defaultCacheKeys,
                                keys,
                            };
                        },
                    },
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/*.png',
                    to: 'dest/',
                    transform(content, path) {
                        return Promise.resolve('optimized content');
                    },
                    cacheTransform: {
                        directory: path.resolve(__dirname, 'cache-directory'),
                        keys: async (defaultCacheKeys: string[], absoluteFrom: string) => {
                            const keys: string[] = await Promise.resolve<string[]>([]);
                            return {
                                ...defaultCacheKeys,
                                keys,
                            };
                        },
                    },
                },
            ],
        }),
        // transformPath
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/*.png',
                    to: 'dest/',
                    transformPath(targetPath, absolutePath) {
                        return 'newPath';
                    },
                },
            ],
        }),
        // noErrorOnMissing
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'missing-file.txt'),
                    noErrorOnMissing: true,
                },
            ],
        }),
        // concurrency
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/*.png',
                    to: 'dest/',
                },
            ],
            options: { concurrency: 50 },
        }),
    ],
};
