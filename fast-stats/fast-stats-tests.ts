
import faststats = require("fast-stats");
import Stats = faststats.Stats;

var s: Stats;
var n: number;
var ns: number[];
var buckets: faststats.Bucket[];

var stats: Stats = new Stats({ bucket_precision: 10 });

stats.push(1, 2, 3);
stats.push([1, 2, 3]);
stats.unshift(1, 2, 3);

n = stats.pop();
n = stats.shift();

stats.reset();

s = stats.copy();
s = stats.band_pass(1, 2);
s = stats.band_pass(1, 2, true);
s = stats.iqr();

n = stats.length;
n = stats.amean();
n = stats.gmean();
n = stats.median();
n = stats.percentile(1);
n = stats.stddev();
n = stats.gstddev();
n = stats.moe();
ns = stats.range();
buckets = stats.distribution();


