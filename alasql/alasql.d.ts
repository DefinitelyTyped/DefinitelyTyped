// Type definitions for alasql.js v.0.1.8
// Project: https://github.com/agershun/alasql
// Definitions by: Andrey Gershun <https://github.com/agershun>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface AlaSQLCallback {
	(data?:any,err?:Error):void
}

interface AlaSQLOptions {
	errorlog: boolean;
	valueof :boolean
	dropifnotexists :boolean; // DROP database in any case
	datetimeformat :string; // How to handle DATE and DATETIME types
	casesensitive :boolean; // Table and column names are case sensitive and converted to lower-case
	logtarget :string; // target for log. Values: 'console', 'output', 'id' of html tag
	logprompt :boolean; // Print SQL at log
	modifier :any; // values: RECORDSET, VALUE, ROW, COLUMN, MATRIX, TEXTSTRING, INDEX
	columnlookup:number; // How many rows to lookup to define columns
	autovertex:boolean;// Create vertex if not found
	usedbo:boolean; // Use dbo as current database (for partial T-SQL comaptibility)
	autocommit:boolean; // AUTOCOMMIT ON | OFF
	cache:boolean; // Use cache
	nocount:boolean;// for SET NOCOUNT OFF
	nan:boolean;// Check for NaN and convert it to undefined
	angularjs :boolean;
	tsql:boolean;
	mysql:boolean;
	postgres:boolean;
	oracle:boolean;
	sqlite:boolean;
	orientdb:boolean;
}

// Compiled Statement
interface AlaSQLStatement {
	(params?:any,cb?:AlaSQLCallback,scope?:any):any;
}

// Abstract Syntax Tree
interface AlaSQLAST {
	compile(databaseid:string):AlaSQLStatement;
}

interface AlaSQL {
	(sql:any,params?:any,cb?:AlaSQLCallback,scope?:any):any;
	parse(sql):AlaSQLAST;
	options:AlaSQLOptions;
	error: Error;
}

declare var alasql : AlaSQL;

