export default Stat;
/**
 * Stat module for DataFrame, providing basic statistical metrics for numeric columns.
 */
declare class Stat {
    /**
     * Start the Stat module.
     * @param df An instance of DataFrame.
     */
    constructor(df: any);
    df: any;
    name: string;
    _castAsNumber(columnName: any): any;
    /**
     * Compute the sum of a numeric column.
     * @param columnName The column to evaluate, containing Numbers.
     * @returns The sum of the column.
     * @example
     * df.stat.sum('column1')
     */
    sum(columnName: string): number;
    /**
     * Compute the maximal value into a numeric column.
     * @param columnName The column to evaluate, containing Numbers.
     * @returns The maximal value into the column.
     * @example
     * df.stat.max('column1')
     */
    max(columnName: string): number;
    /**
     * Compute the minimal value into a numeric column.
     * @param columnName The column to evaluate, containing Numbers.
     * @returns The minimal value into the column.
     * @example
     * df.stat.min('column1')
     */
    min(columnName: string): number;
    /**
     * Compute the mean value into a numeric column.
     * @param columnName The column to evaluate,isNumber(n.get(columnName)) ? p + Number( containing Numbers.
     * @returns The mean value into the column.
     * @example
     * df.stat.mean('column1')
     */
    mean(columnName: string): number;
    /**
     * Compute the mean value into a numeric column.
     * Alias from mean.
     * @param columnName The column to evaluate, containing Numbers.
     * @returns The mean value into the column.
     * @example
     * df.stat.min('column1')
     */
    average(columnName: string): number;
    /**
     * Compute the variance into a numeric column.
     * @param columnName The column to evaluate, containing Numbers.
     * @param [population=false] Population mode. If true, provide the population variance, not the sample one.
     * @returns The variance into the column.
     * @example
     * df.stat.var('column1')
     */
    var(columnName: string, population?: boolean): number;
    /**
     * Compute the standard deviation into a numeric column.
     * @param columnName The column to evaluate, containing Numbers.
     * @param [population=false] Population mode. If true, provide the population standard deviation, not the sample one.
     * @returns The standard deviation into the column.
     * @example
     * df.stat.sd('column1')
     */
    sd(columnName: string, population?: boolean): number;
    /**
     * Compute all the stats available with the Stat module on a numeric column.
     * @param columnName The column to evaluate, containing Numbers.
     * @returns An dictionnary containing all statistical metrics available.
     * @example
     * df.stat.stats('column1')
     */
    stats(columnName: string): any;
}
