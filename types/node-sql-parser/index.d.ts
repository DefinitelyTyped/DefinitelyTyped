// Type definitions for node-sql-parser 1.0
// Project: https://github.com/taozhi8833998/node-sql-parser#readme
// Definitions by: taozhi8833998 <https://github.com/taozhi8833998>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'node-sql-parser' {
  enum TYPE {
    SELECT = 'select',
    UPDATE = 'update',
    INSERT = 'insert',
    DELETE = 'delete',
    REPLACE = 'replace'
  }
  interface With {
    name: string,
    stmt: any[],
    columns?: any[]
  }
  type WhilteListCheckMode = 'table' | 'column'
  interface TableColumnAst {
    tableList: string[],
    columnsList: string[],
    ast: AST[] | AST
  }
  interface From {
    db: string | null,
    table: string
    as: string | null
  }
  interface Dual {
    type: 'dual'
  }
  interface Limit {
    type: string,
    value: number
  }
  interface OrderBy {
    type: 'ASC' | 'DESC',
    expr: any
  }
  interface ColumnRef {
    type: 'column_ref',
    table: string | null,
    column: string
  }
  interface Set {
    column: string,
    value: any,
    table: string | null
  }
  interface Select {
  	with: With | null,
    type: TYPE.SELECT,
    options: any[] | null,
    distinct: 'DISTINCT' | null,
    columns: any[] | '*',
    from: (From | Dual)[] | null,
    where: any,
    groupby: ColumnRef[] | null,
    having: any[] | null,
    orderby: OrderBy[] | null,
    limit: Limit[] | null
  }
  interface Insert_Replace {
    type: TYPE.INSERT | TYPE.REPLACE,
    db: string | null,
    table: string,
    columns: string[] | null,
    values: { type: 'expr_list', value: any[] }[]
  }
  interface Update {
    type: TYPE.UPDATE,
    db: string | null,
    table: string,
    set: Set[],
    where: any
  }
  interface Delete {
    type: TYPE.DELETE,
    tables: any,
    from: (From | Dual)[],
    where: any
  }
  export type AST = Select | Insert_Replace | Update | Delete
  export class Parser {
    constructor();
    parse(sql: string): TableColumnAst;
    astify(sql: string): AST[] | AST;
    sqlify(ast: AST[] | AST): string;
    whiteListCheck(sql: string, whiteList: string[], type?: WhilteListCheckMode): Error | undefined;
    tableList(sql: string): string[];
    columnList(sql: string): string[];
  }
}