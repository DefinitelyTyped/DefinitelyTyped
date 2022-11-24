import { KJUR, ASN1HEX, KEYUTIL, b64toBA, b64tohex, RSAKey, X509, X509CRL } from 'jsrsasign';

const ec = new KJUR.crypto.ECDSA({ curve: 'secp256r1', pub: '1a2b3c', prv: '1a2b3c' });
ec.generateKeyPairHex();
ec.getPublicKeyXYHex();
ec.generatePublicKeyHex();
ec.parseSigHex('30...');
ec.parseSigHexInHexRS('30...');

const mac = new KJUR.crypto.Mac({ alg: 'HS256', pass: { hex: '1a2b3c' } });
mac.setPassword('123-abc');
mac.setPassword({ rstr: '\x61\x61' });

KJUR.crypto.ECDSA.getName('2b8104000a');

new KJUR.asn1.cades.OtherHash('1234');
new KJUR.asn1.cades.OtherHash({ alg: 'sha256', hash: '1234' });
new KJUR.asn1.cades.OtherHash({ alg: 'sha256', cert: '' });
new KJUR.asn1.cades.OtherHash({ cert: '' });

new KJUR.asn1.x509.AuthorityKeyIdentifier({
    critical: true,
    kid: { hex: '89ab' },
    issuer: { str: '/C=US/CN=a' },
    sn: { hex: '1234' },
});

KEYUTIL.getKey('pemPKCS1PrivateKey');

b64toBA('ZXhhbXBsZQ=='); // $ExpectType number[]
b64tohex('ZXhhbXBsZQ=='); // $ExpectType string

const pemPublicKey = '74657374206365727469666963617465';
const pemCert = 'A1UECBMFVG9reW8xEDAOBgNVBAcTB0NodW8ta3UxETAPBgNVBAoTCEZyYW5rNERE';
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

KJUR.jws.JWS.sign(null, { alg: 'HS256' }, 'payload', undefined, { utf8: '123abc' });
KJUR.jws.JWS.sign(null, { alg: 'HS256' }, 'payload', undefined, '123abc');
KJUR.jws.JWS.sign(null, { alg: 'HS256' }, 'payload', pemPublicKey, '123abc');
KJUR.jws.JWS.sign(null, { alg: 'HS256' }, 'payload', { b64: 'ZXhhbXBsZQ==' },  '123abc');

KJUR.jws.JWS.verifyJWT('', new RSAKey(), {});
KJUR.jws.JWS.verifyJWT('', '', {});
KJUR.jws.JWS.verifyJWT('', '', { gracePeriod: 1 });

const pubKey = KEYUTIL.getKey(pemPublicKey); // or certificate
const x509 = new X509();
x509.readCertPEM(pemCert);
x509.verifySignature(pubKey); // $ExpectType boolean
x509.verifySignature(pemCert); // $ExpectType boolean
x509.getExtSubjectKeyIdentifier('sampleExt', true); // $ExpectType { extname: string; kid: Hex; critical?: boolean | undefined; }
x509.getSubject(); // $ExpectType IdentityResponse
x509.getIssuer(); // $ExpectType IdentityResponse
x509.getExtAuthorityKeyIdentifier('sampleExt', true); // $ExpectType AuthorityKeyIdentifierResult

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
    serial: { hex: '1234...' }, // DERInteger parameter
    sigalg: 'SHA256withRSA',
    issuer: { array: [[{ type: 'O', value: 'Test', ds: 'prn' }]] }, // X500Name parameter
    notbefore: '151231235959Z', // string, passed to Time
    notafter: '251231235959Z', // string, passed to Time
    subject: { array: [[{ type: 'O', value: 'Test', ds: 'prn' }]] }, // X500Name parameter
    sbjpubkey: '-----BEGIN...', // KEYUTIL.getKey pubkey parameter
    // As for extension parameters, please see extension class
    // All extension parameters need to have "extname" parameter additionaly.
    ext: [
        {
            extname: 'keyUsage',
            critical: true,
            names: ['digitalSignature', 'keyEncipherment'],
        },
        {
            extname: 'cRLDistributionPoints',
            array: [{ dpname: { full: [{ uri: 'http://example.com/a1.crl' }] } }],
        },
    ],
});
new KJUR.asn1.x509.Certificate({ tbsobj: tbscert, sigalg: 'SHA256withRSA', cakey: '------BEGIN...' });

// ASN1HEX
ASN1HEX.checkStrictDER('0203012345');
ASN1HEX.oidname('551d25');

// X509CRL
const x509crl = new X509CRL(`-----BEGIN X509 CRL-----
MIIBGDCBwwIBATANBgkqhkiG9w0BAQQFADB0MQswCQYDVQQGEwJKUDERMA8GA1UECBMIS2FuYWdhd2ExFTATBgNVBAcTDFlva29oYW1hLXNoaTERMA8GA1UEChMITE9D
QUwtQ0ExDDAKBgNVBAsTA2NhMTEaMBgGA1UEAxMRY2ExLmhpdGFjaGkuY28uanAX
DTAxMDgyOTA0NDIzMFoXDTAxMDgzMDA1NTIzMFowGzAZAghx2Sa8AAAAARcNMDEw
ODI4MDQ1MTI5WjANBgkqhkiG9w0BAQQFAANBAJorY7DUJ91uthNlAA+PT6zw6rVo
uZLFeYZPNVXgF217YOCtJtKDT+16bR5kgk0p/1xIbgReshjMNTmXPqARNjE=
-----END X509 CRL-----`);
x509crl.getIssuer();
x509crl.getRevCertArray();
x509crl.findRevCert(PEM_CERTIFICATE);
x509crl.findRevCertBySN('0000');
x509crl.getParam();
