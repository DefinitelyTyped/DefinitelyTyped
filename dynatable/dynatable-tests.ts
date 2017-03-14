// Using the global setup option
// =============================
$.dynatableSetup({ features: { pushState: false }, dataset: { perPageDefault: 5, perPageOptions: [2, 5, 10] } });


// Without any settings (using all defaults)
// =========================================
var dynatableWithDefaultSettings = $('#example-table').dynatable();


// Building a config piece by piece
// ================================
// JQueryDynatable.Features
var featsConfig: JQueryDynatable.Features = {
    paginate: true,
    sort: false,
    pushState: true,
    search: true,
    recordCount: true,
    perPageSelect: true
};
var featsPartialConfig: JQueryDynatable.Features = {
    search: false,
    paginate: false
};
// JQueryDynatable.Column
var col: JQueryDynatable.Column = {
    index: 0,
    label: 'Col from JS',
    id: 'someColId',
    attributeWriter: function myAttrWriter(data: any): any {
        return data[this.id];
    },
    attributeReader: function myAttrReader(cell: Element, data: any): string {
        return $(cell).html();
    },
    sorts: ['un', 'deux'],
    hidden: false,
    textAlign: 'right'
};
// JQueryDynatable.Table
var tableConfig: JQueryDynatable.Table = {
    defaultColumnIdStyle: 'underscore',
    columns: [col], // Just for fun & testing... because will be reset by dynatable
    headRowSelector: '.my-head-row-selector',
    bodyRowSelector: 'tbody tr',
    headRowClass: 'custom-head-row-class'
};
var tablePartialConfig: JQueryDynatable.Table = {
    defaultColumnIdStyle: 'trimDash'
};
// JQueryDynatable.Inputs
var tableInputs: JQueryDynatable.Inputs = {
    // Must match exactly target value, strict comparison!
    queries: $('#countryFilter, #yearFilter'),
    // I believe this setting is unused!
    sorts: null,
    multisort: ['shiftKey'],
    // I believe this setting is unused!
    page: null,
    queryEvent: 'keyup',
    recordCountTarget: $('#record-count'),
    recordCountPlacement: 'after',
    paginationLinkTarget: '#record-count',
    paginationLinkPlacement: 'before',
    paginationClass: 'paginationClass',
    paginationLinkClass: 'paginationLinkClass',
    paginationPrevClass: 'paginationPrevClass',
    paginationNextClass: 'paginationNextClass',
    paginationActiveClass: 'paginationActiveClass',
    paginationDisabledClass: 'paginationDisabledClass',
    paginationPrev: '&lt; Prev.',
    paginationNext: 'Next &gt;',
    paginationGap: [3, 1, 1, 3],
    searchTarget: $('#record-count').get(0),
    searchPlacement: 'after',
    searchText: 'Search: ',
    perPageTarget: '#record-count',
    perPagePlacement: 'before',
    perPageText: 'Display: ',
    pageText: 'Pages: ',
    recordCountPageBoundTemplate: '{pageLowerBound} t-o {pageUpperBound} o-f',
    recordCountPageUnboundedTemplate: '{recordsShown} -of-',
    recordCountTotalTemplate: '{recordsQueryCount} x {collectionName}',
    recordCountFilteredTemplate: ' (found from {recordsTotal} total entries)',
    recordCountText: 'Rendering',
    recordCountTextTemplate: '{text} {pageTemplate} {totalTemplate} {filteredTemplate}',
    recordCountTemplate: '<span id="dynatable-record-count-{elementId}" class="dynatable-record-count">!!{textTemplate}!!</span>',
    processingText: 'Working...'
};
// JQueryDynatable.Dataset
var tableDataset: JQueryDynatable.Dataset = {
    ajax: false,
    ajaxUrl: null,
    ajaxCache: null,
    ajaxOnLoad: false,
    ajaxMethod: 'GET',
    ajaxDataType: 'json',
    totalRecordCount: null,
    queries: {},
    queryRecordCount: null,
    page: null,
    perPageDefault: 3,
    perPageOptions: [2, 3, 10],
    sorts: {},
    sortsKeys: [],
    sortTypes: {},
    records: null
};
// JQueryDynatable.Writers
var tableWriters: JQueryDynatable.Writers = {
    _rowWriter: function exampleRowWriter(rowIndex, record, columns, cellWriter) {
        var tr = '';
        // grab the record's attribute for each column
        for (var i = 0, len = columns.length; i < len; i++) {
            tr += cellWriter(columns[i], record);
        }
        return '<tr>' + tr + '</tr>';
    },
    _cellWriter: function exampleCellWriter(column, record) {
        var html = column.attributeWriter(record),
            td = '<td';

        if (column.hidden || column.textAlign) {
            td += ' style="';

            // keep cells for hidden column headers hidden
            if (column.hidden) {
                td += 'display: none;';
            }

            // keep cells aligned as their column headers are aligned
            if (column.textAlign) {
                td += 'text-align: ' + column.textAlign + ';';
            }

            td += '"';
        }

        return td + '>' + html + '</td>';
    },
    _attributeWriter: function exampleAttributeWriter(record) {
        // `this` is the column object in settings.columns
        return record[this.id];
    }
};
// JQueryDynatable.Readers
var tableReaders: JQueryDynatable.Readers = {
    _rowReader: null,
    _attributeReader: function exampleAttributeReader(cell, record) {
        return $(cell).html();
    }
};
// JQueryDynatable.Params
var tableParams: JQueryDynatable.Params = {
    dynatable: 'dynatable',
    queries: 'queries',
    sorts: 'sorts',
    page: 'page',
    perPage: 'perPage',
    offset: 'offset',
    records: 'records',
    record: null,
    queryRecordCount: 'queryRecordCount',
    totalRecordCount: 'totalRecordCount'
};
var dynatableOptions: JQueryDynatable.Options = {
    // Grouping config components
    features: featsConfig,
    table: tableConfig,
    inputs: tableInputs,
    dataset: tableDataset,
    writers: tableWriters,
    readers: tableReaders,
    params: tableParams
};
// Init with the options
var dynatableWithOptions = $('#example-with-options').dynatable(dynatableOptions);

// Inline config
// =============
// Init with the options
var dynatableWithInlineOptions = $('#example-with-inline-options').dynatable({
    features: {
        paginate: false,
        search: false,
        sort: true
    }
});


// Using $element
// ==============
var dtable: JQueryDynatable.Dynatable = $('#testing-element').dynatable().data('dynatable');
dtable.$element.addClass('some-class-to-be-added-on-the-element');


// Using the API
// =============
// domColumns API
dtable.domColumns.add($('<th>A</th>'), 0, false, true);
dtable.domColumns.add($('<th>B</th>'), 1, false, true);
// dom API
dtable.dom.update(); // update the dom with the current record set
// paginationPage API
dtable.paginationPage.set(2);
// paginationPerPage API
dtable.paginationPerPage.set(1, true);
// processingIndicator API
setTimeout(function() { dtable.processingIndicator.show(); }, 1000);
setTimeout(function() { dtable.processingIndicator.hide(); }, 3000);
// queries API
// records API
// recordsCount API
// settings API
// sorts API
dtable.sorts.clear();
dtable.sorts.add('theRank', -1) // 1=ASCENDING, -1=DESCENDING
dtable.sorts.remove('country');
dtable.process();
// sortsHeaders API
// state API

// Creating a Custom Sort Function
// dynatable.queries.functions['max-price'] = function(record, queryValue) {
