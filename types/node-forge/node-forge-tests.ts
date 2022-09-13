import * as forge from 'node-forge';

let keypair = forge.pki.rsa.generateKeyPair({ bits: 512 });
forge.pki.rsa.setPublicKey(keypair.privateKey.n, keypair.privateKey.e);
let privateKeyPem = forge.pki.privateKeyToPem(keypair.privateKey);
let publicKeyPem = forge.pki.publicKeyToPem(keypair.publicKey);
let publicKeyRSAPem: forge.pki.PEM = forge.pki.publicKeyToRSAPublicKeyPem(keypair.publicKey);
let key = forge.pki.decryptRsaPrivateKey(privateKeyPem);
let x: string = forge.ssh.privateKeyToOpenSSH(key);
let pemKey: forge.pki.PEM = publicKeyPem;
let publicKeyRsa = forge.pki.publicKeyFromPem(pemKey);
let publicKeyFromRsaPem = forge.pki.publicKeyFromPem(publicKeyRSAPem);
let privateKeyRsa = forge.pki.privateKeyFromPem(privateKeyPem);
let byteBufferString = forge.pki.pemToDer(privateKeyPem);
let cert = forge.pki.createCertificate();
cert.publicKey = keypair.publicKey;
cert.sign(keypair.privateKey);
forge.pki.certificateFromAsn1(forge.pki.certificateToAsn1(cert));
let certPem = forge.pki.certificateToPem(cert);
let csr = forge.pki.createCertificationRequest();
csr.publicKey = keypair.publicKey;
csr.sign(keypair.privateKey);
forge.pki.certificationRequestFromAsn1(forge.pki.certificationRequestToAsn1(csr));

// From https://github.com/digitalbazaar/forge#rsakem
{
    // generate an RSA key pair asynchronously (uses web workers if available)
    // use workers: -1 to run a fast core estimator to optimize # of workers
    forge.pki.rsa.generateKeyPair({bits: 2048, workers: -1}, function(err, keypair) {
        // keypair.privateKey, keypair.publicKey
    });

    // generate and encapsulate a 16-byte secret key
    var kdf1 = new forge.kem.kdf1(forge.md.sha1.create());
    var kem = forge.kem.rsa.create(kdf1);
    var result = kem.encrypt(keypair.publicKey, 16);
    // result has 'encapsulation' and 'key'

    // encrypt some bytes
    var iv = forge.random.getBytesSync(12);
    var someBytes = 'hello world!';
    var cipher = forge.cipher.createCipher('AES-GCM', result.key);
    cipher.start({iv: iv});
    cipher.update(forge.util.createBuffer(someBytes));
    cipher.finish();
    var encrypted = cipher.output.getBytes();
    var tag = cipher.mode.tag.getBytes();

    // send 'encrypted', 'iv', 'tag', and result.encapsulation to recipient

    // decrypt encapsulated 16-byte secret key
    var kdf1_2 = new forge.kem.kdf1(forge.md.sha1.create());
    var kem_2 = forge.kem.rsa.create(kdf1_2);
    var my_key = kem_2.decrypt(keypair.privateKey, result.encapsulation, 16);

    // decrypt some bytes
    var decipher = forge.cipher.createDecipher('AES-GCM', my_key);
    decipher.start({iv: iv, tag: tag as any as forge.util.ByteStringBuffer});
    decipher.update(forge.util.createBuffer(encrypted));
    var pass = decipher.finish();

    // pass is false if there was a failure (eg: authentication tag didn't match)
    if(pass) {
        if (decipher.output.getBytes() !== someBytes) throw Error('forge.util.binary.raw.encode / decode fail');
    } else {
        throw Error('forge.util.binary.raw.encode / decode fail');
    }
}

// From https://github.com/digitalbazaar/forge#rc2
{
    // generate a random key and IV
    var key_rc2 = forge.random.getBytesSync(16);
    var iv_rc2 = forge.random.getBytesSync(8);

    // encrypt some bytes
    var someBytes_rc2 = 'hello world!';
    var cipher_rc2 = forge.rc2.createEncryptionCipher(key_rc2);
    cipher_rc2.start(iv_rc2);
    cipher_rc2.update(forge.util.createBuffer(someBytes_rc2));
    cipher_rc2.finish();
    var encrypted_rc2 = cipher_rc2.output;
    // outputs encrypted hex
    console.log(encrypted_rc2.toHex());

    // decrypt some bytes
    var cipher_rc2_2 = forge.rc2.createDecryptionCipher(key_rc2);
    cipher_rc2_2.start(iv_rc2);
    cipher_rc2_2.update(encrypted_rc2);
    cipher_rc2_2.finish();
    // outputs decrypted hex
    console.log(cipher_rc2_2.output.toHex());

    if (cipher_rc2_2.output.toString() !== someBytes_rc2) {
        throw Error('forge.util.binary.raw.encode / decode fail');
    }
}

{
    let subjectPublicKeyInfo = forge.asn1.create(forge.asn1.Class.UNIVERSAL, forge.asn1.Type.SEQUENCE, true, [
        forge.asn1.create(forge.asn1.Class.UNIVERSAL, forge.asn1.Type.SEQUENCE, true, [
            forge.asn1.create(
                forge.asn1.Class.UNIVERSAL,
                forge.asn1.Type.OID,
                false,
                forge.asn1.oidToDer(forge.pki.oids['rsaEncryption']).getBytes()
            ),
            forge.asn1.create(forge.asn1.Class.UNIVERSAL, forge.asn1.Type.NULL, false, '')
        ]),
        forge.asn1.create(forge.asn1.Class.UNIVERSAL, forge.asn1.Type.BITSTRING, false, [
            forge.asn1.create(forge.asn1.Class.UNIVERSAL, forge.asn1.Type.SEQUENCE, true, [
                forge.asn1.create(forge.asn1.Class.UNIVERSAL, forge.asn1.Type.INTEGER, false, []),
                forge.asn1.create(forge.asn1.Class.UNIVERSAL, forge.asn1.Type.INTEGER, false, [])
            ])
        ])
    ]);
    let derBuffer = forge.asn1.toDer(subjectPublicKeyInfo);
    let object = forge.asn1.fromDer(derBuffer);
}

{
    let oidSrc = '1.2.840.113549.1.1.5';
    let derOidBuffer = forge.asn1.oidToDer(oidSrc);
    let oidResult = forge.asn1.derToOid(derOidBuffer);
    if (oidSrc !== oidResult) throw Error('forge.asn1.oidToDer / derToOid fail');
}

if (forge.util.fillString('1', 5) !== '11111') throw Error('forge.util.fillString fail');

{
    let hex: string = '61';
    let bytes: string = forge.util.hexToBytes(hex);
    let result: string = forge.util.bytesToHex(bytes);
    if (bytes !== 'a' || result !== hex) throw Error('forge.util.hexToBytes / bytesToHex fail');
}

{
    let src: Uint8Array;
    let encode: string;
    let decode: Uint8Array;

    src = new Uint8Array(2);
    encode = forge.util.binary.hex.encode(src);
    decode = forge.util.binary.hex.decode(encode);
    if (encode !== '0000' || src.byteLength !== decode.byteLength)
        throw Error('forge.util.binary.hex.encode / decode fail');

    src = new Uint8Array(2);
    encode = forge.util.binary.base64.encode(src);
    decode = forge.util.binary.base64.decode(encode);
    if (encode !== 'AAA=' || src.byteLength !== decode.byteLength)
        throw Error('forge.util.binary.base64.encode / decode fail');

    src = new Uint8Array(10);
    encode = forge.util.binary.raw.encode(src);
    decode = forge.util.binary.raw.decode(encode);
    if (src.byteLength !== decode.byteLength) throw Error('forge.util.binary.raw.encode / decode fail');
}

{
    let src: string;
    let encode: Uint8Array;
    let decode: string;

    src = 'Test';
    encode = forge.util.text.utf8.encode(src);
    decode = forge.util.text.utf8.decode(encode);
    if (src !== decode) throw Error('forge.util.text.utf8.encode / decode fail');
    src = 'Test';
    encode = forge.util.text.utf16.encode(src);
    decode = forge.util.text.utf16.decode(encode);
    if (src !== decode) throw Error('forge.util.text.utf8.encode / decode fail');
}

{
    let md: forge.md.MessageDigest;
    let hex: string;

    md = forge.md.sha256.create();
    md = md.update('Test');
    hex = md.digest().toHex();

    if (hex.length !== 64) throw Error('forge.md.MessageDigest.update / digest fail');

    md = forge.md.sha1.create();
    md = md.update('Test');
    hex = md.digest().toHex();

    if (hex.length !== 40) throw Error('forge.md.MessageDigest.update / digest fail');
}

{
    let md: forge.md.MessageDigest;
    let hex: string;

    md = forge.md.md5.create();
    md = md.update('Test');
    hex = md.digest().toHex();

    if (hex.length !== 32) throw Error('forge.md.MessageDigest.update / digest fail');
}

{
    let key = forge.random.getBytesSync(24)
    let payload = { asd: 'asd' };
    let cipher = forge.cipher.createCipher('3DES-ECB', forge.util.createBuffer(key, 'raw'));
    cipher.start();
    cipher.update(forge.util.createBuffer(JSON.stringify(payload), 'raw'));
    cipher.finish();
    let encrypted = cipher.output;
    let token = forge.util.encode64(encrypted.getBytes());

    let decipher = forge.cipher.createDecipher('3DES-ECB', forge.util.createBuffer(key, 'raw'));
    decipher.start();
    decipher.update(forge.util.createBuffer(forge.util.decode64(token), 'raw'));
    decipher.finish();
    let decrypted = decipher.output as forge.util.ByteStringBuffer;
    let content = JSON.parse(forge.util.encodeUtf8(decrypted.getBytes()));

    if (content.asd !== payload.asd) throw Error('forge.cipher.createCipher failed');
}

{
    let count = 32;
    forge.random.getBytes(count, (err, bytes) => {
        if (err) {
            throw err;
        }
        if (bytes.length !== count) {
            throw new Error('invalid length');
        }
    });
}

{
    cert.publicKey = keypair.publicKey;
    cert.serialNumber = new Date().getTime() + '';
    cert.validity.notBefore = new Date();
    cert.validity.notAfter = new Date();
    cert.validity.notAfter.setFullYear(cert.validity.notAfter.getFullYear() + 20);
    const attrs = [
        {
            name: 'commonName',
            value: 'x22x22'
        },
        {
            name: 'countryName',
            value: 'GitHub'
        },
        {
            shortName: 'ST',
            value: 'GitHub'
        },
        {
            name: 'localityName',
            value: 'GitHub'
        },
        {
            name: 'organizationName',
            value: 'x22x22'
        },
        {
            shortName: 'OU',
            value: 'https://github.com/x22x22'
        }
    ];
    cert.setSubject(attrs);
    cert.setIssuer(attrs);
    cert.setExtensions([
        {
            name: 'basicConstraints',
            critical: true,
            cA: true
        },
        {
            name: 'keyUsage',
            critical: true,
            keyCertSign: true
        },
        {
            name: 'subjectKeyIdentifier'
        }
    ]);

    const attr: forge.pki.Attribute | undefined = csr.getAttribute({ name: "challengePassword" });


    // self-sign certificate
    cert.sign(keypair.privateKey, forge.md.sha256.create());

    cert.issuer.attributes.map(attr => attr.name)
}

{
    let md: forge.md.MessageDigest;
    let hex: string;
    let signature: forge.Bytes

    md = forge.md.sha256.create();
    md = md.update('Test');
    hex = md.digest().toHex();

    signature = keypair.privateKey.sign(md)
    if (!keypair.publicKey.verify(md.digest().bytes(), signature)) {
        throw Error("rsa signature verification fail");
    }
}

{
    const emptyStore = forge.pki.createCaStore();

    const certificate = cert;
    const pem = forge.pki.certificateToPem(certificate);

    const caStore = forge.pki.createCaStore();
    caStore.addCertificate(certificate);
    caStore.removeCertificate(certificate);

    caStore.listAllCertificates();

    caStore.removeCertificate(certificate);

    forge.pki.verifyCertificateChain(caStore, [certificate], (verified, depth, chain) => {
        return true;
    });

    forge.pki.verifyCertificateChain(caStore, [certificate], {
        verify: (verified, depth, chain) => {
            return true;
        },
        validityCheckDate: new Date()
    });

    certificate.issued(certificate);
    certificate.isIssuer(certificate);
}

{
    let md: forge.md.MessageDigest;
    md = forge.md.sha256.create();

    const key1: string = forge.pkcs5.pbkdf2("password", "salt", 1000, 32);
    const key2: string = forge.pkcs5.pbkdf2("password", "salt", 1000, 32, md);

    let key3: string;
    forge.pkcs5.pbkdf2("password", "salt", 1000, 32, function(err: Error | null, dk: null | string) {
        if (err === null)
            key3 = dk;
        else
            throw Error("pbkdf2 key derivation fail");
    });

    let key4: string;
    forge.pkcs5.pbkdf2("password", "salt", 1000, 32, md, function(err: Error | null, dk: null | string) {
        if (err === null)
            key4 = dk;
        else
            throw Error("pbkdf2 key derivation fail");
    });

    const key5: string = forge.pkcs5.pbkdf2("password", "salt", 1000, 32, 'sha256');
}

{
    // Based on node-forge/examples/tls.js

    let success = false;

    const client = forge.tls.createConnection({
        server: false,
        caStore: [cert],
        sessionCache: {},
        // supported cipher suites in order of preference
        cipherSuites: [
            forge.tls.CipherSuites.TLS_RSA_WITH_AES_128_CBC_SHA,
            forge.tls.CipherSuites.TLS_RSA_WITH_AES_256_CBC_SHA],
        virtualHost: 'server',
        verify: function(c, verified, depth, certs) {
            console.log(
                'TLS Client verifying certificate w/CN: \"' +
                    certs[0].subject.getField('CN').value +
                    '\", verified: ' + verified + '...');
            return verified;
        },
        connected: function(c) {
            console.log('Client connected...');

            // send message to server
            setTimeout(function() {
                c.prepareHeartbeatRequest('heartbeat');
                c.prepare('Hello Server');
            }, 1);
        },
        getCertificate: function(c, hint) {
            console.log('Client getting certificate ...');
            return forge.pki.certificateToPem(cert);
        },
        getPrivateKey: function(c, cert) {
            return privateKeyPem;
        },
        tlsDataReady: function(c) {
            // send TLS data to server
            server.process(c.tlsData.getBytes());
        },
        dataReady: function(c) {
            var response = c.data.getBytes();
            console.log('Client received \"' + response + '\"');
            success = (response === 'Hello Client');
            c.close();
        },
        heartbeatReceived: function(c, payload) {
            console.log('Client received heartbeat: ' + payload.getBytes());
        },
        closed: function(c) {
            console.log('Client disconnected.');
            if(success) {
                console.log('PASS');
            } else {
                console.log('FAIL');
            }
        },
        error: function(c, error) {
            console.log('Client error: ' + error.message);
        }
    });

    // create TLS server
    const server = forge.tls.createConnection({
        server: true,
        caStore: [cert],
        sessionCache: {},
        // supported cipher suites in order of preference
        cipherSuites: [
            forge.tls.CipherSuites.TLS_RSA_WITH_AES_128_CBC_SHA,
            forge.tls.CipherSuites.TLS_RSA_WITH_AES_256_CBC_SHA],
        connected: function(c) {
            console.log('Server connected');
            c.prepareHeartbeatRequest('heartbeat');
        },
        verifyClient: true,
        verify: function(c, verified, depth, certs) {
            console.log(
                'Server verifying certificate w/CN: \"' +
                    certs[0].subject.getField('CN').value +
                    '\", verified: ' + verified + '...');
            return verified;
        },
        getCertificate: function(c, hint) {
            console.log('Server getting certificate for \"' + (hint as string[])[0] + '\"...');
            return forge.pki.certificateToPem(cert);
        },
        getPrivateKey: function(c, cert) {
            return privateKeyPem;
        },
        tlsDataReady: function(c) {
            // send TLS data to client
            client.process(c.tlsData.getBytes());
        },
        dataReady: function(c) {
            console.log('Server received \"' + c.data.getBytes() + '\"');

            // send response
            c.prepare('Hello Client');
            c.close();
        },
        heartbeatReceived: function(c, payload) {
            console.log('Server received heartbeat: ' + payload.getBytes());
        },
        closed: function(c) {
            console.log('Server disconnected.');
        },
        error: function(c, error) {
            console.log('Server error: ' + error.message);
        }
    });

    console.log('created TLS client and server, doing handshake...');
    client.handshake();
}

{
    const { privateKey } = forge.pki.ed25519.generateKeyPair();
    const toSign = Buffer.from('test', 'utf8');
    forge.pki.ed25519.sign({
        message: toSign,
        privateKey
    });

    const toSign2 = 'foo';
    forge.pki.ed25519.sign({
        message: toSign2,
        encoding: 'utf8',
        privateKey
    });
}

{
    // combined private/public key from https://datatracker.ietf.org/doc/html/rfc8410#section-10.3
    const ecBytes = Buffer.from(
        'MHICAQEwBQYDK2VwBCIEINTuctv5E1hK1bbY8fdp+K06/nwoy/HU++CXqI9EdVhCoB8wHQYKKoZIhvcNAQkJFDEPDA1DdXJkbGUgQ2hhaXJzgSEAGb9ECWmEzf6FQbrBZ9w7lshQhqowtrbLDFw4rXAxZuE=',
        'base64'
    ).toString('binary');
    const ecAsn1 = forge.asn1.fromDer(forge.util.createBuffer().putBytes(ecBytes));
    forge.pki.ed25519.privateKeyFromAsn1(ecAsn1);
    forge.pki.ed25519.publicKeyFromAsn1(ecAsn1);
}

{
    // public key from https://datatracker.ietf.org/doc/html/rfc8410#section-10.1
    const ecBytes = Buffer.from(
        '   MC4CAQAwBQYDK2VwBCIEINTuctv5E1hK1bbY8fdp+K06/nwoy/HU++CXqI9EdVhC',
        'base64'
    ).toString('binary');
    const ecAsn1 = forge.asn1.fromDer(forge.util.createBuffer().putBytes(ecBytes));
    forge.pki.ed25519.privateKeyFromAsn1(ecAsn1);
}

{
    // public key from https://datatracker.ietf.org/doc/html/rfc8410#section-10.1
    const ecBytes = Buffer.from(
        'MCowBQYDK2VwAyEAGb9ECWmEzf6FQbrBZ9w7lshQhqowtrbLDFw4rXAxZuE=',
        'base64'
    ).toString('binary');
    const ecAsn1 = forge.asn1.fromDer(forge.util.createBuffer().putBytes(ecBytes));
    forge.pki.ed25519.publicKeyFromAsn1(ecAsn1);
}

{
    let byteBuffer: forge.util.ByteBuffer = forge.pki.getPublicKeyFingerprint(cert.publicKey, {
        type: 'SubjectPublicKeyInfo',
        md: forge.md.sha256.create(),
    });

    let hex: forge.Hex = forge.pki.getPublicKeyFingerprint(cert.publicKey, {
        type: 'SubjectPublicKeyInfo',
        md: forge.md.sha256.create(),
        encoding: 'hex'
    });

    let bytes: forge.Bytes = forge.pki.getPublicKeyFingerprint(cert.publicKey, {
        type: 'SubjectPublicKeyInfo',
        md: forge.md.sha256.create(),
        encoding: 'binary'
    });
}

{
    let p7 = forge.pkcs7.createEnvelopedData();
    let cert = forge.pki.certificateFromPem(certPem);
    p7.addRecipient(cert);
    p7.content = forge.util.createBuffer('content');
    p7.encrypt();
    let asn1: forge.asn1.Asn1 = p7.toAsn1();
}

{
    let key = null;
    let cert = forge.pki.createCertificate();
    let password = null;
    let p17 = forge.pkcs12.toPkcs12Asn1(key, cert, password);
}

{
    let plainText = 'content'
    let cipher = publicKeyRsa.encrypt(plainText);
    let result = privateKeyRsa.decrypt(cipher);
    if (result !== plainText) {
        throw new Error('decrypt result not match')
    }
}
{
    let decrypedRsa: forge.pki.rsa.PrivateKey = forge.pki.decryptRsaPrivateKey(privateKeyPem);
}

{
    publicKeyRsa.n.bitLength();
}

{
  const hmac = forge.hmac.create();
  hmac.start('md5', 'Jefe');
  hmac.update('what do ya want for nothing?');
  const ret = hmac.digest().toHex();
}

{
  const hmac = forge.hmac.create();
  hmac.start('sha1', 'Jefe');
  hmac.update('what do ya want for nothing?');
  const ret = hmac.digest().toHex();
}

{
  const hmac = forge.hmac.create();
  hmac.start('sha256', 'Jefe');
  hmac.update('what do ya want for nothing?');
  const ret = hmac.digest().toHex();
}

{
  const hmac = forge.hmac.create();
  hmac.start('sha512', 'Jefe');
  hmac.update('what do ya want for nothing?');
  const ret = hmac.digest().toHex();
}

{
    // constructor tests
    const bn = new forge.jsbn.BigInteger("AABB", 16);
    const bn2 = new forge.jsbn.BigInteger("75643564363473453456342378564387956906736546456235345");
}

{
    // method tests
    let isBigInteger: forge.jsbn.BigInteger;
    let isNumber: number;
    let isBoolean: boolean;
    let isString: string;
    let isDivmod: forge.jsbn.BigInteger[];
    let isByteArray: number[];

    const bn = new forge.jsbn.BigInteger("75643564363473453456342378564387956906736546456235345");

    isString = bn.toString();
    isString = bn.toString(16);
    isBigInteger = bn.negate();
    isBigInteger = bn.abs();
    isNumber = bn.compareTo(bn);
    isNumber = bn.bitLength();
    isBigInteger = bn.mod(bn);
    isBigInteger = bn.modPowInt(0, bn);
    isBigInteger = bn.clone();
    isNumber = bn.intValue();
    isNumber = bn.byteValue();
    isNumber = bn.shortValue();
    isNumber = bn.signum();
    isByteArray = bn.toByteArray();
    isBoolean = bn.equals(bn);
    isBigInteger = bn.min(bn);
    isBigInteger = bn.max(bn);
    isBigInteger = bn.and(bn);
    isBigInteger = bn.or(bn);
    isBigInteger = bn.xor(bn);
    isBigInteger = bn.andNot(bn);
    isBigInteger = bn.not();
    isBigInteger = bn.shiftLeft(0);
    isBigInteger = bn.shiftRight(0);
    isNumber = bn.getLowestSetBit();
    isNumber = bn.bitCount();
    isBoolean = bn.testBit(0);
    isBigInteger = bn.clearBit(0);
    isBigInteger = bn.flipBit(0);
    isBigInteger = bn.add(bn);
    isBigInteger = bn.subtract(bn);
    isBigInteger = bn.multiply(bn);
    isBigInteger = bn.squareTo(bn);
    isBigInteger = bn.divide(bn);
    isBigInteger = bn.remainder(bn);
    isDivmod = bn.divideAndRemainder(bn);
    isBigInteger = bn.pow(0);
    isBigInteger = bn.modPow(bn, bn);
    isBigInteger = bn.gcd(bn);
    isBigInteger = bn.modInverse(bn);
    isBoolean = bn.isProbablePrime(0);
}

{
    forge.pki.rsa.generateKeyPair({ bits: 2048,}, (err, keypair) => {
        if (err) {
            throw err;
        }
        const msg = '0102030405060708090a0b0c0d0e0f00';
        keypair.privateKey.sign(forge.util.hexToBytes(msg), 'NONE');
    });
}
