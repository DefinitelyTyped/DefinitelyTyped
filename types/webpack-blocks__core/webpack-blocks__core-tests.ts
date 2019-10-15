import { createConfig, group, env, match, when, Block, Context, MatchOptions, Util } from '@webpack-blocks/core';
import { Configuration } from 'webpack';
import { css, file, url } from 'webpack-blocks';

// test data
const block = (config: Configuration): Block => {
    return (context: Context, util: Util) => util.merge(config);
};
const config: Configuration = {};
const blocks: Block[] = [block(config)];
const emptyMatchOptions: MatchOptions = {};
const filledMatchOptions: MatchOptions = {exclude: new RegExp(''), include: ''};

// tests
createConfig({webpack: null, webpackVersion: ''}, blocks);
createConfig([
    css(), // or use `match()` to apply it to other files than *.css

    // will copy font files to build directory and link to them
    match(['*.eot', '*.ttf', '*.woff', '*.woff2'], [
        file()
    ]),

    // will load images up to 10KB as data URL
    match(['*.gif', '*.jpg', '*.jpeg', '*.png', '*.svg', '*.webp'], [
        url({ limit: 10000 })
    ])
]);

group([]);
group(blocks);

env('production', blocks);

match('', blocks);
match('', emptyMatchOptions, blocks);
match('', filledMatchOptions, blocks);
match([], []);

when(true, blocks);
