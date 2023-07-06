import { AsyncParser, AsyncOptions, TransformStream, StreamOptions } from '@json2csv/whatwg';
import { flatten, unwind } from '@json2csv/transforms';
import defaultFormatter from '@json2csv/formatters';

const streamOptions: StreamOptions = {
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
    ndjson: true,
};

const asyncOptions: AsyncOptions = {
    stringBufferSize: 123,
    numberBufferSize: 123,
    separator: '\t',
    objectMode: true,
};

new AsyncParser();
new AsyncParser({}, {}, {}, {});
new AsyncParser(streamOptions, asyncOptions, { highWaterMark: 123 }, { highWaterMark: 456 });

declare const readableStream: ReadableStream;

const parser = new AsyncParser();

parser.opts; // $ExpectType Options | undefined
parser.asyncOpts; // $ExpectType AsyncOptions
parser.readableStrategy; // $ExpectType QueuingStrategy<any> | undefined
parser.writableStrategy; // $ExpectType QueuingStrategy<any> | undefined

parser.parse('foo');
parser.parse(readableStream);
parser.parse([]);
parser.parse({});

new TransformStream();
new TransformStream({});
new TransformStream(streamOptions, asyncOptions, { highWaterMark: 123 }, { highWaterMark: 456 });
