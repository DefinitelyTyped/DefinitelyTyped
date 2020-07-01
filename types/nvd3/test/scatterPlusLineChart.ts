
namespace nvd3_test_scatterPlusLineChart {
    var chart;
    nv.addGraph(function () {
        chart = nv.models.scatterChart()
            .showDistX(true)
            .showDistY(true)
            .duration(300)
            .color(d3.scale.category10().range());

        chart.dispatch.on('renderEnd', function () {
            console.log('render complete');
        });

        chart.xAxis.tickFormat(d3.format('.02f'));
        chart.yAxis.tickFormat(d3.format('.02f'));

        d3.select('#test1 svg')
            .datum(nv.log(randomData(4, 40)))
            .call(chart);

        nv.utils.windowResize(chart.update);
        chart.dispatch.on('stateChange', function (e) { nv.log('New State:', JSON.stringify(e)); });
        return chart;
    });


    function randomData(groups, points) { //# groups,# points per group
        var data = [],
            shapes = ['circle'],
            random = d3.random.normal();

        for (i = 0; i < groups; i++) {
            data.push({
                key: 'Group ' + i,
                values: [],
                slope: Math.random() - .01,
                intercept: Math.random() - .5
            });

            for (var j = 0; j < points; j++) {
                data[i].values.push({
                    x: random(),
                    y: random(),
                    size: Math.random(),
                    shape: shapes[j % shapes.length]
                });
            }
        }
        return data;
    }

}
