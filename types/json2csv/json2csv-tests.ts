import { Transform as NodeTransform } from 'stream';
import { createReadStream, createWriteStream } from 'fs';

import json2csv, { AsyncParser, parse, Parser, parseAsync, Transform } from 'json2csv';

let s: string;
let obj: object;

interface ExampleObj {
    str?: string;
    num?: number;
    obj?: object;
}

/**************
 * Public API *
 **************/
parse({});
parse([]);
parse({}, {});

new Parser();
const parser: Parser<ExampleObj> = new Parser({});
s = parser.parse({ str: '', num: 1, obj: {} });
parser.parse([]);
const transform: Transform<ExampleObj> = new Transform<ExampleObj>({ quote: '' });
const nodeTransform: NodeTransform = transform;

// Tests using examples from Readme
interface Car {
    car: string;
    price: number;
}

const opts: json2csv.Options<Car> = {
    fields: [
        // Supports pathname -> pathvalue
        'simplepath', // equivalent to {value:'simplepath'}
        'path.to.value', // also equivalent to {value:'path.to.value'}

        // Supports label -> simple path
        {
        label: 'some label', // (optional, column will be labeled 'path.to.something' if not defined)
        value: 'path.to.something', // data.path.to.something
        default: 'NULL' // default if value is not found (optional, overrides `defaultValue` for column)
        },

        // Supports label -> derived value
        {
        label: 'some label', // Soptional, column will be labeled with the function name or empty if the function is anonymous)
        value: (row: Car, field: json2csv.FieldValueCallbackInfo) => {
            if (field) {
                return (row as any)[field.label].toLowerCase() || field.default;
            }
        },
        default: 'NULL', // default if value function returns null or undefined
        },

        // Supports label -> derived value
        {
        value: (row: Car) => row.car
        },

        // Supports label -> derived value
        {
        value: (row: Car) => `"${row.car}"`,
        stringify: false // This flag signals if the resulting string should be quoted (stringified) or not (optional, default: true)
        },
    ]
};

const data = [{
    car: 'VW Beetle',
    price: 1395
}, {
    car: 'VW T1',
    price: 1357
}];

// Test for Synchronous Parser
try {
    const parser = new Parser(opts);
    const csv = parser.parse({ car: '', price: 1 });
    console.log(csv);
} catch (err) {
    console.error(err);
}

// Test for Synchronous Parser with flatten and custom flattenSeparator
try {
    const parser = new Parser<any>({ ...opts, flatten: true, flattenSeparator: ' / ' });
    const csv = parser.parse({ car: '', price: 1, foo: { bar: '' } });
    console.log(csv);
} catch (err) {
    console.error(err);
}

// Test convenience method "parse"
try {
    const csv = parse(data, opts);
    console.log(csv);
} catch (err) {
    console.error(err);
}

// Test for Asynchronous Parser
const transformOpts = { highWaterMark: 8192 };

const asyncParser = new AsyncParser(opts, transformOpts);

let csv = '';
asyncParser.processor
    .on('data', chunk => (csv += chunk.toString()))
    .on('end', () => console.log(csv))
    .on('error', err => console.error(err));

// Test for transform events
asyncParser.transform
    .on('header', header => console.log(header))
    .on('line', line => console.log(line))
    .on('error', err => console.log(err));

asyncParser.input.push(data); // This data might come from an HTTP request, etc.
asyncParser.input.push(null); // Sending `null` to a stream signal that no more data is expected and ends it.

const input = createReadStream('/path/to/input', { encoding: 'utf8' });
const output = createWriteStream('path/to/output', { encoding: 'utf8' });

asyncParser.fromInput(input).promise()
    .then(csv => console.log(csv))
    .catch(err => console.error(err));

asyncParser.fromInput(input).toOutput(output);

// Test convenience method "parseAsync" with object input
parseAsync(data, opts)
    .then(csv => console.log(csv))
    .catch(err => console.error(err));

// Test convenience method "parseAsync" with stream input
parseAsync(input, opts)
    .then(csv => console.log(csv))
    .catch(err => console.error(err));

/********************
 * Internal Methods *
 ********************/
class ParserExt extends Parser<ExampleObj> {
    constructor() {
        super();
        // Parser methods
        obj = this.preprocessData({});
        obj = this.preprocessData({ str: '', num: 1, obj: {} });
        obj = this.preprocessData([]);
        s = this.processData([]);

        // JSON2CSVBase methods
        let opts: json2csv.Options<ExampleObj>;
        opts = this.preprocessOpts();
        opts = this.preprocessOpts(opts);
        s = this.getHeader();
        obj = this.preprocessRow({});
        obj = this.preprocessRow({ str: '', num: 1, obj: {} });
        s = this.processRow({});
        s = this.processRow({ str: '', num: 1, obj: {} });
        s = this.processCell({}, { label: 'test', default: 'test2', value: 'field' });
        s = this.processCell({ str: '', num: 1, obj: {} }, { label: 'test', default: 'test2', value: 'field' });
        s = this.processCell({}, { label: 'test', default: 'test2', value: (row: object, field: json2csv.FieldValueCallbackInfo) => 'string' });
        s = this.processCell({ str: '', num: 1, obj: {} }, { label: 'test', default: 'test2', value: (row: object) => 'string' });
        this.getValue({}, { value: 'test' });
        this.getValue({ str: '', num: 1, obj: {} }, { value: 'test' });
        s = this.processValue(undefined, true);
        s = this.processValue(null, true);
        s = this.processValue(1, true);
        s = this.processValue('test', true);
        s = this.processValue(new Date(), true);
        s = this.processValue({}, true);
        s = this.processValue([], true);
        const flattenedData: object = this.flatten({}, '.');
        const unwindedData: object[] = this.unwindData([], []);
    }
}

class TransformExt extends Transform<ExampleObj> {
    constructor() {
        super();
        // Transform methods
        this.pushLine({});
        this.pushLine({ str: '', num: 1, obj: {} });

        // JSON2CSVBase methods
        let opts: json2csv.Options<ExampleObj>;
        opts = this.preprocessOpts();
        opts = this.preprocessOpts(opts);
        s = this.getHeader();
        obj = this.preprocessRow({});
        obj = this.preprocessRow({ str: '', num: 1, obj: {} });
        s = this.processRow({});
        s = this.processRow({ str: '', num: 1, obj: {} });
        s = this.processCell({}, { label: 'test', default: 'test2', value: 'field' });
        s = this.processCell({ str: '', num: 1, obj: {} }, { label: 'test', default: 'test2', value: 'field' });
        s = this.processCell({}, { label: 'test', default: 'test2', value: (row: object, field: json2csv.FieldValueCallbackInfo) => 'string' });
        s = this.processCell({ str: '', num: 1, obj: {} }, { label: 'test', default: 'test2', value: (row: object) => 'string' });
        this.getValue({}, { value: 'test' });
        this.getValue({ str: '', num: 1, obj: {} }, { value: 'test' });
        s = this.processValue(undefined, true);
        s = this.processValue(null, true);
        s = this.processValue(1, true);
        s = this.processValue('test', true);
        s = this.processValue(new Date(), true);
        s = this.processValue({}, true);
        s = this.processValue([], true);
        const flattenedData: object = this.flatten({}, '.');
        const unwindedData: object[] = this.unwindData([], []);
    }
}
