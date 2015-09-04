/// <reference path="ui-grid.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />

var columnDef: uiGrid.IColumnDef;
columnDef.aggregationHideLabel = true;
columnDef.aggregationHideLabel = false;
columnDef.aggregationType = 1;
columnDef.aggregationType = function () { return 1; };
columnDef.cellClass = 'test';
columnDef.cellClass = function (gridRow: uiGrid.IGridRow, gridCol: uiGrid.IGridColumn, index: number) {
    return 'pizza';
};
columnDef.cellFilter = 'date';
columnDef.cellTemplate = '<div blah="something">hello</div>';
columnDef.cellTooltip = 'blah';
columnDef.cellTooltip = function (gridRow: uiGrid.IGridRow, gridCol: uiGrid.IGridColumn) {
    return 'blah';
};
columnDef.displayName = 'Jumper';
columnDef.enableColumnMenu = false;
columnDef.enableColumnMenus = false;
columnDef.enableFiltering = true;
columnDef.enableHiding = false;
columnDef.enableSorting = true;
columnDef.field = 'blam';
columnDef.filter = {
    condition: 2,
    term: 'yes',
    placeholder: 'testing',
    noTerm: false,
    flags: {
        caseSensitive: true
    },
    type: 1,
    selectOptions: [{value: 4, label: 'test'}],
    disableCancelButton: false
};
columnDef.filterCellFiltered = false;
columnDef.filterHeaderTemplate = '<div blah="test"></div>';
columnDef.filters = [columnDef.filter];
columnDef.footerCellClass =
    (gridRow: uiGrid.IGridRow, rowRenderIndex: number, gridCol: uiGrid.IGridColumn, colRenderIndex: number) => {
        return 'blah';
    };
columnDef.footerCellClass = 'theClass';
columnDef.footerCellFilter = 'currency:$';
columnDef.footerCellTemplate = '<div class="yoshi"></div>';
columnDef.headerCellClass =
    (gridRow: uiGrid.IGridRow, rowRenderIndex: number, gridCol: uiGrid.IGridColumn, colRenderIndex: number) => {
        return 'blah';
    };
columnDef.headerCellClass = 'classy';
columnDef.headerCellFilter = 'currency:$';
columnDef.headerCellTemplate = '<div class="yoshi"></div>';
columnDef.headerTooltip = false;
columnDef.headerTooltip = 'The Tooltip';
columnDef.headerTooltip = (col: uiGrid.IGridColumn) => {
    return 'tooly';
};
columnDef.maxWidth = 200;
columnDef.menuItems = [{
    title: 'title',
    icon: 'ico',
    action: ($event: ng.IAngularEvent) => {
        alert('click');
    },
    shown: () => { return true; },
    active: () => { return false },
    context: {a: 'lala'},
    leaveOpen: false
}];
columnDef.minWidth = 100;
columnDef.name = 'MyColumn';
columnDef.sort = {
    direction: 'ASC',
    ignoreSort: false,
    priority: 1
};
columnDef.sortCellFiltered = false;
columnDef.sortingAlgorithm = (a: any, b: any) => {
    return -1;
};
columnDef.suppressRemoveSort = false;
columnDef.type = 'Date';
columnDef.visible = true;
columnDef.width = 100;
columnDef.width = '*';


var gridApi: uiGrid.IGridApi;
var gridInstance: uiGrid.IGridInstance;
var menuItem: uiGrid.IMenuItem;
var colProcessor: uiGrid.IColumnProcessor;

gridApi.core.clearAllFilters(true);
gridApi.core.addToGridMenu(gridInstance, [menuItem]);
gridApi.core.getVisibleRows(gridInstance);
gridApi.core.handleWindowResize();
gridApi.core.queueGridRefresh()
gridApi.core.queueRefresh();
gridApi.core.registerColumnsProcessor(colProcessor, 100);

var selectedRowEntities: Array<any> = gridApi.selection.getSelectedRows();
var selectedGridRows: Array<uiGrid.IGridRow> = gridApi.selection.getSelectedGridRows();
