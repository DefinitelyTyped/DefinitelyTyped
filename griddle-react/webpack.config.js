module.exports = {
    entry: ['./test/test.tsx'],
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.tsx?$/,
                loaders: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/
            }
        ]
    },
    devtool: "#source-map"
};