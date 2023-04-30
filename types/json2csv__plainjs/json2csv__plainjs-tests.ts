import { Parser, StreamParser, Field } from '@json2csv/plainjs';
import BaseParser, { Options as ParserOptions } from '@json2csv/plainjs/src/BaseParser';
import { Options as StreamParserOptions, AsyncOptions } from '@json2csv/plainjs/src/StreamParser';
import { default as defaultFormatter } from '@json2csv/formatters';
import { flatten, unwind } from '@json2csv/transforms';

import Tokenizer from '@streamparser/json/tokenizer';

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

const streamOptions: StreamParserOptions = { ...options, ndjson: true };
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

baseTests(streamParser);
streamParser.initTokenizer();
streamParser.initTokenizer({}, {});
streamParser.initTokenizer(streamOptions, asyncOptions);
streamParser.configureCallbacks(new Tokenizer(), new Tokenizer());
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
