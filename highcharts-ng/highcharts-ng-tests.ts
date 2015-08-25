/// <reference path="highcharts-ng.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />

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
        series: [{
            data: [10, 15, 12, 8, 7]
        }],
        title: {
            text: 'My Awesome Chart'
        },
        loading: true
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