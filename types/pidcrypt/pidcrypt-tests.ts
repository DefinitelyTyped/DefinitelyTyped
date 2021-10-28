import "pidcrypt/seedrandom";
import pidCrypt = require("pidcrypt");

import "pidcrypt/aes_cbc";
{
    const aes_cbc = new pidCrypt.AES.CBC();
    const pw = 'some_password';
    const encrypted = aes_cbc.encryptText('some text', pw);
    const decrypted = aes_cbc.decryptText(encrypted, pw);
}

import "pidcrypt/aes_ctr";
{
    const aes_ctr = new pidCrypt.AES.CTR();
    const pw = 'some_password';
    const encrypted = aes_ctr.encryptText('some text', pw);
    const decrypted = aes_ctr.decryptText(encrypted, pw);
}

import "pidcrypt/asn1";
{
    const stream = new Stream([], 0);
    const asn1 = new pidCrypt.ASN1(stream, 0, 0, 0, 0);
    asn1.print();
}

import "pidcrypt/md5";
{
    const hash = pidCrypt.MD5("");
}

import "pidcrypt/sha1";
{
    const hash = pidCrypt.SHA1("");
}

import "pidcrypt/sha256";
{
    const hash = pidCrypt.SHA256("");
}

import "pidcrypt/sha512";
{
    const hash384 = pidCrypt.SHA384("", "HEX");
    const hash512 = pidCrypt.SHA512("", "B64");
}

import "pidcrypt/rsa";
{
    const rsa = new pidCrypt.RSA();
    const secure = rsa.encrypt("");
    const orig = rsa.decrypt("");
}
