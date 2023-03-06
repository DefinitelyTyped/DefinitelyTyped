import { Ber, BerWriter } from 'asn1';
import * as sshpk from 'sshpk';

// == signature.js == //

// $ExpectType Signature
const signature = sshpk.parseSignature('', 'dsa', 'asn1');
// $ExpectType Signature
sshpk.parseSignature(Buffer.alloc(0), 'ecdsa', 'raw');
// $ExpectType Signature
sshpk.parseSignature('', 'ed25519', 'ssh');
// $ExpectType Signature
sshpk.parseSignature('', 'rsa', 'ssh');

// $ExpectType Buffer
signature.toBuffer();
// $ExpectType Buffer
signature.toBuffer('asn1');
// $ExpectType Buffer
signature.toBuffer('raw');
// $ExpectType Buffer
signature.toBuffer('ssh');

// $ExpectType string
signature.toString();
// $ExpectType string
signature.toString('asn1');
// $ExpectType string
signature.toString('raw');
// $ExpectType string
signature.toString('ssh');

// == key.js == //

// $ExpectType Key
const key = sshpk.parseKey('');
// $ExpectType Key
sshpk.parseKey(Buffer.alloc(0), 'auto');
// $ExpectType Key
sshpk.parseKey('', 'dnssec', '');
// $ExpectType Key
sshpk.parseKey('', 'openssh', {});
// $ExpectType Key
sshpk.parseKey('', 'pem', { passphrase: '' });
// $ExpectType Key
sshpk.parseKey('', 'pkcs1', { cipher: 'blowfish-cbc' });
// $ExpectType Key
sshpk.parseKey('', 'pkcs8', { filename: '' });
// $ExpectType Key
sshpk.parseKey('', 'ppk');
// $ExpectType Key
sshpk.parseKey('', 'putty');
// $ExpectType Key
sshpk.parseKey('', 'rfc4253');
// $ExpectType Key
sshpk.parseKey('', 'ssh');
// $ExpectType Key
sshpk.parseKey('', 'ssh-private');

// $ExpectType Buffer
key.toBuffer('rfc4253');
// $ExpectType Buffer
key.toBuffer('pem', { hashAlgo: 'sha1', comment: '' });

// $ExpectType string
key.toString('pkcs1');
// $ExpectType string
key.toString('pkcs8', { comment: '' });

// $ExpectType Buffer
key.hash('sha384');
// $ExpectType Buffer
key.hash('md5', 'spki');
// $ExpectType Buffer
key.hash('sha512', 'ssh');

// $ExpectType Fingerprint
key.fingerprint();
// $ExpectType Fingerprint
key.fingerprint('sha1');
// $ExpectType Fingerprint
key.fingerprint('sha256', 'spki');

// $ExpectType ShaHashType
key.defaultHashAlgorithm();

// $ExpectType Verify
const verify = key.createVerify();
// $ExpectType Verify
key.createVerify('sha1');

// $ExpectType Verify
verify.update('');
// $ExpectType Verify
verify.update(Buffer.alloc(0));
// $ExpectType Verify
verify.update('', 'hex');

// $ExpectType boolean
verify.verify('');
// $ExpectType boolean
verify.verify(Buffer.alloc(0));
// $ExpectType boolean
verify.verify('', 'base64');
// $ExpectType boolean
verify.verify(signature);

// $ExpectType DiffieHellman
const dhe = key.createDiffieHellman();
// $ExpectType DiffieHellman
key.createDH();

// == private-key.js == //

// $ExpectType PrivateKey
const private_key = sshpk.parsePrivateKey('');
// $ExpectType PrivateKey
sshpk.parsePrivateKey(Buffer.alloc(0), 'auto');
// $ExpectType PrivateKey
sshpk.parsePrivateKey('', 'dnssec', '');
// $ExpectType PrivateKey
sshpk.parsePrivateKey('', 'openssh', {});
// $ExpectType PrivateKey
sshpk.parsePrivateKey('', 'pem', { passphrase: '' });
// $ExpectType PrivateKey
sshpk.parsePrivateKey('', 'pkcs1', { cipher: 'blowfish-cbc' });
// $ExpectType PrivateKey
sshpk.parsePrivateKey('', 'pkcs8', { filename: '' });
// $ExpectType PrivateKey
sshpk.parsePrivateKey('', 'rfc4253');
// $ExpectType PrivateKey
sshpk.parsePrivateKey('', 'ssh');
// $ExpectType PrivateKey
sshpk.parsePrivateKey('', 'ssh-private');

// $ExpectType Buffer
private_key.toBuffer('rfc4253');
// $ExpectType Buffer
private_key.toBuffer('pem', { hashAlgo: 'sha1', comment: '' });

// $ExpectType string
private_key.toString('pkcs1');
// $ExpectType string
private_key.toString('pkcs8', { comment: '' });

// $ExpectType Buffer
private_key.hash('sha384');
// $ExpectType Buffer
private_key.hash('md5', 'spki');
// $ExpectType Buffer
private_key.hash('sha512', 'ssh');

// $ExpectType Fingerprint
private_key.fingerprint();
// $ExpectType Fingerprint
private_key.fingerprint('sha1');
// $ExpectType Fingerprint
private_key.fingerprint('sha256', 'spki');

// $ExpectType ShaHashType
private_key.defaultHashAlgorithm();

// $ExpectType Key
private_key.toPublic();

// $ExpectType PrivateKey
private_key.derive('ed25519');
// $ExpectType PrivateKey
private_key.derive('curve25519');

// $ExpectType Verify
private_key.createVerify();
// $ExpectType Verify
private_key.createVerify('sha1');

// $ExpectType Signer
const signer = private_key.createSign('md5');
// $ExpectType Signer
private_key.createSign('sha1');
// $ExpectType Signer
private_key.createSign('sha256');
// $ExpectType Signer
private_key.createSign('sha384');
// $ExpectType Signer
private_key.createSign('sha512');

// $ExpectType Signer
signer.update('');
// $ExpectType Signer
signer.update(Buffer.alloc(0));
// $ExpectType Signer
signer.update('', 'utf8');

// $ExpectType Signature
signer.sign();

// $ExpectType DiffieHellman
private_key.createDiffieHellman();
// $ExpectType DiffieHellman
private_key.createDH();

// $ExpectType PrivateKey
sshpk.generatePrivateKey('ecdsa');
// $ExpectType PrivateKey
sshpk.generatePrivateKey('ecdsa', {});
// $ExpectType PrivateKey
sshpk.generatePrivateKey('ecdsa', { curve: 'nistp256' });
// $ExpectType PrivateKey
sshpk.generatePrivateKey('ecdsa', { curve: 'nistp384' });
// $ExpectType PrivateKey
sshpk.generatePrivateKey('ecdsa', { curve: 'nistp521' });
// $ExpectType PrivateKey
sshpk.generatePrivateKey('ed25519');

// == identity.js == //

// $ExpectType Identity
const identity = sshpk.identityFromDN('');

// $ExpectType Identity
sshpk.identityForHost('');

// $ExpectType Identity
sshpk.identityForUser('');

// $ExpectType Identity
sshpk.identityForEmail('');

// $ExpectType Identity
sshpk.identityFromArray([{ name: 'emailAddress', value: '' }]);

// $ExpectType string
identity.toString();

// $ExpectType string
identity.get('c');
// $ExpectType string
identity.get('cn', false);
// $ExpectType string
identity.get('dc');
// $ExpectType string
identity.get('description');
// $ExpectType string
identity.get('emailAddress');
// $ExpectType string
identity.get('gn');
// $ExpectType string
identity.get('initials');
// $ExpectType string
identity.get('l');
// $ExpectType string
identity.get('mail');
// $ExpectType string
identity.get('o');
// $ExpectType string
identity.get('ou');
// $ExpectType string
identity.get('postalCode');
// $ExpectType string
identity.get('pseudonym');
// $ExpectType string
identity.get('role');
// $ExpectType string
identity.get('s');
// $ExpectType string
identity.get('serialNumber');
// $ExpectType string
identity.get('sn');
// $ExpectType string
identity.get('street');
// $ExpectType string
identity.get('telephoneNumber');
// $ExpectType string
identity.get('title');
// $ExpectType string
identity.get('uid');
// $ExpectType string[]
identity.get('x500UniqueIdentifier', true);

// $ExpectType IdentityNameComponent[]
identity.toArray();

// $ExpectType void
identity.toAsn1(new BerWriter());
// $ExpectType void
identity.toAsn1(new BerWriter(), 0);

// $ExpectType boolean
identity.equals(identity);

// == certificate.js == //

// $ExpectType Certificate
const cert = sshpk.parseCertificate('', 'pem');
// $ExpectType Certificate
sshpk.parseCertificate(Buffer.alloc(0), 'x509', 'filename');
// $ExpectType Certificate
sshpk.parseCertificate('', 'openssh', { filename: '' });

// $ExpectType Buffer
cert.toBuffer('pem');
// $ExpectType Buffer
cert.toBuffer('x509', {});
// $ExpectType Buffer
cert.toBuffer('openssh', { hashAlgo: 'sha256' });

// $ExpectType string
cert.toString('pem');
// $ExpectType string
cert.toString('x509', {});
// $ExpectType string
cert.toString('openssh', { hashAlgo: 'sha512' });

// $ExpectType Fingerprint
cert.fingerprint();
// $ExpectType Fingerprint
cert.fingerprint('md5');
// $ExpectType Fingerprint
cert.fingerprint('sha1');
// $ExpectType Fingerprint
cert.fingerprint('sha256');
// $ExpectType Fingerprint
cert.fingerprint('sha384');
// $ExpectType Fingerprint
cert.fingerprint('sha512');

// $ExpectType string
cert.hash('md5');
// $ExpectType string
cert.hash('sha1');
// $ExpectType string
cert.hash('sha256');
// $ExpectType string
cert.hash('sha384');
// $ExpectType string
cert.hash('sha512');

// $ExpectType boolean
cert.isExpired();
// $ExpectType boolean
cert.isExpired(new Date());

// $ExpectType boolean
cert.isSignedBy(cert);

// $ExpectType OpenSshSignatureExt | x509SignatureExt | undefined
cert.getExtension('');

// This test doesn't work with Array<T>, but only with T[].
// $ExpectType (OpenSshSignatureExt | x509SignatureExt)[]
cert.getExtensions();

// $ExpectType boolean
cert.isSignedByKey(key);

// $ExpectType void
cert.signWith(private_key);

// $ExpectType Certificate
sshpk.createSelfSignedCertificate(identity, private_key);
// $ExpectType Certificate
sshpk.createSelfSignedCertificate([identity], private_key, {
    lifetime: 1,
    validFrom: new Date(),
    validUntil: new Date(),
    serial: Buffer.alloc(0),
    purposes: [''],
    ca: false,
});

// $ExpectType Certificate
sshpk.createCertificate(identity, key, identity, private_key);
// $ExpectType Certificate
sshpk.createCertificate([identity], private_key, identity, private_key, {
    lifetime: 1,
    validFrom: new Date(),
    validUntil: new Date(),
    serial: Buffer.alloc(0),
    purposes: [''],
    ca: false,
});

// == dhe.js == //

// $ExpectType Key
dhe.getPublicKey();

// $ExpectType PrivateKey | undefined
dhe.getPrivateKey();

// $ExpectType PrivateKey | undefined
dhe.getKey();

// $ExpectType void
dhe.setKey(private_key);

// $ExpectType void
dhe.setPrivateKey(private_key);

// $ExpectType Buffer
dhe.computeSecret(key);

// $ExpectType PrivateKey
dhe.generateKey();

// $ExpectType PrivateKey
dhe.generateKeys();

// == fingerprint.js == //

// $ExpectType Fingerprint
const fingerprint = sshpk.parseFingerprint('');
// $ExpectType Fingerprint
sshpk.parseFingerprint('', ['']);
// $ExpectType Fingerprint
sshpk.parseFingerprint('', {});
// $ExpectType Fingerprint
sshpk.parseFingerprint('', { enAlgs: [''], algotirhms: [''], type: 'key', hashType: 'spki' });
// $ExpectType Fingerprint
sshpk.parseFingerprint('', { enAlgs: [''], algotirhms: [''], type: 'certificate', hashType: 'ssh' });

// $ExpectType string
fingerprint.toString();
// $ExpectType string
fingerprint.toString('hex');
// $ExpectType string
fingerprint.toString('base64');

// $ExpectType boolean
fingerprint.matches(key);
// $ExpectType boolean
fingerprint.matches(private_key);
// $ExpectType boolean
fingerprint.matches(cert);
