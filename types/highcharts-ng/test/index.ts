/// <reference types="angular" />

let app = angular.module('app', ['highcharts-ng']);

class AppController {
    private readonly series1: Highcharts.SeriesBarOptions = {
        data: [10, 15, 12, 8, 7]
    };
    private readonly series2: Highcharts.SeriesBarOptions = {
        data: [[0, 10], [1, 15], [2, 12], [3, 8], [4, 7]]
    };
    private readonly series3: Highcharts.SeriesBarOptions = {
        data: [{ name: "A", y: 10 }, { name: "B", y: 15 }, { name: "C", y: 12 }, { name: "D", y: 8 }, { name: "E", y: 7 }]
    };
    private readonly chartConfig: HighChartsNGConfig = {
        options: {
            chart: {
                type: 'bar'
            },
            tooltip: {
                style: {
                    padding: '10',
                    fontWeight: 'bold'
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {}
        },
        series: [
            this.series1,
            this.series2,
            this.series3
        ],
        title: {
            text: 'My Awesome Chart'
        },
        loading: true,
        noData: 'No data here'
    };
    constructor($timeout: ng.ITimeoutService) {
        const vm = this;
        $timeout(() => {
            // Some async action
            vm.chartConfig.loading = false;
        });
    }
}

app.controller("AppController", AppController);
