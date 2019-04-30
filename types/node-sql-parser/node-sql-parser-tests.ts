import { Parser } from 'node-sql-parser';

const parser = new Parser();
const sql = 'select id from tableA';

// $ExpectType Select | Insert_Replace | Update | Delete | AST[]
const selectAst = parser.astify(sql);

// $ExpectType string
parser.sqlify(selectAst);

// $ExpectType string[]
parser.tableList(sql);

// $ExpectType string[]
parser.columnList(sql);

// $ExpectType Error | undefined
parser.whiteListCheck(sql, ['select::null::tableA'], 'table');
