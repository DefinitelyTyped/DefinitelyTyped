// Open PGP Sample codes

var options: openpgp.KeyOptions = {
    numBits: 2048,
    userIds: [{
        name: 'Jon Smith',
        email: 'jon.smith@example.org',
    }],
    passphrase: 'super long and hard to guess secret'
};

openpgp.generateKey(options).then(function (keypair) {
    // success
    var privkey = keypair.privateKeyArmored;
    var pubkey = keypair.publicKeyArmored;
}).catch(function (error) {
    // failure
});


var spubkey = '-----BEGIN PGP PUBLIC KEY BLOCK ... END PGP PUBLIC KEY BLOCK-----';

openpgp.key.readArmored(spubkey)
    .then(function (publicKey) {
        return {
            message: openpgp.message.fromText('Hello, World!'),
            publicKeys: publicKey.keys
        };
    })
    .then(openpgp.encrypt)
    .then(function (pgpMessage) {
        // success
    })
    .catch(function (error) {
        // failure
    });

var sprivkey = '-----BEGIN PGP PRIVATE KEY BLOCK ... END PGP PRIVATE KEY BLOCK-----';
var pgpMessageStr = '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----';

openpgp.message.readArmored(pgpMessageStr).then(function(pgpMessage) {
    const options = {
        message: pgpMessage
    };
    return openpgp.decrypt(options);
}).then(function (plaintext) {
    // success
}).catch(function (error) {
    // failure
});

const promises: [Promise<openpgp.key.KeyResult>, Promise<openpgp.message.Message>] = [
    openpgp.key.readArmored(sprivkey),
    openpgp.message.readArmored(pgpMessageStr)
];

Promise.all(promises).then(function (values) {
    const keyObject: openpgp.key.KeyResult = values[0];
    const pgpMessage: openpgp.message.Message = values[1];
    const privateKey = keyObject.keys[0];
    privateKey.decrypt('passphrase');
    const options = {
        privateKeys: privateKey,
        message: pgpMessage
    };
    return openpgp.decrypt(options);
}).then(function (plaintext) {
    // success
}).catch(function (error) {
    // failure
});

openpgp.initWorker({ path:'openpgp.worker.js' });

(async () => {
    let msgOptions: openpgp.EncryptOptions;

    msgOptions = {
        message: openpgp.message.fromBinary(new Uint8Array([0x01, 0x01, 0x01])),
        passwords: ['secret stuff'],
        armor: false,
    };

    let cipher = await openpgp.encrypt(msgOptions);
    let encrypted = cipher.message.packets.write(); // get raw encrypted packets as Uint8Array

    let plain = await openpgp.decrypt({
        message: await openpgp.message.read(encrypted),
        passwords: ['secret stuff'],
        format: 'binary'
    });

    return plain.data;
})();

(async () => {
    let cipher = await openpgp.encrypt({
        message: openpgp.message.fromText('hello world'),
        passwords: 'super secure',
        armor: true,
    });
    let encrypted = cipher.data;

    let plain = await openpgp.decrypt({
        message: await openpgp.message.readArmored(encrypted),
        passwords: 'super secure',
    });

    return plain.data;
})();


(async () => {
    const publicKey = (await openpgp.key.readArmored(spubkey))
    const privateKey = (await openpgp.key.readArmored(sprivkey))
    const signOptions: openpgp.SignOptions = {
        message: openpgp.message.fromText('hello world'),
        privateKeys: privateKey.keys,
        detached: true
    };

    const signed = await openpgp.sign(signOptions);

    const signature = signed.signature as openpgp.Signature;
    const message = signed.message;

    const verifyOptions: openpgp.VerifyOptions = {
        message,
        signature,
        publicKeys: publicKey.keys
    };

    let verified = await openpgp.verify(verifyOptions);

    return verified.signatures[0].valid;
})();

// Open PGP Tests


var keyoptions: openpgp.KeyOptions;
var mpi: openpgp.crypto.Mpi;
var mpis: Array<openpgp.crypto.Mpi>;

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

openpgp.message.fromBinary(new Uint8Array([0x01, 0x02, 0x03]));
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
