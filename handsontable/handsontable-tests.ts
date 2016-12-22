

function test_HandsontableInit() {
  var elem = document.createElement('div');
  var hot = new Handsontable(elem, {
    allowEmpty: true,
    allowInsertColumn: true,
    allowInsertRow: true,
    allowInvalid: true,
    allowRemoveColumn: true,
    allowRemoveRow: true,
    autoColumnSize: true,
    autoComplete: [],
    autoRowSize: true,
    autoWrapCol: true,
    autoWrapRow: true,
    bindRowsWithHeaders: 'foo',
    cell: [],
    cells: function() {},
    checkedTemplate: true,
    className: [],
    colHeaders: true,
    collapsibleColumns: true,
    columnHeaderHeight: 123,
    columns: [],
    columnSorting: {},
    columnSummary: {},
    colWidths: 123,
    commentedCellClassName: 'foo',
    comments: [],
    contextMenu: true,
    contextMenuCopyPaste: {},
    copyable: true,
    copyColsLimit: 123,
    copyPaste: true,
    copyRowsLimit: 123,
    correctFormat: true,
    currentColClassName: 'foo',
    currentRowClassName: 'foo',
    customBorders: true,
    data: [],
    dataSchema: {},
    dateFormat: 'foo',
    debug: true,
    defaultDate: 'foo',
    disableVisualSelection: true,
    dropdownMenu: [],
    editor: true,
    enterBeginsEditing: true,
    enterMoves: {},
    fillHandle: true,
    filter: true,
    filteringCaseSensitive: true,
    filters: false,
    fixedColumnsLeft: 123,
    fixedRowsBottom: 123,
    fixedRowsTop: 123,
    format: 'foo',
    fragmentSelection: true,
    ganttChart: {},
    headerTooltips: true,
    height: 123,
    hiddenColumns: true,
    hiddenRows: {},
    invalidCellClassName: 'foo',
    label: {},
    language: 'foo',
    manualColumnFreeze: true,
    manualColumnMove: true,
    manualColumnResize: true,
    manualRowMove: true,
    manualRowResize: true,
    maxCols: 123,
    maxRows: 123,
    mergeCells: true,
    minCols: 123,
    minRows: 123,
    minSpareCols: 123,
    minSpareRows: 123,
    multiSelect: true,
    nestedHeaders: [],
    noWordWrapClassName: 'foo',
    observeChanges: true,
    observeDOMVisibility: true,
    outsideClickDeselects: true,
    pasteMode: 'foo',
    persistentState: true,
    placeholder: 123,
    placeholderCellClassName: 'foo',
    preventOverflow: true,
    readOnly: true,
    readOnlyCellClassName: 'foo',
    renderAllRows: true,
    renderer: 'foo',
    rowHeaders: true,
    rowHeaderWidth: 123,
    rowHeights: 123,
    search: true,
    selectOptions: [],
    skipColumnOnPaste: true,
    sortByRelevance: true,
    sortFunction: function() {},
    sortIndicator: true,
    source: [],
    startCols: 123,
    startRows: 123,
    stretchH: 'foo',
    strict: true,
    tableClassName: 'foo',
    tabMoves: {},
    title: 'foo',
    trimDropdown: true,
    trimWhitespace: true,
    type: 'foo',
    uncheckedTemplate: true,
    undo: true,
    validator: function() {},
    viewportColumnRenderingOffset: 123,
    viewportRowRenderingOffset: 123,
    visibleRows: 123,
    width: 1232,
    wordWrap: true,

    // Hooks
    afterAutofillApplyValues: function() {},
    afterCellMetaReset: function() {},
    afterChange: function() {},
    afterChangesObserved: function() {},
    afterColumnMove: function() {},
    afterColumnResize: function() {},
    afterColumnSort: function() {},
    afterContextMenuDefaultOptions: function() {},
    afterContextMenuHide: function() {},
    afterContextMenuShow: function() {},
    afterCopyLimit: function() {},
    afterCreateCol: function() {},
    afterCreateRow: function() {},
    afterDeselect: function() {},
    afterDestroy: function() {},
    afterDocumentKeyDown: function() {},
    afterFilter: function() {},
    afterGetCellMeta: function() {},
    afterGetColHeader: function() {},
    afterGetColumnHeaderRenderers: function() {},
    afterGetRowHeader: function() {},
    afterGetRowHeaderRenderers: function() {},
    afterInit: function() {},
    afterLoadData: function() {},
    afterMomentumScroll: function() {},
    afterOnCellCornerMouseDown: function() {},
    afterOnCellMouseDown: function() {},
    afterOnCellMouseOver: function() {},
    afterRemoveCol: function() {},
    afterRemoveRow: function() {},
    afterRender: function() {},
    afterRenderer: function() {},
    afterRowMove: function() {},
    afterRowResize: function() {},
    afterScrollHorizontally: function() {},
    afterScrollVertically: function() {},
    afterSelection: function() {},
    afterSelectionByProp: function() {},
    afterSelectionEnd: function() {},
    afterSelectionEndByProp: function() {},
    afterSetCellMeta: function() {},
    afterUpdateSettings: function() {},
    afterValidate: function() {},
    beforeAutofill: function() {},
    beforeCellAlignment: function() {},
    beforeChange: function() {},
    beforeChangeRender: function() {},
    beforeColumnMove: function() {},
    beforeColumnResize: function() {},
    beforeColumnSort: function() {},
    beforeDrawBorders: function() {},
    beforeFilter: function() {},
    beforeGetCellMeta: function() {},
    beforeInit: function() {},
    beforeInitWalkontable: function() {},
    beforeKeyDown: function() {},
    beforeOnCellMouseDown: function() {},
    beforeRemoveCol: function() {},
    beforeRemoveRow: function() {},
    beforeRender: function() {},
    beforeRenderer: function() {},
    beforeRowMove: function() {},
    beforeRowResize: function() {},
    beforeSetRangeEnd: function() {},
    beforeStretchingColumnWidth: function() {},
    beforeTouchScroll: function() {},
    beforeValidate: function() {},
    construct: function() {},
    init: function() {},
    modifyCol: function() {},
    modifyColHeader: function() {},
    modifyColWidth: function() {},
    modifyCopyableRange: function() {},
    modifyRow: function() {},
    modifyRowHeader: function() {},
    modifyRowHeight: function() {},
    persistentStateLoad: function() {},
    persistentStateReset: function() {},
    persistentStateSave: function() {},
    unmodifyCol: function() {}
  });
}

function test_HandsontableMethods() {
  var elem = document.createElement('div');
  var hot = new Handsontable(elem, {});
  hot.addHook('foo', []);
  hot.addHookOnce('foo', []);
  hot.alter('foo', 123, 123, 'foo', true);
  hot.clear();
  hot.colOffset();
  hot.colToProp(123);
  hot.countCols();
  hot.countEmptyCols(true);
  hot.countEmptyRows(true);
  hot.countRenderedCols();
  hot.countRenderedRows();
  hot.countRows();
  hot.countSourceRows();
  hot.countVisibleCols();
  hot.countVisibleRows();
  hot.deselectCell();
  hot.destroy();
  hot.destroyEditor(true);
  hot.getActiveEditor();
  hot.getCell(123, 123, true);
  hot.getCellEditor(123, 123);
  hot.getCellMeta(123, 123);
  hot.getCellRenderer(123, 123);
  hot.getCellValidator(123, 123);
  hot.getColHeader(123);
  hot.getColWidth(123);
  hot.getCoords(elem.querySelector('td'));
  hot.getCopyableData(123, 123);
  hot.getCopyableText(123, 123, 123, 123);
  hot.getData(123, 123, 123, 123);
  hot.getDataAtCell(123, 123);
  hot.getDataAtCol(123);
  hot.getDataAtProp(123);
  hot.getDataAtRow(123);
  hot.getDataAtRowProp(123, 'foo');
  hot.getDataType(123, 123, 123, 123);
  hot.getInstance();
  hot.getPlugin('foo');
  hot.getRowHeader(123);
  hot.getRowHeight(123);
  hot.getSchema();
  hot.getSelected();
  const range: ht.Range = hot.getSelectedRange();
  hot.getSettings();
  hot.getSourceData(123, 123, 123, 123);
  hot.getSourceDataAtCell(123, 123);
  hot.getSourceDataAtCol(123);
  hot.getSourceDataAtRow(123);
  hot.getValue();
  hot.hasColHeaders();
  hot.hasHook('foo');
  hot.hasRowHeaders();
  hot.isEmptyCol(123);
  hot.isEmptyRow(123);
  hot.isListening();
  hot.listen();
  hot.loadData([]);
  hot.populateFromArray(123, 123, [], 123, 123, 'foo', 'foo', 'foo', []);
  hot.propToCol('foo');
  hot.propToCol(123);
  hot.removeCellMeta(123, 123, 'foo');
  hot.removeHook('foo', function() {});
  hot.render();
  hot.rowOffset();
  hot.runHooks('foo', 123, 'foo', true, {}, [], function() {});
  hot.selectCell(123, 123, 123, 123, true, true);
  hot.selectCellByProp(123, 'foo', 123, 'foo', true);
  hot.setCellMeta(123, 123, 'foo', 'foo');
  hot.setCellMetaObject(123, 123, {});
  hot.setDataAtCell(123, 123, 'foo', 'foo');
  hot.setDataAtRowProp(123, 'foo', 'foo', 'foo');
  hot.spliceCol(123, 123, 123, 'foo');
  hot.spliceRow(123, 123, 123, 'foo');
  hot.unlisten();
  hot.updateSettings({}, true);
  hot.validateCells(function() {});
  
  Handsontable.renderers.NumericRenderer(hot, new HTMLTableDataCellElement(), 0, 0, "prop", 1.235, {});
  Handsontable.renderers.TextRenderer(hot, new HTMLTableDataCellElement(), 0, 0, "prop", 1.235, {});
  Handsontable.Dom.addEvent(new HTMLElement(), "eventName", () => {});
}
