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

	transformPoints1(points: Array<number>): void;
	transformPoints2(xValues: Array<number>, yValues: Array<number>): void;
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
	resultPointCallback: { foundPossibleResultPoint: (point: FinderPattern) => void };

	contructor(image: Uint8Array);

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
