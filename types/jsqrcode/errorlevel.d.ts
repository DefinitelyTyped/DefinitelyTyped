
declare const L: ErrorCorrectionLevel;
declare const M: ErrorCorrectionLevel;
declare const Q: ErrorCorrectionLevel;
declare const H: ErrorCorrectionLevel;
declare const FOR_BITS: Array<ErrorCorrectionLevel>;

declare class ErrorCorrectionLevel {
	private ordinal_Renamed_Field: number;
	private bits: number;
	private name: string;

	readonly Bits: number;
	readonly Name: string;

	static forBits(bits: number): any;

	constructor(ordinal: number, bits: number, name: string);
}
