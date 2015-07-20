/// <reference path="./sjcl.d.ts" /> 

var b: boolean;
var n: number;
var s: string;
var bn: sjcl.BigNumber;
var ba: sjcl.BitArray;

function testBigNumber() {
    bn = new sjcl.bn();
    bn = new sjcl.bn(0);
    bn = new sjcl.bn("0");
    bn = new sjcl.bn(bn);

    bn = bn.initWith(0);
    bn = bn.initWith("0");
    bn = bn.initWith(bn);

    bn = bn.addM(0);
    bn = bn.addM("0");
    bn = bn.addM(bn);

    bn = bn.subM(0);
    bn = bn.subM("0");
    bn = bn.subM(bn);

    bn = bn.mod(0);
    bn = bn.mod("0");
    bn = bn.mod(bn);

    bn = bn.inverseMod(0);
    bn = bn.inverseMod("0");
    bn = bn.inverseMod(bn);

    bn = bn.add(0);
    bn = bn.add("0");
    bn = bn.add(bn);

    bn = bn.sub(0);
    bn = bn.sub("0");
    bn = bn.sub(bn);

    bn = bn.mul(0);
    bn = bn.mul("0");
    bn = bn.mul(bn);

    bn = bn.mulmod(0, 0);
    bn = bn.mulmod(0, "0");
    bn = bn.mulmod(0, bn);
    bn = bn.mulmod("0", 0);
    bn = bn.mulmod("0", "0");
    bn = bn.mulmod("0", bn);
    bn = bn.mulmod(bn, 0);
    bn = bn.mulmod(bn, "0");
    bn = bn.mulmod(bn, bn);

    bn = bn.powermod(0, 0);
    bn = bn.powermod(0, "0");
    bn = bn.powermod(0, bn);
    bn = bn.powermod("0", 0);
    bn = bn.powermod("0", "0");
    bn = bn.powermod("0", bn);
    bn = bn.powermod(bn, 0);
    bn = bn.powermod(bn, "0");
    bn = bn.powermod(bn, bn);

    bn = bn.copy();

    b = bn.equals(0);
    b = bn.equals(bn);

    b = bn.greaterEquals(0);
    b = bn.greaterEquals(bn);

    n = bn.getLimb(0);

    s = bn.toString();

    bn = bn.doubleM();

    bn = bn.halveM();

    bn = bn.square();

    bn = bn.power(1);
    bn = bn.power([1, 1]);
    bn = bn.power(bn);

    bn = bn.trim();

    bn = bn.reduce();

    bn = bn.fullReduce();

    bn = bn.normalize();

    bn = bn.cnormalize();

    ba = bn.toBits();
    ba = bn.toBits(1);

    n = bn.bitLength();

    bn = sjcl.bn.fromBits(ba);
}

function testBitArray() {
    ba = sjcl.bitArray.bitSlice(ba, 0, 1);

    n = sjcl.bitArray.extract(ba, 0, 1);

    ba = sjcl.bitArray.concat(ba, ba);

    n = sjcl.bitArray.bitLength(ba);

    ba = sjcl.bitArray.clamp(ba, 0);

    n = sjcl.bitArray.partial(1, 1);
    n = sjcl.bitArray.partial(1, 1, 0);

    n = sjcl.bitArray.getPartial(0);

    b = sjcl.bitArray.equal(ba, ba);

    ba = sjcl.bitArray._shiftRight(ba, 0);
    ba = sjcl.bitArray._shiftRight(ba, 0, 0);
    ba = sjcl.bitArray._shiftRight(ba, 0, 0, ba);
}

function testCodecs() {
    s = sjcl.codec.base64.fromBits(ba);
    ba = sjcl.codec.base64.toBits(s);

    s = sjcl.codec.base64url.fromBits(ba);
    ba = sjcl.codec.base64url.toBits(s);

    s = sjcl.codec.hex.fromBits(ba);
    ba = sjcl.codec.hex.toBits(s);

    s = sjcl.codec.utf8String.fromBits(ba);
    ba = sjcl.codec.utf8String.toBits(s);

    var bytes: number[] = sjcl.codec.bytes.fromBits(ba);
    ba = sjcl.codec.bytes.toBits(bytes);
}

function testHashes() {
    var hash: sjcl.SjclHash;
    ba = hash.reset().update("xxx").update(ba).finalize();

    hash = new sjcl.hash.sha1();
    hash = new sjcl.hash.sha1(hash);
    ba = sjcl.hash.sha1.hash(ba);
    ba = sjcl.hash.sha1.hash("xxx");

    hash = new sjcl.hash.sha256();
    hash = new sjcl.hash.sha256(hash);
    ba = sjcl.hash.sha256.hash(ba);
    ba = sjcl.hash.sha256.hash("xxx");

    hash = new sjcl.hash.sha512();
    hash = new sjcl.hash.sha512(hash);
    ba = sjcl.hash.sha512.hash(ba);
    ba = sjcl.hash.sha512.hash("xxx");
}

function testSymetric() {
    var aes = new sjcl.cipher.aes([0, 0, 0, 0]);

    ba = sjcl.mode.cbc.encrypt(aes, ba, ba);
    ba = sjcl.mode.cbc.encrypt(aes, ba, ba, ba);

    ba = sjcl.mode.gcm.encrypt(aes, ba, ba);
    ba = sjcl.mode.gcm.encrypt(aes, ba, ba, ba);
    ba = sjcl.mode.gcm.encrypt(aes, ba, ba, ba, 128);

    ba = sjcl.mode.ccm.encrypt(aes, ba, ba);
    ba = sjcl.mode.ccm.encrypt(aes, ba, ba, ba);
    ba = sjcl.mode.ccm.encrypt(aes, ba, ba, ba, 128);

    ba = sjcl.mode.ocb2.encrypt(aes, ba, ba);
    ba = sjcl.mode.ocb2.encrypt(aes, ba, ba, ba);
    ba = sjcl.mode.ocb2.encrypt(aes, ba, ba, ba, 128);
    ba = sjcl.mode.ocb2.encrypt(aes, ba, ba, ba, 128, false);
}

function testHmacPbdkf2() {
    ba = sjcl.misc.pbkdf2("xxx", "xxx");
    ba = sjcl.misc.pbkdf2("xxx", "xxx", 1000);
    ba = sjcl.misc.pbkdf2("xxx", "xxx", 1000, 12);
    ba = sjcl.misc.pbkdf2("xxx", "xxx", 1000, 12, sjcl.misc.hmac);

    ba = sjcl.misc.pbkdf2("xxx", ba);
    ba = sjcl.misc.pbkdf2("xxx", ba, 1000);
    ba = sjcl.misc.pbkdf2("xxx", ba, 1000, 12);
    ba = sjcl.misc.pbkdf2("xxx", ba, 1000, 12, sjcl.misc.hmac);

    ba = sjcl.misc.pbkdf2(ba, "xxx");
    ba = sjcl.misc.pbkdf2(ba, "xxx", 1000);
    ba = sjcl.misc.pbkdf2(ba, "xxx", 1000, 12);
    ba = sjcl.misc.pbkdf2(ba, "xxx", 1000, 12, sjcl.misc.hmac);

    ba = sjcl.misc.pbkdf2(ba, ba);
    ba = sjcl.misc.pbkdf2(ba, ba, 1000);
    ba = sjcl.misc.pbkdf2(ba, ba, 1000, 12);
    ba = sjcl.misc.pbkdf2(ba, ba, 1000, 12, sjcl.misc.hmac);

    var hmac: sjcl.SjclHmac;
    hmac = new sjcl.misc.hmac(ba);
    hmac = new sjcl.misc.hmac(ba, sjcl.hash.sha512);

    ba = hmac.mac("xxx");
    ba = hmac.mac(ba);

    ba = hmac.encrypt("xxx");
    ba = hmac.encrypt(ba);

    hmac.reset();

    hmac.update("xxx");
    hmac.update(ba);

    ba = hmac.digest();
}

function testECC() {
    var keys = sjcl.ecc.elGamal.generateKeys(192, 0);

    var ciphertext = sjcl.encrypt(keys.pub, "hello world");
    var plaintext = sjcl.decrypt(keys.sec, ciphertext);

    // TODO: Maybe deeper testing required. Let me know
}

function testRandom() {
    b = sjcl.random.isReady();
    ba = sjcl.random.randomWords(8);
    ba = sjcl.random.randomWords(8, 6);

    var rnd = new sjcl.prng(1);
    ba = rnd.randomWords(16);
    ba = rnd.randomWords(16, 6);
}

function testSRP() {
    var group = sjcl.keyexchange.srp.knownGroup(1024);
    ba = sjcl.codec.hex.toBits(s);
    ba = sjcl.keyexchange.srp.makeX(s, s, ba);
    ba = sjcl.keyexchange.srp.makeVerifier(s, s, ba, group);
}

function testConvenince() {
    var x: sjcl.SjclCipherEncrypted;
    x = sjcl.encrypt("xxx", "text");
    s = sjcl.decrypt(ba, x);

    x = sjcl.encrypt("xxx", "text", { iv: ba, salt: ba });
    s = sjcl.decrypt(ba, x, { iv: ba, salt: ba });

    var y: sjcl.SjclCipherDecrypted;

    sjcl.encrypt("xxx", "text", { iv: ba, salt: ba, mode: "gcm" }, x);
    s = sjcl.decrypt(ba, x, { iv: ba, salt: ba, mode: "gcm" }, y);

    sjcl.encrypt("xxx", "text", { iv: ba, salt: ba, mode: "gcm", iter: 200 }, x);
    s = sjcl.decrypt(ba, x, { iv: ba, salt: ba, mode: "gcm", iter: 200 }, y);
}