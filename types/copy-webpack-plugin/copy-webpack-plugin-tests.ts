import { Configuration } from 'webpack'
import CopyWebpackPlugin = require('copy-webpack-plugin');

const c: Configuration = {
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                // {output}/file.txt
                { from: 'from/file.txt' },

                // {output}/to/file.txt
                { from: 'from/file.txt', to: 'to/file.txt' },

                // {output}/to/directory/file.txt
                { from: 'from/file.txt', to: 'to/directory' },

                // Copy directory contents to {output}/
                { from: 'from/directory' },

                // Copy directory contents to {output}/to/directory/
                { from: 'from/directory', to: 'to/directory' },

                // Copy glob results to /absolute/path/
                { from: 'from/directory/**/*', to: '/absolute/path' },

                // Copy glob results (with dot files) to /absolute/path/
                {
                    from: 'from/directory/**/*',
                    globOptions: {
                        dot: true,
                    },
                    to: '/absolute/path'
                },

                // Doesn't copy any files with a txt extension
                {
                    from: 'from/directory/**/*',
                    globOptions: {
                        ignore: ['*.txt'],
                    },
                    to: '/absolute/path'
                },

                // All 'from' paths will be intepreted from this context
                {
                    from: 'from/directory/**/*',
                    context: 'app/',
                    to: '/absolute/path'
                },

                // Copy glob results, relative to context
                {
                    context: 'from/directory',
                    from: '**/*',
                    to: '/absolute/path'
                },

                // {output}/file/without/extension
                {
                    from: 'path/to/file.txt',
                    to: 'file/without/extension',
                    toType: 'file'
                },

                // {output}/directory/with/extension.ext/file.txt
                {
                    from: 'path/to/file.txt',
                    to: 'directory/with/extension.ext',
                    toType: 'dir'
                },

                // transform and cache (cache is always used with transform option).
                {
                    from: 'src/*.png',
                    to: 'dest/',
                    transform: (content, path) => content,
                    cacheTransform: true
                },

                // cache with a directory
                {
                    from: 'src/*.png',
                    to: 'dest/',
                    transform: (content, path) => content,
                    cacheTransform: {
                        directory: '.cache/',
                        keys: {
                            key: 'something',
                        },
                    },
                },

                // Copy glob results (without dot files) to {output}/to/directory/
                {
                    from: '**/*.png',
                    to: 'to/directory'
                },

                // dynamically modify path
                {
                    from: '*/*',
                    transformPath: (targetPath, absolutePath) => 'newPath' + targetPath,
                },
            ],
            options: {
                // Limit filesystem requests
                concurrency: 25,
            }
        })
    ]
}
