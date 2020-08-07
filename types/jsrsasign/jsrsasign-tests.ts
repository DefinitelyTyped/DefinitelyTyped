import { KJUR, KEYUTIL, b64toBA, b64tohex } from 'jsrsasign';

const ec = new KJUR.crypto.ECDSA({ curve: 'secp256r1' });
ec.generateKeyPairHex();
ec.getPublicKeyXYHex();
ec.parseSigHex('30...');
ec.parseSigHexInHexRS('30...');

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
