import * as StellarSdk from 'stellar-sdk';

const sourceKey = StellarSdk.Keypair.random(); // $ExpectType Keypair
const destKey = StellarSdk.Keypair.random();
const account = new StellarSdk.Account(sourceKey.publicKey(), '1');
const transaction = new StellarSdk.TransactionBuilder(account)
    .addOperation(StellarSdk.Operation.accountMerge({destination: destKey.publicKey()}))
    .addMemo(new StellarSdk.Memo(StellarSdk.MemoText, "memo"))
    .build(); // $ExpectType () => Transaction
transaction; // $ExpectType Transaction

StellarSdk.StellarTomlResolver.resolve("example.com", {allowHttp: true, timeout: 100})
    .then(toml => toml.FEDERATION_SERVER);

const sig = StellarSdk.xdr.DecoratedSignature.fromXDR(Buffer.of(1, 2)); // $ExpectType DecoratedSignature
sig.hint(); // $ExpectType Buffer
sig.signature(); // $ExpectType Buffer

StellarSdk.Memo.none(); // $ExpectType Memo<"none">
StellarSdk.Memo.text('asdf'); // $ExpectType Memo<"text">
StellarSdk.Memo.id('asdf'); // $ExpectType Memo<"id">
StellarSdk.Memo.return('asdf'); // $ExpectType Memo<"return">
StellarSdk.Memo.hash('asdf'); // $ExpectType Memo<"hash">
StellarSdk.Memo.none().value; // $ExpectType null
StellarSdk.Memo.id('asdf').value; // $ExpectType string
StellarSdk.Memo.text('asdf').value; // $ExpectType string
StellarSdk.Memo.return('asdf').value; // $ExpectType Buffer
StellarSdk.Memo.hash('asdf').value; // $ExpectType Buffer

// P.S. don't use Memo constructor
(new StellarSdk.Memo(StellarSdk.MemoHash, 'asdf')).value; // $ExpectType AnyValue
(new StellarSdk.Memo(StellarSdk.MemoHash, 'asdf')).type; // $ExpectType AnyType
