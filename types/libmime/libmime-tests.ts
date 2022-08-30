import * as libmime from 'libmime';

// test type exports
type MimeWordEncoding = libmime.MimeWordEncoding;
type StructuredHeader = libmime.StructuredHeader;

libmime.encodeWord('foo'); // $ExpectType string
libmime.encodeWord('foo', 'Q'); // $ExpectType string
libmime.encodeWord('foo', 'B'); // $ExpectType string
libmime.encodeWord('foo', 'Q', 1); // $ExpectType string
libmime.encodeWord('foo', 'B', 1); // $ExpectType string
libmime.encodeWord(Buffer.from('foo')); // $ExpectType string
libmime.encodeWord(Buffer.from('foo'), 'Q'); // $ExpectType string
libmime.encodeWord(Buffer.from('foo'), 'B'); // $ExpectType string
libmime.encodeWord(Buffer.from('foo'), 'Q', 1); // $ExpectType string
libmime.encodeWord(Buffer.from('foo'), 'B', 1); // $ExpectType string

libmime.encodeWords('foo'); // $ExpectType string
libmime.encodeWords('foo', 'Q'); // $ExpectType string
libmime.encodeWords('foo', 'B'); // $ExpectType string
libmime.encodeWords('foo', 'Q', 1); // $ExpectType string
libmime.encodeWords('foo', 'B', 1); // $ExpectType string
libmime.encodeWords('foo', 'Q', 1, 'UTF-8'); // $ExpectType string
libmime.encodeWords('foo', 'B', 1, 'UTF-8'); // $ExpectType string
libmime.encodeWords('foo', 'Q', 'UTF-8'); // $ExpectType string
libmime.encodeWords('foo', 'B', 'UTF-8'); // $ExpectType string
libmime.encodeWords(Buffer.from('foo')); // $ExpectType string
libmime.encodeWords(Buffer.from('foo'), 'Q'); // $ExpectType string
libmime.encodeWords(Buffer.from('foo'), 'B'); // $ExpectType string
libmime.encodeWords(Buffer.from('foo'), 'Q', 1); // $ExpectType string
libmime.encodeWords(Buffer.from('foo'), 'B', 1); // $ExpectType string
libmime.encodeWords(Buffer.from('foo'), 'Q', 1, 'UTF-8'); // $ExpectType string
libmime.encodeWords(Buffer.from('foo'), 'B', 1, 'UTF-8'); // $ExpectType string
libmime.encodeWords(Buffer.from('foo'), 'Q', 'UTF-8'); // $ExpectType string
libmime.encodeWords(Buffer.from('foo'), 'B', 'UTF-8'); // $ExpectType string

libmime.decodeWord('UTF-8', 'Q', 'foo'); // $ExpectType string
libmime.decodeWord('UTF-8', 'B', 'foo'); // $ExpectType string

libmime.decodeWords('foo'); // $ExpectType string

libmime.foldLines('foo'); // $ExpectType string
libmime.foldLines('foo', 10); // $ExpectType string
libmime.foldLines('foo', 10, true); // $ExpectType string

libmime.encodeFlowed('foo'); // $ExpectType string
libmime.encodeFlowed('foo', 10); // $ExpectType string

libmime.decodeFlowed('foo'); // $ExpectType string
libmime.decodeFlowed('foo', true); // $ExpectType string

libmime.decodeHeader('foo'); // $ExpectType { key: string; value: string; }

libmime.decodeHeaders('foo'); // $ExpectType { [key: string]: string[]; }

const header = libmime.parseHeaderValue('foo'); // $ExpectType StructuredHeader

libmime.buildHeaderValue(header); // $ExpectType string

libmime.buildHeaderParam('filename', 'bla.txt'); // $ExpectType { key: string; value: string; }[]
libmime.buildHeaderParam('filename', 'bla.txt', 1); // $ExpectType { key: string; value: string; }[]
libmime.buildHeaderParam('filename', 'bla.txt', 1, 'UTF-8'); // $ExpectType { key: string; value: string; }[]
libmime.buildHeaderParam('filename', Buffer.from('bla.txt')); // $ExpectType { key: string; value: string; }[]
libmime.buildHeaderParam('filename', Buffer.from('bla.txt'), 1); // $ExpectType { key: string; value: string; }[]
libmime.buildHeaderParam('filename', Buffer.from('bla.txt'), 1, 'UTF-8'); // $ExpectType { key: string; value: string; }[]

libmime.detectExtension('image/jpeg'); // $ExpectType string

libmime.detectMimeType('logo.jpg'); // $ExpectType string
