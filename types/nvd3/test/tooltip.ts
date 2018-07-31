namespace nvd3_test_tooltip {
    var width = 500,
        height = 20;

    var tooltip = nv.models.tooltip();
    tooltip.duration(0);

    d3.select('.tooltip_me')
        .on('mouseover', function (d, i) {
            console.log("mouseover", d, i);
            var data = {
                series: {
                    key: "title",
                    value: "the value",
                    color: "#229922"
                }
            };
            tooltip.data(data).hidden(false);
        })
        .on('mouseout', function (d, i) {
            console.log("mouseout", d, i);
            tooltip.hidden(true);
        })
        .on('mousemove', function (d, i) {
            console.log("mousemove", d, i);
            //tooltip.position({ top: d3.event.pageY, left: d3.event.pageX })(); todo pageY and X not found on d3 definition
        });


    // we must also test the scatter/line way of getting position
    // Wrapping in nv.addGraph allows for '0 timeout render', stores rendered charts in nv.graphs, and may do more in the future... it's NOT required
    var chart;
    nv.addGraph(function () {
        chart = nv.models.lineChart()
            .showXAxis(false)
            .showLegend(false)
            .clipVoronoi(false)
            .showVoronoi(true)
            .showYAxis(false);
        d3.select('#test2')
            .datum(sinAndCos())
            .call(chart);
        return chart;
    });

    function sinAndCos() {
        var cos = [];
        for (var i = 0; i < 5; i++) {
            cos.push({ x: i, y: Math.round(.5 * Math.cos(i / 10) * 100) / 100 });
        }
        return [{
            values: cos,
            key: "Cosine Wave",
            color: "#2ca02c"
        }];
    }
}
