
namespace nvd3_test_monitoringChart {

    var testdata1 = [
        { key: "Updated", y: 0 },
        { key: "Pending", y: 100 }
    ];

    var arcRadius1 = [
        { inner: 0.6, outer: 1 },
        { inner: 0.65, outer: 0.95 }
    ];

    var colors = ["green", "gray"];

    var testdata2 = [
        { key: "One", y: 1 },
        { key: "Two", y: 1 },
        { key: "Three", y: 1 },
        { key: "Four", y: 1 },
        { key: "Five", y: 1 },
        { key: "Six", y: 1 },
        { key: "Seven", y: 1 }
    ];

    var arcRadius2 = [
        { inner: 0.9, outer: 1 },
        { inner: 0.8, outer: 1 },
        { inner: 0.7, outer: 1 },
        { inner: 0.6, outer: 1 },
        { inner: 0.5, outer: 1 },
        { inner: 0.4, outer: 1 },
        { inner: 0.3, outer: 1 }
    ];

    var testdata3 = [
        { key: "Updated", y: 80 },
        { key: "Pending", y: 20 }
    ];

    var arcRadius3 = [
        { inner: 0, outer: 1 },
        { inner: 0, outer: 0.8 }
    ];

    var height = 350;
    var width = 350;

    nv.addGraph(function () {
        var chart = nv.models.pieChart()
            .x(function (d) { return d.key })
            .y(function (d) { return d.y })
            .donut(true)
            .showLabels(false)
            .color(colors)
            .width(width)
            .height(height)
            .growOnHover(false)
            .arcsRadius(arcRadius1)
            .id('donut1'); // allow custom CSS for this one svg

        chart.title("0%");

        d3.select("#test1")
            .datum(testdata1)
            .transition().duration(1200)
            .attr('width', width)
            .attr('height', height)
            .call(chart);

        // update chart data values randomly
        setInterval(function () {
            if (testdata1[0].y < 100) {
                testdata1[0].y = testdata1[0].y + 1;
                testdata1[1].y = testdata1[1].y - 1;
            }
            else {
                testdata1[0].y = 0;
                testdata1[1].y = 100;
            }
            chart.title(testdata1[0].y + "%");
            chart.update();
        }, 4000);

        return chart;

    });

    nv.addGraph(function () {
        var chart = nv.models.pieChart()
            .x(function (d) { return d.key })
            .y(function (d) { return d.y })
            .donut(true)
            .width(width)
            .height(height)
            .arcsRadius(arcRadius2)
            .donutLabelsOutside(true)
            .labelSunbeamLayout(true)
            .id('donut2'); // allow custom CSS for this one svg

        d3.select("#test2")
            .datum(testdata2)
            .transition().duration(1200)
            .attr('width', width)
            .attr('height', height)
            .call(chart);

        return chart;

    });

    nv.addGraph(function () {
        var chart = nv.models.pieChart()
            .x(function (d) { return d.key })
            .y(function (d) { return d.y })
            .donut(true)
            .showLabels(true)
            .width(width)
            .height(height)
            .arcsRadius(arcRadius3)
            .donutLabelsOutside(true)
            .id('donut3'); // allow custom CSS for this one svg

        d3.select("#test3")
            .datum(testdata3)
            .transition().duration(1200)
            .attr('width', width)
            .attr('height', height)
            .call(chart);

        return chart;

    });

}
