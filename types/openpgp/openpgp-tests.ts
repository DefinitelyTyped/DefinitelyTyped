

// Open PGP Sample codes

var options: openpgp.KeyOptions = {
    numBits: 2048,
    userId: 'Jon Smith <jon.smith@example.org>',
    passphrase: 'super long and hard to guess secret'
};

openpgp.generateKeyPair(options).then(function (keypair) {
    // success
    var privkey = keypair.privateKeyArmored;
    var pubkey = keypair.publicKeyArmored;
}).catch(function (error) {
    // failure
});


var spubkey = '-----BEGIN PGP PUBLIC KEY BLOCK ... END PGP PUBLIC KEY BLOCK-----';
var publicKey = openpgp.key.readArmored(spubkey);

openpgp.encryptMessage(publicKey.keys, 'Hello, World!').then(function (pgpMessage) {
    // success
}).catch(function (error) {
    // failure
});



var sprivkey = '-----BEGIN PGP PRIVATE KEY BLOCK ... END PGP PRIVATE KEY BLOCK-----';
var privateKey = openpgp.key.readArmored(sprivkey).keys[0];
privateKey.decrypt('passphrase');

var pgpMessageStr = '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----';
var pgpMessage = openpgp.message.readArmored(pgpMessageStr);

openpgp.decryptMessage(privateKey, pgpMessage).then(function (plaintext) {
    // success
}).catch(function (error) {
    // failure
});


// Open PGP Tests


var keyoptions: openpgp.KeyOptions;
var key= openpgp.key.generate(keyoptions);
var keys: Array<openpgp.key.Key>;
var message = openpgp.message.readArmored("");
var cleartextmessage = openpgp.cleartext.readArmored("");
var mpi: openpgp.crypto.Mpi;
var mpis: Array<openpgp.crypto.Mpi>;


openpgp.decryptAndVerifyMessage(key, key, "").then();
openpgp.decryptAndVerifyMessage(key, keys, "").then();

openpgp.decryptMessage(key, message).then();

openpgp.encryptMessage(key, "").then();
openpgp.encryptMessage(keys, "").then();

openpgp.generateKeyPair(keyoptions).then(function (keypair) {
    key = keypair.key;
});

openpgp.signAndEncryptMessage(key, key, "").then();
openpgp.signAndEncryptMessage(keys, key, "").then();

openpgp.signClearMessage(key, "").then();
openpgp.signClearMessage(keys, "").then();

openpgp.verifyClearSignedMessage(key, cleartextmessage);
openpgp.verifyClearSignedMessage(keys, cleartextmessage);

openpgp.armor.armor(openpgp.enums.armor.message, {}, 0, 1);
openpgp.armor.dearmor("");

openpgp.cleartext.readArmored("");

openpgp.crypto.generateSessionKey(openpgp.enums.symmetric.aes128);
openpgp.crypto.getPrefixRandom(openpgp.enums.symmetric.aes128);
openpgp.crypto.getPrivateMpiCount(openpgp.enums.symmetric.aes128);
openpgp.crypto.publicKeyDecrypt(openpgp.enums.publicKey.rsa_encrypt, mpis, mpis, mpi);
openpgp.crypto.publicKeyEncrypt(openpgp.enums.publicKey.rsa_encrypt, mpis, mpi);

openpgp.crypto.cfb.decrypt("", "", "", true);
openpgp.crypto.cfb.encrypt("", "", "", "", true);
openpgp.crypto.cfb.mdc({}, "", "");

openpgp.crypto.hash.digest(openpgp.enums.hash.md5, "");
openpgp.crypto.hash.getHashByteLength(openpgp.enums.hash.md5);

openpgp.crypto.random.getRandomBigInteger(0);
openpgp.crypto.random.getRandomBytes(0);
openpgp.crypto.random.getRandomValues(openpgp.util.str2Uint8Array(""));
openpgp.crypto.random.getSecureRandom(0, 1);

openpgp.crypto.signature.sign(openpgp.enums.hash.md5, openpgp.enums.publicKey.rsa_encrypt, mpis, mpis, "");
openpgp.crypto.signature.verify(openpgp.enums.publicKey.rsa_encrypt, openpgp.enums.hash.md5, mpis, mpis, "");

openpgp.key.generate(keyoptions);
openpgp.key.readArmored("");

openpgp.message.fromBinary("");
openpgp.message.fromText("");
openpgp.message.readArmored("");

openpgp.packet.fromStructuredClone({});
openpgp.packet.newPacketFromTag("");

openpgp.util.bin2str([0, 1]);
openpgp.util.calc_checksum("");
openpgp.util.decode_utf8("");
openpgp.util.encode_utf8("");
openpgp.util.get_hashAlgorithmString();
openpgp.util.getWebCrypto();
openpgp.util.hex2bin("");
openpgp.util.hexidump("");
openpgp.util.hexstrdump("");
openpgp.util.print_debug("");
openpgp.util.print_debug_hexstr_dump("");
openpgp.util.shiftRight("", 1);
openpgp.util.str2bin("");
openpgp.util.str2Uint8Array("");
openpgp.util.Uint8Array2str(openpgp.util.str2Uint8Array(""));