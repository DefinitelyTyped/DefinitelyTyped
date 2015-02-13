interface XLSXReadOptions {
    cellFormula?: boolean;
    cellHTML?: boolean;
    cellNF?: boolean;
    cellStyles?: boolean;
    cellDates?: boolean;
    sheetStubs?: boolean;
    sheetRows?: number;
    bookDeps?: boolean;
    bookFiles?: boolean;
    bookProps?: boolean;
    bookSheets?: boolean;
    bookVBA?: boolean;
    type?: string;
}
interface XLSXWriteOptions {
    cellDates?: boolean;
    bookSST?: boolean;
    bookType?: string;
    type?: string;
}
interface XLSXCell {
    v?: any;
    w?: string;
    t?: string;
    f?: any;
    r?: any;
    h?: any;
    c?: any;
    z?: any;
    l?: any;
    s?: any;
}
interface XLSXRange {
    s: XLSXCellAddress;
    e: XLSXCellAddress;
}
interface XLSXCellAddress {
    c: number;
    r: number;
}

interface XLSXUtils {
    sheet_to_json(sheet: XLSXSheet, write_ops?: XLSXWriteOptions ): string;
    sheet_to_csv( sheet: XLSXSheet, write_ops?: XLSXWriteOptions ): string;
    sheet_to_formulae(sheet: XLSXSheet, write_ops?: XLSXWriteOptions ): string;

    format_cell(format: string): string;
    encode_col(col: number): string;
    decode_col(colStr: string): number;
    encode_row(col: number): string;
    decode_row(colStr: string): number;

    encode_cell(cell: XLSXCellAddress): string;
    decode_cell(cellStr: string): XLSXCellAddress;
    encode_range(range: XLSXRange): string;
    decode_range(range: string): XLSXRange;
}

interface XLSXSheet {
    [idx: string]: XLSXCell;
}

interface XLSXWorkbook {
    SheetNames: string[];
    Sheets: { [name: string]: XLSXSheet };
}

interface XLSXStatic {
    read(data: string, read_opts?: XLSXReadOptions): void;
    readFile(fileName: string, read_opts?: XLSXReadOptions): void;
    write(wb: any, write_ops?: XLSXWriteOptions): string;
    writeFile(wb: any, filename: string, write_ops?: XLSXWriteOptions): void;

    utils: XLSXUtils;
    SSF: any;
}

declare var XLSX: XLSXStatic;



declare module 'xlsx' {
    export = XLSX;
}