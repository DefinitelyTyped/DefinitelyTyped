import * as forge from "node-forge";

let keypair = forge.pki.rsa.generateKeyPair({ bits: 512 });
let privateKeyPem = forge.pki.privateKeyToPem(keypair.privateKey);
let publicKeyPem = forge.pki.publicKeyToPem(keypair.publicKey);
let key = forge.pki.decryptRsaPrivateKey(privateKeyPem);
let x: string = forge.ssh.privateKeyToOpenSSH(key);
let pemKey: forge.pki.PEM = publicKeyPem;
let publicKeyRsa = forge.pki.publicKeyFromPem(pemKey);
let privateKeyRsa = forge.pki.privateKeyFromPem(privateKeyPem);

{
    let subjectPublicKeyInfo = forge.asn1.create(forge.asn1.Class.UNIVERSAL, forge.asn1.Type.SEQUENCE, true, [
        forge.asn1.create(forge.asn1.Class.UNIVERSAL, forge.asn1.Type.SEQUENCE, true, [
            forge.asn1.create(forge.asn1.Class.UNIVERSAL, forge.asn1.Type.OID, false,
                forge.asn1.oidToDer(forge.pki.oids['rsaEncryption']).getBytes(),
            ),
            forge.asn1.create(forge.asn1.Class.UNIVERSAL, forge.asn1.Type.NULL, false, ''),
        ]),
        forge.asn1.create(forge.asn1.Class.UNIVERSAL, forge.asn1.Type.BITSTRING, false, [
            forge.asn1.create(forge.asn1.Class.UNIVERSAL, forge.asn1.Type.SEQUENCE, true, [
                forge.asn1.create(forge.asn1.Class.UNIVERSAL, forge.asn1.Type.INTEGER, false, []),
                forge.asn1.create(forge.asn1.Class.UNIVERSAL, forge.asn1.Type.INTEGER, false, []),
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
    if (encode !== '0000' || src.byteLength !== decode.byteLength) throw Error('forge.util.binary.hex.encode / decode fail');

    src = new Uint8Array(2);
    encode = forge.util.binary.base64.encode(src);
    decode = forge.util.binary.base64.decode(encode);
    if (encode !== 'AAA=' || src.byteLength !== decode.byteLength) throw Error('forge.util.binary.base64.encode / decode fail');

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
    let payload = { "asd": "asd" }
    let cipher = forge.cipher.createCipher(
        "3DES-ECB",
        forge.util.createBuffer(key, "raw")
    );
    cipher.start();
    cipher.update(forge.util.createBuffer(JSON.stringify(payload), "raw"));
    cipher.finish();
    let encrypted = cipher.output;
    let token = forge.util.encode64(encrypted.getBytes());

    let decipher = forge.cipher.createDecipher(
        "3DES-ECB",
        forge.util.createBuffer(key, "raw")
    );
    decipher.start();
    decipher.update(forge.util.createBuffer(forge.util.decode64(token), "raw"));
    decipher.finish();
    let decrypted = decipher.output as forge.util.ByteStringBuffer;
    let content = JSON.parse(forge.util.encodeUtf8(decrypted.getBytes()));

    if (content.asd == payload.asd) throw Error('forge.cipher.createCipher failed');
}