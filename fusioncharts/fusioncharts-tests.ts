/// <reference path="fusioncharts.d.ts" />

FusionCharts.addEventListener('ready',(eventObject)=>{
    eventObject.stopPropagation();
});


let chart = new FusionCharts({
    type: 'column2d',
    renderAt: 'chart-container',
    width: '450',
    height: '200',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Monthly revenue for last year",
            "subCaption": "Harry's SuperMart",
        },
        "data": [{
            "label": "Jan",
            "value": "420000"
        }, {
            "label": "Feb",
            "value": "810000"
        }
        ]
    }
});

chart.isActive();