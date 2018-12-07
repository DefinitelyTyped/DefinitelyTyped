import * as digibyte from 'digibyte';

const transaction = new digibyte.Transaction({});

const output: digibyte.Transaction.Output = transaction.outputs[0];
const input: digibyte.Transaction.Input = transaction.inputs[0];

const privateKey: digibyte.PrivateKey = new digibyte.PrivateKey('privateKey');
const publicKey: digibyte.PublicKey = privateKey.publicKey;
const publicKeyAsString: string = publicKey.toString();

const signature = digibyte.crypto.ECDSA.sign(Buffer.from('sign this message', 'hex'), new digibyte.PrivateKey('privateKey'));

digibyte.crypto.ECDSA.verify(
  Buffer.from('buffer', 'hex'),
  digibyte.crypto.Signature.fromString('signature'),
  new digibyte.PublicKey('publicKey')
);

const utxo: digibyte.Transaction.UnspentOutput[] = [new digibyte.Transaction.UnspentOutput({})];

new digibyte.Block(Buffer.from('123', 'hex'));

const tx = new digibyte.Transaction()
  .from(utxo)
  .change('digibyteAddress')
  .addData(Buffer.from(''))
  .sign('digibyteAddressPrivateKey')
  .enableRBF();

tx.verify();

new digibyte.Unit(2, 'DGB').toSatoshis();

digibyte.Unit.fromMilis(1000).toDGB();

const paymentInfo = {
  address: 'DFVsFBiKuaL5HM9NWZgdHTQecLNit6tX5Y',
  amount: digibyte.Unit.fromDGB(1000).toSatoshis(),
};

const uri = new digibyte.URI(paymentInfo).toString();
uri.toString();
