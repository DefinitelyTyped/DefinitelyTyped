import { Tx } from "./types";

export interface Account {
	address: string;
	privateKey: string;
	publicKey: string;
}

export interface Signature {
	message: string;
	hash: string;
	r: string;
	s: string;
	v: string;
}

export interface PrivateKey {
	address: string;
	Crypto: {
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
		returnSignature?: boolean,
		cb?: (err: Error, result: string | Signature) => void
	): Promise<string> | Signature;
	recoverTransaction(signature: string | Signature): string;
	sign(
		data: string,
		privateKey: string,
		returnSignature?: boolean
	): string | Signature;
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
