namespace nvd3_test_bulletChart {
    var width = 960,
        height = 80,
        margin = { top: 5, right: 40, bottom: 20, left: 120 };

    var chart = nv.models.bulletChart()
        .width(width - margin.right - margin.left)
        .height(height - margin.top - margin.bottom);

    var chart2 = nv.models.bulletChart()
        .width(width - margin.right - margin.left)
        .height(height - margin.top - margin.bottom);

    var data = [
        { "title": "Revenue", "subtitle": "US$, in thousands", "ranges": [150, 225, 300], "measures": [220], "markers": [250] },
        { "title": "Order Size", "subtitle": "US$, average", "ranges": [350, 500, 600], "measures": [100], "markers": [550] },
        { "title": "Satisfaction", "subtitle": "out of 5", "ranges": [3.5, 4.25, 5], "measures": [3.2, 4.7], "markers": [4.4] }
    ];

    var dataWithLabels = [{
        "title": "Revenue",
        "subtitle": "US$, in thousands",
        "ranges": [150, 225, 300],
        "measures": [220],
        "markers": [250, 100],
        "markerLabels": ['Target Inventory', 'Low Inventory'],
        "rangeLabels": ['Maximum Inventory', 'Average Inventory', 'Minimum Inventory'],
        "measureLabels": ['Current Inventory']
    }];

    //TODO: to be consistent with other models, should be appending a g to an already made svg, not creating the svg element
    var vis = d3.select("#chart").selectAll("svg")
        .data(data)
        .enter().append("svg")
        .attr("class", "bullet nvd3")
        .attr("width", width)
        .attr("height", height);

    vis.transition().duration(1000).call(chart);

    var vis2 = d3.select("#chart2").selectAll("svg")
        .data(dataWithLabels)
        .enter().append('svg')
        .attr('class', "bullet nvd3")
        .attr("width", width)
        .attr("height", height);

    vis2.transition().duration(1000).call(chart2);

    var transition = function () {
        vis.datum(randomize).transition().duration(1000).call(chart);
        vis2.datum(randomize).transition().duration(1000).call(chart2);
    };

    function randomize(d) {
        if (!d.randomizer) d.randomizer = randomizer(d);
        d.ranges = d.ranges.map(d.randomizer);
        d.markers = d.markers.map(d.randomizer);
        d.measures = d.measures.map(d.randomizer);
        return d;
    }

    function randomizer(d) {
        var k = d3.max(d.ranges) * .2;
        return function (d) {
            return Math.max(0, d + k * (Math.random() - .5));
        };
    }

    d3.select('body').on('click', transition);
}
