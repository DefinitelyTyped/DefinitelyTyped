import { Counter, Gauge, Metric } from 'k6/metrics';

let metric: Metric;
let counter: Counter;
let gauge: Gauge;

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
counter = new Gauge('gauge'); // $ExpectError
