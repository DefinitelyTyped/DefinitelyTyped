import { Counter, Metric } from 'k6/metrics';

let metric: Metric;
let counter: Counter;

// Counter
new Counter(); // $ExpectError
counter = new Counter('counter');
new Counter('counter', 5); // $ExpectError
counter = new Counter('counter', true);
metric = new Counter('counter');
