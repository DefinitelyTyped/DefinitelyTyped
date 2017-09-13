import * as Excel from 'exceljs';
import * as stream from 'stream';
import * as fs from 'fs';
import * as Bluebird from 'bluebird';

// most examples taken and adapted from README.md

const workbook = new Excel.Workbook();

workbook.creator = 'Me';
workbook.lastModifiedBy = 'Her';
workbook.created = new Date(1985, 8, 30);
workbook.modified = new Date();
workbook.lastPrinted = new Date(2016, 9, 27);
workbook.properties.date1904 = true;

workbook.views = [
  {
    x: 0, y: 0, width: 10000, height: 20000,
    firstSheet: 0, activeTab: 1, visibility: 'visible'
  }
];

const worksheet = workbook.addWorksheet('My Sheet');

workbook.eachSheet((worksheet, sheetId) => null);

const worksheet2 = workbook.getWorksheet('My Sheet');
const worksheet3 = workbook.getWorksheet(1);
const sheet1 = workbook.addWorksheet('My Sheet', {
  pageSetup: { fitToPage: true, fitToHeight: 5, fitToWidth: 7 },
  properties: { tabColor: { argb: 'FFC0000' } },
});
const sheet2 = workbook.addWorksheet('My Sheet', {
  pageSetup: { paperSize: 9, orientation: 'landscape' },
  views: [
    { state: 'frozen', xSplit: 1, ySplit: 1 },
    { state: 'normal', showGridLines: false },
    { state: 'split', activePane: 'bottomLeft', }
  ]
});

worksheet.properties.outlineLevelCol = 2;
worksheet.properties.defaultRowHeight = 15;

worksheet.pageSetup.margins = {
  left: 0.7, right: 0.7,
  top: 0.75, bottom: 0.75,
  header: 0.3, footer: 0.3
};

worksheet.pageSetup.printArea = 'A1:G20';
worksheet.pageSetup.printTitlesRow = '1:3';

worksheet.views = [
  { state: 'frozen', xSplit: 2, ySplit: 3, topLeftCell: 'G10', activeCell: 'A1' },
  { state: 'split', xSplit: 2000, ySplit: 3000, topLeftCell: 'G10', activeCell: 'A1' },
];

worksheet.autoFilter = { from: 'A1', to: 'C1' };
worksheet.autoFilter = { from: { row: 3, column: 1 }, to: { row: 5, column: 12 } };
worksheet.autoFilter = { from: 'D3', to: { row: 7, column: 5 } };

worksheet.columns = [
  { header: 'Id', key: 'id', width: 10 },
  { header: 'Name', key: 'name', width: 32 },
  { header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
];

const idCol = worksheet.getColumn('id');
const nameCol = worksheet.getColumn('B');
const dobCol = worksheet.getColumn(3);

dobCol.header = 'Date of Birth';
dobCol.header = ['Date of Birth', 'A.K.A. D.O.B.'];
dobCol.key = 'dob';
dobCol.width = 15;
dobCol.hidden = true;
worksheet.getColumn(4).outlineLevel = 0;
const cl1 = worksheet.getColumn(4).collapsed;

dobCol.eachCell((cell, rowNumber) => null);

dobCol.eachCell({ includeEmpty: true }, (cell, rowNumber) => null);

worksheet.spliceColumns(3, 2);

const newCol3Values = [1, 2, 3, 4, 5];
const newCol4Values = ['one', 'two', 'three', 'four', 'five'];
worksheet.spliceColumns(3, 1, newCol3Values, newCol4Values);

worksheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) });
worksheet.addRow({ id: 2, name: 'Jane Doe', dob: new Date(1965, 1, 7) });
worksheet.addRow([3, 'Sam', new Date()]);
const rowValues = [];
rowValues[1] = 4;
rowValues[5] = 'Kyle';
rowValues[9] = new Date();
worksheet.addRow(rowValues);
const rows = [
  [5, 'Bob', new Date()],
  { id: 6, name: 'Barbara', dob: new Date() },
];
worksheet.addRows(rows);

const row = worksheet.getRow(5);
const row1 = worksheet.lastRow;

row.height = 42.5;
row.hidden = true;
worksheet.getRow(4).outlineLevel = 0;
worksheet.getRow(5).outlineLevel = 1;
worksheet.getRow(4).collapsed;
worksheet.getRow(4).number;

row.getCell(1).value = 5;
row.getCell('name').value = 'Zeb';
row.getCell('C').value = new Date();

const row2 = worksheet.getRow(4).values;

row.values = [1, 2, 3];

const values = [];
values[5] = 7;
values[10] = 'Hello, World!';
row.values = values;

row.values = { id: 13, name: 'Thing 1', dob: new Date() };

worksheet.eachRow((row, rowNumber) => null);
worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => null);

row.eachCell((cell, colNumber) => null);
row.eachCell({ includeEmpty: true }, (cell, colNumber) => null);

worksheet.spliceRows(4, 3);

const newRow3Values = [1, 2, 3, 4, 5];
const newRow4Values = ['one', 'two', 'three', 'four', 'five'];
worksheet.spliceRows(3, 1, newRow3Values, newRow4Values);

row.splice(3, 2);

row.splice(4, 1, 'new value 1', 'new value 2');

row.commit();

const rowSize = row.cellCount;
const numValues = row.actualCellCount;

worksheet.getCell('C3').value = new Date(1968, 5, 1);
const isDate = worksheet.getCell('C3').type === Excel.ValueType.Date;

worksheet.mergeCells('A4:B5');

worksheet.getCell('B5').value = 'Hello, World!';
const master = worksheet.getCell('B5').master === worksheet.getCell('A4');

worksheet.unMergeCells('A4');

worksheet.mergeCells('G10', 'H11');
worksheet.mergeCells(10, 11, 12, 13);

worksheet.getCell('A1').name = 'PI';
worksheet.getCell('A1').names = ['thing1', 'thing2'];
worksheet.getCell('A1').removeName('thing1');

worksheet.getCell('A1').dataValidation = {
  type: 'list',
  allowBlank: true,
  formulae: ['"One,Two,Three,Four"']
};

worksheet.getCell('A1').dataValidation = {
  type: 'list',
  allowBlank: true,
  formulae: ['$D$5:$F$5']
};

worksheet.getCell('A1').dataValidation = {
  type: 'whole',
  operator: 'notEqual',
  showErrorMessage: true,
  formulae: [5],
  errorStyle: 'error',
  errorTitle: 'Five',
  error: 'The value must not be Five'
};

worksheet.getCell('A1').dataValidation = {
  type: 'decimal',
  operator: 'between',
  allowBlank: true,
  showInputMessage: true,
  formulae: [1.5, 7],
  promptTitle: 'Decimal',
  prompt: 'The value must between 1.5 and 7'
};

worksheet.getCell('A1').dataValidation = {
  type: 'textLength',
  operator: 'lessThan',
  showErrorMessage: true,
  allowBlank: true,
  formulae: [15]
};

worksheet.getCell('A1').dataValidation = {
  type: 'date',
  operator: 'lessThan',
  showErrorMessage: true,
  allowBlank: true,
  formulae: [new Date(2016, 0, 1)]
};

worksheet.getCell('A1').value = null;
worksheet.getCell('A1').value = 5;
worksheet.getCell('A2').value = 3.14159;
worksheet.getCell('A1').value = 'Hello, World!';
worksheet.getCell('A1').value = new Date(2017, 2, 15);
worksheet.getCell('A1').value = { text: 'www.mylink.com', hyperlink: 'http://www.mylink.com' };
worksheet.getCell('A1').value = { text: 'Sheet2', hyperlink: '#\\"Sheet2\\"!A1' };
worksheet.getCell('A3').value = { formula: 'A1+A2', result: 7 };
worksheet.getCell('B3').value = { sharedFormula: 'A3', result: 10 };
worksheet.getCell('A1').value = true;
worksheet.getCell('A2').value = false;
worksheet.getCell('A1').value = { error: '#N/A' };
worksheet.getCell('A2').value = { error: '#VALUE!' };
worksheet.getCell('A1').value = {
  richText: [
    { text: 'This is ' },
    { font: { italic: true }, text: 'italic' }
  ],
};
worksheet.getCell('A3').formula === 'A1+A2';
worksheet.getCell('A3').result === 7;

const isMaster = worksheet.getCell('A3').formulaType === Excel.FormulaType.Master;
const isShared = worksheet.getCell('B3').formulaType === Excel.FormulaType.Shared;

worksheet.getCell('A1').numFmt = '0.00%';
worksheet.columns = [
  { header: 'Id', key: 'id', width: 10 },
  { header: 'Name', key: 'name', width: 32, style: { font: { name: 'Arial Black' } } },
  { header: 'D.O.B.', key: 'DOB', width: 10, style: { numFmt: 'dd/mm/yyyy' } }
];

worksheet.getColumn(3).numFmt = '"£"#,##0.00;[Red]\-"£"#,##0.00';

worksheet.getRow(2).font = {
  name: 'Comic Sans MS',
  family: 4,
  size: 16,
  underline: 'double',
  bold: true,
};

worksheet.getCell('A1').numFmt = '# ?/?';
worksheet.getCell('B1').numFmt = '0.00%';

worksheet.getCell('A1').font = {
  name: 'Comic Sans MS',
  family: 4,
  size: 16,
  underline: true,
  bold: true
};

worksheet.getCell('A2').font = {
  name: 'Arial Black',
  color: { argb: 'FF00FF00' },
  family: 2,
  size: 14,
  italic: true
};

const font = { name: 'Arial', size: 12 };
worksheet.getCell('A3').font = font;
font.size = 20;

worksheet.getCell('A1').alignment = { vertical: 'top', horizontal: 'left' };
worksheet.getCell('B1').alignment = { vertical: 'middle', horizontal: 'center' };
worksheet.getCell('C1').alignment = { vertical: 'bottom', horizontal: 'right' };
worksheet.getCell('D1').alignment = { wrapText: true };
worksheet.getCell('E1').alignment = { indent: 1 };
worksheet.getCell('F1').alignment = { textRotation: 30 };
worksheet.getCell('G1').alignment = { textRotation: -45 };
worksheet.getCell('H1').alignment = { textRotation: 'vertical' };

worksheet.getCell('A1').border = {
  top: { style: 'thin' },
  left: { style: 'thin' },
  bottom: { style: 'thin' },
  right: { style: 'thin' }
};

worksheet.getCell('A3').border = {
  top: { style: 'double', color: { argb: 'FF00FF00' } },
  left: { style: 'double', color: { argb: 'FF00FF00' } },
  bottom: { style: 'double', color: { argb: 'FF00FF00' } },
  right: { style: 'double', color: { argb: 'FF00FF00' } }
};

worksheet.getCell('A5').border = {
  diagonal: { up: true, down: true, style: 'thick', color: { argb: 'FFFF0000' } }
};

worksheet.getCell('A1').fill = {
  type: 'pattern',
  pattern: 'darkVertical',
  fgColor: { argb: 'FFFF0000' }
};

worksheet.getCell('A2').fill = {
  type: 'pattern',
  pattern: 'darkTrellis',
  fgColor: { argb: 'FFFFFF00' },
  bgColor: { argb: 'FF0000FF' }
};

worksheet.getCell('A3').fill = {
  type: 'gradient',
  gradient: 'angle',
  degree: 0,
  stops: [
    { position: 0, color: { argb: 'FF0000FF' } },
    { position: 0.5, color: { argb: 'FFFFFFFF' } },
    { position: 1, color: { argb: 'FF0000FF' } }
  ]
};

worksheet.getCell('A2').fill = {
  type: 'gradient',
  gradient: 'path',
  center: { left: 0.5, top: 0.5 },
  stops: [
    { position: 0, color: { argb: 'FFFF0000' } },
    { position: 1, color: { argb: 'FF00FF00' } }
  ]
};

worksheet.getCell('A1').value = {
  richText: [
    {
      text: 'This is ',
      font: { name: 'Calibri', size: 12, color: { theme: 0 }, family: 2, scheme: 'minor' },
    },
    {
      text: 'a',
      font: { italic: true, size: 12, color: { theme: 0 }, name: 'Calibri', scheme: 'minor' },
    },
    {
      text: ' ',
      font: { size: 12, color: { theme: 1 }, name: 'Calibri', family: 2, scheme: 'minor' },
    },
    {
      text: 'colorful',
      font: { size: 12, color: { argb: 'FFFF6600' }, name: 'Calibri', scheme: 'minor' },
    },
    {
      text: ' text ',
      font: { size: 12, color: { theme: 1 }, name: 'Calibri', family: 2, scheme: 'minor' },
    },
    {
      text: 'with',
      font: { size: 12, color: { argb: 'FFCCFFCC' }, name: 'Calibri', scheme: 'minor' },
    },
    {
      text: ' in-cell ',
      font: { size: 12, color: { theme: 1 }, name: 'Calibri', family: 2, scheme: 'minor' },
    },
    {
      text: 'format',
      font: { bold: true, size: 12, name: 'Calibri', family: 2, scheme: 'minor' },
    }
  ]
};

worksheet.columns = [
  { header: 'Id', key: 'id', width: 10 },
  { header: 'Name', key: 'name', width: 32 },
  { header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
];
worksheet.getColumn(3).outlineLevel = 1;
worksheet.getRow(3).outlineLevel = 1;
worksheet.properties.outlineLevelCol = 1;
worksheet.properties.outlineLevelRow = 1;

const imageId1 = workbook.addImage({
  filename: 'path/to/image.jpg',
  extension: 'jpeg',
});
const imageId2 = workbook.addImage({
  buffer: fs.readFileSync('path/to.image.png'),
  extension: 'png',
});

worksheet.addBackgroundImage(imageId1);
worksheet.addImage(imageId2, 'B2:D6');
worksheet.addImage(imageId2, {
  tl: { col: 1.5, row: 1.5 },
  br: { col: 3.5, row: 5.5 }
});

workbook.xlsx.readFile('./1.xlsx').then(() => null);
(new stream.Stream()).pipe(workbook.xlsx.createInputStream());

workbook.xlsx.writeFile('./1.xlsx').then(() => null);
workbook.xlsx.write(new stream.Stream()).then(() => null);

workbook.csv.readFile('./1.xlsx').then(worksheet => null);
workbook.csv.read(new stream.Stream()).then(worksheet => null);

(new stream.Stream()).pipe(workbook.csv.createInputStream());

const options1 = { dateFormats: ['DD/MM/YYYY'] };
workbook.csv.readFile('./1.xlsx', options1).then(worksheet => null);

const options2 = {
  map(value: any, index: number) {
    switch (index) {
      case 0:
        // column 1 is string
        return value;
      case 1:
        // column 2 is a date
        return new Date(value);
      case 2:
        // column 3 is JSON of a formula value
        return JSON.parse(value);
      default:
        // the rest are numbers
        return parseFloat(value);
    }
  }
};
workbook.csv.readFile('./1.xlsx', options2).then(worksheet => null);

workbook.csv.writeFile('./1.xlsx').then(() => null);

// write to a stream
workbook.csv.write(new stream.Stream()).then(() => null);

const workbookWriter = new Excel.stream.xlsx.WorkbookWriter({
  filename: './streamed-workbook.xlsx',
  useStyles: true,
  useSharedStrings: true
});

worksheet.addRow({
  id: 'i',
  name: 'theName',
  etc: 'someOtherDetail'
}).commit();

worksheet.mergeCells('A1:B2');
worksheet.getCell('A1').value = 'I am merged';
worksheet.getCell('C1').value = 'I am not';
worksheet.getCell('C2').value = 'Neither am I';
worksheet.getRow(2).commit();

worksheet.commit();

workbook.commit().then(() => null);

Excel.config.setValue('promise', Bluebird);
