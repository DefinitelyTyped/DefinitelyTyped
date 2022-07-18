import Busboy = require('busboy');

// test type exports
type Constructor = Busboy.BusboyConstructor;
type Config = Busboy.BusboyConfig;
type Headers = Busboy.BusboyHeaders;
type BB = Busboy.Busboy;
type Events = Busboy.BusboyEvents;

// @ts-expect-error
new Busboy({});
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
// @ts-expect-error
busboy.addListener('partsLimit', foo => {});
busboy.addListener('filesLimit', () => {});
// @ts-expect-error
busboy.addListener('filesLimit', foo => {});
busboy.addListener('fieldsLimit', () => {});
// @ts-expect-error
busboy.addListener('fieldsLimit', foo => {});
busboy.addListener('error', e => {
    e; // $ExpectType unknown
});
busboy.addListener('finish', () => {});
// @ts-expect-error
busboy.addListener('finish', foo => {});
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
// @ts-expect-error
busboy.on('partsLimit', foo => {});
busboy.on('filesLimit', () => {});
// @ts-expect-error
busboy.on('filesLimit', foo => {});
busboy.on('fieldsLimit', () => {});
// @ts-expect-error
busboy.on('fieldsLimit', foo => {});
busboy.on('error', e => {
    e; // $ExpectType unknown
});
busboy.on('finish', () => {});
// @ts-expect-error
busboy.on('finish', foo => {});
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
// @ts-expect-error
busboy.once('partsLimit', foo => {});
busboy.once('filesLimit', () => {});
// @ts-expect-error
busboy.once('filesLimit', foo => {});
busboy.once('fieldsLimit', () => {});
// @ts-expect-error
busboy.once('fieldsLimit', foo => {});
busboy.once('error', e => {
    e; // $ExpectType unknown
});
busboy.once('finish', () => {});
// @ts-expect-error
busboy.once('finish', foo => {});
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
// @ts-expect-error
busboy.removeListener('partsLimit', foo => {});
busboy.removeListener('filesLimit', () => {});
// @ts-expect-error
busboy.removeListener('filesLimit', foo => {});
busboy.removeListener('fieldsLimit', () => {});
// @ts-expect-error
busboy.removeListener('fieldsLimit', foo => {});
busboy.removeListener('error', e => {
    e; // $ExpectType unknown
});
busboy.removeListener('finish', () => {});
// @ts-expect-error
busboy.removeListener('finish', foo => {});
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
// @ts-expect-error
busboy.off('partsLimit', foo => {});
busboy.off('filesLimit', () => {});
// @ts-expect-error
busboy.off('filesLimit', foo => {});
busboy.off('fieldsLimit', () => {});
// @ts-expect-error
busboy.off('fieldsLimit', foo => {});
busboy.off('error', e => {
    e; // $ExpectType unknown
});
busboy.off('finish', () => {});
// @ts-expect-error
busboy.off('finish', foo => {});
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
// @ts-expect-error
busboy.prependListener('partsLimit', foo => {});
busboy.prependListener('filesLimit', () => {});
// @ts-expect-error
busboy.prependListener('filesLimit', foo => {});
busboy.prependListener('fieldsLimit', () => {});
// @ts-expect-error
busboy.prependListener('fieldsLimit', foo => {});
busboy.prependListener('error', e => {
    e; // $ExpectType unknown
});
busboy.prependListener('finish', () => {});
// @ts-expect-error
busboy.prependListener('finish', foo => {});
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
// @ts-expect-error
busboy.prependOnceListener('partsLimit', foo => {});
busboy.prependOnceListener('filesLimit', () => {});
// @ts-expect-error
busboy.prependOnceListener('filesLimit', foo => {});
busboy.prependOnceListener('fieldsLimit', () => {});
// @ts-expect-error
busboy.prependOnceListener('fieldsLimit', foo => {});
busboy.prependOnceListener('error', e => {
    e; // $ExpectType unknown
});
busboy.prependOnceListener('finish', () => {});
// @ts-expect-error
busboy.prependOnceListener('finish', foo => {});
// test fallback
busboy.prependOnceListener('foo', foo => {
    foo; // $ExpectType any
});
busboy.prependOnceListener(Symbol('foo'), foo => {
    foo; // $ExpectType any
});
