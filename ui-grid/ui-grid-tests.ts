/// <reference path="ui-grid.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />

interface IMyEntity {
    name: string;
    age: number;
}

var columnDef: uiGrid.IColumnDefOf<IMyEntity>;
columnDef.aggregationHideLabel = true;
columnDef.aggregationHideLabel = false;
columnDef.aggregationType = 1;
columnDef.aggregationType = function () { return 1; };
columnDef.cellClass = 'test';
columnDef.cellClass = (gridRow, gridCol, index) => {
    //types of gridRow, gridCol, and index are flowed in correctly
    return `${gridRow.entity.name}-${gridCol.field}-${index + 1}`;
};
columnDef.cellFilter = 'date';
columnDef.cellTemplate = '<div blah="something">hello</div>';
columnDef.cellTooltip = 'blah';
columnDef.cellTooltip = function (gridRow: uiGrid.IGridRow, gridCol: uiGrid.IGridColumn) {
    return `${gridRow.entity.unknownProperty}-${gridCol.displayName}`;
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
columnDef.footerCellClass = (gridRow, rowRenderIndex, gridCol, colRenderIndex) => {
        //types for gridRow, rowRenderIndex, gridCol, and colRenderIndex flow in properly
        return `${gridRow.entity.age}-${rowRenderIndex + 1}-${gridCol.field}-${colRenderIndex - 1}`;
    };
columnDef.footerCellClass = 'theClass';
columnDef.footerCellFilter = 'currency:$';
columnDef.footerCellTemplate = '<div class="yoshi"></div>';
columnDef.headerCellClass =
    (gridRow, rowRenderIndex, gridCol, colRenderIndex) => {
        //types for gridRow, rowRenderIndex, gridCol, and colRenderIndex flow in properly
        return `${gridRow.entity.age}-${rowRenderIndex + 1}-${gridCol.field}-${colRenderIndex - 1}`;
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
columnDef.sortingAlgorithm = (a: any, b: any) => {
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

gridApi.core.clearAllFilters(true);
gridApi.core.addToGridMenu(gridInstance, [menuItem]);
gridApi.core.getVisibleRows(gridInstance);
gridApi.core.handleWindowResize();
gridApi.core.queueGridRefresh()
gridApi.core.queueRefresh();
gridApi.core.registerColumnsProcessor(colProcessor, 100);

var gridOptions: uiGrid.IGridOptionsOf<IMyEntity> = {
    data: [{name: 'Bob', age: 100}],
    onRegisterApi: (api) => {
        api.selection.on.rowSelectionChanged(null, (row) => {
            console.log(row.entity.name);
        })
    }
}
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

var selectedRowEntities: Array<IMyEntity> = gridApi.selection.getSelectedRows();
var selectedGridRows: Array<uiGrid.IGridRow> = gridApi.selection.getSelectedGridRows();
