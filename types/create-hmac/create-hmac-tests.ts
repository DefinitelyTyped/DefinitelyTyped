import createHmac = require('create-hmac');

const hmac = createHmac('sha224', Buffer.from('secret key'));

hmac.update('synchronous write');
hmac.digest();
hmac.write('write to it as a stream');
hmac.end();
hmac.read();
