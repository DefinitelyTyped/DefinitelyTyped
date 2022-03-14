import * as ng from 'angular';
import uiGrid = require("ui-grid");

interface IMyEntity {
    name: string;
    age: number;
}

var columnDef: uiGrid.IColumnDefOf<IMyEntity>;
columnDef.aggregationHideLabel = true;
columnDef.aggregationHideLabel = false;
columnDef.aggregationType = 1;
columnDef.aggregationType = function () { return 1; };
columnDef.allowFloatWidth = true;
columnDef.cellClass = 'test';
columnDef.cellClass = (grid, gridRow, gridCol, rowIndex, colIndex) => {
    //types of grid, gridRow, gridCol, rowIndex and colIndex are flowed in correctly
    return `${grid.footerHeight}-${gridRow.entity.name}-${gridCol.field}-${rowIndex + 1}-${colIndex + 1}`;
};
columnDef.cellFilter = 'date';
columnDef.cellTemplate = '<div blah="something">hello</div>';
columnDef.cellTooltip = 'blah';
columnDef.cellTooltip = function (gridRow: uiGrid.IGridRow, gridCol: uiGrid.IGridColumn) {
    return `${gridRow.entity.unknownProperty}-${gridCol.displayName}`;
};
columnDef.defaultSort = {
    direction: 'ASC',
    ignoreSort: false,
    priority: 1
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
    ariaLabel: 'testing',
    noTerm: false,
    flags: {
        caseSensitive: true
    },
    type: 1,
    selectOptions: [{value: 4, label: 'test'}],
    disableCancelFilterButton: false
};
columnDef.filter.condition = (searchTerm: string, cellValue: any, row: uiGrid.IGridRow, column: uiGrid.IGridColumn): boolean => {
    return true;
};
// the condition function does not need to declare all the parameters
columnDef.filter.condition = (searchTerm: string, cellValue: any): boolean => {
    return false;
};
columnDef.filterCellFiltered = false;
columnDef.filterHeaderTemplate = '<div blah="test"></div>';
columnDef.filters = [columnDef.filter];
columnDef.footerCellClass = (grid, gridRow, gridCol, rowRenderIndex, colRenderIndex) => {
        //types for grid, gridRow, gridCol, rowRenderIndex, and colRenderIndex flow in properly
        return `${grid.footerHeight}-${gridRow.entity.age}-${rowRenderIndex + 1}-${gridCol.field}-${colRenderIndex - 1}`;
    };
columnDef.footerCellClass = 'theClass';
columnDef.footerCellFilter = 'currency:$';
columnDef.footerCellTemplate = '<div class="yoshi"></div>';
columnDef.headerCellClass =
    (grid, gridRow, gridCol, rowRenderIndex, colRenderIndex) => {
        //types for grid, gridRow, gridCol, rowRenderIndex, and colRenderIndex flow in properly
        return `${grid.footerHeight}-${gridRow.entity.age}-${rowRenderIndex + 1}-${gridCol.field}-${colRenderIndex - 1}`;
    };
columnDef.headerCellClass = 'classy';
columnDef.headerCellFilter = 'currency:$';
columnDef.headerCellTemplate = '<div class="yoshi"></div>';
columnDef.headerTooltip = false;
columnDef.headerTooltip = 'The Tooltip';
columnDef.headerTooltip = (col) => {
    //type of col flows in properly
    return col.displayName;
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
columnDef.sortDirectionCycle = [null, 'asc', 'desc'];
columnDef.sortingAlgorithm = (a: any, b: any, rowA: uiGrid.IGridRowOf<IMyEntity>, rowB: uiGrid.IGridRowOf<IMyEntity>, direction: string) => {
    return -1;
};
columnDef.suppressRemoveSort = false;
columnDef.type = 'Date';
columnDef.visible = true;
columnDef.width = 100;
columnDef.width = '*';


var gridApi: uiGrid.IGridApiOf<IMyEntity>;
var gridInstance: uiGrid.IGridInstanceOf<IMyEntity>;
var menuItem: uiGrid.IMenuItem;
var colProcessor: uiGrid.IColumnProcessor<IMyEntity>;
var uiGridConstants: uiGrid.IUiGridConstants;

gridApi.core.clearAllFilters(true);
gridApi.core.addToGridMenu(gridInstance, [menuItem]);
gridApi.core.getVisibleRows();
gridApi.core.handleWindowResize();
gridApi.core.queueGridRefresh();
gridApi.core.queueRefresh();
gridApi.core.registerColumnsProcessor(colProcessor, 100);

var gridOptions: uiGrid.IGridOptionsOf<IMyEntity> = {
    data: [{name: 'Bob', age: 100}],
    onRegisterApi: (api) => {
        api.selection.on.rowSelectionChanged(null, (row) => {
            console.log(row.entity.name);
        })
    }
};
gridOptions.isRowSelectable = () => true;
gridOptions.enableVerticalScrollbar = uiGridConstants.scrollbars.ALWAYS;
gridOptions.enableVerticalScrollbar = uiGridConstants.scrollbars.WHEN_NEEDED;
gridOptions.enableVerticalScrollbar = uiGridConstants.scrollbars.NEVER;
gridOptions.enableHorizontalScrollbar = uiGridConstants.scrollbars.ALWAYS;
gridOptions.enableHorizontalScrollbar = uiGridConstants.scrollbars.WHEN_NEEDED;
gridOptions.enableHorizontalScrollbar = uiGridConstants.scrollbars.NEVER;

interface IAnotherEntity {
    anObject: string
}
var anotherGridInstance: uiGrid.IGridInstance;
var rowEntityToScrollTo = {
    anObject: 'inGridOptionsData'
};
var columnDefToScrollTo: uiGrid.IColumnDef;
anotherGridInstance.scrollTo();
anotherGridInstance.scrollTo(rowEntityToScrollTo);
anotherGridInstance.scrollTo(rowEntityToScrollTo, columnDefToScrollTo);

anotherGridInstance.getRow(rowEntityToScrollTo);
anotherGridInstance.getRowsByKey(true, "id", 42);
anotherGridInstance.getRowsByKey(true, 123, {});
anotherGridInstance.findRowByKey(true, 10, "42");
anotherGridInstance.findRowByKey(true, "test", true);

var selectedRowEntities: Array<IMyEntity> = gridApi.selection.getSelectedRows();
var selectedGridRows: Array<uiGrid.IGridRow> = gridApi.selection.getSelectedGridRows();
var row: IMyEntity = selectedRowEntities[0];
var gridRow: uiGrid.IGridRow = selectedGridRows[0];

gridApi.selection.clearSelectedRows();
gridApi.selection.getSelectAllState();
gridApi.selection.selectAllRows();
gridApi.selection.selectAllVisibleRows();
gridApi.selection.selectRow(row);
gridApi.selection.selectRowByKey(true, "id", 42);
gridApi.selection.selectRowByVisibleIndex(5);
gridApi.selection.setModifierKeysToMultiSelect(true);
gridApi.selection.setMultiSelect(true);
gridApi.selection.toggleRowSelection(row);
gridApi.selection.unSelectRow(row);
gridApi.selection.unSelectRowByVisibleIndex(5);
gridApi.selection.unSelectRowByKey(true, 10, "42");

gridApi.expandable.on.rowExpandedStateChanged(null, (row) => {
    if (row.isExpanded) {
        console.log('expanded', row.entity);
    } else {
        gridApi.expandable.toggleRowExpansion(row.entity);
    }
});
gridApi.expandable.expandAllRows();
gridApi.expandable.collapseAllRows();
gridApi.expandable.toggleAllRows();

gridApi.treeBase.expandRow(gridRow, true);
