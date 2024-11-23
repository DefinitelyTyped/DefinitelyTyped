import { ASN1HEX, b64toBA, b64tohex, KEYUTIL, KJUR, RSAKey, X509, X509CRL } from "jsrsasign";

const ec = new KJUR.crypto.ECDSA({ curve: "secp256r1", pub: "1a2b3c", prv: "1a2b3c" });
ec.generateKeyPairHex();
ec.getPublicKeyXYHex();
ec.generatePublicKeyHex();
ec.parseSigHex("30...");
ec.parseSigHexInHexRS("30...");

const mac = new KJUR.crypto.Mac({ alg: "HS256", pass: { hex: "1a2b3c" } });
mac.setPassword("123-abc");
mac.setPassword({ rstr: "\x61\x61" });

KJUR.crypto.ECDSA.getName("2b8104000a");

new KJUR.asn1.cades.OtherHash("1234");
new KJUR.asn1.cades.OtherHash({ alg: "sha256", hash: "1234" });
new KJUR.asn1.cades.OtherHash({ alg: "sha256", cert: "" });
new KJUR.asn1.cades.OtherHash({ cert: "" });

new KJUR.asn1.x509.AuthorityKeyIdentifier({
    critical: true,
    kid: { hex: "89ab" },
    issuer: { str: "/C=US/CN=a" },
    sn: { hex: "1234" },
});

KEYUTIL.getKey("pemPKCS1PrivateKey");

KEYUTIL.generateKeypair("RSA", 2048); // $ExpectType { prvKeyObj: RSAKey; pubKeyObj: RSAKey; }
KEYUTIL.generateKeypair("EC", "secp256r1"); // $ExpectType { prvKeyObj: ECDSA; pubKeyObj: ECDSA; }

const key = new RSAKey();
const sig = key.signWithMessageHash("1234", "sha256");

key.verifyWithMessageHash("1234", sig); // $ExpectType boolean

b64toBA("ZXhhbXBsZQ=="); // $ExpectType number[]
b64tohex("ZXhhbXBsZQ=="); // $ExpectType string

const pemPublicKey = "74657374206365727469666963617465";
const pemCert = "A1UECBMFVG9reW8xEDAOBgNVBAcTB0NodW8ta3UxETAPBgNVBAoTCEZyYW5rNERE";
const PEM_CERTIFICATE = `-----BEGIN CERTIFICATE-----
MIIFtTCCA52gAwIBAgIJAO0cq2lJPZZJMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNV
BAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBX
aWRnaXRzIFB0eSBMdGQwHhcNMTQwMzEyMTc0NzU5WhcNMTkwMzEyMTc0NzU5WjBF
MQswCQYDVQQGEwJBVTETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50
ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIIC
CgKCAgEAsgzs6vN2sveHVraXV0zdoVyhWUHWNQ0xnhHTPhjt5ggHmSvrUxvUpXfK
WCP9gZo59Q7dx0ydjqBsdooXComVP4kGDjulvOHWgvcVmwTsL0bAMqmsCyyJKM6J
Wqi8E+CPTOpMBWdapUxvwaSmop8geiTtnX0aV4zGXwsz2mwdogbounQjMB/Ew7vv
8XtqwXSpnR7kM5HPfM7wb9F8MjlRuna6Nt2V7i0oUr+EEt6fIYEVZFiHTSUzDLaz
2eClJeCNdvyqaeGCCqs+LunMq3kZjO9ahtS2+1qZxfBzac/0KXRYnLa0kGQHZbw0
ecgdZC9YpqqMeTeSnJPPX4/TQt54qVLQXM3+h8xvwt3lItcJPZR0v+0yQe5QEwPL
4c5UF81jfGrYfEzmGth6KRImRMdFLF9+F7ozAgGqCLQt3eV2YMXIBYfZS9L/lO/Q
3m4MGARZXUE3jlkcfFlcbnA0uwMBSjdNUsw4zHjVwk6aG5CwYFYVHG9n5v4qCxKV
ENRinzgGRnwkNyADecvbcQ30/UOuhU5YBnfFSYrrhq/fyCbpneuxk2EouL3pk/GA
7mGzqhjPYzaaNGVZ8n+Yys0kxuP9XDOUEDkjXpa/SzeZEk9FXMlLc7Wydj/7ES4r
6SYCs4KMr+p7CjFg/a7IdepLQ3txrZecrBxoG5mBDYgCJCfLBu0CAwEAAaOBpzCB
pDAdBgNVHQ4EFgQUWQI/JOoU+RrUPUED63dMfd2JMFkwdQYDVR0jBG4wbIAUWQI/
JOoU+RrUPUED63dMfd2JMFmhSaRHMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpT
b21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGSCCQDt
HKtpST2WSTAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4ICAQBwGbAmiLHE
jubdLeMygwrV8VjlOVxV41wvRi6y1B5Bdvh71HPoOZdvuiZOogzxB22Tzon6Uv5q
8uuAy37rHLlQTOqLwdLJOu/ijMirAkh13gQWt4oZGUDikyiI4PMNo/hr6XoZWUfU
fwmcAzoEMln8HyISluTau1mtQIDgvGprU472GqC4AC7bYeED+ChCevc7Ytjl4zte
/tw8u3nqrkESYBIA2yEgyFAr1pRwJPM/T1U6Ehalp1ZTeQcAXEa7IC6ht2NlN1FC
fk2KQmrk4Z3jaSVv8GxshA354W+UEpti0o6Fv+2ozkAaQ1/xjiNwBTHtgJ1/AG1j
bDYcCFfmYmND0RFjvVu7ma+UNdKQ+t1o7ip4tHQUTEFvdqoaCLN09PcTVgvm71Lr
s8IOldiMgiCjQK3e0jwXx78tXs/msMzVI+9AR9aNzo0Y42C97ctlGu3+v07Zp+x4
6w1rg3eklJM02davNWK2EUSetn9EWsIJXU34Bj7mnI/2DFo292GVNw1kT5Bf4IvA
T74gsJLB6wacN4Ue6zPtIvrK93DABAfRUmrAWmH8+7MJolSC/rabJF3E2CeBTYqZ
R5M5azDV1CIhIeOTiPA/mq5fL1UrgVbB+IATIsUAQfuWivDyoeu96LB/QswyHAWG
8k2fPbA2QVWJpcnryesCy3qtzwbHSYbshQ==
-----END CERTIFICATE-----
`;

KJUR.jws.JWS.sign(null, { alg: "HS256" }, "payload", undefined, { utf8: "123abc" });
KJUR.jws.JWS.sign(null, { alg: "HS256" }, "payload", undefined, "123abc");
KJUR.jws.JWS.sign(null, { alg: "HS256" }, "payload", pemPublicKey, "123abc");
KJUR.jws.JWS.sign(null, { alg: "HS256" }, "payload", { b64: "ZXhhbXBsZQ==" }, "123abc");

KJUR.jws.JWS.verifyJWT("", new RSAKey(), {});
KJUR.jws.JWS.verifyJWT("", "", {});
KJUR.jws.JWS.verifyJWT("", "", { gracePeriod: 1 });

const pubKey = KEYUTIL.getKey(pemPublicKey); // or certificate
const x509 = new X509();
x509.readCertPEM(pemCert);
x509.verifySignature(pubKey); // $ExpectType boolean
x509.verifySignature(pemCert); // $ExpectType boolean
x509.getExtSubjectKeyIdentifier("sampleExt", true); // $ExpectType { extname: string; kid: Hex; critical?: boolean | undefined; }
x509.getSubject(); // $ExpectType IdentityResponse
x509.getIssuer(); // $ExpectType IdentityResponse
x509.getExtAuthorityKeyIdentifier("sampleExt", true); // $ExpectType AuthorityKeyIdentifierResult

const params = KJUR.asn1.csr.CSRUtil.getParam(pemCert); // $ExpectType ParamResponse
const crq = new KJUR.asn1.csr.CertificationRequest(params);
crq.getPEM(); // $ExpectType string
const crqi = new KJUR.asn1.csr.CertificationRequestInfo(params);
crqi.getEncodedHex(); // $ExpectType string
const crqi2 = new KJUR.asn1.csr.CertificationRequestInfo();
crqi2.setByParam(params);
crqi2.getEncodedHex(); // $ExpectType string

const tbscert = new KJUR.asn1.x509.TBSCertificate({
    version: 3, // this can be omitted, the default is 3.
    serial: { hex: "1234..." }, // DERInteger parameter
    sigalg: "SHA256withRSA",
    issuer: { array: [[{ type: "O", value: "Test", ds: "prn" }]] }, // X500Name parameter
    notbefore: "151231235959Z", // string, passed to Time
    notafter: "251231235959Z", // string, passed to Time
    subject: { array: [[{ type: "O", value: "Test", ds: "prn" }]] }, // X500Name parameter
    sbjpubkey: "-----BEGIN...", // KEYUTIL.getKey pubkey parameter
    // As for extension parameters, please see extension class
    // All extension parameters need to have "extname" parameter additionaly.
    ext: [
        {
            extname: "keyUsage",
            critical: true,
            names: ["digitalSignature", "keyEncipherment"],
        },
        {
            extname: "authorityKeyIdentifier",
            critical: true,
            kid: { hex: "01020304" },
            issuer: { str: "/C=US/CN=TEST" },
            sn: { hex: "01020304" },
        },
        {
            extname: "cRLDistributionPoints",
            array: [{ dpname: { full: [{ uri: "http://example.com/a1.crl" }] } }],
        },
    ],
});
new KJUR.asn1.x509.Certificate({ tbsobj: tbscert, sigalg: "SHA256withRSA", cakey: "------BEGIN..." });

// ASN1HEX
ASN1HEX.checkStrictDER("0203012345");
ASN1HEX.oidname("551d25");
ASN1HEX.getString("01020304", 0);

// X509CRL
const x509crl = new X509CRL(`-----BEGIN X509 CRL-----
MIIBGDCBwwIBATANBgkqhkiG9w0BAQQFADB0MQswCQYDVQQGEwJKUDERMA8GA1UECBMIS2FuYWdhd2ExFTATBgNVBAcTDFlva29oYW1hLXNoaTERMA8GA1UEChMITE9D
QUwtQ0ExDDAKBgNVBAsTA2NhMTEaMBgGA1UEAxMRY2ExLmhpdGFjaGkuY28uanAX
DTAxMDgyOTA0NDIzMFoXDTAxMDgzMDA1NTIzMFowGzAZAghx2Sa8AAAAARcNMDEw
ODI4MDQ1MTI5WjANBgkqhkiG9w0BAQQFAANBAJorY7DUJ91uthNlAA+PT6zw6rVo
uZLFeYZPNVXgF217YOCtJtKDT+16bR5kgk0p/1xIbgReshjMNTmXPqARNjE=
-----END X509 CRL-----`);
x509crl.getIssuer();
x509crl.getRevCertArray(); // $ExpectType RevokedCertificate[] | null
x509crl.findRevCert(PEM_CERTIFICATE);
x509crl.findRevCertBySN("0000");
x509crl.getParam();


const paramOrg = {
    "version": 1,
    "hashalgs": [
        "sha256"
    ],
    "econtent": {
        "type": "data",
        "content": {
            "str": "{\"id\":\"299bfdd4-6437-4aac-baf0-78ceddf5acff\",\"aip\":\"mailto:test.aip@datakaveri.org\",\"dataPrincipal\":{\"id\":\"T26170131559\",\"idType\":\"PPB Number\"},\"purposes\":[{\"code\":\"B1\"}],\"itemId\":\"d3b7d827-8617-418a-a22b-0621aca2ee30\",\"itemType\":\"resource\",\"expiry\":\"2024-11-06T00:00:00.000Z\",\"createdAt\":\"2024-11-23T10:40:07.483Z\",\"consentUseLogTo\":\"https://consent.adex.iudx.io\",\"dataAccessLogTo\":\"https://gateway.adex.iudx.io\",\"aiu\":\"mailto:test.aiu@datakaveri.org\"}"
        }
    },
    "sinfos": [
        {
            "version": 1,
            "id": {
                "type": "isssn",
                "cert": "-----BEGIN CERTIFICATE-----\r\nMIIDmjCCAoKgAwIBAgIUPm2DqtwN0/JOREckQbYhHI60iP8wDQYJKoZIhvcNAQEL\r\nBQAwGTEXMBUGA1UEAwwOZmFrZWNhLml1ZHguaW8wHhcNMjQxMDI5MDkxNjM0WhcN\r\nMjUxMDI5MDkxNjM0WjAvMQswCQYDVQQGEwJJTjEgMB4GA1UEAwwXdGVzdC5haXBA\r\nZGF0YWthdmVyaS5vcmcwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCz\r\nFgh08JTzYYiSGBHtKQUsinOsjRMGsGEeP7m4TFTODEsyUfItuQrWsi9LRtzrFigq\r\nOde+bI67aBUj3krM2JfPe/1aDASnS8tjff9A9IrX5y9rAdaa0rZBPtWaNWai+s1/\r\ncD5CIb4rB5PHcJL/SnlBgbKtBylP4d/mRO+m/abx3tMXuOvEiGufhrCDrz6NT/B4\r\npqln+ChdpNb/1N4GLHYhb0aRXa+eHqWliJW5+TJB6Y3aNUutO2Yc02Sa5S4GD6xD\r\ny7nzTxWzrS93V+7fvFZk+DL3xZyY9gXD3YfW9EjG53gwbS3WiC4PBeJqUfR3HJnI\r\ngfIfsuNmZumufMjeECDvAgMBAAGjgcMwgcAwDgYDVR0PAQH/BAQDAgbAMB0GA1Ud\r\nDgQWBBTcnrsUPuS9CSQrV0YIKI+4P97atTAfBgNVHSMEGDAWgBQQmPVY2VIxLDbC\r\nr491i0Xlz9ECZzAlBgNVHREBAf8EGzAZgRd0ZXN0LmFpcEBkYXRha2F2ZXJpLm9y\r\nZzBHBgNVHR8BAf8EPTA7MDmgJaAjhiFodHRwczovL2Zha2VjYS5pdWR4LmlvL2Zh\r\na2VjYS5jcmyiEIIOZmFrZWNhLml1ZHguaW8wDQYJKoZIhvcNAQELBQADggEBAFTs\r\n/W/ONQebv+tN0A52AtE3YZ4WXcwHHi0wF4MFQV/qmEygmV8ZPJQ+6x5z02KnDLcE\r\nXSFWH5b0Fhrj7OPB5Smnnd47syRVuDHIteAFdx8c2Ds65Mrui2Rv1yZnepwTwVtz\r\n1S6pRV/G4C8Ym91s27pfhFa9Pj5LvGgviZiFOJ/GibJcm9n19UIn1qFMg6TYTmkl\r\n6NzAZK2r2icNtWuSHWFY2rD2LEH3dorduUrfX+ykxUwVPDb7DQs4JJHu8h3+8AlM\r\nkSegyo4FGaXAmTHvMUW7d626WGyZIBWVnWFqyqY4p3BvoAl3ByxCTtUiKCb/jNGm\r\nq2EAY77Z7TqDLdfzVlY=\r\n-----END CERTIFICATE-----\r\n"
            },
            "hashalg": "sha256",
            "sattrs": {
                "array": [
                    {
                        "attr": "contentType",
                        "type": "data"
                    },
                    {
                        "attr": "messageDigest",
                        "hex": "c2a27013852863110b45bf9657e3cdee1c0afd9dd8a30bffe9e974d432dfbfde"
                    },
                    {
                        "attr": "signingTime"
                    },
                    {
                        "attr": "signingCertificateV2",
                        "array": [
                            "-----BEGIN CERTIFICATE-----\r\nMIIDmjCCAoKgAwIBAgIUPm2DqtwN0/JOREckQbYhHI60iP8wDQYJKoZIhvcNAQEL\r\nBQAwGTEXMBUGA1UEAwwOZmFrZWNhLml1ZHguaW8wHhcNMjQxMDI5MDkxNjM0WhcN\r\nMjUxMDI5MDkxNjM0WjAvMQswCQYDVQQGEwJJTjEgMB4GA1UEAwwXdGVzdC5haXBA\r\nZGF0YWthdmVyaS5vcmcwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCz\r\nFgh08JTzYYiSGBHtKQUsinOsjRMGsGEeP7m4TFTODEsyUfItuQrWsi9LRtzrFigq\r\nOde+bI67aBUj3krM2JfPe/1aDASnS8tjff9A9IrX5y9rAdaa0rZBPtWaNWai+s1/\r\ncD5CIb4rB5PHcJL/SnlBgbKtBylP4d/mRO+m/abx3tMXuOvEiGufhrCDrz6NT/B4\r\npqln+ChdpNb/1N4GLHYhb0aRXa+eHqWliJW5+TJB6Y3aNUutO2Yc02Sa5S4GD6xD\r\ny7nzTxWzrS93V+7fvFZk+DL3xZyY9gXD3YfW9EjG53gwbS3WiC4PBeJqUfR3HJnI\r\ngfIfsuNmZumufMjeECDvAgMBAAGjgcMwgcAwDgYDVR0PAQH/BAQDAgbAMB0GA1Ud\r\nDgQWBBTcnrsUPuS9CSQrV0YIKI+4P97atTAfBgNVHSMEGDAWgBQQmPVY2VIxLDbC\r\nr491i0Xlz9ECZzAlBgNVHREBAf8EGzAZgRd0ZXN0LmFpcEBkYXRha2F2ZXJpLm9y\r\nZzBHBgNVHR8BAf8EPTA7MDmgJaAjhiFodHRwczovL2Zha2VjYS5pdWR4LmlvL2Zh\r\na2VjYS5jcmyiEIIOZmFrZWNhLml1ZHguaW8wDQYJKoZIhvcNAQELBQADggEBAFTs\r\n/W/ONQebv+tN0A52AtE3YZ4WXcwHHi0wF4MFQV/qmEygmV8ZPJQ+6x5z02KnDLcE\r\nXSFWH5b0Fhrj7OPB5Smnnd47syRVuDHIteAFdx8c2Ds65Mrui2Rv1yZnepwTwVtz\r\n1S6pRV/G4C8Ym91s27pfhFa9Pj5LvGgviZiFOJ/GibJcm9n19UIn1qFMg6TYTmkl\r\n6NzAZK2r2icNtWuSHWFY2rD2LEH3dorduUrfX+ykxUwVPDb7DQs4JJHu8h3+8AlM\r\nkSegyo4FGaXAmTHvMUW7d626WGyZIBWVnWFqyqY4p3BvoAl3ByxCTtUiKCb/jNGm\r\nq2EAY77Z7TqDLdfzVlY=\r\n-----END CERTIFICATE-----\r\n"
                        ]
                    }
                ]
            },
            "sigalg": "SHA256withRSA",
            "signkey": "-----BEGIN RSA PRIVATE KEY-----\r\nMIIEowIBAAKCAQEAsxYIdPCU82GIkhgR7SkFLIpzrI0TBrBhHj+5uExUzgxLMlHy\r\nLbkK1rIvS0bc6xYoKjnXvmyOu2gVI95KzNiXz3v9WgwEp0vLY33/QPSK1+cvawHW\r\nmtK2QT7VmjVmovrNf3A+QiG+KweTx3CS/0p5QYGyrQcpT+Hf5kTvpv2m8d7TF7jr\r\nxIhrn4awg68+jU/weKapZ/goXaTW/9TeBix2IW9GkV2vnh6lpYiVufkyQemN2jVL\r\nrTtmHNNkmuUuBg+sQ8u5808Vs60vd1fu37xWZPgy98WcmPYFw92H1vRIxud4MG0t\r\n1oguDwXialH0dxyZyIHyH7LjZmbprnzI3hAg7wIDAQABAoIBAA7ANb62fEZWiWKJ\r\nmgLM7XcSoysaZm+w6Ob0ovsDsO6IQ7KOEZXjinmBrSfIDluzJ2hglR0puurDzKeR\r\nYHVIyxEh6nQ+AWCFFTUjBGEL/Q21WXBsDKQTz0N57F7EORAbYWbQTq7kZNINhAYa\r\nIMZNxfjeOOKyPTX66fxncpsjt6cI98sY0hM04eoDHgPEgKFQLh7RrzOFCE3iaXeT\r\n6A43Gk5ULu0r8QwL7nw346bX9OmmZ34/Jyv5LjfWjXAmXtNk3IhsYCKV8FyxWxrp\r\n6hjgmnCH41+2NhxXVVBovX4nXXcyrAYOi0OYSt1lb8rrQh4+Ee+SXLGZaV6R1BAi\r\nBZoyPcECgYEA6tvcXS7f1ScEt/5k41yR2UYHuG2WY/PC6qZSjn+9BnGke7nblEFt\r\nZgOYdZh11DyBikaoZDtF/J7c8Rh5JkVXU3Zo226sxsk3mU5tBC8DApy4bCuP0NnY\r\n7wz9NS16F58yaRoG/yGtHNUQjNKmmN+qSJN/ErI1sLK3634DrmBH7y8CgYEAwzTu\r\npo0r8Sox3sZcOJHwD05wimZIyuaB7MlTqaiJAtZgfRZhPu95x6NEXv/diDMlYsSx\r\nnTwT4LJEo/P7uy79wDJv45vJpiamLWkzOBFfzJzJ0rhZgVJIYSsNoIXvWPqXR8M+\r\nFtEt8VuiVU4mblfRdeDOGwlwLUg+kCX4JqUwekECgYEA3q6GO4glTNpJHBfGGtl7\r\npHJFAbZOgQjwSEJZRqmRVZnM5k8sBl8e1joUhXOATTLtdGlYYmjdDBCo1qRowkO+\r\n7/D2rRA8G+NPpzl4Hh5hEUn9hvqqytCzYr2DG7e56snUJ1k5RxDsLclLfuqAcbSo\r\npVXMh7KXO6nIvy1lWiIKMpsCgYAxrfv6qT0AsHNmtebsgr+stZLQtj1aXhW81HQV\r\nXo4YCcUesJ5pLPs6QqP45XdU3WdrXpGxaYPJkLUFYOe0+L2dt3hgXdqRDY8HSZm+\r\ncDWIVnLKzR4CWpWPHSznqI6Ef6oWmmrn1a6ymVaUDUKcnH7zWBY8LUe+Tn+VogQo\r\nmavfwQKBgCpbxA2ykC5+wP+shjiHZIXeTR/t7SrqXTpJS+/WsVulqC/9OZahZPNM\r\nyKmt6E8gbG1Bu45SxGCXr/V2snDcfizx9WoAnsn9vA1agihD1Slz97hnXwh4kz76\r\nXqBcsX5HonkTPiOz3PcarGo0SOxBNtf2uPiXLK10eTK9tCUpNKdD\r\n-----END RSA PRIVATE KEY-----\r\n",
            "sighex": "39d5989b2ae6b62357c450997906ed63454ac90db549c88fa6e8033ea25bae05cfacf275de1225cac8ce0fa1c1107f62252768c0327b9ce45c6c7a4b2354ac2a3fb1a0e90454e817aed0289bc70e81cd8211af85d76eb739d3fe9460ccdf6d40f4f05e4003f84e9263318bf118b16731fa04964b88630e9d4d7cd1e0c22afd6fd52229e72022dd834d783135c9c5da66bf5359e7f7c1b61fa1b353957969a0e134542bbdd61a59e3c46bb5902a83e265bc7b5a5c2dba03c32066978af19951845cb8aa97c90961a735156b64447ef890ed6db22f1b2db098dd93b9d149a6672cc78d4349bb9f0d6f1340c96f1bcfbc24de5fba8f970364e8e973eb78dd33717b"
        }
    ],
    "certs": [
        "-----BEGIN CERTIFICATE-----\r\nMIIDmjCCAoKgAwIBAgIUPm2DqtwN0/JOREckQbYhHI60iP8wDQYJKoZIhvcNAQEL\r\nBQAwGTEXMBUGA1UEAwwOZmFrZWNhLml1ZHguaW8wHhcNMjQxMDI5MDkxNjM0WhcN\r\nMjUxMDI5MDkxNjM0WjAvMQswCQYDVQQGEwJJTjEgMB4GA1UEAwwXdGVzdC5haXBA\r\nZGF0YWthdmVyaS5vcmcwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCz\r\nFgh08JTzYYiSGBHtKQUsinOsjRMGsGEeP7m4TFTODEsyUfItuQrWsi9LRtzrFigq\r\nOde+bI67aBUj3krM2JfPe/1aDASnS8tjff9A9IrX5y9rAdaa0rZBPtWaNWai+s1/\r\ncD5CIb4rB5PHcJL/SnlBgbKtBylP4d/mRO+m/abx3tMXuOvEiGufhrCDrz6NT/B4\r\npqln+ChdpNb/1N4GLHYhb0aRXa+eHqWliJW5+TJB6Y3aNUutO2Yc02Sa5S4GD6xD\r\ny7nzTxWzrS93V+7fvFZk+DL3xZyY9gXD3YfW9EjG53gwbS3WiC4PBeJqUfR3HJnI\r\ngfIfsuNmZumufMjeECDvAgMBAAGjgcMwgcAwDgYDVR0PAQH/BAQDAgbAMB0GA1Ud\r\nDgQWBBTcnrsUPuS9CSQrV0YIKI+4P97atTAfBgNVHSMEGDAWgBQQmPVY2VIxLDbC\r\nr491i0Xlz9ECZzAlBgNVHREBAf8EGzAZgRd0ZXN0LmFpcEBkYXRha2F2ZXJpLm9y\r\nZzBHBgNVHR8BAf8EPTA7MDmgJaAjhiFodHRwczovL2Zha2VjYS5pdWR4LmlvL2Zh\r\na2VjYS5jcmyiEIIOZmFrZWNhLml1ZHguaW8wDQYJKoZIhvcNAQELBQADggEBAFTs\r\n/W/ONQebv+tN0A52AtE3YZ4WXcwHHi0wF4MFQV/qmEygmV8ZPJQ+6x5z02KnDLcE\r\nXSFWH5b0Fhrj7OPB5Smnnd47syRVuDHIteAFdx8c2Ds65Mrui2Rv1yZnepwTwVtz\r\n1S6pRV/G4C8Ym91s27pfhFa9Pj5LvGgviZiFOJ/GibJcm9n19UIn1qFMg6TYTmkl\r\n6NzAZK2r2icNtWuSHWFY2rD2LEH3dorduUrfX+ykxUwVPDb7DQs4JJHu8h3+8AlM\r\nkSegyo4FGaXAmTHvMUW7d626WGyZIBWVnWFqyqY4p3BvoAl3ByxCTtUiKCb/jNGm\r\nq2EAY77Z7TqDLdfzVlY=\r\n-----END CERTIFICATE-----\r\n"
    ]
};

const param = JSON.parse(JSON.stringify(paramOrg));
new KJUR.asn1.cms.SignedData(param);
const hCmsSignedData = sd.getContentInfoEncodedHex();
let pem = KJUR.asn1.ASN1Util.getPEMStringFromHex(hCmsSignedData, 'CMS');  // $ExpectType string
    
