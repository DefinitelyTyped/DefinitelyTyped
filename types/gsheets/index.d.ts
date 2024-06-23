/*
 * - Numeric cells are converted to numbers
 * - Empty cells are converted to `null`
 * - Beware of cells formatted as dates! Their values will be returned as Excel-style
 * [DATEVALUE](http://office.microsoft.com/en-001/excel-help/datevalue-function-HP010062284.aspx) numbers (i.e.
 * based on the number of days since January 1, 1900)
 */
export interface Row {
    [headerColName: string]: string | number | null;
}

/*
 * - Empty rows are omitted
 * - `updated` is an ISO-formatted date string
 */
export interface Worksheet {
    updated: string;
    title: string;
    data: Row[] | null;
}

/*
 * - Empty rows are omitted
 * - `updated` is an ISO-formatted date string
 */
export interface WorksheetFromId extends Worksheet {
    data: Row[];
}

/*
 * - `updated` is an ISO-formatted date string
 */
export interface Spreadsheet {
    updated: string;
    title: string;
    worksheets: Array<{
        id: string;
        title: string;
    }>;
}

/*
 * Returns the contents of a worksheet, specified by its title. Note that this generates
 * **two** requests (to resolve a worksheet's title). If you know a worksheet's ID (e.g. via a previous call to
 * `getSpreadsheet`), use `getWorksheetById`.
 *
 * For empty worksheets `data` is `null`.
 *
 * ---
 *
 * Example response:
 *
 * ```
 * {
 *   "updated": "2014-11-19T10:20:18.068Z",
 *   "title": "foobar",
 *   "data": [
 *     {
 *       "foo": "bar",
 *       "baz": 42,
 *       "boing": null
 *     },
 *     // more rows ...
 *   ]
 * }
 * ```
 */
export function getWorksheet(spreadsheetId: string, worksheetTitle: string): Promise<Worksheet>;

/*
 * Returns the contents of a worksheet, specified by its ID.
 *
 * For empty worksheets `data` is `[]`.
 *
 * ---
 *
 * Example response:
 *
 * ```
 * {
 *   "updated": "2014-11-19T10:20:18.068Z",
 *   "title": "foobar",
 *   "data": [
 *     {
 *       "foo": "bar",
 *       "baz": 42,
 *       "boing": null
 *     },
 *     // more rows ...
 *   ]
 * }
 * ```
 */
export function getWorksheetById(spreadsheetId: string, worksheetId: string): Promise<WorksheetFromId>;

/*
 * Returns information about a spreadsheet including a list of worksheets.
 *
 * ---
 *
 * Example response:
 *
 * ```
 * {
 *   "updated": "2014-11-19T10:20:18.068Z",
 *   "title": "My Awesome Spreadsheet",
 *   "worksheets": [
 *     {
 *       "id": "od6",
 *       "title": "foobar"
 *     },
 *     // more worksheets ...
 *   ]
 * }
 * ```
 */
export function getSpreadsheet(spreadsheetId: string): Promise<Spreadsheet>;
