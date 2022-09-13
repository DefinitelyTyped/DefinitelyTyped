import * as stats from "stats-lite";
const rolls: number[] = [];

// $ExpectType number
stats.sum(rolls);
// $ExpectType number
stats.mean(rolls);
// $ExpectType number
stats.median(rolls);
// $ExpectType number
stats.mode(rolls);
// $ExpectType number
stats.variance(rolls);
// $ExpectType number
stats.stdev(rolls);
// $ExpectType number
stats.sampleStdev(rolls);
// $ExpectType number
stats.percentile(rolls, 0.85);
// $ExpectType number
stats.histogram(rolls, 10);
