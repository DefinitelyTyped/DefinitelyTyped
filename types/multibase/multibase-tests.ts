import multibase = require('./index')

const m = multibase('foo', Buffer.from('foo'));

let code: multibase.Base | undefined = multibase.codes['foo']

let encoded: Buffer = multibase.encode('foo', Buffer.from('foo'));

let decoded: Buffer = multibase.decode('string')
decoded = multibase.decode(Buffer.from('string', 'utf8'))

let isEncoded: boolean = multibase.isEncoded(decoded)

let base: multibase.Base = multibase.getBase('x');
