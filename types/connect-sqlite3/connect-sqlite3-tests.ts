import connectsqlite3 = require('connect-sqlite3');

// $ExpectType SQLiteStoreInitator
const connect = connectsqlite3();

// $ExpectType SQLiteStore
const connection = new connect();
