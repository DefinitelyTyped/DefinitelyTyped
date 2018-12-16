import bitcoin = require('bitcoinjs-lib');

// For testing only
function rng() {
    return new Buffer('12345678901234567890123456789012');
}

// Generate a random bitcoin address
const keyPair1 = bitcoin.ECPair.makeRandom({rng});
const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair1.publicKey });
keyPair1.toWIF();

// Generate an address from a SHA256 hash
const hash = bitcoin.crypto.sha256(Buffer.from('correct horse battery staple', 'utf8'));
const keyPair2 = bitcoin.ECPair.fromPrivateKey(hash);

// Generate a random keypair for alternative networks
const keyPair3 = bitcoin.ECPair.makeRandom({network: bitcoin.networks.testnet, rng});
keyPair3.toWIF();
bitcoin.payments.p2pkh({ pubkey: keyPair3.publicKey });
const network = keyPair3.network;

// Test TransactionBuilder and Transaction
const txb = new bitcoin.TransactionBuilder();
txb.addInput('aa94ab02c182214f090e99a0d57021caffd0f195a81c24602b1028b130b63e31', 0);
txb.addOutput(Buffer.from('1Gokm82v6DmtwKEB8AiVhm82hyFSsEvBDK', 'utf8'), 15000);
txb.sign(0, keyPair1);
const tx = txb.build();
tx.toHex();
tx.hasWitnesses();
tx.hashForWitnessV0(1, new Buffer('12345678901234567890123456789012'), 2, 3);

// Test functions in address
const rsBase58Check = bitcoin.address.fromBase58Check(address);
const rsBech32 = bitcoin.address.fromBech32(address);
const rsOutputScript = bitcoin.address.fromOutputScript(new Buffer('12345678901234567890123456789012'));
const rsOutputScriptWithNetwork = bitcoin.address.fromOutputScript(new Buffer('12345678901234567890123456789012'), network);
bitcoin.address.toBase58Check(rsBase58Check.hash, rsBase58Check.version);
bitcoin.address.toBech32(rsBech32.data, rsBech32.version, rsBech32.prefix);
bitcoin.address.toOutputScript(address);
bitcoin.address.toOutputScript(address, network);
