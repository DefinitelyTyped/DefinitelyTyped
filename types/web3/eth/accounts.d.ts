import { Tx } from "./types";

export interface Account {
	address: string;
	privateKey: string;
	sign(data: string): MessageSignature;
	signTransaction(
		tx: Tx,
		cb?: (err: Error, result: TxSignature) => void
	): Promise<TxSignature>;
	encrypt(password: string, options?: any): PrivateKey;
}

export interface Signature {
	messageHash: string;
	r: string;
	s: string;
	v: string;
}
export interface MessageSignature extends Signature {
	message: string;
	signature: string;
}
export interface TxSignature extends Signature {
	rawTransaction: string;
}

export interface PrivateKey {
	address: string;
	crypto: {
		cipher: string;
		ciphertext: string;
		cipherparams: {
			iv: string;
		};
		kdf: string;
		kdfparams: {
			dklen: number;
			n: number;
			p: number;
			r: number;
			salt: string;
		};
		mac: string;
	};
	id: string;
	version: number;
}

export default interface Accounts {
	create(entropy?: string): Account;
	privateKeyToAccount(privKey: string): Account;
	publicToAddress(key: string): string;
	signTransaction(
		tx: Tx,
		privateKey: string,
		cb?: (err: Error, result: TxSignature) => void
	): Promise<TxSignature>;
	recoverTransaction(signature: string): string;
	sign(
		data: string,
		privateKey: string
	): MessageSignature;
	recover(
		sigOrHash: string | Signature,
		sigOrV?: string,
		r?: string,
		s?: string
	): string;
	encrypt(privateKey: string, password: string): PrivateKey;
	decrypt(privateKey: PrivateKey, password: string): Account;
	wallet: {
		create(numberOfAccounts: number, entropy: string): Account[];
		add(account: string | Account): any;
		remove(account: string | number): any;
		save(password: string, keyname?: string): string;
		load(password: string, keyname: string): any;
		clear(): any;
	};
}
