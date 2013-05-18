/// <reference path="../d3.d.ts" />
/// <reference path="d3.superformula.d.ts" />

function superformula() {
    var size = 1000;

    var x = d3.scale.ordinal()
        .domain(d3.superformulaTypes)
        .rangePoints([0, 960], 1);

    var svg = d3.select("body").append("svg")
        .attr("width", 960)
        .attr("height", 500);

    var small = d3.superformula()
        .type(function (d) { return d; } )
        .size(size);

    var big = d3.superformula()
        .type("square")
        .size(size * 50)
        .segments(360);

    svg.selectAll("a")
        .data(d3.superformulaTypes)
        .enter().append("a")
        .attr("xlink:title", String)
        .attr("transform", function (d, i) { return "translate(" + x(d) + ",40)"; } )
        .append("path")
        .attr("class", "small")
        .attr("d", small)
        .on("mousedown", function () { d3.select(this).style("fill", "aliceblue"); } )
        .on("mouseup", function () { d3.select(this).style("fill", null); } )
        .on("click", function (d) { d3.select(".big").transition().duration(500).attr("d", big.type(d)); } );

    svg.append("path")
        .attr("class", "big")
        .attr("transform", "translate(450,250)")
        .attr("d", big);
}