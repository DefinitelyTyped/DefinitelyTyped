/// <reference path="../d3/d3.d.ts" />
/// <reference path="d3.cloud.layout.d.ts" />

  interface ICompTextSize{
    text:string;
    size:number;
    x?:number;
    y?:number;
    rotate?:number;
  }


  var fill = d3.scale.category20();
  d3.layout.cloud().size([300, 300])
      .words([
        "Hello", "world", "normally", "you", "want", "more", "words",
        "than", "this"].map(function(d:string) {
        return {text: d, size: 10 + Math.random() * 90};
      }))
      .padding(5)
      .rotate(function() { return ~~(Math.random() * 2) * 90; })
      .font("Impact")
      .fontSize(function(d:ICompTextSize) { return d.size; })
      .on("end", draw)
      .start();
  function draw(words:ICompTextSize[]) {
    d3.select("body").append("svg")
        .attr("width", 300)
        .attr("height", 300)
      .append("g")
        .attr("transform", "translate(150,150)")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d:ICompTextSize) { return d.size + "px"; })
        .style("font-family", "Impact")
        .style("fill", function(d:ICompTextSize, i:number) { return fill(i); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d:ICompTextSize) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d:ICompTextSize) { return d.text; });
  }