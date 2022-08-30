import { KJUR, ASN1HEX, KEYUTIL, b64toBA, b64tohex, RSAKey, X509, X509CRL } from 'jsrsasign';

const ec = new KJUR.crypto.ECDSA({ curve: 'secp256r1', pub: '1a2b3c', prv: '1a2b3c' });
ec.generateKeyPairHex();
ec.getPublicKeyXYHex();
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
x509crl.getRevCertArray();
