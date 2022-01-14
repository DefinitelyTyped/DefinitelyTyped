export function groupBy(df: any, columnNames: any): GroupedDataFrame;
/**
 * Grouped DataFrame structure grouping DataFrame rows by column value.
 */
export class GroupedDataFrame {
    /**
     * Create a GroupedDataFrame. Used in DataFrame.groupBy('columnName').
     * @param {DataFrame} df The DataFrame to group by.
     * @param {String} columnName The column used for the group by.
     * @example
     * df.groupBy('column1');
     * //or
     * groupBy(df, ['column1']);
     */
    constructor(df: any, columnNames: any, groups: any, hashes: any);
    df: any;
    on: any;
    [Symbol.iterator](): Generator<any, void, unknown>;
    get(hash: any): any;
    /**
     * Convert GroupedDataFrame into collection (Array) of dictionnaries (Object).
     * @returns {Array} An Array containing group: {groupKey, group}.
     * @example
     * groupedDF.toCollection();
     */
    toCollection(): any[];
    /**
     * Display the GroupedDataFrame as String Table.
     * @param {Boolean} [quiet=false] Quiet mode. If true, it doesn't trigger console.log().
     * @returns {String} The GroupedDataFrame as String Table.
     * @example
     * groupedDf.show()
     */
    show(quiet?: boolean): string;
    /**
     * List GroupedDataFrame groups.
     * @returns {Array} An Array containing GroupedDataFrame group names.
     * @example
     * gdf.listGroups()
     */
    listGroups(): any[];
    /**
     * List GroupedDataFrame groups as a hashCode.
     * @returns {Array} An Array containing GroupedDataFrame hash codes.
     * @example
     * gdf.listHashCodes()
     */
    listHashs(): any[];
    /**
     * Map on DataFrame groups.
     * @param {Function} func The function to apply to each row of each group.
     * @returns {DataFrame} A new DataFrame containing the result.
     * @example
     * groupedDF.map((row,i) => row.set('b', row.get('a')*i));
     */
    map(func: Function): any;
    /**
     * Filter a grouped DataFrame.
     * @param {Function} condition A filter function or a column/value object.
     * @returns {DataFrame} A new filtered DataFrame.
     * @example
     * groupedDF.filter((row,i) => (i === 0));
     */
    filter(condition: Function): any;
    /**
     * Chain maps and filters functions on DataFrame by optimizing their executions.
     * If a function returns boolean, it's a filter. Else it's a map.
     * It can be 10 - 100 x faster than standard chains of .map() and .filter().
     * @param {...Function} funcs Functions to apply on the DataFrame rows taking the row as parameter.
     * @returns {DataFrame} A new DataFrame with modified rows.
     * @example
     * groupedDF.chain(
     *      (row, i) => (i === 0), // filter
     *      row => row.set('column1', 3),  // map
     *      row => row.get('column2') === '5' // filter
     * )
     */
    chain(...funcs: Function[]): any;
    /**
     * Create an aggregation from a function.
     * @param {Function} func The aggregation function.
     * @param {String} [columnName='aggregation'] The column name created by the aggregation.
     * @returns {DataFrame} A new DataFrame with a column 'aggregation' containing the result.
     * @example
     * groupedDF.aggregate(group => group.stat.sum('column1'));
     */
    aggregate(func: Function, columnName?: string): any;
    /**
     * Pivot a GroupedDataFrame.
     * @param {String} columnToPivot The column which will be transposed as columns.
     * @param {Function} [func=(gdf) => gdf.count()] The function to define each column value from a DataFrame.
     * @returns {DataFrame} The pivot DataFrame.
     * @example
     * df.groupBy('carType').pivot('carModel', values => values.stat.sum('kms'))
     */
    pivot(columnToPivot: string, func?: Function): any;
    /**
     * Melt a DataFrame to make it tidy. It's the reverse of GroupedDataFrame.pivot().
     * @param {String} [variableColumnName='variable'] The column name containing columns.
     * @param {String} [variableColumnName='value'] The column name containing values.
     * @returns {DataFrame} The tidy DataFrame.
     * @example
     * df.groupBy('carType').melt('kms')
     */
    melt(variableColumnName?: string, valueColumnName?: string): any;
    [__groups__]: any;
    [__hashes__]: any;
}
import { __groups__ } from "./symbol";
import { __hashes__ } from "./symbol";
