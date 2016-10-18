/// <reference path="highstock.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />

var someData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

$(function () {
    $('#container').highcharts('StockChart', {

        chart: {
            type: "arearange"
        },

        navigator: {
            height: 80,
            maskFill: 'rgba(255, 198, 220, 0.75)',
            handles: {
                backgroundColor: 'yellow',
                borderColor: 'red'
            }
        },

        rangeSelector: {
            allButtonsEnabled: true,
            selected: 1,
            buttonTheme: { // styles for the buttons
                fill: 'none',
                stroke: 'none',
                'stroke-width': 0,
                r: 8,
                style: {
                    color: '#039',
                    fontWeight: 'bold'
                },
                states: {
                    hover: {
                    },
                    select: {
                        fill: '#039',
                        style: {
                            color: 'white'
                        }
                    }
                }
            },
            inputBoxBorderColor: 'gray',
            inputBoxWidth: 120,
            inputBoxHeight: 18,
            inputStyle: {
                color: '#039',
                fontWeight: 'bold'
            },
            labelStyle: {
                color: 'silver',
                fontWeight: 'bold'
            }
        },

        series: [<__Highcharts.AreaRangeChartSeriesOptions>{
            name: 'USD to EUR',
            data: someData,
            lineColor: "blue"
        }]
    });
});
