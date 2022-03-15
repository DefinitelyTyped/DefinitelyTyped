import { DataTable, DataTableRow } from 'simple-datatables';

// -------
// Options
// -------
const datatable = new DataTable('#myTable', {
    columns: [
        { select: 1, sort: 'asc' },
        { select: 2, type: 'date', format: 'DD/MM/YYYY' },
        { select: [3, 4], sortable: false },
        { select: 5, hidden: true },
        {
            select: 6,
            render: (data, cell, row) => {
                return `${data}<button type='button' data-row='${row.dataIndex}'>Select</button>`;
            },
        },
    ],
    firstLast: false,
    firstText: '&laquo;',
    fixedColumns: true,
    fixedHeight: false,
    footer: false,
    header: true,
    hiddenHeader: false,
    labels: {
        placeholder: 'Search...',
        perPage: '{select} entries per page',
        noRows: 'No entries to found',
        info: 'Showing {start} to {end} of {rows} entries',
    },
    layout: {
        top: '{select}{search}',
        bottom: '{info}{pager}',
    },
    lastText: '&raquo;',
    nextPrev: true,
    nextText: '&rsaquo;',
    paging: true,
    perPage: 10,
    perPageSelect: [5, 10, 15, 20, 25],
    prevText: '&lsaquo;',
    scrollY: '',
    searchable: true,
    sortable: true,
    truncatePager: true,
});

// ------
// Events
// ------
datatable.on('datatable.init', () => {});
datatable.on('datatable.page', page => {});
datatable.on('datatable.sort', (column, direction) => {});
datatable.on('datatable.perpage', perpage => {});
datatable.on('datatable.search', (query, matched) => {});

// ----
// Rows
// ----
datatable.rows().add(['column1', 'column2', 'column3', 'column4']);
datatable.rows().add([
    ['column1', 'column2', 'column3', 'column4'],
    ['column1', 'column2', 'column3', 'column4'],
    ['column1', 'column2', 'column3', 'column4'],
    ['column1', 'column2', 'column3', 'column4'],
]);
datatable.rows().remove(5);
datatable.rows().remove([0, 1, 2, 3, 4]);
datatable.rows().remove(new DataTableRow().dataIndex);

// -------
// Columns
// -------
datatable.columns().add({
    heading: 'Column Heading',
    data: ['Value 1', 'Value 2', 'Value 3'],
});
datatable.columns().add({
    type: 'date',
    format: 'YYYY/MM/DD',
    heading: 'Start Date',
    data: ['1999/10/25', '2000/05/12', '2003/08/01'],
});
datatable.columns().remove(3);
datatable.columns().remove([0, 1]);
datatable.columns().remove(datatable.headings.length - 1);
datatable.columns().hide([0, 1]);
datatable.columns().show([0, 1]);
datatable.columns().visible(3);
datatable.columns().visible([0, 1, 2, 3]);
datatable.columns().visible();
datatable.columns().swap([0, 5]);
datatable.columns().order([1, 3, 4, 2, 0]);

// -----------
// Rest of API
// -----------
datatable.refresh();
datatable.page(1);
datatable.insert([
    {
        'Heading 1': 'Cell 1',
        'Heading 2': 'Cell 2',
        'Heading 3': 'Cell 3',
        'Heading 4': 'Cell 4',
    },
    {
        'Heading 1': 'Cell 5',
        'Heading 2': 'Cell 6',
        'Heading 3': 'Cell 7',
        'Heading 4': 'Cell 8',
    },
]);
datatable.insert({
    headings: ['Name', 'Position', 'Town', 'Ext.', 'Start Date', 'Salary'],
    data: [
        ['Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29', '$433,060'],
        ['Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28', '$162,700'],
    ],
});
datatable.setMessage('message');
datatable.destroy();
datatable.init({});
datatable.export({
    type: 'csv',
    filename: 'my-csv-file',
    selection: datatable.currentPage,
});
datatable.export({
    type: 'sql',
    tableName: 'sql_users',
    selection: [1, 2, 3, 4, 5],
});
datatable.export({
    type: 'json',
});
datatable.export({
    type: 'json',
    skipColumn: [0, 2, 4],
    download: false,
});
datatable.import({
    type: 'csv',
    data: 'Heading 1,Heading 2,Heading 3|Value 1,Value 2,Value 3|Value 4,Value 5,Value 6',
    headings: true,
    lineDelimiter: '|',
    columnDelimiter: ',',
});
