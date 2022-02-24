import { generateKeyPair, getKeyPairFromMnemonic, getKeyPairFromSeed } from 'human-crypto-keys';

generateKeyPair('rsa').then(keypair => getKeyPairFromMnemonic(keypair.mnemonic, keypair.algorithm));
getKeyPairFromSeed('jackhedaya', 'rsa');
