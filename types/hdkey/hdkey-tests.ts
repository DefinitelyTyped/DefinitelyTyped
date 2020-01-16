import HDKey = require('hdkey');
const hdKey = new HDKey();
hdKey.derive('m/1/42');
hdKey.privateKey;
hdKey.publicKey;
hdKey.chainCode;
hdKey.toJSON();
HDKey.fromJSON({ xpriv: '', xpub: '' });
