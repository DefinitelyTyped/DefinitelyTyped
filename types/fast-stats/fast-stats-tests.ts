
import faststats = require("fast-stats");
import Stats = faststats.Stats;

var s: Stats;
var n: number;
var nOrNull: number | null;
var ns: number[];
var buckets: faststats.Bucket[];

var stats: Stats = new Stats({ bucket_precision: 10 })
  .push(1, 2, 3)
  .push([1, 2, 3])
  .unshift(1, 2, 3);

n = stats.pop();
n = stats.shift();

stats.reset();

s = stats.copy();
s = stats.band_pass(1, 2);
s = stats.band_pass(1, 2, true);
s = stats.iqr();

n = stats.length;
n = stats.sum;
n = stats.sum_of_squares;
n = stats.sum_of_logs;
n = stats.sum_of_square_of_logs;
n = stats.zeroes;
nOrNull = stats.max;
nOrNull = stats.min;
n = stats.amean();
n = stats.gmean();
n = stats.median();
n = stats.percentile(1);
n = stats.stddev();
n = stats.gstddev();
n = stats.moe();
ns = stats.range();
buckets = stats.distribution();


