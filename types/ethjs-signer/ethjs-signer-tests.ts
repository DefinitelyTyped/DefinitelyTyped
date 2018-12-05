import { sign, recover } from "ethjs-signer";

const nonce = 0;
const privateKey = '0xecbcd9838f7f2afa6e809df8d7cdae69aa5dfc14d563ee98e97effd3f6a652f2';

const transaction = {
    to: '0xce31a19193d4b23f4e9d6163d7247243bAF801c3',
    value: 300000,
    gasPrice: 2000000,
    nonce
};

const signedTransactionString: string = sign(transaction, privateKey);
const signedTransaction: any[] = sign(transaction, privateKey, true);

const publicKey = recover(signedTransactionString, -1, signedTransaction[7], signedTransaction[8]);
