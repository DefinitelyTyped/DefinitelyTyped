import gsheetdb = require('gsheetdb');

const db = new gsheetdb({
    spreadsheetId: 'sheetId', // replace with spreadsheet id (from URL)
    sheetName: 'sheetName', // replace with sheet name
    credentialsJSON: {}, // replace with JSON formatted credentials
});

db.getData();

db.insertRows([
    ['tomorrow', 456, 'def'],
    ['monday', 23, 'ghi'],
]);

db.updateRow(3, ['yesterday', 456, 'def']);
