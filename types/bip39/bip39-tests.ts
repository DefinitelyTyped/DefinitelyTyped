import * as bip39 from 'bip39';

// Test generate a random mnemonic
const mnemonic: string = bip39.generateMnemonic();

// Test generate a random mnemonic with strength
bip39.generateMnemonic(64);

// Test mnemonic to seed
const seedHex: string = bip39.mnemonicToSeedHex('basket actual');
const seed: Buffer = bip39.mnemonicToSeed('basket actual');

// Test validation
bip39.validateMnemonic(mnemonic);
