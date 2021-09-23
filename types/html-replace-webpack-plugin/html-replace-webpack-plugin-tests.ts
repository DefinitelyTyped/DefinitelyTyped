import { Configuration } from 'webpack';

import HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');

new HtmlReplaceWebpackPlugin({
    pattern: 'foo',
    replacement: '`foo` has been replaced with `bar`',
});

const resource: { [type: string]: any } = {
    js: { bootstrap: '//cdn/bootstrap/bootstrap.min.js' },
    css: { bootstrap: '//cdn/bootstrap/bootstrap.min.css' },
    img: { 'the-girl': '//cdn/img/the-girl.jpg' },
};

const tpl: { [type: string]: string } = {
    img: '<img src="%s">',
    css: '<link rel="stylesheet" type="text/css" href="%s">',
    js: '<script type="text/javascript" src="%s"></script>',
};

const webpackConfiguration: Configuration = {
    plugins: [
        new HtmlReplaceWebpackPlugin([
            {
                pattern: 'foo',
                replacement: '`foo` has been replaced with `bar`',
            },
            {
                pattern: '@@title',
                replacement: 'html replace webpack plugin',
            },
            {
                pattern: /<p>(.+?)<\/p>/g, // /g => replace all
                replacement: '<div>$1</div>',
            },
            {
                pattern: /(<!--\s*|@@)(css|js|img):([\w-\/]+)(\s*-->)?/g,
                replacement: (match, $1, type, file, $4, index, input) => {
                    // those formal parameters could be:
                    // match: <-- css:bootstrap-->
                    // type: css
                    // file: bootstrap
                    // Then fetch css link from some resource object
                    // var url = resources['css']['bootstrap']

                    const url = resource[type][file];

                    // $1==='@@' <--EQ--> $4===undefined
                    return $4 === undefined ? url : tpl[type].replace('%s', url);
                },
            },
        ]),
    ],
};
