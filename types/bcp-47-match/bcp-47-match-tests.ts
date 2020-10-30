import bcp47Match = require('bcp-47-match');

const basic = bcp47Match.basicFilter;
const extended = bcp47Match.extendedFilter;
const lookup = bcp47Match.lookup;

const tags = ['en', 'es'];
const ranges = ['en-US', 'es-US'];

const basicResult1: string[] = basic(tags, ranges);
const basicResult2: string[] = basic(tags[0], ranges[0]);

const extendedResult1: string[] = extended(tags, ranges);
const extendedResult2: string[] = extended(tags[0], ranges[0]);

const lookupResult1: string | undefined = lookup(tags, ranges);
const lookupResult2: string | undefined = lookup(tags[0], ranges[0]);
