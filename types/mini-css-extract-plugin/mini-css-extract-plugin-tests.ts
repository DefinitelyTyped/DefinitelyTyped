import webpack = require('webpack');
import MiniCssExtractPlugin = require('mini-css-extract-plugin');

let configuration: webpack.Configuration;

const loaderOptions: MiniCssExtractPlugin.LoaderOptions = {
    publicPath: '/',
    esModule: true,
    modules: {
        namedExport: true,
    }
};

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
                    options: loaderOptions,
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
    plugins: [new MiniCssExtractPlugin(), new MiniCssExtractPlugin({})],
};

configuration = {
    // ...
    plugins: [
        new MiniCssExtractPlugin({
            filename: ({ chunk }) => `${chunk.name.replace('/js/', '/css/')}.css`,
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
            filename: configuration.output!.filename,
        }),
    ],
};

configuration = {
    // `linkType`
    plugins: [
        new MiniCssExtractPlugin({
            linkType: 'text/css',
        }),
        new MiniCssExtractPlugin({
            linkType: false,
        }),
    ],
};

new MiniCssExtractPlugin().apply(new webpack.Compiler());
