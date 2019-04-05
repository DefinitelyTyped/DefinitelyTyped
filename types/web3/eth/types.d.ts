import { Callback } from "../types";
import PromiEvent from "../promiEvent";
import { ABIDefinition } from "./abi";
export interface Tx {
	nonce?: string | number;
	chainId?: string | number;
	from?: string;
	to?: string;
	data?: string;
	value?: string | number;
	gas?: string | number;
	gasPrice?: string | number;
}

export class BatchRequest {
	constructor();
	add(request: object): void; //
	execute(): void;
}
export class Iban {
	constructor(address: string);
	static toAddress(iban: Iban): string;
	isValid(): boolean;
}
export type BlockType = "latest" | "pending" | "genesis" | number;

export interface BlockHeader {
	number: number;
	hash: string;
	parentHash: string;
	nonce: string;
	sha3Uncles: string;
	logsBloom: string;
	transactionRoot: string;
	stateRoot: string;
	receiptRoot: string;
	miner: string;
	extraData: string;
	gasLimit: number;
	gasUsed: number;
	timestamp: number;
}
export interface Block extends BlockHeader {
	transactions: Transaction[];
	size: number;
	difficulty: number;
	totalDifficulty: number;
	uncles: string[];
}

export class Net {
	getId(cb?: Callback<number>): Promise<number>;
	isListening(cb?: Callback<boolean>): Promise<boolean>;
	getPeerCount(cb?: Callback<number>): Promise<number>;
}
export class Personal {
	newAccount(password: string, cb?: Callback<boolean>): Promise<string>;
	importRawKey(): Promise<string>;
	lockAccount(): Promise<boolean>;
	unlockAccount(address: string, password: string, unlockDuration: number): void;
	sign(): Promise<string>;
	ecRecover(message: string, sig: string): void;
	sendTransaction(tx: Tx, passphrase: string): Promise<string>;
}

export interface Transaction {
	hash: string;
	nonce: number;
	blockHash: string;
	blockNumber: number;
	transactionIndex: number;
	from: string;
	to: string;
	value: string;
	gasPrice: string;
	gas: number;
	input: string;
	v?: string;
	r?: string;
	s?: string;
}
export interface TransactionObject<T> {
	arguments: any[];
	call(tx?: Tx): Promise<T>;
	send(tx?: Tx): PromiEvent<T>;
	estimateGas(tx?: Tx): Promise<number>;
	encodeABI(): string;
}
export interface CompileResult {
	code: string;
	info: {
		source: string;
		language: string;
		languageVersion: string;
		compilerVersion: string;
		abiDefinition: ABIDefinition[];
	};
	userDoc: { methods: object };
	developerDoc: { methods: object };
}
