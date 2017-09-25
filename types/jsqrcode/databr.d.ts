declare class QRCodeDataBlockReader {
	blockPointer: number;
	bitPointer: number;
	dataLength: number;
	dataLengthMode: number;
	blocks: Array<number>;
	numErrorCorrectionCode: number;

	readonly DataByte: Array<string | Array<number>>;

	constructor(blocks: Array<number>, version: number, numErrorCorrectionCode: number);

	getNextBits(numBits: number): number;
	NextMode(): number;
	getDataLength(modeIndicator: number): number;
	getRomanAndFigureString(dataLength: number): string;
	getFigureString(dataLength: number): string;
	get8bitByteArray(dataLength: number): Array<number>;
	getKanjiString(dataLength: number): string;
	parseECIValue(): number;
}
