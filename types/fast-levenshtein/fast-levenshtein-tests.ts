import * as fastLevenshtein from 'fast-levenshtein';

declare const boolVal: boolean;
declare const strVal: string;

// option datas tests
let opts: fastLevenshtein.LevenshteinOptions = {};

opts.useCollator = boolVal;

// API tests
fastLevenshtein.get(strVal, strVal);
fastLevenshtein.get(strVal, strVal, opts);
