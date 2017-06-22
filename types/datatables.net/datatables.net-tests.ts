$(document).ready(function () {
    //#region "Language"

    var lang: DataTables.LanguageSettings = {
        "emptyTable": "No data available in table",
        "info": "Showing _START_ to _END_ of _TOTAL_ entries",
        "infoEmpty": "Showing 0 to 0 of 0 entries",
        "infoFiltered": "(filtered from _MAX_ total entries)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Show _MENU_ entries",
        "loadingRecords": "Loading...",
        "processing": "Processing...",
        "search": "Search:",
        "zeroRecords": "No matching records found",
        "paginate": {
            "first": "First",
            "last": "Last",
            "next": "Next",
            "previous": "Previous"
        },
        "aria": {
            "sortAscending": ": activate to sort column ascending",
            "sortDescending": ": activate to sort column descending"
        }
    };

    //#endregion "Language"

    //#region "Column"

    var colCreatedCellFunc: DataTables.FunctionColumnCreatedCell = function (cell, cellData, rowData, rowIndex, colIndex) {

    }

    var colDataObject: DataTables.ObjectColumnData = {
        _: "phone",
        filter: "phone_filter",
        display: "phone_display",
        sort: "asc"
    };

    var colDataFunc: DataTables.FunctionColumnData = (row: any, type: 'set' | 'display' | 'sort' | 'filter' | 'type', set: any, meta: DataTables.CellMetaSettings) => {
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

    var colRenderObject: DataTables.ObjectColumnRender = {
        _: "phone",
        filter: "phone_filter",
        display: "phone_display",
        sort: "asc"
    };

    var colRenderFunc: DataTables.FunctionColumnRender = (data: any, type: 'filter' | 'display' | 'type' | 'sort' | undefined | any, row: any, meta: DataTables.CellMetaSettings): any => {
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

    var col: DataTables.ColumnSettings =
        {
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
            orderSequence: ['asc', 'desc'],
            render: 1,
            searchable: true,
            title: "title",
            visible: true,
            width: "200px"
        }
    col =
        {
            data: "",
            orderData: [10, 11, 20],
            render: "",
        }
    col =
        {
            data: colDataObject,
            render: colRenderObject,
        }
    col =
        {
            data: colDataFunc,
            render: colRenderFunc,
        }

    //#endregion "Column"

    //#region "ColumnDef"

    var colDef: DataTables.ColumnDefsSettings =
        {
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
            orderSequence: ['asc', 'desc'],
            render: 1,
            searchable: true,
            title: "title",
            visible: true,
            width: "200px"
        };

    colDef =
        {
            targets: "2",
            cellType: "th",
        };

    colDef =
        {
            targets: ["2", 5],
            cellType: "th",
        };

    //#endregion "ColumnDef"

    //#region "Callbacks"

    var createRowFunc: DataTables.FunctionCreateRow = function (row, data, dataIndex) { };
    var drawCallbackFunc: DataTables.FunctionDrawCallback = function (settings) { };
    var footerCallbackFunc: DataTables.FunctionFooterCallback = function (tfoot, data, start, end, display) { };
    var formatNumberFunc: DataTables.FunctionFormatNumber = function (toForm) { };
    var headerCallbackFunc: DataTables.FunctionHeaderCallback = function (thead, data, start, end, display) { };
    var infoCallbackFunc: DataTables.FunctionInfoCallback = function (settings, start, end, total, pre) { };
    var initCallbackFunc: DataTables.FunctionInitComplete = function (settings, json) { };
    var preDrawFunc: DataTables.FunctionPreDrawCallback = function (settings) { };
    var rowCallbackFunc: DataTables.FunctionRowCallback = function (row, data, index) { };
    var stateLoadCallbackFunc: DataTables.FunctionStateLoadCallback = function (settings) { };
    var stateLoadedCallbackFunc: DataTables.FunctionStateLoaded = function (settings, data) { };
    var stateSaveCallbackFunc: DataTables.FunctionStateSaveCallback = function (settings, data) { };
    var stateSaveParamsFunc: DataTables.FunctionStateSaveParams = function (settings, data) { };

    //#endregion "Callbacks

    //#region "Ajax"

    var ajaxFunc: DataTables.FunctionAjax = function (data, callback, settings) { };

    var ajaxDataFunc: DataTables.FunctionAjaxData = function (data, settings) {
        return data;
    };

    ajaxDataFunc = function (data) {
        return "";
    };

    //#endregion "Ajax"

    //#region "Settings"

    var config: DataTables.Settings =
        {
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
            data: {},
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
            searchCols: [{ "search": "", "smart": true, "regex": false, "caseInsensitive": true }],
            searchDelay: 10,
            stateDuration: 10,
            tabIndex: 10,
        };


    config =
        {
            ajax: ajaxFunc,
            deferLoading: [10, 100],
            lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
            order: [0, 'asc'],
            orderFixed: [[0, 'asc'], [1, 'asc']],
            renderer: {
                header: "bootstrap",
                pageButton: "jqueryui"
            },
            search: { "search": "", "smart": true, "regex": false, "caseInsensitive": true },
            searchCols: [
                null,
                { "search": "", "smart": true, "regex": false, "caseInsensitive": true },
                { "search": "" },
                { "search": "", "smart": true },
                null
            ],
        };

    config =
        {
            ajax: {
                data: {},
                dataSrc: "",
            },
        };

    config =
        {
            ajax: {
                data: ajaxDataFunc,
                dataSrc: function (data: any) { },
            },
        };

    //#endregion "Settings"

    //#region "Settings-Legacy"

    var browserLegacy: DataTables.BrowserLegacy = {
        barWidth: 10,
        bBounding: true,
        bScrollbarLeft: true,
        bScrollOversize: true
    }

    //#endregion

    //#region "Init"

    var dt = $('#example').DataTable();
    dt = $('#example1').DataTable(config);
    dt = $('#example1').DataTable(config);
    dt.$('tr:odd').css('backgroundColor', 'blue');

    //#endregion "Init"

    //#region "Methods-Ajax"

    var json = dt.ajax.json();

    var params = dt.ajax.params();

    var reload = dt.ajax.reload();
    reload = dt.ajax.reload(function () { });
    reload = dt.ajax.reload(function () { }, true);
    var test = reload.$("");

    var url = dt.ajax.url();
    dt.ajax.url("url");
    dt.ajax.url("url").load();

    //#endregion "Methods-Ajax"

    //#region "Methods-Core"

    var clear = dt.clear();
    clear.$("");

    var data = dt.data();
    data.$("");

    var destroy = dt.destroy();
    destroy = dt.destroy(true);
    destroy.$("");

    var draw: DataTables.Api = dt.draw();
    draw = dt.draw(true);
    draw = dt.draw("page");
    draw.$("");

    var initSettings = dt.init();

    var i18n: string = dt.i18n('buttons.copy', 'Copy to clipboard');
    i18n = dt.i18n('select.rows', { _: '%d rows selected', 1: '1 row selected' }, 0);

    var off = dt.off("event");
    off = dt.off("event", function () { });
    off.$("");

    var on = dt.on("event", function () { });
    on.$("");

    var one = dt.one("event", function () { });
    one.$("");

    var order_get = dt.order();
    var order_set = dt.order([0, "asc"]);
    order_set = dt.order([0, "asc"], [1, "desc"]);  // TODO: Fíx that
    order_set = dt.order([[0, "asc"], [1, "desc"]]);

    var orderListerner = order_set.order.listener("node", 1, function () { });

    var page_get = dt.page();
    var page_set = dt.page(1);
    page_set = dt.page("next");

    var page = dt.page.info();
    page = {
        "page": 1,
        "pages": 6,
        "start": 10,
        "end": 20,
        "length": 10,
        "recordsTotal": 57,
        "recordsDisplay": 57,
        "serverSide": false
    };

    var page_len_get = dt.page.len();
    var page_len_set = dt.page.len(10);

    var search_get = dt.search();
    var search_set = dt.search("searchStr");
    search_set = dt.search("searchStr", true);
    search_set = dt.search("searchStr", true, false);
    search_set = dt.search("searchStr", true, false, false);

    var settings = dt.settings();

    var state = dt.state();
    state = { "time": 1423772610230, "start": 0, "length": 25, "order": [[0, "asc"]], "search": { "search": "", "smart": true, "regex": false, "caseInsensitive": true }, "columns": [{ "visible": true, "search": { "search": "", "smart": true, "regex": false, "caseInsensitive": true } }, { "visible": true, "search": { "search": "", "smart": true, "regex": false, "caseInsensitive": true } }, { "visible": true, "search": { "search": "", "smart": true, "regex": false, "caseInsensitive": true } }, { "visible": true, "search": { "search": "", "smart": true, "regex": false, "caseInsensitive": true } }, { "visible": true, "search": { "search": "", "smart": true, "regex": false, "caseInsensitive": true } }, { "visible": true, "search": { "search": "", "smart": true, "regex": false, "caseInsensitive": true } }, { "visible": true, "search": { "search": "", "smart": true, "regex": false, "caseInsensitive": true } }, { "visible": true, "search": { "search": "", "smart": true, "regex": false, "caseInsensitive": true } }] };
    state = dt.state.loaded();

    var state_clear = dt.state.clear();
    state_clear.$("");

    var state_save = dt.state.save();
    state_save.$("");

    //#endregion "Methods-Core"

    var modifier: DataTables.ObjectSelectorModifier = {
        order: "current",
        search: "none",
        page: "all",
    };

    //#region "Methods-Cell"

    var cells = dt.cells();
    cells = dt.cells(":contains('Not shipped')");
    cells = dt.cells(function () { });
    cells = dt.cells($(""));
    cells = dt.cells({});
    cells = dt.cells(":contains('Not shipped')r", modifier);
    cells = dt.cells("row-selector", "cells-selector", modifier);

    var cells_cache = cells.cache("search");
    // Create the select list and search operation
    var select = $('<select />')
        .appendTo('body')
        .on('change', function () {
            dt
                .column(0)
                .search($(this).val() as string)
                .draw();
        });
    // Get the search data for the first column and add to the select list
    var data = dt
        .cells('', 0)
        .cache('search')
        .sort()
        .unique()
        .each(function (d: any) {
            select.append($('<option value="' + d + '">' + d + '</option>'));
        });

    var cells_data = cells.data();
    var data = dt
        .cells(".info")
        .data();

    console.log(data);

    var cells_indexes = cells.indexes();
    var columns_d = dt
        .cells(':contains("21")')
        .indexes()
        .pluck('column')
        .sort()
        .unique();

    alert('Columns containing 21: ' + columns_d.join(', '));

    var cells_invalidate = cells.invalidate();
    var cells_invalidate = cells.invalidate("data");
    var td = $('#example tbody td:eq(0)');
    td.html('Updated');
    dt.cell(td).invalidate().draw();

    var cells_nodes = cells.nodes();
    var cells_d = dt
        .cells(":contains('Not shipped')")
        .nodes();

    $(cells_d).addClass('warning');

    var cells_render = cells.render("display");
    $('#example').on('click', 'tbody td', function () {
        var idx = dt.cell(this).index().row;
        var data = dt.cells(idx, '').render('display');

        console.log(data);
    });

    cells.every(function () { });
    cells.every(function (cellRowIdx, cellColIdx, tableLoop, cellLoop) { });

    var cell = dt.cell(":contains('Not shipped')");
    cell = dt.cell(function () { });
    cell = dt.cell($(""));
    cell = dt.cell({});
    cell = dt.cell(":contains('Not shipped')r", modifier);
    cell = dt.cell("row-selector", "cells-selector", modifier);

    var cell_cache = cell.cache("search");
    $('#example tbody').on('click', 'td', function () {
        alert(dt.cell(this).cache('order'));
    });

    var cell_data_get = cell.data();
    $('#example tbody').on('click', 'td', function () {
        alert(dt.cell(this).data());
    });

    var cell_data_set = cell.data("string");
    cell_data_set = cell.data(1);
    $('#example tbody').on('click', 'td', function () {
        var cell = dt.cell(this);
        cell.data(cell.data() + 1).draw();
    });

    var cell_index = cell.index();
    $('#example tbody').on('click', 'td', function () {
        alert('Clicked on cell in visible column: ' + dt.cell(this).index().columnVisible);
    });
    $('#example tbody').on('click', 'td', function () {
        var rowIdx = dt
            .cell(this)
            .index().row;

        dt.rows(rowIdx)
            .nodes()
            .to$()
            .addClass('clicked');
    });

    var cell_invalidate = cell.invalidate();
    var cell_invalidate = cell.invalidate("data");
    $('#example tbody').on('click', 'td', function () {
        this.innerHTML = (parseInt(this.innerHTML) + 1).toString();
        dt.cell(this).invalidate().draw();
    });

    var cell_nodes = cell.node();
    var cell_n = dt
        .cell("#importantCell")
        .node();

    $(cell_n).addClass('warning');

    var cell_render = cell.render("display");
    $('#example').on('click', 'tbody td', function () {
        var data = dt.cell(this).render('display');

        console.log(data);
    });
    $('#example').on('click', 'tbody td', function () {
        var data = dt.cell(this).render('sort');

        console.log(data);
    });

    //#endregion "Methods-Cell"

    //#region "Methods-Column"

    var columns = dt.columns();
    columns = dt.columns("selector");
    columns = dt.columns("selector", modifier);

    var columns_cache = columns.cache("order");
    dt.columns('.select-filter').eq(0).each(function (colIdx: any) {
        // Create the select list and search operation
        var select = $('<select />')
            .appendTo(
            dt.column(colIdx).footer()
            )
            .on('change', function () {
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
            .each(function (d: any) {
                select.append($('<option value="' + d + '">' + d + '</option>'));
            });
    });

    var columns_data = columns.data();
    $('#listData').html(
        dt
            .columns(0)
            .data()
            .eq(0)      // Reduce the 2D array into a 1D array of data
            .sort()       // Sort data alphabetically
            .unique()     // Reduce to unique values
            .join('<br>')
    );

    //var idx = dt
    //    .columns('.check')
    //    .data()
    //    .eq(0) // Reduce the 2D array into a 1D array of data
    //    .indexOf('Yes');

    var columns_dataSrc = columns.dataSrc();
    //alert('Data source: ' + dt.columns([0, 1]).dataSrc().join(' '));

    var columns_footer = columns.footer();
    var columns_header = columns.header();
    var columns_indexes = columns.indexes();
    columns_indexes = columns.indexes("visibile");
    var columns_nodes = columns.nodes();
    dt
        .columns('.ready')
        .nodes()
    //.flatten()  // Reduce to a 1D array
    //.to$()      // Convert to a jQuery object
    //.addClass('highlight');

    var columns_search_get = columns.search();
    var columns_search_set = columns.search("string");
    columns_search_set = columns.search("string", true);
    columns_search_set = columns.search("string", true, false);
    columns_search_set = columns.search("string", true, false, true);

    var columns_visible_get = columns.visible();
    var columns_visible_set = columns.visible(false);
    columns_visible_set = columns.visible(false, true);
    // Hide a column
    dt.column(1).visible(false);
    dt.columns([0, 1, 2, 3]).visible(false, false);
    dt.columns.adjust().draw(false); // adjust column sizing and redraw

    var columns_adjust = dt.columns.adjust();

    var column = dt.column("selector");
    column = dt.column("selector", modifier);

    dt.column(0).visible(false);

    $('#example tbody').on('click', 'td', function () {
        var visIdx = $(this).index();
        var dataIdx = dt.column.index('fromVisible', visIdx);

        alert('Column data index: ' + dataIdx + ', and visible index: ' + visIdx);
    });

    var column_cache = column.cache("order");
    // Create the select list and search operation
    var select = $('<select />')
        .appendTo(
        dt.column(0).footer()
        )
        .on('change', function () {
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
        .each(function (d: any) {
            select.append($('<option value="' + d + '">' + d + '</option>'));
        });

    var column_data = column.data();
    alert('Column 4 sum: ' +
        dt
            .column(4)
            .data()
            .reduce(function (a: any, b: any) {
                return a + b;
            })
    );

    var column_dataSrc = column.dataSrc();
    $('#example').on('click', 'tbody td', function () {
        var idx = dt.cell(this).index().column;
        alert('Data source: ' + dt.column(idx).dataSrc());
    });

    var column_footer = column.footer();
    var column_p = dt.column(0);
    //$(column.footer()).html(
    //    column_p
    //        .data()
    //        .reduce(function (a, b) {
    //        return a + b;
    //    })
    //    );

    var column_header = column.header();
    $('#example tbody').on('click', 'td', function () {
        var idx = dt.cell(this).index().column;
        var title = dt.column(idx).header();

        alert('Column title clicked on: ' + $(title).html());
    });

    var column_index = column.index();
    column_index = column.index("visibile");
    dt.column(0).visible(false);

    var idx = dt.column(1).index('visible');
    alert(idx); // will show 0

    dt.column('0:visible').order('asc');

    var column_nodes = column.nodes();
    dt.column(-1)
        .nodes()
    //.to$()      // Convert to a jQuery object
    //.addClass('ready');

    var column_search_get = column.search();
    var column_search_set = column.search("string");
    column_search_set = column.search("string", true);
    column_search_set = column.search("string", true, false);
    column_search_set = column.search("string", true, false, true);
    $('#column3_search').on('keyup', function () {
        dt
            .columns(3)
            .search((this as HTMLInputElement).value)
            .draw();
    });

    dt.columns('.select-filter').eq(0).each(function (colIdx: any) {
        // Create the select list and search operation
        var select = $('<select />')
            .appendTo(
            dt.column(colIdx).footer()
            )
            .on('change', function () {
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
            .each(function (d: any) {
                select.append($('<option value="' + d + '">' + d + '</option>'));
            });
    });

    var column_visible_get = column.visible();
    var column_visible_set = column.visible(false);
    column_visible_set = column.visible(false, true);
    alert('Column index 0 is ' +
        (dt.column(0).visible() === true ? 'visible' : 'not visible')
    );
    for (var i = 0; i < 4; i++) {
        dt.column(i).visible(false, false);
    }
    dt.columns.adjust().draw(false); // adjust column sizing and redraw

    dt.columns().every(function () { });
    dt.columns().every(function (colIdx, tableLoop, colLoop) { });

    //#endregion "Methods-Column"

    //#region "Methods-Row"

    var row_1 = dt.row("selector");
    var row_2 = dt.row("selector").child.hide();
    var row_3 = dt.row("selector").child.isShown();
    var row_4 = dt.row("selector").child.remove();
    var row_5 = dt.row("selector").child.show();
    var row_6 = dt.row("selector").child();
    var row_7 = dt.row("selector").child(false);
    var row_8 = dt.row("selector").child(false).hide();
    var row_9 = dt.row("selector").child("data");
    var row_10 = dt.row("selector").child("data").remove();
    var row_11 = dt.row("selector").child("data", "css").show();
    var row_12 = dt.row("selector").child.remove();
    var row_13 = dt.row("selector").child.show();
    var row_14 = dt.row.add({});
    var row_15 = dt.row("selector").invalidate();
    var row_16 = dt.row("selector").invalidate("auto");
    var row_17 = dt.row("selector").data();
    var row_18 = dt.row("selector").data({});
    var row_19 = dt.row("selector").index();
    var row_20 = dt.row("selector").node();
    var row_21 = dt.row("selector").remove();
    var row_22: string = dt.row("selector").id();
    var row_23: string = dt.row("selector").id(false);

    var rows_1 = dt.rows();
    var rows_2 = dt.rows().remove();
    var rows_3 = dt.rows("selector");
    var rows_4 = dt.rows("selector").cache("type");
    var rows_5 = dt.rows("selector").data();
    var rows_6 = dt.rows("selector").data({});
    var rows_7 = dt.rows("selector").indexes();
    var rows_8 = dt.rows("selector").invalidate();
    var rows_9 = dt.rows("selector").invalidate("auto");
    var rows_10 = dt.rows("selector").indexes();
    var rows_11 = dt.rows("selector").remove();
    var rows_12 = dt.rows("selector").nodes();
    var rows_13 = dt.rows.add([{}, {}]);
    dt.rows().every(function () { });
    dt.rows().every(function (rowIdx, tableLoop, rowLoop) { });
    var rows_14: DataTables.Api = dt.rows("selector").ids();
    var rows_15: DataTables.Api = dt.rows("selector").ids(false);

    var table3 = $('#example').DataTable();
    table3.row.add({
        "name": "Tiger Nixon",
        "position": "System Architect",
        "salary": "$3,120",
        "start_date": "2011/04/25",
        "office": "Edinburgh",
        "extn": "5421"
    }).draw();

    var table4 = $('#example').DataTable();
    table4.row.add([{
        "name": "Tiger Nixon",
        "position": "System Architect",
        "salary": "$3,120",
        "start_date": "2011/04/25",
        "office": "Edinburgh",
        "extn": "5421"
    }, {
        "name": "Garrett Winters",
        "position": "Director",
        "salary": "$5,300",
        "start_date": "2011/07/25",
        "office": "Edinburgh",
        "extn": "8422"
    }])
        .draw();

    var pupil: any;
    var table5 = $('#example').DataTable();
    table5.rows.add([
        pupil,
        pupil,
        pupil,
    ])
        .draw();
    //.nodes()
    //.to$()
    //.addClass('new');

    $('#example tbody').on('click', 'td.details-control', function () {
        var tr = $(this).parents('tr');
        var row = dt.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
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

    dt.rows().eq(0).each(function (rowIdx: any) {
        dt
            .row(rowIdx)
            .child(
            $(
                '<tr>' +
                '<td>' + rowIdx + '.1</td>' +
                '<td>' + rowIdx + '.2</td>' +
                '<td>' + rowIdx + '.3</td>' +
                '<td>' + rowIdx + '.4</td>' +
                '</tr>'
            )
            )
            .show();
    });

    $('#example tbody').on('click', 'td.details-control', function () {
        var tr = $(this).parents('tr');
        var row = dt.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row (the format() function would return the data to be shown)
            row.child("").show();
            tr.addClass('shown');
        }
    });

    $('#example tbody').on('click', 'td.details-control', function () {
        var tr = $(this).parents('tr');
        var row = dt.row(tr);

        if (row.child.isShown()) {
            // This row is already open - remove it
            row.child.remove();
            tr.removeClass('shown');
        }
        else {
            // Open this row (the format() function would return the data to be shown)
            row.child("").show();
            tr.addClass('shown');
        }
    });

    //#endregion "Methods-Row"

    //#region "Methods-Static"

    // Variable is a stand-in for $.fn.dataTable. See extension of JQueryStatic at the top of index.d.ts.
    var staticFn: DataTables.StaticFunctions;

    // With boolean parameter type, always returns DataTables.DataTable[].
    var static_1: DataTables.Api[] = <DataTables.Api[]>staticFn.tables(true);
    // With object parameter type, returns DataTables.DataTable[] when "api" property is false.
    static_1 = <DataTables.Api[]>staticFn.tables({ "visible": true, "api": false });
    // With object parameter type, returns DataTables.DataTable when "api" property is true.
    var static_2: DataTables.Api = <DataTables.Api>staticFn.tables({ "visible": true, "api": true });

    //#endregion "Methods-Static"

    //#region "Methods-Table"

    var tables = dt.tables();
    tables = dt.tables("selector");

    var tables_body = tables.body();
    var tables_containers = tables.containers();
    var tables_footer = tables.footer();
    var tables_header = tables.header();
    var tables_nodes = tables.nodes();

    var table = dt.table("selector");

    var table_body = table.body();
    var table_container = table.container();
    var table_footer = table.footer();
    var table_header = table.header();
    var table_node = table.node();

    //#endregion "Methods-Table"

    //#region "Methods-Util"

    var util_1: boolean = dt.any();
    var util_2: number = dt.count();

    //#endregion "Methods-Util"
});
