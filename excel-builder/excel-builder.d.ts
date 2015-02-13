

interface EBWorksheetOptions {
    name?: string;
}

interface EBColumnSetting {
    width?: number;
    hidden?: boolean;
}

interface EBRowInstruction {
    height?: number;
    style?: number;
}

interface EBDifferentialStyle {
    id?: number;
    font?: EBFontStyle;
    border?: EBBorderFormatter;
    format?: EBNumberFormatter;
    fill?: EBFill;
    alignment?: string;
}


interface EBFontStyle {
    id?: number;
    bold?: boolean;
    italic?: boolean;
    superscript?: boolean;
    subscript?: boolean;
    underline?: boolean;
    strike?: boolean;
    outline?: boolean;
    shadow?: boolean;
    size?: number;
    color?: string;
    fontName?: string;
}
interface EBNumberFormatter {
    id?: number;
    formatCode?: string;
}
interface EBBorder {
    color?: string;
    style?: string;
}
interface EBBorderFormatter {
    id?: number;
    top?: EBBorder;
    left?: EBBorder;
    right?: EBBorder;
    bottom?: EBBorder;
    diagonal?: EBBorder;
}
interface EBFill {
    type: string;
    patternType?: string;
    fgColor?: string;
    bgColor?: string;
    degree?: number;
    start?: any;
    end?: any;
}

interface EBFormat {
    id?: number;
    font?: EBFontStyle;
    format?: EBNumberFormatter;
    border?: EBBorderFormatter;
    fill?: EBFill;
    alignment?: string;
}
interface EBColumnFormat {
    bestFit?: boolean;
    collapsed?: boolean;
    customWidth?: boolean;
    hidden?: boolean;
    max?: number;
    min?: number;
    outlineLevel?: number;
    phonetic?: boolean;
    style?: number;
    width?: number;
}



interface EBStylesheet {
    createDifferentialStyle(options: EBDifferentialStyle): EBDifferentialStyle;
    createFontStyle(style: EBFontStyle): EBFontStyle;

    createNumberFormatter(style: EBNumberFormatter): EBNumberFormatter;
    createBorderFormatter(border: EBBorderFormatter): EBBorderFormatter;

    createFormat(format: EBFormat): EBFormat;
    createFill(fill: EBFill): EBFill;
}

interface EBWorksheet {
    new (options?: EBWorksheetOptions): EBWorksheet;
    setData(data: any[][]): void;
    setColumns(column: EBColumnSetting[]): void;
    setColumnsFormats(formats: EBColumnFormat[]): void;
    setRowInstructions(row: number, instruction: EBRowInstruction): void;

    addTable(table: EBTable): void;
    addDrawings(drawing: EBDrawing): void;

    setPageOrientation(orientation: string): void;

    mergeCells(cell1: string, cell2: string): void;

    setHeader(data: any[]): void;
    setFooter(data: any[]): void;
}

interface EBWorkbook {
    new (): EBWorkbook;
    createWorksheet(options?: EBWorksheetOptions): EBWorksheet;
    addWorksheet(sheet: EBWorksheet): void;
    getStyleSheet(): EBStylesheet;

    addTable(table: EBTable): void;
    addDrawings(drawing: EBDrawing): void;
    addMedia(type: string, fileName: string, fileData: string, contentType: string): EBMedia;
}

interface EBTableColumn {
    name: string;
}
interface EBTableSortState {
    caseSensitive?: boolean;
    columnSort?: boolean;
    sortDirection?: string;
}
interface EBTable {
    new (): EBTable;
    setTableColumns(columns: EBTableColumn[]): void;
    addTableColumn(column: EBTableColumn): void;
    setSortState(state: EBTableSortState): void;
    setReferenceRange(start: number[], end: number[]): void;
    styleInfo: any;
}
interface EBDrawing {

}
interface EBMedia {
    id: string;
    data: string;
    fileName: string;
    contentType: string;
    extension: string;
}

interface EBFileAsyncOptions extends JSZipGeneratorOptions {
    success?: (data: any) => void;
    error?: () => void;
    requireJsPath?: string;
}




interface EBDrawingStatic {
    addDrawing(drawing: EBDrawing): void;
    getCount(): number;
}
declare module 'excel-builder/Excel/Drawings' {
    var theModule: EBDrawingStatic;
    export = theModule;
}
declare module 'excel-builder/Excel/Table' {
    var theModule: EBTable;
    export = theModule;
}
declare module 'excel-builder/Excel/Workbook' {
    var theModule: EBWorkbook;
    export = theModule;
}
declare module 'excel-builder/Excel/Worksheet' {
    var theModule: EBWorksheet;
    export = theModule;
}

interface EBStatic {
    createWorkbook(): EBWorkbook;
    createFile(book: EBWorkbook, options?: JSZipGeneratorOptions): any;
    createFileAsync(book: EBWorkbook, options?: EBFileAsyncOptions): void;
}
declare module 'excel-builder/excel-builder' {
    var theModule: EBStatic;
    export = theModule;
}