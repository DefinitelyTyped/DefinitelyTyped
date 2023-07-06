import { Parser, StreamParser, Field, ParserOptions, StreamOptions, AsyncOptions } from '@json2csv/plainjs';
import BaseParser from '@json2csv/plainjs/src/BaseParser';
import * as utils from '@json2csv/plainjs/src/utils';
import { default as defaultFormatter } from '@json2csv/formatters';
import { flatten, unwind } from '@json2csv/transforms';

import { Tokenizer, TokenParser } from '@streamparser/json/index';

const options: ParserOptions = {
    fields: [
        'foo',
        () => 'foo',
        { value: 'foo' },
        {
            label: 'Foo',
            value: 'foo',
            default: 'bar',
        },
    ],
    transforms: [flatten(), unwind()],
    formatters: { object: defaultFormatter },
    defaultValue: 'bar',
    delimiter: '\t',
    eol: '\r\n',
    header: true,
    includeEmptyRows: true,
    withBOM: true,
};

new Parser();
new Parser({});
new Parser(options);

const parser = new Parser();

function baseTests(parser: BaseParser) {
    parser.opts; // $ExpectType Required<Options>
    parser.getHeader(); // $ExpectType string
    // @ts-expect-error `globalDefaultValue` missing
    parser.preprocessFieldsInfo([]);
    parser.preprocessFieldsInfo([] as Field[], 'foo'); // $ExpectType FieldObject[]
    parser.preprocessOpts(); // $ExpectType Required<Options>
    parser.preprocessOpts({}); // $ExpectType Required<Options>
    parser.preprocessOpts(options); // $ExpectType Required<Options>
    parser.preprocessRow([]); // $ExpectType any[]
    parser.processCell([], { value: 'foo' }); // $ExpectType string
    parser.processRow(); // $ExpectType string | undefined
    parser.processRow([]); // $ExpectType string | undefined
    parser.processValue(123); // $ExpectType string
}

baseTests(parser);
parser.parse('foo'); // $ExpectType string

const streamOptions: StreamOptions = { ...options, ndjson: true };
const asyncOptions: AsyncOptions = {
    stringBufferSize: 123,
    numberBufferSize: 123,
    separator: '\t',
    objectMode: true,
};

new StreamParser();
new StreamParser({}, {});
new StreamParser(streamOptions, asyncOptions);
const streamParser = new StreamParser();

streamParser.tokenizer; // $ExpectType Tokenizer | { write(data: any): void; end(): void; } | undefined
streamParser.tokenParser; // $ExpectType TokenParser | undefined

baseTests(streamParser);
streamParser.initTokenizer();
streamParser.initTokenizer({}, {});
streamParser.initTokenizer(streamOptions, asyncOptions);
streamParser.configureCallbacks(new Tokenizer(), new TokenParser());
streamParser.getBinaryModeTokenizer(); // $ExpectType Tokenizer
streamParser.getBinaryModeTokenizer(asyncOptions); // $ExpectType Tokenizer
streamParser.getNdJsonTokenizer(); // $ExpectType Tokenizer
streamParser.getNdJsonTokenizer(asyncOptions); // $ExpectType Tokenizer
streamParser.getObjectModeTokenzier();
streamParser.onData('foo');
streamParser.onEnd();
streamParser.onError();
streamParser.onHeader('foo');
streamParser.onLine([]);
streamParser.pushHeader();
streamParser.pushHeaderIfNotWritten();
streamParser.pushLine('foo');
streamParser.write('foo');
streamParser.end();

streamParser.onData = data => {
    data; // $ExpectType any
};
streamParser.onEnd = () => {};
streamParser.onError = () => {};
streamParser.onHeader = header => {
    header; // $ExpectType string
};
streamParser.onLine = line => {
    line; // $ExpectType any[]
};

utils.getProp({}, 'foo', 'bar'); // $ExpectType any
utils.flattenReducer([1, 2, 3], [4, 5, 6]); // $ExpectType number[]
utils.fastJoin(['foo', 'bar'], ','); // $ExpectType string
