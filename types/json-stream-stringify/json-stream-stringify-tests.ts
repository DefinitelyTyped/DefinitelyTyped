import JsonStreamStringify = require('json-stream-stringify');
import { Readable } from 'stream';

function ReadableStream(...args: any[]) {
    const stream = new Readable({
        objectMode: args.some(v => typeof v !== 'string'),
    });
    stream._read = () => {
        if (!args.length) return stream.push(null);
        const v = args.shift();
        if (v instanceof Error) return stream.emit('error', v);
        return stream.push(v);
    };
    return stream;
}

let jsonStream: JsonStreamStringify;
jsonStream = new JsonStreamStringify(null);
jsonStream = new JsonStreamStringify(Infinity);
jsonStream = new JsonStreamStringify(new Date());
jsonStream = new JsonStreamStringify(true);
jsonStream = new JsonStreamStringify(Symbol('test'));
jsonStream = new JsonStreamStringify(1);
jsonStream = new JsonStreamStringify(1, () => 2);
jsonStream = new JsonStreamStringify('\n');
jsonStream = new JsonStreamStringify('漢字');
jsonStream = new JsonStreamStringify('\u009f');
jsonStream = new JsonStreamStringify({});
jsonStream = new JsonStreamStringify(/regex/gi);
jsonStream = new JsonStreamStringify({ a: undefined });
jsonStream = new JsonStreamStringify({ a: null });
jsonStream = new JsonStreamStringify({ a: undefined }, (k, v) => {
    if (k) {
        k === 'a';
        v === undefined;
        return 1;
    }
    return v;
});
jsonStream = new JsonStreamStringify({ a: 1, b: 2 }, (k, v) => {
    if (k === 'a') {
        v === 1;
        return v;
    }
    if (k === 'b') {
        v === 2;
        return undefined;
    }
    if (k === undefined) return v;
    throw new Error();
});
jsonStream = new JsonStreamStringify({ a: 1, b: 2 }, ['b']);
jsonStream = new JsonStreamStringify({ a: 1 });
jsonStream = new JsonStreamStringify({
    a: 1,
    b: undefined,
});
jsonStream = new JsonStreamStringify({
    a: 1,
    b: Promise.resolve(undefined)
});
jsonStream = new JsonStreamStringify({
    a() { },
    b: 'b'
});
jsonStream = new JsonStreamStringify([function a() { }]);
jsonStream = new JsonStreamStringify([function a() { }, undefined]);
jsonStream = new JsonStreamStringify({ a: new Date() });
jsonStream = new JsonStreamStringify({
    a: 1,
    b: {
        c: 2,
    },
});
jsonStream = new JsonStreamStringify({
    a: [1],
    b: 2,
});
jsonStream = new JsonStreamStringify([]);
jsonStream = new JsonStreamStringify([
    [
        [],
    ],
    [
        [],
    ],
]);
jsonStream = new JsonStreamStringify([1, undefined, 2]);
// tslint:disable-next-line no-sparse-arrays
jsonStream = new JsonStreamStringify([1, , 2]);
jsonStream = new JsonStreamStringify([1, 'a']);
jsonStream = new JsonStreamStringify(Promise.resolve(1));
jsonStream = new JsonStreamStringify(Promise.resolve(Promise.resolve(1)));
jsonStream = new JsonStreamStringify(({
    then(fn: (promise: any) => any) {
        return fn(Promise.resolve(1));
    },
}));
jsonStream = new JsonStreamStringify({
    a: Promise.resolve(1),
});
jsonStream = new JsonStreamStringify(ReadableStream(1));
jsonStream = new JsonStreamStringify(Promise.resolve(ReadableStream(1)));
jsonStream = new JsonStreamStringify({
    a: ReadableStream(1, 2, 3),
});
jsonStream = new JsonStreamStringify(ReadableStream('a', 'b', 'c'));
{
    const stream = new Readable();
    const args = ['a', 'b', 'c'];
    Object.assign(stream, {
        firstRead: true,
        _read() {
            setTimeout(() => {
                if (!args.length) return stream.push(null);
                const v = args.shift();
                return stream.push(v);
            }, 1);
        },
    });
    jsonStream = new JsonStreamStringify(stream);
}
jsonStream = new JsonStreamStringify(ReadableStream({}, 'a', undefined, 'c'));
jsonStream = new JsonStreamStringify({
    a: ReadableStream({
        name: 'name',
        date: new Date(),
    }),
});
jsonStream = new JsonStreamStringify({
    name: 'name',
    arr: [],
    date: new Date(),
});
jsonStream = new JsonStreamStringify({ a: 1 }, undefined, 2);
jsonStream = new JsonStreamStringify([1], undefined, 2);
jsonStream = new JsonStreamStringify([1], undefined, 'a');
jsonStream = new JsonStreamStringify({}, undefined, undefined, true);
{
    const cyclicData1: Record<string, any> = {};
    cyclicData1.a = cyclicData1;
    cyclicData1.b = [cyclicData1, {
        a: cyclicData1,
    }];
    cyclicData1.b[3] = ReadableStream(cyclicData1.b[1]);
    jsonStream = new JsonStreamStringify(cyclicData1, undefined, undefined, true);
}
{
    const cyclicData2: Record<string, any> = {};
    const data2 = {
        a: 'deep',
    };
    cyclicData2.a = Promise.resolve({
        b: data2,
    });
    cyclicData2.b = data2;
    jsonStream = new JsonStreamStringify(cyclicData2, undefined, undefined, true);
}
{
    const a = { foo: 'bar' };
    const arr = [a, a];
    jsonStream = new JsonStreamStringify(arr);
    jsonStream.stack.join('');
}
