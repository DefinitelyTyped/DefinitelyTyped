import { KJUR, KEYUTIL, b64toBA, b64tohex, RSAKey, X509 } from 'jsrsasign';

const ec = new KJUR.crypto.ECDSA({ curve: 'secp256r1' });
ec.generateKeyPairHex();
ec.getPublicKeyXYHex();
ec.parseSigHex('30...');
ec.parseSigHexInHexRS('30...');

const mac = new KJUR.crypto.Mac({ alg: 'HS256', pass: { hex: '1a2b3c' }});
mac.setPassword('123-abc');
mac.setPassword({ rstr: "\x61\x61"});

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

KJUR.jws.JWS.sign(null, { alg: 'HS256' }, 'payload', { utf8: '123abc' });
KJUR.jws.JWS.sign(null, { alg: 'HS256' }, 'payload', '123abc');

KJUR.jws.JWS.verifyJWT('', new RSAKey(), {});
KJUR.jws.JWS.verifyJWT('', '', {});
KJUR.jws.JWS.verifyJWT('', '', { gracePeriod: 1 });

const pemPublicKey = '74657374206365727469666963617465';
const pemCert = 'A1UECBMFVG9reW8xEDAOBgNVBAcTB0NodW8ta3UxETAPBgNVBAoTCEZyYW5rNERE';

const pubKey = KEYUTIL.getKey(pemPublicKey); // or certificate
const x509 = new X509();
x509.readCertPEM(pemCert);
x509.verifySignature(pubKey); // $ExpectType boolean
x509.verifySignature(pemCert); // $ExpectType boolean
