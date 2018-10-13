// Type definitions for sql-bricks 2.0
// Project: http://csnw.github.io/sql-bricks
// Definitions by: Narcisse Assogba <https://github.com/adn05>
//                 Paleo <https://github.com/paleo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace SqlBricks {
  /**
   * Statement is an abstract base class for all statements (SELECT, INSERT, UPDATE, DELETE)
   * and should never be instantiated directly. It is exposed because it can be used with the
   * instanceof operator to easily determine whether something is a SQL Bricks statement: my_var instanceof Statement.
   */
  interface Statement {
    /**
     * Clones a statement so that subsequent modifications do not affect the original statement.
     */
    clone(): this

    /**
     * Returns the non-parameterized SQL for the statement. This is called implicitly by Javascript when using a Statement anywhere that a string is expected (string concatenation, Array.join(), etc).
     * While toString() is easy to use, it is not recommended in most cases because:
     *    It doesn't provide robust protection against SQL injection attacks (it just does basic escaping)
     *    It doesn't provide as much support for complex data types (objects, arrays, etc, are "stringified" before being passed to your database driver, which then has to interpret them correctly)
     *    It does not provide the same level of detail in error messages (see this issue)
     * For the above reasons, it is usually better to use toParams().
     */
    toString(): string

    /**
     * Returns an object with two properties: a parameterized text string and a values array. The values are populated with anything on the right-hand side
     * of a WHERE criteria,as well as any values passed into an insert() or update() (they can be passed explicitly with val() or opted out of with sql())
     * @param options A placeholder option of '?%d' can be passed to generate placeholders compatible with node-sqlite3 (%d is replaced with the parameter #):
     * @example
     * update('person', {'first_name': 'Fred'}).where({'last_name': 'Flintstone'}).toParams({placeholder: '?%d'});
     *    // {"text": "UPDATE person SET first_name = ?1 WHERE last_name = ?2", "values": ["Fred", "Flintstone"]}
     */
    toParams(options?: { placeholder: string }): SqlBricksParam
  }

  interface SqlBricksParam {
    text: string
    values: any[]
  }

  type TableName = string | SelectStatement

  interface OnCriteria {
    [column: string]: string
  }

  interface WhereObject {
    [column: string]: any
  }

  interface WhereGroup {
    op?: string
    expressions: WhereExpression[]
  }

  interface WhereBinary {
    op: string
    col: string | SelectStatement
    val: any
    quantifier: string
  }

  /**
   * When a non-expression object is passed somewhere a whereExpression is expected,
   * each key/value pair will be ANDed together:
   */
  type WhereExpression = WhereGroup | WhereBinary | WhereObject | string

  /**
   * A SELECT statement
   */
  interface SelectStatement extends Statement {
    /**
     * Appends additional columns to an existing query.
     * @param columns can be passed as multiple arguments, a comma-delimited string or an array.
     */
    select(...columns: Array<string | SelectStatement>): SelectStatement
    /**
     * Appends additional columns to an existing query.
     * @param columns can be passed as multiple arguments, a comma-delimited string or an array.
     */
    select(columns: string[] | SelectStatement[]): SelectStatement

    as(alias: string): SelectStatement

    distinct(...columns: Array<string | SelectStatement>): SelectStatement
    distinct(columns: string[] | SelectStatement[]): SelectStatement

    /**
     * Makes the query a SELECT ... INTO query (which creates a new table with the results of the query).
     * @alias intoTable
     * @param tbl new table to create
     */
    into(tbl: TableName): SelectStatement
    /**
     * Makes the query a SELECT ... INTO query (which creates a new table with the results of the query).
     * @alias into
     * @param tbl new table to create
     */
    intoTable(tbl: TableName): SelectStatement

    intoTemp(tbl: TableName): SelectStatement
    intoTempTable(tbl: TableName): SelectStatement

    /**
     * Table names can be passed in as multiple string arguments, a comma-delimited string or an array.
     * @param tbls table names
     */
    from(...tbls: TableName[]): SelectStatement
    /**
     * Table names can be passed in as multiple string arguments, a comma-delimited string or an array.
     * @param tbls array of table names
     */
    from(tbls: TableName[]): SelectStatement

    /**
     * Adds the specified join to the query.
     * @alias innerJoin
     * @param tbl can include an alias after a space or after the 'AS' keyword ('my_table my_alias').
     * @param onCriteria is optional if a joinCriteria function has been supplied.
     */
    join(tbl: string, criteria?: OnCriteria | string[] | WhereExpression): SelectStatement
    join(tbl: string, onCol1: string, onCol2: string): SelectStatement
    join(firstTbl: string, ...otherTbls: string[]): SelectStatement

    leftJoin(tbl: string, criteria?: OnCriteria | string[] | WhereExpression): SelectStatement
    leftJoin(tbl: string, onCol1: string, onCol2: string): SelectStatement
    leftJoin(firstTbl: string, ...otherTbls: string[]): SelectStatement
    rightJoin(tbl: string, criteria?: OnCriteria | string[] | WhereExpression): SelectStatement
    rightJoin(tbl: string, onCol1: string, onCol2: string): SelectStatement
    rightJoin(firstTbl: string, ...otherTbls: string[]): SelectStatement
    fullJoin(tbl: string, criteria?: OnCriteria | string[] | WhereExpression): SelectStatement
    fullJoin(tbl: string, onCol1: string, onCol2: string): SelectStatement
    fullJoin(firstTbl: string, ...otherTbls: string[]): SelectStatement
    crossJoin(tbl: string, criteria?: OnCriteria | string[] | WhereExpression): SelectStatement
    crossJoin(tbl: string, onCol1: string, onCol2: string): SelectStatement
    crossJoin(firstTbl: string, ...otherTbls: string[]): SelectStatement
    innerJoin(tbl: string, criteria?: OnCriteria | string[] | WhereExpression): SelectStatement
    innerJoin(tbl: string, onCol1: string, onCol2: string): SelectStatement
    innerJoin(firstTbl: string, ...otherTbls: string[]): SelectStatement
    leftOuterJoin(tbl: string, criteria?: OnCriteria | string[] | WhereExpression): SelectStatement
    leftOuterJoin(tbl: string, onCol1: string, onCol2: string): SelectStatement
    leftOuterJoin(firstTbl: string, ...otherTbls: string[]): SelectStatement
    rightOuterJoin(tbl: string, criteria?: OnCriteria | string[] | WhereExpression): SelectStatement
    rightOuterJoin(tbl: string, onCol1: string, onCol2: string): SelectStatement
    rightOuterJoin(firstTbl: string, ...otherTbls: string[]): SelectStatement
    fullOuterJoin(tbl: string, criteria?: OnCriteria | string[] | WhereExpression): SelectStatement
    fullOuterJoin(tbl: string, onCol1: string, onCol2: string): SelectStatement
    fullOuterJoin(firstTbl: string, ...otherTbls: string[]): SelectStatement

    on(onCriteria: OnCriteria | WhereExpression): SelectStatement
    on(onCol1: string, onCol2: string): SelectStatement

    /**
     * Joins using USING instead of ON.
     * @param columnList columnList can be passed in as one or more string arguments, a comma-delimited string, or an array.
     * @example
     * select('*').from('person').join('address').using('address_id', 'country_id');
     * // SELECT * FROM person INNER JOIN address USING (address_id, country_id)
     */
    using(...columnList: string[]): SelectStatement
    using(columnList: string[]): SelectStatement

    /**
     * Adds the specified natural join to the query.
     * @param tbl can include an alias after a space or after the 'AS' keyword ('my_table my_alias').
     */
    naturalJoin(tbl: string): SelectStatement
    naturalLeftJoin(tbl: string): SelectStatement
    naturalRightJoin(tbl: string): SelectStatement
    naturalFullJoin(tbl: string): SelectStatement

    naturalInnerJoin(tbl: string): SelectStatement
    naturalLeftOuterJoin(tbl: string): SelectStatement
    naturalRightOuterJoin(tbl: string): SelectStatement
    naturalFullOuterJoin(tbl: string): SelectStatement

    where(column?: string | null, value?: any): SelectStatement
    where(...whereExpr: WhereExpression[]): SelectStatement

    and(...options: any[]): SelectStatement

    /**
     * Sets or extends the GROUP BY columns.
     * @param columns can take multiple arguments, a single comma-delimited string or an array.
     */
    groupBy(...columns: string[]): SelectStatement
    groupBy(columns: string[]): SelectStatement

    having(column: string, value: string): SelectStatement
    having(whereExpr: WhereExpression): SelectStatement

    /**
     * Sets or extends the list of columns in the ORDER BY clause.
     * @param columns can be passed as multiple arguments, a single comma-delimited string or an array.
     */
    orderBy(...columns: string[]): SelectStatement
    orderBy(columns: string[]): SelectStatement
    order(...columns: string[]): SelectStatement
    order(columns: string[]): SelectStatement

    forUpdate(...tbls: string[]): SelectStatement
    of(tlb: string): SelectStatement
    noWait(): SelectStatement

    union(...stmt: Statement[]): SelectStatement
    intersect(...stmt: Statement[]): SelectStatement
    minus(...stmt: Statement[]): SelectStatement
    except(...stmt: Statement[]): SelectStatement
  }

  /**
   * An INSERT statement
   */
  interface InsertStatement extends Statement {
    into(tbl: TableName, ...columns: any[]): InsertStatement
    intoTable(tbl: TableName, ...columns: any[]): InsertStatement
    select(...columns: Array<string | SelectStatement>): SelectStatement
    select(columns: string[] | SelectStatement[]): SelectStatement
    values(...values: any[]): InsertStatement
  }

  /**
   * An UPDATE statement
   */
  interface UpdateStatement extends Statement {
    values(...values: any[]): UpdateStatement
    set(...values: any[]): UpdateStatement
    where(column?: string | null, value?: any): UpdateStatement
    where(...whereExpr: WhereExpression[]): UpdateStatement
    and(column?: string | null, value?: any): UpdateStatement
    and(...whereExpr: WhereExpression[]): UpdateStatement
  }

  /**
   * A DELETE statement
   */
  interface DeleteStatement extends Statement {
    from(...tbls: string[]): DeleteStatement
    using(...columnList: string[]): SelectStatement
    using(columnList: string[]): SelectStatement
    where(column?: string | null, value?: any): SelectStatement
    where(...whereExpr: WhereExpression[]): SelectStatement
    and(column?: string | null, value?: any): SelectStatement
    and(...whereExpr: WhereExpression[]): SelectStatement
  }
}

interface SqlBricksFn {
  (...params: any[]): any
  /**
   * Wraps a value (user-supplied string, number, boolean, etc) so that it can be passed into SQL Bricks
   * anywhere that a column is expected (the left-hand side of WHERE criteria and many other SQL Bricks APIs)
   * @param value value to be wraped
   */
  val(value: any): any

  /**
   * Returns a new INSERT statement. It can be used with or without the new operator.
   * @alias insertInto
   * @param tbl table name
   * @param values a values object or a columns list. Passing a set of columns (as multiple arguments, a comma-delimited string or an array)
   * will put the statement into split keys/values mode, where a matching array of values is expected in values()
   * @example
   * insert('person', {'first_name': 'Fred', 'last_name': 'Flintstone'});
   * // INSERT INTO person (first_name, last_name) VALUES ('Fred', 'Flintstone')
   */
  insert(tbl?: string, ...values: any[]): SqlBricks.InsertStatement

  /**
   * Returns a new INSERT statement. It can be used with or without the new operator.
   * @alias insert
   * @param tbl table name
   * @param values a values object or a columns list. Passing a set of columns (as multiple arguments, a comma-delimited string or an array)
   * will put the statement into split keys/values mode, where a matching array of values is expected in values()
   * @example
   * insert('person', {'first_name': 'Fred', 'last_name': 'Flintstone'});
   * // INSERT INTO person (first_name, last_name) VALUES ('Fred', 'Flintstone')
   */
  insertInto(tbl?: string, ...values: any[]): SqlBricks.InsertStatement

  /**
   * Returns a new select statement, seeded with a set of columns. It can be used with or without the new keyword.
   * @param columns it can be passed in here (or appended later via sel.select() or sel.distinct()) via multiple arguments
   * or a comma-delimited string or an array. If no columns are specified, toString() will default to SELECT *.
   */
  select(...columns: Array<string | SqlBricks.SelectStatement>): SqlBricks.SelectStatement
  select(columns: string[] | SqlBricks.SelectStatement[]): SqlBricks.SelectStatement

  /**
   * Returns a new UPDATE statement. It can be used with or without the new operator.
   * @param tbl table name
   * @param values
   */
  update(tbl: string, ...values: any[]): SqlBricks.UpdateStatement

  /**
   * Returns a new DELETE statement. It can be used with or without the new operator.
   * @alias deleteFrom
   * @param tbl table name
   */
  delete(tbl?: string): SqlBricks.DeleteStatement
  /**
   * Returns a new DELETE statement. It can be used with or without the new operator.
   * @alias delete
   * @param tbl table name
   */
  deleteFrom(tbl?: string): SqlBricks.DeleteStatement

  /**
   * Registers a set of frequently-used table aliases with SQL Bricks.
   * These table aliases can then be used by themselves in from(), join(), etc
   * and SQL Bricks will automatically expand them to include the table name as well as the alias.
   * @param expansions
   * @example
   * sql.aliasExpansions({'psn': 'person', 'addr': 'address', 'zip': 'zipcode', 'usr': 'user'});
   * select().from('psn').join('addr', {'psn.addr_id': 'addr.id'});
   * // SELECT * FROM person psn INNER JOIN address addr ON psn.addr_id = addr.id
   */
  aliasExpansions(expansions: { [tbl: string]: string }): void

  /**
   * Sets a user-supplied function to automatically generate the .on() criteria for joins whenever it is not supplied explicitly.
   * @param func
   */
  joinCriteria(func?: (...args: any[]) => SqlBricks.OnCriteria): any

  _extension(): any
  prop: number
  conversions: any

  //////////////////////////////////////////
  //////  Where Expression functions  //////
  //////////////////////////////////////////

  /**
   * Joins the passed expressions with AND
   * @param whereExprs
   */
  and(...whereExprs: SqlBricks.WhereExpression[]): SqlBricks.WhereGroup

  /**
   * Joins the passed expressions with OR:
   * @param whereExprs
   */
  or(...whereExprs: SqlBricks.WhereExpression[]): SqlBricks.WhereGroup

  /**
   * Negates the expression by wrapping it in NOT (...)
   * (if it is at the top level, the parentheses are unnecessary and will be omitted)
   * @param whereExpr
   */
  not(whereExpr: SqlBricks.WhereExpression): SqlBricks.WhereGroup

  /**
   * Generates a BETWEEN
   * @param column
   * @param value1
   * @param value2
   */
  between(column: string, value1: any, value2: any): SqlBricks.WhereExpression
  isNull(column: string): SqlBricks.WhereExpression
  isNotNull(column: string): SqlBricks.WhereExpression
  like(column: string, value: any, escapeStr?: string): SqlBricks.WhereExpression
  exists(stmt: any): SqlBricks.WhereExpression
  in(column: string, stmt: SqlBricks.SelectStatement): SqlBricks.WhereExpression
  in(column: string, ...values: any[]): SqlBricks.WhereExpression

  /**
   * Generates the appropriate relational operator (=, <>, <, <=, > or >=).
   * @param column column name or query result
   * @param value column value
   */
  eq(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  equal(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  notEq(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  lt(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  lte(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  gt(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  gte(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary

  eqAll(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  notEqAll(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  ltAll(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  lteAll(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  gtAll(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  gteAll(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary

  eqAny(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  notEqAny(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  ltAny(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  lteAny(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  gtAny(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  gteAny(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary

  eqSome(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  notEqSome(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  ltSome(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  lteSome(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  gtSome(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
  gteSome(column: string | SqlBricks.SelectStatement, value?: any): SqlBricks.WhereBinary
}

declare const SqlBricks: SqlBricksFn
export = SqlBricks
