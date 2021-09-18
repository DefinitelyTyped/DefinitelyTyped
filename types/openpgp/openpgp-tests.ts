import openpgp, { encrypt } from 'openpgp';

// Open PGP Sample codes

var options: openpgp.KeyOptions = {
    numBits: 2048,
    userIds: [
        {
            name: 'Jon Smith',
            email: 'jon.smith@example.org',
        },
        {
            email: 'jon.smith@example.org',
        },
        {
            name: 'Jon Smith',
        },
        {},
    ],
    passphrase: 'super long and hard to guess secret',
};
openpgp
    .generateKey(options)
    .then(function(keypair) {
        // success
        var privkey = keypair.privateKeyArmored;
        var pubkey = keypair.publicKeyArmored;
    })
    .catch(function(error) {
        // failure
    });

var spubkey = '-----BEGIN PGP PUBLIC KEY BLOCK ... END PGP PUBLIC KEY BLOCK-----';

openpgp.key
    .readArmored(spubkey)
    .then(function(publicKey) {
        return {
            message: openpgp.message.fromText('Hello, World!'),
            publicKeys: publicKey.keys,
        };
    })
    .then(openpgp.encrypt)
    .then(function(pgpMessage) {
        // success
    })
    .catch(function(error) {
        // failure
    });

var sprivkey = '-----BEGIN PGP PRIVATE KEY BLOCK ... END PGP PRIVATE KEY BLOCK-----';
var pgpMessageStr = '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----';

openpgp.message
    .readArmored(pgpMessageStr)
    .then(function(pgpMessage) {
        const options = {
            message: pgpMessage,
        };
        return openpgp.decrypt(options);
    })
    .then(function(plaintext) {
        // success
    })
    .catch(function(error) {
        // failure
    });

const promises: [
    Promise<{ keys: Array<openpgp.key.Key>; err: Array<Error> | null }>,
    Promise<openpgp.message.Message>
] = [openpgp.key.readArmored(sprivkey), openpgp.message.readArmored(pgpMessageStr)];

Promise.all(promises)
    .then(function(values) {
        const keyObject: openpgp.key.KeyResult = values[0];
        const pgpMessage: openpgp.message.Message = values[1];
        const privateKey = keyObject.keys[0];
        privateKey.decrypt('passphrase');
        const options = {
            privateKeys: privateKey,
            message: pgpMessage,
        };
        return openpgp.decrypt(options);
    })
    .then(function(plaintext) {
        // success
    })
    .catch(function(error) {
        // failure
    });

openpgp.initWorker({
    path: 'openpgp.worker.js',
});

(async () => {
    let msgOptions: openpgp.EncryptOptions;

    msgOptions = {
        message: openpgp.message.fromBinary(new Uint8Array([0x01, 0x01, 0x01])),
        passwords: ['secret stuff'],
        armor: false,
    };

    let cipher = await openpgp.encrypt(msgOptions);

    let encrypted = cipher.message.packets.write(); // get raw encrypted packets as Uint8Array

    let armored = await openpgp.encrypt({
        message: openpgp.message.fromBinary(new Uint8Array([0x01, 0x01, 0x01])),
        armor: true,
        privateKeys: [],
    });
    let data: string = armored.data;
    // let msg: openpgp.message.Message = armored.message; // without member 'message'

    let plain = await openpgp.decrypt({
        message: await openpgp.message.read(encrypted),
        passwords: ['secret stuff'],
        format: 'binary',
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
    const publicKey = await openpgp.key.readArmored(spubkey);
    const privateKey = await openpgp.key.readArmored(sprivkey);
    const signOptions: openpgp.SignOptions = {
        message: openpgp.message.fromText('hello world'),
        privateKeys: privateKey.keys,
        detached: true,
    };

    const signed = await openpgp.sign(signOptions);

    // Test function reload
    openpgp
        .sign({
            message: null,
            privateKeys: [],
            detached: true,
        })
        .then(s => s.signature /* as string*/);
    openpgp
        .sign({
            message: null,
            privateKeys: [],
            detached: false,
        })
        .then(s => s.data /* as string*/);
    openpgp
        .sign({
            message: null,
            privateKeys: [],
            armor: false,
            detached: true,
        })
        .then(s => s.signature /* as openpgp.signature.Signature*/);
    openpgp
        .sign({
            message: null,
            privateKeys: [],
            armor: false,
            detached: false,
        })
        .then(s => s.message /* as openpgp.message.Message*/);

    const signature = signed.signature as openpgp.signature.Signature;
    const message = signed.message;

    const verifyOptions: openpgp.VerifyOptions = {
        message,
        signature,
        publicKeys: publicKey.keys,
    };

    let verified = await openpgp.verify(verifyOptions);

    return verified.signatures[0].valid;
})();

async () => {
    const publicKey = await openpgp.key.readArmored(spubkey);
    publicKey.keys[0].getKeys();
    publicKey.keys[0].getSubkeys();

    return publicKey.keys[0].primaryKey.getFingerprint(); /* as string*/
};

// Open PGP Tests

var keyoptions: openpgp.KeyOptions;
var mpi: openpgp.type.mpi.MPI;
var mpis: Array<openpgp.type.mpi.MPI>;

openpgp.encoding.armor.armor(openpgp.enums.armor.message, {}, 0, 1);
openpgp.encoding.armor.dearmor('');

openpgp.cleartext.readArmored('');

openpgp.crypto.crypto.generateSessionKey(openpgp.enums.symmetric.aes128);
openpgp.crypto.crypto.getPrefixRandom(openpgp.enums.symmetric.aes128);
// openpgp.crypto.crypto.getPrivateMpiCount(openpgp.enums.symmetric.aes128);
openpgp.crypto.crypto.publicKeyDecrypt(openpgp.enums.publicKey.rsa_encrypt, mpis, mpis, '');
openpgp.crypto.crypto.publicKeyEncrypt(openpgp.enums.publicKey.rsa_encrypt, mpis, mpi, '');

openpgp.crypto;
// API update with no documentation
openpgp.crypto.cfb.decrypt('', '', '', true);
openpgp.crypto.cfb.encrypt('', '', '', true);
// Function removed from openpgp.crypto.cfb
// openpgp.crypto.cfb.mdc({}, "", "");

openpgp.crypto.hash.digest(openpgp.enums.hash.md5, new Uint8Array([0, 1]));
openpgp.crypto.hash.getHashByteLength(openpgp.enums.hash.md5);

openpgp.crypto.random.getRandomBN(mpi, mpi);
openpgp.crypto.random.getRandomBytes(0);
// function removed from openpgp.crypto.random
// openpgp.crypto.random.getRandomValues(openpgp.util.str_to_Uint8Array(""));
// openpgp.crypto.random.getSecureRandom(0, 1);

openpgp.crypto.signature.sign(
    openpgp.enums.publicKey.rsa_encrypt,
    openpgp.enums.hash.md5,
    mpis,
    new Uint8Array([0, 1]),
    new Uint8Array([0, 1]),
);
openpgp.crypto.signature.verify(
    openpgp.enums.publicKey.rsa_encrypt,
    openpgp.enums.hash.md5,
    mpis,
    mpis,
    new Uint8Array([0, 1]),
    new Uint8Array([0, 1]),
);

openpgp.key.generate(keyoptions);
openpgp.key.readArmored('');

const message = openpgp.message.fromBinary(new Uint8Array([0x01, 0x02, 0x03]));
openpgp.message.fromText('');
openpgp.message.readArmored('');

message.packets.filterByTag(openpgp.enums.packet.literal).write();
message.packets.indexOfTag(openpgp.enums.packet.literal).filter(() => {});
message.packets.findPacket(openpgp.enums.packet.literal) as openpgp.packet.Literal;
openpgp.packet.fromStructuredClone({});
openpgp.packet.newPacketFromTag('');

openpgp.util.Uint8Array_to_str(new Uint8Array([1, 0]));
openpgp.util.decode_utf8(new Uint8Array([1, 0]));
openpgp.util.encode_utf8('');
openpgp.util.getWebCrypto();
openpgp.util.hex_to_Uint8Array('');
openpgp.util.print_debug_hexarray_dump('');
openpgp.util.print_debug_hexstr_dump('');
openpgp.util.print_debug('');
openpgp.util.print_debug_hexstr_dump('');
openpgp.util.shiftRight(new Uint8Array([1, 0]), 1);
openpgp.util.str_to_Uint8Array('');
openpgp.util.Uint8Array_to_str(openpgp.util.str_to_Uint8Array(''));

new openpgp.wkd.WKD().lookup({ email: 'test-wkd@metacode.biz', rawBytes: true });
new openpgp.wkd.WKD().lookup({ email: 'test-wkd@metacode.biz' });

new openpgp.HKP("https://keyserver.ubuntu.com").lookup({query: 'test@test.com'});
