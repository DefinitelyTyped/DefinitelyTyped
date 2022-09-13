var options1: ngGrid.IGridOptions = {
    data: [{ 'Name': 'Bob' }, { 'Name': 'Jane' }]
};

var options2: ngGrid.IGridOptions = {
    afterSelectionChange: () => { },
    beforeSelectionChange: () => {return true; },
    dataUpdated: () => { }
};

var options3: ngGrid.IGridOptions = {
    columnDefs: [
        { field: 'name', displayName: 'Name' },
        { field: 'age', displayName: 'Age' }
    ]
};

var options4: ngGrid.IGridOptions = {
    pagingOptions: {
        pageSizes: [1, 2, 3, 4],
        pageSize: 2,
        totalServerItems: 100,
        currentPage: 1
    }
};

var columnDef: ngGrid.IColumnDef = {
    width:{},
    minWidth:{},
    visible:false,
    field:'',
    displayName:'',
    sortable:false,
    resizable:false,
    groupable:false,
    pinnable:false,
    editableCellTemplate:'',
    enableCellEdit:false,
    cellEditableCondition:'',
    sortFn:(a:any, b:any):number=> { return 0 },
    cellTemplate:'',
    cellClass:'',
    headerClass:'',
    headerCellTemplate:'',
    cellFilter:'',
    aggLabelFilter:'',
    pinned:false
}

var searchProvider: ngGrid.ISearchProvider = <ngGrid.ISearchProvider>{};
searchProvider.fieldMap = {};
searchProvider.extFilter = false;
searchProvider.evalFilter();

var nr:number;

var selectionProvider: ngGrid.ISelectionProvider = <ngGrid.ISelectionProvider>{};
selectionProvider.multi = false;
selectionProvider.selectedItems = [];
selectionProvider.selectedIndex = 1;
selectionProvider.lastClickedRow = {};
selectionProvider.ignoreSelectedItemChanges = false;
selectionProvider.pKeyParser = <angular.ICompiledExpression>{};
selectionProvider.ChangeSelection({}, {});
nr = selectionProvider.getSelection({});
nr = selectionProvider.getSelectionIndex({});
selectionProvider.setSelection(<ngGrid.IRow>{}, false);
selectionProvider.toggleSelectAll(true, false, false);

var eventProvider: ngGrid.IEventProvider = <ngGrid.IEventProvider>{};
eventProvider.colToMove = <ngGrid.IColumn>{};
eventProvider.groupToMove = {};
eventProvider.assignEvents();
eventProvider.assignGridEventHandlers();
eventProvider.dragStart({});
eventProvider.dragOver({});
eventProvider.setDraggables();
eventProvider.onGroupMouseDown({});
eventProvider.onGroupDrop({});
eventProvider.onHeaderMouseDown({});
eventProvider.onHeaderDrop({});

var aggregate: ngGrid.IAggregate = <ngGrid.IAggregate>{};
aggregate.rowIndex = 0;
aggregate.offsetTop = 0;
aggregate.entity = {};
aggregate.label = '';
aggregate.field = '';
aggregate.depth = 0;
aggregate.parent = {};
aggregate.children = [];
aggregate.aggChildren = [];
aggregate.aggIndex = 0;
aggregate.collapsed = false;
aggregate.groupInitState = false;
aggregate.rowFactory = <ngGrid.IRowFactory>{};
aggregate.rowHeight = 0;
aggregate.isAggRow = false;
aggregate.offsetLeft = 0;
aggregate.aggLabelFilter = {};

var rowConfig: ngGrid.IRowConfig = <ngGrid.IRowConfig>{};
rowConfig.enableCellSelection = false;
rowConfig.enableRowSelection = false;
rowConfig.jqueryUITheme = false;
rowConfig.rowClasses = [''];
rowConfig.rowHeight = 0;
rowConfig.selectWithCheckboxOnly = false;
rowConfig.selectedItems = [];
rowConfig.afterSelectionChangeCallback();
rowConfig.beforeSelectionChangeCallback();

var renderedRange: ngGrid.IRenderedRange = <ngGrid.IRenderedRange>{};
renderedRange.bottomRow = 0;
renderedRange.topRow = 0;

var rowFactory: ngGrid.IRowFactory = <ngGrid.IRowFactory>{};
rowFactory.aggCache= null;
rowFactory.dataChanged= false;
rowFactory.groupedData= null;
rowFactory.numberOfAggregates = 0;
rowFactory.parentCache= [];
rowFactory.parsedData= [];
rowFactory.renderedRange = <ngGrid.IRenderedRange>{};
rowFactory.rowConfig = <ngGrid.IRowConfig>{};
rowFactory.rowHeight = 0;
rowFactory.selectionProvider = <ngGrid.ISelectionProvider>{};
rowFactory.UpdateViewableRange(<ngGrid.IRenderedRange>{});
aggregate = rowFactory.buildAggregateRow({}, 0);
var row:ngGrid.IRow = rowFactory.buildEntityRow({}, 0);
rowFactory.filteredRowsChanged();
rowFactory.fixRowCache();
rowFactory.getGrouping({});
rowFactory.parseGroupData({});
rowFactory.renderedChange();
rowFactory.renderedChangeNoGroups();

var dimension: ngGrid.IDimension = <ngGrid.IDimension>{};
dimension.outerHeight = 0;
dimension.outerWidth = 0;
dimension.autoFitHeight = false;

var elmDimension: ngGrid.IElementDimension = <ngGrid.IElementDimension>{};
elmDimension.rootMaxH = 0;
elmDimension.rootMaxW = 0;
elmDimension.rowIndexCellW = 0;
elmDimension.rowSelectedCellW = 0;
elmDimension.scrollH = 0;
elmDimension.scrollW = 0;

var row: ngGrid.IRow = <ngGrid.IRow>{};
row.entity= {};
row.config = <ngGrid.IRowConfig>{};
row.selectionProvider = <ngGrid.ISelectionProvider>{};
row.rowIndex = 0;
row.utils= {};
row.selected = false;
row.cursor = '';
row.offsetTop = 0;
row.rowDisplayIndex = 0;
row.afterSelectionChange();
row.beforeSelectionChange();
row.setSelection(false);
row.continueSelection({});
row.ensureEntity({});
var b:boolean = row.toggleSelected({});
row.alternatingRowClass();
var a:any = row.getProperty('');
var r:ngGrid.IRow = row.copy();
row.setVars(<ngGrid.IRow>{});

var column: ngGrid.IColumn = <ngGrid.IColumn>{};
column.colDef = <ngGrid.IColumnDef>{};
column.width = 0;
column.groupIndex = 0;
column.isGroupedBy = false;
column.minWidth = 0;
column.maxWidth = 0;
column.enableCellEdit = false;
column.cellEditableCondition = {};
column.headerRowHeight = 0;
column.displayName = '';
column.index = 0;
column.isAggCol = false;
column.cellClass = '';
column.sortPriority = 0;
column.cellFilter = {};
column.field = '';
column.aggLabelFilter = {};
column.visible = false;
column.sortable = false;
column.resizable = false;
column.pinnable = false;
column.pinned = false;
column.originalIndex = 0;
column.groupable = false;
column.sortDirection = '';
column.sortingAlgorithm = ()=>{};
column.headerClass = '';
column.cursor = '';
column.headerCellTemplate = '';
column.cellTemplate = '';
var s:string = column.groupedByClass();
column.toggleVisible();
b = column.showSortButtonUp();
b = column.showSortButtonDown();
b = column.noSortVisible();
b = column.sort({});
a = column.gripClick();
a = column.gripOnMouseDown({});
column.onMouseMove({});
column.gripOnMouseUp({});
var c:ngGrid.IColumn = column.copy();
column.setVars(c);

var gridScope: ngGrid.IGridScope = <ngGrid.IGridScope>{};
gridScope.elementsNeedMeasuring = false;
gridScope.columns = [];
gridScope.renderedRows = [];
gridScope.renderedColumns = [];
gridScope.headerRow = {};
gridScope.rowHeight = 0;
gridScope.jqueryUITheme = {};
gridScope.showSelectionCheckbox = false;
gridScope.enableCellSelection = false;
gridScope.enableCellEditOnFocus = false;
gridScope.footer = <ngGrid.IFooter>{};
gridScope.selectedItems = [];
gridScope.multiSelect = false;
gridScope.showFooter = false;
gridScope.footerRowHeight = 0;
gridScope.showColumnMenu = false;
gridScope.forceSyncScrolling = false;
gridScope.showMenu = false;
gridScope.configGroups = [];
gridScope.gridId = '';
gridScope.enablePaging = false;
gridScope.pagingOptions = <ngGrid.IPagingOptions>{};
gridScope.i18n = {};
gridScope.selectionProvider = <ngGrid.ISelectionProvider>{};
gridScope.adjustScrollLeft(0);
gridScope.adjustScrollTop(0, true);
gridScope.toggleShowMenu();
gridScope.toggleSelectAll();
nr = gridScope.totalFilteredItemsLength();
a = gridScope.showGroupPanel();
nr = gridScope.topPanelHeight();
nr = gridScope.viewportDimHeight();
gridScope.groupBy(<ngGrid.IColumn>{});
gridScope.removeGroup(0);
gridScope.togglePin(<ngGrid.IColumn>{});
nr = gridScope.totalRowWidth();
a = gridScope.headerScrollerDim();

var gridInstance: ngGrid.IGridInstance = <ngGrid.IGridInstance>{};
gridInstance.$canvas = <angular.IAugmentedJQuery>{};
gridInstance.$viewport = <angular.IAugmentedJQuery>{};
gridInstance.$groupPanel = <angular.IAugmentedJQuery>{};
gridInstance.$footerPanel = <angular.IAugmentedJQuery>{};
gridInstance.$headerScroller = <angular.IAugmentedJQuery>{};
gridInstance.$headerContainer = <angular.IAugmentedJQuery>{};
gridInstance.$headers = <angular.IAugmentedJQuery>{};
gridInstance.$topPanel = <angular.IAugmentedJQuery>{};
gridInstance.$root = <angular.IAugmentedJQuery>{};
gridInstance.config = <ngGrid.IGridOptions>{};
gridInstance.data = {};
gridInstance.elementDims = <ngGrid.IElementDimension>{};
gridInstance.eventProvider = <ngGrid.IEventProvider>{};
gridInstance.filteredRows = [<ngGrid.IRow>{}];
gridInstance.footerController = {};
gridInstance.gridId = '';
gridInstance.lastSortedColumns = [<ngGrid.IColumn>{}];
gridInstance.lateBindColumns = false;
gridInstance.maxCanvasHt = 0;
gridInstance.prevScrollIndex = 0;
gridInstance.prevScrollTop = 0;
gridInstance.rootDim = <ngGrid.IDimension>{};
gridInstance.rowCache = [<ngGrid.IRow>{}];
gridInstance.rowFactory = <ngGrid.IRowFactory>{};
gridInstance.rowMap = [<ngGrid.IRow>{}];
gridInstance.searchProvider = <ngGrid.ISearchProvider>{};
gridInstance.styleProvider = <ngGrid.IStyleProvider>{};
gridInstance.buildColumnDefsFromData();
gridInstance.buildColumns();
gridInstance.calcMaxCanvasHeight();
gridInstance.clearSortingData();
gridInstance.configureColumnWidths();
gridInstance.fixColumnIndexes();
gridInstance.fixGroupIndexes();
var p:angular.IPromise<any> = gridInstance.getTemplate('');
p = gridInstance.init();
p = gridInstance.initTemplates();
gridInstance.minRowsToRender();
gridInstance.refreshDomSizes();
gridInstance.resizeOnData(<ngGrid.IColumn>{});
gridInstance.setRenderedRows([<ngGrid.IRow>{}]);
gridInstance.sortActual();
gridInstance.sortColumnsInit();
gridInstance.sortData(<ngGrid.IColumn>{}, {});

var test_styleProvider:ngGrid.IStyleProvider = new ngStyleProvider(<ngGrid.IGridScope>{}, <ngGrid.IGridInstance>{});
var test_searchProvider:ngGrid.ISearchProvider = new ngSearchProvider(<ngGrid.IGridScope>{}, <ngGrid.IGridInstance>{}, <angular.IFilterService>{});
var test_selectionProvider:ngGrid.ISelectionProvider = new ngSelectionProvider(<ngGrid.IGridInstance>{}, <ngGrid.IGridScope>{}, <angular.IParseService>{});
var test_eventProvider:ngGrid.IEventProvider = new ngEventProvider(<ngGrid.IGridInstance>{}, <ngGrid.IGridScope>{}, <ngGrid.service.IDomUtilityService>{}, <angular.ITimeoutService>{});
var test_aggregate:ngGrid.IAggregate = new ngAggregate({}, <ngGrid.IRowFactory>{}, 10, true);
var test_renderedRange:ngGrid.IRenderedRange = new ngRenderedRange(1, 2);
var test_dimension:ngGrid.IDimension = new ngDimension({});
var test_row:ngGrid.IRow = new ngRow({}, <ngGrid.IRowConfig>{}, <ngGrid.ISelectionProvider>{}, 0, {});
var test_column:ngGrid.IColumn = new ngColumn(<ngGrid.IGridOptions>{}, <ngGrid.IGridScope>{}, <ngGrid.IGridInstance>{}, <ngGrid.service.IDomUtilityService>{}, <angular.ITemplateCacheService>{}, {});
var test_footer:ngGrid.IFooter = new ngFooter(<ngGrid.IGridScope>{}, <ngGrid.IGridInstance>{});
