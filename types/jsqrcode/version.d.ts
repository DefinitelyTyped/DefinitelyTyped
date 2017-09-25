declare function buildVersions(): Array<Version>;

declare class ECB {
	private count: number;
	private dataCodewords: number;

	readonly Count: number;
	readonly DataCodewords: number;

	constructor(count: number, dataCodewords: number);
}

declare class ECBlocks {
	private ecCodewordsPerBlock: number;
	private ecBlocks: Array<Array<any>>;

	readonly ECCodewordsPerBlock: number;
	readonly TotalECCodewords: number;
	readonly NumBlocks: number;

	constructor(ecCodewordsPerBlock: number, ecBlocks1: Array<any>, ecBlocks2?: Array<any>);

	getECBlocks(): Array<Array<any>>;
}

declare class Version {
	static readonly VERSION_DECODE_INFO: [ 0x07C94, 0x085BC, 0x09A99, 0x0A4D3, 0x0BBF6, 0x0C762, 0x0D847, 0x0E60D, 0x0F928, 0x10B78, 0x1145D, 0x12A17, 0x13532, 0x149A6, 0x15683, 0x168C9, 0x177EC, 0x18EC4, 0x191E1, 0x1AFAB, 0x1B08E, 0x1CC1A, 0x1D33F, 0x1ED75, 0x1F250, 0x209D5, 0x216F0, 0x228BA, 0x2379F, 0x24B0B, 0x2542E, 0x26A64, 0x27541, 0x28C69 ];
	static readonly VERSIONS: Array<Version>;

	static getVersionForNumber(versionNumber: number): Version;
	static getProvisionalVersionForDimension(dimension: number): Version;
	static decodeVersionInformation(versionBits: number): Version;

	versionNumber: number;
	alignmentPatternCenters: Array<number>;
	ecBlocks: Array<ECBlocks>;

	readonly VersionNumber: number;
	readonly AlignmentPatternCenters: Array<number>;
	readonly TotalCodewords: number;
	readonly DimensionForVersion: number;

	constructor(versionNumber: number, alignmentPatternCenters: Array<number>,
		ecBlocks1: ECBlocks, ecBlocks2: ECBlocks,
		ecBlocks3: ECBlocks, ecBlocks4: ECBlocks);

	buildFunctionPattern(): BitMatrix;

	getECBlocksForLevel(ecLevel: ErrorCorrectionLevel): ECBlocks;
}
