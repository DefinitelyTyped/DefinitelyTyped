import multicodec = require('./index');

const added: Buffer = multicodec.addPrefix(multicodec.SHA1, Buffer.from('foo'));

const rmed: Buffer = multicodec.rmPrefix(Buffer.from('foo'));
