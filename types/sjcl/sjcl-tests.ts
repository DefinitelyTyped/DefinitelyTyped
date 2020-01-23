import sjcl = require("sjcl"); 

let b: boolean;
let n: number;
let s: string;
let bn: sjcl.BigNumber;
let ba: sjcl.BitArray;
let ab: ArrayBuffer;
let ret: any;

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

    bn = bn.montpowermod(0, 0);
    bn = bn.montpowermod(0, "0");
    bn = bn.montpowermod(0, bn);
    bn = bn.montpowermod("0", 0);
    bn = bn.montpowermod("0", "0");
    bn = bn.montpowermod("0", bn);
    bn = bn.montpowermod(bn, 0);
    bn = bn.montpowermod(bn, "0");
    bn = bn.montpowermod(bn, bn);

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

    ba = sjcl.bitArray.byteswapM(ba);
}

function testCodecs() {
    s = sjcl.codec.base32.fromBits(ba);
    ba = sjcl.codec.base32.toBits(s);

    s = sjcl.codec.base32hex.fromBits(ba);
    ba = sjcl.codec.base32hex.toBits(s);

    s = sjcl.codec.base64.fromBits(ba);
    ba = sjcl.codec.base64.toBits(s);

    s = sjcl.codec.base64url.fromBits(ba);
    ba = sjcl.codec.base64url.toBits(s);

    s = sjcl.codec.hex.fromBits(ba);
    ba = sjcl.codec.hex.toBits(s);

    s = sjcl.codec.utf8String.fromBits(ba);
    ba = sjcl.codec.utf8String.toBits(s);

    s = sjcl.codec.z85.fromBits(ba);
    ba = sjcl.codec.z85.toBits(s);

    ab = sjcl.codec.arrayBuffer.fromBits(ba);
    ba = sjcl.codec.arrayBuffer.toBits(ab);
    sjcl.codec.arrayBuffer.hexDumpBuffer(ab);

    const bytes: number[] = sjcl.codec.bytes.fromBits(ba);
    ba = sjcl.codec.bytes.toBits(bytes);
}

function testHashes() {
    let hash: sjcl.SjclHash;
    ba = hash
        .reset()
        .update("xxx")
        .update(ba)
        .finalize();

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

    hash = new sjcl.hash.ripemd160();
    hash = new sjcl.hash.ripemd160(hash);
    ba = sjcl.hash.ripemd160.hash(ba);
    ba = sjcl.hash.ripemd160.hash("xxx");
}

function testSymmetric() {
    const aes = new sjcl.cipher.aes([0, 0, 0, 0]);
    const iv: sjcl.BitArray = [...ba];

    // CBC
    ba = sjcl.mode.cbc.encrypt(aes, ba, iv);
    ba = sjcl.mode.cbc.decrypt(aes, ba, iv);

    ba = sjcl.mode.cbc.encrypt(aes, ba, iv, ba);
    ba = sjcl.mode.cbc.decrypt(aes, ba, iv, ba);

    // CTR
    ba = sjcl.mode.ctr.encrypt(aes, ba, iv);
    ba = sjcl.mode.ctr.decrypt(aes, ba, iv);

    ba = sjcl.mode.ctr.encrypt(aes, ba, iv, ba);
    ba = sjcl.mode.ctr.decrypt(aes, ba, iv, ba);

    // GCM
    ba = sjcl.mode.gcm.encrypt(aes, ba, iv);
    ba = sjcl.mode.gcm.decrypt(aes, ba, iv);

    ba = sjcl.mode.gcm.encrypt(aes, ba, iv, ba);
    ba = sjcl.mode.gcm.decrypt(aes, ba, iv, ba);

    ba = sjcl.mode.gcm.encrypt(aes, ba, iv, ba, 128);
    ba = sjcl.mode.gcm.decrypt(aes, ba, iv, ba, 128);

    // CCM
    ba = sjcl.mode.ccm.encrypt(aes, ba, iv);
    ba = sjcl.mode.ccm.decrypt(aes, ba, iv);

    ba = sjcl.mode.ccm.encrypt(aes, ba, iv, ba);
    ba = sjcl.mode.ccm.decrypt(aes, ba, iv, ba);

    ba = sjcl.mode.ccm.encrypt(aes, ba, iv, ba, 128);
    ba = sjcl.mode.ccm.decrypt(aes, ba, iv, ba, 128);

    // CCM with ArrayBuffer
    ba = sjcl.arrayBuffer.ccm.compat_encrypt(aes, ba, iv);
    ba = sjcl.arrayBuffer.ccm.compat_decrypt(aes, ba, iv);

    ba = sjcl.arrayBuffer.ccm.compat_encrypt(aes, ba, iv, ba);
    ba = sjcl.arrayBuffer.ccm.compat_decrypt(aes, ba, iv, ba);

    ba = sjcl.arrayBuffer.ccm.compat_encrypt(aes, ba, iv, ba, 128);
    ba = sjcl.arrayBuffer.ccm.compat_decrypt(aes, ba, iv, ba, 128);

    // OCB2
    ba = sjcl.mode.ocb2.encrypt(aes, ba, iv);
    ba = sjcl.mode.ocb2.decrypt(aes, ba, iv);

    ba = sjcl.mode.ocb2.encrypt(aes, ba, iv, ba);
    ba = sjcl.mode.ocb2.decrypt(aes, ba, iv, ba);

    ba = sjcl.mode.ocb2.encrypt(aes, ba, iv, ba, 128);
    ba = sjcl.mode.ocb2.decrypt(aes, ba, iv, ba, 128);

    ba = sjcl.mode.ocb2.encrypt(aes, ba, iv, ba, 128, false);
    ba = sjcl.mode.ocb2.decrypt(aes, ba, iv, ba, 128, false);

    // OCB2 Progressive
    let ocb2pEnc = sjcl.mode.ocb2progressive.createEncryptor(aes, iv);
    ocb2pEnc = sjcl.mode.ocb2progressive.createEncryptor(aes, iv, ba);
    ocb2pEnc = sjcl.mode.ocb2progressive.createEncryptor(aes, iv, ba, 128);
    ocb2pEnc = sjcl.mode.ocb2progressive.createEncryptor(aes, iv, ba, 128, false);
    ba = ocb2pEnc.process(ba);
    ba = ocb2pEnc.finalize();

    let ocb2pDec = sjcl.mode.ocb2progressive.createDecryptor(aes, iv);
    ocb2pDec = sjcl.mode.ocb2progressive.createDecryptor(aes, iv, ba);
    ocb2pDec = sjcl.mode.ocb2progressive.createDecryptor(aes, iv, ba, 128);
    ocb2pDec = sjcl.mode.ocb2progressive.createDecryptor(aes, iv, ba, 128, false);
    ba = ocb2pDec.process(ba);
    ba = ocb2pDec.finalize();
}

function testHMACPBDKF2() {
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

    let hmac: sjcl.SjclHMAC;
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

function testHKDF() {
    ba = sjcl.misc.hkdf(ba, 128, "xxx", "xxx");
    ba = sjcl.misc.hkdf(ba, 128, "xxx", "xxx", sjcl.hash.sha256);

    ba = sjcl.misc.hkdf(ba, 128, ba, "xxx");
    ba = sjcl.misc.hkdf(ba, 128, ba, "xxx", sjcl.hash.sha256);

    ba = sjcl.misc.hkdf(ba, 128, "xxx", ba);
    ba = sjcl.misc.hkdf(ba, 128, "xxx", ba, sjcl.hash.sha256);

    ba = sjcl.misc.hkdf(ba, 128, ba, ba);
    ba = sjcl.misc.hkdf(ba, 128, ba, ba, sjcl.hash.sha256);
}

function testScrypt() {
    ba = sjcl.misc.scrypt("xxx", "xxx");
    ba = sjcl.misc.scrypt("xxx", "xxx", 16384);
    ba = sjcl.misc.scrypt("xxx", "xxx", 16384, 8);
    ba = sjcl.misc.scrypt("xxx", "xxx", 16384, 8, 1);
    ba = sjcl.misc.scrypt("xxx", "xxx", 16384, 8, 1, 128);
    ba = sjcl.misc.scrypt("xxx", "xxx", 16384, 8, 1, 128, sjcl.misc.hmac);

    ba = sjcl.misc.scrypt(ba, "xxx");
    ba = sjcl.misc.scrypt(ba, "xxx", 16384);
    ba = sjcl.misc.scrypt(ba, "xxx", 16384, 8);
    ba = sjcl.misc.scrypt(ba, "xxx", 16384, 8, 1);
    ba = sjcl.misc.scrypt(ba, "xxx", 16384, 8, 1, 128);
    ba = sjcl.misc.scrypt(ba, "xxx", 16384, 8, 1, 128, sjcl.misc.hmac);

    ba = sjcl.misc.scrypt("xxx", ba);
    ba = sjcl.misc.scrypt("xxx", ba, 16384);
    ba = sjcl.misc.scrypt("xxx", ba, 16384, 8);
    ba = sjcl.misc.scrypt("xxx", ba, 16384, 8, 1);
    ba = sjcl.misc.scrypt("xxx", ba, 16384, 8, 1, 128);
    ba = sjcl.misc.scrypt("xxx", ba, 16384, 8, 1, 128, sjcl.misc.hmac);

    ba = sjcl.misc.scrypt(ba, ba);
    ba = sjcl.misc.scrypt(ba, ba, 16384);
    ba = sjcl.misc.scrypt(ba, ba, 16384, 8);
    ba = sjcl.misc.scrypt(ba, ba, 16384, 8, 1);
    ba = sjcl.misc.scrypt(ba, ba, 16384, 8, 1, 128);
    ba = sjcl.misc.scrypt(ba, ba, 16384, 8, 1, 128, sjcl.misc.hmac);
}

function testECC() {
    ret = sjcl.ecc.curveName(sjcl.ecc.curves.c192);
    ret = sjcl.ecc.curveName(sjcl.ecc.curves.c224);
    ret = sjcl.ecc.curveName(sjcl.ecc.curves.c256);
    ret = sjcl.ecc.curveName(sjcl.ecc.curves.c384);
    ret = sjcl.ecc.curveName(sjcl.ecc.curves.c521);
    ret = sjcl.ecc.curveName(sjcl.ecc.curves.k192);
    ret = sjcl.ecc.curveName(sjcl.ecc.curves.k224);
    ret = sjcl.ecc.curveName(sjcl.ecc.curves.k256);
}

function testECCElGamal() {
    ret = new sjcl.ecc.elGamal.publicKey(sjcl.ecc.curves.c192, new sjcl.ecc.point(sjcl.ecc.curves.c192));
    ret = new sjcl.ecc.elGamal.secretKey(sjcl.ecc.curves.c192, new sjcl.bn(2));

    const keys = sjcl.ecc.elGamal.generateKeys(192, 0);

    const ciphertext = sjcl.encrypt(keys.pub, "hello world");
    ret = sjcl.decrypt(keys.sec, ciphertext);

    const kem = keys.pub.kem(10);
    ret = keys.sec.unkem(kem.tag);

    ret = keys.pub.serialize();
    ret = sjcl.ecc.deserialize(ret);
    ret = keys.pub.get();
    ret = keys.pub.getType();

    ret = keys.sec.serialize();
    ret = sjcl.ecc.deserialize(ret);
    ret = keys.sec.get();
    ret = keys.sec.getType();
    ret = keys.sec.dh(keys.pub);
    ret = keys.sec.dhJavaEc(keys.pub);
}

function testECCECDSA() {
    ret = new sjcl.ecc.ecdsa.publicKey(sjcl.ecc.curves.c192, new sjcl.ecc.point(sjcl.ecc.curves.c192));
    ret = new sjcl.ecc.ecdsa.secretKey(sjcl.ecc.curves.c192, new sjcl.bn(2));

    const keys = sjcl.ecc.ecdsa.generateKeys(192, 0);

    let signature = keys.sec.sign(ba, 10, false);
    signature = keys.sec.sign(ba, 10, false, new sjcl.bn(128));
    ret = keys.pub.verify(ba, signature, false);

    ret = keys.pub.serialize();
    ret = sjcl.ecc.deserialize(ret);
    ret = keys.pub.get();
    ret = keys.pub.getType();

    ret = keys.sec.serialize();
    ret = sjcl.ecc.deserialize(ret);
    ret = keys.sec.get();
    ret = keys.sec.getType();
}

function testRandom() {
    b = sjcl.random.isReady();
    ba = sjcl.random.randomWords(8);
    ba = sjcl.random.randomWords(8, 6);

    const rnd = new sjcl.prng(1);
    ba = rnd.randomWords(16);
    ba = rnd.randomWords(16, 6);
}

function testSRP() {
    const group = sjcl.keyexchange.srp.knownGroup(1024);
    ba = sjcl.codec.hex.toBits(s);
    ba = sjcl.keyexchange.srp.makeX(s, s, ba);
    ba = sjcl.keyexchange.srp.makeVerifier(s, s, ba, group);
}

function testConvenience() {
    let x: sjcl.SjclCipherEncrypted;
    x = sjcl.encrypt("xxx", "text");
    s = sjcl.decrypt(ba, x);

    x = sjcl.encrypt("xxx", "text", { iv: ba, salt: ba });
    s = sjcl.decrypt(ba, x, { iv: ba, salt: ba });

    let y: sjcl.SjclCipherDecrypted;
    sjcl.encrypt("xxx", "text", { iv: ba, salt: ba, mode: "gcm" }, x);
    s = sjcl.decrypt(ba, x, { iv: ba, salt: ba, mode: "gcm" }, y);

    sjcl.encrypt("xxx", "text", { iv: ba, salt: ba, mode: "gcm", iter: 200 }, x);
    s = sjcl.decrypt(ba, x, { iv: ba, salt: ba, mode: "gcm", iter: 200 }, y);
}
