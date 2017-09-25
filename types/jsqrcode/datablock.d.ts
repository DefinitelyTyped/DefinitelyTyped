declare class DataBlock {
	static getDataBlocks(
		rawCodewords: Array<number>, version: Version, ecLevel: ErrorCorrectionLevel
	): Array<DataBlock>;

	private numDataCodewords: number;
	private codewords: Array<number>;

	readonly NumDataCodewords: number;
	readonly Codewords: Array<number>;

	constructor(numDataCodewords: number, codewords: Array<number>);
}
