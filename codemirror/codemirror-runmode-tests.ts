/// <reference path="codemirror.d.ts" />
/// <reference path="codemirror-runmode.d.ts" />

var query = "SELECT * FROM Table";

CodeMirror.runMode(query, "text/x-sql", document.body);
