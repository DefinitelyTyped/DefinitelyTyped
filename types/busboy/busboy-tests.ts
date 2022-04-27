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
bb.addListener('partsLimit', foo => {}); // $ExpectError
bb.addListener('filesLimit', () => {});
bb.addListener('filesLimit', foo => {}); // $ExpectError
bb.addListener('fieldsLimit', () => {});
bb.addListener('fieldsLimit', foo => {}); // $ExpectError
bb.addListener('error', e => {
    e; // $ExpectType unknown
});
bb.addListener('close', () => {});
bb.addListener('close', foo => {}); // $ExpectError
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
bb.on('partsLimit', foo => {}); // $ExpectError
bb.on('filesLimit', () => {});
bb.on('filesLimit', foo => {}); // $ExpectError
bb.on('fieldsLimit', () => {});
bb.on('fieldsLimit', foo => {}); // $ExpectError
bb.on('error', e => {
    e; // $ExpectType unknown
});
bb.on('close', () => {});
bb.on('close', foo => {}); // $ExpectError
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
bb.once('partsLimit', foo => {}); // $ExpectError
bb.once('filesLimit', () => {});
bb.once('filesLimit', foo => {}); // $ExpectError
bb.once('fieldsLimit', () => {});
bb.once('fieldsLimit', foo => {}); // $ExpectError
bb.once('error', e => {
    e; // $ExpectType unknown
});
bb.once('close', () => {});
bb.once('close', foo => {}); // $ExpectError
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
bb.removeListener('partsLimit', foo => {}); // $ExpectError
bb.removeListener('filesLimit', () => {});
bb.removeListener('filesLimit', foo => {}); // $ExpectError
bb.removeListener('fieldsLimit', () => {});
bb.removeListener('fieldsLimit', foo => {}); // $ExpectError
bb.removeListener('error', e => {
    e; // $ExpectType unknown
});
bb.removeListener('close', () => {});
bb.removeListener('close', foo => {}); // $ExpectError
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
bb.off('partsLimit', foo => {}); // $ExpectError
bb.off('filesLimit', () => {});
bb.off('filesLimit', foo => {}); // $ExpectError
bb.off('fieldsLimit', () => {});
bb.off('fieldsLimit', foo => {}); // $ExpectError
bb.off('error', e => {
    e; // $ExpectType unknown
});
bb.off('close', () => {});
bb.off('close', foo => {}); // $ExpectError
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
bb.prependListener('partsLimit', foo => {}); // $ExpectError
bb.prependListener('filesLimit', () => {});
bb.prependListener('filesLimit', foo => {}); // $ExpectError
bb.prependListener('fieldsLimit', () => {});
bb.prependListener('fieldsLimit', foo => {}); // $ExpectError
bb.prependListener('error', e => {
    e; // $ExpectType unknown
});
bb.prependListener('close', () => {});
bb.prependListener('close', foo => {}); // $ExpectError
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
bb.prependOnceListener('partsLimit', foo => {}); // $ExpectError
bb.prependOnceListener('filesLimit', () => {});
bb.prependOnceListener('filesLimit', foo => {}); // $ExpectError
bb.prependOnceListener('fieldsLimit', () => {});
bb.prependOnceListener('fieldsLimit', foo => {}); // $ExpectError
bb.prependOnceListener('error', e => {
    e; // $ExpectType unknown
});
bb.prependOnceListener('close', () => {});
bb.prependOnceListener('close', foo => {}); // $ExpectError
// test fallback
bb.prependOnceListener('foo', foo => {
    foo; // $ExpectType any
});
bb.prependOnceListener(Symbol('foo'), foo => {
    foo; // $ExpectType any
});
