import { createConfig, group, env, match, when, Block, Context, MatchOptions, Util } from '@webpack-blocks/core';
import { Configuration } from 'webpack';
import { css, file, url } from 'webpack-blocks';
import babel from '@webpack-blocks/babel';

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
    css(),
    match(['*.eot', '*.ttf', '*.woff', '*.woff2'], [file()]),
    match(['*.gif', '*.jpg', '*.jpeg', '*.png', '*.svg', '*.webp'], [url({ limit: 10000 })]),
]);
createConfig([match(['*.js', '!*node_modules*'], [babel()])]);

group([]);
group(blocks);

env('production', blocks);

match('', blocks);
match('', emptyMatchOptions, blocks);
match('', filledMatchOptions, blocks);
match([], []);

when(true, blocks);
