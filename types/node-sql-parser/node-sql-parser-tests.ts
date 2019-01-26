import { Parser } from 'node-sql-parser';

const parser: Parser = new Parser();
const sql = 'select id from tableA';
const selectAst = parser.astify(sql);
parser.sqlify(selectAst);
parser.tableList(sql);
parser.columnList(sql);
parser.whiteListCheck(sql, ['select::null::tableA'], 'table');
