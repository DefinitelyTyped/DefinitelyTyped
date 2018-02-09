import Excel = require('exceljs');
import stream = require('stream');
import fs = require('fs');

// most examples taken and adapted from README.md

const workbook = new Excel.Workbook();
const worksheet = workbook.addWorksheet('sheet', {
	pageSetup: { paperSize: 9, orientation: 'landscape' }
});

// Set Workbook Properties
(() => {
	workbook.creator = 'Me';
	workbook.lastModifiedBy = 'Her';
	workbook.created = new Date(1985, 8, 30);
	workbook.modified = new Date();
	workbook.lastPrinted = new Date(2016, 9, 27);
	// Set workbook dates to 1904 date system
	workbook.properties.date1904 = true;
})();

// Workbook Views
(() => {
	workbook.views = [
		{
			x: 0, y: 0, width: 10000, height: 20000,
			firstSheet: 0, activeTab: 1, visibility: 'visible'
		}
	];
})();

// Add a Worksheet
(() => {
	const sheet1 = workbook.addWorksheet('My Sheet');
	// create a sheet with red tab colour
	const sheet2 = workbook.addWorksheet('My Sheet', { properties: { tabColor: { argb: 'FFC0000' } } });

	// create a sheet where the grid lines are hidden
	const sheet3 = workbook.addWorksheet('My Sheet', { properties: { showGridLines: false } });

	// create a sheet with the first row and column frozen
	const sheet4 = workbook.addWorksheet('My Sheet', { views: [{ xSplit: 1, ySplit: 1 }] });
})();

// Remove a Worksheet
(() => {
	// Create a worksheet
	const sheet = workbook.addWorksheet('My Sheet');

	// Remove the worksheet using worksheet id
	workbook.removeWorksheet(sheet.id);
})();

// Access Worksheets
(() => {
	// Iterate over all sheets
	// Note: workbook.worksheets.forEach will still work but this is better
	workbook.eachSheet((worksheet, sheetId) => {
		// ...
	});

	// fetch sheet by name
	const worksheet1 = workbook.getWorksheet('My Sheet');

	// fetch sheet by id
	const worksheet2 = workbook.getWorksheet(1);
})();

// Worksheet Properties
(() => {
	const workbookWriter = new Excel.stream.xlsx.WorkbookWriter({
		filename: './streamed-workbook.xlsx',
		useStyles: true,
		useSharedStrings: true
	});
	// create new sheet with properties
	const worksheet = workbook.addWorksheet('sheet', { properties: { tabColor: { argb: 'FF00FF00' } } });

	// create a new sheet writer with properties
	const worksheetWriter = workbook.addWorksheet('sheet', { properties: { outlineLevelCol: 1 } });

	// adjust properties afterwards (not supported by worksheet-writer)
	worksheet.properties.outlineLevelCol = 2;
	worksheet.properties.defaultRowHeight = 15;
})();

// Page Setup
(() => {
	// create new sheet with pageSetup settings for A4 - landscape
	const worksheet = workbook.addWorksheet('sheet', {
		pageSetup: { paperSize: 9, orientation: 'landscape' }
	});

	// create a new sheet writer with pageSetup settings for fit-to-page
	const worksheetWriter = workbook.addWorksheet('sheet', {
		pageSetup: { fitToPage: true, fitToHeight: 5, fitToWidth: 7 }
	});

	// adjust pageSetup settings afterwards
	worksheet.pageSetup.margins = {
		left: 0.7, right: 0.7,
		top: 0.75, bottom: 0.75,
		header: 0.3, footer: 0.3
	};

	// Set Print Area for a sheet
	worksheet.pageSetup.printArea = 'A1:G20';

	// Repeat specific rows on every printed page
	worksheet.pageSetup.printTitlesRow = '1:3';
})();

(() => {
	// Frozen Views
	worksheet.views = [
		{ state: 'frozen', xSplit: 2, ySplit: 3, topLeftCell: 'G10', activeCell: 'A1' }
	];
	// Split Views
	worksheet.views = [
		{ state: 'split', xSplit: 2000, ySplit: 3000, topLeftCell: 'G10', activeCell: 'A1' }
	];
	// Auto filters
	worksheet.autoFilter = 'A1:C1';
	// Set an auto filter from A1 to C1
	worksheet.autoFilter = {
		from: 'A1',
		to: 'C1',
	};

	// Set an auto filter from the cell in row 3 and column 1
	// to the cell in row 5 and column 12
	worksheet.autoFilter = {
		from: {
			row: 3,
			column: 1
		},
		to: {
			row: 5,
			column: 12
		}
	};

	// Set an auto filter from D3 to the
	// cell in row 7 and column 5
	worksheet.autoFilter = {
		from: 'D3',
		to: {
			row: 7,
			column: 5
		}
	};

	// Add column headers and define column keys and widths
	// Note: these column structures are a workbook-building convenience only,
	// apart from the column width, they will not be fully persisted.
	worksheet.columns = [
		{ header: 'Id', key: 'id', width: 10 },
		{ header: 'Name', key: 'name', width: 32 },
		{ header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
	];

	// Access an individual columns by key, letter and 1-based column number
	const idCol = worksheet.getColumn('id');
	const nameCol = worksheet.getColumn('B');
	const dobCol = worksheet.getColumn(3);

	// set column properties

	// Note: will overwrite cell value C1
	dobCol.header = 'Date of Birth';

	// Note: this will overwrite cell values C1:C2
	dobCol.header = ['Date of Birth', 'A.K.A. D.O.B.'];

	// from this point on, this column will be indexed by 'dob' and not 'DOB'
	dobCol.key = 'dob';

	dobCol.width = 15;

	// Hide the column if you'd like
	dobCol.hidden = true;

	// set an outline level for columns
	worksheet.getColumn(4).outlineLevel = 0;
	worksheet.getColumn(5).outlineLevel = 1;

	// columns support a readonly field to indicate the collapsed state based on outlineLevel
	worksheet.getColumn(4).collapsed;	// false
	worksheet.getColumn(5).collapsed;	// true

	// iterate over all current cells in this column
	dobCol.eachCell((cell, rowNumber) => {
		// ...
	});

	// iterate over all current cells in this column including empty cells
	dobCol.eachCell({ includeEmpty: true }, (cell, rowNumber) => {
		// ...
	});

	// cut one or more columns (columns to the right are shifted left)
	// If column properties have been definde, they will be cut or moved accordingly
	// Known Issue: If a splice causes any merged cells to move, the results may be unpredictable
	worksheet.spliceColumns(3, 2);

	// remove one column and insert two more.
	// Note: columns 4 and above will be shifted right by 1 column.
	// Also: If the worksheet has more rows than values in the colulmn inserts,
	//  the rows will still be shifted as if the values existed
	const newCol3Values = [1, 2, 3, 4, 5];
	const newCol4Values = ['one', 'two', 'three', 'four', 'five'];
	worksheet.spliceColumns(3, 1, newCol3Values, newCol4Values);

	// Add a couple of Rows by key-value, after the last current row, using the column keys
	worksheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) });
	worksheet.addRow({ id: 2, name: 'Jane Doe', dob: new Date(1965, 1, 7) });

	// Add a row by contiguous Array (assign to columns A, B & C)
	worksheet.addRow([3, 'Sam', new Date()]);

	// Add a row by sparse Array (assign to columns A, E & I)
	const rowValues = [];
	rowValues[1] = 4;
	rowValues[5] = 'Kyle';
	rowValues[9] = new Date();
	worksheet.addRow(rowValues);

	// Add an array of rows
	const rows = [
		[5, 'Bob', new Date()], // row by array
		{ id: 6, name: 'Barbara', dob: new Date() }
	];
	worksheet.addRows(rows);

	// Get a row object. If it doesn't already exist, a new empty one will be returned
	const row1 = worksheet.getRow(5);

	// Get the last editable row in a worksheet (or undefined if there are none)
	const row2 = worksheet.lastRow;

	if (row2) {
		// Set a specific row height
		row2.height = 42.5;

		// make row hidden
		row2.hidden = true;
	}

	// set an outline level for rows
	worksheet.getRow(4).outlineLevel = 0;
	worksheet.getRow(5).outlineLevel = 1;

	// rows support a readonly field to indicate the collapsed state based on outlineLevel
	worksheet.getRow(4).collapsed;	// false
	worksheet.getRow(5).collapsed;	// true

	row1.getCell(1).value = 5; // A5's value set to 5
	row1.getCell('name').value = 'Zeb'; // B5's value set to 'Zeb' - assuming column 2 is still keyed by name
	row1.getCell('C').value = new Date(); // C5's value set to now

	// Get a row as a sparse array
	// Note: interface change: worksheet.getRow(4) ==> worksheet.getRow(4).values
	const row3 = worksheet.getRow(4);
	// row3.values[5];	// 'Kyle'

	// assign row values by contiguous array (where array element 0 has a value)
	row3.values = [1, 2, 3];
	row3.getCell(1).value; // 1
	row3.getCell(2).value; // 2
	row3.getCell(3).value; // 3

	// assign row values by sparse array  (where array element 0 is undefined)
	const values = [];
	values[5] = 7;
	values[10] = 'Hello, World!';
	row3.values = values;
	row3.getCell(1).value;	// null or undefined
	row3.getCell(5).value;	// 7
	row3.getCell(10).value;	// Hello, World!

	// assign row values by object, using column keys
	row3.values = {
		id: 13,
		name: 'Thing 1',
		dob: new Date()
	};

	// Insert a page break prior to the row
	row3.addPageBreak();

	// Iterate over all rows that have values in a worksheet
	worksheet.eachRow((row, rowNumber) => {
		console.log(`Row ${rowNumber} = ${JSON.stringify(row.values)}`);
	});

	// Iterate over all rows (including empty rows) in a worksheet
	worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
		console.log(`Row ${rowNumber} = ${JSON.stringify(row.values)}`);
	});

	// Iterate over all non-null cells in a row
	row3.eachCell((cell, colNumber) => {
		console.log(`Cell ${colNumber} = ${cell.value}`);
	});

	// Iterate over all cells in a row (including empty cells)
	row3.eachCell({ includeEmpty: true }, (cell, colNumber) => {
		console.log(`Cell ${colNumber} = ${cell.value}`);
	});

	// Cut one or more rows (rows below are shifted up)
	// Known Issue: If a splice causes any merged cells to move, the results may be unpredictable
	worksheet.spliceRows(4, 3);

	// remove one row and insert two more.
	// Note: rows 4 and below will be shifted down by 1 row.
	const newRow3Values = [1, 2, 3, 4, 5];
	const newRow4Values = ['one', 'two', 'three', 'four', 'five'];
	worksheet.spliceRows(3, 1, newRow3Values, newRow4Values);

	// Cut one or more cells (cells to the right are shifted left)
	// Note: this operation will not affect other rows
	row3.splice(3, 2);

	// remove one cell and insert two more (cells to the right of the cut cell will be shifted right)
	row3.splice(4, 1, 'new value 1', 'new value 2');

	// Commit a completed row to stream
	row3.commit();

	// row metrics
	const rowSize = row3.cellCount;
	const numValues = row3.actualCellCount;

	// Handling Individual Cells
	// Modify/Add individual cell
	worksheet.getCell('C3').value = new Date(1968, 5, 1);

	// query a cell's type
	worksheet.getCell('C3').type;	// Excel.ValueType.Date

	// Merged Cells
	// merge a range of cells
	worksheet.mergeCells('A4:B5');

	// ... merged cells are linked
	worksheet.getCell('B5').value = 'Hello, World!';
	worksheet.getCell('B5').value;	// worksheet.getCell('A4').value
	worksheet.getCell('B5').master; // worksheet.getCell('A4')

	// ... merged cells share the same style object
	worksheet.getCell('B5').style;	// worksheet.getCell('A4').style
	// worksheet.getCell('B5').style.font = myFonts.arial;
	worksheet.getCell('A4').style.font;	// myFonts.arial;

	// unmerging the cells breaks the style links
	worksheet.unMergeCells('A4');
	worksheet.getCell('B5').style;	// not.toBe(worksheet.getCell('A4').style);
	worksheet.getCell('B5').style.font; // not.toBe(myFonts.arial);

	// merge by top-left, bottom-right
	worksheet.mergeCells('G10', 'H11');
	worksheet.mergeCells(10, 11, 12, 13); // top,left,bottom,right

	// Defined Names
	// assign (or get) a name for a cell (will overwrite any other names that cell had)
	worksheet.getCell('A1').name = 'PI';
	worksheet.getCell('A1').name;	// 'PI'

	// assign (or get) an array of names for a cell (cells can have more than one name)
	worksheet.getCell('A1').names = ['thing1', 'thing2'];
	worksheet.getCell('A1').names;	// ['thing1', 'thing2']

	// remove a name from a cell
	worksheet.getCell('A1').removeName('thing1');
	worksheet.getCell('A1').names;	// ['thing2']

	// Data Validations
	// Specify list of valid values (One, Two, Three, Four).
	// Excel will provide a dropdown with these values.
	worksheet.getCell('A1').dataValidation = {
		type: 'list',
		allowBlank: true,
		formulae: ['"One,Two,Three,Four"']
	};

	// Specify list of valid values from a range.
	// Excel will provide a dropdown with these values.
	worksheet.getCell('A1').dataValidation = {
		type: 'list',
		allowBlank: true,
		formulae: ['$D$5:$F$5']
	};

	// Specify Cell must be a whole number that is not 5.
	// Show the user an appropriate error message if they get it wrong
	worksheet.getCell('A1').dataValidation = {
		type: 'whole',
		operator: 'notEqual',
		showErrorMessage: true,
		formulae: [5],
		errorStyle: 'error',
		errorTitle: 'Five',
		error: 'The value must not be Five'
	};

	// Specify Cell must be a decomal number between 1.5 and 7.
	// Add 'tooltip' to help guid the user
	worksheet.getCell('A1').dataValidation = {
		type: 'decimal',
		operator: 'between',
		allowBlank: true,
		showInputMessage: true,
		formulae: [1.5, 7],
		promptTitle: 'Decimal',
		prompt: 'The value must between 1.5 and 7'
	};

	// Specify Cell must be have a text length less than 15
	worksheet.getCell('A1').dataValidation = {
		type: 'textLength',
		operator: 'lessThan',
		showErrorMessage: true,
		allowBlank: true,
		formulae: [15]
	};

	// Specify Cell must be have be a date before 1st Jan 2016
	worksheet.getCell('A1').dataValidation = {
		type: 'date',
		operator: 'lessThan',
		showErrorMessage: true,
		allowBlank: true,
		formulae: [new Date(2016, 0, 1)]
	};

	const ws = worksheet;

	// Styles
	// assign a style to a cell
	ws.getCell('A1').numFmt = '0.00%';

	// Apply styles to worksheet columns
	ws.columns = [
		{ header: 'Id', key: 'id', width: 10 },
		{ header: 'Name', key: 'name', width: 32, style: { font: { name: 'Arial Black' } } },
		{ header: 'D.O.B.', key: 'DOB', width: 10, style: { numFmt: 'dd/mm/yyyy' } }
	];

	// Set Column 3 to Currency Format
	ws.getColumn(3).numFmt = '"£"#,##0.00;[Red]\-"£"#,##0.00';

	// Set Row 2 to Comic Sans.
	ws.getRow(2).font = { name: 'Comic Sans MS', family: 4, size: 16, underline: 'double', bold: true };

	// Number Formats
	// display value as '1 3/5'
	ws.getCell('A1').value = 1.6;
	ws.getCell('A1').numFmt = '# ?/?';

	// display value as '1.60%'
	ws.getCell('B1').value = 0.016;
	ws.getCell('B1').numFmt = '0.00%';

	// Fonts
	// for the wannabe graphic designers out there
	ws.getCell('A1').font = {
		name: 'Comic Sans MS',
		family: 4,
		size: 16,
		underline: true,
		bold: true
	};

	// for the graduate graphic designers...
	ws.getCell('A2').font = {
		name: 'Arial Black',
		color: { argb: 'FF00FF00' },
		family: 2,
		size: 14,
		italic: true
	};

	// note: the cell will store a reference to the font object assigned.
	// If the font object is changed afterwards, the cell font will change also...
	const font = { name: 'Arial', size: 12 };
	ws.getCell('A3').font = font;
	font.size = 20; // Cell A3 now has font size 20!

	// Cells that share similar fonts may reference the same font object after
	// the workbook is read from file or stream

	// Alignment
	// set cell alignment to top-left, middle-center, bottom-right
	ws.getCell('A1').alignment = { vertical: 'top', horizontal: 'left' };
	ws.getCell('B1').alignment = { vertical: 'middle', horizontal: 'center' };
	ws.getCell('C1').alignment = { vertical: 'bottom', horizontal: 'right' };

	// set cell to wrap-text
	ws.getCell('D1').alignment = { wrapText: true };

	// set cell indent to 1
	ws.getCell('E1').alignment = { indent: 1 };

	// set cell text rotation to 30deg upwards, 45deg downwards and vertical text
	ws.getCell('F1').alignment = { textRotation: 30 };
	ws.getCell('G1').alignment = { textRotation: -45 };
	ws.getCell('H1').alignment = { textRotation: 'vertical' };

	// Borders
	// set single thin border around A1
	ws.getCell('A1').border = {
		top: { style: 'thin' },
		left: { style: 'thin' },
		bottom: { style: 'thin' },
		right: { style: 'thin' }
	};

	// set double thin green border around A3
	ws.getCell('A3').border = {
		top: { style: 'double', color: { argb: 'FF00FF00' } },
		left: { style: 'double', color: { argb: 'FF00FF00' } },
		bottom: { style: 'double', color: { argb: 'FF00FF00' } },
		right: { style: 'double', color: { argb: 'FF00FF00' } }
	};

	// set thick red cross in A5
	ws.getCell('A5').border = {
		diagonal: { up: true, down: true, style: 'thick', color: { argb: 'FFFF0000' } }
	};

	// Fills

	// fill A1 with red darkVertical stripes
	ws.getCell('A1').fill = {
		type: 'pattern',
		pattern: 'darkVertical',
		fgColor: { argb: 'FFFF0000' }
	};

	// fill A2 with yellow dark trellis and blue behind
	ws.getCell('A2').fill = {
		type: 'pattern',
		pattern: 'darkTrellis',
		fgColor: { argb: 'FFFFFF00' },
		bgColor: { argb: 'FF0000FF' }
	};

	// fill A3 with blue-white-blue gradient from left to right
	ws.getCell('A3').fill = {
		type: 'gradient',
		gradient: 'angle',
		degree: 0,
		stops: [
			{ position: 0, color: { argb: 'FF0000FF' } },
			{ position: 0.5, color: { argb: 'FFFFFFFF' } },
			{ position: 1, color: { argb: 'FF0000FF' } }
		]
	};

	// fill A4 with red-green gradient from center
	ws.getCell('A2').fill = {
		type: 'gradient',
		gradient: 'path',
		center: { left: 0.5, top: 0.5 },
		stops: [
			{ position: 0, color: { argb: 'FFFF0000' } },
			{ position: 1, color: { argb: 'FF00FF00' } }
		]
	};

	// Rich Text
	ws.getCell('A1').value = {
		richText: [
			{ font: { size: 12, color: { theme: 0 }, name: 'Calibri', family: 2, scheme: 'minor' }, text: 'This is ' },
			{ font: { italic: true, size: 12, color: { theme: 0 }, name: 'Calibri', scheme: 'minor' }, text: 'a' },
			{ font: { size: 12, color: { theme: 1 }, name: 'Calibri', family: 2, scheme: 'minor' }, text: ' ' },
			{ font: { size: 12, color: { argb: 'FFFF6600' }, name: 'Calibri', scheme: 'minor' }, text: 'colorful' },
			{ font: { size: 12, color: { theme: 1 }, name: 'Calibri', family: 2, scheme: 'minor' }, text: ' text ' },
			{ font: { size: 12, color: { argb: 'FFCCFFCC' }, name: 'Calibri', scheme: 'minor' }, text: 'with' },
			{ font: { size: 12, color: { theme: 1 }, name: 'Calibri', family: 2, scheme: 'minor' }, text: ' in-cell ' },
			{ font: { bold: true, size: 12, color: { theme: 1 }, name: 'Calibri', family: 2, scheme: 'minor' }, text: 'format' }
		]
	};

	// expect(ws.getCell('A1').text).to.equal('This is a colorful text with in-cell format');
	// expect(ws.getCell('A1').type).to.equal(Excel.ValueType.RichText);

	// Outline Levels
	worksheet.columns = [
		{ header: 'Id', key: 'id', width: 10 },
		{ header: 'Name', key: 'name', width: 32 },
		{ header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
	];
	worksheet.getColumn(3).outlineLevel = 1;
	worksheet.getRow(3).outlineLevel = 1;
	// set column outline level
	worksheet.properties.outlineLevelCol = 1;

	// set row outline level
	worksheet.properties.outlineLevelRow = 1;
	worksheet.properties.outlineLevelCol = 1;

	worksheet.getColumn(3).outlineLevel = 1;
	// expect(worksheet.getColumn(3).collapsed).to.be.true;

	worksheet.properties.outlineLevelCol = 2;
	// expect(worksheet.getColumn(3).collapsed).to.be.false;
})();

// Images
(() => {
	// add image to workbook by filename
	const imageId1 = workbook.addImage({
		filename: 'path/to/image.jpg',
		extension: 'jpeg',
	});

	// add image to workbook by buffer
	const imageId2 = workbook.addImage({
		buffer: fs.readFileSync('path/to.image.png'),
		extension: 'png',
	});

	// add image to workbook by base64
	const myBase64Image = "data:image/png;base64,iVBORw0KG...";
	const imageId3 = workbook.addImage({
		base64: myBase64Image,
		extension: 'png',
	});
	// set background
	worksheet.addBackgroundImage(imageId1);
	// insert an image over B2:D6
	worksheet.addImage(imageId2, 'B2:D6');
	worksheet.addImage(imageId2, {
		tl: { col: 1.5, row: 1.5 },
		br: { col: 3.5, row: 5.5 }
	});
	worksheet.addImage(imageId2, {
		tl: { col: 0.1125, row: 0.4 },
		br: { col: 2.101046875, row: 3.4 },
		editAs: 'oneCell'
	});
})();

// File I/O
(() => {
	// read from a file
	const filename = 'abc.xls';
	const workbook = new Excel.Workbook();
	workbook.xlsx.readFile(filename)
		.then(() => {
			// use workbook
		});

	// pipe from stream
	// stream.pipe(workbook.xlsx.createInputStream());

	// write to a file
	workbook.xlsx.writeFile(filename)
		.then(() => {
			// done
		});

	// write to a stream
	// workbook.xlsx.write(stream)
	// 	.then(() => {
	// 		// done
	// 	});
})();

// CSV
(() => {
	// read from a file
	const filename = 'abc.xls';
	const workbook = new Excel.Workbook();
	workbook.csv.readFile(filename)
		.then((worksheet) => {
			// use workbook or worksheet
		});

	// read from a stream
	// workbook.csv.read(stream)
	// 	.then((worksheet) => {
	// 		// use workbook or worksheet
	// 	});

	// pipe from stream
	// stream.pipe(workbook.csv.createInputStream());

	// read from a file with European Dates
	const options1 = {
		dateFormats: ['DD/MM/YYYY']
	};
	workbook.csv.readFile(filename, options1)
		.then((worksheet) => {
			// use workbook or worksheet
		});

	// read from a file with custom value parsing
	const options2 = {
		map(value: string, index: number) {
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
	workbook.csv.readFile(filename, options2)
		.then((worksheet) => {
			// use workbook or worksheet
		});

	// write to a file
	workbook.csv.writeFile(filename)
		.then(() => {
			// done
		});

	// construct a streaming XLSX workbook writer with styles and shared strings
	const options3 = {
		filename: './streamed-workbook.xlsx',
		useStyles: true,
		useSharedStrings: true
	};
	new Excel.stream.xlsx.WorkbookWriter(options3);
})();

// Construction
(() => {
	worksheet.addRow({
		id: 0,
		name: 'theName',
		etc: 'someOtherDetail'
	}).commit();

	worksheet.mergeCells('A1:B2');
	worksheet.getCell('A1').value = 'I am merged';
	worksheet.getCell('C1').value = 'I am not';
	worksheet.getCell('C2').value = 'Neither am I';
	worksheet.getRow(2).commit(); // now rows 1 and two are committed.

	// Finished adding data. Commit the worksheet
	worksheet.commit();
})();
