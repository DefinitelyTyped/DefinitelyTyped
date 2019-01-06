import { json2csv, parse, Parser, Transform } from 'json2csv';
import { Transform as NodeTransform } from 'stream';

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

interface Car {
    car: string;
    price: number;
}

new Parser();
const parser: Parser<ExampleObj> = new Parser({});
s = parser.parse({ str: '', num: 1, obj: {} });

const opts: json2csv.Options<Car> = {
    fields: [{
        label: 'Car Name',
        value: 'car'
    }, {
        label: 'Price USD',
        value: 'price'
    }]
};

const json2csvParser = new Parser<Car>(opts);

parser.parse([]);
const transform: Transform<ExampleObj> = new Transform<ExampleObj>({ quote: '' });
const nodeTransform: NodeTransform = transform;

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
        s = this.processCell({}, { label: 'test', default: 'test2', value: (row: object, field: string) => 'string' });
        s = this.processCell({ str: '', num: 1, obj: {} }, { label: 'test', default: 'test2', value: (row: object, field: string) => 'string' });
        this.getValue({}, { label: 'test' });
        this.getValue({ str: '', num: 1, obj: {} }, { label: 'test' });
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
        s = this.processCell({}, { label: 'test', default: 'test2', value: (row: object, field: string) => 'string' });
        s = this.processCell({ str: '', num: 1, obj: {} }, { label: 'test', default: 'test2', value: (row: object, field: string) => 'string' });
        this.getValue({}, { label: 'test' });
        this.getValue({ str: '', num: 1, obj: {} }, { label: 'test' });
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
