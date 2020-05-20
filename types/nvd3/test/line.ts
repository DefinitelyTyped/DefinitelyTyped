
namespace nvd3_test_line {
    nv.addGraph({
        generate: function () {
            var width = nv.utils.windowSize().width - 40,
                height = nv.utils.windowSize().height - 40;

            var chart = nv.models.line()
                .width(width)
                .height(height)
                .margin({ top: 20, right: 20, bottom: 20, left: 20 });

            chart.dispatch.on('renderEnd', function () {
                console.log('render complete');
            });

            d3.select('#test1')
                .attr('width', width)
                .attr('height', height)
                .datum(sinAndCos())
                .call(chart);

            return chart;
        },
        callback: function (graph: any) {
            window.onresize = function () {
                var width = nv.utils.windowSize().width - 40,
                    height = nv.utils.windowSize().height - 40,
                    margin = graph.margin();

                if (width < margin.left + margin.right + 20)
                    width = margin.left + margin.right + 20;

                if (height < margin.top + margin.bottom + 20)
                    height = margin.top + margin.bottom + 20;

                graph.width(width).height(height);

                d3.select('#test1')
                    .attr('width', width)
                    .attr('height', height)
                    .call(graph);
            };
        }
    });

    function sinAndCos() {
        var sin = [],
            cos = [];

        for (var i = 0; i < 100; i++) {
            sin.push({ x: i, y: Math.sin(i / 10) });
            cos.push({ x: i, y: .5 * Math.cos(i / 10) });
        }

        return [
            {
                values: sin,
                key: "Sine Wave",
                color: "#ff7f0e"
            },
            {
                values: cos,
                key: "Cosine Wave",
                color: "#2ca02c",
                strokeWidth: 3
            }
        ];
    }

}
