import sodium = require('sodium-native');

const nonCanonicalP = Buffer.from([
  0xf6, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
  0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x7f
]);

const h = sodium.sodium_malloc(sodium.crypto_core_ed25519_UNIFORMBYTES);
const p = sodium.sodium_malloc(sodium.crypto_core_ed25519_BYTES);
sodium.randombytes_buf(h.subarray(0, sodium.crypto_core_ed25519_UNIFORMBYTES));
sodium.crypto_core_ed25519_from_uniform(p, h);

const p2 = sodium.sodium_malloc(sodium.crypto_core_ed25519_BYTES);
const p3 = sodium.sodium_malloc(sodium.crypto_core_ed25519_BYTES);
sodium.randombytes_buf(h.subarray(0, sodium.crypto_core_ed25519_UNIFORMBYTES));
sodium.crypto_core_ed25519_from_uniform(p2, h);

sodium.randombytes_uniform(100);
p.copy(p3, 0, 0, sodium.crypto_core_ed25519_BYTES);
sodium.crypto_core_ed25519_add(p, p, p2);

sodium.crypto_core_ed25519_sub(p, p, p2);
const sc = sodium.sodium_malloc(sodium.crypto_scalarmult_ed25519_SCALARBYTES);
sc.fill(0, 0, sodium.crypto_scalarmult_ed25519_SCALARBYTES);
sc[0] = 8;
p.copy(p2, 0, 0, sodium.crypto_core_ed25519_BYTES);
p.copy(p3, 0, 0, sodium.crypto_core_ed25519_BYTES);

sodium.crypto_core_ed25519_add(p2, p2, p2);
sodium.crypto_scalarmult_ed25519(p3, sc, p);
p.fill(0, 0, sodium.crypto_core_ed25519_BYTES);

p.copy(p2, 0, 0, sodium.crypto_core_ed25519_BYTES);
sodium.crypto_core_ed25519_add(p3, p2, p2);
sodium.crypto_core_ed25519_sub(p3, p3, p2);

p[0] = 2;
sodium.crypto_core_ed25519_add(p3, p2, nonCanonicalP);
sodium.crypto_core_ed25519_add(p3, nonCanonicalP, p3);

sodium.crypto_core_ed25519_sub(p3, p2, nonCanonicalP);
sodium.crypto_core_ed25519_sub(p3, nonCanonicalP, p3);

sodium.randombytes_buf(h.subarray(0, sodium.crypto_core_ed25519_UNIFORMBYTES));
sodium.crypto_core_ed25519_from_uniform(p, h);
sodium.crypto_core_ed25519_scalar_random(sc);
sodium.crypto_scalarmult_ed25519_noclamp(p2, sc, p);
sodium.crypto_core_ed25519_scalar_invert(sc, sc);
sodium.crypto_scalarmult_ed25519_noclamp(p3, sc, p2);
p3.subarray(0, sodium.crypto_core_ed25519_BYTES);

const sc64 = sodium.sodium_malloc(64);
sodium.crypto_core_ed25519_scalar_random(sc);
sc.copy(sc64, 0, 0, sodium.crypto_core_ed25519_BYTES);
sc64.fill(0, sodium.crypto_core_ed25519_BYTES);
const i = sodium.randombytes_uniform(100);
sodium.crypto_core_ed25519_scalar_reduce(sc64, sc64);

sodium.randombytes_buf(h.subarray(0, sodium.crypto_core_ed25519_UNIFORMBYTES));
sodium.crypto_core_ed25519_from_uniform(p, h);
p.copy(p2, 0, 0, sodium.crypto_core_ed25519_BYTES);
sodium.crypto_core_ed25519_scalar_random(sc);
sodium.crypto_scalarmult_ed25519_noclamp(p, sc, p);
sodium.crypto_core_ed25519_scalar_complement(sc, sc);
sodium.crypto_scalarmult_ed25519_noclamp(p2, sc, p2);
sodium.crypto_core_ed25519_add(p3, p, p2);
sodium.crypto_core_ed25519_from_uniform(p, h);
sodium.crypto_core_ed25519_sub(p, p, p3);

sodium.randombytes_buf(h.subarray(0, sodium.crypto_core_ed25519_UNIFORMBYTES));
sodium.crypto_core_ed25519_from_uniform(p, h);
p.copy(p2, 0, 0, sodium.crypto_core_ed25519_BYTES);
sodium.crypto_core_ed25519_scalar_random(sc);
sodium.crypto_scalarmult_ed25519_noclamp(p, sc, p);
sodium.crypto_core_ed25519_scalar_negate(sc, sc);
sodium.crypto_scalarmult_ed25519_noclamp(p2, sc, p2);
sodium.crypto_core_ed25519_add(p, p, p2);

sodium.crypto_core_ed25519_scalar_invert(sc, sc);
sodium.crypto_core_ed25519_scalar_negate(sc, sc);
sodium.crypto_core_ed25519_scalar_complement(sc, sc);

const sc2 = sodium.sodium_malloc(sodium.crypto_core_ed25519_SCALARBYTES);
const sc3 = sodium.sodium_malloc(sodium.crypto_core_ed25519_SCALARBYTES);
sodium.randombytes_buf(sc.subarray(0, sodium.crypto_core_ed25519_SCALARBYTES));
sodium.randombytes_buf(sc2.subarray(0, sodium.crypto_core_ed25519_SCALARBYTES));
sc[sodium.crypto_core_ed25519_SCALARBYTES - 1] &= 0x7f;
sc2[sodium.crypto_core_ed25519_SCALARBYTES - 1] &= 0x7f;
sodium.crypto_core_ed25519_scalar_add(sc3, sc, sc2);
sodium.crypto_core_ed25519_scalar_sub(sc3, sc3, sc);

sc.fill(0x69, 0, sodium.crypto_core_ed25519_UNIFORMBYTES);
sc2.fill(0x42, 0, sodium.crypto_core_ed25519_UNIFORMBYTES);
sodium.crypto_core_ed25519_scalar_add(sc, sc2, sc);
sodium.crypto_core_ed25519_scalar_sub(sc, sc, sc2);

sc.fill(0xcd, 0, sodium.crypto_core_ed25519_UNIFORMBYTES);
sc2.fill(0x42, 0, sodium.crypto_core_ed25519_UNIFORMBYTES);
sodium.crypto_core_ed25519_scalar_add(sc, sc2, sc);
sodium.crypto_core_ed25519_scalar_sub(sc, sc, sc2);

const publicKey = sodium.sodium_malloc(sodium.crypto_box_PUBLICKEYBYTES);
const secretKey = sodium.sodium_malloc(sodium.crypto_box_SECRETKEYBYTES);
sodium.crypto_box_keypair(publicKey, secretKey);
const message = sodium.sodium_malloc(4);
const cipherText = sodium.sodium_malloc(message.length + sodium.crypto_box_SEALBYTES);
sodium.crypto_box_seal(cipherText, message, publicKey);
sodium.crypto_box_seal_open(message, cipherText, publicKey, secretKey);
