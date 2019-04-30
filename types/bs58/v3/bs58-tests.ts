import * as bs58 from 'bs58';

{
	let encoded: string;

	encoded = bs58.encode([255]);
	encoded = bs58.encode({0: 255, length: 1});
}

const decoded: number[] = bs58.decode('5Q');
