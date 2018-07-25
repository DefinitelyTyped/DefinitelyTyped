
namespace nvd3_test_multiChart {
    //todo resolve stream_layersIssue var testdata = stream_layers(9, 10 + Math.random() * 100, .1).map(function (data, i) {
    //    return {
    //        key: 'Stream' + i,
    //        values: data.map(function (a) { a.y = a.y * (i <= 1 ? -1 : 1); return a })
    //    };
    //});

    var testdata = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (data, i) {
        return {
            key: 'Stream' + i,
            values: [1, 2],
            type: '',
            yAxis: 1
        };
    });

    testdata[0].type = "area";
    testdata[0].yAxis = 1;
    testdata[1].type = "area";
    testdata[1].yAxis = 1;
    testdata[2].type = "line";
    testdata[2].yAxis = 1;
    testdata[3].type = "line";
    testdata[3].yAxis = 2;
    testdata[4].type = "scatter";
    testdata[4].yAxis = 1;
    testdata[5].type = "scatter";
    testdata[5].yAxis = 2;
    testdata[6].type = "bar";
    testdata[6].yAxis = 2;
    testdata[7].type = "bar";
    testdata[7].yAxis = 2;
    testdata[8].type = "bar";
    testdata[8].yAxis = 2;

    nv.addGraph(function () {
        var chart = nv.models.multiChart()
            .margin({ top: 30, right: 60, bottom: 50, left: 70 })
            .color(d3.scale.category10().range());

        chart.xAxis.tickFormat(d3.format(',f'));
        chart.yAxis1.tickFormat(d3.format(',.1f'));
        chart.yAxis2.tickFormat(d3.format(',.1f'));

        d3.select('#chart1 svg')
            .datum(testdata)
            .transition().duration(500).call(chart);

        return chart;
    });
}
