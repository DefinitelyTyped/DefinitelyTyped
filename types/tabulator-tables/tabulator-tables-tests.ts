import {
    Tabulator,
    Renderer,
    Module,
    DataTreeModule,
    TabulatorFull,
    TooltipModule,
    CalculationComponent,
    CellComponent,
    ColumnComponent,
    ColumnDefinition,
    ColumnDefinitionSorterParams,
    GroupComponent,
    MenuObject,
    MenuSeparator,
    RowComponent,
    SorterFromTable,
    Validator,
    SortDirection,
    JSONRecord,
    Options,
    ListEditorParams,
} from 'tabulator-tables';

// tslint:disable:no-object-literal-type-assertion
// tslint:disable:whitespace
// tslint:disable:prefer-const

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
        // run code after table has been successfully updated
    })
    .catch(error => {
        // handle error loading data
    });

table.setGroupBy('gender');
table.setGroupBy(['gender', 'age']);
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

let row1: RowComponent;
let row2: RowComponent;

// column definitions
let colDef: ColumnDefinition = { title: 'title', field: '' };
colDef.sorter = customSorter;

// prettier-ignore
function customSorter(a: any, b: any, aRow: RowComponent,
    bRow: RowComponent, column: ColumnComponent,
    dir: SortDirection, sorterParams: ColumnDefinitionSorterParams): number {
    return 1;
}

colDef.sorterParams = (col: ColumnComponent, dir: SortDirection) => {
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
colDef.formatter = (cell: CellComponent, formatterParams: {}, onRendered) => {
    onRendered = () => {};
    return '';
};

colDef.editor = true;
colDef.editor = 'number';
colDef.editor = (cell, onRendered, success, cancel, editorParams) => {
    // cell - the cell component for the editable cell
    // onRendered - function to call when the editor has been rendered
    // success - function to call to pass the successfully updated value to Tabulator
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

colDef.cellClick = (_e: UIEvent, cell) => {
    console.log(cell.checkHeight);
};

colDef.formatterParams = { stars: 3 };

colDef.formatterParams = { url: cell => `${cell.getValue()}` };

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
            // Un-grouped option
            label: 'Other',
            value: 'other',
        },
    ],
};

let selectParamValues: JSONRecord;
selectParamValues = {
    steve: 'Steve Boberson',
    bob: 'Bob Jimmerson',
    jim: true,
};
colDef.editorParams = {
    values: selectParamValues,
};

let listEditor: ListEditorParams = {
    values: ['red', 'green', 'blue'],
    valuesURL: 'http://myvalues.com',
    valuesLookup: 'active',
    valuesLookupField: 'color',
    clearable: true,
    itemFormatter: (label, value, item, element) => {
        return '<strong>';
    },
    verticalNavigation: 'hybrid',
    sort: 'asc',
    defaultValue: 'Steve Johnson',
    emptyValue: null,
    maxWidth: true,
    placeholderLoading: 'Loading List...',
    placeholderEmpty: 'No Results Found',
    multiselect: true,
    autocomplete: true,
    filterFunc: (term, label, value, item) => {
        return label === term;
    },
    filterRemote: true,
    filterDelay: 100,
    allowEmpty: true,
    listOnEmpty: true,
    mask: 'AAA-999',
    freetext: true,
};

colDef.editorParams = listEditor;

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
            // Un-grouped option
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

let validators: Validator[] = [
    { type: 'integer', parameters: {} },
    {
        type: (cell, value, parameters) => {
            return true;
        },
        parameters: {},
    },
];

colDef.headerFilterFunc = (headerValue, rowValue, rowData, filterParams) => {
    return rowData.name === filterParams.name && rowValue < headerValue; // must return a boolean, true if it passes the filter.
};

// Calculation
colDef.bottomCalc = (values, data, calcParams) => {
    return {};
};

colDef.bottomCalcFormatter = (cell, formatterParams, onRendered) => {
    return '';
};

colDef.tooltip = (event: MouseEvent, cell: CellComponent, onRendered: (callback: () => void) => void) => {
    onRendered(() => {
        console.log('rendering occured');
    });
    return cell.getValue();
};

// Cell Component

let cell = <CellComponent>{};

let data = cell.getData();
table = cell.getTable();

// Row Component
let row = <RowComponent>{};
row.delete()
    .then(() => {
        // run code after row has been deleted
    })
    .catch(error => {
        // handle error deleting row
    });

// Options
let options = <Options>{};
options.keybindings = {
    navPrev: 'ctrl + 1',
    navNext: false,
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
table.getHtml('all', true, { columnCalcs: true });

table.download('pdf', 'data.pdf', {
    documentProcessing: doc => {},
});

table.download('pdf', 'data.pdf', {
    orientation: 'portrait',
    autoTable: doc => {
        doc.text('SOME TEXT', 1, 1);
        return {
            styles: {
                fillColor: [200, 40, 40],
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

let column = {} as ColumnComponent;
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

let group = {} as GroupComponent;
let field = group.getField();

options.tabEndNewRow = true;
options.tabEndNewRow = { name: 'steve', age: 62 };
options.tabEndNewRow = row => {
    return { name: 'steve', age: 62 };
};

options.headerSort = false;

colDef.formatter = 'rowSelection';

options.invalidOptionWarnings = false;

colDef.editor = (cell, onRendered, success, cancel, editorParams) => {
    const editor = document.createElement('input');
    const successful: boolean = success('test');
    return editor;
};

let groupColDef: ColumnDefinition = {
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

table = new Tabulator('#test', {});
table.blockRedraw();
table.restoreRedraw();

table.getRows('visible');
table.deleteRow([15, 7, 9]);

table.addColumn({} as ColumnDefinition).then(() => {});

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

// 4.6 updates
const rowContextMenu: Array<MenuObject<RowComponent> | MenuSeparator> = [
    {
        label: 'Remove row',
        action: (e, row) => {
            row.delete();
        },
    },
    { separator: true },
    {
        disabled: true,
        label: component => {
            return 'Move Row';
        },
        action: (e, row) => {
            row.move(1, true);
        },
    },
];

const headerMenu: Array<MenuObject<ColumnComponent> | MenuSeparator> = [
    {
        label: 'Remove Column',
        action: (e, column) => {
            column.delete();
        },
    },
    { separator: true },
    {
        disabled: true,
        label: component => {
            return 'Move Column';
        },
        action: (e, column) => {
            column.move('col', true);
        },
    },
];

const headerContextMenu: Array<MenuObject<ColumnComponent> | MenuSeparator> = [
    {
        label: 'Hide Column',
        action: (e, column) => {
            column.hide();
        },
    },
];

const contextMenu: Array<MenuObject<CellComponent> | MenuSeparator> = [
    {
        label: 'Restore previous value',
        action: (e, cell) => {
            cell.restoreOldValue();
        },
    },
];

table = new Tabulator('#example-table', {
    maxHeight: '100%',
    minHeight: 300,
    rowContextMenu,
    clipboardCopyConfig: {
        columnHeaders: false,
        columnGroups: false,
        rowGroups: false,
        columnCalcs: false,
        dataTree: false,
        formatCells: false,
    },
    clipboardCopyRowRange: 'selected',
    clipboardCopyFormatter: (type, output) => {
        return output;
    },
    printRowRange: () => {
        return [];
    },
    rowFormatterPrint: row => {},
    rowFormatterHtmlOutput: row => {},
    headerFilterLiveFilterDelay: 600,
    columns: [
        {
            title: 'Name',
            field: 'name',
            width: 200,
            headerMenu,
            headerContextMenu,
            contextMenu,
            vertAlign: 'bottom',
            hozAlign: 'right',
            accessorHtmlOutput: (value, data, type, params, column) => {
                if (column) {
                    const filterVal = column.getHeaderFilterValue();
                }
                return value >= params.legalAge;
            },
            accessorHtmlOutputParams: { legalAge: 18 },
        },
    ],
});
const filterVal = table.getHeaderFilterValue('name');
table.recalc();
const columns = table.getColumns(true);
columns.forEach(col => col.getDefinition());

// 4.7 updates

table = new Tabulator('#example-table', {
    movableRowsElementDrop: (e, element, row) => {},
    downloadRowRange: 'selected',
    layout: 'fitDataTable',
    validationMode: 'highlight',
    paginationSizeSelector: [10, 25, 50, 100, true],
    groupHeader: (value, count, data, group) => {
        return '';
    },
    groupHeaderPrint: (value, count, data, group) => {
        return '';
    },
    groupHeaderClipboard: (value, count, data, group) => {
        return '';
    },
    groupHeaderHtmlOutput: (value, count, data, group) => {
        return '';
    },
    langs: {
        en: {
            pagination: {
                all: 'All',
                page_title: 'Show Page',
            },
        },
    },
    groupContextMenu: [
        {
            label: 'Hide Group',
            action: (e, group) => {
                group.hide();
            },
        },
    ],
});
table.clearCellEdited();
cell.clearEdited();
table.getEditedCells();
table.setFilter('colors', 'keywords', 'red green blue', { matchAll: true });
row.addTreeChild({ name: 'Billy Bob', age: '12', gender: 'male', height: 1 }, true);
column.isVisible();
column.setWidth(true);
table.getInvalidCells();
cell.isValid();
cell.clearValidation();
table.clearCellValidation();
table.validate();
row.validate();
column.validate();
cell.validate();
table.addColumn({
    title: 'Example',
    field: 'example',
    validator: 'starts:bob',
    titlePrint: 'Example',
    titleHtmlOutput: 'User Age',
});
table.addColumn({
    title: 'Example',
    field: 'example',
    formatter: 'datetime',
    formatterParams: {
        outputFormat: 'DD/MM/YY HH:ii',
        timezone: 'America/Los_Angeles',
    },
});
row.isFrozen();

// 4.8

table = new Tabulator('#example-table', {
    textDirection: 'rtl',
    autoColumnsDefinitions: () => {
        const columnDefinitions: ColumnDefinition[] = [];
        return columnDefinitions;
    },
});

table = new Tabulator('#example-table', {
    autoColumnsDefinitions: {
        name: { editor: 'input' },
        age: { headerFilter: true },
        myProp: { title: 'my title' },
    },
});

let colDefs: ColumnDefinition[] = [];
colDefs.push({
    field: 'name',
    title: 'input',
    clickMenu: contextMenu,
    titleFormatterParams: { rowRange: 'active' },
    accessor: (value, data, type, params, column, row) => {
        return Math.floor(value);
    },
    accessorParams: (value, data, type, component, row) => {
        return { param1: 'green' };
    },
});

const groupContextMenu: Array<MenuObject<GroupComponent> | MenuSeparator> = [{ separator: true }];

table = new Tabulator('#example-table', {
    autoColumnsDefinitions: colDefs,

    rowContextMenu: (e: MouseEvent, component) => {
        component.delete();
        return false;
    },
    rowClickMenu: rowContextMenu,
    groupClickMenu: groupContextMenu,
    headerSortElement: "<i class='fas fa-arrow-up'></i>",
    dataTreeFilter: false,
    dataTreeSort: false,
    groupUpdateOnCellEdit: true,
    dataChanged: data => {},
});

table.setGroupValues([['male', 'female', 'smizmar']]);
table.getData('all');
table.getDataCount('all');
table.getRows('all');
table.selectRow('all');

row.getData();
row.getElement();
row.getTable();
row.getCells();
row.getCell(column);
row.isTreeExpanded();

let calcComponent = {} as CalculationComponent;
calcComponent.getData();
calcComponent.getElement();
calcComponent.getTable();
calcComponent.getCells();
calcComponent.getCell(column);

// 4.9
const rowContextMenu2: Array<MenuObject<ColumnComponent>> = [
    {
        label: 'Hide Column',
        action: (e, column) => {
            column.hide();
        },
    },
    {
        label: 'Sub Menu',
        menu: [
            {
                label: 'Do Something',
                action: (e, column) => {
                    column.delete();
                },
            },
            {
                label: 'Do Something 2',
                action: (e, column) => {
                    column.delete();
                },
            },
            {
                label: 'Deeper Sub Menu',
                menu: [
                    {
                        label: 'Do Something 3',
                        action: (e, column) => {
                            column.delete();
                        },
                    },
                ],
            },
        ],
    },
];

colDef.formatterParams = {
    urlPrefix: 'http://',
    urlSuffix: '.png',
};

table.refreshFilters();
table.clearHistory();

colDef.maxWidth = 300;
colDef.maxWidth = false;

// 5.0
Tabulator.defaultOptions.movableRows = true;
Tabulator.extendModule('format', 'formatters', {});

class CustomRenderer extends Renderer {}

table = new Tabulator('#test', {
    renderVertical: 'virtual',
    renderHorizontal: CustomRenderer,
    renderVerticalBuffer: 300,
    dataLoaderError: 'Error Loading Data',
    dataLoaderLoading: 'Data Loading',
    dataLoader: false,
    sortMode: 'remote',
    pagination: true,
    paginationMode: 'remote',
    filterMode: 'remote',
    dataSendParams: {
        page: 'current_page',
        size: 'page_size',
    },
    dataReceiveParams: {
        last_page: 'last',
        size: 'page_data',
    },
    progressiveLoad: 'scroll',
    progressiveLoadDelay: 400,
    progressiveLoadScrollMargin: 300,
    columnDefaults: {
        width: 200,
        title: 'test',
    },
    invalidOptionWarning: false,
    debugInvalidOptions: false,
    debugInitialization: true,
    debugEventsExternal: false,
    debugEventsInternal: false,
});

const dataProcessedEvent = () => {};

table.on('dataLoading', dataProcessedEvent);
table.on('dataLoaded', () => {});
table.on('dataLoadError', () => {});
table.on('dataProcessing', () => {});
table.on('dataProcessed', () => {});
table.on('rowMoving', () => {});
table.off('dataProcessed');
table.off('dataProcessed', dataProcessedEvent);
table.off('rowMoving', () => {});
table.on('cellClick', () => {});
table = Tabulator.findTable('#example-table')[0];
table = TabulatorFull.findTable('#example-table')[0];

Tabulator.bindModules([Renderer]);
cell.navigateDown();

class CustomModule extends Module {
    constructor(table: Tabulator) {
        super(table);
    }

    initialize() {}
}

CustomModule.moduleName = 'custom';
Tabulator.registerModule([CustomModule, DataTreeModule]);

const sortHandler = {} as (sorters: SorterFromTable[]) => void;
table = new Tabulator('#test', {
    dataSorting: sortHandler,
    dataSorted: sortHandler,
});
table.on('dataSorting', ([sorter]) => sorter.field);
table.on('dataSorted', ([sorter]) => sorter.field);

Tabulator.registerModule([TooltipModule]);

table.import('json', '.json');

// 5.2
table = new Tabulator('#test', {
    popupContainer: true,
    // test editor of type 'list' supported.
    columns: [
        {
            field: 'test_editor',
            title: 'Test Editor',
            editor: 'list',
        },
    ],
});

// 5.3
options = {
    debugInvalidComponentFunc: false,
    debugDeprecation: false,
};

table = new Tabulator('#test', {
    columns: [
        {
            field: 'test_editor',
            title: 'Date Editor',
            editor: 'date',
            editorParams: {
                min: '01/01/2020', // the minimum allowed value for the date picker
                max: '02/12/2022', // the maximum allowed value for the date picker
                format: 'dd/MM/yyyy', // the format of the date value stored in the cell
                elementAttributes: {
                    title: 'slide bar to choose option', // custom tooltip
                },
            },
        },
        {
            field: 'test_editor',
            title: 'Time Editor',
            editor: 'time',
            editorParams: {
                format: 'dd/MM/yyyy',
            },
        },
        {
            title: 'id',
            field: 'id',
            download: _column => {
                // column - column component for current column

                return true; // make column visible in download
            },
        },
        {
            title: 'id',
            field: 'id',
            clipboard: _column => {
                // column - column component for current column

                return true; // make column visible in clipboard data
            },
        },
        {
            title: 'id',
            field: 'id',
            print: _column => {
                // column - column component for current column

                return true; // make column visible in clipboard data
            },
        },
        {
            title: 'id',
            field: 'id',
            htmlOutput: _column => {
                // column - column component for current column

                return true; // make column visible in clipboard data
            },
        },
    ],
    downloadEncoder: (fileContents, mimeType) => {
        // fileContents - the unencoded contents of the file
        // mimeType - the suggested mime type for the output

        // custom action to send blob to server could be included here

        return new Blob([fileContents], { type: mimeType }); // must return a blob to proceed with the download, return false to abort download
    },
});

// 5.3 Testing ColumnDefinition.headerMenuIcon
const headerMenuForIconTest: Array<MenuObject<ColumnComponent> | MenuSeparator> = [
    {
        label: 'Hide Column',
        action(e, column) {
            column.hide();
        },
    },
];
let headerMenuIconElement = document.createElement('span');
headerMenuIconElement.innerText = 'Filter';

table = new Tabulator('#testHeaderMenuIcon', {
    columns: [
        {
            field: 'test_inline',
            title: 'Test inline',
            headerMenuIcon: "<i class='fas fa-filter'></i>",
            headerMenu: headerMenuForIconTest,
        },
        {
            field: 'test_element',
            title: 'Test DOM Element',
            headerMenuIcon: headerMenuIconElement,
            headerMenu: headerMenuForIconTest,
        },
        {
            field: 'test_function',
            title: 'Test function',
            headerMenuIcon(component) {
                return "<i class='fas fa-filter'></i>";
            },
            headerMenu: headerMenuForIconTest,
        },
    ],
});

// 5.4

table = new Tabulator('#test', {
    headerSortClickElement: 'icon',
    groupDblClickPopup: 'Im a Popup',
    rowDblClickPopup: 'Im a Popup',
    rowDblClickMenu: [
        {
            label: 'Delete Row',
            action: (e, row) => {
                row.delete();
            },
        },
    ],
    columns: [
        {
            field: 'test_editor',
            title: 'Time Editor',
            editor: 'time',
            dblClickPopup: 'Im a Popup',
            headerDblClickPopup: 'Im a Popup',
            headerWordWrap: true,
            headerMouseUp: (e, column) => {},
        },
    ],
});

table.on('cellMouseDown', (e, cell) => {});

// Testing popup event and menu event
table.on('popupClosed', component => {});
table.on('popupOpen', component => {});
table.on('menuOpened', component => {});
table.on('menuClosed', component => {});

column.popup('test', 'bottom');
