declare class GF256 {
	static readonly QR_CODE_FIELD: GF256;
	static readonly DATA_MATRIX_FIELD: GF256;

	private zero: GF256Poly;
	private one: GF256Poly;

	expTable: Array<number>;
	logTable: Array<number>;
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
