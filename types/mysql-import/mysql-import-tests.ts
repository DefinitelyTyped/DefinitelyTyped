import * as mysqlImport from 'mysql-import';

mysqlImport.config(); // $ExpectError

mysqlImport.config({}); // $ExpectError

// $ExpectType Importer
const importer = mysqlImport.config({
    host: 'localhost',
    port: 1234,
    user: 'user',
    password: 'test',
    database: 'database',
    onerror: err => {},
});

importer.import('sql-file-path'); // $ExpectType Promise<void>
