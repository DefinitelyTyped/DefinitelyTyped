import * as dh from 'diffie-hellman';

const dh1 = dh.getDiffieHellman('modp1');
// $ExpectType DiffieHellman
dh1;
// $ExpectType Buffer
dh1.generateKeys();
// $ExpectType string
dh1.generateKeys('hex');
// $ExpectType Buffer
dh1.getPrime();
// $ExpectType string
dh1.getPrime('hex');
// $ExpectType Buffer
dh1.getGenerator();
// $ExpectType string
dh1.getGenerator('hex');
const pk = dh1.getPublicKey();
// $ExpectType Buffer
pk;
// $ExpectType string
dh1.getPublicKey('hex');
// $ExpectType Buffer
dh1.getPrivateKey();
// $ExpectType string
dh1.getPrivateKey('hex');
// $ExpectType Buffer
dh1.computeSecret(pk);
// $ExpectType Buffer
dh1.computeSecret(pk.toString('hex'), 'hex');
// $ExpectType string
dh1.computeSecret(pk.toString('hex'), 'hex', 'hex');

const dh2 = dh.createDiffieHellman(new Buffer([5]));
// $ExpectType DiffieHellman
dh2;
dh.createDiffieHellman('prime', 'hex');
dh.createDiffieHellman('prime', 'hex', new Buffer([5]));
dh.createDiffieHellman('prime', 'hex', 5);
dh.createDiffieHellman('prime', 'hex', 'generator', 'hex');
dh.createDiffieHellman(1);
dh.createDiffieHellman(1, 1);
dh.createDiffieHellman(1, new Buffer([5]));

dh2.setPublicKey(pk);
dh2.setPublicKey(pk.toString('hex'), 'hex');
dh2.setPrivateKey(pk);
dh2.setPrivateKey(pk.toString('hex'), 'hex');
