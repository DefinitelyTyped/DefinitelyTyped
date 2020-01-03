import bcp47 = require('bcp-47');

const bcpParse = bcp47.parse;
const bcpStringify = bcp47.stringify;

const result: bcp47.Schema = bcpParse('en-US');

const locale: string = bcpStringify(result);

const schema: bcp47.Schema = {
    language: 'en',
    region: 'US'
};

bcpStringify(schema);

const parseOptions: bcp47.ParseOptions = {
    warning: (message: string, code: number, offset: number) => {},
};

bcpParse('en-US', parseOptions);
