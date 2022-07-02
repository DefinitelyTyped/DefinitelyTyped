export default DataFrame;
/**
 * DataFrame data structure providing an immutable, flexible and powerfull way to manipulate data with columns and rows.
 */
declare class DataFrame {
    /**
     * Set the default modules used in DataFrame instances.
     * @param defaultModules DataFrame modules used by default.
     * @example
     * DataFrame.setDefaultModules(SQL, Stat)
     */
    static setDefaultModules(...defaultModules: any[]): void;
    /**
     * Create a DataFrame from a delimiter separated values text file. It returns a Promise.
     * @param pathOrFile A path to the file (url or local) or a browser File object.
     * @param sep The separator used to parse the file.
     * @param [header=true] A boolean indicating if the text has a header or not.
     * @example
     * DataFrame.fromDSV('http://myurl/myfile.txt').then(df => df.show())
     * // In browser Only
     * DataFrame.fromDSV(myFile).then(df => df.show())
     * // From node.js only Only
     * DataFrame.fromDSV('/my/absolue/path/myfile.txt').then(df => df.show())
     * DataFrame.fromDSV('/my/absolue/path/myfile.txt', ';', true).then(df => df.show())
     */
    static fromDSV(...args: any[]): Promise<DataFrame>;
    /**
     * Create a DataFrame from a delimiter separated values text file. It returns a Promise. Alias of DataFrame.fromDSV.
     * @param  pathOrFile A path to the file (url or local) or a browser File object.
     * @param sep The separator used to parse the file.
     * @param [header=true] A boolean indicating if the text has a header or not.
     * @example
     * DataFrame.fromText('http://myurl/myfile.txt').then(df => df.show())
     * // In browser Only
     * DataFrame.fromText(myFile).then(df => df.show())
     * // From node.js only Only
     * DataFrame.fromText('/my/absolue/path/myfile.txt').then(df => df.show())
     * DataFrame.fromText('/my/absolue/path/myfile.txt', ';', true).then(df => df.show())
     */
    static fromText(...args: any[]): Promise<DataFrame>;
    /**
     * Create a DataFrame from a comma separated values file. It returns a Promise.
     * @param  pathOrFile A path to the file (url or local) or a browser File object.
     * @param [header=true] A boolean indicating if the csv has a header or not.
     * @example
     * DataFrame.fromCSV('http://myurl/myfile.csv').then(df => df.show())
     * // For browser only
     * DataFrame.fromCSV(myFile).then(df => df.show())
     * // From node.js only
     * DataFrame.fromCSV('/my/absolue/path/myfile.csv').then(df => df.show())
     * DataFrame.fromCSV('/my/absolue/path/myfile.csv', true).then(df => df.show())
     */
    static fromCSV(...args: any[]): Promise<DataFrame>;
    /**
     * Create a DataFrame from a tab separated values file. It returns a Promise.
     * @param  pathOrFile A path to the file (url or local) or a browser File object.
     * @param [header=true] A boolean indicating if the tsv has a header or not.
     * @example
     * DataFrame.fromTSV('http://myurl/myfile.tsv').then(df => df.show())
     * // For browser only
     * DataFrame.fromTSV(myFile).then(df => df.show())
     * // From node.js only
     * DataFrame.fromTSV('/my/absolue/path/myfile.tsv').then(df => df.show())
     * DataFrame.fromTSV('/my/absolue/path/myfile.tsv', true).then(df => df.show())
     */
    static fromTSV(...args: any[]): Promise<DataFrame>;
    /**
     * Create a DataFrame from a pipe separated values file. It returns a Promise.
     * @param  pathOrFile A path to the file (url or local) or a browser File object.
     * @param [header=true] A boolean indicating if the psv has a header or not.
     * @example
     * DataFrame.fromPSV('http://myurl/myfile.psv').then(df => df.show())
     * // For browser only
     * DataFrame.fromPSV(myFile).then(df => df.show())
     * // From node.js only
     * DataFrame.fromPSV('/my/absolue/path/myfile.psv').then(df => df.show())
     * DataFrame.fromPSV('/my/absolue/path/myfile.psv', true).then(df => df.show())
     */
    static fromPSV(...args: any[]): Promise<DataFrame>;
    /**
     * Create a DataFrame from a JSON file. It returns a Promise.
     * @param  pathOrFile A path to the file (url or local) or a browser File object.
     * @example
     * DataFrame.fromJSON('http://myurl/myfile.json').then(df => df.show())
     * // For browser only
     * DataFrame.fromJSON(myFile).then(df => df.show())
     * // From node.js only
     * DataFrame.fromJSON('/my/absolute/path/myfile.json').then(df => df.show())
     */
    static fromJSON(...args: any[]): Promise<DataFrame>;
    /**
     * Create a new DataFrame.
     * @param data The data of the DataFrame.
     * @param columns The DataFrame column names.
     * @param options Additional options. Example: modules.
     * @example
     * new DataFrame({
     *      'column1': [3, 6, 8],
     *      'column2': [3, 4, 5, 6],
     * }, ['column1', 'column2'])
     *
     * new Data Frame([
     *      [1, 6, 9, 10, 12],
     *      [1, 2],
     *      [6, 6, 9, 8, 9, 12],
     * ], ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'])
     *
     * new DataFrame([
     *      {c1: 1, c2: 6, c3: 9, c4: 10, c5: 12},
     *      {c4: 1, c3: 2},
     *      {c1: 6, c5: 6, c2: 9, c4: 8, c3: 9, c6: 12},
     * ], ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'])
     *
     * new DataFrame(df);
     *
     * new DataFrame(yourData, yourColumns, {modules: [MyOwnModule, MyOtherModule]})
     */
    constructor(data: DataFrame | Record<string, any>, columns?: any[], options?: any);
    options: any;
    [Symbol.iterator](): Generator;
    _columnsAreEquals(columns: any, columns2?: any): boolean;
    __newInstance__(data: any, columns: any): DataFrame;
    __instanciateModules__(modules: any, df?: any): any;
    _build(data: any, columns: any): any[];
    _fromDict(dict: any, columns: any): any[];
    _fromArray(Array: any, columns: any): any[];
    _joinByType(gdf1: any, gdf2: any, type: any, newColumns: any): any;
    _join(dfToJoin: any, columnNames: any, types: any): any;
    _cleanSavePath(path: any): any;
    /**
     * Convert the DataFrame into a text delimiter separated values. You can also save the file if you are using nodejs.
     * @param [sep=' '] Column separator.
     * @param [header=true] Writing the header in the first line. If false, there will be no header.
     * @param [path] The path to save the file. /!\ Works only on node.js, not into the browser.
     * @returns The text file in raw string.
     * @example
     * df.toDSV()
     * df.toDSV(';')
     * df.toDSV(';', true)
     * // From node.js only
     * df.toDSV(';', true, '/my/absolute/path/dataframe.txt')
     */
    toDSV(...args: any[]): string;
    /**
     * Convert the DataFrame into a comma separated values string. You can also save the file if you are using nodejs.
     * @param [header=true] Writing the header in the first line. If false, there will be no header.
     * @param [path] The path to save the file. /!\ Works only on node.js, not into the browser.
     * @returns The csv file in raw string.
     * @example
     * df.toCSV()
     * df.toCSV(true)
     * // From node.js only
     * df.toCSV(true, '/my/absolute/path/dataframe.csv')
     */
    toCSV(...args: any[]): string;
    /**
     * Convert the DataFrame into a tab separated values string. You can also save the file if you are using nodejs.
     * @param [header=true] Writing the header in the first line. If false, there will be no header.
     * @param [path] The path to save the file. /!\ Works only on node.js, not into the browser.
     * @returns The csv file in raw string.
     * @example
     * df.toCSV()
     * df.toCSV(true)
     * // From node.js only
     * df.toCSV(true, '/my/absolute/path/dataframe.csv')
     */
    toTSV(...args: any[]): string;
    /**
     * Convert the DataFrame into a pipe separated values string. You can also save the file if you are using nodejs.
     * @param [header=true] Writing the header in the first line. If false, there will be no header.
     * @param [path] The path to save the file. /!\ Works only on node.js, not into the browser.
     * @returns The csv file in raw string.
     * @example
     * df.toPSV()
     * df.toPSV(true)
     * // From node.js only
     * df.toPSV(true, '/my/absolute/path/dataframe.csv')
     */
    toPSV(...args: any[]): string;
    /**
     * Convert the DataFrame into a text delimiter separated values. Alias for .toDSV. You can also save the file if you are using nodejs.
     * @param [sep=' '] Column separator.
     * @param [header=true] Writing the header in the first line. If false, there will be no header.
     * @param [path] The path to save the file. /!\ Works only on node.js, not into the browser.
     * @returns The text file in raw string.
     * @example
     * df.toText()
     * df.toText(';')
     * df.toText(';', true)
     * // From node.js only
     * df.toText(';', true, '/my/absolute/path/dataframe.txt')
     */
    toText(...args: any[]): string;
    /**
     * Convert the DataFrame into a json string. You can also save the file if you are using nodejs.
     * @param [asCollection=false] Writing the JSON as collection of Object.
     * @param [path] The path to save the file. /!\ Works only on node.js, not into the browser.
     * @returns The json file in raw string.
     * @example
     * df.toJSON()
     * // From node.js only
     * df.toJSON('/my/absolute/path/dataframe.json')
     */
    toJSON(...args: any[]): string;
    /**
     * Convert DataFrame into dict / hash / object.
     * @returns The DataFrame converted into dict.
     * @example
     * df.toDict()
     */
    toDict(): any;
    /**
     * Convert DataFrame into Array of Arrays. You can also extract only one column as Array.
     * @param [columnName] Column Name to extract. By default, all columns are transformed.
     * @returns The DataFrame (or the column) converted into Array.
     * @example
     * df.toArray()
     */
    toArray(columnName?: string): any[];
    /**
     * Convert DataFrame into Array of dictionnaries. You can also return Rows instead of dictionnaries.
     * @param [ofRows] Return a collection of Rows instead of dictionnaries.
     * @returns The DataFrame converted into Array of dictionnaries (or Rows).
     * @example
     * df.toCollection()
     */
    toCollection(ofRows?: boolean): any[];
    /**
     * Display the DataFrame as String Table. Can only return a sring instead of displaying the DataFrame.
     * @param [rows=10] The number of lines to display.
     * @param [quiet=false] Quiet mode. If true, only returns a string instead of console.log().
     * @returns The DataFrame as String Table.
     * @example
     * df.show()
     * df.show(10)
     * const stringDF = df.show(10, true)
     */
    show(rows?: number, quiet?: boolean): string;
    /**
     * Get the DataFrame dimensions.
     * @returns The DataFrame dimensions. [height, width]
     * @example
     * const [height, width] = df.dim()
     */
    dim(): any[];
    /**
     * Transpose a DataFrame. Rows become columns and conversely. n x p => p x n.
     * @param [transposeColumnNames=false] An option to transpose columnNames in a rowNames column.
     * @returns A new transposed DataFrame.
     * @example
     * df.transpose()
     */
    transpose(tranposeColumnNames: any): any;
    /**
     * Get the rows number.
     * @returns The number of DataFrame rows.
     * @example
     * df.count()
     */
    count(): any;
    /**
     * Get the count of a value into a column.
     * @param valueToCount The value to count into the selected column.
     * @param [columnName=this.listColumns()[0]] The column to count the value.
     * @returns The number of times the selected value appears.
     * @example
     * df.countValue(5, 'column2')
     * df.select('column1').countValue(5)
     */
    countValue(valueToCount: any, columnName?: string): any;
    /**
     * Push new rows into the DataFrame.
     * @param rows The rows to add.
     * @returns A new DataFrame with the new rows.
     * @example
     * df.push([1,2,3], [1,4,9])
     */
    push(rows: any[] | Row): DataFrame;
    /**
     * Replace a value by another in all the DataFrame or in a column.
     * @param value The value to replace.
     * @param replacement The new value.
     * @param [columnNames=this.listColumns()] The columns to apply the replacement.
     * @returns A new DataFrame with replaced values.
     * @example
     * df.replace(undefined, 0, 'column1', 'column2')
     */
    replace(value: any, replacement: any, columnNames?: string | any[]): DataFrame;
    /**
     * Compute unique values into a column.
     * @param columnName The column to distinct.
     * @returns A DataFrame containing the column with distinct values.
     * @example
     * df.distinct('column1')
     */
    distinct(columnName: string): DataFrame;
    /**
     * Compute unique values into a column.
     * Alias from .distinct()
     * @param columnName The column to distinct.
     * @returns A DataFrame containing the column with distinct values.
     * @example
     * df.unique('column1')
     */
    unique(columnName: string): DataFrame;
    /**
     * List DataFrame columns.
     * @returns An Array containing DataFrame columnNames.
     * @example
     * df.listColumns()
     */
    listColumns(): any[];
    /**
     * Select columns in the DataFrame.
     * @param columnNames The columns to select.
     * @returns A new DataFrame containing selected columns.
     * @example
     * df.select('column1', 'column3')
     */
    select(...columnNames: string[]): DataFrame;
    /**
     * Add a new column or set an existing one.
     * @param columnName The column to modify or to create.
     * @param [func=(row, index) => undefined] The function to create the column.
     * @returns A new DataFrame containing the new or modified column.
     * @example
     * df.withColumn('column4', () => 2)
     * df.withColumn('column2', (row) => row.get('column2') * 2)
     */
    withColumn(columnName: string, func?: () => any): DataFrame;
    /**
     * Modify the structure of the DataFrame by changing columns order, creating new columns or removing some columns.
     * @param newColumnNames The new columns of the DataFrame.
     * @returns A new DataFrame with restructured columns (renamed, add or deleted).
     * @example
     * df.restructure(['column1', 'column4', 'column2', 'column3'])
     * df.restructure(['column1', 'column4'])
     * df.restructure(['column1', 'newColumn', 'column4'])
     */
    restructure(newColumnNames: any[]): DataFrame;
    /**
     * Rename each column.
     * @param newColumnNames The new column names of the DataFrame.
     * @returns A new DataFrame with the new column names.
     * @example
     * df.renameAll(['column1', 'column3', 'column4'])
     */
    renameAll(newColumnNames: any[]): DataFrame;
    /**
     * Rename a column.
     * @param columnName The column to rename.
     * @param replacement The new name for the column.
     * @returns A new DataFrame with the new column name.
     * @example
     * df.rename('column1', 'columnRenamed')
     */
    rename(columnName: string, replacement: string): DataFrame;
    /**
     * Cast each column into a given type.
     * @param typeFunctions The functions used to cast columns.
     * @returns A new DataFrame with the columns having new types.
     * @example
     * df.castAll([Number, String, (val) => new CustomClass(val)])
     */
    castAll(typeFunctions: any[]): DataFrame;
    /**
     * Cast a column into a given type.
     * @param columnName The column to cast.
     * @param ObjectType The function used to cast the column.
     * @returns A new DataFrame with the column having a new type.
     * @example
     * df.cast('column1', Number)
     * df.cast('column1', (val) => new MyCustomClass(val))
     */
    cast(columnName: string, typeFunction: any): DataFrame;
    /**
     * Remove a single column.
     * @param columnName The column to drop.
     * @returns A new DataFrame without the dropped column.
     * @example
     * df.drop('column2')
     */
    drop(columnName: string): DataFrame;
    /**
     * Chain maps and filters functions on DataFrame by optimizing their executions.
     * If a function returns boolean, it's a filter. Else it's a map.
     * It can be 10 - 100 x faster than standard chains of .map() and .filter().
     * @param funcs Functions to apply on the DataFrame rows taking the row as parameter.
     * @returns A new DataFrame with modified rows.
     * @example
     * df.chain(
     *      row => row.get('column1') > 3, // filter
     *      row => row.set('column1', 3),  // map
     *      row => row.get('column2') === '5' // filter
     * )
     */
    chain(...funcs: Array<() => DataFrame>): DataFrame;
    /**
     * Filter DataFrame rows.
     * @param condition A filter function or a column/value object.
     * @returns A new filtered DataFrame.
     * @example
     * df.filter(row => row.get('column1') >= 3)
     * df.filter({'column2': 5, 'column1': 3}))
     */
    filter(condition: () => DataFrame | Record<string, any>): DataFrame;
    /**
     * Filter DataFrame rows.
     * Alias of .filter()
     * @param condition A filter function or a column/value object.
     * @returns A new filtered DataFrame.
     * @example
     * df.where(row => row.get('column1') >= 3)
     * df.where({'column2': 5, 'column1': 3}))
     */
    where(condition: () => DataFrame | Record<string, any>): DataFrame;
    /**
     * Find a row (the first met) based on a condition.
     * @param condition A filter function or a column/value object.
     * @returns The targeted Row.
     * @example
     * df.find(row => row.get('column1') === 3)
     * df.find({'column1': 3})
     */
    find(condition: () => Row | Record<string, any>): Row;
    /**
     * Map on DataFrame rows. /!\ Prefer to use .chain().
     * @param func A function to apply on each row taking the row as parameter.
     * @returns A new DataFrame with modified rows.
     * @example
     * df.map(row => row.set('column1', row.get('column1') * 2))
     */
    map(func: () => DataFrame): DataFrame;
    /**
     * Reduce DataFrame into a value.
     * @param func The reduce function taking 2 parameters, previous and next.
     * @param [init] The initial value of the reducer.
     * @returns A reduced value.
     * @example
     * df.reduce((p, n) => n.get('column1') + p, 0)
     * df2.reduce((p, n) => (
     *          n.set('column1', p.get('column1') + n.get('column1'))
     *           .set('column2', p.get('column2') + n.get('column2'))
     * ))
     */
    reduce(func: () => any, init?: any): any;
    /**
     * Reduce DataFrame into a value, starting from the last row (see .reduce()).
     * @param func The reduce function taking 2 parameters, previous and next.
     * @param [init] The initial value of the reducer.
     * @returns A reduced value.
     * @example
     * df.reduceRight((p, n) => p > n ? p : n, 0)
     */
    reduceRight(func: () => any, init?: any): any;
    /**
     * Return a DataFrame without duplicated columns.
     * @param columnNames The columns used to check unicity of rows. If omitted, unicity is checked on all columns.
     * @returns A DataFrame without duplicated rows.
     * @example
     * df.dropDuplicates('id', 'name')
     */
    dropDuplicates(...columnNames: string[]): DataFrame;
    /**
     * Return a DataFrame without rows containing missing values (undefined, NaN, null).
     * @param columnNames The columns to consider. All columns are considered by default.
     * @returns A DataFrame without rows containing missing values.
     * @example
     * df.dropMissingValues(['id', 'name'])
     */
    dropMissingValues(columnNames: any[]): DataFrame;
    /**
     * Return a DataFrame with missing values (undefined, NaN, null) fill with default value.
     * @param replacement The new value.
     * @param columnNames The columns to consider. All columns are considered by default.
     * @returns A DataFrame with missing values replaced.
     * @example
     * df.fillMissingValues(0, ['id', 'name'])
     */
    fillMissingValues(replacement: any, columnNames: any[]): DataFrame;
    /**
     * Return a shuffled DataFrame rows.
     * @returns A shuffled DataFrame.
     * @example
     * df.shuffle()
     */
    shuffle(): DataFrame;
    /**
     * Return a random sample of rows.
     * @param percentage A percentage of the orignal DataFrame giving the sample size.
     * @returns A sample DataFrame
     * @example
     * df.sample(0.3)
     */
    sample(percentage: number): DataFrame;
    /**
     * Randomly split a DataFrame into 2 DataFrames.
     * @param percentage A percentage of the orignal DataFrame giving the first DataFrame size. The second takes the rest.
     * @returns An Array containing the two DataFrames. First, the X% DataFrame then the rest DataFrame.
     * @example
     * const [30DF, 70DF] = df.bisect(0.3)
     */
    bisect(percentage: number): any[];
    /**
     * Group DataFrame rows by columns giving a GroupedDataFrame object. See its doc for more examples.
     * @param columnNames The columns used for the groupBy.
     * @returns A GroupedDataFrame object.
     * @example
     * df.groupBy('column1')
     * df.groupBy('column1', 'column2')
     * df.groupBy('column1', 'column2').listGroups()
     * df.groupBy('column1', 'column2').show()
     * df.groupBy('column1', 'column2').aggregate((group) => group.count())
     */
    groupBy(...args: any[]): any;
    /**
     * Sort DataFrame rows based on column values. The row should contains only one variable type. Columns are sorted left-to-right.
     * @param columnNames The columns giving order.
     * @param [reverse=false] Reverse mode. Reverse the order if true.
     * @param [missingValuesPosition='first'] Define the position of missing values (undefined, nulls and NaN) in the order.
     * @returns An ordered DataFrame.
     * @example
     * df.sortBy('id')
     * df.sortBy(['id1', 'id2'])
     * df.sortBy(['id1'], true)
     */
    sortBy(columnNames: string | string[], reverse?: boolean, missingValuesPosition?: string): DataFrame;
    /**
     * Concat two DataFrames.
     * @param dfToUnion The DataFrame to concat.
     * @returns A new concatenated DataFrame resulting of the union.
     * @example
     * df.union(df2)
     */
    union(dfToUnion: DataFrame): DataFrame;
    /**
     * Join two DataFrames.
     * @param dfToJoin The DataFrame to join.
     * @param columnNames The selected columns for the join.
     * @param [how='inner'] The join mode. Can be: full, inner, outer, left, right.
     * @returns The joined DataFrame.
     * @example
     * df.join(df2, 'column1', 'full')
     */
    join(dfToJoin: DataFrame, columnNames: string | string[], how?: string): DataFrame;
    /**
     * Join two DataFrames with inner mode.
     * @param dfToJoin The DataFrame to join.
     * @param columnNames The selected columns for the join.
     * @returns The joined DataFrame.
     * @example
     * df.innerJoin(df2, 'id')
     * df.join(df2, 'id')
     * df.join(df2, 'id', 'inner')
     */
    innerJoin(dfToJoin: DataFrame, columnNames: string | string[]): DataFrame;
    /**
     * Join two DataFrames with full mode.
     * @param dfToJoin The DataFrame to join.
     * @param columnNames The selected columns for the join.
     * @returns The joined DataFrame.
     * @example
     * df.fullJoin(df2, 'id')
     * df.join(df2, 'id', 'full')
     */
    fullJoin(dfToJoin: DataFrame, columnNames: string | string[]): DataFrame;
    /**
     * Join two DataFrames with outer mode.
     * @param dfToJoin The DataFrame to join.
     * @param columnNames The selected columns for the join.
     * @returns The joined DataFrame.
     * @example
     * df2.outerJoin(df2, 'id')
     * df2.join(df2, 'id', 'outer')
     */
    outerJoin(dfToJoin: DataFrame, columnNames: string | string[]): DataFrame;
    /**
     * Join two DataFrames with left mode.
     * @param dfToJoin The DataFrame to join.
     * @param columnNames The selected columns for the join.
     * @returns The joined DataFrame.
     * @example
     * df.leftJoin(df2, 'id')
     * df.join(df2, 'id', 'left')
     */
    leftJoin(dfToJoin: DataFrame, columnNames: string | string[]): DataFrame;
    /**
     * Join two DataFrames with right mode.
     * @param dfToJoin The DataFrame to join.
     * @param columnNames The selected columns for the join.
     * @returns The joined DataFrame.
     * @example
     * df.rightJoin(df2, 'id')
     * df.join(df2, 'id', 'right')
     */
    rightJoin(dfToJoin: DataFrame, columnNames: string | string[]): DataFrame;
    /**
     * Find the differences between two DataFrames (reverse of join).
     * @param dfToDiff The DataFrame to diff.
     * @param columnNames The selected columns for the diff.
     * @returns The differences DataFrame.
     * @example
     * df2.diff(df2, 'id')
     */
    diff(dfToDiff: DataFrame, columnNames: string | []): DataFrame;
    /**
     * Create a new subset DataFrame based on the first rows.
     * @param [nRows=10] The number of first rows to get.
     * @returns The subset DataFrame.
     * @example
     * df2.head()
     * df2.head(5)
     */
    head(nRows?: number): DataFrame;
    /**
     * Create a new subset DataFrame based on the last rows.
     * @param [nRows=10] The number of last rows to get.
     * @returns The subset DataFrame.
     * @example
     * df2.tail()
     * df2.tail(5)
     */
    tail(nRows?: number): DataFrame;
    /**
     * Create a new subset DataFrame based on given indexs. Similar to Array.slice.
     * @param [startIndex=0] The index to start the slice (included).
     * @param [endIndex=this.count()] The index to end the slice (excluded).
     * @returns The subset DataFrame.
     * @example
     * df2.slice()
     * df2.slice(0)
     * df2.slice(0, 20)
     * df2.slice(10, 30)
     */
    slice(startIndex?: number, endIndex?: number): DataFrame;
    /**
     * Return a Row by its index.
     * @param [index=0] The index to select the row.
     * @returns The Row.
     * @example
     * df2.getRow(1)
     */
    getRow(index?: number): Row;
    /**
     * Modify a Row a the given index.
     * @param [index=0] The index to select the row.
     * @param [func=0] The function to modify the row.
     * @returns A new DataFrame with the modified Row.
     * @example
     * df2.setRowByIndex(1, row => row.set("column1", 33))
     */
    setRow(index?: number, func?: (row: any) => any): DataFrame;
    /**
     * Modify a Row in place (by mutation) at the given index.
     * @param [index=0] The index to select the row.
     * @returns The current DataFrame with the modified row.
     * @example
     * df2.setRowByIndex(1, row => row.set("column1", 33))
     */
    setRowInPlace(index?: number, func?: (row: any) => any): DataFrame;
}
declare namespace DataFrame {
    const defaultModules: any[];
}
import Row from './row';
