import { CRYPT_BLOWFISH, CRYPT_EXT_DES, PasswordHash } from 'node-phpass';

const hasher: PasswordHash = new PasswordHash();
const hash: Promise<string> = hasher.HashPassword('foo').then(hash => {
    hasher.CheckPassword('foo', hash);

    return hash;
});

const blowfishHasher: PasswordHash = new PasswordHash(8, true, CRYPT_BLOWFISH);
const extDesHasher: PasswordHash = new PasswordHash(8, false, CRYPT_EXT_DES);
