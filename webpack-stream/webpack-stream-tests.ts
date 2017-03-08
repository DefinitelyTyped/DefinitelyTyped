import * as webpack from 'webpack';
import * as webpackStream from 'webpack-stream';

let output: NodeJS.ReadWriteStream;

output = webpackStream();
output = webpackStream({ entry: '' });
output = webpackStream({ entry: '' }, webpack);
output = webpackStream({ entry: '' }, webpack, (error: Error, stats: webpack.compiler.Stats) => { });
