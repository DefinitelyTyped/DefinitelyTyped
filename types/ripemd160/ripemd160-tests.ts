import RIPEMD160 = require('ripemd160');

new RIPEMD160().update('42').digest('hex');

const ripemd160stream = new RIPEMD160();
ripemd160stream.end('42');
(ripemd160stream.read() as Buffer).toString('hex');
