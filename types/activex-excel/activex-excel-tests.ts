/// <reference types="activex-msforms" />
/// <reference types="activex-scripting" />

// some helpers
const toSafeArray = <T>(...items: T[]) => {
    let dict = new ActiveXObject('Scripting.Dictionary');
    items.forEach((x, index) => dict.Add(index, x));
    return dict.Items() as SafeArray<T>;
};
interface collectionType<T> {
    Item(index: any): T;
};
const inCollection = <T = any>(collection: { Item(index: any): T }, index: string | number) => {
    let item: T | undefined;
    try {
        item = collection.Item(index);
    } catch (error) { }
    return item;
};

let app = new ActiveXObject('Excel.Application');

// create a workbook -- https://msdn.microsoft.com/en-us/vba/excel-vba/articles/create-a-workbook
let newBook = app.Workbooks.Add();
newBook.Title = 'All Sales';
newBook.Subject = 'Sales';
newBook.SaveAs('allsales.xls');

// create or replace a worksheet -- https://msdn.microsoft.com/en-us/vba/excel-vba/articles/create-or-replace-a-worksheet
const newOrExistingWorksheet = () => {
    let mySheetName = 'Sheet4';
    let mySheet = inCollection(newBook.Worksheets, mySheetName) as Excel.Worksheet | undefined;
    if (!mySheet) {
        WScript.Echo(`The sheet named "${mySheetName} doesn't exist, but will be created.`);
        mySheet = app.Worksheets.Add() as Excel.Worksheet;
        mySheet.Name = mySheetName;
    }
};
const replaceWorksheet = () => {
    let mySheetName = 'Sheet4';
    app.DisplayAlerts = false;
    let mySheet = inCollection<Excel.Worksheet | Excel.Chart | Excel.DialogSheet>(app.Worksheets, mySheetName);
    if (mySheet) { mySheet.Delete(); }
    app.DisplayAlerts = true;
    mySheet = app.Worksheets.Add() as Excel.Worksheet;
    mySheet.Name = mySheetName;
    WScript.Echo(`The sheet named "${mySheetName} has been replaced.`);
};

// referencing multiple sheets -- https://msdn.microsoft.com/VBA/Excel-VBA/articles/sheets-object-excel
const moveMultipleSheets = () => {
    app.Worksheets.Item(toSafeArray<string | number>(1, 'Sheet2')).Move(4);
};

// sort worksheets alphanumerically by name -- https://msdn.microsoft.com/en-us/vba/excel-vba/articles/sort-worksheets-alphanumerically-by-name
const sortSheetsTabName = () => {
    app.ScreenUpdating = false;
    let sheets = app.ActiveWorkbook.Sheets;
    let sheetCount = sheets.Count;
    for (let i = 0; i < sheetCount; i += 1) {
        let sheetI = sheets.Item(i);
        for (let j = i; j < sheetCount; j += 1) {
            let sheetJ = sheets.Item(j);
            if (sheetJ.Name < sheetI.Name) { sheetJ.Move(sheetI); }
        }
    }
    app.ScreenUpdating = true;
};

// fill a value down into blank cells in a column -- https://msdn.microsoft.com/en-us/vba/excel-vba/articles/fill-a-value-down-into-blank-cells-in-a-column
const fillCellsFromAbove = () => {
    app.ScreenUpdating = false;
    let columnA: Excel.Range = app.Columns.Item(1);
    try {
        columnA.SpecialCells(Excel.XlCellType.xlCellTypeBlanks).Formula = '=R[-1]C';
        columnA.Value = columnA.Value;
    } catch (error) { }
    app.ScreenUpdating = true;
};

// hide and unhide columns -- https://msdn.microsoft.com/en-us/vba/excel-vba/articles/hide-and-unhide-columns
const setColumnVisibility = (visible: boolean) => {
    let book = app.Workbooks.Item(1);
    let sheet = inCollection<Excel.Worksheet | Excel.Chart | Excel.DialogSheet>(book.Worksheets, 'Sheet1');
    if (!sheet) { return; }

    // search the four columns for any constants
    let checkWithin = (sheet as Excel.Worksheet).Range('A1:D1').SpecialCells(Excel.XlCellType.xlCellTypeConstants);

    let find = checkWithin.Find('X');
    if (!find) { return; }
    let address = find.Address();

    // hide the column, and then find the next X
    do {
        find.EntireColumn.Hidden = visible;
        find = checkWithin.FindNext(find);
    } while (find && find.Address() !== address);
};

// highlighting the active cell, row, or column -- https://msdn.microsoft.com/en-us/vba/excel-vba/articles/highlight-the-active-cell-row-or-column
(() => {
    let wks = app.ActiveSheet as Excel.Worksheet;

    // highlight active cell
    ActiveXObject.on(wks, 'SelectionChange', ['Target'], function(this: Excel.Worksheet, prm) {
        app.ScreenUpdating = false;
        // clear the color of all the cells
        this.Cells.Interior.ColorIndex = 0;
        // highlight the actie cell
        prm.Target.Interior.ColorIndex = 8;
        app.ScreenUpdating = true;
    });

    // highlight entire row and column that contain active cell
    ActiveXObject.on(wks, 'SelectionChange', ['Target'], function(this: Excel.Worksheet, prm) {
        if (prm.Target.Cells.Count > 1) { return; }
        app.ScreenUpdating = false;
        // clear the color of all the cells in the row and column of the active cell
        this.Cells.Interior.ColorIndex = 0;
        prm.Target.EntireRow.Interior.ColorIndex = 8;
        prm.Target.EntireColumn.Interior.ColorIndex = 8;
        app.ScreenUpdating = true;
    });
})();

// referencing cells -- https://msdn.microsoft.com/en-us/vba/excel-vba/articles/reference-cells-and-ranges
(() => {
    let wks = app.ActiveSheet as Excel.Worksheet;

    // all the cells on a worksheet
    wks.Cells.ClearContents();

    // using A1 notation
    wks.Range('A1').Font.Bold = true;
    wks.Range('A1:D5').Font.Bold = true;
    wks.Range('C5:D9,G9:H16').Font.Bold = true;
    wks.Range('A:A').Font.Bold = true;
    wks.Range('1:1').Font.Bold = true;
    wks.Range('A:C').Font.Bold = true;
    wks.Range('1:5').Font.Bold = true;
    wks.Range('1:1,3:3,8:8').Font.Bold = true;
    wks.Range('A:A,C:C,F:F').Font.Bold = true;

    // using index numbers
    wks.Cells.Item(6, 1).Value2 = 10;
    // Value is also a property with parameters
    ActiveXObject.set(wks.Cells.Item(6, 1), 'Value', 10);

    // iterating through cells using index numbers
    for (let counter = 1; counter < 20; counter += 1) {
        ActiveXObject.set(wks.Cells.Item(counter, 1), 'Value', 10);
    }

    // relative to other cells
    wks.Cells.Item(1, 1).Font.Underline = Excel.XlUnderlineStyle.xlUnderlineStyleDouble;

    // using a Range object
    let rng = wks.Cells.Item('A1:D5');
    rng.Formula = '=RAND()';
    rng.Font.Bold = true;

    // refer to multiple ranges, using Union
    let r1 = wks.Range('A1:A10');
    let r2 = wks.Range('B4:B20');
    let union = app.Union(r1, r2);
    union.Font.Bold = true;

    // refer to multiple ranges using Areas
    WScript.Echo(union.Areas.Count);
})();

// looping through a range of cells -- https://msdn.microsoft.com/en-us/vba/excel-vba/articles/looping-through-a-range-of-cells
(() => {
    let wks = app.ActiveSheet as Excel.Worksheet;

    // using for
    for (let x = 1; x < 20; x++) {
        let currentCell = wks.Cells.Item(x, 1);
        if (Math.abs(currentCell.Value()) < 0.01) {
            // because Value is typed as a method on the Excel.Range class, we have to treat it as a setter with parameters
            ActiveXObject.set(currentCell, 'Value', 0);
        }
    }

    // using Enumerator
    let enumerator = new Enumerator(wks.Cells.Item('A1:D10'));
    enumerator.moveFirst();
    while (!enumerator.atEnd()) {
        let currentCell = enumerator.item();
        if (Math.abs(currentCell.Value) < 0.01) {
            currentCell.Value = 0;
        }
        enumerator.moveNext();
    }

    // using CurrentRegion
    enumerator = new Enumerator(app.ActiveCell.CurrentRegion);
    enumerator.moveFirst();
    while (!enumerator.atEnd()) {
        let cell = enumerator.item();
        if (Math.abs(cell.Value) < 0.01) {
            cell.Value = 0;
        }
        enumerator.moveNext();
    }
})();

// using selection -- https://msdn.microsoft.com/en-us/vba/excel-vba/articles/selecting-and-activating-cells
(() => {
    let wks = app.ActiveWorkbook.Worksheets.Item(1) as Excel.Worksheet;

    // make a worksheet the active worksheet; otherwise code which uses the selection will fail
    wks.Select();

    // select a cell
    wks.Range("A1").Select();
    app.ActiveCell.Font.Bold = true;

    // activate a cell; only a single cell can be active at any given time
    wks.Range("B1").Activate();

    // working with 3-D ranges -- https://msdn.microsoft.com/en-us/vba/excel-vba/articles/working-with-3-d-ranges
    app.Sheets.Item(toSafeArray("Sheet2", "Sheet3", "Sheet4")).Select();
    app.Range("A1:H1").Select();
    (app.Selection as Excel.Range).Borders.Item(Excel.XlBordersIndex.xlEdgeBottom).LineStyle = Excel.XlLineStyle.xlDouble;

    // alternatively, use FillAcrossSheets to fill formatting and data across sheets
    let book = app.ActiveWorkbook;
    let wks2 = book.Sheets.Item("Sheet2") as Excel.Worksheet;
    let rng = wks2.Range("A1:H1");
    rng.Borders.Item(Excel.XlBordersIndex.xlEdgeBottom).LineStyle = Excel.XlLineStyle.xlDouble;
    book.Sheets.FillAcrossSheets(rng);
})();

// prevent duplicate entry -- https://msdn.microsoft.com/en-us/vba/excel-vba/articles/prevent-duplicate-entries-in-a-range
(() => {
    const book = app.Workbooks.Item(1);

    ActiveXObject.on(book, 'SheetChange', ['Sh', 'Target'], function(this, prm) {
        let ws: Excel.Worksheet;
        let EvalRange = this.ActiveSheet.Range("A1:B20");

        // If the cell where the value was entered is not in the defined range, if the value pasted is larger than a single cell, or if no value was entered in the cell, then exit the macro
        if (
            (app.Intersect(prm.Target, EvalRange) == null) ||
            (prm.Target.Cells.Count > 1)
            // VBA has a function called IsEmpty; not sure what the equivalent is in Javascript
        ) { return; }

        // If the value entered already exists in the defined range on the current worksheet, undo and exit
        if (app.WorksheetFunction.CountIf(EvalRange, prm.Target.Value()) > 1) {
            app.EnableEvents = false;
            app.Undo();
            app.EnableEvents = true;
            return;
        }

        let enumerator = new Enumerator(book.Worksheets);
        enumerator.moveFirst();
        while (!enumerator.atEnd()) {
            let wks = enumerator.item() as Excel.Worksheet;
            if (wks.Name === prm.Target.Name) { continue; }

            // If the value entered already exists in the defined range on the current worksheet, undo the entry.
            if (app.WorksheetFunction.CountIf(wks.Range('A1:B20'), prm.Target.Value()) === 0) { continue; }

            app.EnableEvents = false;
            app.Undo();
            app.EnableEvents = true;
        }
    });
})();

// add a unique list of values to a combobox -- https://msdn.microsoft.com/en-us/vba/excel-vba/articles/add-a-unique-list-of-values-to-a-combo-box
(() => {
    (() => {
        // using the AdvancedFilter property
        let book = app.ThisWorkbook;
        let sheet = book.Worksheets.Item("Sheet1") as Excel.Worksheet;
        let dataRange = sheet.Range('A1', sheet.Range("A100").End(Excel.XlDirection.xlUp));
        dataRange.AdvancedFilter(Excel.XlFilterAction.xlFilterCopy, undefined, sheet.Range('L1'), true);
        let data = sheet.Range("L2", sheet.Range('L100').End(Excel.XlDirection.xlUp)).Value() as SafeArray;
        sheet.Range('L1', sheet.Range('L100').End(Excel.XlDirection.xlUp)).ClearContents();

        let combobox = sheet.OLEObjects('ComboBox1').Object as MSForms.ComboBox2;
        combobox.Clear();
        ActiveXObject.set(combobox, 'List', [], data);
        combobox.ListIndex = -1;
    })();

    (() => {
        // using a Dictionary
        let sheet = app.ThisWorkbook.Sheets.Item('Sheet2') as Excel.Worksheet;
        let data = sheet.Range('A2', sheet.Range('A100').End(Excel.XlDirection.xlUp)).Value2 as SafeArray;
        let arr = new VBArray(data).toArray();
        let dict = new ActiveXObject('Scripting.Dictionary');
        arr.forEach(x => ActiveXObject.set(dict, 'Item', [x], true));

        let combobox = sheet.OLEObjects('ComboBox1').Object as MSForms.ComboBox2;
        combobox.Clear();
        let enumerator = new Enumerator(dict.Items());
        enumerator.moveFirst();
        while (!enumerator.atEnd()) {
            combobox.AddItem(enumerator.item());
        }
    })();
})();

// animating a sparkline -- https://msdn.microsoft.com/en-us/vba/excel-vba/articles/animate-a-sparkline
(() => {
    let wks = app.ActiveSheet as Excel.Worksheet;
    let oSparkGroup = wks.Cells.SparklineGroups.Item(1);

    // Set the data source to the first year of data
    oSparkGroup.ModifySourceData('B2:M4');

    // Loop through the data points for the subsequent two years
    for (let i = 1; i <= 24; i++) {
        // Move the reference for the sparkline group over one cell
        oSparkGroup.ModifySourceData(wks.Range(oSparkGroup.SourceData).Offset(0, 1).Address());
        WScript.Sleep(1000);
    }
})();
