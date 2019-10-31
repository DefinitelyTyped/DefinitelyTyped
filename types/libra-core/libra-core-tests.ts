import { LibraWallet, Mnemonic } from 'libra-core';

const wallet = new LibraWallet({
    mnemonic: 'lend arm arm addict trust release grid unlock exhibit surround deliver front link bean night dry tuna pledge expect net ankle process mammal great',
});

// TEST ACCOUNT CREATION
const account = wallet.newAccount();
const address = account.getAddress().toHex();

// GENERATE UNIQUE MNEMONIC
const mnemonic = new Mnemonic().toString();
