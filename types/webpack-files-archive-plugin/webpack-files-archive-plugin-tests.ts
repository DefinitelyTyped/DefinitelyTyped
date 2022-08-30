import FilesArchivePlugin = require('webpack-files-archive-plugin');
import { Configuration } from 'webpack';

const config: Configuration = {
    plugins: [
        // @ts-expect-error
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
            // @ts-expect-error
            format: 'rar',
        }),
        new FilesArchivePlugin({
            format: ['zip', 'tar'],
            output: 'build',
            ext: 'gz',
        }),
    ],
};
