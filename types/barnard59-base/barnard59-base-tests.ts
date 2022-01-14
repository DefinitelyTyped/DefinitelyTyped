import * as stream from 'stream';
import {
    combine,
    concat,
    filter,
    flatten,
    glob,
    jsonParse,
    jsonStringify,
    limit,
    map,
    nul,
    offset,
    stdout,
    toString,
} from 'barnard59-base';
import { object as concatObject } from 'barnard59-base/concat';
import forEach from 'barnard59-base/forEach';
import * as toReadable from 'barnard59-base/toReadable';
import { Readable, Duplex, Writable, Transform } from 'readable-stream';
import Pipeline from 'barnard59-core/lib/Pipeline';

function testCombine() {
    // prettier-ignore
    const a: stream.Readable = <any> {};
    // prettier-ignore
    const b: stream.Readable = <any> {};
    // prettier-ignore
    const c: stream.Writable = <any> {};

    const combinedDuplex: stream.Duplex = combine([a, b, c]);
    const combineSingle: stream.Readable = combine([a]);

    const combinedWithOpts: stream.Duplex = combine([a, b, c], {
        allowHalfOpen: true,
    });
}

function testConcat() {
    // prettier-ignore
    const streams: stream[] = <any> {};

    let concatenated: Readable;

    concatenated = concat(...streams);
    concatenated = concat.object(...streams);
    concatenated = concatObject(...streams);
}

function testFilter() {
    interface Foo {
        bar: string;
    }

    const filtered: stream.Transform = filter<Foo>(function filterFunc(chunk) {
        return chunk.bar === this.variables.get('baz');
    });
}

function testFlatten() {
    const flattened: stream.Transform = flatten();
}

function testForEach() {
    // prettier-ignore
    const pipeline: Pipeline = <any> {};

    let loop: Duplex = forEach(pipeline);
    loop = forEach(pipeline, 'foo');
}

function testGlob() {
    let globbed: Readable = glob({
        pattern: 'foo/**/bar',
    });

    globbed = glob({
        pattern: '*.foo',
        absolute: true,
    });
}

function testJson() {
    const parsed: stream.Transform = jsonParse();
    const stringified: stream.Transform = jsonStringify();
}

function testLimit() {
    const limited: stream.Transform = limit(5);
}

function testMap() {
    interface Foo {
        bar: number;
    }
    const mapped: stream.Transform = map<Foo, number>(function mapFunc(chunk, _) {
        const baz: number = this.variables.get('baz');

        return chunk.bar * baz;
    });

    const lazyMapped: stream.Transform = map<Foo, number>(async function mapFunc(chunk, _) {
        const baz: number = this.variables.get('baz');

        return chunk.bar * baz;
    });
}

function testNul() {
    const nulled: Writable = nul();
}

function testOffset() {
    const offsetted: stream.Transform = offset(10);
}

function testStdOut() {
    const transform: stream.Transform = stdout();
}

function testToReadable() {
    const fromString: Readable = toReadable.string('foo');
    const fromObject: Readable = toReadable.object({});
}

function testToString() {
    const stream: Transform = toString();
}
