declare class GF256Poly {
	field: GF256;
	private coefficients: Array<number>;

	readonly Zero: boolean;
	readonly Degree: number;
	readonly Coefficients: Array<number>;

	constructor(field: GF256, coefficients: Array<number>);

	getCoefficient(degree: number): number;
	evaluateAt(a: number): number;
	addOrSubtract(other: GF256Poly): GF256Poly;
	multiply1(other: GF256Poly): GF256Poly;
	multiply2(scalar: number): GF256Poly;
	multiplyByMonomial(degree: number, coefficient: number): GF256Poly;
	divide(other: GF256Poly): [ GF256Poly, GF256Poly ];
}
