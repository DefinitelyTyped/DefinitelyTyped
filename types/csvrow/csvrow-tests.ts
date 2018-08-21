import csvrow = require("csvrow");

let row = "a,b,c";
let columns: string[];

columns = csvrow.parse(row);

row = csvrow.stringify(columns);

row = csvrow.normalize(row);
