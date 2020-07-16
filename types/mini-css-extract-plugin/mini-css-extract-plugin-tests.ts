import webpack = require('webpack');
import MiniCssExtractPlugin = require('mini-css-extract-plugin');

let configuration: webpack.Configuration;

configuration = {
    // The standard entry point and output config
    entry: {
        posts: './posts',
        post: './post',
        about: './about',
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[id].js',
    },
    module: {
        rules: [
            // Extract css files
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.css$/,
                use: {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '/',
                    },
                },
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'style-loader'],
            },
            // You could also use other loaders the same way. I. e. the autoprefixer-loader
        ],
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
};

configuration = {
    // ...
    plugins: [new MiniCssExtractPlugin()],
};

configuration = {
    // ...
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
            chunkFilename: 'style.css',
        }),
    ],
};

configuration = {
    // ...
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
            chunkFilename: 'style.css',
            ignoreOrder: true,
        }),
    ],
};

configuration = {
    // ...
    plugins: [
        new MiniCssExtractPlugin({
            esModule: true,
        }),
    ],
};

configuration = {
    // ...
    plugins: [
        new MiniCssExtractPlugin({
            moduleFilename: ({ name }) => `${name.replace('/js/', '/css/')}.css`,
        }),
    ],
};
