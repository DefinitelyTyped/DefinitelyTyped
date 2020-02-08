import { Aliases, Options, jest, rollup, webpack } from 'lerna-alias';

const opt1: Options = {};
const opt2: Options = { directory: 'test1', mainFields: ['module', 'main'] };
const opt3: Options = { sourceDirectory: 'lib' };
const opt4: Options = { sourceDirectory: false };
const opt5: Options = { sourceDirectory: true }; // $ExpectError

const jestAliases1: Aliases = jest();
const jestAliases2: Aliases = jest(opt2);

const rollupAliases1: Aliases = rollup();
const rollupAliases2: Aliases = rollup(opt2);

const webpackAliases1: Aliases = webpack();
const webpackAliases2: Aliases = webpack(opt2);
