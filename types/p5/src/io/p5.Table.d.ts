// This file was auto-generated. Please do not edit it.

import * as p5 from "../../index";

declare module "../../index" {
  class Table {
    /**
     *   Table objects store data with multiple rows and
     *   columns, much like in a traditional spreadsheet.
     *   Tables can be generated from scratch, dynamically,
     *   or using data from an existing file.
     *
     *   @param [rows] An array of p5.TableRow objects
     */
    constructor(
      rows?: TableRow[]
    );

    /**
     *   Use addRow() to add a new row of data to a
     *   p5.Table object. By default, an empty row is
     *   created. Typically, you would store a reference to
     *   the new row in a TableRow object (see newRow in
     *   the example above), and then set individual values
     *   using set(). If a p5.TableRow object is included
     *   as a parameter, then that row is duplicated and
     *   added to the table.
     *   @param [row] row to be added to the table
     *   @return the row that was added
     */
    addRow(
      row?: TableRow
    ): TableRow;

    /**
     *   Removes a row from the table object.
     *   @param id ID number of the row to remove
     */
    removeRow(
      id: number
    ): void;

    /**
     *   Returns a reference to the specified p5.TableRow.
     *   The reference can then be used to get and set
     *   values of the selected row.
     *   @param rowID ID number of the row to get
     *   @return p5.TableRow object
     */
    getRow(
      rowID: number
    ): TableRow;

    /**
     *   Gets all rows from the table. Returns an array of
     *   p5.TableRows.
     *   @return Array of p5.TableRows
     */
    getRows(): TableRow[];

    /**
     *   Finds the first row in the Table that contains the
     *   value provided, and returns a reference to that
     *   row. Even if multiple rows are possible matches,
     *   only the first matching row is returned. The
     *   column to search may be specified by either its ID
     *   or title.
     *   @param value The value to match
     *   @param column ID number or title of the column to
     *   search
     */
    findRow(
      value: string,
      column:
        | number
        | string
    ): TableRow;

    /**
     *   Finds the rows in the Table that contain the value
     *   provided, and returns references to those rows.
     *   Returns an Array, so for must be used to iterate
     *   through all the rows, as shown in the example
     *   above. The column to search may be specified by
     *   either its ID or title.
     *   @param value The value to match
     *   @param column ID number or title of the column to
     *   search
     *   @return An Array of TableRow objects
     */
    findRows(
      value: string,
      column:
        | number
        | string
    ): TableRow[];

    /**
     *   Finds the first row in the Table that matches the
     *   regular expression provided, and returns a
     *   reference to that row. Even if multiple rows are
     *   possible matches, only the first matching row is
     *   returned. The column to search may be specified by
     *   either its ID or title.
     *   @param regexp The regular expression to match
     *   @param column The column ID (number) or title
     *   (string)
     *   @return TableRow object
     */
    matchRow(
      regexp:
        | string
        | RegExp,
      column:
        | string
        | number
    ): TableRow;

    /**
     *   Finds the rows in the Table that match the regular
     *   expression provided, and returns references to
     *   those rows. Returns an array, so for must be used
     *   to iterate through all the rows, as shown in the
     *   example. The column to search may be specified by
     *   either its ID or title.
     *   @param regexp The regular expression to match
     *   @param [column] The column ID (number) or title
     *   (string)
     *   @return An Array of TableRow objects
     */
    matchRows(
      regexp: string,
      column?:
        | string
        | number
    ): TableRow[];

    /**
     *   Retrieves all values in the specified column, and
     *   returns them as an array. The column may be
     *   specified by either its ID or title.
     *   @param column String or Number of the column to
     *   return
     *   @return Array of column values
     */
    getColumn(
      column:
        | string
        | number
    ): any[];

    /**
     *   Removes all rows from a Table. While all rows are
     *   removed, columns and column titles are maintained.
     */
    clearRows(): void;

    /**
     *   Use addColumn() to add a new column to a Table
     *   object. Typically, you will want to specify a
     *   title, so the column may be easily referenced
     *   later by name. (If no title is specified, the new
     *   column's title will be null.)
     *   @param [title] title of the given column
     */
    addColumn(
      title?: string
    ): void;

    /**
     *   Returns the total number of columns in a Table.
     *   @return Number of columns in this table
     */
    getColumnCount(): number;

    /**
     *   Returns the total number of rows in a Table.
     *   @return Number of rows in this table
     */
    getRowCount(): number;

    /**
     *   Removes any of the specified characters (or
     *   "tokens"). If no column is specified, then the
     *   values in all columns and rows are processed. A
     *   specific column may be referenced by either its ID
     *   or title.
     *   @param chars String listing characters to be
     *   removed
     *   @param [column] Column ID (number) or name
     *   (string)
     */
    removeTokens(
      chars: string,
      column?:
        | string
        | number
    ): void;

    /**
     *   Trims leading and trailing whitespace, such as
     *   spaces and tabs, from String table values. If no
     *   column is specified, then the values in all
     *   columns and rows are trimmed. A specific column
     *   may be referenced by either its ID or title.
     *   @param [column] Column ID (number) or name
     *   (string)
     */
    trim(
      column?:
        | string
        | number
    ): void;

    /**
     *   Use removeColumn() to remove an existing column
     *   from a Table object. The column to be removed may
     *   be identified by either its title (a String) or
     *   its index value (an int). removeColumn(0) would
     *   remove the first column, removeColumn(1) would
     *   remove the second column, and so on.
     *   @param column columnName (string) or ID (number)
     */
    removeColumn(
      column:
        | string
        | number
    ): void;

    /**
     *   Stores a value in the Table's specified row and
     *   column. The row is specified by its ID, while the
     *   column may be specified by either its ID or title.
     *   @param row row ID
     *   @param column column ID (Number) or title (String)
     *   @param value value to assign
     */
    set(
      row: number,
      column:
        | string
        | number,
      value:
        | string
        | number
    ): void;

    /**
     *   Stores a Float value in the Table's specified row
     *   and column. The row is specified by its ID, while
     *   the column may be specified by either its ID or
     *   title.
     *   @param row row ID
     *   @param column column ID (Number) or title (String)
     *   @param value value to assign
     */
    setNum(
      row: number,
      column:
        | string
        | number,
      value: number
    ): void;

    /**
     *   Stores a String value in the Table's specified row
     *   and column. The row is specified by its ID, while
     *   the column may be specified by either its ID or
     *   title.
     *   @param row row ID
     *   @param column column ID (Number) or title (String)
     *   @param value value to assign
     */
    setString(
      row: number,
      column:
        | string
        | number,
      value: string
    ): void;

    /**
     *   Retrieves a value from the Table's specified row
     *   and column. The row is specified by its ID, while
     *   the column may be specified by either its ID or
     *   title.
     *   @param row row ID
     *   @param column columnName (string) or ID (number)
     */
    get(
      row: number,
      column:
        | string
        | number
    ):
      | string
      | number;

    /**
     *   Retrieves a Float value from the Table's specified
     *   row and column. The row is specified by its ID,
     *   while the column may be specified by either its ID
     *   or title.
     *   @param row row ID
     *   @param column columnName (string) or ID (number)
     */
    getNum(
      row: number,
      column:
        | string
        | number
    ): number;

    /**
     *   Retrieves a String value from the Table's
     *   specified row and column. The row is specified by
     *   its ID, while the column may be specified by
     *   either its ID or title.
     *   @param row row ID
     *   @param column columnName (string) or ID (number)
     */
    getString(
      row: number,
      column:
        | string
        | number
    ): string;

    /**
     *   Retrieves all table data and returns as an object.
     *   If a column name is passed in, each row object
     *   will be stored with that attribute as its title.
     *   @param [headerColumn] Name of the column which
     *   should be used to title each row object (optional)
     */
    getObject(
      headerColumn?: string
    ): object;

    /**
     *   Retrieves all table data and returns it as a
     *   multidimensional array.
     */
    getArray(): any[];
    columns: string[];
    rows: TableRow[];
  }
}
