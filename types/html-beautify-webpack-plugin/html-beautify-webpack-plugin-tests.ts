import { Configuration } from 'webpack';
import HtmlWebpackPlugin = require('html-webpack-plugin');
import HtmlBeautifyPLugin = require('html-beautify-webpack-plugin');

const config: Configuration = {
    plugins: [
        new HtmlWebpackPlugin(),
        new HtmlBeautifyPLugin({
            config: {
                indent_size: 4,
                html: {
                    end_with_newline: true,
                    indent_size: 2,
                    indent_with_tabs: true,
                    indent_inner_html: true,
                    preserve_newlines: true,
                    unformatted: ['p', 'i', 'b', 'span'],
                },
            },
            replace: [' type="text/javascript"'],
        }),
    ],
};

new HtmlBeautifyPLugin();
new HtmlBeautifyPLugin({});
new HtmlBeautifyPLugin({
    config: {
        html: {
            end_with_newline: true,
            indent_size: 2,
            indent_with_tabs: true,
            indent_inner_html: true,
            preserve_newlines: true,
            unformatted: ['p', 'i', 'b', 'span'],
        },
    },
    replace: [' type="text/javascript"'],
});
