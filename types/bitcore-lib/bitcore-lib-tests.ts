import * as bitcore from 'bitcore-lib';

const transaction = new bitcore.Transaction({});

const output: bitcore.Transaction.Output = transaction.outputs[0];
const input: bitcore.Transaction.Input = transaction.inputs[0];

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
  .sign('bitcoinAddressPrivateKey')
  .enableRBF();

tx.verify();

new bitcore.Unit(2, 'BTC').toSatoshis();

bitcore.Unit.fromMilis(1000).toBTC();

const message = new bitcore.Message('sign this message');

const signedMessageSig = message.sign(privateKey);

message.verify(privateKey.toAddress(), signedMessageSig);
