/// <reference path="dx.chartjs-14.1.d.ts" />

module Test {
    $("<div/>").appendTo(document.body).dxChart({
        size: {
            width: 600,
            height: 400
        },
        title: {
            text: 'Chart in jQuery mode',
            font: { color: 'rgb(0, 128, 128)!important' }
        },
        argumentAxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June']
        },
        dataSource: [
            { arg: 'January', v1: 10, v2: 20, v3: 24 },
            { arg: 'February', v1: 5, v2: 35, v3: 43 },
            { arg: 'March', v1: 50, v2: 10, v3: 80 },
            { arg: 'April', v1: 9, v2: 79, v3: 39 },
            { arg: 'May', v1: 100, v2: 42, v3: 22 },
            { arg: 'June', v1: 95, v2: 11, v3: 41 }
        ],
        series: [{ valueField: 'v1' }, { valueField: 'v2' }, { valueField: 'v3' }]
    });
}