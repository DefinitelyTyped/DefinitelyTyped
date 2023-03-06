import connectsqlite3 = require('connect-sqlite3');
import connect = require("express-session");

// $ExpectType SQLiteStoreInitator
const sqlite = connectsqlite3(connect);

// $ExpectType SQLiteStore
const connection = new sqlite();
