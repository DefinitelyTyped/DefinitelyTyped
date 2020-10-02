import { css, file, url } from '@webpack-blocks/assets';
import { createConfig, match } from 'webpack-blocks';

// test data
const emptyCssOptions: css.CssOptions = {};
const filledCssOptions: css.CssOptions = {};
const emptyFileOptions: css.FileOptions = {};
const filledFileOptions: css.FileOptions = {};
const emptyUrlOptions: css.UrlOptions = {};
const filledUrlOptions: css.UrlOptions = {};

// tests
createConfig([
    css(), // or use `match()` to apply it to other files than *.css

    // will copy font files to build directory and link to them
    match(['*.eot', '*.ttf', '*.woff', '*.woff2'], [file()]),

    // will load images up to 10KB as data URL
    match(['*.gif', '*.jpg', '*.jpeg', '*.png', '*.svg', '*.webp'], [url({ limit: 10000 })]),
]);

createConfig([
    match(
        ['*.css', '!*node_modules*'],
        [
            css.modules({
                localIdentName: '[name]--[local]--[hash:base64:5]',
            }),
        ],
    ),
]);

css();
css(emptyCssOptions);
css(filledCssOptions);
file();
file(emptyFileOptions);
file(filledFileOptions);
url();
url(emptyUrlOptions);
url(filledUrlOptions);
