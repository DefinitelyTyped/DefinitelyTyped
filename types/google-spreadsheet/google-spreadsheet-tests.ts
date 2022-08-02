/// <reference types="node" />

import { GoogleSpreadsheet } from 'google-spreadsheet';

const [GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY] = ['email', 'key'];

(async () => {
    // spreadsheet key is the long id in the sheets URL
    const doc = new GoogleSpreadsheet('<the sheet ID from the url>');

    // use service account creds
    await doc.useServiceAccountAuth(
        {
            client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: GOOGLE_PRIVATE_KEY,
        },
        'user@example.com',
    );
    // OR use API key -- only for read-only access to public sheets
    doc.useApiKey('YOUR-API-KEY');

    doc.useOAuth2Client({
        getAccessToken: async () => ({ token: 'test_token' }),
    });

    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);
    await doc.updateProperties({ title: 'renamed doc' });

    let sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    console.log(sheet.title);
    console.log(sheet.rowCount);

    // adding / removing sheets
    const title = 'hot new sheet!';
    await doc.addSheet({ title });
    const newSheet = doc.sheetsByTitle[title];
    await newSheet.delete();

    // create a sheet and set the header row
    sheet = await doc.addSheet({ headerValues: ['name', 'email'] });

    // append rows
    const larryRow = await sheet.addRow({ name: 'Larry Page', email: 'larry@google.com' });
    const moreRows = await sheet.addRows([
        { name: 'Sergey Brin', email: 'sergey@google.com' },
        { name: 'Eric Schmidt', email: 'eric@google.com' },
    ]);

    // read rows
    const rows = await sheet.getRows(); // can pass in { limit, offset }

    // read/write row values
    console.log(rows[0].name); // 'Larry Page'
    rows[1].email = 'sergey@abc.xyz'; // update a value
    await rows[1].save(); // save updates
    await rows[1].delete(); // delete a rowa

    await sheet.loadCells(); // load all cells

    await sheet.loadCells('A1:E10'); // loads a range of cells
    console.log(sheet.cellStats); // total cells, loaded, how many non-empty
    const a1 = sheet.getCell(0, 0); // access cells using a zero-based index
    const c6 = sheet.getCellByA1('C6'); // or A1 style notation
    // access everything about the cell
    console.log(a1.value);
    console.log(a1.formula);
    console.log(a1.formattedValue);
    // update the cell contents and formatting
    a1.value = 123.456;
    c6.formula = '=A1';
    a1.textFormat = { bold: true };
    c6.note = 'This is a note!';
    await sheet.saveUpdatedCells(); // save all updates in one call

    // adds a column
    await sheet.insertDimension('COLUMNS', { startIndex: 1, endIndex: 2 });
    // adds a row and inherits properties from previous row
    await sheet.insertDimension('ROWS', { startIndex: 2, endIndex: 3 }, true);

    // header row methods with headerRowIndex
    await sheet.setHeaderRow(['foo', 'bar'], 3);
    await sheet.loadHeaderRow(3);
    await sheet.delete();

    // test clear() and clearRows()
    sheet = await doc.addSheet({ headerValues: ['date', 'co2'] });
    await sheet.addRows([
        { date: '1980-01-01', co2: 337.85 },
        { date: '1990-01-01', co2: 353.65 },
        { date: '2000-01-01', co2: 368.99 },
        { date: '2010-01-01', co2: 390.74 },
        { date: '2020-01-01', co2: 412.86 },
    ]);
    await sheet.clearRows({
        start: 6,
        end: 6,
    });
    await sheet.clear('B4:B5');
    await sheet.clearRows();
    await sheet.delete();

    // create empty document
    const emptyDoc = new GoogleSpreadsheet();
    await emptyDoc.createNewSpreadsheetDocument({ title: 'This is a new Spread Sheet' });

    // duplicate document
    await emptyDoc.duplicate({ title: 'Duplicate Document' });
})();
