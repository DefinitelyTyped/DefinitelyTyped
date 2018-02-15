// Type definitions for jsqrcode 1.0
// Project: https://github.com/LazarSoft/jsqrcode
// Definitions by: Ricardo Azzi Silva <https://github.com/lordazzi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function URShift(number: number, bits: number): number;

interface ResultPointCallback {
	foundPossibleResultPoint(point: FinderPattern): void;
}

declare class AlignmentPattern {
	private x: number;
	private y: number;
	private count: number;
	private estimatedModuleSize: number;

	readonly X: number;
	readonly Y: number;
	readonly EstimatedModuleSize: number;
	readonly Count: number;

	constructor(posX: number, posY: number, estimatedModuleSize: number);

	incrementCount(): void;

	aboutEquals(moduleSize: number, i: number, j: number): boolean;
}

declare class AlignmentPatternFinder {
	possibleCenters: AlignmentPattern[];
	crossCheckStateCount: [number, number, number];
	image: Uint8Array;
	startX: number;
	startY: number;
	width: number;
	height: number;
	moduleSize: number;
	resultPointCallback: ResultPointCallback;

	constructor(
		image: Uint8Array, startX: number, startY: number,
		width: number, height: number,
		moduleSize: number, resultPointCallback: ResultPointCallback
	);

	private centerFromEnd(stateCount: number, end: number): number;

	private foundPatternCross(stateCount: number): boolean;

	private handlePossibleCenter(stateCount: number, i: number, j: number): AlignmentPattern;

	find(): AlignmentPattern;
}

declare class BitMatrix {
	private width: number;
	private height: number;

	readonly Width: number;
	readonly Height: number;
	readonly Dimension: number;

	rowSize: number;
	bits: number[];

	constructor(width: number, height?: number);

	get_Renamed(x: number, y: number): boolean;
	set_Renamed(x: number, y: number): void;
	flip(x: number, y: number): void;
	clear(): void;
	setRegion(left: number, top: number, width: number, height: number): void;
}

declare class BitMatrixParser {
	bitMatrix: BitMatrix;
	parsedVersion: Version;
	parsedFormatInfo: FormatInformation;

	constructor(bitMatrix: BitMatrix);

	copyBit(i: number, j: number, versionBits: number): number;
	readFormatInformation(): FormatInformation;
	readVersion(): Version;
	readCodewords(): number[];
}

declare class DataBlock {
	static getDataBlocks(
		rawCodewords: number[], version: Version, ecLevel: ErrorCorrectionLevel
	): DataBlock[];

	private numDataCodewords: number;
	private codewords: number[];

	readonly NumDataCodewords: number;
	readonly Codewords: number[];

	constructor(numDataCodewords: number, codewords: number[]);
}

declare class QRCodeDataBlockReader {
	blockPointer: number;
	bitPointer: number;
	dataLength: number;
	dataLengthMode: number;
	blocks: number[];
	numErrorCorrectionCode: number;

	readonly DataByte: Array<string | number[]>;

	constructor(blocks: number[], version: number, numErrorCorrectionCode: number);

	getNextBits(numBits: number): number;
	NextMode(): number;
	getDataLength(modeIndicator: number): number;
	getRomanAndFigureString(dataLength: number): string;
	getFigureString(dataLength: number): string;
	get8bitByteArray(dataLength: number): number[];
	getKanjiString(dataLength: number): string;
	parseECIValue(): number;
}

declare abstract class DataMask {
	private static DATA_MASKS: DataMask[];

	static forReference(reference: number): DataMask;

	abstract unmaskBitMatrix(bits: number[], dimension: number): void;

	abstract isMasked(i: number, j: number): boolean;
}

declare class DataMask000 extends DataMask {
	unmaskBitMatrix(bits: number[], dimension: number): void;

	isMasked(i: number, j: number): boolean;
}

declare class DataMask001 extends DataMask {
	unmaskBitMatrix(bits: number[], dimension: number): void;

	isMasked(i: number, j: number): boolean;
}

declare class DataMask010 extends DataMask {
	unmaskBitMatrix(bits: number[], dimension: number): void;

	isMasked(i: number, j: number): boolean;
}

declare class DataMask011 extends DataMask {
	unmaskBitMatrix(bits: number[], dimension: number): void;

	isMasked(i: number, j: number): boolean;
}

declare class DataMask100 extends DataMask {
	unmaskBitMatrix(bits: number[], dimension: number): void;

	isMasked(i: number, j: number): boolean;
}

declare class DataMask101 extends DataMask {
	unmaskBitMatrix(bits: number[], dimension: number): void;

	isMasked(i: number, j: number): boolean;
}

declare class DataMask110 extends DataMask {
	unmaskBitMatrix(bits: number[], dimension: number): void;

	isMasked(i: number, j: number): boolean;
}

declare class DataMask111 extends DataMask {
	unmaskBitMatrix(bits: number[], dimension: number): void;

	isMasked(i: number, j: number): boolean;
}

declare const Decoder: {
	rsDecoder: ReedSolomonDecoder,

	correctErrors(codewordBytes: number[], numDataCodewords: number): void;

	decode(bits: BitMatrix): QRCodeDataBlockReader;
};

declare class PerspectiveTransform {
	a11: number;
	a12: number;
	a13: number;
	a21: number;
	a22: number;
	a23: number;
	a31: number;
	a32: number;
	a33: number;

	static quadrilateralToQuadrilateral(
		x0: number, y0: number, x1: number, y1: number,
		x2: number, y2: number, x3: number, y3: number,
		x0p: number, y0p: number, x1p: number, y1p: number,
		x2p: number, y2p: number, x3p: number, y3p: number
	): PerspectiveTransform;
	static squareToQuadrilateral(
		x0: number, y0: number, x1: number, y1: number,
		x2: number, y2: number, x3: number, y3: number
	): PerspectiveTransform;
	static quadrilateralToSquare(
		x0: number, y0: number, x1: number, y1: number,
		x2: number, y2: number, x3: number, y3: number
	): PerspectiveTransform;

	constructor(
		a11: number, a21: number, a31: number,
		a12: number, a22: number, a32: number,
		a13: number, a23: number, a33: number
	);

	transformPoints1(points: number[]): void;
	transformPoints2(xValues: number[], yValues: number[]): void;
	buildAdjoint(): PerspectiveTransform;
	times(other: PerspectiveTransform): PerspectiveTransform;
}

declare class DetectorResult {
	bits: BitMatrix;
	points: [DetectorResult, DetectorResult, DetectorResult] |
	[DetectorResult, DetectorResult, DetectorResult, DetectorResult];

	constructor(
		bits: BitMatrix,
		points: [DetectorResult, DetectorResult, DetectorResult] |
			[DetectorResult, DetectorResult, DetectorResult, DetectorResult]
	);
}

declare class Detector {
	image: Uint8Array;
	resultPointCallback: ResultPointCallback;

	constructor(image: Uint8Array);

	sizeOfBlackWhiteBlackRun(fromX: number, fromY: number, toX: number, toY: number): number;
	sizeOfBlackWhiteBlackRunBothWays(fromX: number, fromY: number, toX: number, toY: number): number;
	calculateModuleSizeOneWay(pattern: AlignmentPattern, otherPattern: AlignmentPattern): number;
	calculateModuleSize(topLeft: AlignmentPattern, topRight: AlignmentPattern, bottomLeft: AlignmentPattern): number;
	distance(pattern1: AlignmentPattern, pattern2: AlignmentPattern): number;
	computeDimension(topLeft: AlignmentPattern, topRight: AlignmentPattern, bottomLeft: AlignmentPattern, moduleSize: number): number;
	findAlignmentInRegion(overallEstModuleSize: number, estAlignmentX: number, estAlignmentY: number, allowanceFactor: number): AlignmentPattern;
	createTransform(topLeft: AlignmentPattern, topRight: AlignmentPattern, bottomLeft: AlignmentPattern, alignmentPattern: AlignmentPattern, dimension: number): PerspectiveTransform;
	sampleGrid(image: Uint8Array, transform: PerspectiveTransform, dimension: number): BitMatrix;
	processFinderPatternInfo(info: FinderPatternInfo): DetectorResult;
	detect(): DetectorResult;
}

declare const L: ErrorCorrectionLevel;
declare const M: ErrorCorrectionLevel;
declare const Q: ErrorCorrectionLevel;
declare const H: ErrorCorrectionLevel;
declare const FOR_BITS: ErrorCorrectionLevel[];

declare class ErrorCorrectionLevel {
	private ordinal_Renamed_Field: number;
	private bits: number;
	private name: string;

	readonly Bits: number;
	readonly Name: string;

	static forBits(bits: number): ErrorCorrectionLevel;

	constructor(ordinal: number, bits: number, name: string);
}
declare const MIN_SKIP: number;
declare const MAX_MODULES: number;
declare const INTEGER_MATH_SHIFT: number;
declare const CENTER_QUORUM: number;

declare class FinderPattern {
	private x: number;
	private y: number;
	private count: number;
	private estimatedModuleSize: number;

	readonly X: number;
	readonly Y: number;
	readonly Count: number;
	readonly EstimatedModuleSize: number;

	constructor(posX: number, posY: number, estimatedModuleSize: number);

	incrementCount(): void;
	aboutEquals(moduleSize: number, i: number, j: number): boolean;
}

declare class FinderPatternInfo {
	readonly BottomLeft: AlignmentPattern;
	readonly TopLeft: AlignmentPattern;
	readonly TopRight: AlignmentPattern;

	constructor(patternCenters: [AlignmentPattern, AlignmentPattern, AlignmentPattern]);
}

declare class FinderPatternFinder {
	image: Uint8Array;
	possibleCenters: FinderPattern[];
	hasSkipped: boolean;
	resultPointCallback: ResultPointCallback;

	private crossCheckStateCount: [number, number, number, number, number];
	readonly CrossCheckStateCount: [number, number, number, number, number];

	foundPatternCross(stateCount: [number, number, number, number, number]): boolean;
	centerFromEnd(stateCount: [number, number, number, number, number], end: number): number;
	crossCheckVertical(startI: number, centerJ: number, maxCount: number, originalStateCountTotal: number): number;
	crossCheckHorizontal(startJ: number, centerI: number, maxCount: number, originalStateCountTotal: number): number;
	handlePossibleCenter(stateCount: [number, number, number, number, number], i: number, j: number): boolean;
	selectBestPatterns(): number;
	findRowSkip(): number;
	haveMultiplyConfirmedCenters(): boolean;
	findFinderPattern(image: Uint8Array): FinderPatternInfo;
}

declare const FORMAT_INFO_MASK_QR: 0x5412;
declare const FORMAT_INFO_DECODE_LOOKUP: [
	[0x5412, 0x00], [0x5125, 0x01], [0x5E7C, 0x02], [0x5B4B, 0x03], [0x45F9, 0x04], [0x40CE, 0x05], [0x4F97, 0x06],
	[0x4AA0, 0x07], [0x77C4, 0x08], [0x72F3, 0x09], [0x7DAA, 0x0A], [0x789D, 0x0B], [0x662F, 0x0C], [0x6318, 0x0D],
	[0x6C41, 0x0E], [0x6976, 0x0F], [0x1689, 0x10], [0x13BE, 0x11], [0x1CE7, 0x12], [0x19D0, 0x13], [0x0762, 0x14],
	[0x0255, 0x15], [0x0D0C, 0x16], [0x083B, 0x17], [0x355F, 0x18], [0x3068, 0x19], [0x3F31, 0x1A], [0x3A06, 0x1B],
	[0x24B4, 0x1C], [0x2183, 0x1D], [0x2EDA, 0x1E], [0x2BED, 0x1F]
];
declare const BITS_SET_IN_HALF_BYTE: [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4];

declare class FormatInformation {
	static numBitsDiffering(a: number, b: [number, number]): number;
	static decodeFormatInformation(maskedFormatInfo: number): FormatInformation;
	private static doDecodeFormatInformation(maskedFormatInfo: number): FormatInformation;

	private errorCorrectionLevel: ErrorCorrectionLevel;
	private dataMask: number;

	readonly ErrorCorrectionLevel: ErrorCorrectionLevel;
	readonly DataMask: number;

	GetHashCode(): number;
	Equals(other: FormatInformation): boolean;
}

declare class GF256 {
	static readonly QR_CODE_FIELD: GF256;
	static readonly DATA_MATRIX_FIELD: GF256;

	private zero: GF256Poly;
	private one: GF256Poly;

	expTable: number[];
	logTable: number[];
	readonly Zero: GF256Poly;
	readonly One: GF256Poly;

	static addOrSubtract(a: number, b: number): number;

	constructor(primitive: number);

	buildMonomial(degree: number, coefficient: number): GF256Poly;
	exp(a: number): number;
	log(a: number): number;
	inverse(a: number): number;
	multiply(a: number, b: number): number;
}

declare class GF256Poly {
	field: GF256;
	private coefficients: number[];

	readonly Zero: boolean;
	readonly Degree: number;
	readonly Coefficients: number[];

	constructor(field: GF256, coefficients: number[]);

	getCoefficient(degree: number): number;
	evaluateAt(a: number): number;
	addOrSubtract(other: GF256Poly): GF256Poly;
	multiply1(other: GF256Poly): GF256Poly;
	multiply2(scalar: number): GF256Poly;
	multiplyByMonomial(degree: number, coefficient: number): GF256Poly;
	divide(other: GF256Poly): [GF256Poly, GF256Poly];
}

declare const GridSampler: {
	checkAndNudgePoints(image: Uint8Array, points: number[]): void;
	sampleGrid3(image: Uint8Array, dimension: number, transform: PerspectiveTransform): BitMatrix;
	sampleGridx(
		image: Uint8Array, dimension: number, p1ToX: number,
		p1ToY: number, p2ToX: number, p2ToY: number, p3ToX: number,
		p3ToY: number, p4ToX: number, p4ToY: number, p1FromX: number,
		p1FromY: number, p2FromX: number, p2FromY: number, p3FromX: number,
		p3FromY: number, p4FromX: number, p4FromY: number
	): BitMatrix;
};

declare class ReedSolomonDecoder {
	field: GF256;

	constructor(field: GF256);

	decode(received: GF256, twoS: number[]): void;
	runEuclideanAlgorithm(a: GF256Poly, b: GF256Poly, R: number): [GF256Poly, GF256Poly];
	findErrorLocations(errorLocator: GF256Poly): number[];
	findErrorMagnitudes(errorEvaluator: GF256Poly, errorLocations: number[], dataMatrix: boolean): number[];
}
declare function buildVersions(): Version[];

declare class ECB {
	private count: number;
	private dataCodewords: number;

	readonly Count: number;
	readonly DataCodewords: number;

	constructor(count: number, dataCodewords: number);
}

declare class ECBlocks {
	private ecCodewordsPerBlock: number;
	private ecBlocks: [ECB] | [ECB, ECB];

	readonly ECCodewordsPerBlock: number;
	readonly TotalECCodewords: number;
	readonly NumBlocks: number;

	constructor(ecCodewordsPerBlock: number, ecBlocks1: ECB, ecBlocks2?: ECB);

	getECBlocks(): [ECB] | [ECB, ECB];
}

declare class Version {
	static readonly VERSION_DECODE_INFO: [
		0x07C94, 0x085BC, 0x09A99, 0x0A4D3, 0x0BBF6, 0x0C762, 0x0D847, 0x0E60D, 0x0F928,
		0x10B78, 0x1145D, 0x12A17, 0x13532, 0x149A6, 0x15683, 0x168C9, 0x177EC, 0x18EC4,
		0x191E1, 0x1AFAB, 0x1B08E, 0x1CC1A, 0x1D33F, 0x1ED75, 0x1F250, 0x209D5, 0x216F0,
		0x228BA, 0x2379F, 0x24B0B, 0x2542E, 0x26A64, 0x27541, 0x28C69
	];
	static readonly VERSIONS: Version[];

	static getVersionForNumber(versionNumber: number): Version;
	static getProvisionalVersionForDimension(dimension: number): Version;
	static decodeVersionInformation(versionBits: number): Version;

	versionNumber: number;
	alignmentPatternCenters: number[];
	ecBlocks: ECBlocks[];

	readonly VersionNumber: number;
	readonly AlignmentPatternCenters: number[];
	readonly TotalCodewords: number;
	readonly DimensionForVersion: number;

	constructor(versionNumber: number, alignmentPatternCenters: number[],
		ecBlocks1: ECBlocks, ecBlocks2: ECBlocks,
		ecBlocks3: ECBlocks, ecBlocks4: ECBlocks);

	buildFunctionPattern(): BitMatrix;

	getECBlocksForLevel(ecLevel: ErrorCorrectionLevel): ECBlocks;
}

declare const qrcode: {
	imagedata: ImageData,
	width: number,
	height: number,
	qrCodeSymbol: any,
	debug: boolean,
	maxImgSize: number,
	readonly sizeOfDataLengthInfo: [[10, 9, 8, 8], [12, 11, 16, 10], [14, 13, 16, 12]],

	// tslint:disable-next-line:prefer-method-signature
	callback: () => void,

	orderBestPatterns(patterns: AlignmentPattern[]): void,

	vidError(error?: any): void,
	captureToCanvas(): void,
	setWebcam(videoId: string): void,
	decode(src?: string): void,
	isUrl(s: string): boolean,
	decode_url(s: string): string,
	decode_utf8(s: string): string,
	process(ctx: CanvasRenderingContext2D): string,
	getPixel(x: number, y: number): number,
	binarize(th: number): boolean[],
	getMiddleBrightnessPerArea(image: number[]): number[][],
	grayScaleToBitmap(grayScale: number[]): Uint8Array,
	grayscale(): Uint8Array
};
