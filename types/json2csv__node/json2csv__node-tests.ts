import defaultFormatter from "@json2csv/formatters";
import { AsyncOptions, AsyncParser, StreamOptions, Transform, TransformOptions } from "@json2csv/node";
import { flatten, unwind } from "@json2csv/transforms";

const streamOptions: StreamOptions = {
    fields: [
        "foo",
        () => "foo",
        { value: "foo" },
        {
            label: "Foo",
            value: "foo",
            default: "bar",
        },
    ],
    transforms: [flatten(), unwind()],
    formatters: { object: defaultFormatter },
    defaultValue: "bar",
    delimiter: "\t",
    eol: "\r\n",
    header: true,
    includeEmptyRows: true,
    withBOM: true,
    ndjson: true,
};

const transformOptions: TransformOptions = { allowHalfOpen: true };

new AsyncParser();
new AsyncParser({}, {});
new AsyncParser(streamOptions, transformOptions);

const parser = new AsyncParser();
parser.parse("foo"); // $ExpectType JSON2CSVNodeTransform

const asyncOptions: AsyncOptions = {
    stringBufferSize: 123,
    numberBufferSize: 123,
    separator: "\t",
    objectMode: true,
};

new Transform();
new Transform({}, {}, {});
new Transform(streamOptions, transformOptions, asyncOptions);

const transform = new Transform();
transform.promise(); // $ExpectType Promise<string>
transform.endUnderlyingLayer();
