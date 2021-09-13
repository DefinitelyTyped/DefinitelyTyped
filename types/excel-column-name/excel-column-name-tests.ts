import * as excelColumnName from 'excel-column-name';

const colString: string = excelColumnName.intToExcelCol(287); // => 'KA'

const colInt: number = excelColumnName.excelColToInt('KA'); // => 287
