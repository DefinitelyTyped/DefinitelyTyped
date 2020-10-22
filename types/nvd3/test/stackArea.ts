
namespace nvd3_test_stackArea {
    nv.addGraph({
        generate: function () {
            var n = 10, // number of layers
                m = 200; // number of samples per layer

            //var data = stream_layers(n, m).map(function (data, i) {
            //    return {
            //        key: 'Stream' + i,
            //        values: data
            //    };
            //});
            var data: any;


            var width = nv.utils.windowSize().width;
            var height = nv.utils.windowSize().height;

            var chart = nv.models.stackedArea()
                .width(width)
                .height(height);

            var svg = d3.select('#chart svg').datum(data);
            svg.transition().duration(500).call(chart);
            return chart;
        },
        callback: function (graph: nv.StackedAreaChart) {

            graph.dispatch.on('tooltipShow', function (e) {
                var offsetElement = document.getElementById("chart"),
                    left = e.pos[0] + offsetElement.offsetLeft,
                    top = e.pos[1] + offsetElement.offsetTop,
                    formatterY = d3.format(",.2%"),
                    formatterX = function (d) {
                        return d3.time.format('%x')(new Date(d))
                    };

                var content = '<h3>' + e.series.key + '</h3>' +
                    '<p>' +
                    formatterY(graph.y()(e.point)) + ' at ' + formatterX(graph.x()(e.point)) +
                    '</p>';

                nv.tooltip.show([left, top], content);
            });

            graph.dispatch.on('tooltipHide', function (e) {
                nv.tooltip.cleanup();
            });

            nv.utils.windowResize(function () {
                var width = nv.utils.windowSize().width;
                var height = nv.utils.windowSize().height;

                graph.width(width).height(height);
                d3.select('#chart svg').call(graph);
            });
        }
    });

    /* Inspired by Lee Byron's test data generator. */
    function stream_layers(n, m, o) {
        if (arguments.length < 3) o = 0;
        function bump(a) {
            var x = 1 / (.1 + Math.random()),
                y = 2 * Math.random() - .5,
                z = 10 / (.1 + Math.random());
            for (var i = 0; i < m; i++) {
                var w = (i / m - y) * z;
                a[i] += x * Math.exp(-w * w);
            }
        }
        return d3.range(n).map(function () {
            var a = [], i;
            for (i = 0; i < m; i++) a[i] = o + o * Math.random();
            for (i = 0; i < 5; i++) bump(a);
            return a.map(stream_index);
        });
    }

    /* Another layer generator using gamma distributions. */
    function stream_waves(n, m) {
        return d3.range(n).map(function (i) {
            return d3.range(m).map(function (j) {
                var x = 20 * j / m - i / 3;
                return 2 * x * Math.exp(-.5 * x);
            }).map(stream_index);
        });
    }

    function stream_index(d, i) {
        return { x: i, y: Math.max(0, d) };
    }


}
