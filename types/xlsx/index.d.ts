// Type definitions for xlsx
// Project: https://github.com/SheetJS/js-xlsx
// Definitions by: themauveavenger <https://github.com/themauveavenger/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** Attempts to read filename and parse */
export declare function readFile(filename: string, opts?: IParsingOptions): IWorkBook;
/** Attempts to parse data */
export declare function read(data: any, opts?: IParsingOptions): IWorkBook;
/** Attempts to write workbook data to filename */
export declare function writeFile(data: IWorkBook, filename: string, opts?: IWritingOptions): any;
/** Attempts to write the workbook data */
export declare function write(data: IWorkBook, opts?: IWritingOptions): any;

export declare var utils: IUtils;

export interface IProperties {
    LastAuthor?: string
    Author?: string;
    CreatedDate?: Date;
    ModifiedDate?: Date
    Application?: string;
    AppVersion?: string;
    Company?: string;
    DocSecurity?: string;
    Manager?: string;
    HyperlinksChanged?: boolean;
    SharedDoc?: boolean;
    LinksUpToDate?: boolean;
    ScaleCrop?: boolean;
    Worksheets?: number;
    SheetNames?: string[];
}

export interface IParsingOptions {
    /**
     * Input data encoding
     */
    type?: 'base64' | 'binary' | 'buffer' | 'array' | 'file';

    /**
     * Save formulae to the .f field
     * @default true
     */
    cellFormula?: boolean;

    /**
     * Parse rich text and save HTML to the .h field
     * @default true
     */
    cellHTML?: boolean;

    /**
     * Save number format string to the .z field
     * @default false
     */
    cellNF?: boolean;

    /**
     * Save style/theme info to the .s field
     * @default false
     */
    cellStyles?: boolean;

    /**
     * Store dates as type d (default is n)
     * @default false
     */
    cellDates?: boolean;

    /**
     * Create cell objects for stub cells
     * @default false
     */
    sheetStubs?: boolean;

    /**
     * If >0, read the first sheetRows rows
     * @default 0
     */
    sheetRows?: number;

    /**
     * If true, parse calculation chains
     * @default false
     */
    bookDeps?: boolean;

    /**
     * If true, add raw files to book object
     * @default false
     */
    bookFiles?: boolean;

    /**
     * If true, only parse enough to get book metadata
     * @default false
     */
    bookProps?: boolean;

    /**
     * If true, only parse enough to get the sheet names
     * @default false
     */
    bookSheets?: boolean;

    /**
     * If true, expose vbaProject.bin to vbaraw field
     * @default false
     */
    bookVBA?: boolean;

    /**
     * If defined and file is encrypted, use password
     * @default ''
     */
    password?: string;
}

export interface IWritingOptions {
    /**
     * Output data encoding
     */
    type?: 'base64' | 'binary' | 'buffer' | 'file';

    /**
     * Store dates as type d (default is n)
     * @default false
     */
    cellDates?: boolean;

    /**
     * Generate Shared String Table
     * @default false
     */
    bookSST?: boolean;

    /**
     * Type of Workbook
     * @default 'xlsx'
     */
    bookType?: 'xlsx' | 'xlsm' | 'xlsb' | 'ods' | 'biff2' | 'fods' | 'csv';

    /**
     * Name of Worksheet for single-sheet formats
     * @default ''
     */
    sheet?: string;

    /**
     * Use ZIP compression for ZIP-based formats
     * @default false
     */
    compression?: boolean;
}

export interface IWorkBook {
    /**
     * A dictionary of the worksheets in the workbook.
     * Use SheetNames to reference these.
     */
    Sheets: { [sheet: string]: IWorkSheet };

    /**
     * ordered list of the sheet names in the workbook
     */
    SheetNames: string[];

    /**
     * an object storing the standard properties. wb.Custprops stores custom properties.
     * Since the XLS standard properties deviate from the XLSX standard, XLS parsing stores core properties in both places.
     */
    Props: IProperties;
}

/**
 * object representing the worksheet
 */
export interface IWorkSheet {
    [cell: string]: IWorkSheetCell | any;
}

export interface IWorkSheetCell {
    /**
     * The raw value of the cell.
     */
    v: string | number | boolean | Date;

    /**
     * Formatted text (if applicable)
     */
    w?: string;

    /**
    * The Excel Data Type of the cell.
    * b Boolean, n Number, e error, s String, d Date
    */
    t: 'b' | 'n' | 'e' | 's' | 'd';

    /**
     * Cell formula (if applicable)
     */
    f?: string;

    /**
     * Range of enclosing array if formula is array formula (if applicable)
     */
    F?: string;

    /**
     * Rich text encoding (if applicable)
     */
    r?: string;

    /**
     * HTML rendering of the rich text (if applicable)
     */
    h?: string;

    /**
     * Comments associated with the cell **
     */
    c?: string;

    /**
     * Number format string associated with the cell (if requested)
     */
    z?: string;

    /**
     * Cell hyperlink object (.Target holds link, .tooltip is tooltip)
     */
    l?: Object;

    /**
     * The style/theme of the cell (if applicable)
     */
    s?: Object;
}

export interface ICell {
    /** Column number */
    c: number;
    /** Row number */
    r: number;
}

export interface IRange {
    /** Starting cell */
    s: ICell;
    /** Ending cell */
    e: ICell;
}

export interface IUtils {
    /** converts an array of arrays of JS data to a worksheet. */
    aoa_to_sheet<T>(data: T[], opts?:any): IWorkSheet;

    /** Converts a worksheet object to an array of JSON objects */
    sheet_to_json<T>(worksheet:IWorkSheet, opts?: {
        raw?: boolean;
        range?: any;
        header?: "A"|number|string[];
    }):T[];
    /** Generates delimiter-separated-values output */
    sheet_to_csv(worksheet: IWorkSheet, options?: { FS: string, RS: string }): string;
    /** Generates a list of the formulae (with value fallbacks) */
    sheet_to_formulae(worksheet: IWorkSheet):any;

    /** Converts 0-indexed cell address to A1 form */
    encode_cell(cell: ICell): string;
    /** Converts 0-indexed row to A1 form */
    encode_row(row: number): string;
    /** Converts 0-indexed column to A1 form */
    encode_col(col: number): string;
    /** Converts 0-indexed range to A1 form */
    encode_range(s: ICell, e: ICell): string;

    /** Converts A1 cell address to 0-indexed form */
    decode_cell(address: string): ICell;
    /** Converts A1 row to 0-indexed form */
    decode_row(row: string): number;
    /** Converts A1 column to 0-indexed form */
    decode_col(col: string): number;
    /** Converts A1 range to 0-indexed form */
    decode_range(range: string): IRange;
}
