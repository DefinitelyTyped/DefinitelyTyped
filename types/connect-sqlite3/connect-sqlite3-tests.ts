import connectsqlite3 = require('connect-sqlite3');
import * as Connect from "connect";

// $ExpectType SQLiteStoreInitator
const connect = connectsqlite3(Connect);

// $ExpectType SQLiteStore
const connection = new connect();
