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
forge.pki.certificateFromAsn1(forge.pki.certificateToAsn1(cert));

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

    const attr: forge.pki.Attribute | undefined = cert.getAttribute({ name: "challengePassword" });


    // self-sign certificate
    cert.sign(keypair.privateKey, forge.md.sha256.create());
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
