/// <reference path="ng-grid.d.ts" />

var options1: ngGrid.GridOptions = {
    data: [{ 'Name': 'Bob' }, { 'Name': 'Jane' }]
};

var options2: ngGrid.GridOptions = {
    afterSelectionChange: () => { },
    beforeSelectionChange: () => { },
    dataUpdated: () => { }
};

var options3: ngGrid.GridOptions = {
    columnDefs: [
        { field: 'name', displayName: 'Name' },
        { field: 'age', displayName: 'Age' }
    ]
};

var options4: ngGrid.GridOptions = {
    pagingOptions: {
        pageSizes: [1, 2, 3, 4],
        pageSize: 2,
        totalServerItems: 100,
        currentPage: 1
    }
};