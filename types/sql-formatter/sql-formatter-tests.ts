import sqlFormatter from 'sql-formatter';

sqlFormatter.format('SELECT * FROM tbl');
sqlFormatter.format('SELECT * FROM tbl', { language: 'sql' });
sqlFormatter.format('SELECT * FROM tbl', { language: 'n1ql' });
sqlFormatter.format('SELECT * FROM tbl', { language: 'db2' });
sqlFormatter.format('SELECT * FROM tbl', { language: 'pl/sql' });
sqlFormatter.format('SELECT * FROM tbl', { indent: '    ' });
sqlFormatter.format('SELECT * FROM tbl WHERE foo = @foo', { params: { foo: "'bar'" } });
sqlFormatter.format('SELECT * FROM tbl WHERE foo = ?', { params: ["'bar'"] });
