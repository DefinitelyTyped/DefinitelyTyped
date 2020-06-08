import MiniHtmlWebpackPlugin = require('mini-html-webpack-plugin');
import webpack = require('webpack');
import { minify } from 'html-minifier';
const { generateAttributes, generateCSSReferences, generateJSReferences } = MiniHtmlWebpackPlugin;

const config: webpack.Configuration = {
    plugins: [
        new MiniHtmlWebpackPlugin({
            filename: 'demo.html',
            publicPath: 'demo/',
            context: {
                title: 'Webpack demo',
                htmlAttributes: {
                    lang: 'en',
                },
                head: '',
                body: '',
                cssAttributes: {
                    rel: 'preload',
                    as: 'style',
                },
                jsAttributes: {
                    defer: true,
                },
            },
            chunks: ['app'],
        }),
    ],
};

const configMultiplePages: webpack.Configuration = {
    entry: {
        app: './app.js',
        another: './another.js',
    },
    plugins: [
        new MiniHtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['app'],
        }),
        new MiniHtmlWebpackPlugin({
            filename: 'another.html',
            chunks: ['another'],
        }),
    ],
};

const configMinify = {
    plugins: [
        new MiniHtmlWebpackPlugin({
            context: {
                title: 'Minification demo',
            },
            template: context => minify(MiniHtmlWebpackPlugin.defaultTemplate(context)),
        }),
    ],
};

const configCustomTemplates = {
    plugins: [
        new MiniHtmlWebpackPlugin({
            filename: 'demo.html',
            publicPath: 'demo/',
            context: {
                title: 'Webpack demo',
                htmlAttributes: {
                    lang: 'en',
                },
                cssAttributes: {
                    rel: 'preload',
                    as: 'style',
                },
                jsAttributes: {
                    defer: true,
                },
            },
            template: ({ css, js, publicPath, title, htmlAttributes, cssAttributes, jsAttributes }) => {
                const htmlAttrs = generateAttributes(htmlAttributes);
                const cssTags = generateCSSReferences({
                    files: css,
                    attributes: cssAttributes,
                    publicPath,
                });

                const jsTags = generateJSReferences({
                    files: js,
                    attributes: jsAttributes,
                    publicPath,
                });

                return `<!DOCTYPE html>
          <html${htmlAttrs}>
            <head>
              <meta charset="UTF-8">
              <title>${title}</title>
              ${cssTags}
            </head>
            <body>
              ${jsTags}
            </body>
          </html>`;
            },
        }),
    ],
};
