
namespace nvd3_test_sparkLinePlus {
    function defaultChartConfig(containerId, data) {
        nv.addGraph(function () {

            var chart = nv.models.sparklinePlus();
            chart.margin({ left: 70 })
                .x(function (d, i) { return i })
                .showLastValue(true)
                .xTickFormat(function (d) {
                    return d3.time.format('%x')(new Date(data[d].x))
                });

            d3.select(containerId)
                .datum(data)
                .call(chart);

            return chart;
        });
    }

    defaultChartConfig("#chart1", sine());
    defaultChartConfig("#chart2", volatileChart(130.0, 0.02));
    defaultChartConfig("#chart3", volatileChart(25.0, 0.09, 30));

    function sine() {
        var sin = [];
        var now = +new Date();

        for (var i = 0; i < 100; i++) {
            sin.push({ x: now + i * 1000 * 60 * 60 * 24, y: Math.sin(i / 10) });
        }

        return sin;
    }

    function volatileChart(startPrice, volatility, numPoints?) {
        var rval = [];
        var now = +new Date();
        numPoints = numPoints || 100;
        for (var i = 1; i < numPoints; i++) {

            rval.push({ x: now + i * 1000 * 60 * 60 * 24, y: startPrice });
            var rnd = Math.random();
            var changePct = 2 * volatility * rnd;
            if (changePct > volatility) {
                changePct -= (2 * volatility);
            }
            startPrice = startPrice + startPrice * changePct;
        }
        return rval;
    }

}
