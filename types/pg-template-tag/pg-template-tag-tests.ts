import { QueryConfig } from 'pg';
import SQL, { join, SqlLiteral, sqlLiteral } from 'pg-template-tag';

// Basic parameter substitution:
const query1: QueryConfig = SQL`SELECT * FROM foo WHERE bar=${42}`;

// Use 'join' to build an IN-clause:
const values = [
    { bar: 1, baz: 2 },
    { bar: 3, baz: 4 },
];
const inClause: SqlLiteral = join(
    values.map(x => SQL`(${x.bar}, ${x.baz})`),
    ',',
);
const query2: QueryConfig = SQL`SELECT * FROM foo WHERE (bar, baz) IN ${inClause}`;

// Use 'sqlLiteral' to insert raw text that cannot be parameterized:
const tableName: SqlLiteral = Math.random() < 0.5 ? sqlLiteral('foo') : sqlLiteral('bar');
const query3: QueryConfig = SQL`SELECT * FROM ${tableName}`;
