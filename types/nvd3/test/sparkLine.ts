
namespace nvd3_test_sparkLine {

    nv.addGraph({
        generate: function () {
            var chart = nv.models.sparkline()
                .width(400)
                .height(30)

            d3.select("#chart1")
                .datum(sine())
                .call(chart);

            return chart;
        }
    });

    function sine() {
        var sin = [];

        for (var i = 0; i < 100; i++) {
            sin.push({ x: i, y: Math.sin(i / 10) });
        }

        return sin;
    }
}
