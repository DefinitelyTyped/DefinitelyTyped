/// <reference path="../d3/d3.d.ts" />
/// <reference path="nvd3.d.ts" />
namespace nvd3_test_parallelCoordinatesChart {
    var chart;
    function resetBrush() {
        chart.filters([]);
        chart.active([]);
        chart.displayBrush(true);
        d3.select("#resetBrushButton").style("visibility", "hidden");
        chart.update();
    }

    function resetSorting() {
        var dim = chart.dimensionData();
        dim.map(function (d) { return d.currentPosition = d.originalPosition; });
        dim.sort(function (a, b) { return a.originalPosition - b.originalPosition; });
        chart.dimensionData(dim);
        d3.select("#resetSortingButton").style("visibility", "hidden");
        chart.update();
    }

    nv.addGraph(function () {

        var dim = dimensions();
        chart = nv.models.parallelCoordinatesChart()
            .dimensionData(dim)
            .displayBrush(false)
            .lineTension(0.85);

        var data = mydata();
        d3.select('#test')
            .datum(data)
            .call(chart);

        nv.utils.windowResize(chart.update);

        chart.dispatch.on('brushEnd', function (e) {
            d3.select("#resetBrushButton").style("visibility", "visible");
        });

        chart.dispatch.on('dimensionsOrder', function (e, b) {
            if (b) {
                d3.select("#resetSortingButton").style("visibility", "visible");
            }
        });

        // update chart data values randomly
        setInterval(function () {
            data[0].values.P1 = Math.floor(Math.random() * 100).toString();
            chart.update();
        }, 4000);

        // update chart data dimension randomly
        setInterval(function () {
            var element = {
                key: "P7",
                format: "p",
                tooltip: "year",
            }
            if (dim.length === 7) {
                dim.splice(dim.indexOf(element), 1);
            } else {
                dim.push(element);
            }
            chart.dimensionData(dim);
            chart.update();
        }, 10000);

        return chart;
    });

    function dimensions() {
        return [
            {
                key: "P1",
                format: "0.5f",
                tooltip: "economy (mpg)",
            },
            {
                key: "P2",
                format: "e",
                tooltip: "cylinders",
            },
            {
                key: "P3",
                format: "g",
                tooltip: "displacement (cc)",
            },
            {
                key: "P4",
                format: "d",
                tooltip: "power (hp)",
            },
            {
                key: "P5",
                format: "",
                tooltip: "weight (lb)",
            },
            {
                key: "P6",
                format: "%",
                tooltip: "0-60 mph (s)",
            },
            {
                key: "P7",
                format: "p",
                tooltip: "year",
            }
        ];
    }

    function mydata() {
        return [
            {
                name: "Current design point",
                values: {
                    "P1": "13",
                    "P2": "8",
                    "P3": "360",
                    "P4": "175",
                    "P5": "3821",
                    "P6": "11",
                    "P7": "73"
                },
                color: "red",
                strokeWidth: 2
            },
            {
                name: "DP1",
                values: {
                    "P1": "15",
                    "P2": "8",
                    "P3": "390",
                    "P4": "190",
                    "P5": "3850",
                    "P6": "8.5",
                    "P7": "70"
                },
                color: "blue",
                strokeWidth: 1
            },
            {
                name: "DP2",
                values: {
                    "P1": "17",
                    "P2": "8",
                    "P3": "304",
                    "P4": "150",
                    "P5": "3672",
                    "P6": "11.5",
                    "P7": "72"
                },
                color: "blue",
                strokeWidth: 2
            },
            {
                name: "DP3",
                values: {
                    "P1": "20.2",
                    "P2": "6",
                    "P3": "232",
                    "P4": "",
                    "P5": "3265",
                    "P6": "18.2",
                    "P7": "79"
                },
                color: "blue",
                strokeWidth: 1
            },
            {
                name: "DP4",
                values: {
                    "P1": "18.1",
                    "P2": "6",
                    "P3": "258",
                    "P4": "120",
                    "P5": "3410",
                    "P6": "15.1",
                    "P7": "78"
                },
                color: "blue",
                strokeWidth: 1
            }
        ];
    }
}
