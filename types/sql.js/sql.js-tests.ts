import fs = require("fs");
import * as SQL from "sql.js";

var DB_PATH = "data.db";

function createFile(path: string): void {
	var fd = fs.openSync(path, "a");
	fs.closeSync(fd);
}

// Open the database file. If it does not exist, create a blank database in memory.
var databaseData: Buffer;
databaseData = fs.existsSync(DB_PATH) ? fs.readFileSync(DB_PATH) : null;
var db = new SQL.Database(databaseData);

// Create a new table 'test_table' in the database in memory.
var createTableStatement =
	"DROP TABLE IF EXISTS test_table;" +
	"CREATE TABLE test_table (id INTEGER PRIMARY KEY, content TEXT);";
db.run(createTableStatement);

// Insert 2 records for testing.
var insertRecordStatement =
	"INSERT INTO test_table (id, content) VALUES (@id, @content);";
db.run(insertRecordStatement, {
	"@id": 1,
	"@content": "Content 1"
});
db.run(insertRecordStatement, {
	"@id": 2,
	"@content": "Content 2"
});

var n = db.getRowsModified();

try {
	// This query will throw exception: primary key constraint failed.
	db.run(insertRecordStatement, {
		"@id": 1,
		"@content": "Content 3"
	});
} catch (ex) {
	console.warn(ex);
}

// A simple SELECT query.
var selectRecordStatement =
	"SELECT * FROM test_table WHERE id = @id;"
var selectStatementObject = db.prepare(selectRecordStatement);
var results = selectStatementObject.get({
	"@id": 1
});
console.log(results);
selectStatementObject.free();

// Access the results one by one, asynchronously.
var selectRecordsStatement =
	"SELECT * FROM test_table;";
db.each(
	selectRecordsStatement,
	(obj: { [columnName: string]: number | string | Uint8Array }): void => {
		console.log(obj);
	},
	(): void => {
		console.info("Iteration done.");
		dbAccessDone();
	});


function dbAccessDone(): void {
	// Save the database into SQLite version 3 format.
	if (!fs.existsSync(DB_PATH)) {
		createFile(DB_PATH);
	}
	var exportedData = db.export();
	fs.writeFileSync(DB_PATH, exportedData);

	// Finally, close the database connection and release the resources in memory.
	db.close();
}

// Create a database
var db2 = new SQL.Database();

// You can also use javascript functions inside your SQL code
// Create the js function you need
function add(a: number, b: number): number {return a+b;}
// Specifies the SQL function's name, the number of it's arguments, and the js function to use
db2.create_function("add_js", add);
// Run a query in which the function is used
db2.run("INSERT INTO hello VALUES (add_js(7, 3), add_js('Hello ', 'world'));"); // Inserts 10 and 'Hello world'
