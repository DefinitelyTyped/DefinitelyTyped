import { ECIES } from 'sic-ecies';

const aliceSecretKey = '9e557c25fee7510eb48b10cc1e0533675ed7abc50683f5a1f74303ff2efb0b11';
const bobPublicKey  = '04d6bf3d6ee26a641985995cd78e0dd9136cb214004075dd9ebc3f72a98f8f710751799b548885b0e0941f3d212cad52a5a84ff68ab6c14a65bded226f3816edc5';

const alice = ECIES()
  .privateKey(aliceSecretKey)
  .publicKey(bobPublicKey);

const message = 'some secret message';

const encrypted = alice.encrypt(message);
// encrypted will contain an encrypted buffer only Bob can decrypt

const bobPrivateKey = '51d52031fb4b3f0fde6c7569a3892ab4cf0abe8aa029c3e4805fa31c4ebc11ab';
const alicePublicKey = '047eac9bb312f2965d6bb3300afd7aa41805e50005816c8386d6d0331a5142c42dd26582340662706fd31e7c4c3015fc4ff57b6638f8f7caff21db3f2cc93d28d3';

const bob = ECIES()
  .privateKey(bobPrivateKey)
  .publicKey(alicePublicKey);

const decrypted = bob
  .decrypt(encrypted)
  .toString();
// decrypted will be 'some secret message'

console.log(decrypted);
