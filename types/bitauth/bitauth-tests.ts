import * as bitauth from 'bitauth';

const keys = bitauth.generateSin();

let pubKey = bitauth.getPublicKeyFromPrivateKey(keys.priv);
pubKey = bitauth.getPublicKeyFromPrivateKey(keys.priv);
bitauth.getSinFromPublicKey(keys.pub);
const contract = 'something to sign';
const signature = bitauth.sign(contract, keys.priv);
let verified = bitauth.verifySignature(contract, keys.pub, signature);
bitauth.verifySignature(contract, keys.pub, signature, (err?: Error, valid?: boolean) => {
    verified = err ? false : valid;
});
let valid = bitauth.validateSin(keys.sin);
bitauth.validateSin(keys.sin, (err?: Error) => {
    valid = err ? false : true;
});

const secret = 'o hai, nsa. how i do teh cryptos?';
const password = 's4705hiru13z!';

const enc = bitauth.encrypt(password, secret);
bitauth.decrypt(password, enc);
