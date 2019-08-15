
namespace nvd3_test_scatter {
    nv.addGraph(function () {

        var chart = nv.models.scatter()
            .margin({ top: 20, right: 20, bottom: 20, left: 20 })
            .pointSize(function (d) { return d.z })
            .useVoronoi(false);

        d3.select('#test1')
            .datum(randomData())
            .transition().duration(500)
            .call(chart);

        nv.utils.windowResize(chart.update);
        return chart;
    });

    function randomData() {
        var data = [];

        for (var i = 0; i < 2; i++) {
            data.push({
                key: 'Group ' + i,
                values: []
            });

            for (var j = 0; j < 100; j++) {
                data[i].values.push({ x: Math.random(), y: Math.random(), z: Math.random() });
            }
        }

        return data;
    }
}
