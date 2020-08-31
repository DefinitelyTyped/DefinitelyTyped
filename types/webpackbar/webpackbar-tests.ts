import path = require('path');

import WebpackBar = require('webpackbar');

module.exports = {
    context: path.resolve(__dirname),
    devtool: 'source-map',
    entry: './entry.js',
    output: {
        filename: './output.js',
        path: path.resolve(__dirname),
    },
    plugins: [new WebpackBar()],
};

let lastProgress: number;

const config = (name: string, color: string) => ({
    mode: 'production',
    context: __dirname,
    devtool: false,
    target: 'node',
    entry: './index.js',
    stats: false,
    output: {
        filename: './output.js',
        path: path.join(__dirname, '/dist'),
    },
    module: {
        rules: [{ test: /\.js$/, use: path.resolve(__dirname, 'test-loader.js') }],
    },
    plugins: [
        new WebpackBar({
            color,
            name,
            reporters: ['fancy'],
            reporter: {
                progress({ state }) {
                    if (lastProgress !== state.progress && state.progress % 5 === 0) {
                        process.stderr.write(state.progress + '%\n');
                        lastProgress = state.progress;
                    }
                },
            },
        }),
    ],
});

module.exports = [config('OrangeBar', 'orange'), config('GreenBar', 'green')];
