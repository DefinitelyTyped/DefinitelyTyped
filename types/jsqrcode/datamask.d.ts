
declare abstract class DataMask {
	private static DATA_MASKS: Array<DataMask>;

	static forReference(reference: number): DataMask;

	abstract unmaskBitMatrix(bits: Array<number>, dimension: number): void;

	abstract isMasked(i: number, j: number): boolean;
}

declare class DataMask000 extends DataMask {
	unmaskBitMatrix(bits: Array<number>, dimension: number): void;

	isMasked(i: number, j: number): boolean;
}

declare class DataMask001 extends DataMask {
	unmaskBitMatrix(bits: Array<number>, dimension: number): void;

	isMasked(i: number, j: number): boolean;
}

declare class DataMask010 extends DataMask {
	unmaskBitMatrix(bits: Array<number>, dimension: number): void;

	isMasked(i: number, j: number): boolean;
}

declare class DataMask011 extends DataMask {
	unmaskBitMatrix(bits: Array<number>, dimension: number): void;

	isMasked(i: number, j: number): boolean;
}

declare class DataMask100 extends DataMask {
	unmaskBitMatrix(bits: Array<number>, dimension: number): void;

	isMasked(i: number, j: number): boolean;
}

declare class DataMask101 extends DataMask {
	unmaskBitMatrix(bits: Array<number>, dimension: number): void;

	isMasked(i: number, j: number): boolean;
}

declare class DataMask110 extends DataMask {
	unmaskBitMatrix(bits: Array<number>, dimension: number): void;

	isMasked(i: number, j: number): boolean;
}

declare class DataMask111 extends DataMask {
	unmaskBitMatrix(bits: Array<number>, dimension: number): void;

	isMasked(i: number, j: number): boolean;
}

