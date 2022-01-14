export default Row;
/**
 * Row data structure used into the dataframe-js.
 */
declare class Row {
    /**
     * Create a new Row.
     * @param {Array | Object | Row} data The data of the Row.
     * @param {Array} columns The DataFrame column names.
     * @example
     * new Row({
     *      'column1': 3,
     *      'column2': 6,
     * })
     *
     * new Row([3, 6], ['column1', 'column2'])
     *
     * new Row(Row, ['column1', 'column3'])
     */
    constructor(data: Array | any | Row, columns: any[]);
    [Symbol.iterator](): Generator<any, void, unknown>;
    __newInstance__(data: any, columns: any): any;
    _build(data: any): any;
    _fromObject(object: any): any;
    _fromArray(array: any): any;
    /**
     * Convert Row into dict / hash / object.
     * @returns {Object} The Row converted into dict.
     * @example
     * row.toDict()
     */
    toDict(): any;
    /**
     * Convert Row into Array, loosing column names.
     * @returns {Array} The Row values converted into Array.
     * @example
     * row.toArray()
     */
    toArray(): any[];
    /**
     * Get the Row size.
     * @returns {Int} The Row length.
     * @example
     * row.size()
     */
    size(): any;
    /**
     * Get the Row hash code.
     * @returns {Int} The Row hash unique code.
     * @example
     * row.hash()
     */
    hash(): any;
    /**
     * Check if row contains a column.
     * @param {String} columnName The column to check.
     * @returns {Boolean} The presence or not of the column.
     * @example
     * row.has('column1')
     */
    has(columnName: string): boolean;
    /**
     * Select columns into the Row.
     * @param {...String} columnNames The columns to select.
     * @returns {Row} A new Row containing only the selected columns.
     * @example
     * row.select('column1', 'column2')
     */
    select(...columnNames: string[]): Row;
    /**
     * Get a Row value by its column.
     * @param {String} columnToGet The column value to get.
     * @returns The selected value.
     * @example
     * row.get('column1')
     */
    get(columnToGet: string): any;
    /**
     * Set a Row value by its column, or create a new value if column doesn't exist.
     * @param {String} columnToSet The column value to set.
     * @returns {Row} A new Row with the modified / new value.
     * @example
     * row.set('column1', 6)
     */
    set(columnToSet: string, value: any): Row;
    /**
     * Delete a Row value by its column.
     * @param {String} columnToDel The column value to delete.
     * @returns {Row} A new Row without the deleted value.
     * @example
     * row.delete('column1')
     */
    delete(columnToDel: string): Row;
    [__columns__]: any[];
    [__values__]: any;
}
declare const __columns__: unique symbol;
declare const __values__: unique symbol;
