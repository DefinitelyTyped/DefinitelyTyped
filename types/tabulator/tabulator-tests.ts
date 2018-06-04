let tab = new tabulatorLib();
tab.defaultShowAttribute = 'valor';
let datum = { a: 'aaa' };
let matrix = tab.toMatrix(datum);
tab.toHtmlTable(matrix);
