import { Counter, Gauge, Metric, Rate, Trend } from 'k6/metrics';

let metric: Metric;
let counter: Counter;
let gauge: Gauge;
let rate: Rate;
let trend: Trend;

// Counter
// @ts-expect-error
new Counter();
counter = new Counter('counter');
counter.name; // $ExpectType string
// @ts-expect-error
new Counter('counter', 5);
counter = new Counter('counter', true);
metric = new Counter('counter');
// @ts-expect-error
gauge = new Counter('counter');

// Gauge
// @ts-expect-error
new Gauge();
gauge = new Gauge('gauge');
gauge.name; // $ExpectType string
// @ts-expect-error
new Gauge('gauge', 5);
gauge = new Gauge('gauge', true);
metric = new Gauge('gauge');
// @ts-expect-error
rate = new Gauge('gauge');

// Rate
// @ts-expect-error
new Rate();
rate = new Rate('rate');
rate.name; // $ExpectType string
// @ts-expect-error
new Rate('rate', 5);
rate = new Rate('rate', true);
metric = new Rate('rate');
// @ts-expect-error
trend = new Rate('rate');

// Trend
// @ts-expect-error
new Trend();
trend = new Trend('trend');
trend.name; // $ExpectType string
// @ts-expect-error
new Trend('trend', 5);
trend = new Trend('trend', true);
metric = new Trend('trend');
// @ts-expect-error
counter = new Trend('trend');
