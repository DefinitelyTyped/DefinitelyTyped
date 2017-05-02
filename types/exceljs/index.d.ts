// Type definitions for exceljs 0.4
// Project: https://github.com/guyonroche/exceljs
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const enum ValueType {
	Null = 0,
	Merge = 1,
	Number = 2,
	String = 3,
	Date = 4,
	Hyperlink = 5,
	Formula = 6,
	SharedString = 7,
	RichText = 8,
	Boolean = 9,
	Error = 10
}

export const enum FormulaType {
	None = 0,
	Master = 1,
	Shared = 2
}

export const enum RelationshipType {
	None = 0,
	OfficeDocument = 1,
	Worksheet = 2,
	CalcChain = 3,
	SharedStrings = 4,
	Styles = 5,
	Theme = 6,
	Hyperlink = 7
}

export const enum DocumentType {
	Xlsx = 1
}

export const enum ReadingOrder {
	RightToLeft = 1,
	LeftToRight = 2,
}

export interface ErrorValue {
	error: "#N/A" | "#REF!" | "#NAME?" | "#DIV/0!" | "#NULL!" | "#VALUE!" | "#NUM!";
}

export interface WorksheetView {
	state?: "normal" | "split" | "frozen";
	showRuler?: boolean;
	showRowColHeaders?: boolean;
	showGridLines?: boolean;
	zoomScale?: number;
	zoomScaleNormal?: number;
	style?: "pageBreakPreview" | "pageLayout";
}

export interface WorkbookView {
	x?: number;
	y?: number;
	width?: number;
	height?: number;
	firstSheet?: number;
	activeTab?: number;
	visibility?: string;
}

export interface Fill {
	type: "pattern" | "gradient";
	pattern?: "none" | "solid";
	fgColor?: Color;
	bgColor?: Color;
}

export interface Font {
	name: string;
	size?: number;
	family?: number;
	schema?: "minor" | "major" | "none";
	charset?: number;
	color?: Color;
	bold?: boolean;
	italic?: boolean;
	underline?: true | false | "none" | "single" | "double" | "singleAccounting" | "doubleAccounting";
	strike?: boolean;
	outline?: boolean;
}

export type BorderStyle =
	"thin" | "dotted" | "dashDot" | "hair" | "dashDotDot" | "slantDashDot" | "mediumDashed"  | "mediumDashDotDot" |
	"mediumDashDot" | "medium" | "double" | "thick";

export interface Color {
	/**
	 * Hex string for alpha-red-green-blue e.g. FF00FF00
	 */
	argb: string;
}

export interface Border {
	style?: BorderStyle;
	color?: Color;
}

export interface Borders {
	top?: Border;
	left?: Border;
	bottom?: Border;
	right?: Border;
}

export interface Alignment {
	horizontal?: "left" | "center" | "right" | "fill" | "justify" | "centerContinuous" | "distributed";
	vertical?: "top" | "middle" | "bottom" | "distributed" | "justify";
	wrapText?: boolean;
	indent?: number;
	readingOrder?: "rtl" | "ltr";
	textrotation?: number | "vertical";
}

export interface Cell {
	border?: Borders;
	font?: Font;
	alignment?: Alignment;
	numFmt?: string;
	value?: any;
	fill?: Fill;
}

export interface Row {
	/**
	 * The row number
	 */
	number: number;
	height: number;
	hidden: boolean;
	collapsed: boolean;
	values: any[];
	outlineLevel?: number;

	readonly cellCount: number;
	readonly actualCellCount: number;

	getCell(index: number): Cell;

	eachCell(callback: (cell: Cell, colNumber: number) => void): void;
	eachCell(opts: { includeEmpty: boolean}, callback: (cell: Cell, colNumber: number) => void): void;
}

export interface Column {
	width: number;
}

export interface Worksheet {
	/**
	 * The total row size of the document. Equal to the row number of the last row that has values.
	 */
	rowCount: number;
	/**
	 * A count of the number of rows that have values. If a mid-document row is empty, it will not be included in the count.
	 */
	actualRowCount: number;
	/**
	 * The total column size of the document. Equal to the maximum cell count from all of the rows
	 */
	columnCount: number;
	/**
	 * A count of the number of columns that have values.
	 */
	actualColumnCount: number;

	/**
	 * Get or create a column
	 */
	getColumn(index: number): Column;

	/**
	 * Create a new row
	 */
	addRow(data: any[]): Row;

	/**
	 * Get or create row by 0-based index
	 */
	getRow(index: number): Row;
	eachRow(callback: (row: Row, rowNumber: number) => void): void;

	/**
	 * Get or create cell
	 */
	getCell(ref: string): Cell;

	/**
	 * Merge cells, either:
	 * tlbr string
	 * tl string, br string
	 * t, l, b, r numbers
	 */
	mergeCells(a: number | string, b?: number | string, c?: number, d?: number): void;
}

export interface Xlsx {
	readFile(path: string): Promise<void>;
	writeFile(path: string): Promise<void>;
}

export interface WorksheetProps {
	showGridLines: boolean;
}

export class Workbook {
	constructor();

	creator: string;
	lastModifiedBy: string;
	created: Date;
	modified: Date;
	lastPrinted: Date;
	properties: {
		date1904: boolean;
	};
	views: WorkbookView[];

	addWorksheet(name: string, opts?: { properties?: WorksheetProps, views?: WorksheetView[] }): Worksheet;

	getWorksheet(indexOrName: number | string): Worksheet;

	xlsx: Xlsx;
}
