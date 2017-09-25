declare class AlignmentPattern {
	private x: number;
	private y: number;
	private count: number;
	private estimatedModuleSize: number;

	readonly X: number;
	readonly Y: number;
	readonly EstimatedModuleSize: number;
	readonly Count: number;

	constructor(posX: number, posY: number, estimatedModuleSize);

	incrementCount(): void;

	aboutEquals(moduleSize: number, i: number, j: number): boolean;
}

declare class AlignmentPatternFinder {
	possibleCenters: Array<AlignmentPattern>;
	crossCheckStateCount: [number, number, number];
	image: Uint8Array;
	startX: number;
	startY: number;
	width: number;
	height: number;
	moduleSize: number;
	resultPointCallback: { foundPossibleResultPoint: (point: FinderPattern) => void };

	constructor(
		image: Uint8Array, startX: number, startY: number,
		width: number, height: number,
		moduleSize: number, resultPointCallback: () => void
	);

	private centerFromEnd(stateCount: number, end: number): number;
	
	private foundPatternCross(stateCount: number): boolean;
	
	private handlePossibleCenter(stateCount: number, i: number, j: number): AlignmentPattern;

	public find(): AlignmentPattern;
}