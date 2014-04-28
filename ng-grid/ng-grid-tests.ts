/// <reference path="ng-grid.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />

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

class SearchProvider implements ngGrid.ISearchProvider {
    fieldMap: any;
    extFilter: boolean;
    
    constructor($scope:ngGrid.IGridScope, grid:ngGrid.IGridInstance, $filter:ng.IFilterService) {
    }
    
    evalFilter():void {
    }
}