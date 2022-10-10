import rndm = require('rndm');

function tests() {
    rndm(32);
    rndm.base62(16);
    rndm.base10(16);
    rndm.base36(16);

    const createFunc = rndm.create('abcd');
    createFunc(30);
}
