// Inspired by http://bl.ocks.org/mbostock/4061502

function iqr(k: number) {
  return function(d: any) {
    var q1 = d.quartiles[0],
        q3 = d.quartiles[2],
        iqr = (q3 - q1) * k;
    let i = -1,
        j = d.length;
    while (d[++i] < q1 - iqr);
    while (d[--j] > q3 + iqr);
    return [i, j];
  };
}

var chart = d3.box()
    .whiskers(iqr(1.5))
    .width(100)
    .height(100);

chart.domain([1, 30]);

d3.selectAll("sth.").call(chart.duration(1000));
