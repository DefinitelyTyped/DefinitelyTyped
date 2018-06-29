import * as StellarSdk from 'stellar-sdk';

const sourceKey = StellarSdk.Keypair.random(); // $ExpectType Keypair
const destKey = StellarSdk.Keypair.random();
const account = new StellarSdk.Account(sourceKey.publicKey(), 1);
const transaction = new StellarSdk.TransactionBuilder(account)
    .addOperation(StellarSdk.Operation.accountMerge({destination: destKey.publicKey()}))
    .addMemo(new StellarSdk.Memo(StellarSdk.MemoText, "memo"))
    .build(); // $ExpectType () => Transaction
transaction; // $ExpectType Transaction
