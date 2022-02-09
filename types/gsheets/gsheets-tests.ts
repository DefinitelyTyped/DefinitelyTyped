import * as gsheets from 'gsheets';

gsheets.getSpreadsheet(''); // $ExpectType Promise<Spreadsheet>
gsheets.getWorksheet('', ''); // $ExpectType Promise<Worksheet>
gsheets.getWorksheetById('', ''); // $ExpectType Promise<WorksheetFromId>
