import VoilabPdfTable = require('voilab-pdf-table');
import PdfKit = require('pdfkit');
import PluginFitColumn = require('voilab-pdf-table/plugins/fitcolumn');
import PluginRowShader = require('voilab-pdf-table/plugins/rowshader');

const doc = new PdfKit();

interface SampleDataType {
    name: string;
    price: number;
    qty: number;
}
const tableWithoutT = new VoilabPdfTable(doc);
tableWithoutT.onBodyAdd((tbl, data) => {
    tbl; // $ExpectType VoilabPdfTable<VoilabPdfTableDefaultType>
    data; // $ExpectType VoilabPdfTableDefaultType[]
    data[0].a; // $ExpectType string | number | undefined
    data[0].b; // $ExpectType string | number | undefined
});

const tableWithoutConf = new VoilabPdfTable<SampleDataType>(doc);
const table = new VoilabPdfTable<SampleDataType>(doc, {
    bottomMargin: 1,
    columns: [
        {
            id: 'name',
            header: 'Name',
            headerRenderer: (tbl, header) => {
                tbl; // $ExpectType VoilabPdfTable<SampleDataType>
                header; // $ExpectType VoilabPdfTableHeader<SampleDataType>
            },
            headerFill: true,
            headerCellAdded: (tbl, header) => {
                tbl; // $ExpectType VoilabPdfTable<SampleDataType>
                header; // $ExpectType VoilabPdfTableHeader<SampleDataType>
            },
            headerBorder: 'T',
            headerHeight: 1,
        },
    ],
});

table
    .onBodyAdd((table, data) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        data; // $ExpectType SampleDataType[]
    })
    .onBodyAdded((table, data) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        data; // $ExpectType SampleDataType[]
    })
    .onRowAdd((table, row) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        row; // $ExpectType SampleDataType
    })
    .onRowAdded((table, row) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        row; // $ExpectType SampleDataType
    })
    .onHeaderAdd((table, header) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        header; // $ExpectType VoilabPdfTableHeader<SampleDataType>
    })
    .onHeaderAdded((table, header) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        header; // $ExpectType VoilabPdfTableHeader<SampleDataType>
    })
    .onPageAdd((table, row) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        row; // $ExpectType SampleDataType
    })
    .onPageAdded((table, row) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        row; // $ExpectType SampleDataType
    })
    .onRowHeightCalculate((table, data) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        data; // $ExpectType SampleDataType[]
    })
    .onRowHeightCalculated((table, data) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        data; // $ExpectType SampleDataType[]
    })
    .onHeaderHeightCalculate((table, data) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        data; // $ExpectType VoilabPdfTableHeader<SampleDataType>
    })
    .onHeaderHeightCalculated((table, data) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        data; // $ExpectType VoilabPdfTableHeader<SampleDataType>
    })
    .onColumnAdded((table, column) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        column; // $ExpectType VoilabPdfTableColumn<SampleDataType>
    })
    .onCellBackgroundAdd((table, column) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        column; // $ExpectType VoilabPdfTableColumn<SampleDataType>
    })
    .onCellBackgroundAdded((table, column) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        column; // $ExpectType VoilabPdfTableColumn<SampleDataType>
    })
    .onCellBorderAdd((table, column) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        column; // $ExpectType VoilabPdfTableColumn<SampleDataType>
    })
    .onCellBorderAdded((table, column) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        column; // $ExpectType VoilabPdfTableColumn<SampleDataType>
    })
    .onColumnPropertyChanged((table, column) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        column; // $ExpectType VoilabPdfTableColumn<SampleDataType>
    });

const fitColumnCfg: PluginFitColumn.VoilabPdfTablePluginFitColumnConf<SampleDataType> = {
    column: 'price',
};

const rowShaderCfg: PluginRowShader.VoilabPdfTablePluginRowShaderConf = {
    textColor: '#000000',
    offsetHeader: false,
};

table
    .addPlugin(new PluginFitColumn(fitColumnCfg))
    .addPlugin(new PluginRowShader(rowShaderCfg))
    .getPlugin('fitcolumn')
    .removePlugin('fitcolumn');

table.setShowHeaders(true);

// Can't have any headerX options without providing the header property
// $ExpectError
table.addColumn({
    id: 'price',
    headerFill: true,
});

table.addColumn({
    id: 'price',
});

table.setColumnsDefaults({
    align: 'left',
    border: 'T',
    header: 'something',
    headerBorder: 'T',
});

// Make sure we can send headerX
// even without header in this method
table.setColumnsDefaults({
    align: 'left',
    border: 'T',
    headerBorder: 'B',
});

table.addColumns([
    {
        id: 'qty',
    },
]);

table.setColumns(
    [
        {
            id: 'qty',
        },
    ],
    true,
);

table.setColumns([
    {
        id: 'qty',
    },
]);

table.setColumns([
    {
        id: 'invalid', // $ExpectError
    },
]);

table.getColumns(); // $ExpectType VoilabPdfTableColumn<SampleDataType>[]
table.getColumn('name'); // $ExpectType VoilabPdfTableColumn<SampleDataType>
table.getColumn('invalid'); // $ExpectError

table.getColumnWidthBetween('name', 'qty'); // $ExpectType number
table.getColumnWidthBetween('invalid', 'other'); // $ExpectError

table.getColumnWidthUntil('name'); // $ExpectType number
table.getColumnWidthUntil('invalid'); // $ExpectError

table.getColumnWidthFrom('name'); // $ExpectType number
table.getColumnWidthFrom('invalid'); // $ExpectError

table.getWidth(); // $ExpectType number

table.getColumnWidth('name'); // $ExpectType number
table.getColumnWidth('invalid'); // $ExpectError

table.setColumnWidth('name', 100);
table.setColumnWidth('name', 100, true);
table.setColumnWidth('invalid', 100, true); // $ExpectError

table.getColumnParam('name', 'header'); // $ExpectType string | undefined
table.getColumnParam('name', 'height'); // $ExpectType number | undefined

table.setColumnParam('name', 'height', 100);
table.setColumnParam('name', 'height', 100, true);

table.addBody([
    {
        name: 'someName',
        price: 10,
        qty: 1,
    },
    {
        name: 'otherName',
        price: 5,
        qty: 100,
    },
]);

table.addBody([
    {
        name: 'someName',
        price: 10,
        qty: 1,
        invalid: 1, // $ExpectError
    },
]);

table.addHeader();
table.addHeader(1);
