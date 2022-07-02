import busboy = require('busboy');

// $ExpectType Busboy
const bb = busboy({
    headers: { 'content-type': 'foo' },
    highWaterMark: 1000,
    fileHwm: 1000,
    defCharset: 'utf8',
    defParamCharset: 'latin1',
    preservePath: true,
    limits: {
        fieldNameSize: 200,
        fieldSize: 200,
        fields: 200,
        fileSize: 200,
        files: 200,
        parts: 200,
        headerPairs: 200,
    },
});

bb.addListener('file', (name, stream, info) => {
    name; // $ExpectType string
    stream; // $ExpectType Readable
    info; // $ExpectType FileInfo
});
bb.addListener('field', (name, value, info) => {
    name; // $ExpectType string
    value; // $ExpectType string
    info; // $ExpectType FieldInfo
});
bb.addListener('partsLimit', () => {});
// @ts-expect-error
bb.addListener('partsLimit', foo => {});
bb.addListener('filesLimit', () => {});
// @ts-expect-error
bb.addListener('filesLimit', foo => {});
bb.addListener('fieldsLimit', () => {});
// @ts-expect-error
bb.addListener('fieldsLimit', foo => {});
bb.addListener('error', e => {
    e; // $ExpectType unknown
});
bb.addListener('close', () => {});
// @ts-expect-error
bb.addListener('close', foo => {});
// test fallback
bb.on('foo', foo => {
    foo; // $ExpectType any
});
bb.on(Symbol('foo'), foo => {
    foo; // $ExpectType any
});

bb.on('file', (name, stream, info) => {
    name; // $ExpectType string
    stream; // $ExpectType Readable
    info; // $ExpectType FileInfo
});
bb.on('field', (name, value, info) => {
    name; // $ExpectType string
    value; // $ExpectType string
    info; // $ExpectType FieldInfo
});
bb.on('partsLimit', () => {});
// @ts-expect-error
bb.on('partsLimit', foo => {});
bb.on('filesLimit', () => {});
// @ts-expect-error
bb.on('filesLimit', foo => {});
bb.on('fieldsLimit', () => {});
// @ts-expect-error
bb.on('fieldsLimit', foo => {});
bb.on('error', e => {
    e; // $ExpectType unknown
});
bb.on('close', () => {});
// @ts-expect-error
bb.on('close', foo => {});
// test fallback
bb.on('foo', foo => {
    foo; // $ExpectType any
});
bb.on(Symbol('foo'), foo => {
    foo; // $ExpectType any
});

bb.once('file', (name, stream, info) => {
    name; // $ExpectType string
    stream; // $ExpectType Readable
    info; // $ExpectType FileInfo
});
bb.once('field', (name, value, info) => {
    name; // $ExpectType string
    value; // $ExpectType string
    info; // $ExpectType FieldInfo
});
bb.once('partsLimit', () => {});
// @ts-expect-error
bb.once('partsLimit', foo => {});
bb.once('filesLimit', () => {});
// @ts-expect-error
bb.once('filesLimit', foo => {});
bb.once('fieldsLimit', () => {});
// @ts-expect-error
bb.once('fieldsLimit', foo => {});
bb.once('error', e => {
    e; // $ExpectType unknown
});
bb.once('close', () => {});
// @ts-expect-error
bb.once('close', foo => {});
// test fallback
bb.once('foo', foo => {
    foo; // $ExpectType any
});
bb.once(Symbol('foo'), foo => {
    foo; // $ExpectType any
});

bb.removeListener('file', (name, stream, info) => {
    name; // $ExpectType string
    stream; // $ExpectType Readable
    info; // $ExpectType FileInfo
});
bb.removeListener('field', (name, value, info) => {
    name; // $ExpectType string
    value; // $ExpectType string
    info; // $ExpectType FieldInfo
});
bb.removeListener('partsLimit', () => {});
// @ts-expect-error
bb.removeListener('partsLimit', foo => {});
bb.removeListener('filesLimit', () => {});
// @ts-expect-error
bb.removeListener('filesLimit', foo => {});
bb.removeListener('fieldsLimit', () => {});
// @ts-expect-error
bb.removeListener('fieldsLimit', foo => {});
bb.removeListener('error', e => {
    e; // $ExpectType unknown
});
bb.removeListener('close', () => {});
// @ts-expect-error
bb.removeListener('close', foo => {});
// test fallback
bb.removeListener('foo', foo => {
    foo; // $ExpectType any
});
bb.removeListener(Symbol('foo'), foo => {
    foo; // $ExpectType any
});

bb.off('file', (name, stream, info) => {
    name; // $ExpectType string
    stream; // $ExpectType Readable
    info; // $ExpectType FileInfo
});
bb.off('field', (name, value, info) => {
    name; // $ExpectType string
    value; // $ExpectType string
    info; // $ExpectType FieldInfo
});
bb.off('partsLimit', () => {});
// @ts-expect-error
bb.off('partsLimit', foo => {});
bb.off('filesLimit', () => {});
// @ts-expect-error
bb.off('filesLimit', foo => {});
bb.off('fieldsLimit', () => {});
// @ts-expect-error
bb.off('fieldsLimit', foo => {});
bb.off('error', e => {
    e; // $ExpectType unknown
});
bb.off('close', () => {});
// @ts-expect-error
bb.off('close', foo => {});
// test fallback
bb.off('foo', foo => {
    foo; // $ExpectType any
});
bb.off(Symbol('foo'), foo => {
    foo; // $ExpectType any
});

bb.prependListener('file', (name, stream, info) => {
    name; // $ExpectType string
    stream; // $ExpectType Readable
    info; // $ExpectType FileInfo
});
bb.prependListener('field', (name, value, info) => {
    name; // $ExpectType string
    value; // $ExpectType string
    info; // $ExpectType FieldInfo
});
bb.prependListener('partsLimit', () => {});
// @ts-expect-error
bb.prependListener('partsLimit', foo => {});
bb.prependListener('filesLimit', () => {});
// @ts-expect-error
bb.prependListener('filesLimit', foo => {});
bb.prependListener('fieldsLimit', () => {});
// @ts-expect-error
bb.prependListener('fieldsLimit', foo => {});
bb.prependListener('error', e => {
    e; // $ExpectType unknown
});
bb.prependListener('close', () => {});
// @ts-expect-error
bb.prependListener('close', foo => {});
// test fallback
bb.prependListener('foo', foo => {
    foo; // $ExpectType any
});
bb.prependListener(Symbol('foo'), foo => {
    foo; // $ExpectType any
});

bb.prependOnceListener('file', (name, stream, info) => {
    name; // $ExpectType string
    stream; // $ExpectType Readable
    info; // $ExpectType FileInfo
});
bb.prependOnceListener('field', (name, value, info) => {
    name; // $ExpectType string
    value; // $ExpectType string
    info; // $ExpectType FieldInfo
});
bb.prependOnceListener('partsLimit', () => {});
// @ts-expect-error
bb.prependOnceListener('partsLimit', foo => {});
bb.prependOnceListener('filesLimit', () => {});
// @ts-expect-error
bb.prependOnceListener('filesLimit', foo => {});
bb.prependOnceListener('fieldsLimit', () => {});
// @ts-expect-error
bb.prependOnceListener('fieldsLimit', foo => {});
bb.prependOnceListener('error', e => {
    e; // $ExpectType unknown
});
bb.prependOnceListener('close', () => {});
// @ts-expect-error
bb.prependOnceListener('close', foo => {});
// test fallback
bb.prependOnceListener('foo', foo => {
    foo; // $ExpectType any
});
bb.prependOnceListener(Symbol('foo'), foo => {
    foo; // $ExpectType any
});
