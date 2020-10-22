
namespace nvd3_test_discreteBarChart {
    var historicalBarChart = [
        {
            key: "Cumulative Return",
            values: [
                {
                    "label": "A",
                    "value": 29.765957771107
                },
                {
                    "label": "B",
                    "value": 0
                },
                {
                    "label": "C",
                    "value": 32.807804682612
                },
                {
                    "label": "D",
                    "value": 196.45946739256
                },
                {
                    "label": "E",
                    "value": 0.19434030906893
                },
                {
                    "label": "F",
                    "value": 98.079782601442
                },
                {
                    "label": "G",
                    "value": 13.925743130903
                },
                {
                    "label": "H",
                    "value": 5.1387322875705
                }
            ]
        }
    ];

    nv.addGraph(function () {
        var chart = nv.models.discreteBarChart()
            .x(function (d) { return d.label })
            .y(function (d) { return d.value })
            .staggerLabels(true)
            //.staggerLabels(historicalBarChart[0].values.length > 8)
            .showValues(true)
            .duration(250)
            .valueFormat(d3.format("d"))
            ;

        d3.select('#chart1 svg')
            .datum(historicalBarChart)
            .call(chart);

        nv.utils.windowResize(chart.update);
        return chart;
    });
}
