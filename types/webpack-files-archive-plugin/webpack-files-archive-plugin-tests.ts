import FilesArchivePlugin = require('webpack-files-archive-plugin');
import type { Configuration } from 'webpack';

const _: Configuration = {
    plugins: [
        // $ExpectError
        new FilesArchivePlugin(),
        new FilesArchivePlugin({
            format: ['zip', 'tar'],
        }),
        new FilesArchivePlugin({
            format: 'zip',
        }),
        new FilesArchivePlugin({
            format: 'tar',
        }),
        // $ExpectError
        new FilesArchivePlugin({
            format: 'rar',
        }),
        new FilesArchivePlugin({
            format: ['zip', 'tar'],
            output: 'build',
            ext: 'gz',
        }),
    ],
};
