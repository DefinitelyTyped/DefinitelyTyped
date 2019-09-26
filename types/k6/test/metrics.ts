import { Counter, Gauge, Metric, Rate, Trend } from 'k6/metrics';

let metric: Metric;
let counter: Counter;
let gauge: Gauge;
let rate: Rate;
let trend: Trend;

// Counter
new Counter(); // $ExpectError
counter = new Counter('counter');
new Counter('counter', 5); // $ExpectError
counter = new Counter('counter', true);
metric = new Counter('counter');
gauge = new Counter('counter'); // $ExpectError

// Gauge
new Gauge(); // $ExpectError
gauge = new Gauge('gauge');
new Gauge('gauge', 5); // $ExpectError
gauge = new Gauge('gauge', true);
metric = new Gauge('gauge');
rate = new Gauge('gauge'); // $ExpectError

// Rate
new Rate(); // $ExpectError
rate = new Rate('rate');
new Rate('rate', 5); // $ExpectError
rate = new Rate('rate', true);
metric = new Rate('rate');
trend = new Rate('rate'); // $ExpectError

// Trend
new Trend(); // $ExpectError
trend = new Trend('trend');
new Trend('trend', 5); // $ExpectError
trend = new Trend('trend', true);
metric = new Trend('trend');
counter = new Trend('trend'); // $ExpectError
