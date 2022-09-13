import { Transform, TransformOptions } from 'stream';

import * as make from 'stream-json';

import * as Assembler from 'stream-json/Assembler';
import * as Disassembler from 'stream-json/Disassembler';
import * as Emitter from 'stream-json/Emitter';
import * as Parser from 'stream-json/Parser';
import * as Stringer from 'stream-json/Stringer';

import * as JsonlParser from 'stream-json/jsonl/Parser';
import * as JsonlStringer from 'stream-json/jsonl/Stringer';

import * as FilterBase from 'stream-json/filters/FilterBase';
import * as Pick from 'stream-json/filters/Pick';
import * as Replace from 'stream-json/filters/Replace';
import * as Ignore from 'stream-json/filters/Ignore';
import * as Filter from 'stream-json/filters/Filter';

import * as StreamArray from 'stream-json/streamers/StreamArray';
import * as StreamObject from 'stream-json/streamers/StreamObject';
import * as StreamValues from 'stream-json/streamers/StreamValues';

import * as Batch from 'stream-json/utils/Batch';
import * as Verifier from 'stream-json/utils/Verifier';
import * as emit from 'stream-json/utils/emit';
import * as withParser from 'stream-json/utils/withParser';
import * as Utf8Stream from 'stream-json/utils/Utf8Stream';

const used = (array: any[]) => array.forEach(value => console.log(!!value));

{
    // creating parser with the main module

    const p1 = make();
    const p2 = new make.Parser();
    const p3 = make.parser();

    const p4 = make({});
    const p5 = new make.Parser({});
    const p6 = make.parser({});

    const p7: make.Parser = make();
    const p8: make.Parser = new make.Parser();
    const p9: make.Parser = make.parser();

    used([p1, p2, p3, p4, p5, p6, p7, p8, p9]);
}

{
    // Assembler tests

    const parser: Parser = new Parser({ streamValues: false });
    const asm: Assembler = Assembler.connectTo(parser);

    asm.consume({ name: 'startObject' });
    asm.dropToLevel(0);

    parser.on('keyValue', (value: string) =>
        console.log(value, asm.key, asm.stack.length, asm.done, asm.depth, asm.path),
    );
    asm.on('done', (asm: Assembler) => console.log(JSON.stringify(asm.current)));

    const asm2: Assembler = new Assembler();
    const asm3: Assembler = new Assembler({reviver: (key, value) => value});

    used([asm2, asm3]);
}

{
    // Emitter tests

    const parser: Parser = new Parser();
    const e1: Emitter = new Emitter();
    const e2: Emitter = Emitter.make({});
    const e3: Emitter = Emitter.emitter();
    const e4: Emitter.make.Constructor = Emitter.make({});
    const e5: Emitter.emitter.Constructor = Emitter.emitter({});

    parser.pipe(e1);
    parser.pipe(e2);
    parser.pipe(e3);
    parser.pipe(e4);
    parser.pipe(e5);

    e1.on('startArray', () => console.log('array'));
}

{
    // Parser tests

    const p1: Parser = new Parser({ packValues: false });
    const p2: Parser = Parser.make({ jsonStreaming: true });
    const p3: Parser = Parser.parser({ streamValues: false });
    const p4: Parser.make.Constructor = Parser.make({ packValues: false, packKeys: true });
    const p5: Parser.parser.Constructor = Parser.parser({ packValues: false, packKeys: true, streamKeys: false });

    used([p1, p2, p3, p4, p5]);
}

{
    // Disassembler tests

    const d1: Disassembler = new Disassembler({ packValues: false });
    const d2: Disassembler = Disassembler.make({
        jsonStreaming: true,
        replacer: (acc, next) => `${acc}${next}`,
    });
    const d3: Disassembler = Disassembler.disassembler({
        streamValues: false,
        replacer: ['foo', 'bar'],
    });
    const d4: Disassembler.make.Constructor = Disassembler.make();
    const d5: Disassembler.disassembler.Constructor = Disassembler.disassembler();

    used([d1, d2, d3, d4, d5]);
}

{
    // Stringer tests

    const s1: Stringer = new Stringer();
    const s2: Stringer = Stringer.make({ useValues: true });
    const s3: Stringer = Stringer.stringer({ useKeyValues: true });
    const s4: Stringer.make.Constructor = Stringer.make();
    const s5: Stringer.stringer.Constructor = Stringer.stringer();
    const s6: Stringer = Stringer.stringer({ makeArray: true });

    used([s1, s2, s3, s4, s5, s6]);
}

{
    // Pick tests

    const parser: Parser = new Parser();

    const f1: Pick = new Pick({ filter: 'data' });
    const f2: Pick = Pick.make({ filter: 'data' });
    const f3: Pick = Pick.pick({ filter: 'data' });
    const f4: Pick.make.Constructor = Pick.make({ filter: 'data' });
    const f5: Pick.pick.Constructor = Pick.pick({ filter: 'data' });

    used([f1, f2, f3, f4, f5]);

    parser
        .pipe(new Pick({ filter: 'data' }))
        .pipe(Pick.make({ filter: /\bvalues\b/i }))
        .pipe(Pick.pick({ filter: (stack: FilterBase.Stack, token: FilterBase.Token) => token.name === 'startArray' }));

    Pick.withParser({ filter: 'data' });
}

{
    // Replace tests

    const parser: Parser = new Parser();

    const f1: Replace = new Replace({ filter: 'data' });
    const f2: Replace = Replace.make({ filter: 'data' });
    const f3: Replace = Replace.replace({ filter: 'data' });
    const f4: Replace.make.Constructor = Replace.make({ filter: 'data' });
    const f5: Replace.replace.Constructor = Replace.replace({ filter: 'data' });

    used([f1, f2, f3, f4, f5]);

    parser
        .pipe(new Replace({ filter: 'total', replacement: [{ name: 'trueValue' }] }))
        .pipe(
            new Replace({
                filter: 'sum',
                replacement: [
                    { name: 'startNumber' },
                    { name: 'numberChunk', value: '0' },
                    { name: 'endNumber' },
                    { name: 'numberValue', value: '0' },
                ],
            }),
        )
        .pipe(Replace.make({ filter: /\b_\w*\b/i, allowEmptyReplacement: true }))
        .pipe(
            Replace.replace({
                filter: (stack: FilterBase.Stack, token: FilterBase.Token) => stack.length > 2,
                replacement: (stack: FilterBase.Stack, token: FilterBase.Token) => [
                    { name: token.name === 'startArray' ? 'trueValue' : 'falseValue' },
                ],
            }),
        );

    Replace.withParser({ filter: '_meta' });
}

{
    // Ignore tests

    const parser: Parser = new Parser({ streamValues: false });

    const f1: Ignore = new Ignore({ filter: 'data' });
    const f2: Ignore = Ignore.make({ filter: 'data' });
    const f3: Ignore = Ignore.ignore({ filter: 'data' });
    const f4: Ignore.make.Constructor = Ignore.make({ filter: 'data' });
    const f5: Ignore.ignore.Constructor = Ignore.ignore({ filter: 'data' });

    used([f1, f2, f3, f4, f5]);

    parser
        .pipe(new Ignore({ filter: 'total' }))
        .pipe(Ignore.make({ filter: /\b_\w*\b/i }))
        .pipe(Ignore.ignore({ filter: (stack: FilterBase.Stack, token: FilterBase.Token) => stack.length > 2 }));

    Ignore.withParser({ filter: '_meta' });
}

{
    // Filter tests

    const parser: Parser = new Parser({ streamValues: false });

    const f1: Filter = new Filter({ filter: 'data' });
    const f2: Filter = Filter.make({ filter: 'data' });
    const f3: Filter = Filter.filter({ filter: 'data' });
    const f4: Filter.make.Constructor = Filter.make({ filter: 'data' });
    const f5: Filter.filter.Constructor = Filter.filter({ filter: 'data' });

    used([f1, f2, f3, f4, f5]);

    parser
        .pipe(new Filter({ filter: 'total' }))
        .pipe(Filter.make({ filter: /\b_\w*\b/i }))
        .pipe(Filter.filter({ filter: (stack: FilterBase.Stack, token: FilterBase.Token) => stack.length > 2 }));

    Filter.withParser({ filter: '_meta' });
}

{
    // StreamArray tests

    const parser: Parser = new Parser();

    const s1: StreamArray = new StreamArray();
    const s2: StreamArray = StreamArray.make();
    const s3: StreamArray = StreamArray.streamArray();
    const s4: StreamArray.make.Constructor = StreamArray.make();
    const s5: StreamArray.streamArray.Constructor = StreamArray.streamArray();

    used([s1, s2, s3, s4, s5]);

    parser.pipe(
        new StreamArray({
            includeUndecided: true,
            objectFilter: (asm: Assembler) => {
                if (asm.current) {
                    if (asm.current.action === 'accept') return true;
                    if (asm.current.action === 'reject') return false;
                }
            },
        }),
    );
    parser.pipe(
        StreamArray.make({
            includeUndecided: false,
            objectFilter: (asm: Assembler) => {
                if (asm.current) {
                    if (asm.current.action === 'accept') return true;
                    if (asm.current.action === 'reject') return false;
                }
            },
        }),
    );
    parser.pipe(StreamArray.streamArray());

    StreamArray.withParser();
}

{
    // StreamObject tests

    const parser: Parser = new Parser();

    const s1: StreamObject = new StreamObject();
    const s2: StreamObject = StreamObject.make();
    const s3: StreamObject = StreamObject.streamObject();
    const s4: StreamObject.make.Constructor = StreamObject.make();
    const s5: StreamObject.streamObject.Constructor = StreamObject.streamObject();

    used([s1, s2, s3, s4, s5]);

    parser.pipe(
        new StreamObject({
            includeUndecided: true,
            objectFilter: (asm: Assembler) => {
                if (asm.current) {
                    if (asm.current.action === 'accept') return true;
                    if (asm.current.action === 'reject') return false;
                }
            },
        }),
    );
    parser.pipe(
        StreamObject.make({
            includeUndecided: false,
            objectFilter: (asm: Assembler) => {
                if (asm.current) {
                    if (asm.current.action === 'accept') return true;
                    if (asm.current.action === 'reject') return false;
                }
            },
        }),
    );
    parser.pipe(StreamObject.streamObject());

    StreamObject.withParser();
}

{
    // StreamValues tests

    const parser: Parser = new Parser();

    const s1: StreamValues = new StreamValues();
    const s2: StreamValues = StreamValues.make();
    const s3: StreamValues = StreamValues.streamValues();
    const s4: StreamValues.make.Constructor = StreamValues.make();
    const s5: StreamValues.streamValues.Constructor = StreamValues.streamValues();

    used([s1, s2, s3, s4, s5]);

    parser.pipe(
        new StreamValues({
            includeUndecided: true,
            objectFilter: (asm: Assembler) => {
                if (asm.current) {
                    if (asm.current.action === 'accept') return true;
                    if (asm.current.action === 'reject') return false;
                }
            },
        }),
    );
    parser.pipe(
        StreamValues.make({
            includeUndecided: false,
            objectFilter: (asm: Assembler) => {
                if (asm.current) {
                    if (asm.current.action === 'accept') return true;
                    if (asm.current.action === 'reject') return false;
                }
            },
        }),
    );
    parser.pipe(StreamValues.streamValues());

    StreamValues.withParser();
}

{
    // Batch tests

    const b1: Batch = new Batch();
    const b2: Batch = Batch.make({ batchSize: 1000 });
    const b3: Batch = Batch.batch({ batchSize: 100 });
    const b4: Batch.make.Constructor = Batch.make();
    const b5: Batch.batch.Constructor = Batch.batch();

    used([b1, b2, b3, b4, b5]);
}

{
    // Verifier tests

    const v1: Verifier = new Verifier();
    const v2: Verifier = Verifier.make({ jsonStreaming: true });
    const v3: Verifier = Verifier.verifier({ jsonStreaming: false });
    const v4: Verifier.make.Constructor = Verifier.make();
    const v5: Verifier.verifier.Constructor = Verifier.verifier();

    used([v1, v2, v3, v4, v5]);
}

{
    // emit() tests

    const parser: Parser = emit(new Parser());
    parser.on('keyValue', () => console.log('key'));
}

{
    // withParser() tests

    withParser(Pick.make, { filter: 'data' });
    withParser(Pick.pick, { filter: 'data', packValues: false });

    withParser(StreamArray.streamArray, { objectFilter: (asm: Assembler) => asm.current });
    withParser(StreamArray.make, { objectFilter: (asm: Assembler) => asm.current, packValues: false });

    withParser((options?: TransformOptions) => new Transform(options), { streamValues: false });
}

{
    // Utf8Stream tests

    const u1: Utf8Stream = new Utf8Stream();

    used([u1]);
}

{
    // JsonlParser tests

    const p1: JsonlParser = new JsonlParser();
    const p2: JsonlParser = JsonlParser.make({reviver: (key, value) => value});
    const p3: JsonlParser = JsonlParser.parser();
    const p4: JsonlParser.make.Constructor = JsonlParser.make();
    const p5: JsonlParser.parser.Constructor = JsonlParser.parser();

    used([p1, p2, p3, p4, p5]);
}

{
    // JsonlStringer tests

    const p1: JsonlStringer = new JsonlStringer();
    const p2: JsonlStringer = JsonlStringer.make({replacer: (key, value) => value});
    const p3: JsonlStringer = JsonlStringer.stringer();
    const p4: JsonlStringer.make.Constructor = JsonlStringer.make();
    const p5: JsonlStringer.stringer.Constructor = JsonlStringer.stringer();

    used([p1, p2, p3, p4, p5]);
}
