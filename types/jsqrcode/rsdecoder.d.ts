declare class ReedSolomonDecoder {
	field: GF256;

	constructor(field: GF256);
	
	decode(received: GF256, twoS: Array<number>): void;
	runEuclideanAlgorithm(a: GF256Poly, b: GF256Poly, R: number): [ GF256Poly, GF256Poly ];
	findErrorLocations(errorLocator: GF256Poly): Array<number>;
	findErrorMagnitudes(errorEvaluator: GF256Poly, errorLocations: Array<number>, dataMatrix: boolean): Array<number>;
}
