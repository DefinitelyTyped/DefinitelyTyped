import Busboy = require('busboy');

// test type exports
type Constructor = Busboy.BusboyConstructor;
type Config = Busboy.BusboyConfig;
type Headers = Busboy.BusboyHeaders;
type BB = Busboy.Busboy;
type Events = Busboy.BusboyEvents;

new Busboy({}); // $ExpectError
const busboy = Busboy({ headers: { 'content-type': 'foo' } }); // $ExpectType Busboy
new Busboy({ headers: { 'content-type': 'foo' } }); // $ExpectType Busboy
new Busboy({ headers: { 'content-type': 'foo' }, highWaterMark: 1000 }); // $ExpectType Busboy
new Busboy({ headers: { 'content-type': 'foo' }, fileHwm: 1000 }); // $ExpectType Busboy
new Busboy({ headers: { 'content-type': 'foo' }, defCharset: 'utf8' }); // $ExpectType Busboy
new Busboy({ headers: { 'content-type': 'foo' }, preservePath: true }); // $ExpectType Busboy
new Busboy({ headers: { 'content-type': 'foo' }, limits: { fieldNameSize: 200 } }); // $ExpectType Busboy
new Busboy({ headers: { 'content-type': 'foo' }, limits: { fieldSize: 200 } }); // $ExpectType Busboy
new Busboy({ headers: { 'content-type': 'foo' }, limits: { fields: 200 } }); // $ExpectType Busboy
new Busboy({ headers: { 'content-type': 'foo' }, limits: { fileSize: 200 } }); // $ExpectType Busboy
new Busboy({ headers: { 'content-type': 'foo' }, limits: { files: 200 } }); // $ExpectType Busboy
new Busboy({ headers: { 'content-type': 'foo' }, limits: { parts: 200 } }); // $ExpectType Busboy
new Busboy({ headers: { 'content-type': 'foo' }, limits: { headerPairs: 200 } }); // $ExpectType Busboy

busboy.addListener('file', (fieldname, file, filename, encoding, mimetype) => {
    fieldname; // $ExpectType string
    file; // $ExpectType Readable
    filename; // $ExpectType string
    encoding; // $ExpectType string
    mimetype; // $ExpectType string
});
busboy.addListener('field', (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) => {
    fieldname; // $ExpectType string
    val; // $ExpectType string
    fieldnameTruncated; // $ExpectType boolean
    valTruncated; // $ExpectType boolean
    encoding; // $ExpectType string
    mimetype; // $ExpectType string
});
busboy.addListener('partsLimit', () => {});
busboy.addListener('partsLimit', foo => {}); // $ExpectError
busboy.addListener('filesLimit', () => {});
busboy.addListener('filesLimit', foo => {}); // $ExpectError
busboy.addListener('fieldsLimit', () => {});
busboy.addListener('fieldsLimit', foo => {}); // $ExpectError
busboy.addListener('error', e => {
    e; // $ExpectType unknown
});
busboy.addListener('finish', () => {});
busboy.addListener('finish', foo => {}); // $ExpectError
// test fallback
busboy.on('foo', foo => {
    foo; // $ExpectType any
});
busboy.on(Symbol('foo'), foo => {
    foo; // $ExpectType any
});

busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    fieldname; // $ExpectType string
    file; // $ExpectType Readable
    filename; // $ExpectType string
    encoding; // $ExpectType string
    mimetype; // $ExpectType string
});
busboy.on('field', (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) => {
    fieldname; // $ExpectType string
    val; // $ExpectType string
    fieldnameTruncated; // $ExpectType boolean
    valTruncated; // $ExpectType boolean
    encoding; // $ExpectType string
    mimetype; // $ExpectType string
});
busboy.on('partsLimit', () => {});
busboy.on('partsLimit', foo => {}); // $ExpectError
busboy.on('filesLimit', () => {});
busboy.on('filesLimit', foo => {}); // $ExpectError
busboy.on('fieldsLimit', () => {});
busboy.on('fieldsLimit', foo => {}); // $ExpectError
busboy.on('error', e => {
    e; // $ExpectType unknown
});
busboy.on('finish', () => {});
busboy.on('finish', foo => {}); // $ExpectError
// test fallback
busboy.on('foo', foo => {
    foo; // $ExpectType any
});
busboy.on(Symbol('foo'), foo => {
    foo; // $ExpectType any
});

busboy.once('file', (fieldname, file, filename, encoding, mimetype) => {
    fieldname; // $ExpectType string
    file; // $ExpectType Readable
    filename; // $ExpectType string
    encoding; // $ExpectType string
    mimetype; // $ExpectType string
});
busboy.once('field', (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) => {
    fieldname; // $ExpectType string
    val; // $ExpectType string
    fieldnameTruncated; // $ExpectType boolean
    valTruncated; // $ExpectType boolean
    encoding; // $ExpectType string
    mimetype; // $ExpectType string
});
busboy.once('partsLimit', () => {});
busboy.once('partsLimit', foo => {}); // $ExpectError
busboy.once('filesLimit', () => {});
busboy.once('filesLimit', foo => {}); // $ExpectError
busboy.once('fieldsLimit', () => {});
busboy.once('fieldsLimit', foo => {}); // $ExpectError
busboy.once('error', e => {
    e; // $ExpectType unknown
});
busboy.once('finish', () => {});
busboy.once('finish', foo => {}); // $ExpectError
// test fallback
busboy.once('foo', foo => {
    foo; // $ExpectType any
});
busboy.once(Symbol('foo'), foo => {
    foo; // $ExpectType any
});

busboy.removeListener('file', (fieldname, file, filename, encoding, mimetype) => {
    fieldname; // $ExpectType string
    file; // $ExpectType Readable
    filename; // $ExpectType string
    encoding; // $ExpectType string
    mimetype; // $ExpectType string
});
busboy.removeListener('field', (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) => {
    fieldname; // $ExpectType string
    val; // $ExpectType string
    fieldnameTruncated; // $ExpectType boolean
    valTruncated; // $ExpectType boolean
    encoding; // $ExpectType string
    mimetype; // $ExpectType string
});
busboy.removeListener('partsLimit', () => {});
busboy.removeListener('partsLimit', foo => {}); // $ExpectError
busboy.removeListener('filesLimit', () => {});
busboy.removeListener('filesLimit', foo => {}); // $ExpectError
busboy.removeListener('fieldsLimit', () => {});
busboy.removeListener('fieldsLimit', foo => {}); // $ExpectError
busboy.removeListener('error', e => {
    e; // $ExpectType unknown
});
busboy.removeListener('finish', () => {});
busboy.removeListener('finish', foo => {}); // $ExpectError
// test fallback
busboy.removeListener('foo', foo => {
    foo; // $ExpectType any
});
busboy.removeListener(Symbol('foo'), foo => {
    foo; // $ExpectType any
});

busboy.off('file', (fieldname, file, filename, encoding, mimetype) => {
    fieldname; // $ExpectType string
    file; // $ExpectType Readable
    filename; // $ExpectType string
    encoding; // $ExpectType string
    mimetype; // $ExpectType string
});
busboy.off('field', (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) => {
    fieldname; // $ExpectType string
    val; // $ExpectType string
    fieldnameTruncated; // $ExpectType boolean
    valTruncated; // $ExpectType boolean
    encoding; // $ExpectType string
    mimetype; // $ExpectType string
});
busboy.off('partsLimit', () => {});
busboy.off('partsLimit', foo => {}); // $ExpectError
busboy.off('filesLimit', () => {});
busboy.off('filesLimit', foo => {}); // $ExpectError
busboy.off('fieldsLimit', () => {});
busboy.off('fieldsLimit', foo => {}); // $ExpectError
busboy.off('error', e => {
    e; // $ExpectType unknown
});
busboy.off('finish', () => {});
busboy.off('finish', foo => {}); // $ExpectError
// test fallback
busboy.off('foo', foo => {
    foo; // $ExpectType any
});
busboy.off(Symbol('foo'), foo => {
    foo; // $ExpectType any
});

busboy.prependListener('file', (fieldname, file, filename, encoding, mimetype) => {
    fieldname; // $ExpectType string
    file; // $ExpectType Readable
    filename; // $ExpectType string
    encoding; // $ExpectType string
    mimetype; // $ExpectType string
});
busboy.prependListener('field', (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) => {
    fieldname; // $ExpectType string
    val; // $ExpectType string
    fieldnameTruncated; // $ExpectType boolean
    valTruncated; // $ExpectType boolean
    encoding; // $ExpectType string
    mimetype; // $ExpectType string
});
busboy.prependListener('partsLimit', () => {});
busboy.prependListener('partsLimit', foo => {}); // $ExpectError
busboy.prependListener('filesLimit', () => {});
busboy.prependListener('filesLimit', foo => {}); // $ExpectError
busboy.prependListener('fieldsLimit', () => {});
busboy.prependListener('fieldsLimit', foo => {}); // $ExpectError
busboy.prependListener('error', e => {
    e; // $ExpectType unknown
});
busboy.prependListener('finish', () => {});
busboy.prependListener('finish', foo => {}); // $ExpectError
// test fallback
busboy.prependListener('foo', foo => {
    foo; // $ExpectType any
});
busboy.prependListener(Symbol('foo'), foo => {
    foo; // $ExpectType any
});

busboy.prependOnceListener('file', (fieldname, file, filename, encoding, mimetype) => {
    fieldname; // $ExpectType string
    file; // $ExpectType Readable
    filename; // $ExpectType string
    encoding; // $ExpectType string
    mimetype; // $ExpectType string
});
busboy.prependOnceListener('field', (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) => {
    fieldname; // $ExpectType string
    val; // $ExpectType string
    fieldnameTruncated; // $ExpectType boolean
    valTruncated; // $ExpectType boolean
    encoding; // $ExpectType string
    mimetype; // $ExpectType string
});
busboy.prependOnceListener('partsLimit', () => {});
busboy.prependOnceListener('partsLimit', foo => {}); // $ExpectError
busboy.prependOnceListener('filesLimit', () => {});
busboy.prependOnceListener('filesLimit', foo => {}); // $ExpectError
busboy.prependOnceListener('fieldsLimit', () => {});
busboy.prependOnceListener('fieldsLimit', foo => {}); // $ExpectError
busboy.prependOnceListener('error', e => {
    e; // $ExpectType unknown
});
busboy.prependOnceListener('finish', () => {});
busboy.prependOnceListener('finish', foo => {}); // $ExpectError
// test fallback
busboy.prependOnceListener('foo', foo => {
    foo; // $ExpectType any
});
busboy.prependOnceListener(Symbol('foo'), foo => {
    foo; // $ExpectType any
});
