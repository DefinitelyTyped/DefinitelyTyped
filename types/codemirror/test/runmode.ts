import CodeMirror = require("codemirror");

const query = 'SELECT * FROM Table';
CodeMirror.runMode(query, "text/x-sql", document.body);
