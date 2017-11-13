function test_HandsontableInit() {
  const elem = document.createElement('div');
  const hot = new Handsontable(elem, {
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
    cells: () => { return; },
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
    sortFunction: () => { return; },
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
    validator: () => {return; },
    viewportColumnRenderingOffset: 123,
    viewportRowRenderingOffset: 123,
    visibleRows: 123,
    width: 1232,
    wordWrap: true,

    // Hooks
    afterAutofillApplyValues: () => {return; },
    afterCellMetaReset: () => {return; },
    afterChange: (changes) => {return; },
    afterChangesObserved: () => {return; },
    afterColumnMove: () => {return; },
    afterColumnResize: () => {return; },
    afterColumnSort: () => {return; },
    afterContextMenuDefaultOptions: () => {return; },
    afterContextMenuHide: () => {return; },
    afterContextMenuShow: () => {return; },
    afterCopyLimit: () => {return; },
    afterCreateCol: () => {return; },
    afterCreateRow: () => {return; },
    afterDeselect: () => {return; },
    afterDestroy: () => {return; },
    afterDocumentKeyDown: () => {return; },
    afterFilter: () => {return; },
    afterGetCellMeta: () => {return; },
    afterGetColHeader: () => {return; },
    afterGetColumnHeaderRenderers: () => {return; },
    afterGetRowHeader: () => {return; },
    afterGetRowHeaderRenderers: () => {return; },
    afterInit: () => {return; },
    afterLoadData: () => {return; },
    afterMomentumScroll: () => {return; },
    afterOnCellCornerDblClick: () => {return; },
    afterOnCellCornerMouseDown: () => {return; },
    afterOnCellMouseDown: () => {return; },
    afterOnCellMouseOver: () => {return; },
    afterRemoveCol: () => {return; },
    afterRemoveRow: () => {return; },
    afterRender: () => {return; },
    afterRenderer: () => {return; },
    afterRowMove: () => {return; },
    afterRowResize: () => {return; },
    afterScrollHorizontally: () => {return; },
    afterScrollVertically: () => {return; },
    afterSelection: () => {return; },
    afterSelectionByProp: () => {return; },
    afterSelectionEnd: () => {return; },
    afterSelectionEndByProp: () => {return; },
    afterSetCellMeta: () => {return; },
    afterUpdateSettings: () => {return; },
    afterValidate: () => {return; },
    beforeAutofill: () => {return; },
    beforeCellAlignment: () => {return; },
    beforeChange: () => {return; },
    beforeChangeRender: () => {return; },
    beforeColumnMove: () => {return; },
    beforeColumnResize: () => {return; },
    beforeColumnSort: () => {return; },
    beforeDrawBorders: () => {return; },
    beforeFilter: () => {return; },
    beforeGetCellMeta: () => {return; },
    beforeInit: () => {return; },
    beforeInitWalkontable: () => {return; },
    beforeKeyDown: () => {return; },
    beforeOnCellMouseDown: () => {return; },
    beforeRemoveCol: () => {return; },
    beforeRemoveRow: () => {return; },
    beforeRender: () => {return; },
    beforeRenderer: () => {return; },
    beforeRowMove: () => {return; },
    beforeRowResize: () => {return; },
    beforeSetRangeEnd: () => {return; },
    beforeStretchingColumnWidth: () => {return; },
    beforeTouchScroll: () => {return; },
    beforeValidate: () => {return; },
    construct: () => {return; },
    init: () => {return; },
    modifyCol: () => {return; },
    modifyColHeader: () => {return; },
    modifyColWidth: () => {return; },
    modifyCopyableRange: () => {return; },
    modifyRow: () => {return; },
    modifyRowHeader: () => {return; },
    modifyRowHeight: () => {return; },
    persistentStateLoad: () => {return; },
    persistentStateReset: () => {return; },
    persistentStateSave: () => {return; },
    unmodifyCol: () => {return; }
  });
}

function test_HandsontableMethods() {
  const elem = document.createElement('div');
  const hot = new Handsontable(elem, {});
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
  const range: Handsontable.Range = hot.getSelectedRange();
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
  hot.removeHook('foo', () => {return; });
  hot.render();
  hot.rowOffset();
  hot.runHooks('foo', 123, 'foo', true, {}, [], () => {return; });
  hot.selectCell(123, 123, 123, 123, true, true);
  hot.selectCellByProp(123, 'foo', 123, 'foo', true);
  hot.setCellMeta(123, 123, 'foo', 'foo');
  hot.setCellMetaObject(123, 123, {});
  hot.setDataAtCell(123, 123, 'foo', 'foo');
  hot.setDataAtCell([[123, 123, 'foo'], [123, 123, 'foo']]);
  hot.setDataAtRowProp(123, 'foo', 'foo', 'foo');
  hot.spliceCol(123, 123, 123, 'foo');
  hot.spliceRow(123, 123, 123, 'foo');
  hot.toPhysicalRow(123);
  hot.toPhysicalColumn(123);
  hot.toVisualRow(123);
  hot.toVisualColumn(123);
  hot.unlisten();
  hot.updateSettings({}, true);
  hot.validateCells(() => {return; });

  Handsontable.renderers.NumericRenderer(hot, new HTMLTableDataCellElement(), 0, 0, "prop", 1.235, {});
  Handsontable.renderers.TextRenderer(hot, new HTMLTableDataCellElement(), 0, 0, "prop", 1.235, {});
  Handsontable.Dom.addEvent(new HTMLElement(), "eventName", () => { return; });
  Handsontable.Dom.empty(new HTMLElement());

  let bucket: {};
  let registeredHooks: string[];
  let hasHook: boolean;
  let isRegistered: boolean;
  bucket = Handsontable.hooks.add('beforeInit', () => { return; });
  bucket = Handsontable.hooks.add('beforeInit', () => { return; }, hot);
  Handsontable.hooks.createEmptyBucket();
  Handsontable.hooks.deregister('myHook');
  Handsontable.hooks.destroy();
  Handsontable.hooks.destroy(hot);
  bucket = Handsontable.hooks.getBucket();
  bucket = Handsontable.hooks.getBucket(hot);
  registeredHooks = Handsontable.hooks.getRegistered();
  hasHook = Handsontable.hooks.has("myHook");
  hasHook = Handsontable.hooks.has("myHook", hot);
  isRegistered = Handsontable.hooks.isRegistered("myHook");
  Handsontable.hooks.once('beforeInit', () => { return; });
  Handsontable.hooks.once('beforeInit', [() => { return; }, () => { return; }]);
  Handsontable.hooks.once('beforeInit', () => { return; }, hot);
  Handsontable.hooks.register('myHook');
  Handsontable.hooks.remove('beforeInit', () => { return; });
  Handsontable.hooks.remove('beforeInit', () => { return; }, hot);
  Handsontable.hooks.run(hot, 'beforeInit');
  Handsontable.hooks.run(hot, 'beforeInit', 'param1', 'param2', 'param3', 'param4', 'param5', 'param6');
 }

class MyCustomHotPlugin extends Handsontable.plugins.BasePlugin {
  isEnabled(): boolean {
    return !!this.hot.getSettings().manualRowMove;
  }
}
