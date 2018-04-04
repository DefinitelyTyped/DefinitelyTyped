import * as bitcore from 'bitcore-lib';

const transaction = new bitcore.Transaction({});

const output: bitcore.Output = transaction.outputs[0];

const privateKey: bitcore.PrivateKey = new bitcore.PrivateKey('privateKey');
const publicKey: bitcore.PublicKey = privateKey.publicKey;
const publicKeyAsString: string = publicKey.toString();

const signature = bitcore.crypto.ECDSA.sign(Buffer.from('sign this message', 'hex'), new bitcore.PrivateKey('privateKey'));

bitcore.crypto.ECDSA.verify(
  Buffer.from('buffer', 'hex'),
  bitcore.crypto.Signature.fromString('signature'),
  new bitcore.PublicKey('publicKey')
);

const utxo: bitcore.Transaction.UnspentOutput[] = [new bitcore.Transaction.UnspentOutput({})];

new bitcore.Block(Buffer.from('123', 'hex'));

const tx = new bitcore.Transaction()
  .from(utxo)
  .change('bitcoinAddress')
  .addData(Buffer.from(''))
  .sign('bitcoinAddressPrivateKey');
