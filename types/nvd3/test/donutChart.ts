
namespace nvd3_test_donutChart {
    var testdata = [
        { key: "One", y: 5 },
        { key: "Two", y: 2 },
        { key: "Three", y: 9 },
        { key: "Four", y: 7 },
        { key: "Five", y: 4 },
        { key: "Six", y: 3 },
        { key: "Seven", y: 0.5 }
    ];

    var height = 350;
    var width = 350;

    var chart1;
    nv.addGraph(function () {
        var chart1 = nv.models.pieChart()
            .x(function (d) { return d.key })
            .y(function (d) { return d.y })
            .donut(true)
            .width(width)
            .height(height)
            .padAngle(.08)
            .cornerRadius(5)
            .id('donut1'); // allow custom CSS for this one svg

        chart1.title("100%");
        chart1.pie.donutLabelsOutside(true).donut(true);

        d3.select("#test1")
            .datum(testdata)
            .transition().duration(1200)
            .call(chart1);

        // LISTEN TO WINDOW RESIZE
        // nv.utils.windowResize(chart1.update);

        // LISTEN TO CLICK EVENTS ON SLICES OF THE PIE/DONUT
        // chart.pie.dispatch.on('elementClick', function() {
        //     code...
        // });

        // chart.pie.dispatch.on('chartClick', function() {
        //     code...
        // });

        // LISTEN TO DOUBLECLICK EVENTS ON SLICES OF THE PIE/DONUT
        // chart.pie.dispatch.on('elementDblClick', function() {
        //     code...
        // });

        // LISTEN TO THE renderEnd EVENT OF THE PIE/DONUT
        // chart.pie.dispatch.on('renderEnd', function() {
        //     code...
        // });

        // OTHER EVENTS DISPATCHED BY THE PIE INCLUDE: elementMouseover, elementMouseout, elementMousemove
        // @see nv.models.pie

        return chart1;

    });

    var chart2;
    nv.addGraph(function () {
        var chart2 = nv.models.pieChart()
            .x(function (d) { return d.key })
            .y(function (d) { return d.y })
            //.labelThreshold(.08)
            //.showLabels(false)
            .color(d3.scale.category20().range().slice(10))
            .width(width)
            .height(height)
            .donut(true)
            .id('donut2')
            .titleOffset(-30)
            .title("woot");

        // MAKES IT HALF CIRCLE
        chart2.pie
            .startAngle(function (d) { return d.startAngle / 2 - Math.PI / 2 })
            .endAngle(function (d) { return d.endAngle / 2 - Math.PI / 2 });

        d3.select("#test2")
            //.datum(historicalBarChart)
            .datum(testdata)
            .transition().duration(1200)
            .call(chart2);

        return chart2;
    });
}
