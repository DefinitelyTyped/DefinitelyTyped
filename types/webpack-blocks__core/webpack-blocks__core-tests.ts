import { createConfig, group, env, match, when, Block, Context, MatchOptions, Util } from '@webpack-blocks/core';
import { Configuration } from '../webpack';

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
group([]);
group(blocks);
env('production', blocks);
match('', blocks);
match('', emptyMatchOptions, blocks);
match('', filledMatchOptions, blocks);
when(true, blocks);
