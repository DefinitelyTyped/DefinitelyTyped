//#region "Language"

const lang: DataTables.LanguageSettings = {
    emptyTable: "No data available in table",
    info: "Showing _START_ to _END_ of _TOTAL_ entries",
    infoEmpty: "Showing 0 to 0 of 0 entries",
    infoFiltered: "(filtered from _MAX_ total entries)",
    infoPostFix: "",
    thousands: ",",
    lengthMenu: "Show _MENU_ entries",
    loadingRecords: "Loading...",
    processing: "Processing...",
    search: "Search:",
    searchPlaceholder: "Default text",
    zeroRecords: "No matching records found",
    paginate: {
        first: "First",
        last: "Last",
        next: "Next",
        previous: "Previous"
    },
    aria: {
        sortAscending: ": activate to sort column ascending",
        sortDescending: ": activate to sort column descending",
        paginate: {
            first: "First",
            last: "Last",
            next: "Next",
            previous: "Previous"
        }
    }
};

//#endregion "Language"

//#region "Column"

const colCreatedCellFunc: DataTables.FunctionColumnCreatedCell = (cell, cellData, rowData, rowIndex, colIndex) => {};

const colDataObject: DataTables.ObjectColumnData = {
    _: "phone",
    filter: "phone_filter",
    display: "phone_display",
    sort: "asc"
};

const colDataFunc: DataTables.FunctionColumnData = (row: any, type: 'set' | 'display' | 'sort' | 'filter' | 'type', set: any, meta: DataTables.CellMetaSettings) => {
    meta.col;
    meta.row;
    meta.settings;
    switch (type) {
        case 'set':
            row.value = set;
            return;
        default:
            return row.value;
    }
};

const colRenderObject: DataTables.ObjectColumnData = {
    _: "phone",
    filter: "phone_filter",
    display: "phone_display",
    sort: "asc"
};

const colRenderFunc: DataTables.FunctionColumnRender = (data: any, type: any, row: any, meta: DataTables.CellMetaSettings): any => {
    meta.col;
    meta.row;
    meta.settings;
    switch (type) {
        case undefined:
            return data.value;
        case 'filter':
            return data.filterValue;
        case 'display':
            return data.displayValue;
        case 'type':
            return data.typeValue;
        case 'sort':
            return data.sortValue;
        default:
            // Extensibility: the render type can be a custom value, useful for plugins that require custom rendering.
            // Custom values are declared as any.
            return data.valueForPlugin;
    }
};

colRenderFunc({}, 'filter', {}, null);
colRenderFunc({}, 'display', {}, null);
colRenderFunc({}, 'type', {}, null);
colRenderFunc({}, 'sort', {}, null);
colRenderFunc({}, undefined, {}, null);
colRenderFunc({}, 'custom value', {}, null);

let col: DataTables.ColumnSettings = {
    cellType: "th",
    className: "css",
    contentPadding: "mmmm",
    createdCell: colCreatedCellFunc,
    data: 1,
    defaultContent: "edit",
    name: "name",
    orderable: true,
    orderData: 10,
    orderDataType: "dom-checkbox",
    orderFixed: [[0, 'asc'], [1, 'desc']],
    orderSequence: ['asc', 'desc'],
    render: 1,
    searchable: true,
    title: "title",
    visible: true,
    width: "200px"
};
col = {
    data: "",
    orderData: [10, 11, 20],
    render: "",
};
col = {
    data: colDataObject,
    render: colRenderObject,
};
col = {
    data: colDataFunc,
    render: colRenderFunc,
};
col = {
    data: "salary",
    render: $.fn.dataTable.render.number('\'', '.', 0, '$'),
};
col = {
    data: "url",
    render: $.fn.dataTable.render.text(),
};
col = {
    orderFixed: {
        pre: [[0, 'asc'], [1, 'desc']],
        post: [[0, 'asc'], [1, 'desc']]
    }
};

//#endregion "Column"

//#region "ColumnDef"

let colDef: DataTables.ColumnDefsSettings = {
        targets: 1,
        cellType: "th",
        className: "css",
        contentPadding: "mmmm",
        createdCell: colCreatedCellFunc,
        data: 1,
        defaultContent: "edit",
        name: "name",
        orderable: true,
        orderData: 10,
        orderDataType: "dom-checkbox",
        orderFixed: [[0, 'asc'], [1, 'desc']],
        orderSequence: ['asc', 'desc'],
        render: 1,
        searchable: true,
        title: "title",
        visible: true,
        width: "200px"
    };

colDef = {
        targets: "2",
        cellType: "th",
    };

colDef = {
        targets: ["2", 5],
        cellType: "th",
    };

//#endregion "ColumnDef"

//#region "Callbacks"

const createRowFunc: DataTables.FunctionCreateRow = (row, data, dataIndex) => { };
const drawCallbackFunc: DataTables.FunctionDrawCallback = (settings) => { };
const footerCallbackFunc: DataTables.FunctionFooterCallback = (tfoot, data, start, end, display) => { };
const formatNumberFunc: DataTables.FunctionFormatNumber = (toForm) => { };
const headerCallbackFunc: DataTables.FunctionHeaderCallback = (thead, data, start, end, display) => { };
const infoCallbackFunc: DataTables.FunctionInfoCallback = (settings, start, end, total, pre) => { };
const initCallbackFunc: DataTables.FunctionInitComplete = (settings, json) => { };
const preDrawFunc: DataTables.FunctionPreDrawCallback = (settings) => { };
const rowCallbackFunc: DataTables.FunctionRowCallback = (row, data, index) => { };
const stateLoadCallbackFunc: DataTables.FunctionStateLoadCallback = (settings) => { };
const stateLoadedCallbackFunc: DataTables.FunctionStateLoaded = (settings, data) => { };
const stateSaveCallbackFunc: DataTables.FunctionStateSaveCallback = (settings, data) => { };
const stateSaveParamsFunc: DataTables.FunctionStateSaveParams = (settings, data) => { };

//#endregion "Callbacks

//#region "Ajax"

const ajaxFunc: DataTables.FunctionAjax = (data, callback, settings) => { };

let ajaxDataFunc: DataTables.FunctionAjaxData = (data, settings) => data;

ajaxDataFunc = (data) => "";

//#endregion "Ajax"

//#region "Settings"

let config: DataTables.Settings = {
        // columns
        columns: [
            col,
            null,
            col,
            null,
            col,
            col
        ],
        columnDefs: [
            null,
            colDef,
            colDef,
            null,
        ],
        // Data
        ajax: "url",
        data: [],
        // Features
        autoWidth: true,
        deferRender: true,
        info: true,
        jQueryUI: false,
        lengthChange: true,
        ordering: true,
        paging: true,
        scrollX: true,
        scrollY: "200px",
        searching: true,
        serverSide: true,
        stateSave: true,
        // Options
        deferLoading: 10,
        destroy: true,
        displayStart: 1,
        dom: "lrtip",
        lengthMenu: [1, 2, 3, 4],
        orderCellsTop: true,
        orderClasses: true,
        order: [[0, 'asc'], [1, 'asc']],
        orderFixed: [[0, 'asc'], [1, 'asc']],
        orderMulti: true,
        pageLength: 10,
        pagingType: "simple",
        retrieve: true,
        renderer: "bootstrap",
        rowId: "custId",
        scrollCollapse: true,
        search: true,
        searchCols: [{ search: "", smart: true, regex: false, caseInsensitive: true }],
        searchDelay: 10,
        stateDuration: 10,
        tabIndex: 10,
    };

config = {
        ajax: ajaxFunc,
        deferLoading: [10, 100],
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        order: [0, 'asc'],
        orderFixed: [[0, 'asc'], [1, 'asc']],
        renderer: {
            header: "bootstrap",
            pageButton: "jqueryui"
        },
        search: { search: "", smart: true, regex: false, caseInsensitive: true },
        searchCols: [
            null,
            { search: "", smart: true, regex: false, caseInsensitive: true },
            { search: "" },
            { search: "", smart: true },
            null
        ],
    };

config = {
        ajax: {
            data: {},
            dataSrc: "",
        },
    };

config = {
        ajax: {
            data: ajaxDataFunc,
            dataSrc() {
                return [];
            },
        },
    };

//#endregion "Settings"

//#region "Settings-Legacy"

const browserLegacy: DataTables.BrowserLegacy = {
    barWidth: 10,
    bBounding: true,
    bScrollbarLeft: true,
    bScrollOversize: true
};

//#endregion

//#region "Init"

let dt = $('#example').DataTable();
dt = $('#example1').DataTable(config);
dt = $('#example1').DataTable(config);
dt.$('tr:odd').css('backgroundColor', 'blue');

//#endregion "Init"

//#region "Methods-Ajax"

const json = dt.ajax.json();

const params = dt.ajax.params();

let reload = dt.ajax.reload();
reload = dt.ajax.reload(() => { });
reload = dt.ajax.reload(() => { }, true);
const test = reload.$("");

const url = dt.ajax.url();
dt.ajax.url("url");
dt.ajax.url("url").load();

//#endregion "Methods-Ajax"

//#region "Methods-Core"

const clear = dt.clear();
clear.$("");

const data_2 = dt.data();
data_2.$("");

let destroy = dt.destroy();
destroy = dt.destroy(true);
destroy.$("");

let draw: DataTables.Api = dt.draw();
draw = dt.draw(true);
draw = dt.draw("page");
draw.$("");

const initSettings = dt.init();

let i18n: string = dt.i18n('buttons.copy', 'Copy to clipboard');
i18n = dt.i18n('select.rows', { _: '%d rows selected', 1: '1 row selected' }, 0);

let off = dt.off("event");
off = dt.off("event", () => { });
off.$("");

const on = dt.on("event", () => { });
on.$("");

const one = dt.one("event", () => { });
one.$("");

const order_get = dt.order();
let order_set = dt.order([0, "asc"]);
order_set = dt.order([0, "asc"], [1, "desc"]);  // TODO: Fíx that
order_set = dt.order([[0, "asc"], [1, "desc"]]);

const fixed_get: DataTables.ObjectOrderFixed = dt.order.fixed();
const fixed_set: DataTables.Api = dt.order.fixed({pre: [0, "asc"], post: [1, "desc"]});

const orderListerner = order_set.order.listener("node", 1, () => { });

const page_get = dt.page();
let page_set = dt.page(1);
page_set = dt.page("next");

let page = dt.page.info();
page = {
    page: 1,
    pages: 6,
    start: 10,
    end: 20,
    length: 10,
    recordsTotal: 57,
    recordsDisplay: 57,
    serverSide: false
};

const page_len_get = dt.page.len();
const page_len_set = dt.page.len(10);

const search_get = dt.search();
let search_set = dt.search("searchStr");
search_set = dt.search("searchStr", true);
search_set = dt.search("searchStr", true, false);
search_set = dt.search("searchStr", true, false, false);

const settings = dt.settings();

let state = dt.state();
state = {
    time: 1423772610230,
    start: 0,
    length: 25,
    order: [[0, "asc"]],
    search: {
        search: "",
        smart: true,
        regex: false,
        caseInsensitive: true
    },
    columns: [{
        visible: true,
        search: { search: "", smart: true, regex: false, caseInsensitive: true }
    }, {
        visible: true,
        search: { search: "", smart: true, regex: false, caseInsensitive: true }
    }, {
        visible: true,
        search: { search: "", smart: true, regex: false, caseInsensitive: true }
    }, {
        visible: true,
        search: { search: "", smart: true, regex: false, caseInsensitive: true }
    }, {
        visible: true,
        search: { search: "", smart: true, regex: false, caseInsensitive: true }
    }, {
        visible: true,
        search: { search: "", smart: true, regex: false, caseInsensitive: true }
    }, {
        visible: true,
        search: { search: "", smart: true, regex: false, caseInsensitive: true }
    }, {
        visible: true,
        search: { search: "", smart: true, regex: false, caseInsensitive: true }
    }]
};
state = dt.state.loaded();

const state_clear = dt.state.clear();
state_clear.$("");

const state_save = dt.state.save();
state_save.$("");

//#endregion "Methods-Core"

const modifier: DataTables.ObjectSelectorModifier = {
    order: "current",
    search: "none",
    searchPlaceholder: "Default text",
    page: "all",
};

//#region "Methods-Cell"

let cells = dt.cells();
cells = dt.cells(":contains('Not shipped')");
cells = dt.cells(() => { });
cells = dt.cells($(""));
cells = dt.cells({});
cells = dt.cells(":contains('Not shipped')r", modifier);
cells = dt.cells("row-selector", "cells-selector", modifier);

const cells_cache = cells.cache("search");
// Create the select list and search operation
const select_2 = $('<select />')
    .appendTo('body')
    .on('change', () => {
        dt
            .column(0)
            .search($(this).val() as string)
            .draw();
    });
// Get the search data for the first column and add to the select list
const data_3 = dt
    .cells('', 0)
    .cache('search')
    .sort()
    .unique()
    .each((d: any) => {
        const tag = `<option value="${d}">${d}</option>`;
        select.append($(tag));
    });

const cells_data = cells.data();
const data_4 = dt
    .cells(".info")
    .data();

console.log(data_4);

const cells_indexes = cells.indexes();
const columns_d = dt
    .cells(':contains("21")')
    .indexes()
    .pluck('column')
    .sort()
    .unique();

alert('Columns containing 21: ' + columns_d.join(', '));

const cells_invalidate_1 = cells.invalidate();
const cells_invalidate_2 = cells.invalidate("data");
const td = $('#example tbody td:eq(0)');
td.html('Updated');
dt.cell(td).invalidate().draw();

const cells_nodes = cells.nodes();
const cells_d = dt
    .cells(":contains('Not shipped')")
    .nodes();

$(cells_d).addClass('warning');

const cells_render = cells.render("display");
$('#example').on('click', 'tbody td', () => {
    const idx = dt.cell(this).index().row;
    const data = dt.cells(idx, '').render('display');

    console.log(data);
});

cells.every(() => { });
cells.every((cellRowIdx, cellColIdx, tableLoop, cellLoop) => { });
cells.every(function(cellRowIdx, cellColIdx, tableLoop, cellLoop) {
    const cell: DataTables.CellMethods = this;
});

let cell = dt.cell(":contains('Not shipped')");
cell = dt.cell(() => { });
cell = dt.cell($(""));
cell = dt.cell({});
cell = dt.cell(":contains('Not shipped')r", modifier);
cell = dt.cell("row-selector", "cells-selector", modifier);

const cell_cache = cell.cache("search");
$('#example tbody').on('click', 'td', () => {
    alert(dt.cell(this).cache('order'));
});

const cell_data_get = cell.data();
$('#example tbody').on('click', 'td', () => {
    alert(dt.cell(this).data());
});

let cell_data_set = cell.data("string");
cell_data_set = cell.data(1);
$('#example tbody').on('click', 'td', () => {
    const cell = dt.cell(this);
    cell.data(cell.data() + 1).draw();
});

const cell_index = cell.index();
$('#example tbody').on('click', 'td', () => {
    alert('Clicked on cell in visible column: ' + dt.cell(this).index().columnVisible);
});
$('#example tbody').on('click', 'td', () => {
    const rowIdx = dt
        .cell(this)
        .index().row;

    dt.rows(rowIdx)
        .nodes()
        .to$()
        .addClass('clicked');
});

const cell_invalidate_1 = cell.invalidate();
const cell_invalidate_2 = cell.invalidate("data");
$('#example tbody').on('click', 'td', function()  {
    this.innerHTML = (parseInt(this.innerHTML, 10) + 1).toString();
    dt.cell(this).invalidate().draw();
});

const cell_nodes = cell.node();
const cell_n = dt
    .cell("#importantCell")
    .node();

$(cell_n).addClass('warning');

const cell_render = cell.render("display");
$('#example').on('click', 'tbody td', () => {
    const data = dt.cell(this).render('display');

    console.log(data);
});
$('#example').on('click', 'tbody td', () => {
    const data = dt.cell(this).render('sort');

    console.log(data);
});

//#endregion "Methods-Cell"

//#region "Methods-Column"

let columns = dt.columns();
columns = dt.columns("selector");
columns = dt.columns("selector", modifier);

const columns_cache = columns.cache("order");
dt.columns('.select-filter').eq(0).each((colIdx: any) => {
    // Create the select list and search operation
    const select = $('<select />')
        .appendTo(
            dt.column(colIdx).footer()
        )
        .on('change', () => {
            dt
                .column(colIdx)
                .search($(this).val() as string)
                .draw();
        });

    // Get the search data for the first column and add to the select list
    dt
        .column(colIdx)
        .cache('search')
        .sort()
        .unique()
        .each((d: any) => {
            const tag = `<option value="${d}">${d}</option>`;
            select.append($(tag));
        });
});

const columns_data = columns.data();
$('#listData').html(
    dt
        .columns(0)
        .data()
        .eq(0)      // Reduce the 2D array into a 1D array of data
        .sort()       // Sort data alphabetically
        .unique()     // Reduce to unique values
        .join('<br>')
);

// const idx = dt
//    .columns('.check')
//    .data()
//    .eq(0) // Reduce the 2D array into a 1D array of data
//    .indexOf('Yes');

const columns_dataSrc = columns.dataSrc();
// alert('Data source: ' + dt.columns([0, 1]).dataSrc().join(' '));

const columns_footer: HTMLElement = columns.footer();
const columns_header: HTMLElement = columns.header();
let columns_indexes = columns.indexes();
columns_indexes = columns.indexes("visibile");
const columns_nodes = columns.nodes();
dt
    .columns('.ready')
    .nodes();
// .flatten()  // Reduce to a 1D array
// .to$()      // Convert to a jQuery object
// .addClass('highlight');

const columns_search_get = columns.search();
let columns_search_set = columns.search("string");
columns_search_set = columns.search("string", true);
columns_search_set = columns.search("string", true, false);
columns_search_set = columns.search("string", true, false, true);

const columns_visible_get: boolean = columns.visible();
let columns_visible_set = columns.visible(false);
columns_visible_set = columns.visible(false, true);
// Hide a column
dt.column(1).visible(false);
dt.columns([0, 1, 2, 3]).visible(false, false);
dt.columns.adjust().draw(false); // adjust column sizing and redraw

const columns_adjust = dt.columns.adjust();

let column = dt.column("selector");
column = dt.column("selector", modifier);

dt.column(0).visible(false);

$('#example tbody').on('click', 'td', () => {
    const visIdx: number = $(this).index();
    const dataIdx: number = dt.column.index('fromVisible', visIdx);
    alert('Column data index:');
});

const column_cache = column.cache("order");
// Create the select list and search operation
const select = $('<select />')
    .appendTo(
        dt.column(0).footer()
    )
    .on('change', () => {
        dt
            .column(0)
            .search($(this).val() as string)
            .draw();
    });

// Get the search data for the first column and add to the select list
dt
    .column(0)
    .cache('search')
    .sort()
    .unique()
    .each((d: any) => {
        const tag = `<option value="${d}">${d}</option>`;
        select.append($(tag));
    });

const column_data = column.data();
alert('Column 4 sum: ' +
    dt
        .column(4)
        .data()
        .reduce((a: any, b: any) => {
            return a + b;
        })
);

const column_dataSrc = column.dataSrc();
$('#example').on('click', 'tbody td', () => {
    const idx = dt.cell(this).index().column;
    alert('Data source: ' + dt.column(idx).dataSrc());
});

const column_footer: HTMLElement = column.footer();
const column_p = dt.column(0);
// $(column.footer()).html(
//    column_p
//        .data()
//        .reduce(function(a, b) {
//        return a + b;
//    })
//    );

const column_header: HTMLElement = column.header();
$('#example tbody').on('click', 'td', function() {
    const idx = dt.cell(this).index().column;
    const title: HTMLElement = dt.column(idx).header();

    alert('Column title clicked on: ' + $(title).html());
});

let column_index: number = column.index();
column_index = column.index("visibile");
dt.column(0).visible(false);

const idx = dt.column(1).index('visible');
alert(idx); // will show 0

dt.column('0:visible').order('asc');

const column_nodes: DataTables.Api = column.nodes();
column_nodes.to$()      // Convert to a jQuery object
            .addClass('ready');

const column_search_get = column.search();
let column_search_set = column.search("string");
column_search_set = column.search("string", true);
column_search_set = column.search("string", true, false);
column_search_set = column.search("string", true, false, true);
$('#column3_search').on('keyup', function() {
    dt
        .columns(3)
        .search((this as HTMLInputElement).value)
        .draw();
});

dt.columns('.select-filter').eq(0).each((colIdx: any) => {
    // Create the select list and search operation
    const select = $('<select />')
        .appendTo(
            dt.column(colIdx).footer()
        )
        .on('change', function() {
            dt
                .column(colIdx)
                .search($(this).val() as string)
                .draw();
        });

    // Get the search data for the first column and add to the select list
    dt
        .column(colIdx)
        .cache('search')
        .sort()
        .unique()
        .each((d: any) => {
            const tag = `<option value="${d}">${d}</option>`;
            select.append($(tag));
        });
});

const column_visible_get = column.visible();
let column_visible_set = column.visible(false);
column_visible_set = column.visible(false, true);
alert('Column index 0 is ' +
    (dt.column(0).visible() ? 'visible' : 'not visible')
);
for (let i = 0; i < 4; i++) {
    dt.column(i).visible(false, false);
}
dt.columns.adjust().draw(false); // adjust column sizing and redraw

dt.columns().every(() => { });
dt.columns().every((colIdx, tableLoop, colLoop) => { });
dt.columns().every(function(colIdx, tableLoop, colLoop) {
    const col: DataTables.ColumnMethods = this;
});

$('#example').on('column-visibility.dt', (e: object, settings: DataTables.Settings, column: number, state: boolean, recalc: boolean | undefined) => {
    const widthRecalced = (recalc || recalc === undefined);
    console.log(`Column ${column} has changed to ${(state ? 'visible' : 'hidden')} and width ${(widthRecalced) ? 'was' : 'was not'} recalculated.`);
});

//#endregion "Methods-Column"

//#region "Methods-Row"

const row_1 = dt.row("selector");
const row_2 = dt.row("selector").child.hide();
const row_3 = dt.row("selector").child.isShown();
const row_4 = dt.row("selector").child.remove();
const row_5 = dt.row("selector").child.show();
const row_6 = dt.row("selector").child();
const row_7 = dt.row("selector").child(false);
const row_8 = dt.row("selector").child(false).hide();
const row_9 = dt.row("selector").child("data");
const row_10 = dt.row("selector").child("data").remove();
const row_11 = dt.row("selector").child("data", "css").show();
const row_12 = dt.row("selector").child.remove();
const row_13 = dt.row("selector").child.show();
const row_14 = dt.row.add({});
const row_15 = dt.row("selector").invalidate();
const row_16 = dt.row("selector").invalidate("auto");
const row_17 = dt.row("selector").data();
const row_18 = dt.row("selector").data({});
const row_19 = dt.row("selector").index();
const row_20 = dt.row("selector").node();
const row_21 = dt.row("selector").remove();
const row_22: string = dt.row("selector").id();
const row_23: string = dt.row("selector").id(false);

const rows_1 = dt.rows();
const rows_2 = dt.rows().remove();
const rows_3 = dt.rows("selector");
const rows_4 = dt.rows("selector").cache("type");
const rows_5 = dt.rows("selector").data();
const rows_6 = dt.rows("selector").data({});
const rows_7 = dt.rows("selector").indexes();
const rows_8 = dt.rows("selector").invalidate();
const rows_9 = dt.rows("selector").invalidate("auto");
const rows_10 = dt.rows("selector").indexes();
const rows_11 = dt.rows("selector").remove();
const rows_12 = dt.rows("selector").nodes();
const rows_13 = dt.rows.add([{}, {}]);
dt.rows().every(() => { });
dt.rows().every((rowIdx, tableLoop, rowLoop) => { });
dt.rows().every(function(rowIdx, tableLoop, rowLoop) {
    const row: DataTables.RowMethods = this;
});
const rows_14: DataTables.Api = dt.rows("selector").ids();
const rows_15: DataTables.Api = dt.rows("selector").ids(false);

const table3 = $('#example').DataTable();
table3.row.add({
    name: "Tiger Nixon",
    position: "System Architect",
    salary: "$3,120",
    start_date: "2011/04/25",
    office: "Edinburgh",
    extn: "5421"
}).draw();

const table4 = $('#example').DataTable();
table4.row.add([{
    name: "Tiger Nixon",
    position: "System Architect",
    salary: "$3,120",
    start_date: "2011/04/25",
    office: "Edinburgh",
    extn: "5421"
}, {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422"
}])
    .draw();

let pupil: any;
const table5 = $('#example').DataTable();
table5.rows.add([
    pupil,
    pupil,
    pupil,
])
    .draw();
// .nodes()
// .to$()
// .addClass('new');

$('#example tbody').on('click', 'td.details-control', () => {
    const tr = $(this).parents('tr');
    const row = dt.row(tr);

    if (row.child.isShown()) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass('shown');
    } else {
        // Open this row (the format() function would return the data to be shown)
        row.child("").show();
        tr.addClass('shown');
    }
});

dt.row(':eq(0)').child([
    'First child row',
    'Second child row',
    'Third child row'
])
    .show();

dt.rows().eq(0).each((rowIdx: any) => {
    const tag = `<tr><td>${rowIdx}.1</td><td>${rowIdx}.2</td><td>${rowIdx}.3</td><td>${rowIdx}.4</td></tr>`;
    dt
        .row(rowIdx)
        .child(
            $(tag)
        )
        .show();
});

$('#example tbody').on('click', 'td.details-control', () => {
    const tr = $(this).parents('tr');
    const row = dt.row(tr);

    if (row.child.isShown()) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass('shown');
    } else {
        // Open this row (the format() function would return the data to be shown)
        row.child("").show();
        tr.addClass('shown');
    }
});

$('#example tbody').on('click', 'td.details-control', () => {
    const tr = $(this).parents('tr');
    const row = dt.row(tr);

    if (row.child.isShown()) {
        // This row is already open - remove it
        row.child.remove();
        tr.removeClass('shown');
    } else {
        // Open this row (the format() function would return the data to be shown)
        row.child("").show();
        tr.addClass('shown');
    }
});

//#endregion "Methods-Row"

//#region "Methods-Static"

// Variable is a stand-in for $.fn.dataTable. See extension of JQueryStatic at the top of index.d.ts.
let staticFn: DataTables.StaticFunctions;

// With boolean parameter type, always returns DataTables.DataTable[].
let static_1: DataTables.Api[] = <DataTables.Api[]> staticFn.tables(true);

// With object parameter type, returns DataTables.DataTable[] when "api" property is false.
static_1 = <DataTables.Api[]> staticFn.tables({ visible: true, api: false });

// With object parameter type, returns DataTables.DataTable when "api" property is true.
const static_2: DataTables.Api = <DataTables.Api> staticFn.tables({ visible: true, api: true });

const static_3: DataTables.Api = $("selector").DataTable();
const static_4: DataTables.JQueryDataTables = $("selector").dataTable();
const static_5: DataTables.Api = $("selector").dataTable().api();

const static_6 = new $.fn.dataTable.Api("selector");

const version: boolean = $.fn.dataTable.versionCheck("1.10.0");
const isDataTable: boolean = $.fn.dataTable.isDataTable("selector");
const isDataTable_3: boolean = $.fn.dataTable.isDataTable(dt.row("selector").node());
const isDataTable_2: boolean = $.fn.dataTable.isDataTable($("selector"));
const isDataTable_4: boolean = $.fn.dataTable.isDataTable($("selector").dataTable().api());
const escapeRegex: string = $.fn.dataTable.util.escapeRegex("");

const throttle_1 = $.fn.dataTable.util.throttle((data) => {
    table.search(data).draw();
});

const throttle_2 = $.fn.dataTable.util.throttle((data) => {
    table.search(data).draw();
}, 100);

const defaults_1 = $.fn.dataTable.defaults;

//#endregion "Methods-Static"

//#region "Default Overwrite"

/* Default table settings */
const defaults_2: DataTables.Settings = {
    dom: "<'row'<'col-lg-5'f><'col-lg-7'Bl>>"
    + "<'row'<'col-lg-12't>>"
    + "<'row'<'col-lg-5'i><'col-lg-7'p>>Ox",
    paging: true,
    pagingType: "bootstrap",
    stateSave: true,
    language: {
        infoEmpty: "Empty"
    }
};

/* Default class names */
const default_classes: DataTables.ExtClassesSettings = {
    sWrapper: "dataTables_wrapper dt-bootstrap4",
    sFilterInput: "form-control",
    sLength: "dataTables_length",
    sLengthSelect: "form-control custom-select",
    sProcessing: "dataTables_processing panel panel-default",
    sPageButton: "paginate_button page-item",
};

//#endregion "Default Overwrite"

//#region "Methods-Table"

let tables = dt.tables();
tables = dt.tables("selector");

const tables_body = tables.body();
const tables_containers = tables.containers();
const tables_footer = tables.footer();
const tables_header = tables.header();
const tables_nodes = tables.nodes();

const table = dt.table("selector");

const table_body = table.body();
const table_container = table.container();
const table_footer = table.footer();
const table_header = table.header();
const table_node = table.node();

//#endregion "Methods-Table"

//#region "Methods-Util"

const util_1: boolean = dt.any();
const util_2: number = dt.count();

//#endregion "Methods-Util"

//#region "ExtSettings"

const ext_classes_settings: DataTables.ExtClassesSettings = {
};
const ext_classes_settings_full: DataTables.ExtClassesSettings = {
    sFilter: "",
    sFilterInput: "",
    sFooterTH: "",
    sHeaderTH: "",
    sInfo: "",
    sJUIFooter: "",
    sJUIHeader: "",
    sLength: "",
    sLengthSelect: "",
    sNoFooter: "",
    sPageButton: "",
    sPageButtonActive: "",
    sPageButtonDisabled: "",
    sPaging: "",
    sProcessing: "",
    sRowEmpty: "",
    sScrollBody: "",
    sScrollFoot: "",
    sScrollFootInner: "",
    sScrollHead: "",
    sScrollHeadInner: "",
    sScrollWrapper: "",
    sSortable: "",
    sSortableAsc: "",
    sSortableDesc: "",
    sSortableNone: "",
    sSortAsc: "",
    sSortColumn: "",
    sSortDesc: "",
    sSortIcon: "",
    sSortJUI: "",
    sSortJUIAsc: "",
    sSortJUIAscAllowed: "",
    sSortJUIDesc: "",
    sSortJUIDescAllowed: "",
    sSortJUIWrapper: "",
    sStripeEven: "",
    sStripeOdd: "",
    sTable: "",
    sWrapper: ""
};

const ext_type_settings: DataTables.ExtTypeSettings = {
    detect: [],
    search: {},
    order: {}
};
ext_type_settings.detect.push((d: string, s: DataTables.Settings) => {
    return null;
});
ext_type_settings.detect.push((d: string, s: DataTables.Settings) => {
    return "";
});

const ext_settings: DataTables.ExtSettings = {
    aTypes: [],
    afnFiltering: [],
    afnSortData: {},
    aoFeatures: [],
    builder: "",
    classes: ext_classes_settings,
    errMode: "",
    feature: [],
    fnVersionCheck: (version: string) => "",
    iApiIndex: 0,
    internal: {},
    legacy: {},
    oApi: {},
    oJUIClasses: {},
    oPagination: {},
    oSort: {},
    oStdClasses: ext_classes_settings,
    ofnSearch: {},
    order: {},
    pager: {},
    renderer: {},
    sVersion: "",
    search: [],
    selector: {},
    type: ext_type_settings
};

 //#endregion "ExtSettings"
