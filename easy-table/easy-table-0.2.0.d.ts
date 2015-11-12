// Type definitions for easy-table 0.2.0
// Project: https://github.com/eldargab/easy-table
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "easy-table" {
	class EasyTable {
		constructor();

		cell(label: string, value: any, printer?: EasyTable.CellPrinter, width?: number):void;
		newRow(): void;
		toString(): string;
		printTransposed(): string;
		print(): string;
		sort(fields: string): void;
		sort(comparer: (a: any, b: any) => number): void;
		total(label: string, accumulator: EasyTable.Accumulator, totalPrinter: EasyTable.CellPrinter): void;
	}

	module EasyTable {
		function printArray(array: any[], cellPrinter?: CellPrinter, tablePrinter?: Printer): string;
		function printObject(object: any, cellPrinter?: CellPrinter, tablePrinter?: Printer): string;

		//printer helpers
		function Number(length: number): CellPrinter;
		function RightPadder(char: string): CellPrinter;
		function LeftPadder(char: string): CellPrinter;

		interface CellPrinter extends Function {
			(obj: any, cell: (label: string, value: any, width?: number) => void):string;
		}
		interface Printer extends Function {
			(table: EasyTable):string;
		}
		interface Accumulator extends Function {
			(sum: number, val: number, index: number, length: number):number;
		}
	}

	export = EasyTable;
}
