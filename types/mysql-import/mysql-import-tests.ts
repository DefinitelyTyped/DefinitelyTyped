import * as mysqlImport from 'mysql-import';

// @ts-expect-error
mysqlImport.config();

// @ts-expect-error
mysqlImport.config({});

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
