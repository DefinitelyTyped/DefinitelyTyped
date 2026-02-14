export = XLSXWriter;
declare function XLSXWriter(): void;
declare class XLSXWriter {
    addWorksheet(name?: string): void;
    addFormat(name: string, format: FormatOptions): void;
    setColumnWidth(col: number, width: number): void;
    writeString(row: number, col: number, str: string, format?: string | FormatOptions): void;
    writeURL(row: number, col: number, url: string, format?: string | FormatOptions): void;
    writeFormula(row: number, col: number, formula: string, format?: string | FormatOptions): void;
    writeNumber(row: number, col: number, value: number, format?: string | FormatOptions): void;
    writeInteger(row: number, col: number, value: number, format?: string | FormatOptions): void;
    writeBoolean(row: number, col: number, value: boolean, format?: string | FormatOptions): void;
    writeDate(
        row: number,
        col: number,
        value: Date | number | string,
        format?: string | FormatOptions
    ): void;
    writeTime(row: number, col: number, value: string, format?: string | FormatOptions): void;
    saveToFile(filename: string): void;
}
declare namespace XLSXWriter {
    export {
        FormatBorder,
        HorizontalAlignment,
        VerticalAlignment,
        ReadingDirection,
        Underline,
        FontScript,
        FormatOptions,
    };
}
type FormatBorder =
    | 'none'
    | 'thin'
    | 'medium'
    | 'dashed'
    | 'dotted'
    | 'thick'
    | 'double'
    | 'hair'
    | 'medium-dashed'
    | 'dash-dot'
    | 'medium-dash-dot'
    | 'dash-dot-dot'
    | 'medium-dash-dot-dot'
    | 'slant-dash-dot';
type HorizontalAlignment =
    | 'left'
    | 'center'
    | 'right'
    | 'fill'
    | 'justify'
    | 'center-across'
    | 'distributed';
type VerticalAlignment = 'top' | 'center' | 'bottom' | 'justify' | 'distributed';
type ReadingDirection = 'left-to-right' | 'right-to-left';
type Underline = 'single' | 'double' | 'single-accounting' | 'double-accounting';
type FontScript = 'superscript' | 'subscript';
interface FormatOptions {
    numericFormat?: string;
    horizontalAlignment?: HorizontalAlignment;
    verticalAlignment?: VerticalAlignment;
    textWrap?: boolean;
    indentation?: number;
    readingDirection?: ReadingDirection;
    shrinkToFit?: boolean;
    fontType?: string;
    fontSize?: number;
    fontColor?: string;
    bold?: boolean;
    italic?: boolean;
    underline?: Underline;
    strikethrough?: boolean;
    fontScript?: FontScript;
    cellBorder?: FormatBorder;
    bottomBorder?: FormatBorder;
    topBorder?: FormatBorder;
    leftBorder?: FormatBorder;
    rightBorder?: FormatBorder;
    borderColor?: string;
    borderTopColor?: string;
    borderLeftColor?: string;
    borderRightColor?: string;
    borderBottomColor?: string;
    backgroundColor?: string;
}
