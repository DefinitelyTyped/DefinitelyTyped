/// <reference types="node" />

/// <reference path="asn1.d.ts" />
/// <reference path="cipher.d.ts" />
/// <reference path="ed25519.d.ts" />
/// <reference path="hmac.d.ts" />
/// <reference path="jsbn.d.ts" />
/// <reference path="kem.d.ts" />
/// <reference path="md.d.ts" />
/// <reference path="md5.d.ts" />
/// <reference path="mgf1.d.ts" />
/// <reference path="oids.d.ts" />
/// <reference path="pbkdf2.d.ts" />
/// <reference path="pem.d.ts" />
/// <reference path="pkcs1.d.ts" />
/// <reference path="pkcs12.d.ts" />
/// <reference path="pkcs7.d.ts" />
/// <reference path="pki.d.ts" />
/// <reference path="pss.d.ts" />
/// <reference path="random.d.ts" />
/// <reference path="rc2.d.ts" />
/// <reference path="rsa.d.ts" />
/// <reference path="sha1.d.ts" />
/// <reference path="sha256.d.ts" />
/// <reference path="sha512.d.ts" />
/// <reference path="ssh.d.ts" />
/// <reference path="tls.d.ts" />
/// <reference path="util.d.ts" />

declare module "node-forge" {
    type Byte = number;
    type Bytes = string;
    type Hex = string;
    type Base64 = string;
    type Utf8 = string;
    type OID = string;
    type Encoding = "raw" | "utf8";
}
