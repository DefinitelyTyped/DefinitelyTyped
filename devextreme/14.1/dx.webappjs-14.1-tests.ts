/// <reference path="dx.webappjs-14.1.d.ts" />

module Test {
    $('<div/>').appendTo(document.body)
        .dxDataGrid({
            allowColumnResizing: true,
            allowColumnReordering: true,
            cellClick: (clickedCell: Object) => { },
            rowClick: (clickedRow: Object) => { },
            columnChooser: {
                enabled: true,
                height: 180,
                width: 400,
                emptyPanelText: 'A place to hide the columns'
            },
            columnAutoWidth: true,
            columns: [
                'author', 'title', 'year', 'genre', 'format',
                { dataField: 'price', visible: false },
                { dataField: 'length', visible: false }
            ],
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: 'array',
                    data: [
                        { id: 1, title: "The Catcher in the Rye", author: "J. D. Salinger", year: 1951, genre: "Bildungsroman", format: "paperback" },
                        { id: 2, title: "The Hitchhiker's Guide to the Galaxy", author: "D. Adams", year: 1979, genre: "Comedy, sci-fi", format: "hardcover" },
                        { id: 3, title: "Fahrenheit 451", author: "R. Bradbury", year: 1953, genre: "Dystopian novel", format: "paperback" },
                        { id: 4, title: "Nineteen Eighty-Four", author: "G. Orwell", year: 1949, genre: "Dystopian novel, political fiction", format: "hardcover" },
                        { id: 5, title: "Crime and Punishment", author: "F. Dostoyevsky", year: 1866, genre: "Philosophical novel", format: "paperback" }
                    ],
                    key: "id"
                }
            }),
            customizeColumns: (columns: Array<Object>) => { },
            dataErrorOccurred: (error: Error) => { },
            disabled: false,
            editing: {
                editMode: 'batch',
                editEnabled: true,
                insertEnabled: true,
                removeEnabled: true                
            },
            filterRow: {
                visible: true,
                showOperationChooser: false            
            },
            groupPanel: { 
                visible: true 
            },
            grouping: { 
                autoExpandAll: false 
            },
            height: () => { 
                return 200; 
            },
            hoverStateEnabled: true,
            loadPanel: {
                height: 150,
                width: 400,
                text: 'Data is loading...'
            },
            noDataText: "It isn't the data you're looking for",
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [3, 5, 8]
            },
            paging: {
                pageSize: 8,
                pageIndex: 19
            },
            rowAlternationEnabled: true,
            rowPrepared: (rowElement: JQuery, rowInfo: Object) => { },
            rtlEnabled: false,
            scrolling: { mode: 'infinite' },
            searchPanel: {
                visible: true,
                width: 250            
            },
            selectedRowKeys: [1, 2, 4],
            selection: {
                mode: 'multiple',
                allowSelectAll: false
            },
            showColumnHeaders: true,
            showColumnLines: true,
            showRowLines: true,
            sorting: { mode: 'multiple' },
            visible: true,
            width: () => { return 400; },
            wordWrapEnabled: true
        });
}