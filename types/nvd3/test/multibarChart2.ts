
namespace nvd3_test_multibarChart2 {
    //todo resolve stream_layers var test_data = stream_layers(3, 128, .1).map(function (data, i) {
    var test_data = [3, 128, .1].map(function (data, i) {
        return {
            key: (i == 1) ? 'Non-stackable Stream' + i : 'Stream' + i,
            nonStackable: (i == 1),
            values: data
        };
    });
    nv.addGraph({
        generate: function () {
            var width = nv.utils.windowSize().width,
                height = nv.utils.windowSize().height;

            var chart = nv.models.multiBarChart()
                .width(width)
                .height(height)
                .stacked(true)
                ;

            chart.dispatch.on('renderEnd', function () {
                console.log('Render Complete');
            });

            var svg = d3.select('#test1 svg').datum(test_data);
            console.log('calling chart');
            svg.transition().duration(0).call(chart);

            return chart;
        },
        callback: function (graph: nv.MultiBarChart) {
            nv.utils.windowResize(function () {
                var width = nv.utils.windowSize().width;
                var height = nv.utils.windowSize().height;
                graph.width(width).height(height);

                d3.select('#test1 svg')
                    .attr('width', width)
                    .attr('height', height)
                    .transition().duration(0)
                    .call(graph);

            });
        }
    });
}
