/// <reference path="d3.d.ts" />

d3.selectAll("p").style("color", "white");
d3.select("body").style("background-color", "black");
d3.selectAll("p").style("color", function () {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
});
d3.selectAll("p").style("color", function (d, i) {
    return i % 2 ? "#fff" : "#eee";
});
d3.selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
    .style("font-size", function (d) { return d + "px"; });
d3.select("body").selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
  .enter().append("p")
    .text(function (d) { return "I’m number " + d + "!"; });
var p = d3.select("body").selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
    .text(String);
p.enter().append("p")
    .text(String);
p.exit().remove();
d3.select("body").transition()
    .style("background-color", "black");
d3.selectAll("circle").transition()
    .duration(750)
    .delay(function (d, i) { return i * 10; })
    .attr("r", function (d) { return Math.sqrt(d * scale); });

function testOrdinalScale() {
    var x = d3.scale.ordinal().range(["foo", "bar"]);
    x.domain([0, 1]);
    var result = x(0);

    var x = d3.scale.ordinal().domain(["a", "b", "c"]).rangePoints([120, 0]);
    var x = d3.scale.ordinal().domain(["a", "b", "c"]).rangePoints([120, 0], 1);

    var x = d3.scale.ordinal().domain(["a", "b", "c"]).rangeBands([120, 0]);
    var x = d3.scale.ordinal().domain(["a", "b", "c"]).rangeBands([120, 0], .2);
    var x = d3.scale.ordinal().domain(["a", "b", "c"]).rangeBands([120, 0], .2, .1);

    var x = d3.scale.ordinal().domain(["a", "b", "c"]).rangeRoundBands([0, 100]);
    var x = d3.scale.ordinal().domain(["a", "b", "c"]).rangeRoundBands([0, 100], .2);
    var x = d3.scale.ordinal().domain(["a", "b", "c"]).rangeRoundBands([120, 0], .2, .1);
}


function testKeys() {
    var x = d3.keys({ a: 1, b: 1 });

    function abc() {
        this.a = 1;
        this.b = 2;
    }
    var x = d3.keys(new abc());
}

function testSVGArc() {
    var a = d3.svg.arc().innerRadius(100).outerRadius(200);
    var a = d3.svg.arc().outerRadius(100).startAngle(0).endAngle(Math.PI);

    var f = function () => {
        return 42;
    }
    var a = d3.svg.arc().innerRadius(0).outerRadius(f).startAngle(f).endAngle(f() * 2)

    var str = a();
    var str = a({ outerRadius: 50 });
    var str = a.outerRadius(100)();
    var str = a.endAngle(Math.PI / 2)()
    var str = a({ startAngle: Math.PI / 2 });

    var c = d3.svg.arc().innerRadius(0).outerRadius(100).startAngle(0).endAngle(2 * Math.PI).centroid();
    var num = c[0];
}

function testPieLayout() {
    var p = d3.layout.pie().sort(null).value(function (d) { return d.value; });
    var data = [1, 2, 3, 4];
    var arcs = p(data);
}

//Example from http://bl.ocks.org/3887235
function testPieChart() {
    var width = 960,
    height = 500,
    radius = Math.min(width, height) / 2;

    var color = d3.scale.ordinal()
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    var arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    var pie = d3.layout.pie()
        .sort(null)
        .value(function (d) { return d.population; });

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    d3.csv("data.csv", function (error, data) {

        data.forEach(function (d) {
            d.population = +d.population;
        });

        var g = svg.selectAll(".arc")
            .data(pie(data))
          .enter().append("g")
            .attr("class", "arc");

        g.append("path")
            .attr("d", arc)
            .style("fill", function (d) { return color(d.data.age); });

        g.append("text")
            .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
            .attr("dy", ".35em")
            .style("text-anchor", "middle")
            .text(function (d) { return d.data.age; });

    });
}
