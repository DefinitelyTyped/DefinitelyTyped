import * as Excel from 'exceljs';

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

const worksheet: Excel.Worksheet = workbook.addWorksheet('My Sheet');
const worksheet2 = workbook.getWorksheet('My Sheet');
const worksheet3 = workbook.getWorksheet(1);
const sheet = workbook.addWorksheet('My Sheet', {views: [{showGridLines: false}]});

const row: Excel.Row = worksheet.addRow([3, 'Sam', new Date()]);
row.getCell(1).value = 5;

worksheet.eachRow((row: Excel.Row, rowNumber: number): void => {
    // nothing
});

row.eachCell((cell: Excel.Cell, colNumber: number): void => {
    // nothing
});

worksheet.mergeCells('A4:B5');

worksheet.getCell('A1').numFmt = '0.00%';
worksheet.getCell('A1').font = {
    name: 'Comic Sans MS',
    family: 4,
    size: 16,
    underline: true,
    bold: true
};

worksheet.getCell('A1').alignment = { vertical: 'top', horizontal: 'left' };
worksheet.getCell('B1').alignment = { vertical: 'middle', horizontal: 'center' };
worksheet.getCell('C1').alignment = { vertical: 'bottom', horizontal: 'right' };
worksheet.getCell('D1').alignment = { wrapText: true };
worksheet.getCell('E1').alignment = { indent: 1 };

worksheet.getCell('A1').border = {
    top: {style: 'thin'},
    left: {style: 'thin'},
    bottom: {style: 'thin'},
    right: {style: 'thin'}
};

worksheet.getCell('A3').border = {
    top: {style: 'double', color: {argb: 'FF00FF00'}},
    left: {style: 'double', color: {argb: 'FF00FF00'}},
    bottom: {style: 'double', color: {argb: 'FF00FF00'}},
    right: {style: 'double', color: {argb: 'FF00FF00'}}
};

worksheet.getCell('A1').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: {argb: 'FFFF0000'}
};

workbook.xlsx.readFile("/home/john/bla.xlsx")
    .then((): void => {
        // use workbook
    });

workbook.xlsx.writeFile("/home/john/bla.xlsx")
    .then((): void => {
        // done
    });
