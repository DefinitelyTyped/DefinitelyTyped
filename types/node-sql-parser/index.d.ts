// Type definitions for node-sql-parser 1.0
// Project: https://github.com/taozhi8833998/node-sql-parser#readme
// Definitions by: taozhi8833998 <https://github.com/taozhi8833998>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export interface With {
  name: string;
  stmt: any[];
  columns?: any[];
}
export type WhilteListCheckMode = 'table' | 'column';
export interface TableColumnAst {
  tableList: string[];
  columnsList: string[];
  ast: AST[] | AST;
}
export interface From {
  db: string | null;
  table: string;
  as: string | null;
}
export interface Dual {
  type: 'dual';
}
export interface Limit {
  type: string;
  value: number;
}
export interface OrderBy {
  type: 'ASC' | 'DESC';
  expr: any;
}
export interface ColumnRef {
  type: 'column_ref';
  table: string | null;
  column: string;
}
export interface SetList {
  column: string;
  value: any;
  table: string | null;
}
export interface InsertReplaceValue {
  type: 'expr_list';
  value: any[];
}
export interface Select {
  with: With | null;
  type: 'select';
  options: any[] | null;
  distinct: 'DISTINCT' | null;
  columns: any[] | '*';
  from: Array<From | Dual> | null;
  where: any;
  groupby: ColumnRef[] | null;
  having: any[] | null;
  orderby: OrderBy[] | null;
  limit: Limit[] | null;
}
export interface Insert_Replace {
  type: 'replace' | 'insert';
  db: string | null;
  table: string;
  columns: string[] | null;
  values: InsertReplaceValue[];
}
export interface Update {
  type: 'udpate';
  db: string | null;
  table: string;
  set: SetList[];
  where: any;
}
export interface Delete {
  type: 'delete';
  tables: any;
  from: Array<From | Dual>;
  where: any;
}
export type AST = Select | Insert_Replace | Update | Delete;

export class Parser {
  constructor();

  parse(sql: string): TableColumnAst;

  astify(sql: string): AST[] | AST;

  sqlify(ast: AST[] | AST): string;

  whiteListCheck(sql: string, whiteList: string[], type?: WhilteListCheckMode): Error | undefined;

  tableList(sql: string): string[];

  columnList(sql: string): string[];
}
