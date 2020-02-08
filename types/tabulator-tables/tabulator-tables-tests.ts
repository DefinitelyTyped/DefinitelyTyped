// tslint:disable:no-object-literal-type-assertion
// tslint:disable:whitespace

// constructor
let table = new Tabulator('#test');
table.copyToClipboard('selected');
table.searchRows('name', '<', 3);
table.setFilter('name', '<=', 3);
table.setFilter([
    { field: 'age', type: '>', value: 52 }, // filter by age greater than 52
    { field: 'height', type: '<', value: 142 }, // and by height less than 142
    { field: 'name', type: 'in', value: ['steve', 'bob', 'jim'] }, // name must be steve, bob or jim
]);
table.setFilter(
    (data, filterParams) => {
        // data - the data for the row being filtered
        // filterParams - params object passed to the filter
        return data.name === 'bob' && data.height < filterParams.height; // must return a boolean, true if it passes the filter.
    },
    { height: 3 },
);
table.setFilter('age', 'in', ['steve', 'bob', 'jim']);
table.setFilter([
    { field: 'age', type: '>', value: 52 }, // filter by age greater than 52
    [
        { field: 'height', type: '<', value: 142 }, // with a height of less than 142
        { field: 'name', type: '=', value: 'steve' }, // or a name of steve
    ],
]);

table
    .setPageToRow(12)
    .then(() => {
        // run code after table has been successfuly updated
    })
    .catch(error => {
        // handle error loading data
    });

table.setGroupBy('gender');
table.setGroupStartOpen(true);

table.setGroupHeader((value, count, data, group) => {
    return '';
});
table.setGroupHeader((value, count, data) => {
    return '';
});

table.setSort([
    { column: 'age', dir: 'asc' }, // sort by this first
    { column: 'height', dir: 'desc' }, // then sort by this second
]);

table
    .scrollToColumn('age', 'middle', false)
    .then(() => {
        // run code after column has been scrolled to
    })
    .catch(error => {
        // handle error scrolling to column
    });

table
    .updateOrAddData([
        { id: 1, name: 'bob' },
        { id: 3, name: 'steve' },
    ])
    .then(rows => {
        // rows - array of the row components for the rows updated or added
        // run code after data has been updated
    })
    .catch(error => {
        // handle error updating data
    });

table.updateData([
    { id: 1, name: 'bob', gender: 'male' },
    { id: 2, name: 'Jenny', gender: 'female' },
]);
table
    .updateData([{ id: 1, name: 'bob' }])
    .then(() => {
        // run code after data has been updated
    })
    .catch(error => {
        // handle error updating data
    });

let row1: Tabulator.RowComponent;
let row2: Tabulator.RowComponent;

// column definitions
let colDef: Tabulator.ColumnDefinition = { title: 'title', field: '' };
colDef.sorter = customSorter;

// prettier-ignore
function customSorter(a: any, b: any, aRow: Tabulator.RowComponent,
    bRow: Tabulator.RowComponent, column: Tabulator.ColumnComponent,
    dir: Tabulator.SortDirection, sorterParams: Tabulator.ColumnDefinitionSorterParams): number {
    return 1;
}

colDef.sorterParams = (col: Tabulator.ColumnComponent, dir: Tabulator.SortDirection) => {
    return {};
};
colDef.sorterParams = { format: 'DD/MM/YY' };
colDef.formatterParams = {
    invalidPlaceholder: val => {
        return '';
    },
};

colDef.formatterParams = cell => {
    // cell - the cell component

    // do some processing and return the param object
    return { param1: 'green' };
};

// List lookup
colDef.formatterParams = {
    small: 'Cute',
    medium: 'Fine',
    big: 2,
    huge: true,
};
// Custom Formatter
colDef.formatter = (cell: Tabulator.CellComponent, formatterParams: {}, onRendered) => {
    onRendered = () => {};
    return '';
};

colDef.editor = true;
colDef.editor = 'number';
colDef.editor = (cell, onRendered, success, cancel, editorParams) => {
    // cell - the cell component for the editable cell
    // onRendered - function to call when the editor has been rendered
    // success - function to call to pass the successfuly updated value to Tabulator
    // cancel - function to call to abort the edit and return to a normal cell
    // editorParams - params object passed into the editorParams column definition property

    // create and style editor
    const editor = document.createElement('input');

    editor.setAttribute('type', 'date');

    // create and style input
    editor.style.padding = '3px';
    editor.style.width = '100%';
    editor.style.boxSizing = 'border-box';

    // Set value of editor to the current value of the cell
    editor.value = moment(cell.getValue(), 'DD/MM/YYYY');

    // set focus on the select box when the editor is selected (timeout allows for editor to be added to DOM)
    onRendered(() => {
        editor.focus();
        editor.style.cssText = '100%';
    });

    // when the value has been set, trigger the cell to update
    function successFunc() {
        success(moment(editor.value, 'YYYY-MM-DD'));
    }

    editor.addEventListener('change', successFunc);
    editor.addEventListener('blur', successFunc);

    // return the editor element
    return editor;
};
// Dummy function
function moment(a: any, b: any) {
    return '';
}

colDef.cellClick = (_e, cell) => {
    console.log(cell.checkHeight);
};

colDef.formatterParams = { stars: 3 };

colDef.editorParams = {};
colDef.editorParams = {
    values: [
        {
            // option group
            label: 'Men',
            options: [
                // options in option group
                {
                    label: 'Steve Boberson',
                    value: 'steve',
                },
                {
                    label: 'Bob Jimmerson',
                    value: 'bob',
                },
            ],
        },
        {
            // option group
            label: 'Women',
            options: [
                // options in option group
                {
                    label: 'Jenny Jillerson',
                    value: 'jenny',
                },
                {
                    label: 'Jill Betterson',
                    value: 'jill',
                },
            ],
        },
        {
            // ungrouped option
            label: 'Other',
            value: 'other',
        },
    ],
};

let selectParamValues: Tabulator.JSONRecord;
selectParamValues = {
    steve: 'Steve Boberson',
    bob: 'Bob Jimmerson',
    jim: true,
};
colDef.editorParams = {
    values: selectParamValues,
};

colDef.editorParams = cell => {
    return {};
};

let autoComplete: Tabulator.AutoCompleteParams = {
    showListOnEmpty: true, // show all values when the list is empty,
    freetext: true, // allow the user to set the value of the cell to a free text entry
    allowEmpty: true, // allow empty string values
    searchFunc: (term, values) => {
        // search for exact matches
        const matches: string[] = [];
        return matches;
    },
    listItemFormatter: (value, title) => {
        // prefix all titles with the work "Mr"
        return 'Mr ' + title;
    },
    values: true, // create list of values from all values contained in this column
};
colDef.editorParams = autoComplete;

colDef.editorParams = {
    values: [
        {
            // option group
            label: 'Men',
            options: [
                // options in option group
                {
                    label: 'Steve Boberson',
                    value: 'steve',
                },
                {
                    label: 'Bob Jimmerson',
                    value: 'bob',
                },
            ],
        },
        {
            // option group
            label: 'Women',
            options: [
                // options in option group
                {
                    label: 'Jenny Jillerson',
                    value: 'jenny',
                },
                {
                    label: 'Jill Betterson',
                    value: 'jill',
                },
            ],
        },
        {
            // ungrouped option
            label: 'Other',
            value: 'other',
        },
    ],
};

// Validators
colDef.validator = {
    type: (cell, value, parameters) => {
        return true;
    },
    parameters: {
        divisor: 5,
    },
};
colDef.validator = 'float';
colDef.validator = { type: 'float', parameters: {} };

let validators: Tabulator.Validator[] = [
    { type: 'integer', parameters: {} },
    {
        type: (cell, value, parameters) => {
            return true;
        },
        parameters: {},
    },
];

colDef.headerFilterFunc = '!=';
colDef.headerFilterFunc = (headerValue, rowValue, rowData, filterParams) => {
    return rowData.name === filterParams.name && rowValue < headerValue; // must return a boolean, true if it passes the filter.
};

// Cell Component

let cell = <Tabulator.CellComponent>{};
cell.nav().down();

let data = cell.getData();
table = cell.getTable();

// Row Component
let row = <Tabulator.RowComponent>{};
row.delete()
    .then(() => {
        // run code after row has been deleted
    })
    .catch(error => {
        // handle error deleting row
    });

// Options
let options = <Tabulator.Options>{};
options.keybindings = {
    navPrev: 'ctrl + 1',
    navNext: false,
};

options.downloadDataFormatter = data => {
    //  data.forEach(function(row){
    //    row.age = row.age >= 18 ? "adult" : "child";
};

options.downloadConfig = {
    columnGroups: false, // include column groups in column headers for download
    rowGroups: false, // do not include row groups in download
    columnCalcs: false, // do not include column calculation rows in download
};

options.ajaxConfig = 'GET';
options.ajaxConfig = {
    mode: 'cors', // set request mode to cors
    credentials: 'same-origin', // send cookies with the request from the matching origin
    headers: {
        Accept: 'application/json', // tell the server we need JSON back
        'X-Requested-With': 'XMLHttpRequest', // fix to help some frameworks respond correctly to request
        'Content-type': 'application/json; charset=utf-8', // set the character encoding of the request
        'Access-Control-Allow-Origin': 'http:// yout-site.com', // the URL origin of the site making the request
    },
};
options.ajaxConfig = {
    method: 'POST', // set request type to Position
    headers: {
        'Content-type': 'application/json; charset=utf-8', // set specific content type
    },
};

options.ajaxContentType = {
    headers: {
        'Content-Type': 'text/html',
    },
    body: (url, config, params) => {
        // url - the url of the request
        // config - the fetch config object
        // params - the request parameters

        // return comma list of params:values
        const output = [];

        for (const key in params) {
            output.push(`${key} ":" ${params[key]}`);
        }

        return output.join(',');
    },
};

options.initialSort = [
    { column: 'name', dir: 'asc' },
    { column: 'name2', dir: 'desc' },
];
options.initialFilter = [{ field: 'color', type: '=', value: 'red' }];
options.initialHeaderFilter = [
    { field: 'color', value: 'red' }, // set the initial value of the header filter to "red"
];

options.groupValues = [
    ['red', 'blue', 'green'], // create groups for color values of "red", "blue", and "green",
    [10, 20, 30], // create sub groups for ages of 10, 20 and 30
];

options.groupHeader = (value, count, data, group) => {
    // value - the value all members of this group share
    // count - the number of rows in this group
    // data - an array of all the row data objects in this group
    // group - the group component for the group

    return `${value} <span style='color:#d00; margin-left:10px;'>(${count}item)</span>`;
};

options.groupHeader = [
    (value, count, data) => {
        // generate header contents for gender groups
        return `${value} <span style='color:#d00; margin-left:10px;'>(${count}item)</span>`;
    },
    (value, count, data) => {
        // generate header contents for color groups
        return `${value} <span style='color:#0dd; margin-left:10px;'>(${count}item)</span>`;
    },
];

options.paginationDataReceived = {
    last_page: 'max_pages',
    a: 'b',
};

options.clipboardPasteParser = clipboard => {
    return []; // return array
};

options.cellEditing = cell => {
    console.log(cell);
};

// 4.3 updates
table = new Tabulator('#test', {
    headerVisible: false,
    printHeader: () => {
        return 'Header';
    },
});
colDef.editorParams = { search: true };
table.getHtml(true, true, { columnCalcs: true });

table.download('pdf', 'data.pdf', {
    documentProcessing: doc => {},
});

table.download('pdf', 'data.pdf', {
    orientation: 'portrait',
    autoTable: doc => {
        doc.text('SOME TEXT', 1, 1);
        return {
            styles: {
                fillColor: [200, 00, 00],
            },
        };
    },
});

table.download('pdf', 'data.pdf', {
    orientation: 'portrait',
    title: 'Dynamics Quotation Report',
    jsPDF: {
        unit: 'in',
    },
    autoTable: {
        styles: {
            fillColor: [100, 255, 255],
        },
        columnStyles: {
            id: { fillColor: 255 },
        },
        margin: { top: 60 },
    },
});

table.download('xlsx', 'AllData.xlsx');
table.download('csv', 'data.csv', { bom: true });
table.download('csv', 'data.csv', { delimiter: '.' });

// 4.4 updates
table.moveColumn('name', 'age', true);

let column = {} as Tabulator.ColumnComponent;
column.move('age', true);

colDef.editorParams = {
    elementAttributes: {
        '+style': 'background-color:#f00;',
        maxlength: '10',
    },
};

colDef.editorParams = {
    values: ['red', 'green', 'blue'],
    defaultValue: 'green',
};

colDef.editorParams = {
    values: 'color',
    defaultValue: 'green',
};

colDef.clipboard = false;

let group = {} as Tabulator.GroupComponent;
let field = group.getField();

options.tabEndNewRow = true;
options.tabEndNewRow = { name: 'steve', age: 62 };
options.tabEndNewRow = row => {
    return { name: 'steve', age: 62 };
};

options.headerSort = false;
options.headerSortTristate = true;

colDef.formatter = 'rowSelection';

options.invalidOptionWarnings = false;

colDef.editor = (cell, onRendered, success, cancel, editorParams) => {
    const editor = document.createElement('input');
    const successful: boolean = success('test');
    return editor;
};

let groupColDef: Tabulator.ColumnDefinition = {
    title: 'Full name',
    field: '',
    columns: [
        { title: 'First name', field: '' },
        { title: 'Last name', field: '' },
    ],
};

// Persistence
table = new Tabulator('#example-table', {
    persistence: true, // enable table persistence
});

table = new Tabulator('#example-table', {
    persistence: {
        sort: true, // persist column sorting
        filter: true, // persist filter sorting
        group: true, // persist row grouping
        page: true, // persist page
        columns: true, // persist columns
    },
});

table = new Tabulator('#example-table', {
    persistence: {
        group: {
            groupBy: true, // persist only the groupBy setting
            groupStartOpen: false,
            groupHeader: false,
        },
    },
});

table = new Tabulator('#example-table', {
    persistence: {
        page: {
            size: true, // persist the current page size
            page: false, // do not persist the current page
        },
    },
});

table = new Tabulator('#example-table', {
    persistence: {
        columns: ['width', 'visible', 'frozen'], // persist changes to the width, visible and frozen properties
    },
});

table = new Tabulator('#test', {
    blockRedraw: () => {},
    restoreRedraw: () => {},
});

table = Tabulator.prototype.findTable('#example-table');

table.getRows('visible');
table.deleteRow([15, 7, 9]);

table.addColumn({} as Tabulator.ColumnDefinition).then(() => {});

table.deleteColumn('name').then(() => {});

table
    .updateColumnDefinition('age', { title: 'Updated Title', frozen: true })
    .then(() => {
        // run code after column has been scrolled to
    })
    .catch(error => {
        // handle error scrolling to column
    });

column.updateDefinition({ title: 'Updated' });
table.selectRow('visible');
table.download('csv', 'data.csv', { delimiter: '.' }, 'visible');
table.download('html', 'data.html');
table.download('html', 'data.html', { style: true });
table.download('xlsx', 'data.xlsx', {
    documentProcessing: workbook => {
        return workbook;
    },
});

table = new Tabulator('#example-table', {
    scrollVertical: () => {},
    scrollHorizontal: () => {},
});
