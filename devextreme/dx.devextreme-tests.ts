/// <reference path="dx.devextreme.d.ts" />

module Tests.ui {
    var dataGridOptions: DevExpress.ui.dxDataGridOptions = {
        activeStateEnabled: true,
        allowColumnReordering: true,
        allowColumnResizing: true,
        onCellClick: function () { },
        cellHintEnabled: true,
        columnAutoWidth: true,
        columnChooser: {
            emptyPanelText: "Nothing is here",
            enabled: true,
            height: 400,
            width: 200,
            title: "Column chooser"
        },
        columns: [
            {
                text: '5 columns with custom css class', value: [
                    { dataField: 'Processed', dataType: 'boolean', allowSorting: false },
                    { dataField: 'CustomerID', cssClass: 'customCssClass' },
                    'OrderDate',
                    { dataField: 'Freight', validationRules: [{ type: "range", min: 1, max: 100 }] },
                    { dataField: 'ShipName', validationRules: [{ type: 'required' }] },
                    'ShipCity']
            },
            {
                text: 'with show editor always', value: [
                    { dataField: 'Processed', dataType: 'boolean', allowSorting: false, showEditorAlways: true },
                    { dataField: 'OrderDate', dataType: 'date', showEditorAlways: true },
                    { dataField: 'CustomerID', showEditorAlways: true },
                    { dataField: 'Freight', showEditorAlways: true },
                    { dataField: 'ShipName', showEditorAlways: true }]
            },
            {
                text: 'custom template/edit/header template', value: [
                    'CustomerID',
                    'OrderDate',
                    'Freight',
                    {
                        dataField: 'ShipVia',
                        editCellTemplate: function (container: JQuery, options: { value: number }) {
                            container.addClass('dx-editor-cell');
                            container.append($('<div />').dxSelectBox({
                                value: options.value,
                                dataSource: [
                                    { ShipperID: 1, CompanyName: 'Speedy Express' },
                                    { ShipperID: 2, CompanyName: 'United Package' },
                                    { ShipperID: 3, CompanyName: 'Federal Shipping' }
                                ],
                                valueExpr: 'ShipperID',
                                displayExpr: 'CompanyName'
                            }));
                        },
                        cellTemplate: function (container: JQuery, options: { value: number }) {
                            container.text(String(options.value));
                        },
                        headerCellTemplate: function (container: JQuery, options: { headerCaption: string }) {
                            container.append($('<div/>').css({ border: '1px solid red' }).text(options.headerCaption));
                        }
                    },
                    'ShipName',
                    'ShipCity']
            },
            { text: 'none', value: '' },
            {
                text: 'custom template/header hogan template', value: [
                    'CustomerID',
                    'OrderDate',
                    'Freight',
                    {
                        dataField: 'ShipVia',
                        cellTemplate: '#hoganColumnTemplate',
                        headerCellTemplate: $('#hoganHeaderColumnTemplate')
                    },
                    'ShipName',
                    'ShipCity']
            }],
        customizeColumns: function (columns) {
            var i: number;
            for (i = 0; i < columns.length; i++) {
                if (columns[i].dataField.indexOf('Date') > 0) {
                    columns[i].dataType = 'date';
                }

                if (columns[i].dataField === 'Freight') {
                    columns[i].dataType = 'number';
                }

                if (columns[i].dataField === 'CustomerID') {
                    columns[i].lookup = {
                        dataSource: { store: [], sort: 'ContactName' },
                        valueExpr: 'CustomerID',
                        displayExpr: 'ContactName'
                    }
                        }
                if (columns[i].dataField === 'EmployeeID') {
                    columns[i].lookup = {
                        dataSource: { store: [], sort: 'LastName' },
                        valueExpr: 'EmployeeID',
                        displayExpr: function (data: any) {
                            return data.LastName + ' ' + data.FirstName;
                        }
                    }
                        }
                if (columns[i].dataField === 'ShipVia') {
                    columns[i].lookup = {
                        dataSource: [
                            { ShipperID: 1, CompanyName: 'Speedy Express' },
                            { ShipperID: 2, CompanyName: 'United Package' },
                            { ShipperID: 3, CompanyName: 'Federal Shipping' }
                        ],
                        valueExpr: 'ShipperID',
                        displayExpr: 'CompanyName'
                    }
                        }
                if (columns[i].dataField === 'ShipCity') {
                    columns[i].editCellTemplate = function (container: JQuery, options: { value: string; setValue: Function }) {
                        $('<div/>').dxAutocomplete({
                            items: ["Bern", "Lyon", "Lander"],
                            value: options.value,
                            onValueChange: function (e:{ value: string }) {
                                options.setValue(e.value);
                            }
                        }).appendTo(container);
                    }
                }
            }
        },
        summary: {
            totalItems: [{
                column: 'CustomerID',
                summaryType: 'count'
            }, {
                    column: 'Freight',
                    summaryType: 'min',
                    valueFormat: "percent",
                    showInColumn: "CustomerID"
                },
                {
                    column: 'OrderDate',
                    summaryType: 'min',
                    valueFormat: "shortDate"
                },
                {
                    column: 'Freight',
                    summaryType: 'avg',
                    valueFormat: "fixedPoint",
                    precision: 2
                }],
            groupItems: [{
                column: 'CustomerID',
                summaryType: 'count',
                showInGroupFooter: true
            }, {
                    column: 'Freight',
                    summaryType: 'min'
                }, {
                    column: 'Freight',
                    summaryType: 'max'
                },
                {
                    column: 'ShipName',
                    summaryType: 'count',
                    showInGroupFooter: true
                },
                {
                    column: 'OrderDate',
                    summaryType: 'min',
                    valueFormat: "shortDate",
                    showInColumn: "CustomerID",
                    showInGroupFooter: true
                }]
        },
        sortByGroupSummaryInfo: [{ summaryItem: 'count' }],
        groupPanel: {
            visible: true
        },
        filterRow: {
            visible: true
        },
        pager: {
            visible: true,
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true
        },
        stateStoring: {
            enabled: false
        },
        rowAlternationEnabled: true,
        editing: {
            editMode: 'batch',
            insertEnabled: true,
            editEnabled: true,
            removeEnabled: true
        },
        searchPanel: {
            visible: true
        },
        sorting: {
            mode: 'multiple'
        }
    };

    new DevExpress.ui.dxDataGrid($("#data-grid"), dataGridOptions);
    new DevExpress.ui.dxDataGrid($("#data-grid").get(0), dataGridOptions);
    $("#data-grid").dxDataGrid(dataGridOptions);
}

module Tests.viz {
    var chartOptions: DevExpress.viz.charts.dxChartOptions = {
        dataSource: [
            { arg: "Illinois", s1: 100, s2: 50, s3: 75, s4: 25, s5: 50, s6: 100, s7: 25, s8: 75 },
            { arg: "Indiana", s1: 100, s2: 50, s3: 75, s4: 25, s5: 50, s6: 100, s7: 25, s8: 75 },
            { arg: "Michigan", s1: 100, s2: 50, s3: 75, s4: 25, s5: 50, s6: 100, s7: 25, s8: 75 }
        ],
        valueAxis: [{ title: 'Value Axis Title' }],
        argumentAxis: { title: 'Argument Axis Title', grid: { visible: true } },
        legend: { border: { visible: true } },
        tooltip: { enabled: true },
        commonPaneSettings: { border: { visible: true } },
        commonSeriesSettings: {
            type: 'bar',
            hoverMode: 'allArgumentPoints',
            selectionMode: 'allArgumentPoints',
            label: {
                visible: true,
                format: 'fixedPoint',
                precision: 2
            }
        },
        series: [
            { valueField: 's1' },
            { valueField: 's2' },
            { valueField: 's3' },
            { valueField: 's4' },
            { valueField: 's5' },
            { valueField: 's6' },
            { valueField: 's7' },
            { valueField: 's8' }
        ],
        title: 'Long Chart\'s Title',
        onPointClick: function (arg: any) {
            arg.target.isSelected() ? arg.target.clearSelection() : arg.target.select();
        },
        onSeriesClick: function (arg: any) {
            arg.target.isVisible() ? arg.target.hide() : arg.target.show();
        }
    };

    var pieChartOptions: DevExpress.viz.charts.dxPieChartOptions = {
        dataSource: [{ arg: "Index1", arg1: 1, val: 100 },
            { arg: "Index2", arg1: 2, val: 50 },
            { arg: "Index3", arg1: 3, val: 75 },
            { arg: "Index4", arg1: 4, val: 25 },
            { arg: "Index5", arg1: 5, val: 50 },
            { arg: "Index6", arg1: 6, val: 100 },
            { arg: "Index7", arg1: 7, val: 25 },
            { arg: "Index8", arg1: 8, val: 75 }],
        tooltip: {
            enabled: true
        },
        series: [{
            type: 'doughnut',
            label: {
                visible: true,
                format: 'fixedPoint',
                precision: 2
            }
        }],
        title: 'Long PieChart\'s Title'
    };

    new DevExpress.viz.charts.dxChart($("chart"), chartOptions);
    new DevExpress.viz.charts.dxChart($("#chart").get(0), chartOptions);
    $("#chart").dxChart(chartOptions);

    new DevExpress.viz.charts.dxPieChart($("#pie-chart"), pieChartOptions);
    new DevExpress.viz.charts.dxPieChart($("#pie-chart").get(0), pieChartOptions);
    $("#pie-chart").dxPieChart(pieChartOptions);
}

module Tests.framework {
    var app = new DevExpress.framework.html.HtmlApplication(<DevExpress.framework.html.HtmlApplicationOptions>{
        namespace: "Application",
        navigation: [
            {
                title: "Home",
                action: "#home",
                icon: "home"
            },
            {
                title: "About",
                action: "#about",
                icon: "info"
            }
        ]
    });

    app.router.register(":view/:id", { view: "home", id: undefined });
    app.navigate();
}

module Tests.data {
    new DevExpress.data.DataSource(<DevExpress.data.DataSourceOptions>{
        sort: ["value", true],
        group: ["id", false],
        select: ["value"],
        filter: ["value", "startswith", "first"],

        pageSize: 25,
        paginate: true,

        map: function (item) { return item; },
        postProcess: function (data) { return data; },
        searchExpr: "expr",
        searchOperation: "contains",
        searchValue: "somevalue",
        store: [1, 2, 3]
    });

    new DevExpress.data.ArrayStore();
    new DevExpress.data.ArrayStore(<DevExpress.data.ArrayStoreOptions>{
        data: [{ id: 1, value: "First one" }, { id: 2, value: "Second one" }],
        key: "id"
    });

    new DevExpress.data.CustomStore(<DevExpress.data.CustomStoreOptions>{
        load: function () {
            return $.Deferred().promise();
        }
    });
}