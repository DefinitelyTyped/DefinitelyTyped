import decrypt = require('ssh-key-decrypt');

decrypt('', ''); // $ExpectType Buffer
decrypt(new Buffer(''), ''); // $ExpectType Buffer
decrypt('', '', 'buffer'); // $ExpectType Buffer
decrypt(new Buffer(''), '', 'buffer'); // $ExpectType Buffer
decrypt('', '', 'latin1'); // $ExpectType string
decrypt(new Buffer(''), '', 'latin1'); // $ExpectType string
