import csvrow = require("csvrow");

let row = "a,b,c";
let columns: string[];

columns = csvrow.parse(row);

row = csvrow.stringify(columns);

row = csvrow.normalize(row);

let rowSemicolonDelimited = "a;b;c";
let columnsFromSemicolon: string[];

columnsFromSemicolon = csvrow.parse(rowSemicolonDelimited, ";");

rowSemicolonDelimited = csvrow.stringify(columnsFromSemicolon, ";");

// csvrow.normalize doesn't seem to have support for different delimiters yet
