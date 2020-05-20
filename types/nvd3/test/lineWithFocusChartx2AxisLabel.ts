
namespace nvd3_test_lineWithFocusChartx2AxisLabel {

    nv.addGraph(function () {
        var chart = nv.models.lineWithFocusChart();

        chart.brushExtent([50, 70]);

        chart.xAxis.tickFormat(d3.format(',f'));
        chart.focusHeight(50 + 20);
        chart.focusMargin({ "bottom": 20 + 20 });
        chart.x2Axis.tickFormat(d3.format(',f')).axisLabel("Stream - 3,128,.1");
        chart.yAxis.tickFormat(d3.format(',.2f'));
        chart.y2Axis.tickFormat(d3.format(',.2f'));
        chart.useInteractiveGuideline(true);

        d3.select('#chart svg')
            .datum(testData())
            .call(chart);

        nv.utils.windowResize(chart.update);

        return chart;
    });

    function testData() {
        return [3, 128, .1].map(function (data, i) {
        // todo reolve stream_layers return stream_layers(3, 128, .1).map(function (data, i) {
            return {
                key: 'Stream' + i,
                area: i === 1,
                values: data
            };
        });
    }
}
