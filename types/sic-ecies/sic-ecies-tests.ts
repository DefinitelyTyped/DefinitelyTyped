import { ECIES } from 'sic-ecies';
import { PrivateKey, PublicKey } from 'bitcore-lib';

const aliceKey = new PrivateKey();
const bobKey = new PrivateKey();

const alice = ECIES()
  .privateKey(aliceKey)
  .publicKey(bobKey.publicKey);

const message = 'some secret message';

const encrypted = alice.encrypt(message);
// encrypted will contain an encrypted buffer only Bob can decrypt

const bob = ECIES()
  .privateKey(bobKey)
  .publicKey(aliceKey.publicKey);

const decrypted = bob.decrypt(encrypted).toString();
// decrypted will be 'some secret message'

console.log(decrypted);
