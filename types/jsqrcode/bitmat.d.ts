declare class BitMatrix {
	private width: number;
	private height: number;

	readonly Width: number;
	readonly Height: number;
	readonly Dimension: number;

	rowSize: number;
	bits: Array<any>;

	constructor(width: number, height?: number);

	get_Renamed(x: number, y: number): boolean;
	set_Renamed(x: number, y: number): void;
	flip(x: number, y: number): void;
	clear(): void;
	setRegion(left: number, top: number, width: number, height: number): void;
}
