import FilesArchivePlugin = require('webpack-files-archive-plugin');
import { Configuration } from 'webpack';

const config: Configuration = {
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
        new FilesArchivePlugin({
            format: 'rar', // $ExpectError
        }),
        new FilesArchivePlugin({
            format: ['zip', 'tar'],
            output: 'build',
            ext: 'gz',
        }),
    ],
};
