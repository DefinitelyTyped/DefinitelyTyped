/// <reference path="google.visualization.d.ts" />

function test_arrayToDataTable() {
    var array = [
        ['City', 'Population', 'Area'],
        ['Rome', 2761477, 1285.31],
        ['Milan', 1324110, 181.76],
        ['Naples', 959574, 117.27],
        ['Turin', 907563, 130.17],
        ['Palermo', 655875, 158.9],
        ['Genoa', 607906, 243.60],
        ['Bologna', 380181, 140.7],
        ['Florence', 371282, 102.41],
        ['Fiumicino', 67370, 213.44],
        ['Anzio', 52192, 43.43],
        ['Ciampino', 38262, 11],
    ];

    var dataTable = google.visualization.arrayToDataTable(array);
}

function test_ctorDataTable() {
    var dataTable = new google.visualization.DataTable();
    return dataTable;
}

function test_dataTableAddColumn() {
    var dataTable = test_ctorDataTable();
    dataTable.addColumn('string', 'First Column');
    dataTable.addColumn('number', 'Second Column');
}

function test_dataTableAddRow() {
    var dataTable = test_ctorDataTable();
    dataTable.addRow(['row1', 6]);
    dataTable.addRow(['row2', -1]);
    dataTable.addRow(['row3', 0]);
}



