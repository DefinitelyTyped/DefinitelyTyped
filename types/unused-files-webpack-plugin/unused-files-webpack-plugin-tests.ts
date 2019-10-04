import * as webpack from 'webpack';
import { UnusedFilesWebpackPlugin } from 'unused-files-webpack-plugin';

const ignoredFiles = [''];
const config: webpack.Configuration = {
  plugins: [
    new UnusedFilesWebpackPlugin({
      failOnUnused: false,
    }),
    new UnusedFilesWebpackPlugin({
      failOnUnused: true,
      globOptions: {
        ignore: ignoredFiles,
      },
    }),
    new UnusedFilesWebpackPlugin({
      patterns: ['one', 'two'],
      failOnUnused: true,
    }),
    new UnusedFilesWebpackPlugin({
      failOnUnused: false,
      ignore: 'no',
    }),
    new UnusedFilesWebpackPlugin({
      failOnUnused: false,
      cwd: 'cwd',
    }),
  ],
};
