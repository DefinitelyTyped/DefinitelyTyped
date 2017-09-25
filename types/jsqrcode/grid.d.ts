declare const GridSampler: {
	checkAndNudgePoints(image: Uint8Array, points: Array<number>): void;
	sampleGrid3(image: Uint8Array, dimension: number, transform: PerspectiveTransform): BitMatrix;
	sampleGridx(
		image: Uint8Array, dimension: number, p1ToX: number,
		p1ToY: number, p2ToX: number, p2ToY: number, p3ToX: number,
		p3ToY: number, p4ToX: number, p4ToY: number, p1FromX: number,
		p1FromY: number, p2FromX: number, p2FromY: number, p3FromX: number,
		p3FromY: number, p4FromX: number, p4FromY: number
	): BitMatrix;
};
