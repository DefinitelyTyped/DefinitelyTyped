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
    .onRowAdd((table, row, rowIdx) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        row; // $ExpectType SampleDataType
        rowIdx; // $ExpectType number
    })
    .onRowAdded((table, row, rowIdx) => {
        table; // $ExpectType VoilabPdfTable<SampleDataType>
        row; // $ExpectType SampleDataType
        rowIdx; // $ExpectType number
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

table.pdf; // $ExpectType PDFDocument

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
// @ts-expect-error
table.addColumn({
    id: 'price',
    headerFill: true,
});

table.addColumn({
    id: 'price',
});

table.setColumnsDefaults({
    align: 'left',
    valign: 'center',
    border: 'T',
    header: 'something',
    headerBorder: 'T',
    headerPadding: [1],
});

// Make sure we can send headerX
// even without header in this method
table.setColumnsDefaults({
    align: 'left',
    border: 'T',
    headerBorder: 'B',
    headerPadding: [1, 2],
});

table.setColumnsDefaults({
    align: 'left',
    border: 'T',
    headerBorder: 'B',
    headerPadding: [1, 2, 3, 4],
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
        // @ts-expect-error
        id: 'invalid',
    },
]);

table.getColumns(); // $ExpectType VoilabPdfTableColumn<SampleDataType>[]
table.getColumn('name'); // $ExpectType VoilabPdfTableColumn<SampleDataType>
// @ts-expect-error
table.getColumn('invalid');

table.getColumnWidthBetween('name', 'qty'); // $ExpectType number
// @ts-expect-error
table.getColumnWidthBetween('invalid', 'other');

table.getColumnWidthUntil('name'); // $ExpectType number
// @ts-expect-error
table.getColumnWidthUntil('invalid');

table.getColumnWidthFrom('name'); // $ExpectType number
// @ts-expect-error
table.getColumnWidthFrom('invalid');

table.getWidth(); // $ExpectType number

table.getColumnWidth('name'); // $ExpectType number
// @ts-expect-error
table.getColumnWidth('invalid');

table.setColumnWidth('name', 100);
table.setColumnWidth('name', 100, true);
// @ts-expect-error
table.setColumnWidth('invalid', 100, true);

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
        // @ts-expect-error
        invalid: 1,
    },
]);

table.addHeader();
table.addHeader(1);
