// Type definitions for google-spreadsheet 3.3
// Project: https://github.com/theoephraim/node-google-spreadsheet
// Definitions by: the-vampiire <https://github.com/the-vampiire>
//                 Federico Grandi <https://github.com/EndBug>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// #region ENUMS

export type WorksheetType = 'GRID' | 'OBJECT';

export type WorksheetDimension = 'ROWS' | 'COLUMNS';

export type HyperlinkDisplayType = 'LINKED' | 'PLAIN_TEXT';

export type CellValueType = 'boolValue' | 'stringValue' | 'numberValue' | 'errorValue';

export type NumberFormatType = 'TEXT' | 'NUMBER' | 'PERCENT' | 'CURRENCY' | 'DATE' | 'TIME' | 'SCIENTIFIC';

export type CellErrorType =
    | 'ERROR'
    | 'NULL_VALUE'
    | 'DIVIDE_BY_ZERO'
    | 'VALUE'
    | 'REF'
    | 'NAME'
    | 'NUM'
    | 'N_A'
    | 'LOADING';

export type HorizontalAlign = 'LEFT' | 'CENTER' | 'RIGHT';

export type VerticalAlign = 'TOP' | 'MIDDLE' | 'BOTTOM';

/**
 * @see
 * https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/cells#wrapstrategy
 */
export type WrapStrategy = 'OVERFLOW_CELL' | 'LEGACY_WRAP' | 'CLIP' | 'WRAP';

export type ThemeColorType =
    | 'TEXT'
    | 'BACKGROUND'
    | 'ACCENT1'
    | 'ACCENT2'
    | 'ACCENT3'
    | 'ACCENT4'
    | 'ACCENT5'
    | 'ACCENT6'
    | 'LINK';

export type BorderStyle = 'NONE' | 'DOTTED' | 'DASHED' | 'SOLID' | 'SOLID_MEDIUM' | 'SOLID_THICK' | 'DOUBLE';

export type TextDirection = 'LEFT_TO_RIGHT' | 'RIGHT_TO_LEFT';

export interface TextRotation {
    angle: number;
    vertical: boolean;
}

export type RecalculationInterval = 'ON_CHANGE' | 'MINUTE' | 'HOUR';

export type Dimension = 'ROWS' | 'COLUMNS';

export type DeveloperMetadataVisibility = 'DOCUMENT' | 'PROJECT';

export type DeveloperMetadataLocationType = 'ROW' | 'COLUMN' | 'SHEET' | 'SPREADSHEET';

// #endregion

// #region OPTIONS / CONFIG

export interface PaginationOptions {
    limit: number;
    offset: number;
}

export interface WorksheetGridRange {
    startRowIndex: number;
    endRowIndex: number;
    startColumnIndex: number;
    endColumnIndex: number;
}

export interface WorksheetGridProperties {
    rowCount?: number | undefined;
    columnCount?: number | undefined;
    frozenRowCount?: number | undefined;
    frozenColumnCount?: number | undefined;
    hideGridlines?: boolean | undefined;
    rowGroupControlAfter?: boolean | undefined;
    columnGroupControlAfter?: boolean | undefined;
}

export interface DimensionRange {
    sheetId: number;
    endIndex: number;
    startIndex: number;
    dimension: Dimension;
}

export interface DeveloperMetadataLocation {
    sheetId: number;
    spreadsheet: boolean;
    dimensionRange: DimensionRange;
    locationType: DeveloperMetadataLocationType;
}

export interface DeveloperMetadata {
    metadataId: number;
    metadataKey: string;
    metadataValue: string;
    location: DeveloperMetadataLocation;
    visibility: DeveloperMetadataVisibility;
}

export interface WorksheetDimensionProperties {
    pixelSize: number;
    hiddenByUser: boolean;
    hiddenByFilter: boolean;

    /**
     * @see https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.developerMetadata#DeveloperMetadata
     */
    developerMetadata: DeveloperMetadata[];
}

export interface WorksheetDimensionBounds {
    startIndex: number;
    endIndex: number;
}

export interface Color {
    red: number;
    green: number;
    blue: number;
    alpha: number;
}

export interface ColorStyle {
    rgbColor: Color;
    themeColor: ThemeColorType;
}

export interface TextFormat {
    foregroundColor?: Color | undefined;
    foregroundColorStyle?: ColorStyle | undefined;
    fontFamily?: string | undefined;
    fontSize?: number | undefined;
    bold?: boolean | undefined;
    italic?: boolean | undefined;
    strikethrough?: boolean | undefined;
    underline?: boolean | undefined;
}

export interface NumberFormat {
    type: NumberFormatType;

    /**
     * see https://developers.google.com/sheets/api/guides/formats
     */
    pattern: string;
}

export interface Border {
    style: BorderStyle;
    width: number;
    color: Color;
    colorStyle: ColorStyle;
}

export interface Borders {
    top: Border;
    bottom: Border;
    left: Border;
    right: Border;
}

export interface Padding {
    top: number;
    bottom: number;
    left: number;
    right: number;
}

export interface ThemeColorPair {
    color: ColorStyle;
    colorType: ThemeColorType;
}

export interface SpreadsheetTheme {
    primaryFontFamily: string;
    themeColors: ThemeColorPair[];
}

/**
 * see https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets#iterativecalculationsettings
 */
export interface IterativeCalculationSetting {
    maxIterations: number;
    convergenceThreshold: number;
}

export interface CellError {
    message: string;
    type: CellErrorType;
}

export interface CellStats {
    nonEmpty: number;
    loaded: number;
    total: number;
}

export interface CellFormat {
    /**
     * @description
     * format describing how number values should be represented to the user
     */
    numberFormat: NumberFormat;

    /**
     * @description
     * background color of the cell
     */
    backgroundColor: Color;

    /**
     * @description
     * border settings of the cell
     */
    borders: Borders;

    /**
     * @description
     * padding in the cell
     * - spacing between inner text and cell boundaries
     */
    padding: Padding;

    /**
     * @description
     * horizontal alignment of the cell's value
     */
    horizontalAlignment: HorizontalAlign;

    /**
     * @description
     * vertical alignment of the cell's value
     */
    verticalAlignment: VerticalAlign;

    /**
     * @description
     * text-wrapping strategy of the cell's value
     */
    wrapStrategy: WrapStrategy;

    /**
     * @description
     * display direction of cell value text
     */
    textDirection: TextDirection;

    /**
     * @description
     * format of the text in the cell
     * - font, size etc.
     */
    textFormat: TextFormat;

    /**
     * @description
     * how a hyperlink (if any) should be displayed
     */
    hyperlinkDisplayType: HyperlinkDisplayType;

    /**
     * @description
     * rotation applied to text in a cell
     */
    textRotation: TextRotation;
}

export interface ServiceAccountCredentials {
    /**
     * @description
     * service account email address
     */
    client_email: string;

    /**
     * @description
     * service account private key
     */
    private_key: string;
}

export interface GetAccessTokenResponse {
    token?: string | null;
}

export interface OAuth2Client {
    getAccessToken: () => Promise<GetAccessTokenResponse>;
}

// #endregion

// #region GOOGLE SPREADSHEET CELL
export class GoogleSpreadsheetCell implements CellFormat {
    constructor(parentSheet: GoogleSpreadsheetWorksheet, rowIndex: number, columnIndex: number, cellData: any);

    // #region IMPLEMENTED PROPERTIES
    // These properties should reflect the ones in the CellFormat interface
    /**
     * @description
     * format describing how number values should be represented to the user
     */
    numberFormat: NumberFormat;

    /**
     * @description
     * background color of the cell
     */
    backgroundColor: Color;

    /**
     * @description
     * border settings of the cell
     */
    borders: Borders;

    /**
     * @description
     * padding in the cell
     * - spacing between inner text and cell boundaries
     */
    padding: Padding;

    /**
     * @description
     * horizontal alignment of the cell's value
     */
    horizontalAlignment: HorizontalAlign;

    /**
     * @description
     * vertical alignment of the cell's value
     */
    verticalAlignment: VerticalAlign;

    /**
     * @description
     * text-wrapping strategy of the cell's value
     */
    wrapStrategy: WrapStrategy;

    /**
     * @description
     * display direction of cell value text
     */
    textDirection: TextDirection;

    /**
     * @description
     * format of the text in the cell
     * - font, size etc.
     */
    textFormat: TextFormat;

    /**
     * @description
     * how a hyperlink (if any) should be displayed
     */
    hyperlinkDisplayType: HyperlinkDisplayType;

    /**
     * @description
     * rotation applied to text in a cell
     */
    textRotation: TextRotation;
    // #endregion

    // #region OWN PROPERTIES

    /**
     * @description
     * cell row in the worksheet
     */
    rowIndex: number;

    /**
     * @description
     * cell column in the worksheet
     */
    columnIndex: number;

    /**
     * @description
     * cell row number in A1 address format
     */
    a1Row: number;

    /**
     * @description
     * cell column letter in A1 address format
     */
    a1Column: string;

    /**
     * @description
     * cell full A1 address format
     */
    a1Address: string;

    /**
     * @description
     * this is the full value in the cell
     * - if there is a formula in the cell, this will be the value the formula resolves to
     */
    value: string | number | boolean;

    /**
     * @description
     * the type of the value, using google's terminology
     */
    readonly valueType: CellValueType;

    /**
     * @description
     * value after formatting rules are applied
     */
    readonly formattedValue: any;

    /**
     * @description
     * formula (if any) in the cell
     */
    formula: string;

    /**
     * @description
     * error related to an invalid cell format
     */
    readonly formulaError: CellError;

    /**
     * @description
     * note attached to the cell
     */
    note: string;

    /**
     * @description
     * url of the cell's link
     * - when using =HYPERLINK() formula
     */
    readonly hyperlink: string;

    /**
     * @description
     * format the user entered in the cell
     * - note: using named format properties is preferred
     */
    readonly userEnteredFormat: CellFormat;

    /**
     * @description
     * "effective format" used by the cell
     * - note: using named format properties is preferred
     * - this includes the results of applying any conditional formatting
     * - if the cell contains a formula, the computed number format
     * - if the effective format is the default format, effective format will not be written
     */
    readonly effectiveFormat: CellFormat;

    // #endregion

    // #region SYNCHRONOUS METHODS

    /**
     * @description
     * reset all cell formatting to default / none
     * - LOCAL CHANGE (must be saved to persist)
     */
    clearAllFormatting(): void;

    /**
     * @description
     * discard all unsaved changes
     * - includes value, notes and formatting
     * - LOCAL CHANGE (must be saved to persist)
     */
    discardUnsavedChanges(): void;

    // #endregion

    // #region ASYNCHRONOUS METHODS

    /**
     * @description
     * save this individual cell
     * - persist any local changes made to the cell
     * - see worksheet.saveUpdatedCells() for bulk saving
     */
    save(): Promise<void>;

    // #endregion
}
// #endregion

// #region GOOGLE SPREADSHEET ROW

/**
 * Property keys are determined by the header row of the sheet
 * - each row will have a property getter/setter available for each cell corresponding to the column header
 */
export class GoogleSpreadsheetRow {
    constructor(parentSheet: GoogleSpreadsheetWorksheet, rowNumber: number, data: any);

    /**
     * @description
     * This represents the properties that get loaded using the header row
     */
    [x: string]: any;

    /**
     * @description
     * row number in the worksheet
     * - NOT 0 indexed, starts at 1
     */
    rowIndex: number;

    /**
     * @description
     * full A1 formatted range of this row
     * - includes the worksheet name, ex: "sheet1!A5:D5"
     */
    a1Range: string;

    /**
     * @description
     * save any updates made to cell values in this row
     */
    save(): Promise<void>;

    /**
     * @description
     * delete this row
     */
    delete(): Promise<void>;
}

// #endregion

// #region GOOGLE SPREADSHEET WORKSHEET

export interface DuplicateWorksheetBasicProperties {
    /**
     * @description
     * name/title for new sheet, must be unique within the document
     */
    title?: string;

    /**
     * @description
     * where to insert the new sheet (zero-indexed)
     */
    index?: number;

    /**
     * @description
     * unique ID to use for new sheet
     */
    id?: string;
}

export interface WorksheetBasicProperties {
    // #region BASIC PROPERTIES
    /* separates basic (editable) properties as they are used as inputs to various methods
     * non-basic properties should be added to the extending interface below
     */

    /**
     * @description
     * first row values
     * - used in row-based interactions
     * - defines the dynamic properties of the Worksheet's GoogleSpreadsheetRows
     */
    headerValues?: string[] | undefined;

    /**
     * @description
     * name of the worksheet tab
     */
    title?: string | undefined;

    /**
     * @description
     * tab index in the worksheet doc (based on rightToLeft property)
     */
    index?: number | undefined;

    /**
     * @description
     * additional properties of the worksheet if this sheet is a grid
     */
    gridProperties?: WorksheetGridProperties | undefined;

    /**
     * @description
     * true if the worksheet is hidden in the UI, false if it's visible
     */
    hidden?: boolean | undefined;

    /**
     * @description
     * the color of the worksheet tab
     */
    tabColor?: Color | undefined;

    /**
     * @description
     * true if the worksheet is an RTL sheet instead of an LTR sheet
     */
    rightToLeft?: boolean | undefined;

    // #endregion
}

export class GoogleSpreadsheetWorksheet implements WorksheetBasicProperties {
    constructor(
        parentSpreadsheet: GoogleSpreadsheetWorksheet,
        { properties, data }: { properties: WorksheetBasicProperties; data?: any },
    );

    // #region BASIC PROPERTIES
    // These properties should reflect the ones in the WorksheetBasicProperties interface

    /**
     * @description
     * first row values
     * - used in row-based interactions
     * - defines the dynamic properties of the Worksheet's GoogleSpreadsheetRows
     */
    headerValues: string[];

    /**
     * @description
     * name of the worksheet tab
     */
    title: string;

    /**
     * @description
     * tab index in the worksheet doc (based on rightToLeft property)
     */
    index: number;

    /**
     * @description
     * additional properties of the worksheet if this sheet is a grid
     */
    gridProperties: WorksheetGridProperties;

    /**
     * @description
     * true if the worksheet is hidden in the UI, false if it's visible
     */
    hidden: boolean;

    /**
     * @description
     * the color of the worksheet tab
     */
    tabColor: Color;

    /**
     * @description
     * true if the worksheet is an RTL sheet instead of an LTR sheet
     */
    rightToLeft: boolean;

    // #endregion

    // #region NON-BASIC PROPERTIES

    /**
     * @description
     * set during creation, not editable
     */
    readonly sheetId: string;

    /**
     * @description
     * set during creation, not editable
     */
    readonly sheetType: WorksheetType;

    /**
     * @description
     * number of rows in the worksheet
     */
    rowCount: number;

    /**
     * @description
     * number of columns in the worksheet
     */
    columnCount: number;

    /**
     * @description
     * alias for the worksheet title
     */
    a1SheetName: string;

    /**
     * @description
     * A1 column letter of the last column in the worksheet
     */
    lastColumnLetter: string;

    /**
     * @description
     * stats about the cells in the worksheet
     */
    cellStats: CellStats;

    // #endregion

    // #region SYNCHRONOUS METHODS

    /**
     * @description
     * retrieve a cell from the cache based on numeric row and column indices
     * - zero-based index
     */

    getCell(rowIndex: number, columnIndex: number): GoogleSpreadsheetCell;

    /**
     * @description
     * retrieve a cell from the cache based on A1 address
     */
    getCellByA1(a1Address: string): GoogleSpreadsheetCell;

    /**
     * @description
     * fetch all rows in the worksheet
     *
     * @param options pagination options
     */
    getRows(options?: PaginationOptions): Promise<GoogleSpreadsheetRow[]>;

    /**
     * @description
     * reset local cache of properties and cell data
     * - cache is empties so props and cells must be re-fetched
     *
     * @param dataOnly if true, only affects data, not properties
     */
    resetLocalCache(dataOnly: boolean): void;

    // #endregion

    // #region ASYNCHRONOUS METHODS

    /**
     * @description
     * loads the cells in the worksheet
     * - note: if using an API key (read-only access), only A1 ranges are supported
     * @param filters single or array of filters
     * - strings are treated as an A1 range
     * - objects are treated as a WorksheetGridRange
     * - if skipped, all cells are loaded
     */
    loadCells(filters?: string | WorksheetGridRange | string[] | WorksheetGridRange[]): Promise<void>;

    /**
     * @description
     * saves all cells in the worksheet that have unsaved changes
     */
    saveUpdatedCells(): Promise<void>;

    /**
     * @description
     * saves all cells that have unsaved changes
     *
     * @param cells array of cells to save
     */
    saveCells(cells: GoogleSpreadsheetCell[]): Promise<void>;

    /**
     * @description
     * set the header (first) row in the worksheet
     *
     * @param headers
     * @param headerRowIndex The index of the header row, if not the first. NOTE: not zero-indexed
     */
    setHeaderRow(headers: string[], headerRowIndex?: number): Promise<void>;

    /**
     * @description
     * loads the header row (first row) of the sheet
     * - usually do not need to call this directly
     *
     * @param headerRowIndex The index of the header row, if not the first. NOTE: not zero-indexed
     */
    loadHeaderRow(headerRowIndex?: number): Promise<void>;

    /**
     * @description
     * append a row to the end of the worksheet
     *
     * @param values row values as either:
     * - an object of header and value pairs (relative to the worksheet header columns)
     * - an array of values in column order
     * @param options insertion options
     * - raw: ?DESCRIPTION?
     * - insert:?DESCRIPTION?
     */
    addRow(
        values:
            | {
                  [header: string]: string | number | boolean;
              }
            | Array<string | number | boolean>,
        options?: { raw: boolean; insert: boolean },
    ): Promise<GoogleSpreadsheetRow>;

    /**
     * @description
     * append rows to the end of the worksheet
     *
     * @see addRow this method is the pluralized form
     *
     * @param rowValues array of row values as either:
     * - an object of header and value pairs (relative to the worksheet header columns)
     * - an array of values in column order
     * @param options insertion options
     * - raw: ?DESCRIPTION?
     * - insert:?DESCRIPTION?
     */
    addRows(
        rowValues: Array<
            | {
                  [header: string]: string | number | boolean;
              }
            | Array<string | number | boolean>
        >,
        options?: { raw: boolean; insert: boolean },
    ): Promise<GoogleSpreadsheetRow[]>;

    /**
     * @description
     * set the grid properties of the worksheet
     *
     * @param gridProperties
     */
    setGridProperties(gridProperties: WorksheetGridProperties): Promise<void>;

    /**
     * @description
     * update basic worksheet properties
     *
     * @param properties
     */
    updateProperties(properties: WorksheetBasicProperties): Promise<void>;

    /**
     * @description
     * update worksheet grid properties / dimensions
     * - alias for setGridProperties
     */
    resize(gridProperties: WorksheetGridProperties): Promise<void>;

    /**
     * @description
     * update the worksheet "dimension properties"
     *
     * @param columnsOrRows which dimension to update
     *
     * @param properties properties of the dimension to update
     *
     * @param bounds start and end dimension indices
     */
    updateDimensionProperties(
        columnsOrRows: WorksheetDimension,
        properties: WorksheetDimensionProperties,
        bounds: WorksheetDimensionBounds,
    ): Promise<void>;

    /**
     * @description
     * insert into worksheet "dimension properties"
     *
     * @param columnsOrRows which dimension to update
     *
     * @param bounds start index and end index of the dimension to be added
     *
     * @param inheritFromBefore to inherit properties from the previous dimension
     */
    insertDimension(
        columnsOrRows: WorksheetDimension,
        bounds: WorksheetDimensionBounds,
        inheritFromBefore?: boolean,
    ): Promise<void>;

    /**
     * @description
     * defaults to clearing the entire sheet, or pass in a specific a1 range
     *
     * @param a1Range optional specific range within the sheet to clear
     */
    clear(a1Range?: string): Promise<void>;

    /**
     * @description
     * clear data/cells in a range of rows, defaulting to all rows after the header row(s)
     *
     * @param options options to control which rows to clear:
     * - start: A1 style row number of first row to clear, defaults to first non-header row
     * - end: A1 style row number of last row to clear, defaults to last row
     */
    clearRows(options?: { start: number; end: number }): Promise<void>;

    /**
     * @description
     * delete the worksheet
     */
    delete(): Promise<void>;

    /**
     * @description
     * copy this sheet to another document
     *
     * @param destinationSpreadsheetId destination spreadsheet doc ID
     */
    copyToSpreadsheet(destinationSpreadsheetId: string): Promise<void>;

    // #endregion
}

// #endregion

// #region GOOGLE SPREADSHEET

export interface SpreadsheetBasicProperties {
    // #region BASIC PROPERTIES
    /* separates basic (editable) properties as they are used as inputs to various methods
     * non-basic properties should be added to the extending interface below
     */

    /**
     * @description
     * document title
     */
    title?: string | undefined;

    /**
     * @description
     * document locale/language
     * - ISO code format
     * - ex: "en", "en_US"
     */
    locale?: string | undefined;

    /**
     * @description
     * document timezone
     * - CLDR format
     * - ex: "America/New_York", "GMT-07:00"
     */
    timeZone?: string | undefined;

    /**
     * @description
     * when volatile functions should be recalculated
     */
    autoRecalc?: RecalculationInterval | undefined;

    /**
     * @description
     * default format for all cells in all worksheets of the document
     */
    defaultFormat?: CellFormat | undefined;

    /**
     * @description
     * theme applied to all worksheets of the document
     */
    spreadsheetTheme?: SpreadsheetTheme | undefined;

    /**
     * @description
     * how circular dependencies are resolved with iterative calculations
     */
    iterativeCalculationSettings?: IterativeCalculationSetting | undefined;

    // #endregion
}

export class GoogleSpreadsheet implements SpreadsheetBasicProperties {
    /**
     * @description
     * create a new Spreadsheet doc
     *
     * @param sheetId document ID from the URL of the Spreadsheet
     */
    constructor(sheetId?: string);

    // #region BASIC PROPERTIES
    // These properties should reflect the ones in the SpreadsheetBasicProperties interface

    /**
     * @description
     * document title
     */
    title: string;

    /**
     * @description
     * document locale/language
     * - ISO code format
     * - ex: "en", "en_US"
     */
    locale: string;

    /**
     * @description
     * document timezone
     * - CLDR format
     * - ex: "America/New_York", "GMT-07:00"
     */
    timeZone: string;

    /**
     * @description
     * when volatile functions should be recalculated
     */
    autoRecalc: RecalculationInterval;

    /**
     * @description
     * default format for all cells in all worksheets of the document
     */
    defaultFormat: CellFormat;

    /**
     * @description
     * theme applied to all worksheets of the document
     */
    spreadsheetTheme: SpreadsheetTheme;

    /**
     * @description
     * how circular dependencies are resolved with iterative calculations
     */
    iterativeCalculationSettings: IterativeCalculationSetting;

    // #endregion

    // #region NON-BASIC PROPERTIES added here

    /**
     * @description
     * document ID
     * - from the Spreadsheet document URL
     */
    // in docs as "basic property" but can not be updated
    // moved here so it does not appear as an option in methods that use basic properties
    readonly spreadsheetId: string;

    /**
     * @description
     * object of child worksheets
     * - keyed by the worksheet sheetId
     */
    readonly sheetsById: { [sheetId: string]: GoogleSpreadsheetWorksheet };

    /**
     * @description
     * array of child worksheets as displayed in the UI
     * - ordered by their tab index
     */
    readonly sheetsByIndex: GoogleSpreadsheetWorksheet[];

    /**
     * @description
     * object of child worksheets
     * - keyed by the worksheet title
     */
    readonly sheetsByTitle: { [title: string]: GoogleSpreadsheetWorksheet };

    /**
     * @description
     * count of child worksheets
     * - shorthand for spreadsheetDoc.sheetsByIndex.length
     */
    readonly sheetCount: number;

    // #endregion

    // #region SYNCHRONOUS METHODS

    /**
     * @description
     * API key authentication
     * - used for all future requests made through the Spreadsheet document and its related objects
     * - only allows READ-ONLY access to PUBLIC Spreadsheet documents
     *
     * @param key API key for your Google project
     */
    useApiKey(key: string): void;

    /**
     * @description
     * Use Google's OAuth2Client to authenticate on behalf of a user
     *
     * @param oAuth2Client Configured OAuth2Client
     */
    useOAuth2Client(oAuth2Client: OAuth2Client): void;

    /**
     * @description
     * Set an access token to use for externally managed auth
     * - this method assumes you are creating and managing/refreshing the token yourself
     */
    useRawAccessToken(token: string): void;

    /**
     * @description
     * clear local cache of properties and child worksheets
     * - note: you must call loadInfo() again to re-load the cache
     */
    resetLocalCache(): void;

    // #endregion

    // #region ASYNCHRONOUS METHODS

    /**
     * @description
     * JWT-style authentication with service account credentials
     * - used for all future requests made through the Spreadsheet document and its related objects
     * - see https://cloud.google.com/iam/docs/service-accounts
     *
     * @param credentials object of Google Service Account credentials
     * - import by requiring the JSON file Google supplies
     *
     * @param impersonateAs an email of any user in the G Suite domain
     * - only works if service account has domain-wide delegation enabled
     *
     * @example
     * const credentials = require("./credentials.json");
     * const { GoogleSpreadsheet } = require("google-spreadsheet");
     *
     * // create a Spreadsheet doc by the given ID
     * const doc = new GoogleSpreadsheet(spreadsheetId);
     *
     * await doc.useServiceAccountAuth(credentials); // authenticate
     * await doc.getInfo(); // load properties and worksheets
     *
     * // doc is ready to be used
     */
    useServiceAccountAuth(credentials: ServiceAccountCredentials, impersonateAs?: string | null): Promise<void>;

    /**
     * @description
     * load basic Spreadsheet document properties and child worksheets
     */
    loadInfo(): Promise<void>;

    /**
     * @description
     * update basic Spreadsheet document properties
     *
     * @param properties basic Spreadsheet document properties to update
     */
    updateProperties(properties: SpreadsheetBasicProperties): Promise<void>;

    /**
     * @description
     * add a new worksheet to the Spreadsheet document
     * - also available as addWorksheet()
     *
     * @param worksheetProperties all worksheet properties to set
     */
    addSheet(worksheetProperties?: WorksheetBasicProperties): Promise<GoogleSpreadsheetWorksheet>;

    /**
     * @description
     * add a new worksheet to the Spreadsheet document
     * - alias for addSheet()
     *
     * @param worksheetProperties all worksheet properties to set
     */
    addWorksheet(worksheetProperties?: WorksheetBasicProperties): Promise<GoogleSpreadsheetWorksheet>;

    /**
     * @description
     * delete a worksheet from the Spreadsheet document
     * - preferred to use delete() method on the worksheet object itself
     *
     * @param sheetId ID of the worksheet to delete
     */
    deleteSheet(sheetId: string): Promise<void>;

    /**
     * @description
     * add a new named range to the Spreadsheet Document
     *
     * @param name name of the range
     * - used in formulas to refer to it
     *
     * @param range A1 formatted range or GridRange object
     *
     * @param rangeId unique ID for the range
     * - autogenerated if empty
     */
    addNamedRange(name: string, range: string | WorksheetGridRange, rangeId?: string): Promise<void>;

    /**
     * @description
     * delete a named range from the Spreadsheet document
     *
     * @param rangeId unique ID of the range to delete
     */
    deleteNamedRange(rangeId: string): Promise<void>;

    /**
     * @description
     * create a new google spreadsheet document
     *
     * You must initialize the GoogleSpreadsheet without an id in order to call this method
     *
     * @param properties basic Spreadsheet document properties to set
     */
    createNewSpreadsheetDocument(properties: SpreadsheetBasicProperties): Promise<void>;

    /**
     * @description
     * duplicate this sheet within this document
     *
     * @param properties all worksheet properties to set
     */
    duplicate(properties?: DuplicateWorksheetBasicProperties): Promise<GoogleSpreadsheetWorksheet>;

    // #endregion
}

// #endregion

// #region GOOGLE SPREADSHEET FORMULA ERROR
export class GoogleSpreadsheetFormulaError implements CellError {
    constructor(errorInfo: CellError);

    // These properties should reflect the ones in the CellError interface
    message: string;
    type: CellErrorType;
}
// #endregion
