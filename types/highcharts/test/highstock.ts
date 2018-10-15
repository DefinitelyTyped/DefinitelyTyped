/// <reference types="jquery" />
import * as Highcharts from "highcharts";

const someData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

$(() => {
    $('#container').highcharts('StockChart', {
        chart: {
            type: "arearange"
        },

        xAxis: {
            scrollbar: { enabled: true }
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
            buttons: [{
                type: 'month',
                count: 1,
                text: '1m',
                events: {
                    click: () => { }
                }
            }],
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

        series: [<Highcharts.AreaRangeChartSeriesOptions> {
            name: 'USD to EUR',
            data: someData,
            lineColor: "blue"
        }]
    });
});
