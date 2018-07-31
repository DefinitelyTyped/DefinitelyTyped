namespace nvd3_test_parallelCoordinates {
    var chart;
    nv.addGraph(function () {

        chart = nv.models.parallelCoordinates()
            .dimensionNames(["economy (mpg)", "cylinders", "displacement (cc)", "power (hp)", "weight (lb)", "0-60 mph (s)", "year"])
            .dimensionFormats(["0.5f", "e", "g", "d", "", "%", "p"])
            .lineTension(0.85);


        d3.select('#chart1 svg')
            .datum(data())
            .call(chart);

        nv.utils.windowResize(chart.update);

        return chart;
    });

    function data() {
        return [
            {
                "name": "AMC Ambassador Brougham",
                "economy (mpg)": "13",
                "cylinders": "8",
                "displacement (cc)": "360",
                "power (hp)": "175",
                "weight (lb)": "3821",
                "0-60 mph (s)": "11",
                "year": "73"
            },
//skip to the end...
            {
                "name": "Volvo Diesel",
                "economy (mpg)": "30.7",
                "cylinders": "6",
                "displacement (cc)": "145",
                "power (hp)": "76",
                "weight (lb)": "3160",
                "0-60 mph (s)": "19.6",
                "year": "81"
            }
        ]
    }
}
