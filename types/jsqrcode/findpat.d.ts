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
	readonly BottomLeft: any;
	readonly TopLeft: any;
	readonly TopRight: any;

	contructor(patternCenters: Array<any>);
}

declare class FinderPatternFinder {
	image: Uint8Array;
	possibleCenters: Array<FinderPattern>;
	hasSkipped: boolean;
	resultPointCallback: { foundPossibleResultPoint: (point: FinderPattern) => void };

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
