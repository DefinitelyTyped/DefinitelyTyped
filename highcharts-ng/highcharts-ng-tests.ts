/// <reference types="angular" />

var app = angular.module('app', ['highcharts-ng']);

class AppController {
    chartConfig: HighChartsNGConfig = {
        options: {
            chart: {
                type: 'bar'
            },
            tooltip: {
                style: {
                    padding: 10,
                    fontWeight: 'bold'
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {}
        },
        series: [
            {
                data: [10, 15, 12, 8, 7]
            },
            {
                data: [[0, 10], [1, 15], [2, 12], [3, 8], [4, 7]]
            },
            {
                data: [{ name: "A", y: 10 }, { name: "B", y: 15 }, { name: "C", y: 12 }, { name: "D", y: 8 }, { name: "E", y: 7 }]
            }
        ],
        title: {
            text: 'My Awesome Chart'
        },
        loading: true,
        noData: 'No data here'
    };
    constructor($timeout: ng.ITimeoutService) {
        var vm = this;
        $timeout(function() {
            //Some async action
            vm.chartConfig.loading = false;
        });
    }
}

app.controller("AppController", AppController);
