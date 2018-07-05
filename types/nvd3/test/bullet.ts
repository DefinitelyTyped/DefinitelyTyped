namespace nvd3_test_bullet {
    var width = 960,
        height = 55,
        margin = { top: 5, right: 40, bottom: 20, left: 120 };

    var chart = nv.models.bullet()
        .width(width - margin.right - margin.left)
        .height(height - margin.top - margin.bottom);

    var data = [
        { "title": "Revenue", "subtitle": "US$, in thousands", "ranges": [-150, -225, -300], "measures": [-220], "markers": [-250] }
    ];

    //TODO: to be consistent with other models, should be appending a g to an already made svg, not creating the svg element
    var vis = d3.select("#chart").selectAll("svg")
        .data(data)
        .enter().append("svg")
        .attr("class", "bullet nvd3")
        .attr("width", width)
        .attr("height", height);

    vis.transition().duration(1000).call(chart);

    var transition = function () {
        vis.datum(randomize);
        vis.transition().duration(1000).call(chart);
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
