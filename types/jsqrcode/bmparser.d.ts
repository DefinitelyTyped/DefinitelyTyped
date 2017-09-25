declare class BitMatrixParser {
	bitMatrix: BitMatrix;
	parsedVersion: Version;
	parsedFormatInfo: FormatInformation;

	constructor(bitMatrix: BitMatrix);

	copyBit(i: number, j: number, versionBits: number): number;
	readFormatInformation(): FormatInformation;
	readVersion(): Version;
	readCodewords(): Array<number>;
}
