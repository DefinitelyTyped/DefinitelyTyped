/// <reference path="fusioncharts.d.ts" />

FusionCharts.addEventListener('ready',(eventObject)=>{
    eventObject.stopPropagation();
});

FusionCharts.ready((fusioncharts)=>{

});

FusionCharts.version;

FusionCharts('chartId').render();;

FusionCharts["debugger"].enable(true);

let chartData ={
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
};

let chart = new FusionCharts(chartData);
chart.render();
chart.isActive();
chart.addEventListener('ready',function(eventObject){
    eventObject.type;
});
chart.chartType();
chart.addVariable();
chart.clone();
chart.zoomTo(0,3);
chart.zoomOut();
chart.setJSONData(chartData);
chart.ref;