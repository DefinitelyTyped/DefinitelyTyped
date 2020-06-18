import { GoogleSpreadsheet } from 'google-spreadsheet';

(async () => {
     // spreadsheet key is the long id in the sheets URL
     const doc = new GoogleSpreadsheet('<the sheet ID from the url>');

     // use service account creds
     await doc.useServiceAccountAuth({
         client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
         private_key: process.env.GOOGLE_PRIVATE_KEY,
     });
     // OR load directly from json file if not in secure environment
     await doc.useServiceAccountAuth(require('./creds-from-google.json'));
     // OR use API key -- only for read-only access to public sheets
     doc.useApiKey('YOUR-API-KEY');

     await doc.loadInfo(); // loads document properties and worksheets
     console.log(doc.title);
     await doc.updateProperties({ title: 'renamed doc' });

     const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
     console.log(sheet.title);
     console.log(sheet.rowCount);

     // adding / removing sheets
     const newSheet = await doc.addSheet({ title: 'hot new sheet!' });
     await newSheet.delete();

     // create a sheet and set the header row
     const sheet = await doc.addSheet({ headerValues: ['name', 'email'] });

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
 };)();
